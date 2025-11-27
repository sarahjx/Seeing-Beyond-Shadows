import React from 'react';
import './Popup.css';

const Popup = ({ text, onClose, position }) => {
  if (!text) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div 
        className="popup-content" 
        onClick={(e) => e.stopPropagation()}
        style={position ? { top: position.y, left: position.x } : {}}
      >
        <button className="popup-close" onClick={onClose}>×</button>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Popup;

