import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import PetWithNavigationState from '../../PetNavigator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Screen = ({ navigation }) => (
  <View style={styles.container}>
    <PetWithNavigationState pet={navigation.state.params.pet} />
  </View>
);

Screen.navigationOptions = ({ navigation }) => ({
  title: `${navigation.state.params.pet.name}`,
});

export default Screen;
