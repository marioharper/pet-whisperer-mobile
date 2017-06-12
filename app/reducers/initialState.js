import { AppNavigator } from '../AppNavigator';

const firstAction = AppNavigator.router.getActionForPathAndParams('Home');
const navInitialState = AppNavigator.router.getStateForAction(firstAction);

export default {
  pets: [],
  nav: navInitialState,
};
