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

type HeroButton = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};

type Slide = {
  id: number;
  title: string;
  subtitle?: string;
  schedule?: string;
  times?: string;
  img?: string;
  details?: { label: string; value: string }[];
  services?: { title: string; time: string }[];
  countries?: { name: string; flag: string }[];
  buttons?: HeroButton[];
};

const slides: Slide[] = [
  {
    id: 1,
    title: "Grace Hour: Strictly Prophetic",
    subtitle: "With Apostle David Owusu (IFP)",
    schedule: "Monday to Sunday",
    times:
      "10.00pm (EAT), 9.00pm (SAST), 8.00pm (BST), 7.00pm (GMT), 3.00pm (EDT), 2.00pm (CDT)",
    img: graceHourImage,
    buttons: [
      { label: "Join Live", href: "https://zoom.us/j/3091650498", variant: "primary" },
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
      { label: "Join Live", href: "https://zoom.us/j/3091650498", variant: "primary" },
      { label: "Find out more", href: "/about", variant: "secondary" },
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

const buttonVariants: Record<HeroButton["variant"], string> = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-white/10 text-white ring-1 ring-white/40 hover:bg-white/20",
};

const HeroButtons = ({ buttons, align = "center" }: { buttons: HeroButton[]; align?: "center" | "start" }) => (
  <div
    className={`flex flex-col sm:flex-row gap-3 pt-2 ${
      align === "center" ? "justify-center" : "justify-center lg:justify-start"
    }`}
  >
    {buttons.map((btn, i) => {
      const base =
        "inline-flex items-center justify-center px-7 py-3 rounded-full text-sm sm:text-base font-semibold shadow-lg transition-all duration-200 hover:-translate-y-0.5";
      const cls = `${base} ${buttonVariants[btn.variant]}`;
      return btn.href.startsWith("/") ? (
        <Link key={i} to={btn.href} className={cls}>
          {btn.label}
        </Link>
      ) : (
        <a
          key={i}
          href={btn.href}
          className={cls}
          target={btn.href.startsWith("http") ? "_blank" : undefined}
          rel={btn.href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          {btn.label}
        </a>
      );
    })}
  </div>
);

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
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://live.staticflickr.com/65535/54759275817_f60450ea78_z.jpg)",
        }}
      />
      {/* Gradient overlay for consistent, clean contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />

      {/* Slides */}
      <div className="relative z-20 min-h-screen">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100 z-20" : "pointer-events-none opacity-0 z-10"
            }`}
          >
            <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 pt-24 pb-28 sm:pt-28">
              {/* Slide 1 — Grace Hour */}
              {slide.id === 1 && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                  <div className="order-2 lg:order-1 text-center lg:text-left space-y-5">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight drop-shadow-md">
                      {slide.title}
                    </h1>
                    {slide.subtitle && (
                      <p className="text-sm sm:text-base lg:text-lg font-medium uppercase tracking-wide text-white/80">
                        {slide.subtitle}
                      </p>
                    )}
                    {slide.schedule && (
                      <p className="text-base sm:text-lg font-bold uppercase tracking-wide text-yellow-300">
                        {slide.schedule}
                      </p>
                    )}
                    {slide.times && (
                      <div className="rounded-2xl bg-white/10 backdrop-blur-md ring-1 ring-white/15 p-4 sm:p-5 max-w-xl mx-auto lg:mx-0">
                        <p className="text-sm sm:text-base leading-relaxed text-white/90">
                          {slide.times}
                        </p>
                      </div>
                    )}
                    {slide.buttons && <HeroButtons buttons={slide.buttons} align="start" />}
                  </div>

                  {slide.img && (
                    <div className="order-1 lg:order-2 flex justify-center">
                      <div className="rounded-2xl bg-white/10 backdrop-blur-md ring-1 ring-white/20 p-2 shadow-2xl w-full max-w-[360px] lg:max-w-[440px]">
                        <img
                          src={slide.img}
                          alt={slide.title}
                          className="w-full aspect-[4/3] object-contain rounded-xl bg-white/5"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Slide 2 — Global Online Service */}
              {slide.id === 2 && (
                <div className="text-center space-y-6 max-w-4xl mx-auto">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight drop-shadow-md">
                    {slide.title}
                  </h1>
                  {slide.subtitle && (
                    <p className="text-sm sm:text-base lg:text-lg font-medium uppercase tracking-wide text-white/80">
                      {slide.subtitle}
                    </p>
                  )}

                  {slide.details && (
                    <div className="flex flex-wrap gap-3 justify-center">
                      {slide.details.map((detail, i) => (
                        <div
                          key={i}
                          className="rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/20 px-5 py-2 text-sm sm:text-base text-white"
                        >
                          <span className="font-medium text-white/70">{detail.label}:</span>{" "}
                          <span className="font-bold">{detail.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {slide.services && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto text-left">
                      {slide.services.map((service, i) => (
                        <div
                          key={i}
                          className="rounded-2xl bg-white/10 backdrop-blur-md ring-1 ring-white/15 p-5"
                        >
                          <h3 className="text-sm font-bold uppercase tracking-wide text-yellow-300 mb-2">
                            {service.title}
                          </h3>
                          <p className="text-sm leading-relaxed text-white/90">{service.time}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {slide.buttons && <HeroButtons buttons={slide.buttons} />}
                </div>
              )}

              {/* Slide 3 — Global Presence */}
              {slide.id === 3 && slide.countries && (
                <div className="text-center space-y-8">
                  <div className="space-y-3">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight drop-shadow-md">
                      {slide.title}
                    </h1>
                    {slide.subtitle && (
                      <p className="text-sm sm:text-base lg:text-lg font-medium text-white/80 max-w-2xl mx-auto">
                        {slide.subtitle}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-6 max-w-4xl mx-auto">
                    {slide.countries.map((country, i) => (
                      <div key={i} className="flex flex-col items-center gap-2 group">
                        <div className="w-full overflow-hidden rounded-lg ring-1 ring-white/25 shadow-md transition-transform duration-200 group-hover:scale-105">
                          <img
                            src={country.flag}
                            alt={country.name}
                            className="w-full aspect-[3/2] object-cover"
                            loading="lazy"
                          />
                        </div>
                        <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-wide text-white/85 leading-tight">
                          {country.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === current ? "w-8 bg-white" : "w-2.5 bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
        className="hidden md:flex absolute left-5 top-1/2 -translate-y-1/2 z-30 h-11 w-11 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/25 text-white backdrop-blur-md transition-colors hover:bg-white/20"
        aria-label="Previous slide"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        className="hidden md:flex absolute right-5 top-1/2 -translate-y-1/2 z-30 h-11 w-11 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/25 text-white backdrop-blur-md transition-colors hover:bg-white/20"
        aria-label="Next slide"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
};

export default Hero;
