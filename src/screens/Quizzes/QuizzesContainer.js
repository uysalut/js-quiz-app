import React, { Component } from 'react';
import { connect } from 'react-redux';
import Quizzes from './Quizzes';
import * as actions from '../../actions';

class QuizzesContainer extends Component {
  render() {
    return <Quizzes {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    history: state.flow.history,
    currentTopic: state.current.currentTopic
  };
};

export default connect(mapStateToProps, actions)(QuizzesContainer);
