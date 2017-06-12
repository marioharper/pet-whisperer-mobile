import { combineReducers } from 'redux';
import pets from './pets';
import nav from './nav';
import petActivities from '../containers/petActivities/reducers/petActivities';
import petNav from '../containers/pet/reducers/nav';

export default combineReducers({
  pets,
  nav,
  petActivities,
  petNav,
});
