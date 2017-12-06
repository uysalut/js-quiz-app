import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import { GoogleAnalyticsTracker } from 'react-native-google-analytics-bridge';
import codePush from 'react-native-code-push';

import store from './store';
import Router from './Router';
import { onNavigationStateChange } from './lib/helper';

const tracker = new GoogleAnalyticsTracker('your-ga-tracker-here');

class App extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true;
    });
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress');
  }

  render() {
    return (
      <Provider store={store}>
        <Router onNavigationStateChange={onNavigationStateChange(tracker)} />
      </Provider>
    );
  }
}

export default codePush(App);
