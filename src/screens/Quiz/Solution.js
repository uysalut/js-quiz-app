import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Modal,
  Text,
  TouchableOpacity,
  Linking,
  Image,
  Platform
} from 'react-native';
import { Client } from 'bugsnag-react-native';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';
import { MarkdownView } from 'react-native-markdown-view';
import { styles, solutionStyle } from './styles';

const bugsnag = new Client();

class Solution extends Component {
  openSolutionLink = () => {
    const { solutionLink } = this.props;
    Linking.canOpenURL(solutionLink).then(supported => {
      if (supported) {
        Linking.openURL(solutionLink).catch(err =>
          bugsnag.notify(err, 'openSolutionLink failed.')
        );
      }
    });
  };

  renderSolution() {
    return this.props.data.map((item, index) => {
      if (item.isCode) {
        return (
          <SyntaxHighlighter
            lineStyle={{ lineHeight: Platform.OS === 'ios' ? 12 : 10 }}
            key={index}
            language="javascript"
            style={docco}
          >
            {item.content}
          </SyntaxHighlighter>
        );
      }
      return (
        <MarkdownView key={index} styles={solutionStyle}>
          {item.content}
        </MarkdownView>
      );
    });
  }

  render() {
    const { visible, onCloseSolution, solutionLinkText } = this.props;
    return (
      <Modal
        animationType={'fade'}
        transparent
        visible={visible}
        onRequestClose={() => {}}
      >
        <View style={styles.solutionContainer}>
          <TouchableOpacity onPress={onCloseSolution}>
            <Image
              style={styles.crossIcon}
              source={require('../../assets/CROSS.png')}
            />
          </TouchableOpacity>
          <ScrollView
            style={styles.solutionInnerContainer}
            contentContainerStyle={styles.contentContainer}
          >
            {this.renderSolution()}
            {!!solutionLinkText &&
              <TouchableOpacity onPress={this.openSolutionLink}>
                <Text style={styles.solutionLinkText}>
                  {solutionLinkText}
                </Text>
              </TouchableOpacity>}
          </ScrollView>
        </View>
      </Modal>
    );
  }
}

export default Solution;
