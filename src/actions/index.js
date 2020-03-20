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
