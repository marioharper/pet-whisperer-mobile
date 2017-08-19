import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import List from '../list';
import CSS from './styles';

const Screen = () => (
  <View style={CSS.container}>
    <List />
    <TouchableOpacity>
      <Text style={CSS.addPetBtn}>Add a Pet</Text>
    </TouchableOpacity>
  </View>
);

export default Screen;
