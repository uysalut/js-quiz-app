import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

const BackButton = ({ onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <Image
        style={{ width: 25, height: 24 }}
        source={require('../assets/BACK.png')}
      />
    </TouchableOpacity>
  );
};

export default BackButton;
