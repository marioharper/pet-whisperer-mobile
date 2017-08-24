import React from 'react';
import PropTypes from 'prop-types';
import {
  TextInput,
  View,
  Text,
} from 'react-native';
import CSS from './styles';

const Form = ({ pet, onChange }) => (
  <View style={CSS.container}>
    <View style={CSS.field}>
      <Text style={CSS.label}>Name</Text>
      <TextInput
        onChangeText={text => onChange('name', text)}
        style={CSS.input}
        value={pet.name}
      />
    </View>
  </View>
);

Form.defaultProps = {
  onChange: () => {},
};

Form.propTypes = {
  pet: PropTypes.shape({
    image_url: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func,
};

export default Form;
