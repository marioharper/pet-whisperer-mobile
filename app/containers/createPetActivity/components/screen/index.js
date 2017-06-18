import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import CSS from './styles';
import Form from '../form';

const Screen = ({ navigation, createPetActivity }) => {
  const { pet, type } = navigation.state.params;

  return (
    <View style={CSS.container}>
      <Text style={CSS.help}>Additional info about your {type.toUpperCase()} activity.</Text>
      <Form pet={pet} type={type} onSubmit={activity => createPetActivity(pet.id, activity)} />
    </View>
  );
};

Screen.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        pet: PropTypes.object.isRequired,
      }),
    }),
  }).isRequired,
  createPetActivity: PropTypes.func.isRequired,
};

export default Screen;
