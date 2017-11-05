import React from 'react';
import { Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Pets from '../containers/pets';
import Pet from '../containers/pet';
import EditPet from '../containers/editPet';
import CreatePetActivity from '../containers/createPetActivity';

export default StackNavigator({
  Pets: {
    screen: Pets,
    navigationOptions: {
      title: 'Pets',
    },
  },
  Pet: {
    screen: Pet,
    navigationOptions: ({ navigation }) => ({
      headerRight: <Button
        onPress={() => navigation.navigate('EditPet', { pet: navigation.state.params.pet })}
        title="Edit"
        color="#4A5468"
        accessibilityLabel="Edit pet info"
      />,
    }),
  },
  EditPet: {
    screen: EditPet,
    navigationOptions: ({ navigation }) => ({
      title: 'Edit Pet',
      headerRight: <Button
        onPress={() => navigation.state.params.handleSave()}
        title="Apply"
        color="#4A5468"
        accessibilityLabel="Apply pet updates"
      />,
    }),
  },
  CreatePetActivity: {
    screen: CreatePetActivity,
    navigationOptions: {
      title: 'Add Activity',
    },
  },
}, {
  cardStyle: {
    backgroundColor: '#FCFEFF',
  },
  navigationOptions: {
    headerStyle: {
      backgroundColor: 'white',
      borderBottomColor: 'white',
      shadowOpacity: 0.1,
      shadowOffset: {
        height: 0,
        width: 0,
      },
    },
    headerTitleStyle: {
      color: '#4A5468',
    },
    headerBackTitle: null,
    headerTintColor: '#4A5468',
  },
});
