import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import _ from 'lodash';

import { styles } from './styles';
import QuizCard from './QuizCard';
import Header from '../../components/Header';
import BackButton from '../../components/BackButton';
import Banner from '../../components/Banner';

class Quizzes extends Component {
  handleBack = () => {
    this.props.navigation.navigate('Topics');
  };

  renderQuizzes() {
    const { data, categoryName } = this.props.navigation.state.params;
    return data.map((item, index) => {
      let historyData = [];
      let isFinished = false;
      const topicIndex = _.findIndex(this.props.history, {
        _id: this.props.currentTopic
      });
      if (topicIndex !== -1) {
        const quizIndex = _.findIndex(this.props.history[topicIndex].quizzes, {
          _id: item._id
        });
        if (quizIndex !== -1) {
          historyData = this.props.history[topicIndex].quizzes[quizIndex]
            .questions;
          isFinished = this.props.history[topicIndex].quizzes[quizIndex]
            .isFinished;
        }
      }
      return (
        <QuizCard
          key={index}
          name={item.name}
          qCount={item.questions.length}
          category={categoryName}
          by={item.author}
          navigation={this.props.navigation}
          data={item.questions}
          quizId={item._id}
          topicId={this.props.currentTopic}
          setCurrentQuiz={this.props.setCurrentQuiz}
          historyData={historyData}
          restartQuiz={this.props.restartQuiz}
          isFinished={isFinished}
        />
      );
    });
  }

  render() {
    const { categoryName } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Header
          title={categoryName}
          left={<BackButton onPress={this.handleBack} />}
        />
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          style={styles.scrollView}
        >
          {this.renderQuizzes()}
        </ScrollView>
        <Banner />
      </View>
    );
  }
}

export default Quizzes;
