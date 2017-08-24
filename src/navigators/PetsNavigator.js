import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import Pets from '../containers/pets';
import Pet from '../containers/pet';
import EditPet from '../containers/editPet';
import CreatePetActivity from '../containers/createPetActivity';

export const PetsNavigator = StackNavigator({
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

const PetsWithNavigationState = ({ dispatch, nav }) => (
  <PetsNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

PetsWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.petsNav,
});

export default connect(mapStateToProps)(PetsWithNavigationState);
