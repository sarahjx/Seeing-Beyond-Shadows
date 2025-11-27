import React, { useState, useEffect } from 'react';
import Button from '../common/Button';
import TextOverlay from '../common/TextOverlay';
import Popup from '../common/Popup';
import SunSVG from '../../assets/svgs/sun-with-rays.svg';
import TreeSVG from '../../assets/svgs/tree.svg';
import LightRaySVG from '../../assets/svgs/light-ray.svg';
import FreedPrisonerSVG from '../../assets/svgs/freed-prisoner.svg';
import './Scene4Enlightenment.css';

const Scene4Enlightenment = ({ onNext }) => {
  const [showNarration, setShowNarration] = useState(false);
  const [brightness, setBrightness] = useState(0);
  const [popup, setPopup] = useState(null);

  const narrationText = "As the freed prisoner emerges from the cave, their eyes slowly adjust to the overwhelming brightness of the real world. What was once shadow becomes substance, and what was once illusion becomes truth.";

  const lightRayText = "The light represents knowledge, truth, and enlightenment. Stepping into the light means accepting reality over comfortable illusions.";

  useEffect(() => {
    // Gradual brightening animation
    const interval = setInterval(() => {
      setBrightness(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const handleLightRayClick = (e) => {
    setPopup({
      text: lightRayText,
      position: { x: e.clientX, y: e.clientY }
    });
  };

  return (
    <div className="scene scene-4">
      <div 
        className="scene-background scene-4-background"
        style={{ filter: `brightness(${brightness}%)` }}
      >
        <div className="nature-background"></div>
        <div className="ground"></div>
        <div className="sun-container">
          <img src={SunSVG} alt="Sun" className="sun-svg" />
        </div>
        <div className="trees">
          <div className="tree">
            <img src={TreeSVG} alt="Tree" className="tree-svg" />
          </div>
          <div className="tree">
            <img src={TreeSVG} alt="Tree" className="tree-svg" />
          </div>
          <div className="tree">
            <img src={TreeSVG} alt="Tree" className="tree-svg" />
          </div>
        </div>
        <div className="light-rays">
          <div 
            className="light-ray ray-1"
            onClick={handleLightRayClick}
            title="Click to learn about light"
          >
            <img src={LightRaySVG} alt="Light ray" className="light-ray-svg" />
          </div>
          <div 
            className="light-ray ray-2"
            onClick={handleLightRayClick}
            title="Click to learn about light"
          >
            <img src={LightRaySVG} alt="Light ray" className="light-ray-svg" />
          </div>
          <div 
            className="light-ray ray-3"
            onClick={handleLightRayClick}
            title="Click to learn about light"
          >
            <img src={LightRaySVG} alt="Light ray" className="light-ray-svg" />
          </div>
        </div>
      </div>

      <div className="scene-content">
        <div className="enlightenment-visual">
          <img src={FreedPrisonerSVG} alt="Freed prisoner" className="freed-prisoner-svg" />
        </div>
      </div>

      <TextOverlay
        title="Enlightenment"
        text={narrationText}
        isOpen={showNarration}
        onToggle={() => setShowNarration(!showNarration)}
        position="top-left"
      />

      <div className="finish-button-container">
        <Button 
          variant="primary" 
          onClick={onNext}
          className="finish-button"
        >
          Finish →
        </Button>
      </div>

      {popup && (
        <Popup
          text={popup.text}
          onClose={() => setPopup(null)}
          position={popup.position}
        />
      )}

      {/* Placeholder for nature ambiance sound */}
      <audio className="ambient-sound" loop>
        {/* Will be added later */}
      </audio>
    </div>
  );
};

export default Scene4Enlightenment;

