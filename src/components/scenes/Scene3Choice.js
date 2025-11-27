import React, { useState } from 'react';
import Button from '../common/Button';
import './Scene3Choice.css';

const Scene3Choice = ({ onNext }) => {
  const [chainBroken, setChainBroken] = useState(false);

  const handleBreakFree = () => {
    setChainBroken(true);
    // Play chain break sound effect (placeholder)
    setTimeout(() => {
      onNext();
    }, 1500);
  };

  return (
    <div className="scene scene-3">
      <div className="scene-background scene-3-background">
        {/* Placeholder for cave interior */}
        <div className="cave-interior"></div>
      </div>

      <div className="scene-content">
        <div className="choice-container">
          <h2 className="choice-title">A Moment of Questioning</h2>
          <p className="choice-text">
            One prisoner begins to wonder: What if there's more than these shadows?
            What if reality exists beyond what we can see?
          </p>

          <div className="chain-visual-container">
            <div className={`chain-visual ${chainBroken ? 'broken' : ''}`}>
              <div className="chain-link"></div>
              <div className="chain-link"></div>
              <div className="chain-link"></div>
            </div>
          </div>

          {!chainBroken && (
            <div className="choice-button-container">
              <Button 
                variant="primary" 
                onClick={handleBreakFree}
                className="break-free-choice-button"
              >
                Break Free
              </Button>
            </div>
          )}

          {chainBroken && (
            <div className="breaking-animation">
              <p className="breaking-text">The chain breaks...</p>
            </div>
          )}
        </div>
      </div>

      {/* Placeholder for chain break sound effect */}
      <audio className="sound-effect">
        {/* Will be added later */}
      </audio>
    </div>
  );
};

export default Scene3Choice;

