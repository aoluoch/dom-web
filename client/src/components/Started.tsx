import React from "react";
import { Link } from "react-router-dom";

const Started: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay + image */}
      <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 140, 0, 0.25), rgba(255, 20, 147, 0.25)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
          }}
      >
        {/* Animated background elements for depth */}
          <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-yellow-300 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-orange-300 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

          {/* Subtle dark overlay for better text readability (reduced opacity) */}
          <div className="absolute inset-0"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 leading-tight">
          <span className="block">Not sure where to begin?</span>
          <span className="block">Start here.</span>
        </h1>

        {/* Description text */}
        <p className="text-lg sm:text-xl lg:text-2xl text-white text-opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Visit our First Steps page to get an overview of all the ways to get involved with DOM.
        </p>

        {/* Get Started button */}
        <Link
          to="/register"
          className="inline-flex items-center justify-center px-8 py-2 text-md font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg hover:shadow-xl transition-all"
        >
          Get Started
        </Link>
      </div>

      {/* Decorative elements for mobile */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent opacity-20 md:hidden"></div>
    </section>
  );
};

export default Started;
