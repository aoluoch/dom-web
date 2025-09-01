import { useEffect, useState } from "react";
import { createClient } from "contentful";
import { Video, ArrowRight } from "lucide-react";

// Contentful client
const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID as string,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN as string,
});

// Define type for Contentful fields
interface JoinLinkFields {
  title: string;
  description: any; // RichText JSON
  image: {
    fields: {
      file: { url: string };
      title: string;
    };
  };
  link: string;
}

function JoinLink() {
  const [data, setData] = useState<Entry<JoinLinkFields> | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await client.getEntries<JoinLinkFields>({
          content_type: "joiningLinkHome",
          limit: 1,
        });
        if (res.items.length > 0) {
          setData(res.items[0]);
        }
      } catch (error) {
        console.error("Error fetching data from Contentful:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Video Icon */}
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
              <Video className="w-8 h-8 text-white" />
            </div>

            {/* Heading */}
            <h1 className="text-4xl lg:text-3xl xl:text-3xl font-bold text-gray-900 leading-tight">
              {data.fields.title}
            </h1>

            {/* Body Text */}
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              {/* Since description is RichText JSON, we should render it properly */}
              {data.fields.description?.content?.map(
                (block: any, index: number) => {
                  if (block.nodeType === "paragraph") {
                    return (
                      <p key={index}>
                        {block.content
                          .map((c: any) => c.value)
                          .join(" ")}
                      </p>
                    );
                  }
                  return null;
                }
              )}
            </div>

            {/* Button */}
            <a
              href={data.fields.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200 cursor-pointer"
            >
              <ArrowRight className="w-5 h-5" />
              Join Us Live
            </a>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-[4/5] lg:aspect-[3/4] rounded-sm overflow-hidden">
              <img
                src={`https:${data.fields.image.fields.file.url}`}
                alt={data.fields.image.fields.title || "Event Image"}
                className="w-full h-[100%] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinLink;
