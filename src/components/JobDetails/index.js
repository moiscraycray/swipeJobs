import React from 'react';

import Header from '../Header';
import HeroImage from '../HeroImage';
import JobTitle from '../JobTitle';
import Button from '../Button';
import ColorBack from '../ColorBack';

const JobDetails = ({ strings }) => {
  return (
    <>
        <Header />
        <div className="container">
          <HeroImage />
          <JobTitle />
          <ColorBack>
            <div style={{ display: "flex" }}>
              <h3>{strings.distance}</h3>
              <h3>{strings.hourlyRate}</h3>
            </div>
            <p>hello</p>
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
      </>
  )
}

export default JobDetails;
