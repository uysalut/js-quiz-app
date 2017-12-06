import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const HeaderTitle = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} style={styles.title}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: width * 0.6
  },
  title: {
    fontSize: height < 650 ? 20 : 22,
    paddingTop: height < 650 ? 0 : 8,
    fontWeight: '900',
    color: '#fff',
    fontFamily: 'Avenir'
  }
});

export default HeaderTitle;
