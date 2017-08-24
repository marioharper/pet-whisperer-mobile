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
    color: '#39CFFD',
  },
  message: {
    fontWeight: '300',
    fontSize: 16,
    color: '#B4BEC8',
  },
  time: {
    textAlign: 'right',
    flex: 1,
    fontWeight: '200',
    color: '#B4BEC8',
  },
});
