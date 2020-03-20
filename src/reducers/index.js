import { combineReducers } from 'redux';
import userReducer from './userReducer';
import matchesReducer from './matchesReducer';

export default combineReducers({
  user: userReducer,
  matches: matchesReducer
});
