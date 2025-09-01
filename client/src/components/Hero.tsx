import { useState, useEffect } from "react";

// Import flag images
import botswanaFlag from "../assets/flags/botswana.jpg";
import canadaFlag from "../assets/flags/canada.jpg";
import germanyFlag from "../assets/flags/germany.jpg";
import ghanaFlag from "../assets/flags/ghana.jpg";
import indiaFlag from "../assets/flags/india.jpg";
import kenyaFlag from "../assets/flags/kenya.jpg";
import nigeriaFlag from "../assets/flags/nigeria.jpg";
import sierraLeoneFlag from "../assets/flags/siera-leone.jpg";
import southAfricaFlag from "../assets/flags/south-Africa.jpg";
import stVincentFlag from "../assets/flags/st-vincent.jpg";
import uaeFlag from "../assets/flags/united-arab-emirates.jpg";
import ukFlag from "../assets/flags/united-kingdom.jpg";
import usFlag from "../assets/flags/united-states.jpg";
import zambiaFlag from "../assets/flags/zambia.jpg";
import zimbabweFlag from "../assets/flags/zimbabwe.jpg";

// Import grace hour image
import graceHourImage from "../assets/flags/grace hour.jpeg";

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
        href: "/about-dom",
        style: "bg-white text-gray-800 border hover:bg-gray-100",
      },
    ],
  },
  {
    id: 3,
    title: "Global Presence",
    subtitle: "We are present in these countries. Expanding every day.",
    countries: [
      { name: "botswana", flag: botswanaFlag },
      { name: "canada", flag: canadaFlag },
      { name: "germany", flag: germanyFlag },
      { name: "ghana", flag: ghanaFlag },
      { name: "india", flag: indiaFlag },
      { name: "kenya", flag: kenyaFlag },
      { name: "nigeria", flag: nigeriaFlag },
      { name: "sierra-leone", flag: sierraLeoneFlag },
      { name: "south-africa", flag: southAfricaFlag },
      { name: "st-vincent", flag: stVincentFlag },
      { name: "united-arab-emirates", flag: uaeFlag },
      { name: "united-kingdom", flag: ukFlag },
      { name: "united-states", flag: usFlag },
      { name: "zambia", flag: zambiaFlag },
      { name: "zimbabwe", flag: zimbabweFlag },
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
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Slides */}
      <div className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100 z-20" : "opacity-0 z-10"
            }`}
          >
            {/* Content */}
            <div className="max-w-7xl mx-auto h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 xl:px-12">
              {/* Special layout for Global Presence slide */}
              {slide.countries ? (
                <div className="text-center">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                    {slide.title}
                  </h1>
                  {slide.subtitle && (
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-700 uppercase tracking-wide mb-6 sm:mb-8">
                      {slide.subtitle}
                    </p>
                  )}
                  
                  {/* Countries Grid */}
                  <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-2 sm:gap-3 md:gap-4">
                    {slide.countries.map((country, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center text-center group"
                      >
                        <div className="relative overflow-hidden rounded shadow-md transition-transform duration-300 group-hover:scale-105">
                          <img
                            src={country.flag}
                            alt={country.name}
                            className="w-10 h-8 sm:w-12 sm:h-9 md:w-14 md:h-10 lg:w-16 lg:h-12 object-cover"
                          />
                        </div>
                        <p className="mt-1 text-xs font-bold uppercase text-gray-700 leading-tight">
                          {country.name.replace("-", " ")}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                /* Regular layout for other slides */
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 items-center">
                  <div className="text-center lg:text-left">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                      {slide.title}
                    </h1>
                    {slide.subtitle && (
                      <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-700 uppercase tracking-wide">
                        {slide.subtitle}
                      </p>
                    )}

                    {slide.schedule && (
                      <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg font-bold uppercase text-gray-800 tracking-wide">
                        {slide.schedule}
                      </p>
                    )}

                    {slide.times && (
                      <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                        {slide.times}
                      </p>
                    )}

                    {slide.details && (
                      <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm font-bold uppercase text-gray-800 justify-center lg:justify-start">
                        {slide.details.map((d, i) => (
                          <span key={i} className="whitespace-nowrap">
                            {d.label}: {d.value}
                          </span>
                        ))}
                      </div>
                    )}

                    {slide.services && (
                      <div className="mt-3 sm:mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        {slide.services.map((s, i) => (
                          <div key={i} className="text-center sm:text-left">
                            <h5 className="text-sm sm:text-base md:text-lg font-bold text-gray-900">{s.title}</h5>
                            <p className="text-xs sm:text-sm text-gray-600 mt-1">{s.time}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {slide.buttons && (
                      <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                        {slide.buttons.map((btn, i) => (
                          <a
                            key={i}
                            href={btn.href}
                            className={`px-4 sm:px-5 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold shadow transition-all duration-200 ${btn.style}`}
                          >
                            {btn.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Image */}
                  {slide.img && (
                    <div className="flex justify-center items-center h-full mt-6 lg:mt-0">
                      <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
                        <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg blur opacity-25"></div>
                        <img
                          src={slide.img}
                          alt={slide.title}
                          className="relative rounded-lg shadow-xl max-h-[300px] sm:max-h-[350px] md:max-h-[400px] lg:max-h-[450px] w-full object-cover"
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
