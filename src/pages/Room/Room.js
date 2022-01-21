import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import styles from './Room.style';
import objectParser from '../../utils/objectParser';

import MessageInput from '../../components/MessageInput';
import MessageCard from '../../components/MessageCard';

const Room = ({route}) => {
  const {roomData} = route.params;
  const user = auth().currentUser.email;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    database()
      .ref(`rooms/${roomData.id}/messages/`)
      .on('value', snapshot => {
        const parsedObject = objectParser(snapshot.val() || {});
        setMessages(parsedObject);
      });
  }, []);

  const handleSend = text => {
    const message = {
      user: user,
      message: text,
      sendDate: new Date().toISOString(),
    };
    database().ref(`rooms/${roomData.id}/messages/`).push(message);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({item}) => <MessageCard messageData={item} />}
      />
      <MessageInput handleSend={handleSend} />
    </View>
  );
};

export default Room;
