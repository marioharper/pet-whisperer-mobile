import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Banner from '../banner';
import Activities from '../activities';
import CSS from './styles';

class Screen extends Component {
  componentDidMount() {
    const { getPetActivities, pet } = this.props;

    getPetActivities(pet.id);
  }

  render() {
    const { pet, createPetActivityScreen } = this.props;

    return (
      <View style={CSS.container}>
        <Banner style={CSS.banner} pet={pet} />
        <Activities activities={pet.activities || []} />
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
  }
}


Screen.propTypes = {
  pet: PropTypes.shape({
    name: PropTypes.string.isRequired,
    activities: PropTypes.array.isRequired,
  }).isRequired,
  getPetActivities: PropTypes.func.isRequired,
  createPetActivityScreen: PropTypes.func.isRequired,
};

export default Screen;
