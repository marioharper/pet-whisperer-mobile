import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Banner from '../banner';
import PetActivities from '../../../petActivities';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Screen = ({ navigation }) => (
  <View style={styles.container}>
    <Banner pet={navigation.state.params.pet} />
    <PetActivities pet={navigation.state.params.pet} />
  </View>
);

Screen.navigationOptions = ({ navigation }) => ({
  title: `${navigation.state.params.pet.name}`,
});

export default Screen;
