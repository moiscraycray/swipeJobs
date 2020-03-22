import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import isEqual from 'lodash/isEqual';
import isEmpty from 'lodash/isEmpty';

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
  jobs,
  acceptJob,
  rejectJob
}) => {
  const [matchesData, setMatchesData] = useState([]);
  const [currentMatch, setCurrentMatch] = useState([]);
  const [selectedJobIds, setSelectedJobIds] = useState([]);

  useEffect(() => {
    fetchUser();
    fetchMatches();
  }, [fetchUser, fetchMatches]);

  useEffect(() => {
    // const selectedJobId = matches.find(obj => obj.hasOwnProperty('selectedJobId'));
    // if (selectedJobId) {
    //   setSelectedJobIds([...selectedJobIds, selectedJobId.selectedJobId]);
    // }
    // let filteredMatches;
    // if (selectedJobIds.length) {
    //   filteredMatches = matches.filter(m => m.hasOwnProperty('jobId') && selectedJobIds.includes(m.jobId));
    //   console.log('dkjfkdj', filteredMatches);
    // }
    setMatchesData([...jobs.matches]);
  }, [jobs])

  useEffect(() => {
    // const selectedJobId = matches.find(obj => obj.hasOwnProperty('selectedJobId'));
    // if (selectedJobId) {
    //   console.log('selectedJobId', selectedJobId.selectedJobId);
    //   setSelectedJobIds([...selectedJobIds, selectedJobId.selectedJobId]);
    // }
    setCurrentMatch(matchesData[0]);
  }, [matchesData])

  const handleClick = (e, data) => {
    e.preventDefault();
    e.stopPropagation();
    const { action } = e.currentTarget.dataset;
    console.log('handleclick data', data);

    const selectedJobId = jobs.matches.find(obj => obj.hasOwnProperty('selectedJobId'));
    if (selectedJobId) {
      setSelectedJobIds([...selectedJobIds, selectedJobId.selectedJobId]);
    }
    let filteredMatches;
    if (selectedJobIds.length) {
      filteredMatches = jobs.matches.filter(m => m.hasOwnProperty('jobId') && selectedJobIds.includes(m.jobId));
      console.log('dkjfkdj', filteredMatches);
    }

    if (action === 'accept') {
      console.log('ACCEPPTPTt')
      acceptJob(data);
    } else {
      console.log('REJECTTT');
      rejectJob(data);
    }
  }

  if (true) {
    return <p>testing</p>
  }

  if (!jobs.matches.length || !matchesData.length || !currentMatch) {
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
          // handleAcceptJob={acceptJob}
          // handleRejectJob={rejectJob}
          handleClick={handleClick}
          currentMatch={currentMatch}
        />
      </div>
    </>
  );
}

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       matchesData: [],
//       currentMatch: [],
//       selectedJobIds: []
//     }
//   }

//   componentDidMount() {
//     this.props.fetchUser();
//     this.props.fetchMatches();
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (!isEqual(prevProps.jobs.matches, this.props.jobs.matches) && this.props.jobs.matches && this.props.jobs.matches.length) {
//       console.log('AAA');
//       this.setState({
//         matchesData: [...this.props.jobs.matches],
//         // currentMatch: this.props.jobs.matches[0]
//       });
//     // } else if (prevProps.jobs.selectedJobIds.length !== this.props.jobs.selectedJobIds.length) {
//     } else if (prevProps.jobs.selectedJobId !== this.props.jobs.selectedJobId) {
//       console.log('BBB');
//       this.setState({ selectedJobIds: [...this.state.selectedJobIds, this.props.jobs.selectedJobId] }, () => {
//         const filteredMatchesData = this.state.matchesData.filter(obj => !this.state.selectedJobIds.includes(obj.jobId));
//         this.setState({ matchesData: [...filteredMatchesData] });
//       });
//     }
//   }

//   // componentDidUpdate(prevProps, prevState) {
//   //   if (!isEqual(prevState.matches, this.state.matchesData) && prevState.matchesData.length !== this.state.matchesData.length) {
//   //     console.log('AAA', this.state.matchesData);
//   //     const selectedJobId = this.state.matchesData.find(obj => obj.hasOwnProperty('selectedJobId'));
//   //     const newMatchesData = this.state.matchesData.filter(obj => !obj.hasOwnProperty('selectedJobId'));
//   //     if (selectedJobId) {
//   //       console.log('newMatchesData-->', newMatchesData);
//   //       const filteredMatchesData = newMatchesData.filter(obj => obj.jobId !== selectedJobId.selectedJobId);
//   //       this.setState({
//   //         selectedJobIds: [...this.state.selectedJobIds, selectedJobId.selectedJobId],
//   //         matchesData: [...filteredMatchesData]
//   //       }, () => this.setState({ currentMatch: this.state.matchesData[0] }));
//   //     }
//   //   } else if (!isEqual(prevProps.matches, this.props.matches) && this.props.matches.length && !this.state.currentMatch.length) {
//   //     console.log('BBB');
//   //     this.setState({ matchesData: this.props.matches }, () => {
//   //       this.setState({ currentMatch: this.state.matchesData[0] });
//   //     });
//   //   }
//   // }

//   handleClick = (e, data) => {
//     e.preventDefault();
//     e.stopPropagation();
//     const { action } = e.currentTarget.dataset;
//     // console.log('handleclick data', data);

//     // const selectedJobId = this.props.matches.find(obj => obj.hasOwnProperty('selectedJobId'));
//     // if (selectedJobId) {
//     //   this.setState({ selectedJobIds: [...this.state.selectedJobIds, selectedJobId.selectedJobId] })
//     // }
//     // let filteredMatches;
//     // if (this.state.selectedJobIds.length) {
//     //   filteredMatches = this.props.matches.filter(m => m.hasOwnProperty('jobId') && this.state.selectedJobIds.includes(m.jobId));
//     //   console.log('dkjfkdj', filteredMatches);
//     // }

//     if (action === 'accept') {
//       console.log('ACCEPPTPTt')
//       this.props.acceptJob(data);
//     } else {
//       console.log('REJECTTT');
//       this.props.rejectJob(data);
//     }
//   }

  // render() {
  //   // return <p>testing</p>
  //   if (!this.props.jobs.matches.length && !this.state.matchesData.length && !this.props.user) {
  //     return <p>Loading...</p>
  //   } else if (!this.props.jobs.matches.length || !this.state.matchesData.length) {
  //     return <p>No job matches</p>
  //   }
  //   return (
  //     <>
  //       <Header
  //         user={this.props.user}
  //       />
  //       <div className="light-grey-background">
  //         <JobDetails
  //           strings={strings}
  //           // handleAcceptJob={acceptJob}
  //           // handleRejectJob={rejectJob}
  //           handleClick={this.handleClick}
  //           // currentMatch={this.state.currentMatch}
  //           currentMatch={this.state.matchesData.length && this.state.matchesData[0]}
  //         />
  //       </div>
  //     </>
  //   )
  // }
// }

const mapStateToProps = (state) => {
  return {
    user: state.user,
    // matches: state.matches
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
