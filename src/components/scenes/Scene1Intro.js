import React, { useState } from 'react';
import Button from '../common/Button';
import TextOverlay from '../common/TextOverlay';
import './Scene1Intro.css';

const Scene1Intro = ({ onNext }) => {
  const [showAbout, setShowAbout] = useState(false);

  const aboutText = "This interactive storybook explores Plato's Allegory of the Cave, a philosophical tale about perception, reality, and enlightenment. Through interactive elements and animations, you'll experience the journey from illusion to truth.";

  return (
    <div className="scene scene-1">
      <div className="scene-background scene-1-background">
        <div className="rock-formation"></div>
        <div className="ground-strip"></div>
        <div className="cave-entrance">
          <div className="cave-opening">
            <div className="cave-text">
              <h1 className="main-title">Seeing Beyond Shadows</h1>
              <h2 className="subtitle">Explore Plato's Allegory of the Cave</h2>
            </div>
            <div className="cave-buttons">
              <Button 
                variant="primary" 
                onClick={onNext}
                className="enter-button"
              >
                Enter the Cave
              </Button>
              <Button 
                variant="secondary" 
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

