import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { addNavigationHelpers, TabNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Nav from '../components/nav';
import { PetsNavigator } from '../navigators/PetsNavigator';

export const AppNavigator = TabNavigator({
  Home: {
    screen: PetsNavigator,
    navigationOptions: {
      title: 'Pets',
      tabBarIcon: ({ tintColor }) => <Icon name="pets" color={tintColor} size={30} />,
    },
  },
  Friends: {
    screen: () => (<Text>Friends</Text>),
    navigationOptions: {
      title: 'Friends',
      tabBarIcon: ({ tintColor }) => <Icon name="people" color={tintColor} size={30} />,
    },
  },
  Settings: {
    screen: () => (<Text>Settings</Text>),
    navigationOptions: {
      title: 'Settings',
      tabBarIcon: ({ tintColor }) => <Icon name="settings" color={tintColor} size={30} />,
    },
  },
}, {
  tabBarOptions: {
    showLabel: false,
    style: {
      backgroundColor: 'white',
      borderTopColor: 'white',
    },
    activeTintColor: '#64C962',
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
