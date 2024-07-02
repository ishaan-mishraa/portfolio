import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

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
          <a className="mx-5 my-2 md:my-0 no-underline text-gray-800 hover:text-green-500 transition-colors duration-300" href="/#skills">Skills</a>
          <a className="mx-5 my-2 md:my-0 no-underline text-gray-800 hover:text-green-500 transition-colors duration-300" href="/#works">Works</a>
          <a className="mx-5 my-2 md:my-0 no-underline text-gray-800 hover:text-green-500 transition-colors duration-300" href="/#toolset">Toolset</a>
          <Link className="mx-5 my-2 md:my-0 no-underline text-gray-800 hover:text-green-500 transition-colors duration-300" to="/contact">Contact Me</Link>
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
