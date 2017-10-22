import * as types from '../constants/actions';
import initialState from './initialState';

export default (state = initialState.auth, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoggedIn: true,
      });

    case types.LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isLoggedIn: false,
      });

    case types.GET_LOGIN_STATUS_SUCCESS:
      return Object.assign({}, state, {
        isLoggedIn: action.isLoggedIn,
      });

    default:
      return state;
  }
};
