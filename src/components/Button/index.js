import React from 'react';
import './Button.scss';

const Button = ({ reject = null, text, onHandleClick, dataAction, data }) => {
  return (
    <button
      data-action={dataAction}
      className={reject && "disabled"}
      onClick={(e) => onHandleClick(e, data)}
    >
      {text}
    </button>
  )
};

export default Button;
