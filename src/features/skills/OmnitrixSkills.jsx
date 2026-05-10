import React, { useState, useRef, useEffect } from 'react';
import * as LucideIcons from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { portfolioData } from '../../config/portfolio.config';

const OmnitrixSkills = () => {
  const { skills } = portfolioData;
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSkills = skills.length;
  
  // Ref to hold the timer ID
  const hoverTimer = useRef(null);

  const rotate = (direction) => {
    if (direction === 'next') setActiveIndex((prev) => (prev + 1) % totalSkills);
    else setActiveIndex((prev) => (prev - 1 + totalSkills) % totalSkills);
  };

  // Hover & Hold Logic (300ms delay)
  const handleMouseEnter = (index) => {
    hoverTimer.current = setTimeout(() => {
      setActiveIndex(index);
    }, 300); 
  };

  // Cancel the timer if the mouse leaves before 300ms
  const handleMouseLeave = () => {
    if (hoverTimer.current) {
      clearTimeout(hoverTimer.current);
    }
  };

  // Cleanup timer if component unmounts
  useEffect(() => {
    return () => {
      if (hoverTimer.current) clearTimeout(hoverTimer.current);
    };
  }, []);

  const getIcon = (iconName, size = "w-8 h-8") => {
    if (!iconName) return <LucideIcons.Code className={size} />;
    const capitalized = iconName.charAt(0).toUpperCase() + iconName.slice(1);
    const IconComponent = LucideIcons[capitalized] || LucideIcons.Code;
    return <IconComponent className={size} />;
  };

  return (
    <section id="skills" className="py-20 flex flex-col items-center overflow-hidden w-full px-4">
      <h2 className="text-3xl sm:text-4xl font-bold glow-text mb-24 font-zen text-center w-full">
        TECHNICAL ARSENAL
      </h2>

      <div className="relative w-80 h-80 md:w-[500px] md:h-[500px] flex items-center justify-center mt-8">
        
        {/* NEW: Outer HUD Ring (Slow, Forward Spin) */}
        <div className="hud-ring-outer absolute inset-[-30px] md:inset-[-50px] rounded-full pointer-events-none" />
        
        {/* NEW: Inner HUD Ring (Slow, Reverse Spin) */}
        <div className="hud-ring-inner absolute inset-[-10px] md:inset-[-20px] rounded-full pointer-events-none" />

        {/* The Outer Dial (Holding the skills) */}
        <div 
          className="omnitrix-dial absolute inset-0 rounded-full"
          style={{ transform: `rotate(-${activeIndex * (360 / totalSkills)}deg)` }}
        >
          {skills.map((skill, index) => {
            const angle = (index * (360 / totalSkills)) * (Math.PI / 180);
            const x = Math.cos(angle) * 45; // 45% radius
            const y = Math.sin(angle) * 45;
            
            return (
              <button
                key={skill.name}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                className={`skill-node absolute p-3 rounded-full glass-morph border focus:outline-none ${
                  activeIndex === index ? 'active border-cyan-400' : 'border-cyan-400/20'
                }`}
                style={{ 
                  left: `${50 + x}%`, 
                  top: `${50 + y}%`,
                  /* Double transform to keep the icon upright while placing it on the circle */
                  transform: `translate(-50%, -50%) rotate(${activeIndex * (360 / totalSkills)}deg)` 
                }}
              >
                {getIcon(skill.icon, "w-6 h-6 md:w-8 md:h-8")}
              </button>
            );
          })}
        </div>

        {/* The Central Display Core */}
        <div className="omnitrix-core w-48 h-48 md:w-64 md:h-64 rounded-full glass-morph flex flex-col items-center justify-center p-6 text-center z-10 relative">
          
          {/* Subtle grid lines inside the core for that HUD aesthetic */}
          <div className="absolute inset-0 rounded-full border border-cyan-500/30 bg-[radial-gradient(circle,rgba(0,245,255,0.05)_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none" />

          <div className="text-cyan-400 mb-2 animate-pulse relative z-10">
            {getIcon(skills[activeIndex].icon, "w-12 h-12 md:w-16 md:h-16")}
          </div>
          <h3 className="text-lg md:text-xl font-bold font-zen truncate w-full px-2 relative z-10 text-white">
            {skills[activeIndex].name}
          </h3>
          <div className="w-full bg-gray-900 h-2 rounded-full mt-4 relative overflow-hidden z-10 border border-cyan-900/50">
            <div 
              className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skills[activeIndex].color} transition-all duration-1000`}
              style={{ width: `${skills[activeIndex].level}%` }}
            />
          </div>
          <span className="text-[10px] md:text-xs mt-2 font-orbitron tracking-wider text-cyan-200 relative z-10">
            {skills[activeIndex].level}% PROFICIENCY
          </span>
        </div>
      </div>

      {/* Manual Controls */}
      <div className="flex gap-10 mt-20 md:mt-24 z-20">
        <button 
          onClick={() => rotate('prev')}
          className="p-4 rounded-full neon-border text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all focus:outline-none"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </button>
        <button 
          onClick={() => rotate('next')}
          className="p-4 rounded-full neon-border text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all focus:outline-none"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </div>
    </section>
  );
};

export default OmnitrixSkills;