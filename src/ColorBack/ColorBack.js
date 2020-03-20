import React from 'react';
import './ColorBack.scss';

const ColorBack = ({ children }) => {
  return (
    <div className="color-back-container">
      {children}
    </div>
  )
}

export default ColorBack;
