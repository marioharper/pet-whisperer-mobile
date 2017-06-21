import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import List from '../list';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addPetBtn: {
    fontSize: 18,
    paddingTop: 15,
    paddingBottom: 15,
    margin: 15,
    borderRadius: 30,
    color: 'white',
    textAlign: 'center',
    backgroundColor: '#64C962',
  },
});

const Screen = () => (
  <View style={styles.container}>
    <List />
    <TouchableOpacity>
      <Text style={styles.addPetBtn}>Add a Pet</Text>
    </TouchableOpacity>
  </View>
);

export default Screen;
