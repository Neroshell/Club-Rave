import React from 'react';
import './Button.css';

const Button = (props) => {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick(); // Call the onClick function passed as prop
    }
  };

  return (
    <button className="button-33" style={props.style} onClick={handleClick}>
      <span>{props.name}</span>
    </button>
  );
};

export default Button;


