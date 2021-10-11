/* eslint-disable prettier/prettier */
import React from 'react';
// import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const RegisterScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text>USERNAME</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="chandulakan123@gmail.com"
          placeholderTextColor="#000000"
          // onChangeText={(email) => setEmail(email)}
        />
      </View>
      <Text>PHONE NUMBER</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="0768839752"
          placeholderTextColor="#000000"
          // onChangeText={(email) => setEmail(email)}
        />
      </View>
      <Text>EMAIL</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="chandulakan123@gmail.com"
          placeholderTextColor="#000000"
          // onChangeText={(email) => setEmail(email)}
        />
      </View>
      <Text>PASSWORD</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="..........."
          placeholderTextColor="#000000"
          secureTextEntry={true}
          //onChangeText={(password) => setPassword(password)}
        />
      </View>
      {/* <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity> */}
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate('About')}>
        <Text style={styles.registerText}>REGISTER</Text>
      </TouchableOpacity>
      <Text>
        Already have an account?
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text>LOGIN</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: '#C4C4C4',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  //   forgot_button: {
  //     height: 30,
  //     marginBottom: 30,
  //   },
  loginBtn: {
    width: '70%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#EA3C7B',
  },
  registerText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default RegisterScreen;
