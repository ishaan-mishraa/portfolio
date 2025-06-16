import React, { useState, useEffect } from 'react';
import { Code, Database, Globe, Terminal, Cpu, Layers, Zap, Gauge } from 'lucide-react';

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState([]);

  const skills = [
    { 
      icon: <Cpu className="w-12 h-12" />, 
      name: 'C++', 
      level: 85,
      color: 'from-blue-400 to-blue-600'
    },
    { 
      icon: <Globe className="w-12 h-12" />, 
      name: 'HTML5', 
      level: 90,
      color: 'from-orange-400 to-orange-600'
    },
    { 
      icon: <Layers className="w-12 h-12" />, 
      name: 'CSS3', 
      level: 85,
      color: 'from-cyan-400 to-cyan-600'
    },
    { 
      icon: <Code className="w-12 h-12" />, 
      name: 'JavaScript', 
      level: 80,
      color: 'from-yellow-400 to-yellow-600'
    },
    { 
      icon: <Database className="w-12 h-12" />, 
      name: 'PostgreSQL', 
      level: 70,
      color: 'from-purple-400 to-purple-600'
    },
    { 
      icon: <Zap className="w-12 h-12" />, 
      name: 'Node.js', 
      level: 75,
      color: 'from-green-400 to-green-600'
    },
    { 
      icon: <Gauge className="w-12 h-12" />, 
      name: 'React.js', 
      level: 80,
      color: 'from-cyan-400 to-blue-600'
    },
    { 
      icon: <Terminal className="w-12 h-12" />, 
      name: 'Linux CLI', 
      level: 75,
      color: 'from-gray-400 to-gray-600'
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleSkills(prev => {
        if (prev.length < skills.length) {
          return [...prev, prev.length];
        }
        return prev;
      });
    }, 200);

    return () => clearInterval(timer);
  }, []);

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
                <div className={`text-cyan-400 mb-4 flex justify-center floating`} style={{ animationDelay: `${index * 0.2}s` }}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'Orbitron, monospace' }}>
                  {skill.name}
                </h3>
                
                {/* Skill Level Bar */}
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
