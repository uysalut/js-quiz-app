import { StyleSheet, Dimensions, Platform } from 'react-native';
import { ORANGE_PRIMARY } from '../../constants';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: ORANGE_PRIMARY,
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 90 : 40
  },
  scrollView: {
    marginTop: 10
  },
  topicCardContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    width: width * 0.9,
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 15,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 20,
    paddingVertical: 5,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowOffset: { height: 2 },
    shadowRadius: 4
  },
  topicCardImageContainer: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10
  },
  topicName: {
    fontFamily: 'Avenir',
    fontWeight: '300',
    fontSize: 20
  },
  forwardIcon: {
    width: 15,
    height: 30,
    marginLeft: 'auto'
  },
  comingSoon: {
    marginLeft: 'auto',
    fontFamily: 'Avenir',
    fontWeight: '300',
    fontSize: 13,
    color: '#F70404'
  },
  adContainer: {
    alignItems: 'center',
    height: 50,
    marginTop: 5
  }
});
