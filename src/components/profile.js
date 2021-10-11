import React from 'react';
import { View } from 'react-native';

import { Avatar } from 'react-native-elements';

const Profile = ({ navigation, route }) => {
  return (
    <View>
      <Avatar
        rounded
        source={{
          uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        }}
      />
    </View>
  );
};
export default Profile;
