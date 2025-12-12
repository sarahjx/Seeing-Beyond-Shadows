import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Button from '../common/Button';
import TextOverlay from '../common/TextOverlay';
import IntroImage from '../../assets/intro.png';
import './Scene1Intro.css';

const Scene1Intro = ({ onNext }) => {
  const [showAbout, setShowAbout] = useState(false);
  const sceneRef = useRef(null);
  const titleRef = useRef(null);
  const buttonsRef = useRef(null);

  const aboutText = "This interactive storybook explores Plato's Allegory of the Cave, a philosophical tale about perception, reality, and enlightenment. Through interactive elements and animations, you'll experience the journey from illusion to truth.";

  useEffect(() => {
    // Set initial hidden states
    if (titleRef.current) {
      gsap.set(titleRef.current, { opacity: 0, y: -30 });
      gsap.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out"
      });
    }

    if (buttonsRef.current && buttonsRef.current.children) {
      const buttons = Array.from(buttonsRef.current.children);
      buttons.forEach((button) => {
        gsap.set(button, { opacity: 0, y: 30 });
      });
      gsap.to(buttons, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.6,
        stagger: 0.2,
        ease: "back.out(1.7)"
      });
    }
  }, []);

  return (
    <div className="scene scene-1" ref={sceneRef}>
      <div className="scene-background scene-1-background">
        <img 
          src={IntroImage} 
          alt="Cave entrance" 
          className="intro-image"
        />
        <div className="cave-entrance">
          <div className="cave-opening">
            <div className="cave-text" ref={titleRef}>
              <h1 className="main-title">Seeing Beyond Shadows</h1>
              <h2 className="subtitle">Explore Plato's Allegory of the Cave</h2>
            </div>
            <div className="cave-buttons" ref={buttonsRef}>
              <Button 
                variant="primary" 
                onClick={onNext}
                className="enter-button"
              >
                Enter the Cave
              </Button>
              <Button 
                variant="primary" 
                onClick={() => setShowAbout(!showAbout)}
                className="about-button"
              >
                About
              </Button>
            </div>
          </div>
        </div>
      </div>

      {showAbout && (
        <TextOverlay
          title="About This Experience"
          text={aboutText}
          isOpen={showAbout}
          onToggle={() => setShowAbout(false)}
          position="center"
        />
      )}

      {/* Placeholder for background sound */}
      <audio className="ambient-sound" loop>
        {/* Will be added later */}
      </audio>
    </div>
  );
};

export default Scene1Intro;

