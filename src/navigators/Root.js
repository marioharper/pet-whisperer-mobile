import React from 'react';
import PropTypes from 'prop-types';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import LoggedIn from './LoggedIn';
import AuthScreen from '../containers/auth';

export const RootNavigator = StackNavigator({
  LoggedIn: { screen: LoggedIn },
  AuthScreen: { screen: AuthScreen },
}, {
  headerMode: 'screen',
  navigationOptions: {
    header: null,
  },
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <RootNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.appNav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
