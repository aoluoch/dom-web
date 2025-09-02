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
    <section 
      className="relative w-full overflow-hidden h-[88svh] sm:h-[92svh] md:h-screen"
      style={{
        backgroundImage: `url(https://live.staticflickr.com/65535/54759275817_f60450ea78_z.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100 z-20" : "opacity-0 z-10"
            }`}
          >
            {/* Content */}
            <div className="max-w-7xl mx-auto h-full flex flex-col justify-end px-4 sm:px-6 lg:px-8 xl:px-12">
              {/* Special layout for Global Presence slide */}
              {slide.countries ? (
                <div className="text-center pb-16 sm:pb-16 lg:pb-20">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6 drop-shadow-lg">
                    {slide.title}
                  </h1>
                  {slide.subtitle && (
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white uppercase tracking-wide mb-8 sm:mb-10 drop-shadow-lg">
                      {slide.subtitle}
                    </p>
                  )}
                  
                  {/* Countries Grid */}
                  <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-2 sm:gap-4 md:gap-5 max-w-5xl mx-auto">
                    {slide.countries.map((country, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center text-center group"
                      >
                        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl">
                          <img
                            src={country.flag}
                            alt={country.name}
                            className="w-12 h-9 sm:w-14 sm:h-10 md:w-16 md:h-12 lg:w-20 lg:h-14 xl:w-24 xl:h-16 object-cover"
                          />
                        </div>
                        <p className="mt-2 text-xs font-bold uppercase text-white leading-tight drop-shadow-md">
                          {country.name.replace("-", " ")}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : slide.id === 1 ? (
                /* Enhanced layout for Grace Hour slide */
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
                {/* Left Side - Text */}
                <div className="flex flex-col justify-center text-center lg:text-left max-w-3xl mx-auto px-4">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-3 sm:mb-4 drop-shadow-lg">
                    {slide.title}
                    </h1>

                    {slide.subtitle && (
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white uppercase tracking-wide mb-3 sm:mb-4 drop-shadow-lg">
                        {slide.subtitle}
                    </p>
                    )}

                    {slide.schedule && (
                    <p className="text-sm sm:text-base md:text-lg font-bold uppercase text-white tracking-wide mb-2 sm:mb-3 drop-shadow-lg">
                        {slide.schedule}
                    </p>
                    )}

                    {slide.times && (
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white leading-relaxed mb-6 sm:mb-8 drop-shadow-lg">
                        {slide.times}
                    </p>
                    )}

                    {slide.buttons && (
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8">
                        {slide.buttons.map((btn, i) => (
                        <a
                            key={i}
                            href={btn.href}
                            className={`px-4 sm:px-6 py-3 sm:py-3 rounded-lg text-sm sm:text-base font-semibold shadow-lg transition-all duration-200 ${btn.style}`}
                        >
                            {btn.label}
                        </a>
                        ))}
                    </div>
                    )}
                    </div>

                {/* Right Side - Grace Hour Image */}
                {slide.img && (
                    <div className="flex justify-center lg:justify-end items-center px-4">
                    <div className="relative w-full max-w-[300px] sm:max-w-[380px] md:max-w-[450px] lg:max-w-[520px] xl:max-w-[560px]">
                        <div className="absolute  rounded-xl blur-sm opacity-30"></div>
                        <img
                        src={slide.img}
                        alt={slide.title}
                        className="relative rounded-xl shadow-2xl w-full h-auto object-contain"
                        />
                    </div>
                    </div>
                )}
            </div>

              ) : (
                /* Enhanced layout for other slides */
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center ${slide.services ? 'pb-16 sm:pb-20 lg:pb-24' : ''}` }>
                  <div className="text-center lg:text-left">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight drop-shadow-lg">
                      {slide.title}
                    </h1>
                    {slide.subtitle && (
                      <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white uppercase tracking-wide drop-shadow-lg">
                        {slide.subtitle}
                      </p>
                    )}

                    {slide.schedule && (
                      <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg font-bold uppercase text-white tracking-wide drop-shadow-lg">
                        {slide.schedule}
                      </p>
                    )}

                    {slide.times && (
                      <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base lg:text-lg text-white leading-relaxed drop-shadow-lg">
                        {slide.times}
                      </p>
                    )}

                    {slide.details && (
                      <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-8 text-xs sm:text-sm font-bold uppercase text-white justify-center lg:justify-start drop-shadow-lg">
                        {slide.details.map((d, i) => (
                          <span key={i} className="whitespace-nowrap bg-white text-gray-800 px-3 py-1 rounded-lg">
                            {d.label}: {d.value}
                          </span>
                        ))}
                      </div>
                    )}

                    {slide.services && (
                      <div className="mt-5 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                        {slide.services.map((s, i) => (
                          <div key={i} className="text-center sm:text-left bg-white p-4 rounded-lg">
                            <h5 className="text-sm sm:text-base md:text-lg font-bold text-gray-800">{s.title}</h5>
                            <p className="text-xs sm:text-sm text-gray-600 mt-2">{s.time}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {slide.buttons && (
                      <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center lg:justify-start">
                        {slide.buttons.map((btn, i) => (
                          <a
                            key={i}
                            href={btn.href}
                            className={`px-5 sm:px-6 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold shadow-lg transition-all duration-200 ${btn.style}`}
                          >
                            {btn.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Image */}
                  {slide.img && (
                    <div className="flex justify-center items-center h-full mt-8 lg:mt-0">
                      <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
                        <div className="absolute -inset-2"></div>
                        <img
                          src={slide.img}
                          alt={slide.title}
                          className="relative rounded-xl shadow-2xl max-h-[320px] sm:max-h-[380px] md:max-h-[440px] lg:max-h-[500px] w-full object-cover"
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