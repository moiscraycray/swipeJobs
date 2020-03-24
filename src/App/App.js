import React from 'react';
import { connect } from 'react-redux';
import isEqual from 'lodash/isEqual';

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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matchesData: [],
      currentMatch: [],
      selectedJobIds: []
    }
  }

  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchMatches();
  }

  componentDidUpdate(prevProps) {
    if (!isEqual(prevProps.jobs.matches, this.props.jobs.matches) && this.props.jobs.matches && this.props.jobs.matches.length) {
      this.setState({
        matchesData: [...this.props.jobs.matches],
      });
    } else if (prevProps.jobs.selectedJobId !== this.props.jobs.selectedJobId) {
      this.setState({ selectedJobIds: [...this.state.selectedJobIds, this.props.jobs.selectedJobId] }, () => {
        const filteredMatchesData = this.state.matchesData.filter(obj => !this.state.selectedJobIds.includes(obj.jobId));
        this.setState({ matchesData: [...filteredMatchesData] });
      });
    }
  }

  handleClick = (e, data) => {
    e.preventDefault();
    e.stopPropagation();
    const { action } = e.currentTarget.dataset;

    if (action === 'accept') {
      this.props.acceptJob(data);
    } else {
      this.props.rejectJob(data);
    }
  }

  render() {
    if (!this.props.jobs.matches.length && !this.state.matchesData.length && !this.props.user) {
      return <p>Loading...</p>
    } else if (!this.props.jobs.matches.length || !this.state.matchesData.length) {
      return <p>No job matches</p>
    }
    return (
      <>
        <Header
          user={this.props.user}
          strings={strings}
        />
        <div className="light-grey-background">
          <JobDetails
            strings={strings}
            handleClick={this.handleClick}
            currentMatch={this.state.matchesData.length && this.state.matchesData[0]}
          />
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    jobs: state.jobs
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
