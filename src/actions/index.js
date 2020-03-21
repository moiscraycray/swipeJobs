import swipeJob from '../apis/swipeJob';

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
    const response = await swipeJob.get(`/job/​${jobId}/accept`);
    console.log(response)

    dispatch({
      type: 'ACCEPT_JOB',
      // payload: response.data
    });
  };
}

export const rejectJob = (jobId) => {
  return async (dispatch) => {
    const response = await swipeJob.get(`/job/​${jobId}/reject`);
    console.log(response)

    dispatch({
      type: 'REJECT_JOB',
      // payload: response.data
    });
  };
}
