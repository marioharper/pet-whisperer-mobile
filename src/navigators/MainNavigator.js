import React from 'react';
import PropTypes from 'prop-types';
import { addNavigationHelpers, TabNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { MaterialIcons, EvilIcons } from '@expo/vector-icons';
import { PetsNavigator } from '../navigators/PetsNavigator';
import Profile from '../containers/profile';

export const MainNavigator = TabNavigator({
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

const WithNavigationState = ({ dispatch, nav }) => (
  <MainNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

WithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.mainNav,
});

export default connect(mapStateToProps)(WithNavigationState);
