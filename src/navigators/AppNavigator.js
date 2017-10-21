import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { addNavigationHelpers, TabNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { MaterialIcons, EvilIcons } from '@expo/vector-icons';
import { PetsNavigator } from '../navigators/PetsNavigator';

export const AppNavigator = TabNavigator({
  Home: {
    screen: PetsNavigator,
    navigationOptions: {
      title: 'Pets',
      tabBarIcon: ({ tintColor }) => <MaterialIcons name="pets" size={20} color={tintColor} />,
    },
  },
  Profile: {
    screen: () => (<Text>Profile</Text>),
    navigationOptions: {
      title: 'Profile',
      tabBarIcon: ({ tintColor }) => <EvilIcons name="user" size={30} color={tintColor} />,
    },
  },
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    style: {
      paddingTop: 5,
      marginBottom: 5,
      backgroundColor: 'white',
      borderTopColor: '#F5F8FA',
    },
    activeTintColor: '#39CFFD',
    inactiveTintColor: '#D0E2ED',
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
