import React from 'react'
import './HeroSection.css';
import '../App.css';
import Button from './Button'

function HeroSection() {
  return (
    <>
    <div className='hero-container'>
        <video src='/videos/video-1.mp4' autoPlay loop muted></video>
        <h1>Adventure Awaits</h1>
        <p>What are you waiting for?</p>
        <div className='hero-btns'>
            <button className='btn' buttonStyles='btn--outline' buttonSize='btn--large'>Get Started</button>
            <button className='btn' buttonStyles='btn--primary' buttonSize='btn--large'>Watch Trailer <span> <i class="fa-solid fa-play"></i></span> </button>
        </div>
    </div>
    </>
  );
}

export default HeroSection;
