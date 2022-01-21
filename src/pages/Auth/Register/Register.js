import React from 'react';
import {View, Text} from 'react-native';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';

import styles from './Register.style';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

const Register = ({navigation}) => {
  const createUser = async formValues => {
    if (formValues.email == '' || null || formValues.password == '' || null) {
      return;
    }
    const user = {email: formValues.email, password: formValues.password};
    try {
      await auth().createUserWithEmailAndPassword(user.email, user.password);
      console.log(user);
      navigation.navigate('LoginPage');
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.title}>codetalks</Text>
      </View>
      <Formik
        initialValues={{email: '', password: '', repassword: ''}}
        onSubmit={values => createUser(values)}>
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
            <Input
              placeholder="Insert repassword..."
              value={values.repassword}
              onChangeText={handleChange('repassword')}
              isSecure
            />
            <Button title="Register" onPress={handleSubmit} />
            <Button title="Login" theme="secondary" onPress={handleLogin} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Register;
