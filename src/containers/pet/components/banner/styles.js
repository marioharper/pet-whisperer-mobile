import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    alignSelf: 'center',
  },
  info: {
    backgroundColor: 'transparent',
  },
  name: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    fontWeight: '500',
  },
  type: {
    textAlign: 'center',
    color: 'white',
  },
});
