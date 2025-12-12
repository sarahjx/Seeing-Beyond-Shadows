import React from 'react';
import './Button.css';

const Button = ({ onClick, children, className = '', variant = 'primary' }) => {
  return (
    <button 
      className={`storybook-button storybook-button-${variant} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;


