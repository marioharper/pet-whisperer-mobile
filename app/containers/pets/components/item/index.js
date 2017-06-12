import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, TouchableHighlight } from 'react-native';
import CSS from './styles';

const Item = ({ pet, petScreen }) => (
  <TouchableHighlight onPress={() => petScreen(pet)}>
    <View style={CSS.container}>
      <Image
        style={CSS.image}
        source={{ uri: pet.image_url }}
      />
      <View style={CSS.info}>
        <Text>{pet.type}</Text>
        <Text style={CSS.name}>{pet.name}</Text>
      </View>
    </View>
  </TouchableHighlight>
);

Item.propTypes = {
  pet: PropTypes.object.isRequired,
  petScreen: PropTypes.func.isRequired,
};

export default Item;
