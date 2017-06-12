import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    padding: 20,
    borderColor: 'lightgray',
    borderStyle: 'solid',
    borderBottomWidth: 1,
  },
  image: {
    width: 75,
    height: 75,
    marginRight: 20,
    borderRadius: 3,
  },
  name: {
    fontWeight: '600',
    fontSize: 18,
  },
  info: {
    justifyContent: 'center',
  },
});
