import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Platform
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { styles } from './styles';

const { width, height } = Dimensions.get('window');

class Walkthrough extends Component {
  state = {
    currentIndex: 0
  };

  onSnapToItem = index => {
    this.setState({ currentIndex: index });
  };

  renderBullets() {
    return this.props.cards.map((card, index) => {
      return (
        <View
          key={index}
          style={
            index === this.state.currentIndex
              ? [styles.bullet, styles.bulletActive]
              : styles.bullet
          }
        />
      );
    });
  }

  renderItem({ item, index }) {
    return (
      <View style={styles.carouselInnerContainer} key={index}>
        <Image
          style={{
            height: item.height,
            width: item.width,
            marginTop: height * 0.13
          }}
          source={item.icon}
        />
        <Text
          style={
            Platform.OS === 'ios'
              ? styles.carouselText
              : [styles.carouselText, { lineHeight: 25 }]
          }
        >
          {item.text}
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <View>
          <View style={styles.bulletContainer}>
            {this.renderBullets()}
          </View>
          <View style={styles.carouselContainer}>
            <Carousel
              ref={c => {
                this.carousel = c;
              }}
              enableSnap
              inactiveSlideScale={1}
              sliderWidth={width}
              itemWidth={width}
              data={this.props.cards}
              renderItem={this.renderItem}
              onSnapToItem={this.onSnapToItem}
            />
          </View>
          <View style={styles.buttonsContainer}>
            {this.state.currentIndex !== 2
              ? <View style={{ flexDirection: 'row', width }}>
                  <TouchableOpacity
                    style={[
                      styles.walkthroughtButton,
                      {
                        backgroundColor: 'transparent',
                        borderWidth: 1,
                        borderColor: '#fff'
                      }
                    ]}
                    onPress={this.props.onComplete}
                  >
                    <Text style={styles.walkthroughtButtonText}>Skip</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.walkthroughtButton,
                      { backgroundColor: '#008533' }
                    ]}
                    onPress={() => this.carousel.snapToNext()}
                  >
                    <Text style={styles.walkthroughtButtonText}>Next</Text>
                  </TouchableOpacity>
                </View>
              : <TouchableOpacity
                  style={styles.letsGoButton}
                  onPress={this.props.onComplete}
                >
                  <Text style={styles.letsGoText}>Let's Go</Text>
                </TouchableOpacity>}
          </View>
        </View>
      </View>
    );
  }
}

export default Walkthrough;
