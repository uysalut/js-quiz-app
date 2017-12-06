import { StyleSheet, Dimensions, Platform } from 'react-native';
import { ORANGE_PRIMARY, GREEN_QUIZ } from '../../constants';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: ORANGE_PRIMARY,
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 90 : 50
  },
  scrollContainer: {
    paddingBottom: 60
  },
  scrollView: {
    flex: 1
  },
  quizCardContainer: {
    backgroundColor: '#fff',
    width: width * 0.94,
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 15,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowOffset: { height: 2 },
    shadowRadius: 4
  },
  titleContainer: {
    flexDirection: 'row',
    width: width * 0.94,
    backgroundColor: GREEN_QUIZ,
    height: 55,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  imageContainer: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10
  },
  countText: {
    fontFamily: 'Avenir',
    fontWeight: '500',
    fontSize: 14,
    color: '#fff'
  },
  bodyContainer: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 15
  },
  name: {
    fontFamily: 'Avenir',
    fontWeight: '300',
    fontSize: 19,
    color: '#000',
    marginBottom: 10
  },
  by: {
    fontFamily: 'Avenir',
    fontWeight: '700',
    fontSize: 13,
    color: '#000',
    marginBottom: 10
  },
  buttonContainer: {
    backgroundColor: GREEN_QUIZ,
    width: width * 0.45,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4
  },
  buttonText: {
    fontFamily: 'Avenir',
    fontWeight: '300',
    fontSize: 14,
    color: '#fff'
  }
});
