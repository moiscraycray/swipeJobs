import swipeJob from '../apis/swipeJob';

export const fetchUser = () => {
  return async (dispatch) => {
    const response = await swipeJob.get('/profile');

    dispatch({
      type: 'FETCH_USER',
      payload: response
    });
  }
};
