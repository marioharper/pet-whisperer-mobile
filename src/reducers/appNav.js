import { AppNavigator } from '../navigators/AppNavigator';

export default (state, action) => {
  let nextState;
  console.log('Reducer Action: ', action);
  switch (action.type) {
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
};
