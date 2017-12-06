import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { styles } from './styles';

class QuizCard extends Component {
  handlePress = () => {
    const { quizId, historyData, qCount, isFinished, name, data } = this.props;
    const { navigate } = this.props.navigation;
    let newHistoryData = historyData;
    this.props.setCurrentQuiz(quizId);
    if (historyData.length === qCount || isFinished) {
      this.props.restartQuiz(this.props.topicId, this.props.quizId);
      newHistoryData = [];
    }
    navigate('Quiz', {
      quizName: name,
      data,
      historyData: newHistoryData
    });
  };

  renderButton() {
    let buttonText = 'Continue Quiz';
    if (this.props.historyData.length === 0) {
      buttonText = 'Start';
    } else if (
      this.props.historyData.length === this.props.qCount ||
      this.props.isFinished
    ) {
      buttonText = 'Restart Quiz';
    }
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={this.handlePress}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>
          {buttonText}
        </Text>
      </TouchableOpacity>
    );
  }
  renderImage() {
    switch (this.props.category) {
      case 'React':
        return (
          <Image
            style={{ width: 30, height: 27 }}
            source={require('../../assets/REACT_LOGO.png')}
          />
        );
      case 'React Native':
        return (
          <Image
            style={{ width: 27, height: 27 }}
            source={require('../../assets/REACT_NATIVE_LOGO.png')}
          />
        );
      case 'Javascript General':
        return (
          <Image
            style={{ width: 27, height: 27 }}
            source={require('../../assets/JS_GENERAL_LOGO.png')}
          />
        );
      case 'Redux':
        return (
          <Image
            style={{ width: 27, height: 26 }}
            source={require('../../assets/REDUX_LOGO.png')}
          />
        );
      default:
        return (
          <Image
            style={{ width: 27, height: 27 }}
            source={require('../../assets/JS_GENERAL_LOGO.png')}
          />
        );
    }
  }

  render() {
    return (
      <View style={styles.quizCardContainer}>
        <View style={styles.titleContainer}>
          <View style={styles.imageContainer}>
            {this.renderImage()}
          </View>
          <Text style={styles.countText}>
            {this.props.qCount} questions
          </Text>
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.name}>
            {this.props.name}
          </Text>
          <Text style={styles.by}>
            by {this.props.by}
          </Text>
          {this.renderButton()}
        </View>
      </View>
    );
  }
}

export default QuizCard;
