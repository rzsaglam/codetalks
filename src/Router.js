import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();

import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Home from './pages/Home';
import Room from './pages/Room';

import colors from './styles/colors';

const Router = () => {
  const [userSession, setUserSession] = useState(null);

  function onAuthStateChanged(user) {
    setUserSession(user);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  const handleOut = () => {
    auth().signOut();
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!userSession ? (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        ) : (
          <>
            <Stack.Screen
              name="HomePage"
              component={Home}
              options={{
                title: 'Rooms',
                headerShown: true,
                headerTintColor: colors.orange,
                headerTitleAlign: 'center',
                headerRight: () => (
                  <Icon name="logout" size={20} onPress={() => handleOut()} />
                ),
              }}
            />
            <Stack.Screen
              name="RoomPage"
              component={Room}
              options={({route}) => ({
                title: route.params.roomData.roomName,
                headerShown: true,
                headerTintColor: colors.orange,
                headerTitleAlign: 'center',
              })}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerShown: false,
      }}>
      <Stack.Screen name="LoginPage" component={Login} />
      <Stack.Screen name="RegisterPage" component={Register} />
    </Stack.Navigator>
  );
};

export default Router;
