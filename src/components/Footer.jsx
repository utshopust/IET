import { RiFacebookFill, RiTwitterFill, RiInstagramFill } from "react-icons/ri";
import LOGO from "../assets/logo.webp"

const LINKS = [
  { name: 'Home', link: '#home' },
  { name: 'Services', link: '#services' },
  { name: 'Portfolio', link: '#portfolio' },
  { name: 'About Us', link: '#about' },
  { name: 'Contact', link: '#contact' },
];

const Footer = () => {
  return (
    <footer className="w-full bg-base-200 dark:bg-gray-900 text-base-content transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Top Section: Logo + Description + Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16 border-b border-gray-300 dark:border-gray-700 pb-8">
          
          {/* Logo + Description */}
          <div className="flex flex-col space-y-3">
            <a href="#home" className="flex items-center space-x-3">
              <img src={LOGO} alt="Logo" className="w-12 h-12 rounded-md" />
              <span className="text-xl font-bold text-blue-700 dark:text-blue-400">Motor Vehicle Engineering</span>
            </a>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Professional diagnosis, service & repair for all types of motor vehicles. Trusted by customers across Bangladesh.
            </p>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col space-y-2 w-full lg:w-1/3">
            <p className="text-gray-700 dark:text-gray-300 font-medium">Subscribe to our newsletter</p>
            <form className="flex flex-col sm:flex-row items-center gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="input input-bordered w-full sm:w-auto flex-1"
              />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Middle Section: Quick Links + Contact Info */}
        <div className="flex flex-col md:flex-row justify-between items-start mt-8 gap-8 md:gap-16">
          
          {/* Quick Links */}
          <div className="flex flex-col space-y-2">
            <h4 className="text-gray-800 dark:text-gray-200 font-semibold mb-2">Quick Links</h4>
            {LINKS.map((link, idx) => (
              <a 
                key={idx} 
                href={link.link} 
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-2">
            <h4 className="text-gray-800 dark:text-gray-200 font-semibold mb-2">Contact Info</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Muktijoddha Road-3 Block-A, <br />
              Sayed Nagar, Vatara <br />Dhaka 1212
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Phone: +8801906484869
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Email: info@iet.org.bd.com
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 text-blue-600 dark:text-blue-400 text-2xl"
            >
              <RiFacebookFill />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 text-blue-400 dark:text-blue-300 text-2xl"
            >
              <RiTwitterFill />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 text-pink-500 dark:text-pink-400 text-2xl"
            >
              <RiInstagramFill />
            </a>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          &copy; 2025 Motor Vehicle Engineering. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;

