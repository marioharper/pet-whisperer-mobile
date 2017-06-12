import { AppNavigator } from '../AppNavigator';
import initialState from './initialState';

export default (state = initialState.nav, action) => {
  let nextState;
  console.log('Reducer Action: ', action.type);
  switch (action.type) {
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
};
