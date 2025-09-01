import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/logo@2x2.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking outside or on link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Departments", href: "/departments" },
    { name: "DOM Institute", href: "/institute" },
    { name: "About Us", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Blog", href: "/blog" },
    { name: "Shop", href: "/shop" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 lg:h-18">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src={Logo}
                alt="DOM Logo"
                className="h-7 sm:h-8 lg:h-7 w-auto transition-all duration-200"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `px-2 xl:px-3 py-2 rounded-md text-sm xl:text-base font-bold transition-all duration-200 whitespace-nowrap focus:outline-none 
                  ${isActive ? "text-black" : "text-gray-800 hover:text-gray-900"}`
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

          {/* Tablet & Mobile Menu Button */}
          <div className="lg:hidden">
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

      {/* Mobile & Tablet Menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 transform transition-all duration-300 ease-in-out z-50 ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100 visible shadow-xl"
            : "-translate-y-2 opacity-0 invisible"
        }`}
      >
        <div className="px-4 py-6 space-y-1 max-h-[80vh] overflow-y-auto">
          {/* All navigation links */}
          {navLinks.map((link, index) => (
            <NavLink
              key={link.name}
              to={link.href}
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg text-base font-bold transition-all duration-200 focus:outline-none active:bg-gray-100 ${
                  isActive
                    ? "text-black"
                    : "text-gray-800 hover:text-gray-900 hover:bg-gray-50"
                }`
              }
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {link.name}
            </NavLink>
          ))}

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
