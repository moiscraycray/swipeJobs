export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_MATCHES':
      return action.payload;
    case 'ACCEPT_JOB':
      console.log('action accept job', action);
      return state;
    case 'REJECT_JOB':
      console.log('action reject jobs', action);
      return state;
    default:
      return state;
  }
};
