import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    borderColor: 'lightgray',
    borderStyle: 'solid',
    borderBottomWidth: 1,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'lightgray',
    borderStyle: 'solid',
    borderTopWidth: 1,
  },
  actionButton: {
    flex: 1,
    textAlign: 'center',
    padding: 10,
    color: 'orange',
  },
});
