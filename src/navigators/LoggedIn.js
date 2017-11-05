import React from 'react';
import { TabNavigator } from 'react-navigation';
import { MaterialIcons, EvilIcons } from '@expo/vector-icons';
import PetsNavigator from '../navigators/PetsNavigator';
import Profile from '../containers/profile';

export default TabNavigator({
  Home: {
    screen: PetsNavigator,
    navigationOptions: {
      title: 'Pets',
      tabBarIcon: ({ tintColor }) => <MaterialIcons name="pets" size={20} color={tintColor} />,
    },
  },
  Profile: {
    screen: Profile,
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
