import { PetNavigator } from '../PetNavigator';

const firstAction = PetNavigator.router.getActionForPathAndParams('Activities');
const navInitialState = PetNavigator.router.getStateForAction(firstAction);

export default {
  nav: navInitialState,
};
