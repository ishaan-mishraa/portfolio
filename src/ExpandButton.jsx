import React, { useState } from 'react';
import { Plus, Instagram, Github, Linkedin, Twitter } from 'lucide-react';

const ExpandButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const leftSocialLinks = [
    { icon: <Instagram className="w-6 h-6" />, url: "https://www.instagram.com/ishaanmxshra", color: "from-pink-500 to-purple-600" },
    { icon: <Linkedin className="w-6 h-6" />, url: "https://www.linkedin.com/in/ishaan-mishraa/", color: "from-blue-500 to-blue-700" },
  ];

  const rightSocialLinks = [
    { icon: <Github className="w-6 h-6" />, url: "https://github.com/ishaan-mishraa", color: "from-gray-600 to-gray-800" },
    { icon: <Twitter className="w-6 h-6" />, url: "https://x.com/Ishaan0_0mishra", color: "from-cyan-400 to-blue-500" },
  ];

  return (
    <div className="flex flex-col items-center">
      {/* Connect With Me Text - Above the button */}
      <p className="text-cyan-400 font-bold mb-4 text-center" style={{ fontFamily: 'Orbitron, monospace' }}>
        Connect With Me
      </p>
      
      {/* Main Container for the expand functionality */}
      <div className="relative flex items-center justify-center">
        {/* Left Side Social Buttons */}
        {isOpen && (
          <div className="absolute right-20 flex space-x-4">
            {leftSocialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-full bg-gradient-to-r ${link.color} text-white flex items-center justify-center hover-glow transition-all duration-300`}
                style={{
                  animation: `fadeIn 0.4s ease-out ${index * 0.1}s forwards`,
                  opacity: 0
                }}
              >
                {link.icon}
              </a>
            ))}
          </div>
        )}

        {/* Center Expand Button */}
        <button
          onClick={toggleMenu}
          className={`w-16 h-16 rounded-full glass-morph neon-border text-cyan-400 text-2xl flex items-center justify-center hover-glow transition-all duration-300 z-10 ${
            isOpen ? 'rotate-45' : 'rotate-0'
          }`}
        >
          <Plus />
        </button>

        {/* Right Side Social Buttons */}
        {isOpen && (
          <div className="absolute left-20 flex space-x-4">
            {rightSocialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-full bg-gradient-to-r ${link.color} text-white flex items-center justify-center hover-glow transition-all duration-300`}
                style={{
                  animation: `fadeIn 0.4s ease-out ${(index + 2) * 0.1}s forwards`,
                  opacity: 0
                }}
              >
                {link.icon}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpandButton;
