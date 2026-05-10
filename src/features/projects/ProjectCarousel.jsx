import React, { useState, useRef } from 'react';
import { Play, Square, ChevronLeft, ChevronRight, Globe } from 'lucide-react';

const ProjectCarousel = ({ projects }) => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);

  // We double the projects array to create a seamless infinite loop
  const displayProjects = [...projects, ...projects];

  const handleManualScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full py-10">
      <div className="marquee-container relative group" ref={scrollRef}>
        <div className={`animate-marquee flex gap-8 ${isPaused ? 'pause-animation' : ''}`}>
          {displayProjects.map((project, index) => (
            <div
              key={`${project.id}-${index}`}
              className="glass-morph w-[350px] rounded-2xl p-6 hover-glow transition-all duration-500 flex-shrink-0"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-full bg-gradient-to-r ${project.color} text-white`}>
                  <Globe className="w-6 h-6" />
                </div>
                <span className="text-xs text-cyan-400 px-3 py-1 bg-cyan-400/10 rounded-full border border-cyan-400/20 font-mono">
                  {project.category}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 font-zen">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed font-orbitron h-20 overflow-hidden">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech, idx) => (
                  <span key={idx} className="text-[10px] bg-gray-800/50 text-gray-300 px-2 py-1 rounded-full border border-gray-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Control Panel */}
      <div className="flex justify-center items-center gap-6 mt-12">
        <button 
          onClick={() => handleManualScroll('left')}
          className="p-3 rounded-full glass-morph text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all"
        >
          <ChevronLeft />
        </button>

        <button 
          onClick={() => setIsPaused(!isPaused)}
          className="p-4 rounded-full neon-border text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all"
        >
          {isPaused ? <Play fill="currentColor" /> : <Square fill="currentColor" />}
        </button>

        <button 
          onClick={() => handleManualScroll('right')}
          className="p-3 rounded-full glass-morph text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ProjectCarousel;