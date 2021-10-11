import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';

const About = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('../../images/salon.jpg')}
        //resizeMode="stretch"
      />
      <View style={styles.card}>
        <Text style={styles.txt}>Salon name: Salon Dinu</Text>
        <Text style={styles.txt}>Openning Hours: Everyday 9AM-6PM</Text>
        <Text style={styles.txt}>
          Description: We provide hair and bridal services with amazing offers.
        </Text>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => navigation.navigate('Services')}>
          <Text style={styles.registerText}>Book Now</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => navigation.navigate('Rating')}>
          <Text style={styles.registerText}>Rate This</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    flex: 2,
    height: '25%',
    backgroundColor: '#e1e1e1',
    paddingVertical: 50,
    paddingHorizontal: 30,
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
    width: '50%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#EA3C7B',
  },
  txt: {
    marginLeft: 20,
    marginRight: 20,
    fontSize: 16,
  },
});

export default About;
