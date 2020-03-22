import { combineReducers } from 'redux';
import userReducer from './userReducer';
import jobsReducer from './jobsReducer';

export default combineReducers({
  user: userReducer,
  jobs: jobsReducer
});
