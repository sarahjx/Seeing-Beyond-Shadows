import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './Popup.css';

const Popup = ({ text, onClose, position, popupRef }) => {
  const contentRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (contentRef.current && overlayRef.current) {
      gsap.from(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out"
      });
      
      gsap.from(contentRef.current, {
        scale: 0.7,
        opacity: 0,
        y: 30,
        duration: 0.5,
        ease: "back.out(1.7)"
      });
    }
  }, [text]);

  if (!text) return null;

  return (
    <div className="popup-overlay" onClick={onClose} ref={overlayRef}>
      <div 
        className="popup-content" 
        ref={contentRef || popupRef}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="popup-close" onClick={onClose}>×</button>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Popup;


