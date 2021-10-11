/* eslint-disable prettier/prettier */
import React from 'react';
// import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const LoginScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.logo} source={require('../../images/logo.png')} />
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
      <TouchableOpacity style={styles.loginBtn}>
        <Text
          style={styles.loginText}
          onPress={() => navigation.navigate('About')}>
          LOGIN
        </Text>
      </TouchableOpacity>
      <Text>
        Don't have an account?
        <TouchableOpacity>
          <Text onPress={() => navigation.navigate('Register')}>REGISTER</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};
const { height } = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 40,
    width: height_logo,
    height: height_logo,
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

  loginBtn: {
    width: '70%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#EA3C7B',
  },
  loginText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
