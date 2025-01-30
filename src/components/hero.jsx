import React, { useState } from 'react';
import '../assets/styles/hero.css';

import profileFront from '../assets/images/jdpixel-front.jpeg';
import profileBack from '../assets/images/jdpixel-back.jpg';

const Hero = () => {
  const [flipped, setFlipped] = useState(false);

  const handleImageClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className='container'>
      <h1 className='greetings'>Good Day Friend!</h1>
      <div className='profileContainer' onClick={handleImageClick}>
        <div className={`flip-card ${flipped ? 'flipped' : ''}`}>
          <img className='image front' src={profileFront} alt="Profile Front" />
          <img className='image back' src={profileBack} alt="Profile Back" />
        </div>
      </div>
      <h2 className='name'>Ronson Aguidan Deleña Jr</h2>
      <p className='role'>Back-End Developer</p>
      <div className='socialIcons'>
        <a href="https://www.facebook.com/Jd.Delena21/" target="_blank" rel="noopener noreferrer" className='icon'>
          <img className='social' src="src/assets/images/facebook.svg" alt="Facebook" />
          <p className='POP'>Facebook</p>
        </a>
        <a href="https://www.instagram.com/alymeeoow/" target="_blank" rel="noopener noreferrer" className='icon'>
          <img className='social' src="src/assets/images/instagram.svg" alt="Instagram" />
          <p className='POP'>Instagram</p>
        </a>
        <a href="https://www.linkedin.com/in/jd-dele%C3%B1a-391220256/" target="_blank" rel="noopener noreferrer" className='icon'>
          <img className='social' src="src/assets/images/linked.svg" alt="LinkedIn" />
          <p className='POP'>LinkedIn</p>
        </a>
      </div>
    </div>
  );
};

export default Hero;
