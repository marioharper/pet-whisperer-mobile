import React from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';
import moment from 'moment';
import CSS from './styles';

const Banner = ({ pet }) => (
  <View style={CSS.container}>
    <Image
      style={CSS.image}
      source={{ uri: pet.image_url }}
    />
    <View style={CSS.info}>
      <Text style={CSS.name}>{pet.name}</Text>
      <Text style={CSS.label}>Birthday</Text>
      <Text>{moment(pet.birthday * 1000).format('MMMM Do YYYY')}</Text>
    </View>
  </View>
  );

export default Banner;
