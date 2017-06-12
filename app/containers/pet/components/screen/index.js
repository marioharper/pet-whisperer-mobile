import React from 'react';
import {
  View,
  Button,
} from 'react-native';
import Banner from '../banner';
import Activities from '../activities';
import CSS from './styles';

const Screen = ({ navigation, getPetActivities, createPetActivityScreen }) => {
  const { pet } = navigation.state.params;
  getPetActivities(pet.id);

  return (
    <View style={CSS.container}>
      <Banner pet={pet} />
      <Activities pet={pet} />
      <View style={CSS.actionButtons}>
        <Button title="Medicate" onPress={() => createPetActivityScreen(pet, 'medicate')} />
        <Button title="Feed" onPress={() => createPetActivityScreen(pet, 'feed')} />
      </View>
    </View>
  );
};

Screen.navigationOptions = ({ navigation }) => ({
  title: `${navigation.state.params.pet.name}`,
  headerRight: <Button title="Edit" />,
});

export default Screen;
