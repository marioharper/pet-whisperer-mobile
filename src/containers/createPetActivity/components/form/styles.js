import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 20,
  },
  noteInput: {
    height: 160,
    fontSize: 18,
    margin: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  submitWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
