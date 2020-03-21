import React from 'react';

import HeroImage from '../HeroImage';
import JobTitle from '../JobTitle';
import Button from '../Button';
import ColorBack from '../ColorBack';
import DetailBlock from '../DetailBlock';

import './JobDetails.scss';

const JobDetails = ({ strings, handleAcceptJob, handleRejectJob, currentMatch }) => {
  const {
    branch,
    branchPhoneNumber,
    company,
    jobId,
    jobTitle,
    milesToTravel,
    requirements,
    shifts,
    wagePerHourInCents
  } = currentMatch;

  let detailsArr; 
  if (requirements) {
    detailsArr = [{shifts: [...shifts]}, {address: company.address}, {requirements}, company.reportTo];
  } else {
    detailsArr = [{shifts: [...shifts]}, {address: company.address}, company.reportTo];
  }

  return (
    <div className="container job-details-container">
      <HeroImage
        jobImage={jobTitle}
      />
      <JobTitle
        jobTitle={jobTitle.name}
        companyName={company.name}
      />
      <ColorBack>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3 className="job-info-title">{strings.distance}</h3>
          <h3 className="job-info-title">{strings.hourlyRate}</h3>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className="job-info">{milesToTravel.toFixed(1)} {strings.miles}</p>
          <p className="job-info">
            <sup>
              <span style={{ fontSize: "1rem"}}>$</span>
            </sup>
            {(wagePerHourInCents / 100).toFixed(2)}
          </p>
        </div>
      </ColorBack>
      <div className="detail-blocks-container">
        {detailsArr.map(c => (
          <DetailBlock 
            key={Object.getOwnPropertyNames(c)}
            strings={strings}
            milesToTravel={milesToTravel}
            branchPhoneNumber={branchPhoneNumber}
            zoneId={company.address.zoneId}
            {...c}
          />
        ))}
      </div>
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
