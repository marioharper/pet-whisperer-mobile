import { combineReducers } from 'redux';
import pets from './pets';
import nav from './nav';

export default combineReducers({
  pets,
  nav,
});
