import React, { Component } from 'react';
import { connect } from 'react-redux';
import Result from './Result';
import * as actions from '../../actions';

class ResultContainer extends Component {
  render() {
    return <Result {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    currentTopic: state.current.currentTopic,
    currentQuiz: state.current.currentQuiz,
    full: state.flow.full
  };
};

export default connect(mapStateToProps, actions)(ResultContainer);
