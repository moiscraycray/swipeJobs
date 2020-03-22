export const initialState = {
  matches: [],
  // selectedJobIds: []
  selectedJobId: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MATCHES':
      // return action.payload;
      return {
        ...state,
        matches: [...action.payload]
      }
    case 'ACCEPT_JOB':
      console.log('action accept job', action);
      // return [
      //   ...state,
      //   { selectedJobId: action.jobId }
      // ];
      return {
        ...state,
        // selectedJobIds: [
        //   ...state.selectedJobIds,
        //   action.jobId
        // ]
        selectedJobId: action.jobId
      }
    case 'REJECT_JOB':
      console.log('action reject jobs', action);
      // return action.payload;
      return {
        ...state,
        selectedJobId: action.jobId
      }
    default:
      return state;
  }
};
