import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Rocket, User, Wrench, Briefcase, Menu, X } from 'lucide-react';

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggle = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-morph py-2' : 'py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Rocket className="w-8 h-8 text-cyan-400" />
            <Link 
              to="/" 
              className="text-2xl md:text-3xl font-bold glow-text"
              style={{ fontFamily: 'Zen Dots, cursive' }}
            >
              ISHAAN
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="/#about" 
              className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover-glow px-4 py-2 rounded-lg"
            >
              <User className="w-4 h-4" />
              <span style={{ fontFamily: 'Orbitron, monospace' }}>About</span>
            </a>
            <a 
              href="/#skills" 
              className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover-glow px-4 py-2 rounded-lg"
            >
              <Wrench className="w-4 h-4" />
              <span style={{ fontFamily: 'Orbitron, monospace' }}>Skills</span>
            </a>
            <a 
              href="/#works" 
              className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover-glow px-4 py-2 rounded-lg"
            >
              <Briefcase className="w-4 h-4" />
              <span style={{ fontFamily: 'Orbitron, monospace' }}>Works</span>
            </a>
            <Link 
              to="/contact" 
              className="neon-border px-6 py-2 rounded-full text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
              style={{ fontFamily: 'Orbitron, monospace' }}
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={handleToggle}
            className="md:hidden text-cyan-400 hover:text-white transition-colors duration-300"
          >
            {navOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden mt-4 glass-morph rounded-lg transition-all duration-300 ${
          navOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="p-4 space-y-4">
            <a href="#about" className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
              <User className="w-5 h-5" />
              <span style={{ fontFamily: 'Orbitron, monospace' }}>About</span>
            </a>
            <a href="#skills" className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
              <Wrench className="w-5 h-5" />
              <span style={{ fontFamily: 'Orbitron, monospace' }}>Skills</span>
            </a>
            <a href="#works" className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
              <Briefcase className="w-5 h-5" />
              <span style={{ fontFamily: 'Orbitron, monospace' }}>Works</span>
            </a>
            <Link to="/contact" className="block w-full text-center neon-border px-4 py-2 rounded-full text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300">
              <span style={{ fontFamily: 'Orbitron, monospace' }}>Hire Me</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
