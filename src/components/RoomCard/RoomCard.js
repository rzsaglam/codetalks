import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './RoomCard.style';

const RoomCard = ({data, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{data.roomName}</Text>
    </TouchableOpacity>
  );
};

export default RoomCard;
