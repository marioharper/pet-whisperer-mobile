import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import List from '../list';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Screen = () => (
  <View style={styles.container}>
    <List />
  </View>
);

Screen.navigationOptions = {
  title: 'Your Pets',
};

export default Screen;
