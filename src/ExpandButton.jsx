import React, { useState } from 'react';
import { FaPlus, FaInstagram, FaGithubSquare, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ExpandButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="w-16 h-16 rounded-full bg-blue-700 hover:bg-blue-500 text-white text-3xl flex items-center justify-center focus:outline-none shadow-lg"
        style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
      >
        <FaPlus />
      </button>
      {isOpen && (
        <>
        <div className="absolute top-0 left-20 flex space-x-4">
          <a href="https://www.instagram.com/ishaanmxshra" className="w-16 h-16 rounded-full bg-gray-300 hover:bg-gray-600 text-white flex items-center justify-center shadow-lg">
          <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/ishaan-mishraa/" className="w-16 h-16 rounded-full bg-gray-300 hover:bg-gray-600 text-white flex items-center justify-center shadow-lg">
            <FaLinkedinIn />
          </a>
        </div>
        <div className="absolute top-0 right-20 flex space-x-4">
        <a href="https://github.com/ishaan-mishraa" className="w-16 h-16 rounded-full bg-gray-300 hover:bg-gray-600 text-white flex items-center justify-center shadow-lg">
          <FaGithubSquare/>
        </a>
        <a href="https://x.com/Ishaan0_0mishra" className="w-16 h-16 rounded-full bg-gray-300 hover:bg-gray-600 text-white flex items-center justify-center shadow-lg">
        <FaXTwitter />
        </a>
      </div>
      </>
      )}
    </div>
  );
};

export default ExpandButton;
