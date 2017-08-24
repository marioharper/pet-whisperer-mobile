import React from 'react';
import { View } from 'react-native';
import List from '../list';
import CSS from './styles';

const Screen = () => (
  <View style={CSS.container}>
    <List />
  </View>
);

export default Screen;
