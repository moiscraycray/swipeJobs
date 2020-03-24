import React, { memo } from 'react';
import './Button.scss';

const Button = memo(({ reject = null, text, onHandleClick, dataAction, data }) => {
  return (
    <button
      data-action={dataAction}
      className={reject && "cancel"}
      onClick={(e) => onHandleClick(e, data)}
    >
      {text}
    </button>
  )
});

export default Button;
