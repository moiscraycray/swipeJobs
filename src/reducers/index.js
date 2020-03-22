import { combineReducers } from 'redux';
import userReducer from './userReducer';
// import matchesReducer from './matchesReducer';
import jobsReducer from './jobsReducer';

export default combineReducers({
  user: userReducer,
  jobs: jobsReducer
  // matches: matchesReducer
});
