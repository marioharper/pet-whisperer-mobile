import React from 'react';
import { View, Text } from 'react-native';
import Nav from '../../../../components/nav';
import CSS from './styles';

const Screen = ({ navigation }) => (
  <View style={CSS.container}>
    <View style={CSS.contentWrapper}>
      <Text style={CSS.welcomeText}>Welcome to Pet Whisperer!</Text>
    </View>
  </View>
);

Screen.navigationOptions = (/* { navigation }*/) => ({
  title: 'Home',
});

export default Screen;
