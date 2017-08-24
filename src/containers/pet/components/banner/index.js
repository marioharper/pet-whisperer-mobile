import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  Text,
  View,
} from 'react-native';
import { LinearGradient } from 'expo';
import CSS from './styles';

const Banner = ({ pet }) => (
  <LinearGradient colors={['#3EA8F0', '#39CFFD']} start={[0, 0.5]} style={CSS.container}>
    <Image
      style={CSS.image}
      source={{ uri: pet.image_url }}
    />
    <View style={CSS.info}>
      <Text style={CSS.name}>{pet.name}</Text>
      <Text style={CSS.type}>{pet.type}</Text>
    </View>
  </LinearGradient>
);

Banner.propTypes = {
  pet: PropTypes.shape({
    image_url: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
};

export default Banner;
