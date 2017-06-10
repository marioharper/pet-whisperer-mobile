import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

const Item = ({ pet }) => (
    <Text>{pet.name}</Text>
  );

Item.propTypes = {
  pet: PropTypes.object.isRequired,
};

export default Item;
