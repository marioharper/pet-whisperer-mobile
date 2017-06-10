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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    marginTop: 50,
  },
  list: {
    fontSize: 20,
    textAlign: 'center',
  },
});

const Screen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Your Pets</Text>
    <List style={styles.list} />
  </View>
);

Screen.navigationOptions = {
  title: 'Welcome',
};

export default Screen;
