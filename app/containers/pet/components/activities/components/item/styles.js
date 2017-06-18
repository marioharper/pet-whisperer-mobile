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
  icon: {
    paddingRight: 10,
  },
  message: {
    fontWeight: '300',
    fontSize: 16,
  },
  time: {
    textAlign: 'right',
    flex: 1,
    fontWeight: '200',
  },
});
