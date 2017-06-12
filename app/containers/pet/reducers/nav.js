import { PetNavigator } from '../PetNavigator';
import initialState from './initialState';

export default (state = initialState.nav, action) => {
  let nextState;

  switch (action.type) {
    default:
      nextState = PetNavigator.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
};
