import {StyleSheet, Dimensions} from 'react-native';

import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    width: Dimensions.get('window').width / 2.5,
    height: Dimensions.get('window').height / 4,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#babdbe',
  },
  title: {
    color: colors.orange,
    fontSize: 30,
  },
});
