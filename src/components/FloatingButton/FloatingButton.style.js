import {StyleSheet} from 'react-native';

import colors from '../../styles/colors';

export default StyleSheet.create({
  button: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: colors.orangeLight,
    padding: 15,
    borderRadius: 50,
  },
  icon: {
    color: 'white',
  },
});
