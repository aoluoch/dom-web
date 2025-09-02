import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Use external flag images from a reliable CDN
const flagImages = {
  botswana: "https://flagcdn.com/w320/bw.jpg",
  canada: "https://flagcdn.com/w320/ca.jpg", 
  germany: "https://flagcdn.com/w320/de.jpg",
  ghana: "https://flagcdn.com/w320/gh.jpg",
  india: "https://flagcdn.com/w320/in.jpg",
  kenya: "https://flagcdn.com/w320/ke.jpg",
  nigeria: "https://flagcdn.com/w320/ng.jpg",
  sierraLeone: "https://flagcdn.com/w320/sl.jpg",
  southAfrica: "https://flagcdn.com/w320/za.jpg",
  stVincent: "https://flagcdn.com/w320/vc.jpg",
  uae: "https://flagcdn.com/w320/ae.jpg",
  uk: "https://flagcdn.com/w320/gb.jpg",
  us: "https://flagcdn.com/w320/us.jpg",
  zambia: "https://flagcdn.com/w320/zm.jpg",
  zimbabwe: "https://flagcdn.com/w320/zw.jpg",
};

// Grace hour image placeholder
const graceHourImage = "https://live.staticflickr.com/65535/54760431206_c1a082eeb8_n.jpg";

const slides = [
  {
    id: 1,
    title: "Grace Hour: Strictly Prophetic",
    subtitle: "With Apostle David Owusu (IFP)",
    schedule: "Monday to Sunday",
    times:
      "10.00pm (EAT), 9.00pm (SAST), 8.00pm (BST), 7.00pm (GMT), 3.00pm (EDT), 2.00pm (CDT)",
    img: graceHourImage,
    buttons: [
      {
        label: "Join Live",
        href: "https://zoom.us/j/3091650498",
        style: "bg-blue-500 hover:bg-blue-600 text-white",
      },
    ],
  },
  {
    id: 2,
    title: "Join our Global Online Service",
    subtitle: "Watch our Live Stream every Sunday",
    details: [
      { label: "Meeting ID", value: "3091650498" },
      { label: "Password", value: "DOMHOUR" },
    ],
    services: [
      {
        title: "MORNING SERVICE",
        time: "9.30am (EAT), 8.30am (SAST), 7.30am (BST), 6.30am (GMT), 2.30am (EDT), 1.30am (CDT)",
      },
      {
        title: "EVENING SERVICE", 
        time: "10.00pm (EAT), 9.00pm (SAST), 8.00pm (BST), 7.00pm (GMT), 3.00pm (EDT), 2.00pm (CDT)",
      },
    ],
    buttons: [
      {
        label: "Join Live",
        href: "https://zoom.us/j/3091650498",
        style: "bg-blue-500 hover:bg-blue-600 text-white",
      },
      {
        label: "Find out more →",
        href: "/about",
        style: "bg-white text-gray-800 border hover:bg-gray-100",
      },
    ],
  },
  {
    id: 3,
    title: "Global Presence",
    subtitle: "We are present in these countries. Expanding every day.",
    countries: [
      { name: "botswana", flag: flagImages.botswana },
      { name: "canada", flag: flagImages.canada },
      { name: "germany", flag: flagImages.germany },
      { name: "ghana", flag: flagImages.ghana },
      { name: "india", flag: flagImages.india },
      { name: "kenya", flag: flagImages.kenya },
      { name: "nigeria", flag: flagImages.nigeria },
      { name: "sierra leone", flag: flagImages.sierraLeone },
      { name: "south africa", flag: flagImages.southAfrica },
      { name: "st vincent", flag: flagImages.stVincent },
      { name: "united arab emirates", flag: flagImages.uae },
      { name: "united kingdom", flag: flagImages.uk },
      { name: "united states", flag: flagImages.us },
      { name: "zambia", flag: flagImages.zambia },
      { name: "zimbabwe", flag: flagImages.zimbabwe },
    ],
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 7s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="relative w-full overflow-hidden min-h-screen"
      style={{
        backgroundImage: `url(https://live.staticflickr.com/65535/54759275817_f60450ea78_z.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      {/* Slides Container */}
      <div className="relative h-full min-h-screen">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100 z-20" : "opacity-0 z-10"
            }`}
          >
            {/* Content Container */}
            <div className="h-full min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
              
              {/* Global Presence Slide */}
              {slide.countries ? (
                <div className="text-center w-full max-w-7xl mx-auto">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-3 sm:mb-5 lg:mb-6 drop-shadow-2xl">
                    {slide.title}
                  </h1>
                  {slide.subtitle && (
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white uppercase tracking-wide mb-6 sm:mb-8 lg:mb-10 drop-shadow-lg">
                      {slide.subtitle}
                    </p>
                  )}
                  
                  {/* Countries Grid - Fully Responsive */}
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
                    {slide.countries.map((country, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center text-center group cursor-pointer"
                      >
                        <div className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl bg-white p-1">
                          <img
                            src={country.flag}
                            alt={country.name}
                            className="w-12 h-8 sm:w-16 sm:h-10 md:w-20 md:h-12 lg:w-24 lg:h-16 xl:w-28 xl:h-18 object-cover rounded"
                            loading="lazy"
                          />
                        </div>
                        <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base font-bold uppercase text-white leading-tight drop-shadow-md text-center">
                          {country.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) 
              
              /* Grace Hour Slide - Enhanced Responsive Layout */
              : slide.id === 1 ? (
                <div className="w-full max-w-7xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
                    {/* Left Side - Text Content */}
                    <div className="text-center lg:text-left space-y-4 sm:space-y-6 order-2 lg:order-1">
                      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight drop-shadow-2xl">
                        {slide.title}
                      </h1>

                      {slide.subtitle && (
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white uppercase tracking-wide drop-shadow-lg">
                          {slide.subtitle}
                        </p>
                      )}

                      {slide.schedule && (
                        <p className="text-base sm:text-lg md:text-xl font-bold uppercase text-yellow-300 tracking-wide drop-shadow-lg">
                          {slide.schedule}
                        </p>
                      )}

                      {slide.times && (
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6">
                          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white leading-relaxed drop-shadow-lg">
                            {slide.times}
                          </p>
                        </div>
                      )}

                      {slide.buttons && (
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start pt-2 sm:pt-4">
                          {slide.buttons.map((btn, i) => (
                            btn.href && btn.href.startsWith('/') ? (
                              <Link
                                key={i}
                                to={btn.href}
                                className={`px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-bold shadow-xl transition-all duration-300 transform hover:scale-105 ${btn.style}`}
                              >
                                {btn.label}
                              </Link>
                            ) : (
                              <a
                                key={i}
                                href={btn.href}
                                className={`px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-bold shadow-xl transition-all duration-300 transform hover:scale-105 ${btn.style}`}
                                target={btn.href?.startsWith('http') ? '_blank' : undefined}
                                rel={btn.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                              >
                                {btn.label}
                              </a>
                            )
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Right Side - Grace Hour Image */}
                    {slide.img && (
                      <div className="flex justify-center items-center order-1 lg:order-2">
                        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                          <div className="absolute rounded-2xl"></div>
                          <img
                            src={slide.img}
                            alt={slide.title}
                            className="relative rounded-2xl shadow-2xl w-full h-auto object-cover max-h-[300px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[600px]"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) 
              
              /* Sunday Service Slide - Enhanced Layout */
              : (
                <div className="w-full max-w-7xl mx-auto">
                  <div className="text-center space-y-6 sm:space-y-8 lg:space-y-10">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight drop-shadow-2xl">
                      {slide.title}
                    </h1>
                    
                    {slide.subtitle && (
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white uppercase tracking-wide drop-shadow-lg">
                        {slide.subtitle}
                      </p>
                    )}

                    {/* Meeting Details */}
                    {slide.details && (
                      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center">
                        {slide.details.map((detail, i) => (
                          <div key={i} className="bg-white/90 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg">
                            <span className="text-sm sm:text-base md:text-lg font-bold text-gray-800">
                              {detail.label}: <span className="text-blue-600">{detail.value}</span>
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Service Times */}
                    {slide.services && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
                        {slide.services.map((service, i) => (
                          <div key={i} className="bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-xl border border-white/20">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                              {service.title}
                            </h3>
                            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                              {service.time}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Action Buttons */}
                    {slide.buttons && (
                      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-4 sm:pt-6">
                        {slide.buttons.map((btn, i) => (
                          btn.href && btn.href.startsWith('/') ? (
                            <Link
                              key={i}
                              to={btn.href}
                              className={`px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-bold shadow-xl transition-all duration-300 transform hover:scale-105 min-w-[140px] sm:min-w-[160px] ${btn.style}`}
                            >
                              {btn.label}
                            </Link>
                          ) : (
                            <a
                              key={i}
                              href={btn.href}
                              className={`px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-bold shadow-xl transition-all duration-300 transform hover:scale-105 min-w-[140px] sm:min-w-[160px] ${btn.style}`}
                              target={btn.href?.startsWith('http') ? '_blank' : undefined}
                              rel={btn.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                              {btn.label}
                            </a>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-3 sm:bottom-5 lg:bottom-6 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex space-x-1.5 sm:space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === current
                  ? "bg-white shadow-lg scale-110"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Navigation Arrows for larger screens */}
      <div className="hidden md:block">
        <button
          onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-3 lg:left-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-1.5 lg:p-2 rounded-full transition-all duration-300"
          aria-label="Previous slide"
        >
          <svg className="w-4 h-4 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
          className="absolute right-3 lg:right-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-1.5 lg:p-2 rounded-full transition-all duration-300"
          aria-label="Next slide"
        >
          <svg className="w-4 h-4 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;