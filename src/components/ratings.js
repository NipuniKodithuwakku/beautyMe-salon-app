import React from 'react';
// import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
//import { Rating, AirbnbRating } from 'react-native-elements';
const SalonRating = ({ navigation, route }) => {
  //   const [defaultRating, setdefaultRating] = useState(2);
  //   const [maxRating, setmaxRating] = useState([1, 2, 3, 4, 5]);

  //   const starImgFilled = '';
  //   const starImgCorner = '';
  return (
    <View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Say something about our services..."
          placeholderTextColor="#000000"
          //onChangeText={(password) => setPassword(password)}
        />
      </View>
      {/* <View style={styles.customRating}>
      {
        { 
            maxRating.map((item,key) => {
                return (
                    <TouchableOpacity></TouchableOpacity>
            ) 

            })
        }
          */}
      {/* </View> */}
    </View>
  );
};
const styles = StyleSheet.create({
  inputView: {
    backgroundColor: '#C4C4C4',
    width: '100%',
    height: '60%',
    marginBottom: 20,
    alignItems: 'center',
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    //marginLeft: 20,
  },
});
export default SalonRating;
