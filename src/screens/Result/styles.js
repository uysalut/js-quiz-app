import { StyleSheet, Dimensions } from 'react-native';
import { ORANGE_PRIMARY } from '../../constants';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: ORANGE_PRIMARY,
    flex: 1,
    paddingTop: 90,
    alignItems: 'center'
  },
  countsContainer: {
    flexDirection: 'row',
    width: width * 0.7,
    justifyContent: 'space-between'
  },
  countBox: {
    alignItems: 'center'
  },
  scoreBox: {
    marginTop: height < 650 ? 10 : 20,
    alignItems: 'center'
  },
  scoreBoxValue: {
    fontFamily: 'Avenir',
    fontWeight: '800',
    color: '#fff',
    fontSize: height < 650 ? 36 : 48
  },
  countBoxHeading: {
    fontFamily: 'Avenir',
    fontWeight: '300',
    color: '#fff',
    fontSize: 18
  },
  countBoxValue: {
    fontFamily: 'Avenir',
    fontWeight: '800',
    color: '#fff',
    fontSize: height < 650 ? 20 : 30
  },
  buttonGroup: {
    marginTop: height < 650 ? 10 : 20,
    alignItems: 'center'
  },
  buttonRetryContainer: {
    backgroundColor: 'transparent',
    borderColor: '#4A4A4A',
    borderWidth: 1,
    paddingVertical: height < 650 ? 7 : 10,
    width: width * 0.5,
    borderRadius: 4,
    alignItems: 'center'
  },
  buttonNewContainer: {
    backgroundColor: '#008533',
    paddingVertical: height < 650 ? 7 : 10,
    width: width * 0.5,
    borderRadius: 4,
    alignItems: 'center'
  },
  buttonText: {
    fontFamily: 'Avenir',
    fontWeight: '300',
    color: '#fff',
    fontSize: height < 650 ? 16 : 18
  },
  orText: {
    fontFamily: 'Avenir',
    fontWeight: '300',
    color: '#fff',
    fontSize: height < 650 ? 16 : 18,
    marginVertical: 10
  },
  feedbackText: {
    color: '#fff',
    textAlign: 'center',
    width: width * 0.7,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 15,
    fontFamily: 'Avenir',
    fontSize: height < 650 ? 13 : 15
  }
});
