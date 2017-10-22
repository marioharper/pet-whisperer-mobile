import React from 'react';
import PropTypes from 'prop-types';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { MainNavigator } from './MainNavigator';
import SplashScreen from '../containers/splashScreen';
import AuthScreen from '../containers/auth';

export const AppNavigator = StackNavigator({
  SplashScreen: { screen: SplashScreen },
  MainNavigator: { screen: MainNavigator },
  AuthScreen: { screen: AuthScreen },
}, {
  headerMode: 'screen',
  navigationOptions: {
    header: null,
  },
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.appNav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
