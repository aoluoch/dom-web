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

  // Convert title -> slug (School Purpose -> school-purpose)
  const getInstituteSlug = (title: string) => {
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
        const title = institute.fields.title;
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
