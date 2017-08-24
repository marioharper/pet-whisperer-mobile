import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Banner from '../banner';
import Form from '../form';
import CSS from './styles';

class Screen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pet: props.pet,
      dirty: false,
    };

    this.handleFormChange = this.handleFormChange.bind(this);
  }

  componentDidMount() {
    this.props.navigation.setParams({ handleSave: () => this.props.updatePet(this.state.pet) });
  }

  handleFormChange(key, value) {
    this.setState({
      pet: {
        ...this.state.pet,
        [key]: value,
      },
      dirty: true,
    });
  }

  render() {
    const { pet } = this.state;

    return (
      <View style={CSS.container}>
        <Banner style={CSS.banner} pet={pet} />
        <Form pet={pet} onChange={this.handleFormChange} />
      </View>
    );
  }
}

Screen.propTypes = {
  pet: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Screen;
