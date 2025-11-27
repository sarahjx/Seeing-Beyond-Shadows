import React, { useState } from 'react';
import './TextOverlay.css';

const TextOverlay = ({ title, text, isOpen: controlledOpen, onToggle, position = 'top-right' }) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const toggle = onToggle || (() => setInternalOpen(!internalOpen));

  if (!isOpen) {
    return (
      <button className="text-overlay-toggle" onClick={toggle}>
        {title || 'Show Narration'}
      </button>
    );
  }

  return (
    <div className={`text-overlay speech-bubble speech-bubble-${position}`}>
      <div className="speech-bubble-icon">!</div>
      <div className="speech-bubble-content">
        <div className="speech-bubble-text">
          <p>{text}</p>
        </div>
        <button className="speech-bubble-close" onClick={toggle}>Close</button>
      </div>
    </div>
  );
};

export default TextOverlay;

