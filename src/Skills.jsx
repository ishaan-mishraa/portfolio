import React from 'react';
import './Home.css';

const Skills = () => {
  const skillsUpperLayer = [
    { src: './images/c-.png', alt: 'C++', name: 'C++' },
    { src: './images/html-5.png', alt: 'HTML', name: 'HTML' },
    { src: './images/css-3.png', alt: 'CSS', name: 'CSS' },
    { src: './images/js.png', alt: 'Javascript', name: 'Javascript' },
  ];

  const skillsLowerLayer = [
    { src: './images/pngegg.png', alt: 'PostgreSQL', name: 'PostgreSQL' },
    { src: './images/nodejs.png', alt: 'NodeJS', name: 'NodeJS' },
    { src: './images/atom.png', alt: 'ReactJS', name: 'ReactJS' },
    { src: './images/linux.png', alt: 'Linux', name: 'Linux CLI' },
  ];

  return (
    <div id="Skills" classname="animate-spin">
      <h1 className="inner-titles text-center text-2xl sm:text-3xl md:text-4xl font-bold">Skills/Tools:</h1>
      <div className="skill-upper-layer flex justify-evenly mt-6">
        {skillsUpperLayer.map((skill, index) => (
          <div key={index} className="skill-info text-center">
            <img className="image-skill w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" src={skill.src} alt={skill.alt} />
            <h2 className="secondary-titles text-lg sm:text-xl md:text-2xl mt-2">{skill.name}</h2>
          </div>
        ))}
      </div>
      <div className="skill-lower-layer flex justify-evenly mt-6">
        {skillsLowerLayer.map((skill, index) => (
          <div key={index} className="skill-info text-center">
            <img className="image-skill w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" src={skill.src} alt={skill.alt} />
            <h2 className="secondary-titles text-lg sm:text-xl md:text-2xl mt-2">{skill.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
