import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/logo@2x2.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [isTabletMoreMenuOpen, setIsTabletMoreMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMoreMenu = () => {
    setIsMoreMenuOpen(!isMoreMenuOpen);
  };

  const toggleTabletMoreMenu = () => {
    setIsTabletMoreMenuOpen(!isTabletMoreMenuOpen);
  };

  // Close mobile menu when clicking outside or on link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMoreMenuOpen(false);
  };

  // Close tablet more menu when clicking outside
  const closeTabletMoreMenu = () => {
    setIsTabletMoreMenuOpen(false);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMoreMenuOpen(false);
    setIsTabletMoreMenuOpen(false);
  }, [location]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        setIsMoreMenuOpen(false);
        setIsTabletMoreMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when mobile menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Handle click outside for tablet more menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isTabletMoreMenuOpen && !target.closest('.tablet-more-menu')) {
        setIsTabletMoreMenuOpen(false);
      }
    };

    if (isTabletMoreMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isTabletMoreMenuOpen]);

  const navLinks = [
    { name: "Departments", href: "/departments" },
    { name: "DOM Institute", href: "/institute" },
    { name: "About Us", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Blog", href: "/blog" },
    { name: "Shop", href: "/shop" },
    { name: "Contact Us", href: "/contact" },
  ];

  const mainNavLinks = navLinks.slice(0, 4);
  const moreNavLinks = navLinks.slice(4);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 lg:h-18">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link 
              to="/" 
              className="flex items-center"
            >
              <img 
                src={Logo} 
                alt="DOM Logo" 
                className="h-7 sm:h-8 lg:h-7 w-auto transition-all duration-200" 
              />
            </Link>
          </div>

          {/* Desktop/Tablet Navigation - Hidden on mobile, visible on md+ */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={(isActive) =>
                  `text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-2 xl:px-3 py-2 rounded-md text-sm xl:text-base font-medium transition-all duration-200 whitespace-nowrap focus:outline-none ${
                    isActive ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600' : ''
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Link 
              to="/register"
              className="ml-3 xl:ml-4 bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 text-white px-4 xl:px-6 py-2 rounded-md text-sm xl:text-base font-medium transition-all duration-200 shadow-sm hover:shadow whitespace-nowrap focus:outline-none"
            >
              I&apos;m New
            </Link>
          </div>

          {/* Tablet Navigation - Visible on md to lg screens */}
          <div className="hidden md:flex lg:hidden items-center space-x-1">
            {navLinks.slice(0, 4).map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={(isActive) =>
                  `text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-2 py-2 rounded-md text-sm font-medium transition-all duration-200 whitespace-nowrap focus:outline-none ${
                    isActive ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600' : ''
                  }`
                }
              >
                {link.name.replace(" Us", "")}
              </NavLink>
            ))}
            
            {/* More menu for remaining items */}
            <div className="relative tablet-more-menu">
              <button 
                onClick={toggleTabletMoreMenu}
                className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-2 py-2 rounded-md text-sm font-medium transition-all duration-200 focus:outline-none flex items-center"
              >
                More
                <ChevronDown 
                  className={`h-4 w-4 ml-1 transition-transform duration-200 ${
                    isTabletMoreMenuOpen ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              <div className={`absolute right-0 mt-1 w-40 bg-white rounded-md shadow-lg border border-gray-200 transition-all duration-200 z-10 ${
                isTabletMoreMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}>
                {navLinks.slice(4).map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.href}
                    onClick={closeTabletMoreMenu}
                    className={(isActive) =>
                      `block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 first:rounded-t-md last:rounded-b-md transition-colors duration-200 focus:outline-none ${
                        isActive ? 'bg-blue-50 text-blue-600' : ''
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </div>

            <Link 
              to="/register"
              className="ml-2 bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 shadow-sm hover:shadow focus:outline-none"
            >
              I&apos;m New
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Close main menu" : "Open main menu"}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none transition-all duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-xl transform transition-all duration-300 ease-in-out z-50 ${
          isMobileMenuOpen 
            ? "translate-y-0 opacity-100 visible" 
            : "-translate-y-2 opacity-0 invisible"
        }`}
      >
        <div className="px-4 py-6 space-y-1 max-h-[80vh] overflow-y-auto">
          {/* Main navigation links */}
          {mainNavLinks.map((link, index) => (
            <NavLink
              key={link.name}
              to={link.href}
              onClick={closeMobileMenu}
              className={(isActive) =>
                `block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 focus:outline-none active:bg-gray-100 ${
                  isActive 
                    ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' 
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                }`
              }
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {link.name}
            </NavLink>
          ))}

          {/* More menu for mobile */}
          <div className="relative">
            <button
              onClick={toggleMoreMenu}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 focus:outline-none ${
                isMoreMenuOpen 
                  ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              More
              <ChevronDown 
                className={`h-5 w-5 transition-transform duration-200 ${
                  isMoreMenuOpen ? 'rotate-180' : ''
                }`} 
              />
            </button>
            
            {/* More menu dropdown */}
            <div className={`mt-1 ml-4 space-y-1 transition-all duration-200 ${
              isMoreMenuOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'
            }`}>
              {moreNavLinks.map((link, index) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  onClick={closeMobileMenu}
                  className={(isActive) =>
                    `block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none active:bg-gray-100 ${
                      isActive 
                        ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`
                  }
                  style={{ animationDelay: `${(index + 4) * 50}ms` }}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <Link 
              to="/register"
              onClick={closeMobileMenu}
              className="block w-full bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white px-6 py-3 rounded-lg text-base font-medium transition-all duration-200 shadow-sm hover:shadow focus:outline-none text-center"
            >
              I&apos;m New
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
