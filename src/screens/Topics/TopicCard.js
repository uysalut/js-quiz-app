import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { styles } from './styles';

class TopicCard extends Component {
  handlePress = () => {
    const { isComingSoon, data, navigation, topicId } = this.props;
    let name = this.props.name;
    if (isComingSoon) {
      return;
    }
    this.props.setCurrentTopic(topicId);
    if (name === 'Javascript General') {
      name = 'JS General';
    }
    navigation.navigate('Quizzes', {
      categoryName: name,
      data
    });
  };

  renderImage() {
    switch (this.props.name) {
      case 'React':
        return (
          <Image
            style={{ width: 40, height: 36 }}
            source={require('../../assets/REACT_LOGO.png')}
          />
        );
      case 'React Native':
        return (
          <Image
            style={{ width: 37, height: 37 }}
            source={require('../../assets/REACT_NATIVE_LOGO.png')}
          />
        );
      case 'Javascript General':
        return (
          <Image
            style={{ width: 37, height: 37 }}
            source={require('../../assets/JS_GENERAL_LOGO.png')}
          />
        );
      case 'Redux':
        return (
          <Image
            style={{ width: 37, height: 36 }}
            source={require('../../assets/REDUX_LOGO.png')}
          />
        );
      default:
        return (
          <Image
            style={{ width: 37, height: 37 }}
            source={require('../../assets/JS_GENERAL_LOGO.png')}
          />
        );
    }
  }

  render() {
    return (
      <TouchableOpacity
        activeOpacity={this.props.isComingSoon ? 1 : 0.9}
        onPress={this.handlePress}
      >
        <View style={styles.topicCardContainer}>
          <View style={styles.topicCardImageContainer}>
            {this.renderImage()}
          </View>
          <Text style={styles.topicName}>
            {this.props.name}
          </Text>
          {this.props.isComingSoon
            ? <Text style={styles.comingSoon}>Coming Soon</Text>
            : <Image
                style={styles.forwardIcon}
                source={require('../../assets/FORWARD_LOGO.png')}
              />}
        </View>
      </TouchableOpacity>
    );
  }
}

export default TopicCard;
