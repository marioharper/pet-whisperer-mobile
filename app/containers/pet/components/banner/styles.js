import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    margin: 20,
  },
  info: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontWeight: 'bold',
  },
  name: {
    marginBottom: 20,
  },
});
