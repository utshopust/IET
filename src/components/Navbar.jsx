import React, { useState } from 'react';
import LOGO from "../assets/logo.webp"


// --- MOCK CONSTANTS (Assuming these were in `../constants` and `../assets`) ---
const LINKS = [
  { name: 'Home', link: '#home' },
  { name: 'Services', link: '#services' },
  { name: 'Portfolio', link: '#portfolio' },
  { name: 'About Us', link: '#about' },
  { name: 'Contact', link: '#contact' },
];

const LOGO_URL = "https://placehold.co/50x15/0056b3/ffffff?text=IET";
// --------------------------------------------------------------------------

// Replaced RiMenu3Line and RiCloseLine with inline Lucide SVGs
const MenuIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
        <line x1="4" x2="20" y1="12" y2="12"></line>
        <line x1="4" x2="20" y1="6" y2="6"></line>
        <line x1="4" x2="20" y1="18" y2="18"></line>
    </svg>
);

const XIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
        <path d="M18 6 6 18"></path>
        <path d="m6 6 12 12"></path>
    </svg>
);


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white bg-opacity-95 backdrop-blur-sm shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo and Branding Area */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <a href="#home" className="flex items-center space-x-2 group">
              {/* Logo Image */}
              <img 
                src={LOGO} 
                alt="IET Logo" 
                className="w-12 h-auto rounded-md shadow-sm"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/50x15/333333/ffffff?text=LOGO" }} // Fallback
              />
              
              {/* Text Branding */}
              <div>
                <strong className="text-lg md:text-xl text-blue-700 leading-tight">
                  Motor Vehicle Engineering
                </strong>
                <span className="block text-xs text-gray-600 font-medium">
                  (Diagnosis, Service & Repair)
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {LINKS.map((link, index) => (
              <a
                key={index}
                href={link.link}
                className="uppercase text-sm font-semibold text-gray-700 hover:text-blue-600 transition duration-300 relative group"
              >
                {link.name}
                {/* Underline effect on hover */}
                <span className="absolute left-0 bottom-0 block w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-700 hover:text-blue-600 transition duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content (Transitioned) */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100 py-3 border-t border-gray-100' : 'max-h-0 opacity-0'
        } bg-white`}
      >
        <div className="px-4 sm:px-6">
          {LINKS.map((link, index) => (
            <a 
              key={index} 
              href={link.link} 
              onClick={toggleMenu} // Close menu on link click
              className="block py-3 px-2 text-base font-medium text-gray-800 hover:bg-gray-50 hover:text-blue-600 transition duration-150 rounded-md"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;








