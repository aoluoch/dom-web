import React from "react";
import { Youtube, ArrowRight } from "lucide-react";

const Sermon: React.FC = () => {
  return (
    <div className="bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Left Section */}
          <div className="w-full lg:w-1/3 p-6 sm:p-8 bg-gray-50">
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  YOUTUBE SERMON
                </p>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 leading-tight">
                  The Ten Deceptions Of The Devil – DAY 8
                </h2>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-700 mb-3">
                  Subscribe:
                </p>
                <a href="https://youtube.com/@prophetdavidowusu4328?si=DIMrmud1CV603IPA" //replace with your channel link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
                    >
                    <Youtube className="w-6 h-6 text-white" />
                </a>

              </div>
            </div>
          </div>

          {/* Center Video Section */}
          <div className="w-full lg:flex-1 p-4">
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/y_UVGBUMSLo"
                title="PROPHET DAVID OWUSU | TEN 10 DECEPTIONS OF THE DEVIL"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/4 p-6 sm:p-8 bg-gray-50 flex flex-col justify-center">
            <div className="space-y-4 text-center lg:text-left">
              <p className="text-sm font-medium text-gray-600">More Episodes</p>
              <a
                href="https://youtu.be/y_UVGBUMSLo?si=UX5ycEZGkaeVSk6J" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-gray-800 font-semibold hover:text-gray-900 transition-colors group"
                >
                <span>Go To Sermon</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sermon;
