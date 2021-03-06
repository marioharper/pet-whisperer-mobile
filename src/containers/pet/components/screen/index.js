import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Banner from '../banner';
import Activities from '../activities';
import CSS from './styles';

class Screen extends Component {
  componentDidMount() {
    const { getPetActivities, pet } = this.props;

    getPetActivities(pet.id);
  }

  render() {
    const { pet } = this.props;

    return (
      <View style={CSS.container}>
        <Banner style={CSS.banner} pet={pet} />
        <Activities activities={pet.activities} />
      </View>
    );
  }
}


Screen.propTypes = {
  pet: PropTypes.shape({
    name: PropTypes.string.isRequired,
    activities: PropTypes.array,
  }).isRequired,
  getPetActivities: PropTypes.func.isRequired,
};

export default Screen;
