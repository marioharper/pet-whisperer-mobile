import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

class Screen extends Component {
  componentDidUpdate() {
    if (this.props.isLoggedIn === true) {
      this.props.navigateTo('MainNavigator');
    } else if (this.props.isLoggedIn === false) {
      this.props.navigateTo('AuthScreen');
    }
  }

  render() {
    return (
      <View>
        <Text>Splash Screen</Text>
      </View>
    );
  }
}

Screen.propTypes = {
  navigateTo: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Screen;
