import { useState, useEffect } from "react";

/**
 * Props for the CoverImage component
 */
interface CoverImageProps {
  /** Main heading text displayed on the cover */
  title: string;
  
  /** Optional subtitle text displayed below the title */
  subtitle?: string;
  
  /** Array of image URLs for the slideshow. Can be a single image or multiple images */
  images: string[];
  
  /** Time in milliseconds between automatic slide transitions. Default: 5000ms (5 seconds) */
  interval?: number;
}

/**
 * CoverImage - A hero banner component with optional image slideshow functionality
 * 
 * Features:
 * - Displays a full-width hero banner with title and optional subtitle
 * - Supports single or multiple background images
 * - Auto-rotates through multiple images with smooth transitions
 * - Includes navigation indicators for manual slide selection
 * - Responsive design with mobile-optimized text sizes
 * - Dark overlay for better text readability
 * 
 * @example
 * // Single image
 * <CoverImage 
 *   title="Welcome" 
 *   subtitle="Join us today" 
 *   images={["/hero.jpg"]} 
 * />
 * 
 * @example
 * // Multiple images with custom interval
 * <CoverImage 
 *   title="Our Events" 
 *   images={["/event1.jpg", "/event2.jpg", "/event3.jpg"]} 
 *   interval={3000}
 * />
 */
const CoverImage = ({ 
  title, 
  subtitle, 
  images, 
  interval = 5000 
}: CoverImageProps) => {
  // Track the currently displayed image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Determine if slideshow functionality should be enabled
  const hasMultipleImages = images.length > 1;

  /**
   * Auto-advance slideshow effect
   * Only runs when multiple images are provided
   * Cycles through images at the specified interval
   */
  useEffect(() => {
    // Skip auto-advance for single images
    if (!hasMultipleImages) return;
    
    // Set up interval timer for automatic slide transitions
    const slideTimer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    
    // Cleanup: clear interval when component unmounts or dependencies change
    return () => clearInterval(slideTimer);
  }, [images.length, interval, hasMultipleImages]);

  /**
   * Handle manual slide navigation via indicator buttons
   */
  const navigateToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div 
      className="relative h-[600px] w-full overflow-hidden"
      role="banner"
      aria-label="Page header with background slideshow"
    >
      {/* Background Image Slideshow Container */}
      <div className="absolute inset-0">
        {images.map((imageUrl, index) => {
          const isActive = index === currentImageIndex;
          
          return (
            <div
              key={`slide-${index}`}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${imageUrl})` }}
              role="img"
              aria-label={`Background image ${index + 1} of ${images.length}`}
              aria-hidden={!isActive}
            />
          );
        })}
        
        {/* Dark Overlay - Improves text readability over images */}
        <div 
          className="absolute inset-0 bg-black/50" 
          aria-hidden="true"
        />
      </div>

      {/* Text Content Overlay */}
      <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-2">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>

      {/* Slide Navigation Indicators - Only shown for multiple images */}
      {hasMultipleImages && (
        <div 
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"
          role="group"
          aria-label="Slideshow navigation"
        >
          {images.map((_, index) => {
            const isActive = index === currentImageIndex;
            
            return (
              <button
                key={`indicator-${index}`}
                onClick={() => navigateToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  isActive ? "bg-white" : "bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={isActive ? "true" : "false"}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CoverImage;
