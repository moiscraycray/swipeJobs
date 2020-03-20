import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

import strings from './strings.json';

import Header from '../components/Header';
import JobDetails from '../components/JobDetails';

import './App.scss';

const App = ({ fetchUser, user }) => {
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <>
      <Header
        user={user}
      />
      <JobDetails
        strings={strings}
      />
    </>
  );
}

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(
  mapStateToProps,
  { fetchUser }
)(App);
