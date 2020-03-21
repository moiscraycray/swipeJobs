import React from 'react';

const HeroImage = ({ jobImage }) => {
  return (
    <img style={{ width: '100%' }} src={jobImage.imageUrl} alt={jobImage.name} />
  )
}

export default HeroImage;
