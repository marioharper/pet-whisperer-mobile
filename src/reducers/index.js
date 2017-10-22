import { combineReducers } from 'redux';
import pets from './pets';
import appNav from './appNav';
import auth from './auth';

export default combineReducers({
  pets,
  appNav,
  auth,
});
