import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import CSS from './styles';
import Form from '../form';

const Screen = ({ navigation, createPetActivity }) => {
  const { pet } = navigation.state.params;

  return (
    <View style={CSS.container}>
      <Form pet={pet} onSubmit={activity => createPetActivity(pet.id, activity)} />
    </View>
  );
};

Screen.navigationOptions = () => ({
  title: 'Add Activity',
});

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
