import React from 'react';
import './Home.css'; 
import Skills from './Skills';
import { TypeAnimation } from 'react-type-animation';
import ExpandButton from './ExpandButton';

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

        <div className="intro-body text-xl sm:text-2xl md:text-sm mt-10 opacity-50 leading-relaxed text-center mx-auto max-w-xl">
          <p>
            I am currently learning Web Development and going to learn DS and Algo next due to my keen interest in Competitive coding And course syllabus of course✌️.
          </p>
        </div>
        <span className="expand-button flex justify-center mt-6"><ExpandButton /></span>
        <p className="intro-name flex justify-center">Follow me here !</p>
      </div>

      <hr className="intro-hr my-8" />

      <Skills/>

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
