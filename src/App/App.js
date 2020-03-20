import React from 'react';
import './App.scss';

import strings from './strings.json';

import JobDetails from '../components/JobDetails';

const App = () => {
  return (
    <JobDetails
      strings={strings}
    />
  );
}

export default App;
