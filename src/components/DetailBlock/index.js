import React from 'react';
import './DetailBlock.scss';

import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaTools,
  FaUserCircle
} from "react-icons/fa";

const DetailBlock = ({
  strings,
  shifts,
  address,
  requirements,
  name,
  phone,
  milesToTravel,
  branchPhoneNumber
}) => {
  let Icon, heading, content;
  if (shifts) {
    Icon = FaCalendarAlt;
    heading = strings.shiftDates;
  } else if (address) {
    Icon = FaMapMarkerAlt;
    heading = strings.location;
    content = (
      <>
        <p>{address.formattedAddress}</p>
        <p>{milesToTravel.toFixed(2)} {strings.milesFromYourJobSearchLocation}</p>
      </>
    )
  } else if (requirements) {
    Icon = FaTools;
    heading = strings.requirements;
    content = (
      <ul>
        {requirements.map(li => <li key={li}>{li}</li>)}
      </ul>
    )
  } else if (name) {
    Icon = FaUserCircle;
    heading = strings.reportTo;
    const num = phone || branchPhoneNumber
    const areaCode = num.slice(0, 3);
    const midNum = num.slice(3, 6);
    const endNum = num.slice(6, 10);
    content = <p>{name} {num && <a href={`tel:${num}`}>{`(${areaCode})`} {midNum} {endNum}</a>}</p>
  }

  return (
    <div className="detail-block-container">
      <Icon size="1.5rem" />
      <div>
        <h3>{heading}</h3>
        {content}
      </div>
    </div>
  )
};

export default DetailBlock;
