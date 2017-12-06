import { StyleSheet, Platform, Dimensions } from 'react-native';
import { ORANGE_PRIMARY } from '../../constants';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: ORANGE_PRIMARY,
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 90 : 40
  },
  progressContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  progressText: {
    fontFamily: 'Avenir',
    fontWeight: '300',
    fontSize: 18,
    color: '#fff',
    marginBottom: 10
  },
  bottomNavContainer: {
    width: width * 0.9,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  questionOuterContainer: {
    height: Platform.OS === 'ios' ? height - 170 : height - 140
  },
  questionContainer: {
    width,
    backgroundColor: ORANGE_PRIMARY,
    alignItems: 'center'
  },
  questionInnerContainer: {
    width: width * 0.9
  },
  questionCodeBox: {
    marginBottom: 10,
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowOffset: { height: 2 },
    shadowRadius: 4,
    borderRadius: 5
  },
  questionText: {
    fontFamily: 'Avenir',
    fontWeight: '600',
    fontSize: height < 650 ? 16 : 18,
    color: '#fff'
  },
  solutionContainer: {
    backgroundColor: '#fff',
    flex: 1,
    paddingVertical: 20,
    width
  },
  solutionInnerContainer: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: width * 0.05,
    paddingRight: width * 0.05
  },
  contentContainer: {
    alignItems: 'center',
    paddingBottom: 50
  },
  crossIcon: {
    width: 30,
    height: 30,
    alignSelf: 'flex-end',
    marginRight: width * 0.05
  },
  solutionLinkText: {
    fontFamily: 'Avenir',
    fontWeight: '300',
    fontSize: height < 650 ? 14 : 16,
    color: ORANGE_PRIMARY,
    marginTop: 15,
    alignSelf: 'center'
  }
});

export const answerStyle = {
  inlineCode: {
    backgroundColor: '#fff',
    fontWeight: '700',
    fontSize: height < 650 ? 14 : 16,
    padding: 0
  },
  paragraph: {
    padding: 0,
    fontFamily: 'Avenir',
    fontSize: height < 650 ? 14 : 16,
    fontWeight: '300'
  }
};

export const answerActiveStyle = {
  inlineCode: {
    backgroundColor: 'transparent',
    color: '#fff',
    fontWeight: '700',
    fontSize: height < 650 ? 14 : 16,
    padding: 0
  },
  paragraph: {
    color: '#fff',
    padding: 0,
    fontFamily: 'Avenir',
    fontSize: height < 650 ? 14 : 16,
    fontWeight: '700'
  }
};

export const solutionStyle = {
  inlineCode: {
    backgroundColor: '#fff',
    fontWeight: '700',
    fontSize: height < 650 ? 14 : 16,
    padding: 0,
    color: ORANGE_PRIMARY
  },
  paragraph: {
    padding: 0,
    fontFamily: 'Avenir',
    fontSize: height < 650 ? 14 : 16,
    fontWeight: '300'
  }
};
