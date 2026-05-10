import React, { useState, useEffect } from 'react';
import * as LucideIcons from 'lucide-react'; 
import { portfolioData } from '../../config/portfolio.config';

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState([]);
  
  // Use the expanded list from your single source of truth
  const { skills } = portfolioData;

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleSkills(prev => {
        if (prev.length < skills.length) {
          return [...prev, prev.length];
        }
        return prev;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [skills.length]);

  /**
   * Helper to dynamically resolve Lucide icon components from strings.
   * It capitalizes the first letter to match Lucide's export naming convention.
   */
  const getIcon = (iconName) => {
    if (!iconName) return <LucideIcons.Code className="w-12 h-12" />;
    
    const capitalizedName = iconName.charAt(0).toUpperCase() + iconName.slice(1);
    const IconComponent = LucideIcons[capitalizedName] || LucideIcons.Code;
    
    return <IconComponent className="w-12 h-12" />;
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold glow-text mb-6" style={{ fontFamily: 'Zen Dots, cursive' }}>
            Technical Arsenal
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto" style={{ fontFamily: 'Orbitron, monospace' }}>
            Mastering the tools and technologies that power the digital frontier
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`glass-morph p-6 rounded-2xl hover-glow transition-all duration-300 ${
                visibleSkills.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="text-cyan-400 mb-4 flex justify-center floating" style={{ animationDelay: `${index * 0.2}s` }}>
                  {getIcon(skill.icon)}
                </div>
                <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'Orbitron, monospace' }}>
                  {skill.name}
                </h3>
                
                {/* Dynamic Skill Level Bar */}
                <div className="w-full bg-gray-800 rounded-full h-2 mb-2">
                  <div
                    className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                    style={{
                      width: visibleSkills.includes(index) ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 0.1 + 0.5}s`
                    }}
                  ></div>
                </div>
                <span className="text-sm text-gray-400" style={{ fontFamily: 'Orbitron, monospace' }}>
                  {skill.level}% Proficiency
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;