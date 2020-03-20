import React from 'react';
import './Button.scss';

const Button = ({ disabled = null, text }) => {
  return (
    <button className={disabled && "disabled"}>
      {text}
    </button>
  )
};

export default Button;
