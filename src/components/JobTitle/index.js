import React from 'react';
import './JobTitle.scss';

const JobTitle = ({ jobTitle, companyName }) => {
  return (
    <div className="job-title-container">
      <h2>{jobTitle}</h2>
      <p>{companyName}</p>
    </div>
  )
}

export default JobTitle;
