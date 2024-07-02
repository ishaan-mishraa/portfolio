import React from 'react';
import './Home.css'; 
import { TypeAnimation } from 'react-type-animation';

function Home() {
  const date = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="intro-container py-10">
        <div className="top-image flex justify-center">
          <img src="./images/studying.png" alt="Studying" className="study-image rounded-full w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72" />
        </div>
        <div className="intro-head flex justify-center text-lg mt-6">
          <p className="p1 text-center">
          <TypeAnimation avgTypingDelay={100}
            startDelay={1000}
            cursor={{ show: true, blink: true, element: "|" }}
            className="text-4xl sm:text-5xl md:text-6xl intro-name"
            sequence={[
            'Hi, ',
                500,
            'Hi, Ishaan here!',
                500,
            ]}
            /><br />
            I am a Computer Science Sophomore at <span className="intro-name text-4xl sm:text-5xl md:text-6xl">KIIT University</span>, Bhubaneshwar, India.
          </p>
        </div>

        <div className="intro-body text-xl sm:text-2xl md:text-3xl mt-10 opacity-50 leading-relaxed text-center mx-auto max-w-xl">
          <p className="p2">
            I am currently learning Web Development and going to learn DS and Algo next due to my keen interest in Competitive coding And course syllabus of course✌️.
          </p>
        </div>
      </div>

      <hr className="intro-hr my-8" />

      <div id="skills">
        <h1 className="inner-titles text-center text-2xl sm:text-3xl md:text-4xl font-bold">My Skills:</h1>
        <div className="skill-upper-layer flex justify-evenly mt-6">
          <div className="skill-info text-center">
            <img className="image-skill w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" src="./images/c-.png" alt="C++" />
            <h2 className="secondary-titles text-lg sm:text-xl md:text-2xl mt-2">C++</h2>
          </div>
          <div className="skill-info text-center">
            <img className="image-skill w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" src="./images/html-5.png" alt="HTML" />
            <h2 className="secondary-titles text-lg sm:text-xl md:text-2xl mt-2">HTML</h2>
          </div>
          <div className="skill-info text-center">
            <img className="image-skill w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" src="./images/css-3.png" alt="CSS" />
            <h2 className="secondary-titles text-lg sm:text-xl md:text-2xl mt-2">CSS</h2>
          </div>
          <div className="skill-info text-center">
            <img className="image-skill w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" src="./images/js.png" alt="Javascript" />
            <h2 className="secondary-titles text-lg sm:text-xl md:text-2xl mt-2">Javascript</h2>
          </div>
        </div>
        <div className="skill-lower-layer flex justify-evenly mt-6">
          <div className="skill-info text-center">
            <img className="image-skill w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" src="./images/pngegg.png" alt="PostgreSQL" />
            <h2 className="secondary-titles text-lg sm:text-xl md:text-2xl mt-2">PostgreSQL</h2>
          </div>
          <div className="skill-info text-center">
            <img className="image-skill w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" src="./images/nodejs.png" alt="NodeJS" />
            <h2 className="secondary-titles text-lg sm:text-xl md:text-2xl mt-2">NodeJS</h2>
          </div>
          <div className="skill-info text-center">
            <img className="image-skill w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" src="./images/atom.png" alt="ReactJS" />
            <h2 className="secondary-titles text-lg sm:text-xl md:text-2xl mt-2">ReactJS</h2>
          </div>
          <div className="skill-info text-center">
            <img className="image-skill w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" src="./images/linux.png" alt="Linux" />
            <h2 className="secondary-titles text-lg sm:text-xl md:text-2xl mt-2">Linux CLI</h2>
          </div>
        </div>
      </div>

      <hr className="intro-hr my-8" />

      <div id="works">
        <h1 className="inner-titles text-center text-2xl sm:text-3xl md:text-4xl font-bold">Works as of {date}-{month}-{year}:</h1>
        <div className="top-image flex justify-center mt-6">
          {/* <img src="/assets/images/keyboard-smash.png" alt="working" className="work-image w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72" /> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
