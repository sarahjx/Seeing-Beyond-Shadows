import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Button from '../common/Button';
import TextOverlay from '../common/TextOverlay';
import Popup from '../common/Popup';
import ExclamationIcon from '../common/ExclamationIcon';
import PrisonersScene from '../../assets/prisonersscene.png';
import Chains from '../../assets/chains.png';
import ShadowLeft from '../../assets/shadowleft.png';
import ShadowMiddle from '../../assets/shadowmiddle.png';
import ShadowRight from '../../assets/shadowright.png';
import './Scene2Prisoners.css';

const Scene2Prisoners = ({ onNext }) => {
  const [showNarration, setShowNarration] = useState(false);
  const [popup, setPopup] = useState(null);
  const [breakFreeVisible, setBreakFreeVisible] = useState(false);
  const [clickedChains, setClickedChains] = useState(new Set());
  const sceneRef = useRef(null);
  const breakFreeRef = useRef(null);
  const popupRef = useRef(null);

  const narrationText = "In this dark cave, prisoners have been chained since birth, facing a wall. Behind them, a fire casts shadows of objects onto the wall. These shadows are all they have ever known—their only reality.";

  const shadowText = "The shadows represent illusions and false perceptions. What we see may not be reality, but merely reflections or distortions of the truth.";
  
  const chainText = "The chains symbolize the mental and societal constraints that keep us from questioning our beliefs and seeking true knowledge.";

  useEffect(() => {
    // Remove animation temporarily to ensure visibility
    // if (sceneRef.current) {
    //   gsap.set(sceneRef.current, { opacity: 1 });
    // }
  }, []);

  useEffect(() => {
    if (breakFreeVisible && breakFreeRef.current) {
      gsap.from(breakFreeRef.current, {
        scale: 0,
        rotation: -180,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
      });
    }
  }, [breakFreeVisible]);

  useEffect(() => {
    if (popup && popupRef.current) {
      gsap.from(popupRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.7)"
      });
    }
  }, [popup]);

  const handleShadowClick = (e) => {
    e.stopPropagation();
    setPopup({
      text: shadowText,
      position: { x: e.clientX, y: e.clientY }
    });
  };

  const handleChainClick = (chainId, e) => {
    e.stopPropagation();
    setClickedChains(prev => new Set([...prev, chainId]));
    
    // Show popup for chain meaning
    setPopup({
      text: chainText,
      position: { x: e.clientX, y: e.clientY }
    });
    
    // If this is the special chain (chain-1), show break free button
    if (chainId === 'chain-1') {
      setTimeout(() => {
        setBreakFreeVisible(true);
      }, 500);
    }
  };

  return (
    <div className="scene scene-2" ref={sceneRef}>
      <div className="scene-background scene-2-background">
        <img 
          src={PrisonersScene} 
          alt="Prisoners scene" 
          className="prisoners-scene-image"
        />
      </div>

      <div className="scene-content">
        {/* Invisible clickable shadow overlays - exact dimensions of shadow images */}
        <img 
          src={ShadowLeft} 
          alt="Shadow left" 
          className={`shadow-overlay shadow-overlay-1 ${popup?.text === shadowText ? 'clicked' : ''}`}
          onClick={handleShadowClick}
          title="Click to learn about shadows"
        />
        <img 
          src={ShadowMiddle} 
          alt="Shadow middle" 
          className={`shadow-overlay shadow-overlay-2 ${popup?.text === shadowText ? 'clicked' : ''}`}
          onClick={handleShadowClick}
          title="Click to learn about shadows"
        />
        <img 
          src={ShadowRight} 
          alt="Shadow right" 
          className={`shadow-overlay shadow-overlay-3 ${popup?.text === shadowText ? 'clicked' : ''}`}
          onClick={handleShadowClick}
          title="Click to learn about shadows"
        />

        {/* Invisible clickable chain overlay - exact dimensions of chains image */}
        <img 
          src={Chains} 
          alt="Chains" 
          className={`chain-overlay chain-overlay-1 ${clickedChains.has('chain-1') ? 'clicked' : ''}`}
          onClick={(e) => handleChainClick('chain-1', e)}
          title="Click to learn about chains"
        />
        <img 
          src={Chains} 
          alt="Chains" 
          className={`chain-overlay chain-overlay-2 ${clickedChains.has('chain-2') ? 'clicked' : ''}`}
          onClick={(e) => handleChainClick('chain-2', e)}
          title="Click to learn about chains"
        />
      </div>

      {/* Exclamation icon in top left */}
      <ExclamationIcon 
        onClick={() => setShowNarration(!showNarration)}
        isActive={showNarration}
      />

      {/* Narration overlay */}
      {showNarration && (
        <TextOverlay
          title="The Prisoners"
          text={narrationText}
          isOpen={showNarration}
          onToggle={() => setShowNarration(false)}
          position="center"
        />
      )}

      {/* Break Free button appears in center when chain-1 is clicked */}
      {breakFreeVisible && (
        <div className="break-free-container" ref={breakFreeRef}>
          <Button 
            variant="primary" 
            onClick={onNext}
            className="break-free-button"
          >
            Break Free
          </Button>
        </div>
      )}

      {popup && (
        <Popup
          text={popup.text}
          onClose={() => setPopup(null)}
          position={popup.position}
          popupRef={popupRef}
        />
      )}

      {/* Placeholder for ambient firelight sound */}
      <audio className="ambient-sound" loop>
        {/* Will be added later */}
      </audio>
    </div>
  );
};

export default Scene2Prisoners;

