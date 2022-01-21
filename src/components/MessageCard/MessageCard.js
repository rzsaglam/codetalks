import React from 'react';
import {View, Text} from 'react-native';
import {formatDistance, parseISO} from 'date-fns';

import styles from './MessageCard.style';

const MessageCard = ({messageData}) => {
  const formattedDate = formatDistance(
    parseISO(messageData.sendDate),
    new Date(),
    {addSuffix: true},
  );

  return (
    <View style={styles.container}>
      <View style={styles.messageHeader}>
        <Text style={styles.headerText}>{messageData.user}</Text>
        <Text style={styles.headerText}>{formattedDate}</Text>
      </View>
      <View style={styles.messageBody}>
        <Text style={styles.messageText}>{messageData.message}</Text>
      </View>
    </View>
  );
};

export default MessageCard;
