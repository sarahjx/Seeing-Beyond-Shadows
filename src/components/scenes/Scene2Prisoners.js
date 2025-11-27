import React, { useState } from 'react';
import Button from '../common/Button';
import TextOverlay from '../common/TextOverlay';
import Popup from '../common/Popup';
import PrisonerSVG from '../../assets/svgs/prisoner-silhouette.svg';
import ShadowSVG from '../../assets/svgs/shadow-figure.svg';
import ChainSVG from '../../assets/svgs/chain-link.svg';
import FireSVG from '../../assets/svgs/fire-flame.svg';
import CaveWallSVG from '../../assets/svgs/cave-wall-texture.svg';
import './Scene2Prisoners.css';

const Scene2Prisoners = ({ onNext }) => {
  const [showNarration, setShowNarration] = useState(false);
  const [popup, setPopup] = useState(null);
  const [chainClicked, setChainClicked] = useState(false);

  const narrationText = "In this dark cave, prisoners have been chained since birth, facing a wall. Behind them, a fire casts shadows of objects onto the wall. These shadows are all they have ever known—their only reality.";

  const shadowText = "The shadows represent illusions and false perceptions. What we see may not be reality, but merely reflections or distortions of the truth.";
  
  const chainText = "The chains symbolize the mental and societal constraints that keep us from questioning our beliefs and seeking true knowledge.";

  const handleShadowClick = (e) => {
    setPopup({
      text: shadowText,
      position: { x: e.clientX, y: e.clientY }
    });
  };

  const handleChainClick = (e) => {
    setChainClicked(true);
    setPopup({
      text: chainText,
      position: { x: e.clientX, y: e.clientY }
    });
  };

  return (
    <div className="scene scene-2">
      <div className="scene-background scene-2-background">
        <img 
          src={CaveWallSVG} 
          alt="Cave wall" 
          className="cave-wall-texture"
        />
        <div className="fire-container">
          <img 
            src={FireSVG} 
            alt="Fire" 
            className="fire-flame"
          />
        </div>
      </div>

      <div className="scene-content">
        {/* Clickable shadows on the wall */}
        <div 
          className="shadow-area shadow-1"
          onClick={handleShadowClick}
          title="Click to learn about shadows"
        >
          <img src={ShadowSVG} alt="Shadow" className="shadow-svg" />
        </div>
        <div 
          className="shadow-area shadow-2"
          onClick={handleShadowClick}
          title="Click to learn about shadows"
        >
          <img src={ShadowSVG} alt="Shadow" className="shadow-svg" />
        </div>
        <div 
          className="shadow-area shadow-3"
          onClick={handleShadowClick}
          title="Click to learn about shadows"
        >
          <img src={ShadowSVG} alt="Shadow" className="shadow-svg" />
        </div>

        {/* Clickable chains */}
        <div 
          className="chain chain-1"
          onClick={handleChainClick}
          title="Click to learn about chains"
        >
          <img src={ChainSVG} alt="Chain" className="chain-svg" />
        </div>
        <div 
          className="chain chain-2"
          onClick={handleChainClick}
          title="Click to learn about chains"
        >
          <img src={ChainSVG} alt="Chain" className="chain-svg" />
        </div>

        {/* Prisoners */}
        <div className="prisoners">
          <div className="prisoner prisoner-1">
            <img src={PrisonerSVG} alt="Prisoner" className="prisoner-svg" />
          </div>
          <div className="prisoner prisoner-2">
            <img src={PrisonerSVG} alt="Prisoner" className="prisoner-svg" />
          </div>
          <div className="prisoner prisoner-3">
            <img src={PrisonerSVG} alt="Prisoner" className="prisoner-svg" />
          </div>
        </div>
      </div>

      <TextOverlay
        title="The Prisoners"
        text={narrationText}
        isOpen={showNarration}
        onToggle={() => setShowNarration(!showNarration)}
        position="top-right"
      />

      {chainClicked && (
        <div className="break-free-container">
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

