import { StyleSheet } from 'react-native';

const imageDiameter = 160;
const imageRadius = imageDiameter * 0.5;

export default StyleSheet.create({
  gradient: {
    height: 150,
    alignSelf: 'stretch',
  },
  image: {
    width: imageDiameter,
    height: imageDiameter,
    borderRadius: imageRadius,
    marginTop: imageRadius * -1,
    marginBottom: 10,
    alignSelf: 'center',
  },
  info: {
    backgroundColor: 'transparent',
  },
  name: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '500',
  },
  type: {
    textAlign: 'center',
  },
});
