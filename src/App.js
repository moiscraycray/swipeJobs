import React from 'react';
import './App.scss';

import Header from './Header/Header';
import HeroImage from './HeroImage/HeroImage';
import JobTitle from './JobTitle/JobTitle';
import Button from './Button/Button';
import ColorBack from './ColorBack/ColorBack';

const strings = {
  confirmText: "I'll Take it",
  rejectText: "No Thanks",
  distance: "Distance",
  hourlyRate: "Hourly Rate"
}

class App extends React.Component {
  componentDidMount() {
    fetch('https://test.swipejobs.com/api/worker/7f90df6e-b832-44e2-b624-3143d428001f/profile')
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
        } else {
          console.log(res);
        }
      });
  }

  render() {
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
    );
  }
}

export default App;
