import React, { useState, useEffect } from 'react';
import { portfolioData } from '../../config/portfolio.config';

const ExperienceTerminal = () => {
  // Use safe navigation to prevent errors if portfolioData is not yet loaded
  const experience = portfolioData?.experience || [];
  const [displayText, setDisplayText] = useState([]);
  const [activeLogIndex, setActiveLogIndex] = useState(0);

  useEffect(() => {
    // Guard clause: ensure experience data exists for the current index
    if (!experience || experience.length === 0 || !experience[activeLogIndex]) return;

    let currentLog = experience[activeLogIndex];
    let fullText = [
      `> ACCESSING MISSION LOG: ${currentLog.id}`,
      `> ROLE: ${currentLog.role}`,
      `> ENTITY: ${currentLog.company}`,
      `> TIMEFRAME: ${currentLog.duration}`,
      `> LOCATION: ${currentLog.location}`,
      `> STATUS: COMPLETED`,
      `> DEPLOYING ACHIEVEMENTS...`,
      ...(currentLog.achievements || []).map(a => `- ${a}`)
    ];

    let lineIndex = 0;
    let isMounted = true;
    setDisplayText([]); // Clear for new log

    const typeLine = () => {
      if (isMounted && lineIndex < fullText.length) {
        setDisplayText(prev => [...prev, fullText[lineIndex]]);
        lineIndex++;
        setTimeout(typeLine, 400); // Speed of line output
      }
    };

    typeLine();

    // Cleanup function to prevent state updates if component unmounts
    return () => { isMounted = false; };
  }, [activeLogIndex, experience]);

  // Initializing state if data is missing
  if (experience.length === 0) {
    return (
      <div className="w-full max-w-4xl mx-auto p-4">
        <div className="terminal-container rounded-lg p-6 text-cyan-400 font-mono">
          &gt; INITIALIZING MISSION LOGS...
          <span className="cursor" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="terminal-container rounded-lg overflow-hidden relative min-h-[400px]">
        <div className="terminal-scanline" />
        
        {/* Terminal Header */}
        <div className="terminal-header px-4 py-2 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <span className="text-xs text-cyan-400/70 font-mono ml-4">LOG_VIEWER_v1.0.42</span>
        </div>

        {/* Terminal Body */}
        <div className="p-6 text-cyan-400 font-mono text-sm md:text-base leading-relaxed">
          {displayText.map((line, i) => (
            <div key={i} className="mb-2">
              {/* Added a safety check for 'line' to prevent .startsWith() crash */}
              <span className={line && line.startsWith('>') ? 'text-white' : 'text-cyan-400'}>
                {line}
              </span>
            </div>
          ))}
          <span className="cursor" />
        </div>

        {/* Log Selector */}
        <div className="absolute bottom-4 right-6 flex gap-4">
          {experience.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveLogIndex(idx)}
              className={`px-3 py-1 rounded border text-xs transition-all ${
                activeLogIndex === idx 
                ? 'bg-cyan-400 text-black border-cyan-400 shadow-[0_0_10px_#00f5ff]' 
                : 'bg-transparent text-cyan-400 border-cyan-400/30'
              }`}
            >
              LOG_{idx + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTerminal;