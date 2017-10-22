import { AuthSession } from 'expo';
import { AsyncStorage } from 'react-native';
import jwtDecoder from 'jwt-decode';

const auth0ClientId = 'nNeQx06JEjFktQLEpVCM48lsMsbB3739';
const auth0Domain = 'https://pet-whisperer.auth0.com';

/**
 * Converts an object to a query string.
 */
const toQueryString = params => `?${Object.entries(params)
  .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
  .join('&')}`;

const setToken = idToken => AsyncStorage.setItem('idToken', idToken);

const removeToken = () => AsyncStorage.removeItem('idToken');

const getToken = () => AsyncStorage.getItem('idToken');

export function login() {
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
      return Promise.reject(errorDescription || 'something went wrong while logging in');
    }

    setToken(idToken);
    const decodedToken = jwtDecoder(idToken);
    const username = decodedToken.name;
    console.log('decodedToken', decodedToken);
    console.log('username', username);

    return Promise.resolve({ idToken });
  });
}

export function isLoggedIn() {
  return getToken()
    .then(data => data !== null);
}

export function logout() {
  return removeToken();
}
