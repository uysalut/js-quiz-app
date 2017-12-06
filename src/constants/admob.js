import { Platform } from 'react-native';
//Test Ad Unit IDs
export const bannerId =
  Platform.OS === 'ios'
    ? 'ca-app-pub-3940256099942544/6300978111'
    : 'ca-app-pub-3940256099942544/6300978111';

export const interstitialID =
  Platform.OS === 'ios'
    ? 'ca-app-pub-3940256099942544/1033173712'
    : 'ca-app-pub-3940256099942544/1033173712';
