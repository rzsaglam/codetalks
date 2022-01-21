import {StyleSheet, Dimensions} from 'react-native';

import colors from '../../styles/colors';

const base_style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    padding: 10,
    borderRadius: 5,
  },
});

export default StyleSheet.create({
  primary: {
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: colors.orangeLight,
    },
    title: {
      color: 'white',
      fontSize: 15,
      fontWeight: 'bold',
    },
  },
  secondary: {
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: 'white',
    },
    title: {
      color: colors.orangeLight,
      fontSize: 15,
      fontWeight: 'bold',
    },
  },
});
