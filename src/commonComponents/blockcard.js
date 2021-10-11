/* eslint-disable prettier/prettier */
import React from 'react';
// import React, { useState } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

const RegisterScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../images/face.jpg')} />
      <Text style={styles.title}>Face and Skin</Text>
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
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default RegisterScreen;
