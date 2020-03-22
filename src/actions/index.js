import swipeJob from '../apis/swipeJob';
import axios from 'axios';

export const fetchUser = () => {
  return async (dispatch) => {
    const response = await swipeJob.get('/profile');

    dispatch({
      type: 'FETCH_USER',
      payload: response.data
    });
  }
};

export const fetchMatches = () => {
  return async (dispatch) => {
    const response = await swipeJob.get('/matches');

    dispatch({
      type: 'FETCH_MATCHES',
      payload: response.data
    });
  };
};

export const acceptJob = (jobId) => {
  return async (dispatch) => {
    console.log('accept url', `/job/​${jobId}/accept`);
    const response = await swipeJob.get(`/job/${jobId}/accept`);
    console.log(response)

    dispatch({
      type: 'ACCEPT_JOB',
      jobId
    });
  };
}

export const rejectJob = (jobId) => {
  return async (dispatch) => {
    console.log('reject', `/job/​${jobId}/reject`);
    const response = await swipeJob.get(`/job/​${jobId}/reject`);
    console.log(response)

    dispatch({
      type: 'REJECT_JOB',
      payload: response.data
    });
  };
}
