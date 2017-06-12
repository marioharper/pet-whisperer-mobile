import { combineReducers } from 'redux';
import pets from './pets';
import nav from './nav';
import petActivities from './petActivities';

export default combineReducers({
  pets,
  nav,
  petActivities,
});
