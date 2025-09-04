import { useParams, Link } from "react-router-dom";
import * as Institutes from "../components/Institute";

const DomInstituteDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  // Convert slug ("school-purpose") -> "SchoolPurpose"
  const formattedSlug = slug
    ?.split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

  // Look up the matching component in Institutes exports
  const InstituteComponent = formattedSlug
    ? (Institutes as Record<string, React.ComponentType>)[formattedSlug]
    : null;

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
