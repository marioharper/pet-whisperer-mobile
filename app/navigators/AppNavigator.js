import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { addNavigationHelpers, DrawerNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Nav from '../components/nav';
import { PetsNavigator } from '../navigators/PetsNavigator';

export const AppNavigator = DrawerNavigator({
  Home: {
    screen: PetsNavigator,
    navigationOptions: {
      title: 'Pets',
      drawerIcon: <Icon name="pets" size={20} />,
    },
  },
  Friends: {
    screen: PetsNavigator,
    navigationOptions: {
      title: 'Friends',
      drawerIcon: <Icon name="people" size={20} />,
    },
  },
});

const AppWithNavigationState = ({ dispatch, nav }) => {
  const navigation = addNavigationHelpers({ dispatch, state: nav });

  return (
    <View style={{ flex: 1 }}>
      <Nav navigation={navigation} />
      <AppNavigator navigation={navigation} />
    </View>
  );
};

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.appNav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
