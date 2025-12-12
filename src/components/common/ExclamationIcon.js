import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './ExclamationIcon.css';

const ExclamationIcon = ({ onClick, isActive }) => {
  const iconRef = useRef(null);

  useEffect(() => {
    if (iconRef.current) {
      if (isActive) {
        gsap.to(iconRef.current, {
          scale: 1.15,
          rotation: 360,
          duration: 0.5,
          ease: "back.out(1.7)"
        });
      } else {
        gsap.to(iconRef.current, {
          scale: 1,
          rotation: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    }
  }, [isActive]);

  return (
    <button 
      className={`exclamation-icon ${isActive ? 'active' : ''}`}
      onClick={onClick}
      aria-label="Toggle narration"
      ref={iconRef}
    >
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" fill="#6F1D1B" className="icon-circle"/>
        <path d="M20 10 L20 22 M20 26 L20 30" stroke="#FFE6A7" strokeWidth="3" strokeLinecap="round" className="icon-mark"/>
      </svg>
    </button>
  );
};

export default ExclamationIcon;

