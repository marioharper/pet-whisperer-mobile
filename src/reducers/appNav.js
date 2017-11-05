import { RootNavigator } from '../navigators/Root';

export default (state, action) => RootNavigator.router.getStateForAction(action, state) || state;
