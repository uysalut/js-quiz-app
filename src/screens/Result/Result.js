import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { NavigationActions } from 'react-navigation';
import _ from 'lodash';

import Header from '../../components/Header';
import BackButton from '../../components/BackButton';
import { AnimatedCircularProgress } from '../../components/CircularProgress';
import { styles } from './styles';

const { height } = Dimensions.get('window');

class Result extends Component {
  componentDidMount() {
    const { currentQuiz, currentTopic } = this.props;
    this.props.finishQuiz(currentTopic, currentQuiz);
    this.refs.circularProgress.performLinearAnimation(
      this.props.navigation.state.params.score,
      1500
    );
  }

  handleBack = () => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Topics' })]
    });
    this.props.navigation.dispatch(resetAction);
  };

  handleRetry = () => {
    const { currentQuiz, currentTopic, full } = this.props;
    this.props.restartQuiz(currentTopic, currentQuiz);
    const quiz = _.find(_.find(full, { _id: currentTopic }).quizzes, {
      _id: currentQuiz
    });
    this.props.navigation.navigate('Quiz', {
      quizName: quiz.name,
      data: quiz.questions
    });
  };

  render() {
    const { correct, mistake, score } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Header
          title="Result"
          left={<BackButton onPress={this.handleBack} />}
        />
        <View style={styles.countsContainer}>
          <View style={styles.countBox}>
            <Text style={styles.countBoxHeading}>CORRECT</Text>
            <Text style={styles.countBoxValue}>
              {correct}
            </Text>
          </View>
          <View style={styles.countBox}>
            <Text style={styles.countBoxHeading}>MISTAKES</Text>
            <Text style={styles.countBoxValue}>
              {mistake}
            </Text>
          </View>
        </View>
        <AnimatedCircularProgress
          ref="circularProgress"
          size={height < 650 ? 100 : 140}
          width={height < 650 ? 50 : 70}
          tintColor="#008533"
          backgroundColor="#4A4A4A"
          rotation={0}
          fill={0}
        />
        <View style={styles.scoreBox}>
          <Text style={styles.countBoxHeading}>SCORE</Text>
          <Text style={styles.scoreBoxValue}>
            {score}%
          </Text>
        </View>
        <View style={styles.buttonGroup}>
          <TouchableOpacity activeOpacity={0.6} onPress={this.handleRetry}>
            <View style={styles.buttonRetryContainer}>
              <Text style={styles.buttonText}>Retry Quiz</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.orText}>or</Text>
          <TouchableOpacity activeOpacity={0.6} onPress={this.handleBack}>
            <View style={styles.buttonNewContainer}>
              <Text style={styles.buttonText}>Start New Quiz</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.feedbackText}>
          If you have any feedback, please send an email to{' '}
          <Text style={{ fontWeight: '700' }}>enigmaappjs@gmail.com</Text>
        </Text>
      </View>
    );
  }
}

export default Result;
