import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "../lib/contentfulClient";
import type {
  Entry,
  EntryCollection,
  EntryFieldTypes,
  EntrySkeletonType,
} from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type { Document } from "@contentful/rich-text-types";

interface DomInstituteSkeleton extends EntrySkeletonType {
  contentTypeId: "domInstitute";
  fields: {
    title: EntryFieldTypes.Symbol;
    description: EntryFieldTypes.RichText;
  };
}

const DomInstituteComponent = () => {
  const [institutes, setInstitutes] = useState<Entry<DomInstituteSkeleton>[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    client
      .getEntries<DomInstituteSkeleton>({
        content_type: "domInstitute",
        include: 2,
        order: ["-sys.createdAt"], // newest first
      })
      .then((response: EntryCollection<DomInstituteSkeleton>) => {
        if (!isMounted) return;
        setInstitutes(response.items ?? []);
      })
      .catch((e: unknown) => {
        if (!isMounted) return;
        const message = e instanceof Error ? e.message : "Failed to load institutes";
        setError(message);
      })
      .finally(() => {
        if (!isMounted) return;
        setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  // Map Contentful titles to local Institute component routes
  // This ensures that titles from Contentful CMS route to the correct local components
  const getInstituteSlug = (title: string) => {
    const titleMappings: Record<string, string> = {
      // Main Institute Programs
      "School of Strategic Planning": "school-of-strategic-planning",
      "School of Purpose": "school-of-purpose",
      "School of Purpose.": "school-of-purpose", // Handle period at end
      "School of Deliverance": "school-of-deliverance",
      "School of Prophets": "school-of-prophets",
      "Prophetic School": "prophetic-school",

      // Alternative variations that might come from Contentful
      "Strategic Planning": "school-of-strategic-planning",
      "Purpose": "school-of-purpose",
      "Purpose.": "school-of-purpose", // Handle period at end
      "Deliverance": "school-of-deliverance",
      "Prophets": "school-of-prophets",
      "Prophetic": "prophetic-school",
      "School of Strategic": "school-of-strategic-planning",
      "Strategic School": "school-of-strategic-planning",
      "Purpose School": "school-of-purpose",
      "Deliverance School": "school-of-deliverance",
      "Prophets School": "school-of-prophets",
    };

    // Check if we have a direct mapping
    if (titleMappings[title]) {
      return titleMappings[title];
    }

    // Fallback to slug conversion for unmapped titles
    return title.toLowerCase().replace(/\s+/g, "-");
  };

  if (loading) {
    return (
      <div className="w-full h-48 flex items-center justify-center">
        <p className="text-gray-600">Loading institutes...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-48 flex items-center justify-center">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  if (institutes.length === 0) {
    return (
      <div className="w-full h-48 flex items-center justify-center">
        <p className="text-gray-600">No institutes found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {institutes.map((institute) => {
        const title = typeof institute.fields.title === 'string'
          ? institute.fields.title
          : String(institute.fields.title || '');
        const description = institute.fields.description as Document;

        return (
          <div
            key={institute.sys.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="p-6">
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {title}
              </h3>

              {/* Truncated description */}
              <div className="prose prose-sm text-gray-600 mb-4 line-clamp-3">
                {documentToReactComponents(description)}
              </div>

              {/* Read More -> goes to local InstituteDetail */}
              <Link
                to={`/institute/${getInstituteSlug(title)}`}
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300"
              >
                Read More
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DomInstituteComponent;
