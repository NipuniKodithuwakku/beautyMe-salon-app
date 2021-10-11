/* eslint-disable prettier/prettier */
//import React, { useState } from 'react';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const AuthScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require('../../images/logo.png')} />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.loginText}>REGISTER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const { height } = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EA3C7B',
  },
  header: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    marginBottom: 40,
    width: height_logo,
    height: height_logo,
  },
  loginBtn: {
    width: '100%',
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

export default AuthScreen;
