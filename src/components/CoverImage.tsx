import { useState, useEffect } from "react";

interface CoverProps {
  title: string;
  subtitle?: string;
  images: string[]; // can be 1 or many
  interval?: number; // optional, default 5s
}

const CoverImage = ({ title, subtitle, images, interval = 5000 }: CoverProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasMultiple = images.length > 1;

  // Auto-slide effect only if there are multiple images
  useEffect(() => {
    if (!hasMultiple) return;
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval, hasMultiple]);

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {/* Slides */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Text Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-2">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl max-w-2xl">{subtitle}</p>
        )}
      </div>

      {/* Indicators - only if multiple images */}
      {hasMultiple && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CoverImage;
