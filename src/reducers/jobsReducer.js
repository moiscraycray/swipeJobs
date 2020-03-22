export const initialState = {
  matches: [],
  selectedJobId: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MATCHES':
      return {
        ...state,
        matches: [...action.payload]
      }
    case 'ACCEPT_JOB':
      return {
        ...state,
        selectedJobId: action.jobId
      }
    case 'REJECT_JOB':
      return {
        ...state,
        selectedJobId: action.jobId
      }
    default:
      return state;
  }
};
