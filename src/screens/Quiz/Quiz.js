import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import _ from 'lodash';
import { AdMobInterstitial } from 'react-native-admob';

import { styles } from './styles';
import Header from '../../components/Header';
import BackButton from '../../components/BackButton';
import Question from './Question';
import Solution from './Solution';
import { interstitialID } from '../../constants';

const { width } = Dimensions.get('window');
AdMobInterstitial.setAdUnitID(interstitialID);

class Quiz extends Component {
  data = this.props.navigation.state.params.data;
  quizName = this.props.navigation.state.params.quizName;
  historyData = this.props.navigation.state.params.historyData;
  length = this.data.length;
  state = {
    currentIndex: 0,
    solutionVisible: false,
    answers: new Array(this.length).fill(null)
  };

  componentDidMount() {
    const answers = this.data.map(question => {
      const q = _.find(this.historyData, { _id: question._id });
      if (q) {
        const isCorrect = !!_.find(question.answers, { _id: q.answer }).correct;
        return isCorrect;
      }
      return null;
    });
    this.setState({ answers });
    AdMobInterstitial.addEventListener('adClosed', () => {
      this.setState({ solutionVisible: true });
    });
  }

  componentWillUnmount() {
    AdMobInterstitial.removeAllListeners();
  }

  onCloseSolution = () => {
    this.setState({ solutionVisible: false });
  };

  handleSolutionPress = () => {
    AdMobInterstitial.requestAd()
      .then(() => AdMobInterstitial.showAd())
      .catch(() => this.setState({ solutionVisible: true }));
  };

  handleBack = () => {
    const topic = _.find(this.props.full, { _id: this.props.currentTopic });
    const headerName =
      topic.name === 'Javascript General' ? 'JS General' : topic.name;
    this.props.navigation.navigate('Quizzes', {
      categoryName: headerName,
      data: topic.quizzes
    });
  };

  updateAnswers = answer => {
    const { currentTopic, currentQuiz } = this.props;
    const currentQuestion = this.data[this.state.currentIndex]._id;
    this.props.updateHistory(
      currentTopic,
      currentQuiz,
      currentQuestion,
      answer._id
    );
    const newAnswers = this.state.answers.slice();
    newAnswers[this.state.currentIndex] = answer.correct;
    this.setState({ answers: newAnswers });
  };

  renderItem = ({ item, index }) => {
    let previousAnswer = null;
    const indexInHistoryData = _.findIndex(this.historyData, { _id: item._id });
    if (indexInHistoryData !== -1) {
      previousAnswer = this.historyData[indexInHistoryData].answer;
    }
    return (
      <Question
        data={item}
        key={index}
        updateAnswers={this.updateAnswers}
        previousAnswer={previousAnswer}
      />
    );
  };

  renderNextorFinish() {
    const correct = this.state.answers.filter(i => i === true).length;
    const mistake = this.state.answers.filter(i => i === false).length;
    if (this.state.currentIndex + 1 < this.length) {
      return (
        <TouchableOpacity onPress={() => this.carousel.snapToNext()}>
          <Text style={styles.progressText}>Next</Text>
        </TouchableOpacity>
      );
    } else if (
      this.state.currentIndex + 1 === this.length &&
      (!!correct || !!mistake)
    ) {
      return (
        <TouchableOpacity
          onPress={() => {
            let score = correct / this.length;
            score = Math.round(score * 100);
            this.props.navigation.navigate('Result', {
              score,
              correct,
              mistake
            });
          }}
        >
          <Text style={styles.progressText}>Finish Quiz</Text>
        </TouchableOpacity>
      );
    }
    return null;
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          title={this.quizName}
          left={<BackButton onPress={this.handleBack} />}
        />
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>
            Question {this.state.currentIndex + 1} of {this.length}
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Carousel
            ref={c => {
              this.carousel = c;
            }}
            enableSnap
            inactiveSlideScale={1}
            sliderWidth={width}
            itemWidth={width}
            data={this.data}
            renderItem={this.renderItem}
            onSnapToItem={index => {
              this.setState({ currentIndex: index });
            }}
          />
        </View>
        <View style={styles.bottomNavContainer}>
          <TouchableOpacity onPress={() => this.carousel.snapToPrev()}>
            <Text style={styles.progressText}>Previous</Text>
          </TouchableOpacity>
          {this.state.answers[this.state.currentIndex] !== null
            ? <TouchableOpacity onPress={this.handleSolutionPress}>
                <Text style={styles.progressText}>View Solution</Text>
              </TouchableOpacity>
            : null}
          {this.renderNextorFinish()}
        </View>
        <Solution
          visible={this.state.solutionVisible}
          data={this.data[this.state.currentIndex].solution}
          solutionLink={this.data[this.state.currentIndex].solutionLink}
          solutionLinkText={this.data[this.state.currentIndex].solutionLinkText}
          onCloseSolution={this.onCloseSolution}
        />
      </View>
    );
  }
}

export default Quiz;
