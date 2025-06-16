import React, { useEffect, useState } from 'react';
import { Mail, Linkedin, Github, Instagram, Twitter, Rocket, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [floatingStars, setFloatingStars] = useState([]);

  useEffect(() => {
    // Generate floating stars for footer
    const stars = [];
    for (let i = 0; i < 15; i++) {
      stars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 3 + 2,
      });
    }
    setFloatingStars(stars);

    // Show scroll to top button based on scroll position
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { 
      icon: <Mail className="w-5 h-5" />, 
      href: "mailto:ishaancodes01@gmail.com", 
      label: "Email",
      color: "hover:text-red-400"
    },
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      href: "https://www.linkedin.com/in/ishaan-mishraa/", 
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    { 
      icon: <Github className="w-5 h-5" />, 
      href: "https://github.com/ishaan-mishraa", 
      label: "GitHub",
      color: "hover:text-gray-400"
    },
    { 
      icon: <Instagram className="w-5 h-5" />, 
      href: "https://www.instagram.com/ishaanmxshra", 
      label: "Instagram",
      color: "hover:text-pink-400"
    },
    { 
      icon: <Twitter className="w-5 h-5" />, 
      href: "https://x.com/Ishaan0_0mishra", 
      label: "Twitter",
      color: "hover:text-cyan-400"
    },
  ];

  return (
    <>
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 w-12 h-12 rounded-full glass-morph neon-border text-cyan-400 flex items-center justify-center hover-glow transition-all duration-300 z-50"
          title="Scroll to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Footer */}
      <footer className="relative mt-20 overflow-hidden">
        {/* Background with particles */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/50 to-transparent">
          {/* Floating Stars */}
          {floatingStars.map(star => (
            <div
              key={star.id}
              className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                animationDuration: `${star.duration}s`,
                animationDelay: `${star.id * 0.2}s`
              }}
            />
          ))}
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
        </div>

        {/* Footer Content */}
        <div className="relative z-10 glass-morph border-t border-cyan-400/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              
              {/* Brand Section */}
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                  <div className="relative">
                    <Rocket className="w-8 h-8 text-cyan-400 floating" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  <h2 className="text-2xl font-bold glow-text" style={{ fontFamily: 'Zen Dots, cursive' }}>
                    ISHAAN
                  </h2>
                </div>
                <p className="text-gray-400 text-sm mb-2" style={{ fontFamily: 'Orbitron, monospace' }}>
                  Computer Science Student | Full Stack Developer
                </p>
                <p className="text-gray-500 text-xs" style={{ fontFamily: 'Orbitron, monospace' }}>
                  Building the future, one line of code at a time
                </p>
              </div>

              {/* Social Links */}
              <div className="text-center">
                <h3 className="text-cyan-400 font-bold mb-4 text-sm" style={{ fontFamily: 'Orbitron, monospace' }}>
                  CONNECT ACROSS THE GALAXY
                </h3>
                <div className="flex justify-center space-x-6">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target={social.href.startsWith('mailto') ? '_self' : '_blank'}
                      rel={social.href.startsWith('mailto') ? '' : 'noopener noreferrer'}
                      aria-label={social.label}
                      className={`w-10 h-10 rounded-full glass-morph border border-gray-700 text-gray-400 ${social.color} flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-current`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Copyright & Info */}
              <div className="text-center md:text-right">
                <div className="space-y-2">
                  <p className="text-gray-400 text-sm flex items-center justify-center md:justify-end" style={{ fontFamily: 'Orbitron, monospace' }}>
                    Made with <Heart className="w-4 h-4 text-red-400 mx-1 animate-pulse" /> and countless ☕
                  </p>
                  <p className="text-gray-500 text-xs" style={{ fontFamily: 'Orbitron, monospace' }}>
                    &copy; {new Date().getFullYear()} Ishaan Mishra
                  </p>
                  <p className="text-gray-600 text-xs" style={{ fontFamily: 'Orbitron, monospace' }}>
                    All rights reserved
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-8 pt-6 border-t border-gray-800/50">
              <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500" style={{ fontFamily: 'Orbitron, monospace' }}>
                <p>Built with React, Tailwind CSS & Cosmic Energy ✨</p>
                <p className="mt-2 sm:mt-0">
                  Version 2025.1 | Last updated: {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Glow Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
      </footer>
    </>
  );
};

export default Footer;
