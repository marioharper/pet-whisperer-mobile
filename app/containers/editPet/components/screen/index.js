import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
} from 'react-native';
import CSS from './styles';

const Screen = ({ pet }) => (
  <View style={CSS.container} />
);


Screen.navigationOptions = ({ navigation }) => ({
  title: `Edit ${navigation.state.params.pet.name}'s Info`,
});

Screen.propTypes = {
  pet: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Screen;
