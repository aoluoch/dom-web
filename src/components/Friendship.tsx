import React from 'react';
import { ArrowRight } from 'lucide-react';

const Friendship: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-purple-100 to-indigo-100 py-16 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
              Build friendships with others in your stage of life.
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Church is great, but don't let the experience end when the service does. 
              Our ministries meet in small groups outside of weekly services for fun 
              activities, community service and group Bible discussions.
            </p>
            
            <div className="pt-4">
              <a 
                href="#" 
                className="inline-flex items-center text-gray-800 font-medium text-lg hover:text-gray-600 transition-colors duration-200 group"
              >
                Explore our communities
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
              <img
                src="https://live.staticflickr.com/65535/54760310858_6d1999a932_h.jpg"
                alt="People sitting together in friendship"
                className="w-full h-full object-cover rounded-sm"
              />
              {/* Blue/teal overlay to match the image */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/60 to-blue-900/60 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Friendship;