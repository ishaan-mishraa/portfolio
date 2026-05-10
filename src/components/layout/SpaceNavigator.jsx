import React, { useState, useEffect } from 'react';
import { Rocket, User, Wrench, Briefcase, GraduationCap, Globe, X, Radar, ChevronUp } from 'lucide-react';

const SpaceNavigator = () => {
  const [shipPosition, setShipPosition] = useState({ x: 50, y: 50 });
  const [activeStation, setActiveStation] = useState(null);
  const [isNavigating, setIsNavigating] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Updated stations array without contact
  const stations = [
    { id: 'about', name: 'About', icon: <User className="w-4 h-4" />, position: { x: 20, y: 25 }, color: 'from-cyan-400 to-blue-600' },
    { id: 'skills', name: 'Skills', icon: <Wrench className="w-4 h-4" />, position: { x: 75, y: 35 }, color: 'from-green-400 to-emerald-600' },
    { id: 'experience', name: 'Experience', icon: <Briefcase className="w-4 h-4" />, position: { x: 30, y: 65 }, color: 'from-purple-400 to-pink-600' },
    { id: 'education', name: 'Education', icon: <GraduationCap className="w-4 h-4" />, position: { x: 70, y: 75 }, color: 'from-amber-400 to-orange-600' },
    { id: 'works', name: 'Projects', icon: <Globe className="w-4 h-4" />, position: { x: 60, y: 20 }, color: 'from-red-400 to-red-600' },
  ];

  const navigateToStation = (station) => {
    setIsNavigating(true);
    setActiveStation(station.id);
    setShipPosition({ x: station.position.x, y: station.position.y });
    
    setTimeout(() => {
      // Navigate to section on home page
      if (window.location.pathname !== '/') {
        // If not on home page, go to home first then scroll
        window.location.href = `/#${station.id}`;
      } else {
        // On home page, scroll to section
        const element = document.getElementById(station.id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
      setIsNavigating(false);
    }, 800);
  };

  const openNavigator = () => {
    setIsExpanded(true);
  };

  const closeNavigator = () => {
    setIsExpanded(false);
    setActiveStation(null);
  };

  // Mobile Version - Compact Navigation
  if (isMobile) {
    return (
      <div className="fixed bottom-4 right-4 z-40">
        {!isExpanded && (
          <button
            onClick={openNavigator}
            className="w-12 h-12 rounded-full glass-morph neon-border text-cyan-400 flex items-center justify-center hover-glow transition-all duration-300 group shadow-lg"
            title="Open Navigation"
          >
            <Radar className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
          </button>
        )}

        {isExpanded && (
          <div className="relative">
            {/* Mobile Navigation Menu */}
            <div className="absolute bottom-16 right-0 w-48 glass-morph rounded-2xl border border-cyan-400/40 p-3 shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-cyan-400 text-xs font-bold" style={{ fontFamily: 'Orbitron, monospace' }}>
                  NAVIGATOR
                </span>
                <button
                  onClick={closeNavigator}
                  className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 hover:bg-red-500/40 flex items-center justify-center transition-all duration-200"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>

              {/* Station List */}
              <div className="space-y-2">
                {stations.map((station) => (
                  <button
                    key={station.id}
                    onClick={() => {
                      navigateToStation(station);
                      closeNavigator();
                    }}
                    className={`w-full flex items-center space-x-3 p-2 rounded-lg bg-gradient-to-r ${station.color} bg-opacity-20 hover:bg-opacity-30 transition-all duration-200 ${
                      activeStation === station.id ? 'ring-1 ring-cyan-400' : ''
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${station.color} flex items-center justify-center text-white`}>
                      {React.cloneElement(station.icon, { className: 'w-3 h-3' })}
                    </div>
                    <span className="text-white text-sm" style={{ fontFamily: 'Orbitron, monospace' }}>
                      {station.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={closeNavigator}
              className="w-12 h-12 rounded-full glass-morph neon-border text-cyan-400 flex items-center justify-center hover-glow transition-all duration-300"
            >
              <ChevronUp className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    );
  }

  // Tablet Version - Medium Size
  if (isTablet) {
    return (
      <div className="fixed top-24 right-4 z-40">
        {!isExpanded && (
          <button
            onClick={openNavigator}
            className="w-12 h-12 rounded-full glass-morph neon-border text-cyan-400 flex items-center justify-center hover-glow transition-all duration-300 group"
            title="Open Space Navigator"
          >
            <Radar className="w-6 h-6 group-hover:animate-spin" />
          </button>
        )}

        {isExpanded && (
          <div className="relative w-56 h-56 glass-morph rounded-2xl border border-cyan-400/40 p-4 shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-cyan-400 text-xs font-bold" style={{ fontFamily: 'Orbitron, monospace' }}>
                NAVIGATOR
              </h3>
              <button
                onClick={closeNavigator}
                className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 hover:bg-red-500/40 flex items-center justify-center transition-all duration-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Navigation Area */}
            <div className="relative w-full h-36 bg-gray-900/60 rounded-lg border border-cyan-400/30 overflow-hidden">
              {/* Grid Pattern */}
              <div className="absolute inset-0 opacity-20">
                <svg width="100%" height="100%" className="text-cyan-400">
                  <defs>
                    <pattern id="grid-tablet" width="16" height="16" patternUnits="userSpaceOnUse">
                      <path d="M 16 0 L 0 0 0 16" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid-tablet)" />
                </svg>
              </div>

              {/* Stations */}
              {stations.map((station) => (
                <button
                  key={station.id}
                  onClick={() => navigateToStation(station)}
                  className={`absolute w-5 h-5 rounded-full bg-gradient-to-r ${station.color} flex items-center justify-center text-white hover:scale-110 transition-all duration-300 ${
                    activeStation === station.id ? 'ring-1 ring-cyan-400' : ''
                  }`}
                  style={{
                    left: `${station.position.x}%`,
                    top: `${station.position.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  title={station.name}
                >
                  {React.cloneElement(station.icon, { className: 'w-3 h-3' })}
                </button>
              ))}

              {/* Spaceship */}
              <div
                className={`absolute w-4 h-4 text-cyan-400 transition-all duration-700 ease-in-out z-10 ${
                  isNavigating ? 'rotate-45 scale-110' : 'rotate-0'
                }`}
                style={{
                  left: `${shipPosition.x}%`,
                  top: `${shipPosition.y}%`,
                  transform: 'translate(-50%, -50%)',
                  filter: 'drop-shadow(0 0 6px #00f5ff)'
                }}
              >
                <Rocket className="w-4 h-4" />
              </div>
            </div>

            {/* Status */}
            <div className="mt-2 text-center">
              <span className="text-cyan-400 text-xs" style={{ fontFamily: 'Orbitron, monospace' }}>
                {activeStation ? stations.find(s => s.id === activeStation)?.name.toUpperCase() : 'STANDBY'}
              </span>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Desktop Version - Full Size
  return (
    <div className="fixed top-24 right-6 z-40">
      {!isExpanded && (
        <div className="relative">
          <button
            onClick={openNavigator}
            className="w-14 h-14 rounded-full glass-morph neon-border text-cyan-400 flex items-center justify-center hover-glow transition-all duration-300 group relative overflow-hidden"
            title="Open Space Navigator"
          >
            <div className="absolute inset-0 rounded-full">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-spin"></div>
            </div>
            <Radar className="w-7 h-7 group-hover:scale-110 transition-transform duration-300 relative z-10" />
          </button>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
        </div>
      )}

      {isExpanded && (
        <div className="relative w-72 h-72 glass-morph rounded-2xl border border-cyan-400/40 p-5 shadow-2xl shadow-cyan-400/20">
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Radar className="w-4 h-4 text-cyan-400" />
              <h3 className="text-cyan-400 text-sm font-bold" style={{ fontFamily: 'Orbitron, monospace' }}>
                SPACE NAVIGATOR
              </h3>
            </div>
            <button
              onClick={closeNavigator}
              className="w-7 h-7 rounded-full bg-red-500/20 text-red-400 hover:bg-red-500/40 hover:text-red-300 flex items-center justify-center transition-all duration-200 hover:scale-110"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Status Indicator */}
          <div className="flex items-center justify-center space-x-2 mb-3">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-xs" style={{ fontFamily: 'Orbitron, monospace' }}>
              SYSTEMS ONLINE
            </span>
            <div className="flex space-x-1">
              <div className="w-1 h-3 bg-cyan-400 animate-pulse"></div>
              <div className="w-1 h-3 bg-cyan-400 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-1 h-3 bg-cyan-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>

          {/* Navigation Area */}
          <div className="relative w-full h-48 bg-gray-900/60 rounded-xl border border-cyan-400/30 overflow-hidden">
            {/* Radar Sweep */}
            <div className="absolute inset-0 rounded-xl">
              <div className="absolute inset-0 bg-gradient-conic from-transparent via-cyan-400/10 to-transparent animate-spin origin-center" style={{ animationDuration: '6s' }}></div>
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-25">
              <svg width="100%" height="100%" className="text-cyan-400">
                <defs>
                  <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
                    <path d="M 24 0 L 0 0 0 24" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            {/* Concentric Circles */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 border border-cyan-400/40 rounded-full"></div>
              <div className="absolute w-32 h-32 border border-cyan-400/25 rounded-full"></div>
              <div className="absolute w-44 h-44 border border-cyan-400/15 rounded-full"></div>
            </div>

            {/* Stations */}
            {stations.map((station, index) => (
              <button
                key={station.id}
                onClick={() => navigateToStation(station)}
                className={`absolute w-7 h-7 rounded-full bg-gradient-to-r ${station.color} flex items-center justify-center text-white hover:scale-125 transition-all duration-300 hover:shadow-lg ${
                  activeStation === station.id ? 'ring-2 ring-cyan-400 animate-pulse scale-110' : ''
                }`}
                style={{
                  left: `${station.position.x}%`,
                  top: `${station.position.y}%`,
                  transform: 'translate(-50%, -50%)',
                  animationDelay: `${index * 0.1}s`
                }}
                title={`Navigate to ${station.name}`}
              >
                {station.icon}
              </button>
            ))}

            {/* Spaceship */}
            <div
              className={`absolute w-6 h-6 text-cyan-400 transition-all duration-700 ease-in-out z-10 ${
                isNavigating ? 'rotate-45 scale-125' : 'rotate-0'
              }`}
              style={{
                left: `${shipPosition.x}%`,
                top: `${shipPosition.y}%`,
                transform: 'translate(-50%, -50%)',
                filter: 'drop-shadow(0 0 10px #00f5ff)'
              }}
            >
              <Rocket className="w-6 h-6" />
            </div>

            {/* Particle Trail */}
            {isNavigating && (
              <>
                <div
                  className="absolute w-2 h-8 bg-gradient-to-t from-cyan-400 via-cyan-300 to-transparent rounded-full opacity-70 animate-pulse"
                  style={{
                    left: `${shipPosition.x}%`,
                    top: `${shipPosition.y + 10}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                />
                <div
                  className="absolute w-3 h-3 bg-cyan-400 rounded-full opacity-60 animate-ping"
                  style={{
                    left: `${shipPosition.x}%`,
                    top: `${shipPosition.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                />
              </>
            )}
          </div>

          {/* Active Station Info */}
          <div className="mt-3 text-center">
            {activeStation ? (
              <div className="flex items-center justify-center space-x-2">
                <span className="text-cyan-400 text-xs" style={{ fontFamily: 'Orbitron, monospace' }}>
                  TARGET: {stations.find(s => s.id === activeStation)?.name.toUpperCase()}
                </span>
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
              </div>
            ) : (
              <span className="text-gray-400 text-xs" style={{ fontFamily: 'Orbitron, monospace' }}>
                SELECT DESTINATION
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SpaceNavigator;
