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
      className="relative w-full overflow-hidden min-h-screen max-w-full"
      style={{
        backgroundImage: `url(https://live.staticflickr.com/65535/54759275817_f60450ea78_z.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Slides Container */}
      <div className="relative h-full min-h-screen w-full pt-14 sm:pt-16 lg:pt-18">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100 z-20" : "opacity-0 z-10"
            }`}
          >
            {/* Content Container */}
            <div className="h-full min-h-[calc(100vh-3.5rem)] sm:min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-4.5rem)] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 relative z-20">
              
              {/* Global Presence Slide */}
              {slide.countries ? (
                <div className="text-center w-full max-w-7xl mx-auto px-4">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-3 sm:mb-4 lg:mb-6 drop-shadow-2xl">
                    {slide.title}
                  </h1>
                  {slide.subtitle && (
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-white uppercase tracking-wide mb-6 sm:mb-8 lg:mb-10 drop-shadow-lg">
                      {slide.subtitle}
                    </p>
                  )}
                  
                  {/* Countries Grid - Fully Responsive */}
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-2 sm:gap-3 md:gap-4 lg:gap-6 max-w-6xl mx-auto">
                    {slide.countries.map((country, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center text-center group cursor-pointer"
                      >
                        <div className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl bg-white p-1">
                          <img
                            src={country.flag}
                            alt={country.name}
                            className="w-10 h-7 sm:w-14 sm:h-9 md:w-18 md:h-12 lg:w-22 lg:h-15 xl:w-26 xl:h-17 object-cover rounded"
                            loading="lazy"
                          />
                        </div>
                        <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs md:text-sm font-bold uppercase text-white leading-tight drop-shadow-md text-center">
                          {country.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) 
              
              /* Grace Hour Slide - Enhanced Responsive Layout */
              : slide.id === 1 ? (
                <div className="w-full max-w-7xl mx-auto px-2 sm:px-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center min-h-[calc(80vh-3.5rem)] lg:min-h-0">
                    {/* Left Side - Text Content */}
                    <div className="text-center lg:text-left space-y-3 sm:space-y-4 lg:space-y-6 order-2 lg:order-1 px-2 sm:px-0 pb-6 lg:pb-0">
                      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight drop-shadow-2xl">
                        {slide.title}
                      </h1>

                      {slide.subtitle && (
                        <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-white uppercase tracking-wide drop-shadow-lg">
                          {slide.subtitle}
                        </p>
                      )}

                      {slide.schedule && (
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold uppercase text-yellow-300 tracking-wide drop-shadow-lg">
                          {slide.schedule}
                        </p>
                      )}

                      {slide.times && (
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 lg:p-6 mx-2 sm:mx-0">
                          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white leading-relaxed drop-shadow-lg">
                            {slide.times}
                          </p>
                        </div>
                      )}

                      {slide.buttons && (
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center lg:justify-start pt-2 sm:pt-4 px-2 sm:px-0">
                          {slide.buttons.map((btn, i) => (
                            btn.href && btn.href.startsWith('/') ? (
                              <Link
                                key={i}
                                to={btn.href}
                                className={`px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-xl text-sm sm:text-base lg:text-lg font-bold shadow-xl transition-all duration-300 transform hover:scale-105 text-center ${btn.style}`}
                              >
                                {btn.label}
                              </Link>
                            ) : (
                              <a
                                key={i}
                                href={btn.href}
                                className={`px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-xl text-sm sm:text-base lg:text-lg font-bold shadow-xl transition-all duration-300 transform hover:scale-105 text-center ${btn.style}`}
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
                      <div className="flex justify-center items-center order-1 lg:order-2 mb-4 lg:mb-0">
                        <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px] xl:max-w-[480px]">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl z-10"></div>
                          <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20 shadow-2xl">
                            <img
                              src={slide.img}
                              alt={slide.title}
                              className="w-full h-auto object-contain rounded-xl aspect-[4/3] bg-white/5"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) 
              
              /* Sunday Service Slide - Enhanced Layout */
              : (
                <div className="w-full max-w-7xl mx-auto px-2 sm:px-0">
                  <div className="text-center space-y-4 sm:space-y-6 lg:space-y-8">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight drop-shadow-2xl px-2">
                      {slide.title}
                    </h1>

                    {slide.subtitle && (
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-white uppercase tracking-wide drop-shadow-lg px-2">
                        {slide.subtitle}
                      </p>
                    )}

                    {/* Meeting Details */}
                    {slide.details && (
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center px-4">
                        {slide.details.map((detail, i) => (
                          <div key={i} className="bg-white/95 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-3 rounded-lg shadow-lg w-full sm:w-auto max-w-xs">
                            <span className="text-xs sm:text-sm md:text-base font-bold text-gray-800 block text-center">
                              {detail.label}: <span className="text-blue-600">{detail.value}</span>
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Service Times */}
                    {slide.services && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto px-4">
                        {slide.services.map((service, i) => (
                          <div key={i} className="bg-white/95 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-xl border border-white/20">
                            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2 sm:mb-3">
                              {service.title}
                            </h3>
                            <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                              {service.time}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Action Buttons */}
                    {slide.buttons && (
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 sm:pt-6 px-4 pb-6 sm:pb-0">
                        {slide.buttons.map((btn, i) => (
                          btn.href && btn.href.startsWith('/') ? (
                            <Link
                              key={i}
                              to={btn.href}
                              className={`px-4 sm:px-6 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-bold shadow-xl transition-all duration-300 transform hover:scale-105 min-w-[120px] sm:min-w-[140px] text-center ${btn.style}`}
                            >
                              {btn.label}
                            </Link>
                          ) : (
                            <a
                              key={i}
                              href={btn.href}
                              className={`px-4 sm:px-6 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-bold shadow-xl transition-all duration-300 transform hover:scale-105 min-w-[120px] sm:min-w-[140px] text-center ${btn.style}`}
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
      <div className="absolute bottom-2 sm:bottom-4 lg:bottom-6 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex space-x-2 sm:space-x-3 bg-black/40 backdrop-blur-sm rounded-full px-3 py-2 shadow-lg">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full transition-all duration-300 ${
                index === current
                  ? "bg-white shadow-lg scale-110"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Navigation Arrows - Hidden on mobile to avoid interference with touch gestures */}
      <div className="hidden md:block">
        <button
          onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-3 lg:left-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 lg:p-1 rounded-full transition-all duration-300 shadow-lg"
          aria-label="Previous slide"
        >
          <svg className="w-2 h-2 lg:w-3 lg:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
          className="absolute right-3 lg:right-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 lg:p-1 rounded-full transition-all duration-300 shadow-lg"
          aria-label="Next slide"
        >
          <svg className="w-2 h-2 lg:w-3 lg:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;