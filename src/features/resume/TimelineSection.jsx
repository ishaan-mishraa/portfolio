import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Award, ExternalLink, Building, GraduationCap } from 'lucide-react';

const TimelineSection = ({ id, title, subtitle, items, type }) => {
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleItems(prev => {
        if (prev.length < items.length) {
          return [...prev, prev.length];
        }
        return prev;
      });
    }, 300);

    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <section id={id} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold glow-text mb-6" style={{ fontFamily: 'Zen Dots, cursive' }}>
            {title}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto" style={{ fontFamily: 'Orbitron, monospace' }}>
            {subtitle}
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`relative flex items-start transition-all duration-700 ${
                  visibleItems.includes(index) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Node */}
                <div className={`relative z-10 w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-lg`}>
                  {type === 'experience' ? <Building className="w-8 h-8" /> : <GraduationCap className="w-8 h-8" />}
                  
                  {/* Pulse Animation */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.color} animate-ping opacity-20`}></div>
                </div>

                {/* Content Card */}
                <div className="ml-8 flex-1">
                  <div className="glass-morph rounded-2xl p-6 hover-glow transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Zen Dots, cursive' }}>
                          {type === 'experience' ? item.role : item.degree}
                        </h3>
                        <h4 className="text-lg text-cyan-400 mb-1" style={{ fontFamily: 'Orbitron, monospace' }}>
                          {type === 'experience' ? item.company : item.institution}
                        </h4>
                        <div className="flex items-center text-gray-400 text-sm mb-2" style={{ fontFamily: 'Orbitron, monospace' }}>
                          <MapPin className="w-4 h-4 mr-2" />
                          {item.location}
                          {type === 'experience' && item.type && (
                            <>
                              <span className="mx-2">•</span>
                              <span>{item.type}</span>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-cyan-400 mt-2 lg:mt-0">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-mono" style={{ fontFamily: 'Orbitron, monospace' }}>
                          {item.duration}
                        </span>
                      </div>
                    </div>

                    {/* Grade for Education */}
                    {type === 'education' && item.grade && (
                      <div className="mb-4">
                        <div className="flex items-center space-x-2">
                          <Award className="w-4 h-4 text-green-400" />
                          <span className="text-green-400 font-bold" style={{ fontFamily: 'Orbitron, monospace' }}>
                            {item.grade}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Achievements for Experience */}
                    {type === 'experience' && item.achievements && (
                      <div>
                        <h5 className="text-sm font-bold text-cyan-400 mb-3 flex items-center" style={{ fontFamily: 'Orbitron, monospace' }}>
                          <Award className="w-4 h-4 mr-2" />
                          Key Achievements:
                        </h5>
                        <ul className="space-y-2">
                          {item.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-gray-400 text-sm flex items-start" style={{ fontFamily: 'Orbitron, monospace' }}>
                              <span className="text-cyan-400 mr-3 mt-1 flex-shrink-0">▶</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
