import React from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
//import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Image
            style={styles.logo}
            source={require('../../images/logo.png')}
            resizeMode="stretch"
          />
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.title}>Welcome to BeautyMe</Text>
        <Text style={styles.text}>Your beauty partner...</Text>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => navigation.navigate('Auth')}>
          <Text style={styles.btnText}>Get Started-></Text>
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
  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
    fontSize: 15,
    marginTop: 5,
  },
  loginBtn: {
    width: '40%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#EA3C7B',
  },
  btnText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
