import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { client } from "../lib/contentfulClient";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import type { Document } from "@contentful/rich-text-types";

interface Testimonial {
  id: string;
  name: string;
  text: string;
  image: string;
}

interface TestimonialFields {
  name: string;
  description: Document;
  image: {
    fields: {
      file: { url: string };
    };
  };
}

export default function TestimonialCarousel() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch data from Contentful
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await client.getEntries({
          content_type: "testimonals", // matches your JSON id
          order: ["-sys.createdAt"], // latest first
        });

        const mapped: Testimonial[] = res.items.map((item) => {
          const fields = item.fields as unknown as TestimonialFields;
          return {
            id: item.sys.id,
            name: fields.name,
            text: documentToPlainTextString(fields.description),
            image: `https:${fields.image.fields.file.url}?w=400&h=400&fit=thumb`,
          };
        });

        setTestimonials(mapped);
      } catch (err) {
        console.error("Error fetching testimonials:", err);
      }
    };

    fetchTestimonials();
  }, []);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) =>
      testimonials.length > 0 ? (prev === testimonials.length - 1 ? 0 : prev + 1) : 0
    );
  }, [testimonials.length]);

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      testimonials.length > 0 ? (prev === 0 ? testimonials.length - 1 : prev - 1) : 0
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-advance every 8s
  useEffect(() => {
    if (testimonials.length === 0) return;
    const interval = setInterval(nextTestimonial, 8000);
    return () => clearInterval(interval);
  }, [testimonials, nextTestimonial]);

  if (testimonials.length === 0) {
    return (
      <div className="w-full max-w-6xl mx-auto px-4 py-16 text-center text-gray-500">
        Loading testimonials...
      </div>
    );
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <>
    <div className="w-full max-w-6xl mx-auto px-4 py-16 bg-gray-50">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
        DOM Testimonials.
      </h2>

      {/* Testimonial Content */}
      <div className="relative">
        {/* Arrows */}
        <button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>

        {/* Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mx-4 md:mx-16 transition-all duration-500">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            <div className="flex-shrink-0">
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-lg shadow-md"
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                {currentTestimonial.name}
              </h3>
              <blockquote className="text-gray-600 text-lg leading-relaxed">
                "{currentTestimonial.text}"
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-12 space-x-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToTestimonial(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300 ${
              index === currentIndex
                ? "bg-gray-800 scale-110"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
    {/* Divider line at the bottom */}
    <div className="mt-16 border-t border-gray-300"></div>
    </>
  );
}
