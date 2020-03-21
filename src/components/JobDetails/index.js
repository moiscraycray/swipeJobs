import React from 'react';

import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaTools,
  FaUserCircle
} from "react-icons/fa";

import HeroImage from '../HeroImage';
import JobTitle from '../JobTitle';
import Button from '../Button';
import ColorBack from '../ColorBack';

import './JobDetails.scss';

const JobDetails = ({ strings, handleAcceptJob, handleRejectJob, currentMatch }) => {
  const hourlyRate = (currentMatch.wagePerHourInCents / 100).toFixed(2);

  return (
    <div className="container job-details-container">
      <HeroImage
        jobImage={currentMatch.jobTitle}
      />
      <JobTitle
        jobTitle={currentMatch.jobTitle.name}
        companyName={currentMatch.company.name}
      />
      <ColorBack>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3 className="job-info-title">{strings.distance}</h3>
          <h3 className="job-info-title">{strings.hourlyRate}</h3>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className="job-info">{currentMatch.milesToTravel} {strings.miles}</p>
          <p className="job-info">
            <sup>
              <span style={{ fontSize: "1rem"}}>$</span>
            </sup>
            {hourlyRate}
          </p>
        </div>
      </ColorBack>
      <div className="buttons">
        <Button
          text={strings.rejectText}
          onClick={handleRejectJob}
          disabled
        />
        <Button
          text={strings.confirmText}
          onClick={handleAcceptJob}
        />
      </div>
    </div>
  )
}

export default JobDetails;
