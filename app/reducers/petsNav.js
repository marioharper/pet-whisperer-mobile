import { PetsNavigator } from '../navigators/PetsNavigator';

export default (state, action) => {
  let nextState;

  switch (action.type) {
    default:
      nextState = PetsNavigator.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
};
