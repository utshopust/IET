import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { LINKS } from "../constants";

import logo from "../assets/logo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="border-b-1">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4">
        <div className="pl-2">
          <a href="#">
            <div>

            <img src={logo} alt="IET" width={50} height={15} />
            <strong className="text-xl text-blue-700">Motor Vehicle Engineering <br />
            <span className="text-sm text-black">(Diagnosis,Service & Repair)</span>
            </strong>
            </div>
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl pr-2 focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>
        <div className="hidden md:flex space-x-8 md:space-x-4 pr-2">
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={link.link}
              className="uppercase text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden absolute bg-neutral-50 w-full py-5 px-4 mt-2 border-b-4`}>
        {LINKS.map((link, index)=>(
            <a key={index} href={link.link} className="uppercase text-lg font-medium block py-2 tracking-wide">
                {link.name}
            </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
