import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Button from '../common/Button';
import Chains from '../../assets/chains.png';
import './Scene3Choice.css';

const Scene3Choice = ({ onNext }) => {
  const [chainBroken, setChainBroken] = useState(false);
  const sceneRef = useRef(null);
  const chainRef = useRef(null);
  const buttonRef = useRef(null);
  const breakingTextRef = useRef(null);

  useEffect(() => {
    if (sceneRef.current) {
      gsap.from(sceneRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      });
    }

    if (chainRef.current) {
      gsap.from(chainRef.current.children, {
        scale: 0,
        rotation: -180,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        stagger: 0.1,
        ease: "back.out(1.7)"
      });
    }

    if (buttonRef.current) {
      gsap.from(buttonRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.8,
        ease: "back.out(1.7)"
      });
    }
  }, []);

  useEffect(() => {
    if (chainBroken && chainRef.current) {
      gsap.to(chainRef.current.children, {
        scale: 0,
        rotation: 180,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.in"
      });

      if (breakingTextRef.current) {
        gsap.from(breakingTextRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.6,
          delay: 0.3,
          ease: "power2.out"
        });
      }
    }
  }, [chainBroken]);

  const handleBreakFree = () => {
    setChainBroken(true);
    // Play chain break sound effect (placeholder)
    setTimeout(() => {
      onNext();
    }, 1500);
  };

  return (
    <div className="scene scene-3" ref={sceneRef}>
      <div className="scene-background scene-3-background">
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
            <div className={`chain-visual ${chainBroken ? 'broken' : ''}`} ref={chainRef}>
              <img src={Chains} alt="Chain link" className="chain-link-img" />
              <img src={Chains} alt="Chain link" className="chain-link-img" />
              <img src={Chains} alt="Chain link" className="chain-link-img" />
            </div>
          </div>

          {!chainBroken && (
            <div className="choice-button-container" ref={buttonRef}>
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
              <p className="breaking-text" ref={breakingTextRef}>The chain breaks...</p>
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

