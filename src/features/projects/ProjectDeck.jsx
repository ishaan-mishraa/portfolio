import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Globe, Code } from 'lucide-react';

const ProjectDeck = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = projects.length;

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % total);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + total) % total);

  const getPositionClass = (index) => {
    if (index === currentIndex) return 'card-active';
    if (index === (currentIndex + 1) % total) return 'card-next';
    if (index === (currentIndex - 1 + total) % total) return 'card-prev';
    return 'card-hidden hidden md:block'; // Hide entirely on mobile if not adjacent
  };

  return (
    <div className="w-full py-10 flex flex-col items-center">
      {/* The Card Stack */}
      <div className="relative w-full max-w-[350px] md:max-w-md h-[400px] flex items-center justify-center project-card-wrapper">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`project-card absolute w-full glass-morph rounded-2xl p-6 md:p-8 hover-glow border border-cyan-400/20 bg-[#0a0a0a]/90 backdrop-blur-xl ${getPositionClass(index)}`}
          >
            <div className="flex items-center justify-between mb-6">
              <div className={`p-3 rounded-full bg-gradient-to-r ${project.color} text-white`}>
                <Globe className="w-6 h-6" />
              </div>
              <span className="text-xs text-cyan-400 px-3 py-1 bg-cyan-400/10 rounded-full border border-cyan-400/20 font-orbitron tracking-wider">
                {project.category}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2 font-zen">{project.title}</h3>
            <h4 className="text-sm text-cyan-400 mb-4 font-orbitron">{project.subtitle}</h4>
            
            <p className="text-gray-400 text-sm md:text-base mb-8 leading-relaxed font-orbitron h-24 overflow-y-auto pr-2 custom-scrollbar">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech, idx) => (
                <span key={idx} className="text-xs font-mono bg-gray-800/80 text-gray-300 px-3 py-1 rounded-full border border-gray-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Deck Controls */}
      <div className="flex justify-center items-center gap-8 mt-12 z-40">
        <button 
          onClick={handlePrev}
          className="p-4 rounded-full glass-morph text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all border border-cyan-400/30"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <div className="font-orbitron text-cyan-400/50 tracking-widest text-sm">
          0{currentIndex + 1} / 0{total}
        </div>

        <button 
          onClick={handleNext}
          className="p-4 rounded-full glass-morph text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all border border-cyan-400/30"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default ProjectDeck;