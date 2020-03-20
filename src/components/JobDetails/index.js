import React from 'react';

import HeroImage from '../HeroImage';
import JobTitle from '../JobTitle';
import Button from '../Button';
import ColorBack from '../ColorBack';

import './JobDetails.scss';

const JobDetails = ({ strings }) => {
  return (
    <div className="container job-details-container">
      <HeroImage />
      <JobTitle />
      <ColorBack>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>{strings.distance}</h3>
          <h3>{strings.hourlyRate}</h3>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", color: "white" }}>
          <p>hello</p>
          <p>$13.50</p>
        </div>
      </ColorBack>
      <div className="buttons">
        <Button
          text={strings.rejectText}
          disabled
        />
        <Button
          text={strings.confirmText}
        />
      </div>
    </div>
  )
}

export default JobDetails;
