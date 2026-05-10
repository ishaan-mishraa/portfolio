import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Download, ExternalLink, Globe } from 'lucide-react';

import Skills from '../features/skills/Skills';
import ExpandButton from '../components/ui/ExpandButton';
import SpaceNavigator from '../components/layout/SpaceNavigator';
import TimelineSection from '../features/resume/TimelineSection';
import ProjectCarousel from '../features/projects/ProjectCarousel';
import { portfolioData } from '../config/portfolio.config';
import OmnitrixSkills from '../features/skills/OmnitrixSkills';
import ExperienceTerminal from '../features/resume/ExperienceTerminal';

export default function Home() {
  // Destructure the data for cleaner code
  const { personal, experience, education, projects, skills } = portfolioData;

  return (
    <div className="min-h-screen pt-20">
      <SpaceNavigator />

      {/* Hero Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          
          <TypeAnimation
            sequence={['Hello, Universe!', 1000, `I'm ${personal.name}!`, 1000]}
            wrapper="h1" cursor={true}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold glow-text mb-4"
            style={{ fontFamily: 'Zen Dots, cursive' }}
          />
          
          <h2 className="text-xl sm:text-2xl text-cyan-400 mb-6" style={{ fontFamily: 'Michroma, monospace' }}>
            {personal.role}
          </h2>
          
          <p className="text-lg text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            {personal.bio}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="neon-border px-8 py-4 rounded-full text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center space-x-2 hover-glow no-underline"
            >
              <Download className="w-5 h-5" />
              <span style={{ fontFamily: 'Orbitron, monospace' }}>Download CV</span>
            </a>
            <a
              href="#works"
              className="glass-morph px-8 py-4 rounded-full text-white hover:text-cyan-400 transition-all duration-300 flex items-center space-x-2 hover-glow no-underline"
            >
              <ExternalLink className="w-5 h-5" />
              <span style={{ fontFamily: 'Orbitron, monospace' }}>View Projects</span>
            </a>
          </div>

          <div className="flex justify-center">
            <ExpandButton />
          </div>
        </div>
      </section>

      {/* Modular Feature Sections */}
      {/* Note: Ensure your Skills.jsx uses portfolioData.skills internally! */}
      <OmnitrixSkills />
      <section id="experience" className="py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold glow-text font-zen">MISSION LOGS</h2>
          <p className="text-gray-400 mt-4 font-orbitron">Professional expeditions across the technology sector</p>
        </div>
        <ExperienceTerminal />
      </section>
      
      <TimelineSection 
        id="education" title="Academy Records" 
        subtitle="Educational journey"
        items={education} type="education" 
      />

      {/* Projects Section (Data-Driven) */}
      <section id="works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold glow-text mb-6" style={{ fontFamily: 'Zen Dots, cursive' }}>
              Project Archive
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto" style={{ fontFamily: 'Orbitron, monospace' }}>
              Strategic projects deployed across the digital frontier
            </p>
          </div>

          <ProjectCarousel projects={portfolioData.projects} />
        </div>
      </section>
    </div>
  );
}