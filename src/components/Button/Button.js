import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import styles from './Button.style';

const Button = ({title, theme = 'primary', onPress}) => {
  return (
    <TouchableOpacity style={styles[theme].container} onPress={onPress}>
      <Text style={styles[theme].title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
