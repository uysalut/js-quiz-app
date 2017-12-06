import React from 'react';
import { View, StyleSheet, Dimensions, Platform } from 'react-native';

import HeaderTitle from './HeaderTitle';
import { ORANGE_PRIMARY } from '../constants';

const { width, height } = Dimensions.get('window');

const Header = ({ left, right, title, backgroundColor }) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.left}>
        {left}
      </View>
      <HeaderTitle title={title} />
      <View style={styles.right}>
        {right}
      </View>
    </View>
  );
};

Header.defaultProps = {
  backgroundColor: ORANGE_PRIMARY
};

const styles = StyleSheet.create({
  container: {
    height: 90,
    width,
    position: 'absolute',
    top: 0,
    paddingTop: Platform.OS === 'ios' ? (height < 650 ? 38 : 30) : 0,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  left: {
    position: 'absolute',
    left: 24,
    top: Platform.OS === 'ios' ? 40 : 10
  },
  right: {
    position: 'absolute',
    right: 18,
    top: Platform.OS === 'ios' ? 42 : 12
  }
});

export default Header;
