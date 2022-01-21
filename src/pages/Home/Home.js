import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import styles from './Home.style';
import objectParser from '../../utils/objectParser';

import FloatingButton from '../../components/FloatingButton';
import CreateRoomModal from '../../components/modals/CreateRoomModal';
import RoomCard from '../../components/RoomCard';

const Home = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [roomName, setRoomName] = useState('');
  const [rooms, setRooms] = useState();

  useEffect(() => {
    database()
      .ref('rooms/')
      .on('value', snapshot => {
        const parsedObject = objectParser(snapshot.val() || {});
        setRooms(parsedObject);
      });
  }, []);

  const createRoom = text => {
    const room = {
      roomName: text,
      createDate: new Date().toISOString(),
      messages: [],
    };
    database().ref('rooms/').push(room);
  };

  const handleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleRoom = roomData => {
    navigation.navigate('RoomPage', {roomData: roomData});
  };

  return (
    <View style={styles.container}>
      <View style={styles.roomContainer}>
        <FlatList
          data={rooms}
          renderItem={({item}) => (
            <RoomCard data={item} onPress={() => handleRoom(item)} />
          )}
          numColumns={2}
        />
      </View>
      <CreateRoomModal
        isVisible={modalVisible}
        onClose={handleModal}
        onPress={createRoom}
      />
      <FloatingButton onPress={handleModal} />
    </View>
  );
};

export default Home;
