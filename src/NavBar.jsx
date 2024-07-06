import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { MdOutlineWork } from "react-icons/md";
import { FaTools, FaInfo } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleToggle = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="flex justify-between items-center p-5 bg-white shadow-md relative">
      <div id="header-name" className="font-caveat text-4xl md:text-6xl z-20">
        <p>
          <Link to="/" className="no-underline text-black">Ishaan</Link>
        </p>
      </div>
      <div className="flex items-center">
        <div className={`flex-col md:flex md:flex-row absolute md:relative top-20 md:top-0 left-0 w-full md:w-auto bg-white shadow-md md:shadow-none z-10 ${navOpen ? 'flex' : 'hidden'}`}>
          <a className="flex items-center mx-5 my-2 md:my-0 no-underline text-gray-800 hover:text-green-500 transition-colors duration-300" href="/#about"><FaInfo className="mr-2"/>About</a>
          <a className="flex items-center mx-5 my-2 md:my-0 no-underline text-gray-800 hover:text-green-500 transition-colors duration-300" href="/#Skills"><FaTools className="mr-2"/>Skills/Tools</a>
          <a className="flex items-center mx-5 my-2 md:my-0 no-underline text-gray-800 hover:text-green-500 transition-colors duration-300" href="/#works"><GrProjects className="mr-2"/>Works</a>
          <Link className="flex items-center mx-5 my-2 md:my-0 no-underline text-gray-800 hover:text-green-500 transition-colors duration-300" to="/contact"><MdOutlineWork className="mr-2"/>Hire Me</Link>
        </div>
        <div className="md:hidden flex flex-col cursor-pointer ml-4 z-20" onClick={handleToggle}>
          <span className={`w-6 h-0.5 bg-gray-800 my-1 transition-transform duration-300 ${navOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-800 my-1 transition-opacity duration-300 ${navOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-800 my-1 transition-transform duration-300 ${navOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
