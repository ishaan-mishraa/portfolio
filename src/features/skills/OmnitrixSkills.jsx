import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { portfolioData } from '../../config/portfolio.config';

const OmnitrixSkills = () => {
  const { skills } = portfolioData;
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSkills = skills.length;

  const rotate = (direction) => {
    if (direction === 'next') setActiveIndex((prev) => (prev + 1) % totalSkills);
    else setActiveIndex((prev) => (prev - 1 + totalSkills) % totalSkills);
  };

  const getIcon = (iconName, size = "w-8 h-8") => {
    const capitalized = iconName.charAt(0).toUpperCase() + iconName.slice(1);
    const IconComponent = LucideIcons[capitalized] || LucideIcons.Code;
    return <IconComponent className={size} />;
  };

  return (
    <section id="skills" className="py-20 flex flex-col items-center overflow-hidden">
      <h2 className="text-4xl font-bold glow-text mb-16 font-zen">TECHNICAL ARSENAL</h2>

      <div className="relative w-80 h-80 md:w-[500px] md:h-[500px] flex items-center justify-center">
        {/* The Outer Dial */}
        <div 
          className="omnitrix-dial absolute inset-0 border-4 border-dashed border-cyan-400/20 rounded-full"
          style={{ transform: `rotate(-${activeIndex * (360 / totalSkills)}deg)` }}
        >
          {skills.map((skill, index) => {
            const angle = (index * (360 / totalSkills)) * (Math.PI / 180);
            // Position nodes in a circle
            const x = Math.cos(angle) * 45; // 45% radius
            const y = Math.sin(angle) * 45;
            
            return (
              <button
                key={skill.name}
                onClick={() => setActiveIndex(index)}
                className={`skill-node absolute p-3 rounded-full glass-morph border ${
                  activeIndex === index ? 'active border-cyan-400' : 'border-white/10 opacity-50'
                }`}
                style={{ 
                  left: `${50 + x}%`, 
                  top: `${50 + y}%`,
                  transform: `translate(-50%, -50%) rotate(${activeIndex * (360 / totalSkills)}deg)` 
                }}
              >
                {getIcon(skill.icon, "w-6 h-6 md:w-8 md:h-8")}
              </button>
            );
          })}
        </div>

        {/* The Central Display Core */}
        <div className="omnitrix-core w-48 h-48 md:w-64 md:h-64 rounded-full glass-morph border-2 border-cyan-400 flex flex-col items-center justify-center p-6 text-center z-10">
          <div className="text-cyan-400 mb-2 animate-pulse">
            {getIcon(skills[activeIndex].icon, "w-12 h-12 md:w-16 md:h-16")}
          </div>
          <h3 className="text-xl font-bold font-zen">{skills[activeIndex].name}</h3>
          <div className="w-full bg-gray-800 h-2 rounded-full mt-4 relative overflow-hidden">
            <div 
              className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skills[activeIndex].color} transition-all duration-1000`}
              style={{ width: `${skills[activeIndex].level}%` }}
            />
          </div>
          <span className="text-xs mt-2 font-orbitron">{skills[activeIndex].level}% PROFICIENCY</span>
        </div>
      </div>

      {/* Manual Controls */}
      <div className="flex gap-10 mt-16">
        <button 
          onClick={() => rotate('prev')}
          className="p-4 rounded-full neon-border text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button 
          onClick={() => rotate('next')}
          className="p-4 rounded-full neon-border text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default OmnitrixSkills;