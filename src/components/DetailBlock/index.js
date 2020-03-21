import React from 'react';
import moment from 'moment-timezone';

import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaTools,
  FaUserCircle
} from "react-icons/fa";

import './DetailBlock.scss';

const DetailBlock = ({
  strings,
  shifts,
  address,
  requirements,
  name,
  phone,
  milesToTravel,
  branchPhoneNumber,
  zoneId
}) => {
  let Icon, heading, content;
  if (shifts) {
    Icon = FaCalendarAlt;
    heading = strings.shiftDates;
    const formattedShifts = shifts.map(d => {
      const formattedStartDate = moment(d.startDate).tz(zoneId).format('MMM D, ddd hh:mm a').toUpperCase();
      const formattedEndDate = moment(d.endDate).tz(zoneId).format('hh:mm a z').toUpperCase();
      return <li key={formattedStartDate}>{`${formattedStartDate} - ${formattedEndDate}`}</li>
    });
    content = <ul>{formattedShifts}</ul>;
  } else if (address) {
    Icon = FaMapMarkerAlt;
    heading = strings.location;
    content = (
      <>
        <p>{address.formattedAddress}</p>
        <span>{milesToTravel.toFixed(2)} {strings.milesFromYourJobSearchLocation}</span>
      </>
    )
  } else if (requirements) {
    Icon = FaTools;
    heading = strings.requirements;
    content = (
      <ul>
        {requirements.map(li => <li className="requirement-list-item" key={li}>{li}</li>)}
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
      <Icon size="1.25rem" />
      <div>
        <h3>{heading}</h3>
        {content}
      </div>
    </div>
  )
};

export default DetailBlock;
