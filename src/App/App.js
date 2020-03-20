import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUser, fetchMatches } from '../actions';

import strings from './strings.json';

import Header from '../components/Header';
import JobDetails from '../components/JobDetails';

import './App.scss';

const App = ({ fetchUser, fetchMatches, user, matches }) => {
  useEffect(() => {
    fetchUser();
    fetchMatches();
  }, [fetchUser, fetchMatches]);

  return (
    <>
      <Header
        user={user}
      />
      <div className="light-grey-background">
        <JobDetails
          strings={strings}
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
    fetchMatches
  }
)(App);
