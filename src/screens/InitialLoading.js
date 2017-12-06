import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { Client } from 'bugsnag-react-native';

import { getFull } from '../lib/api';
import { setFull } from '../actions';
import localFull from '../lib/full.json';
import { ORANGE_PRIMARY } from '../constants';

const bugsnag = new Client();

class InitialLoading extends Component {
  componentDidMount() {
    this.getAppContent().then(() => {
      this.handleNavigation();
    });
  }

  getAppContent() {
    return getFull()
      .then(full => {
        this.props.setFull(full);
      })
      .catch(err => {
        if (err.response) {
          bugsnag.notify(err.response, report => {
            report.errorMessage = 'API getFull failed.';
          });
        } else {
          bugsnag.notify(err, report => {
            report.errorMessage = 'API getFull failed.';
          });
        }
        if (this.props.full.length) {
          this.props.setFull(this.props.full);
        } else {
          this.props.setFull(localFull);
        }
      });
  }

  handleNavigation() {
    if (this.props.isWalkthrough) {
      this.navigate('Home');
    } else {
      this.navigate('Walkthrough');
    }
  }

  navigate(routeName) {
    const { navigation } = this.props;
    navigation.dispatch(
      NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName })]
      })
    );
  }

  render() {
    // AsyncStorage.clear();
    return (
      <View style={styles.container}>
        <ActivityIndicator color="#fff" size="large" />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { isWalkthrough, full } = state.flow;
  return { isWalkthrough, full };
};

export default connect(mapStateToProps, { setFull })(InitialLoading);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ORANGE_PRIMARY
  }
});
