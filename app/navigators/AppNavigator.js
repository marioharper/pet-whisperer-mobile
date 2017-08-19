import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { addNavigationHelpers, TabNavigator, NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';
import Nav from '../components/nav';
import { PetsNavigator } from '../navigators/PetsNavigator';
import Camera from '../containers/camera';

export const AppNavigator = TabNavigator({
  Home: {
    screen: PetsNavigator,
    navigationOptions: {
      title: 'Pets',
      tabBarIcon: ({ tintColor }) => <Icon name="pets" color={tintColor} size={30} />,
    },
  },
  Camera: {
    screen: Camera,
    navigationOptions: {
      title: 'Camera',
      tabBarIcon: ({ tintColor }) => <Icon2 name="camera" color={tintColor} size={30} />,
    },
  },
  Friends: {
    screen: () => (<Text>Friends</Text>),
    navigationOptions: {
      title: 'Friends',
      tabBarIcon: ({ tintColor }) => <Icon2 name="people" color={tintColor} size={30} />,
    },
  },
  Settings: {
    screen: () => (<Text>Settings</Text>),
    navigationOptions: {
      title: 'Settings',
      tabBarIcon: ({ tintColor }) => <Icon2 name="settings" color={tintColor} size={30} />,
    },
  },
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showLabel: false,
    style: {
      paddingTop: 5,
      marginBottom: 5,
      backgroundColor: 'white',
      borderTopColor: '#F5F8FA',
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
