import React, { useState } from 'react';
import { Terminal, ExternalLink, Wifi } from 'lucide-react';

const LiveProjectFeed = ({ project }) => {
  const [uplinkState, setUplinkState] = useState('offline'); // offline, booting, live

  const establishUplink = () => {
    setUplinkState('booting');
    // Simulate network handshake before loading the iframe
    setTimeout(() => {
      setUplinkState('live');
    }, 2000);
  };

  if (!project || !project.liveUrl) return null;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold glow-text mb-4 font-zen flex justify-center items-center gap-4">
          <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
          LIVE UPLINK: {project.title.toUpperCase()}
        </h2>
        <p className="text-gray-400 font-orbitron tracking-widest">REAL-TIME INSTANCE MONITORING</p>
      </div>

      <div className="glass-morph rounded-2xl overflow-hidden neon-border relative group">
        
        {/* Terminal Header Bar */}
        <div className="bg-black/50 border-b border-cyan-400/30 p-3 flex justify-between items-center">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <div className="font-mono text-xs text-cyan-400 flex items-center gap-2">
            <Wifi className={`w-4 h-4 ${uplinkState === 'live' ? 'animate-pulse' : 'opacity-50'}`} />
            {uplinkState === 'live' ? 'CONNECTED' : 'STANDBY'}
          </div>
        </div>

        {/* The Screen Area */}
        <div className="w-full aspect-video bg-[#050505] relative flex items-center justify-center">
          
          {uplinkState === 'offline' && (
            <div className="text-center">
              <Terminal className="w-16 h-16 text-cyan-400/30 mx-auto mb-6" />
              <button 
                onClick={establishUplink}
                className="neon-border px-8 py-4 rounded-full text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 font-bold font-orbitron hover-glow"
              >
                INITIALIZE UPLINK
              </button>
            </div>
          )}

          {uplinkState === 'booting' && (
            <div className="font-mono text-cyan-400 text-sm md:text-base screen-glitch">
              <p>{'>'} ESTABLISHING SECURE CONNECTION...</p>
              <p>{'>'} BYPASSING FIREWALLS...</p>
              <p>{'>'} FETCHING INSTANCE DATA...</p>
            </div>
          )}

          {uplinkState === 'live' && (
            <>
              {/* The Actual Iframe */}
              <iframe 
                src={project.liveUrl} 
                title={project.title}
                className="w-full h-full border-none"
                loading="lazy"
              />
              
              {/* Overlay button to open in new tab (Mobile friendly) */}
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-black/80 p-3 rounded-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-colors backdrop-blur-sm flex items-center gap-2 opacity-0 group-hover:opacity-100"
              >
                <span className="font-orbitron text-xs font-bold">EXTERNAL VIEW</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default LiveProjectFeed;