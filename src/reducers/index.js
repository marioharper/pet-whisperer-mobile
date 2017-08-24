import { combineReducers } from 'redux';
import pets from './pets';
import appNav from './appNav';
import petsNav from './petsNav';

export default combineReducers({
  pets,
  appNav,
  petsNav,
});
