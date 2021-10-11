import React from 'react';
import { Button, View } from 'react-native';

const SalonMap = props => {
  return (
    <View>
      <Button title="Search" onPress={props.onGetLocation} />
    </View>
  );
};

export default SalonMap;
