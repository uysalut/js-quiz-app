import React, { Component } from 'react';
import { View, StatusBar, ScrollView } from 'react-native';
import { AdMobBanner } from 'react-native-admob';

import { styles } from './styles';
import Header from '../../components/Header';
import TopicCard from './TopicCard';
import { bannerId } from '../../constants';

class Topics extends Component {
  renderCategories() {
    return this.props.full.map(item => {
      const { name, isComingSoon, _id } = item;
      return (
        <TopicCard
          key={name}
          name={name}
          isComingSoon={isComingSoon}
          navigation={this.props.navigation}
          data={item.quizzes}
          topicId={_id}
          setCurrentTopic={this.props.setCurrentTopic}
        />
      );
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Header title="All Topics" />
        <ScrollView style={styles.scrollView}>
          {this.renderCategories()}
        </ScrollView>
        <View style={styles.adContainer}>
          <AdMobBanner adSize="banner" adUnitID={bannerId} />
        </View>
      </View>
    );
  }
}

export default Topics;
