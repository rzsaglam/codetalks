import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './MessageInput.style';
import colors from '../../styles/colors';

const MessageInput = ({handleSend}) => {
  const [text, setText] = useState('');

  const send = () => {
    handleSend(text);
    setText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Text.."
        onChangeText={setText}
        value={text}
      />
      <Icon
        name="send"
        size={25}
        color={colors.orange}
        onPress={() => send()}
      />
    </View>
  );
};

export default MessageInput;
