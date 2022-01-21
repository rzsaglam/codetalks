import React, {useState} from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';

import Input from '../../Input';
import Button from '../../Button';

const CreateRoomModal = ({
  isVisible,
  onClose,
  onPress,
  onChangeText,
  value,
}) => {
  const [text, setText] = useState('');
  return (
    <View>
      <Modal
        isVisible={isVisible}
        onSwipeComplete={onClose}
        onBackButtonPress={onClose}
        onBackdropPress={onClose}>
        <Input placeholder="Room name..." onChangeText={setText} value={text} />
        <Button
          title="Create Room"
          theme="secondary"
          onPress={() => onPress(text)}
        />
      </Modal>
    </View>
  );
};

export default CreateRoomModal;
