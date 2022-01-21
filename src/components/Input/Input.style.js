import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.9,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  input: {
    color: 'white',
  },
});
