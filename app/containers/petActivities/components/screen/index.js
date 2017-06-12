import React from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';
import Banner from '../banner';
import List from '../list';
import CSS from './styles';

const Screen = ({ screenProps, getPetActivities }) => {
  const { pet } = screenProps;
  getPetActivities(pet.id);

  return (
    <View style={CSS.container}>
      <Banner pet={pet} />
      <List />
    </View>
  );
};

Screen.navigationOptions = ({ navigation }) => ({
  title: 'Activity',
});

export default Screen;
