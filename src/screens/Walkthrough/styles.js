import { StyleSheet, Dimensions } from 'react-native';
import { ORANGE_PRIMARY } from '../../constants';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ORANGE_PRIMARY
  },
  bulletContainer: {
    height: 90,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bullet: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(0,0,0,0.2)',
    marginHorizontal: 12
  },
  bulletActive: {
    backgroundColor: '#008533'
  },
  carouselContainer: {
    height: height - 205,
    justifyContent: 'center'
  },
  carouselInnerContainer: {
    height: height - 205,
    width,
    alignItems: 'center'
  },
  carouselText: {
    position: 'absolute',
    bottom: height * 0.11,
    width: width * 0.7,
    textAlign: 'center',
    fontFamily: 'Avenir',
    fontSize: 16,
    color: '#fff'
  },
  buttonsContainer: {
    height: 115,
    justifyContent: 'center',
    alignItems: 'center'
  },
  walkthroughtButton: {
    width: width * 0.4,
    paddingVertical: 17,
    borderRadius: 80,
    marginLeft: width * 0.066
  },
  walkthroughtButtonText: {
    color: '#fff',
    alignSelf: 'center',
    fontFamily: 'Avenir'
  },
  letsGoButton: {
    paddingVertical: 17,
    width: width * 0.8,
    backgroundColor: '#008533',
    borderRadius: 80,
    alignItems: 'center'
  },
  letsGoText: {
    color: '#fff',
    fontFamily: 'Avenir'
  }
});
