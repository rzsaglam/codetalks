import React from 'react';
import {View, Text} from 'react-native';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';

import styles from './Login.style';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

const Login = ({navigation}) => {
  const handleLogin = async formValues => {
    if (formValues.email == '' || null || formValues.password == '' || null) {
      return;
    }
    const user = {
      email: formValues.email,
      password: formValues.password,
    };
    try {
      await auth().signInWithEmailAndPassword(user.email, user.password);
      console.log('Signed in!');
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegister = () => {
    navigation.navigate('RegisterPage');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.title}>codetalks</Text>
      </View>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => handleLogin(values)}>
        {({values, handleChange, handleSubmit}) => (
          <View style={styles.form}>
            <Input
              placeholder="Insert email..."
              value={values.email}
              onChangeText={handleChange('email')}
            />
            <Input
              placeholder="Insert password..."
              value={values.password}
              onChangeText={handleChange('password')}
              isSecure
            />
            <Button title="Login" onPress={handleSubmit} />
            <Button
              title="Register"
              theme="secondary"
              onPress={handleRegister}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;
