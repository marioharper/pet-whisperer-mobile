import { NavigationActions } from 'react-navigation';
import * as authApi from '../api/auth';
import * as actionTypes from '../constants/actions';

export function login() {
  return (dispatch) => {
    dispatch({ type: actionTypes.LOGIN });

    return authApi.login()
      .then(({ idToken }) => {
        dispatch(NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'SplashScreen' })],
        }));

        dispatch({
          type: actionTypes.LOGIN_SUCCESS,
          token: idToken,
        });
      });
  };
}

export function logout() {
  return (dispatch) => {
    dispatch({ type: actionTypes.LOGOUT });

    return authApi.logout()
      .then(() => {
        dispatch({
          actions: [
            {
              routeName: 'MainNavigator',
              type: 'Navigation/NAVIGATE',
            },
          ],
          index: 0,
          type: 'Navigation/RESET',
        });

        dispatch({
          type: actionTypes.LOGOUT_SUCCESS,
        });
      });
  };
}

export function getLoginStatus() {
  return (dispatch) => {
    dispatch({ type: actionTypes.GET_LOGIN_STATUS });

    return authApi.isLoggedIn()
      .then(isLoggedIn => dispatch({
        type: actionTypes.GET_LOGIN_STATUS_SUCCESS,
        isLoggedIn,
      }));
  };
}


export function getLoginStatusAndRedirect() {
  return async (dispatch, getState) => {
    await dispatch(getLoginStatus());

    const { isLoggedIn } = getState().auth;

    if (isLoggedIn) {
      return dispatch(NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'LoggedIn' })],
        key: null,
      }));
    }

    return dispatch(NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'AuthScreen' })],
      key: null,
    }));
  };
}
