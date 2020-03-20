import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions';

import Header from '../Header';
import HeroImage from '../HeroImage';
import JobTitle from '../JobTitle';
import Button from '../Button';
import ColorBack from '../ColorBack';

const JobDetails = ({ fetchUser, strings }) => {
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <>
      <Header />
      <div className="container">
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
    </>
  )
}

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(
  mapStateToProps,
  { fetchUser }
)(JobDetails);
