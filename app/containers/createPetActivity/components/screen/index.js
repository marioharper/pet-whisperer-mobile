import React from 'react';
import {
  Text,
  View,
  DatePickerIOS,
} from 'react-native';
import CSS from './styles';

const Screen = ({ navigation }) => {
  const { pet } = navigation.state.params;

  return (
    <View style={CSS.container}>
      <DatePickerIOS date={new Date()} />
      <Text>Time</Text>
      <Text>Note</Text>
    </View>
  );
};

Screen.navigationOptions = () => ({
  title: 'Add Activity',
});

export default Screen;
