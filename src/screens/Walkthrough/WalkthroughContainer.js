import React, { Component } from 'react';
import { connect } from 'react-redux';
import Walkthrough from './Walkthrough';
import { walkthroughComplete } from '../../actions';

const CARDS = [
  {
    text:
      'Refresh your knowledge by having quick quizzes anywhere during your day.',
    icon: require('../../assets/quiz-icon.png'),
    height: 128,
    width: 120
  },
  {
    text:
      'Stay up-to-date by learning and practicing tricky parts of the language.',
    icon: require('../../assets/thinking.png'),
    height: 128,
    width: 104
  },
  {
    text:
      'For each question see detailed explanations that are designed to help you comprehend the concepts.',
    icon: require('../../assets/code.png'),
    height: 110,
    width: 147
  }
];

class WalkthroughContainer extends Component {
  onComplete = () => {
    this.props.walkthroughComplete();
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <Walkthrough {...this.props} cards={CARDS} onComplete={this.onComplete} />
    );
  }
}

export default connect(null, { walkthroughComplete })(WalkthroughContainer);
