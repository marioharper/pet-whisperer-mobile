import { AuthSession } from 'expo';
import jwtDecoder from 'jwt-decode';
import * as actionTypes from '../constants/actions';

const auth0ClientId = 'nNeQx06JEjFktQLEpVCM48lsMsbB3739';
const auth0Domain = 'https://pet-whisperer.auth0.com';

/**
 * Converts an object to a query string.
 */
const toQueryString = params => `?${Object.entries(params)
  .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
  .join('&')}`;

export function login() {
  return (dispatch) => {
    dispatch({ type: actionTypes.LOGIN });

    const redirectUrl = AuthSession.getRedirectUrl();

    return AuthSession.startAsync({
      authUrl: `${auth0Domain}/authorize${toQueryString({
        client_id: auth0ClientId,
        response_type: 'token',
        scope: 'openid profile',
        redirect_uri: redirectUrl,
      })}`,
    }).then((result) => {
      console.log(result);

      if (result.type !== 'success') {
        return Promise.reject('Unsuccessful login');
      }

      const {
        error,
        error_description: errorDescription,
        id_token: idToken,
      } = result.params;

      if (error) {
        return Promise.reject(errorDescription
          || 'something went wrong while logging in');
      }

      const encodedToken = idToken;
      const decodedToken = jwtDecoder(encodedToken);
      const username = decodedToken.name;
      console.log('decodedToken', decodedToken);
      console.log('username', username);

      return dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        token: idToken,
      });
    });
  };
}

export function logout() {

}
