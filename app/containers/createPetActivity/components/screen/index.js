import React from 'react';
import { View } from 'react-native';
import CSS from './styles';
import Form from '../form';

const Screen = ({ navigation }) => {
  const { pet } = navigation.state.params;

  return (
    <View style={CSS.container}>
      <Form pet={pet} onSubmit={data => console.log('form submitted', data)} />
    </View>
  );
};

Screen.navigationOptions = () => ({
  title: 'Add Activity',
});

export default Screen;
