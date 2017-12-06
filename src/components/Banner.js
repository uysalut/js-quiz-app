import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AdMobBanner } from 'react-native-admob';

import { bannerId } from '../constants';

const Banner = () => {
  return (
    <View style={styles.adContainer}>
      <AdMobBanner adSize="banner" adUnitID={bannerId} />
    </View>
  );
};

const styles = StyleSheet.create({
  adContainer: {
    alignItems: 'center',
    height: 50,
    marginTop: 5
  }
});

export default Banner;
