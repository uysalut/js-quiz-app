import React, { Component } from 'react';
import { connect } from 'react-redux';
import Topics from './Topics';
import * as actions from '../../actions';

class TopicsContainer extends Component {
  render() {
    return <Topics {...this.props} />;
  }
}

const mapStateToProps = state => {
  return { full: state.flow.full };
};

export default connect(mapStateToProps, actions)(TopicsContainer);
