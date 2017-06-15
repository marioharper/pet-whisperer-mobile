import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Banner from '../banner';
import Activities from '../activities';
import CSS from './styles';

const Screen = ({ navigation, getPetActivities, createPetActivityScreen }) => {
  const { pet } = navigation.state.params;
  getPetActivities(pet.id);

  return (
    <View style={CSS.container}>
      <Banner style={CSS.banner} pet={pet} />
      <Activities pet={pet} />
      <View style={CSS.actionButtons}>
        <Icon
          style={CSS.actionButton}
          name="food-fork-drink"
          size={50}
          onPress={() => createPetActivityScreen(pet, 'feed')}
        />
        <Icon
          style={CSS.actionButton}
          name="pill"
          size={50}
          onPress={() => createPetActivityScreen(pet, 'medicate')}
        />
      </View>
    </View>
  );
};

Screen.navigationOptions = ({ navigation }) => ({
  title: `${navigation.state.params.pet.name}`,
  headerRight: <Button title="Edit" />,
});

Screen.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        pet: PropTypes.shape({
          name: PropTypes.string.isRequired,
        }),
      }),
    }),
  }).isRequired,
  getPetActivities: PropTypes.func.isRequired,
  createPetActivityScreen: PropTypes.func.isRequired,
};

export default Screen;
