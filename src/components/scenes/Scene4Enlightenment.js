import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Button from '../common/Button';
import TextOverlay from '../common/TextOverlay';
import Popup from '../common/Popup';
import ExclamationIcon from '../common/ExclamationIcon';
import EnlightenmentScene from '../../assets/enlightenmentscene.png';
import './Scene4Enlightenment.css';

const Scene4Enlightenment = ({ onNext }) => {
  const [showNarration, setShowNarration] = useState(false);
  const [brightness, setBrightness] = useState(0);
  const [popup, setPopup] = useState(null);
  const sceneRef = useRef(null);
  const popupRef = useRef(null);
  const finishButtonRef = useRef(null);

  const narrationText = "As the freed prisoner emerges from the cave, their eyes slowly adjust to the overwhelming brightness of the real world. What was once shadow becomes substance, and what was once illusion becomes truth.";

  const lightText = "The light represents knowledge, truth, and enlightenment. Stepping into the light means accepting reality over comfortable illusions.";

  useEffect(() => {
    if (sceneRef.current) {
      gsap.from(sceneRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      });
    }
  }, []);

  useEffect(() => {
    // Gradual brightening animation with GSAP
    const tl = gsap.timeline();
    tl.to({ brightness: 0 }, {
      brightness: 100,
      duration: 2.5,
      ease: "power1.out",
      onUpdate: function() {
        setBrightness(this.targets()[0].brightness);
      }
    });
  }, []);

  useEffect(() => {
    if (finishButtonRef.current) {
      gsap.from(finishButtonRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 1,
        ease: "power2.out"
      });
    }
  }, []);

  const handleLightClick = (e) => {
    e.stopPropagation();
    setPopup({
      text: lightText,
      position: { x: e.clientX, y: e.clientY }
    });
  };

  return (
    <div className="scene scene-4" ref={sceneRef}>
      <div 
        className="scene-background scene-4-background"
        style={{ filter: `brightness(${brightness}%)` }}
      >
        <img 
          src={EnlightenmentScene} 
          alt="Enlightenment scene" 
          className="enlightenment-scene-image"
        />
      </div>

      <div className="scene-content">
        {/* Clickable light areas - positioned based on typical light locations */}
        <div 
          className={`light-area light-1 ${popup?.text === lightText ? 'clicked' : ''}`}
          onClick={handleLightClick}
          title="Click to learn about light"
        ></div>
        <div 
          className={`light-area light-2 ${popup?.text === lightText ? 'clicked' : ''}`}
          onClick={handleLightClick}
          title="Click to learn about light"
        ></div>
        <div 
          className={`light-area light-3 ${popup?.text === lightText ? 'clicked' : ''}`}
          onClick={handleLightClick}
          title="Click to learn about light"
        ></div>
      </div>

      {/* Exclamation icon in top left */}
      <ExclamationIcon 
        onClick={() => setShowNarration(!showNarration)}
        isActive={showNarration}
      />

      {/* Narration overlay */}
      {showNarration && (
        <TextOverlay
          title="Enlightenment"
          text={narrationText}
          isOpen={showNarration}
          onToggle={() => setShowNarration(false)}
          position="center"
        />
      )}

      <div className="finish-button-container" ref={finishButtonRef}>
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
          popupRef={popupRef}
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

