import { useParams, Link } from "react-router-dom";
import * as Institutes from "../components/Institute";

const DomInstituteDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  // Map URL slugs to Institute component names
  // This handles routing from URLs to the actual React components in /Institute folder
  const getComponentName = (slug: string | undefined): string | null => {
    if (!slug) return null;

    const slugMappings: Record<string, string> = {
      // Primary slug mappings
      "school-of-strategic-planning": "Strategic",
      "school-of-purpose": "SchoolPurpose",
      "school-of-purpose.": "SchoolPurpose", // Handle period at end
      "school-of-deliverance": "Deliverance",
      "school-of-prophets": "Prophets",
      "prophetic-school": "Prophets", // Map prophetic-school to Prophets component

      // Alternative slug variations
      "strategic-planning": "Strategic",
      "strategic": "Strategic",
      "purpose": "SchoolPurpose",
      "purpose.": "SchoolPurpose", // Handle period at end
      "deliverance": "Deliverance",
      "prophets": "Prophets",
      "prophetic": "Prophets",
      "school-strategic": "Strategic",
      "school-strategic-planning": "Strategic",
      "strategic-school": "Strategic",
      "purpose-school": "SchoolPurpose",
      "deliverance-school": "Deliverance",
      "prophets-school": "Prophets",
    };

    return slugMappings[slug] || null;
  };

  const componentName = getComponentName(slug);

  // Look up the matching component in Institutes exports
  const getInstituteComponent = (name: string | null): React.ComponentType | null => {
    if (!name) return null;

    const components: Record<string, React.ComponentType> = {
      Strategic: Institutes.Strategic,
      SchoolPurpose: Institutes.SchoolPurpose,
      Deliverance: Institutes.Deliverance,
      Prophets: Institutes.Prophets,
    };

    return components[name] || null;
  };

  const InstituteComponent = getInstituteComponent(componentName);

  if (!InstituteComponent) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-gray-600">Institute not found.</p>
        <Link to="/institute" className="text-blue-600 hover:underline">
          Back to Institutes
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link to="/institute" className="text-blue-600 hover:underline">
          ← Back to Institutes
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 md:p-8">
          {/* Render the matched Institute component */}
          <InstituteComponent />
        </div>
      </div>
    </div>
  );
};

export default DomInstituteDetail;
