export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_MATCHES':
      console.log('action', action);
      return action.payload;
    default:
      return state;
  }
};