import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import CSS from './styles';

const Screen = ({ screenProps }) => {
  const { pet } = screenProps;

  return (
    <View style={CSS.container}>
      <Text>{pet.type}</Text>
      <Text>{pet.name}</Text>
      <Text>Birthday: {pet.birthday}</Text>
    </View>
  );
};

Screen.navigationOptions = () => ({
  title: 'Info',
});

export default Screen;
