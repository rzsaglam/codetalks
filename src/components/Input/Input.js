import React from 'react';
import {View, TextInput} from 'react-native';

import styles from './Input.style';

const Input = ({placeholder, onChangeText, isSecure}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={'white'}
        onChangeText={onChangeText}
        secureTextEntry={isSecure}
      />
    </View>
  );
};

export default Input;
