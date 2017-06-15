import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  TextInput,
  View,
  DatePickerIOS,
  Button,
} from 'react-native';
import CSS from './styles';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      when: new Date(),
      note: '',
    };

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleNoteTextChange = this.handleNoteTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDateChange(newDate) {
    this.setState({
      when: newDate,
    });
  }

  handleSubmit() {
    this.props.onSubmit({
      when: this.state.when,
      note: this.state.note,
    });
  }

  handleNoteTextChange(newNote) {
    this.setState({
      note: newNote,
    });
  }

  render() {
    return (
      <View style={CSS.container}>
        <Text style={CSS.label}>When</Text>
        <DatePickerIOS
          date={this.state.when}
          onDateChange={this.handleDateChange}
        />

        <Text style={CSS.label}>Note</Text>
        <TextInput
          style={CSS.noteInput}
          multiline
          numberOfLines={4}
          maxLength={200}
          placeholder="Additional info"
          onChangeText={this.handleNoteTextChange}
        />

        <View style={CSS.submitWrapper}>
          <Button
            title="Submit"
            accessibilityLabel="Submit form"
            onPress={this.handleSubmit}
          />
        </View>
      </View>
    );
  }
}

Form.navigationOptions = () => ({
  title: 'Add Activity',
});

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
