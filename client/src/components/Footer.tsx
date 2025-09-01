
import { Facebook, Instagram, Youtube, Phone, MessageCircle, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div className="mb-12 flex items-center">
            <img 
                src="https://live.staticflickr.com/65535/54759772729_19d90458b3_m.jpg"
                alt="David Owusu Ministries Logo" 
                className="h-6 w-auto rounded-lg object-contain" 
            />
        </div>


        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Departments */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Departments</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200 flex items-center">
                  <span className="text-gray-400 mr-2">›</span>
                  DOM Care
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200 flex items-center">
                  <span className="text-gray-400 mr-2">›</span>
                  DOM Media
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200 flex items-center">
                  <span className="text-gray-400 mr-2">›</span>
                  DOM Missions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200 flex items-center">
                  <span className="text-gray-400 mr-2">›</span>
                  DOM Publishing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200 flex items-center">
                  <span className="text-gray-400 mr-2">›</span>
                  DOM Future Generations
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200 flex items-center">
                  <span className="text-gray-400 mr-2">›</span>
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200 flex items-center">
                  <span className="text-gray-400 mr-2">›</span>
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200 flex items-center">
                  <span className="text-gray-400 mr-2">›</span>
                  DOM Store
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200 flex items-center">
                  <span className="text-gray-400 mr-2">›</span>
                  About DOM
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200 flex items-center">
                  <span className="text-gray-400 mr-2">›</span>
                  Get In Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Get in touch */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Get in touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                <div className="text-gray-600 text-sm leading-relaxed">
                  Unit 7-13 Argall Avenue,<br />
                  E9 107 7QE, United Kingdom.
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gray-500 flex-shrink-0" />
                <div className="text-gray-600 text-sm">
                  Call Us: +44 7588 844 373
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-4 h-4 text-gray-500 flex-shrink-0" />
                <div className="text-gray-600 text-sm">
                  Whatsapp: +254 799 403342
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gray-500 flex-shrink-0" />
                <div className="text-gray-600 text-sm">
                  Email: info@davidowusuministries.co.uk
                </div>
              </div>
            </div>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Connect With Us</h3>
            <div className="space-y-4">
              <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors duration-200 group">
                <Facebook className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-sm">Facebook</span>
              </a>
              
              <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-pink-600 transition-colors duration-200 group">
                <Instagram className="w-5 h-5 text-pink-600 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-sm">Instagram</span>
              </a>
              
              <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-red-600 transition-colors duration-200 group">
                <Youtube className="w-5 h-5 text-red-600 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-sm">Youtube</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-12 bg-blue-500 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-white text-sm">
            Copyrights © 2025 All Rights Reserved by David Owusu Ministries.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;