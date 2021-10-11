import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Services = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('../../images/face.jpg')}
        //resizeMode="stretch"
      />
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate('About')}>
        <Text style={styles.registerText}>FACE & SKIN</Text>
      </TouchableOpacity>
      <Image
        style={styles.img}
        source={require('../../images/hair.jpg')}
        //resizeMode="stretch"
      />
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate('About')}>
        <Text style={styles.registerText}>HAIR</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  img: {
    width: '100%',
    height: '40%',
  },
  registerText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  loginBtn: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EA3C7B',
  },
  txt: {
    marginLeft: 20,
    marginRight: 20,
    fontSize: 16,
  },
});

export default Services;
