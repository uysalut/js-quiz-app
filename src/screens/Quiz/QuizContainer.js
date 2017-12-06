import React, { Component } from 'react';
import { connect } from 'react-redux';
import Quiz from './Quiz';
import * as actions from '../../actions';

class QuizContainer extends Component {
  render() {
    return <Quiz {...this.props} />;
  }
}

const mapStateToProps = state => {
  const { currentTopic, currentQuiz } = state.current;
  return {
    currentTopic,
    currentQuiz,
    full: state.flow.full
  };
};

export default connect(mapStateToProps, actions)(QuizContainer);
