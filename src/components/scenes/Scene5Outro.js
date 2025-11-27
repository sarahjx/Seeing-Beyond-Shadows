import React from 'react';
import Button from '../common/Button';
import './Scene5Outro.css';

const Scene5Outro = ({ onRestart }) => {
  return (
    <div className="scene scene-5">
      <div className="scene-background scene-5-background">
        <div className="reflective-background"></div>
        <div className="cave-mountain"></div>
        <div className="ground-strip"></div>
      </div>

      <div className="scene-content">
        <div className="outro-container">
          <h1 className="outro-title">
            <span className="outro-title-line-1">Will You Choose to</span>
            <span className="outro-title-line-2">Break Free?</span>
          </h1>

          <div className="outro-buttons">
            <Button 
              variant="primary" 
              onClick={onRestart}
              className="restart-button"
            >
              Restart
            </Button>
            <Button 
              variant="secondary" 
              onClick={() => {
                // About functionality - could show same about overlay as Scene 1
                alert("This interactive storybook explores Plato's Allegory of the Cave, a philosophical tale about perception, reality, and enlightenment.");
              }}
              className="about-button"
            >
              About
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scene5Outro;

