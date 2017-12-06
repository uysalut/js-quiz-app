import React, { Component } from 'react';
import {
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Animated,
  Platform
} from 'react-native';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';
import { MarkdownView } from 'react-native-markdown-view';

import { GREEN_QUIZ } from '../../constants';
import { styles, answerStyle, answerActiveStyle } from './styles';

class Question extends Component {
  state = {
    isAnswered: false,
    selectedOption: this.props.previousAnswer,
    selectedOpacity: this.props.previousAnswer
      ? new Animated.Value(1)
      : new Animated.Value(0.5)
  };

  onAnswer(item) {
    this.props.updateAnswers(item);
    this.setState({ selectedOption: item._id });
    Animated.timing(this.state.selectedOpacity, {
      toValue: 1,
      duration: 1000
    }).start();
  }

  getAnswerStyle(item) {
    if (item._id === this.state.selectedOption) {
      if (item.correct) {
        return [
          styles.questionCodeBox,
          { opacity: this.state.selectedOpacity, backgroundColor: GREEN_QUIZ }
        ];
      }
      return [
        styles.questionCodeBox,
        { opacity: this.state.selectedOpacity, backgroundColor: 'red' }
      ];
    } else if (!!this.state.selectedOption && item.correct) {
      return [
        styles.questionCodeBox,
        { opacity: this.state.selectedOpacity, backgroundColor: GREEN_QUIZ }
      ];
    }

    return styles.questionCodeBox;
  }

  getAnswerTextStyle(item) {
    const { selectedOption } = this.state;
    if (item._id === selectedOption || (!!selectedOption && item.correct)) {
      return answerActiveStyle;
    }
    return answerStyle;
  }

  renderAnswers() {
    return this.props.data.answers.map(item => {
      return (
        <TouchableWithoutFeedback
          key={item._id}
          onPress={() => this.onAnswer(item)}
          disabled={!!this.state.selectedOption}
        >
          <Animated.View style={this.getAnswerStyle(item)}>
            <MarkdownView styles={this.getAnswerTextStyle(item)}>
              {item.text}
            </MarkdownView>
          </Animated.View>
        </TouchableWithoutFeedback>
      );
    });
  }

  render() {
    return (
      <View style={styles.questionOuterContainer}>
        <ScrollView contentContainerStyle={styles.questionContainer}>
          <View style={styles.questionInnerContainer}>
            {this.props.data.code
              ? <View style={styles.questionCodeBox}>
                  <SyntaxHighlighter
                    lineStyle={{ lineHeight: Platform.OS === 'ios' ? 12 : 10 }}
                    language="javascript"
                    style={docco}
                  >
                    {this.props.data.code}
                  </SyntaxHighlighter>
                </View>
              : null}
            <MarkdownView
              styles={{
                paragraph: styles.questionText,
                inlineCode: {
                  backgroundColor: 'transparent',
                  fontWeight: '500',
                  color: '#33816F'
                }
              }}
            >
              {this.props.data.text}
            </MarkdownView>
            {this.renderAnswers()}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Question;
