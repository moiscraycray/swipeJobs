import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  fetchUser,
  fetchMatches,
  acceptJob,
  rejectJob
} from '../actions';

import strings from './strings.json';

import Header from '../components/Header';
import JobDetails from '../components/JobDetails';

import './App.scss';

const App = ({
  fetchUser,
  fetchMatches,
  user,
  matches
}) => {
  const [matchesData, setMatchesData] = useState([]);
  const [currentMatch, setCurrentMatch] = useState([]);

  useEffect(() => {
    fetchUser();
    fetchMatches();
  }, [fetchUser, fetchMatches]);

  useEffect(() => {
    setMatchesData([...matches]);
  }, [matches])

  useEffect(() => {
    setCurrentMatch(matchesData[0]);
  }, [matchesData])

  if (!matches.length || !matchesData.length || !currentMatch) {
    return <p>Loading...</p>
  }

  return (
    <>
      <Header
        user={user}
      />
      <div className="light-grey-background">
        <JobDetails
          strings={strings}
          handleAcceptJob={acceptJob}
          handleRejectJob={rejectJob}
          currentMatch={currentMatch}
        />
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    matches: state.matches
  };
};

export default connect(
  mapStateToProps,
  {
    fetchUser,
    fetchMatches,
    acceptJob,
    rejectJob
  }
)(App);
