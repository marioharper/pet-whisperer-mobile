import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Button } from 'react-native';
import CSS from './styles';

class Screen extends Component {
  render() {
    return (
      <View style={CSS.container}>
        <Button
          onPress={() => this.props.logout()}
          title="Log out"
        />
      </View>
    );
  }
}

Screen.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default Screen;
