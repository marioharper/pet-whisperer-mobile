import React from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';
import List from '../list';
import CSS from './styles';

const Screen = ({ pet, getPetActivities }) => {
  getPetActivities(pet.id);

  return (
    <View style={CSS.container}>
      <List />
    </View>
  );
};

Screen.navigationOptions = ({ navigation }) => ({
  title: 'Activity',
});

export default Screen;
