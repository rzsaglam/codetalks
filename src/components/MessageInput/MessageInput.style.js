import {StyleSheet, Dimensions} from 'react-native';

import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: colors.orange,
    width: Dimensions.get('window').width,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    backgroundColor: 'white',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  input: {
    backgroundColor: 'white',
    flex: 0.9,
    margin: 2,
    borderRadius: 5,
    padding: 2,
    borderBottomWidth: 1.5,
    borderBottomColor: colors.orange,
  },
});
