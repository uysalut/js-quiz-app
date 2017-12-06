import { Animated, Easing } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Walkthrough from './screens/Walkthrough';
import InitialLoading from './screens/InitialLoading';
import Topics from './screens/Topics';
import Quizzes from './screens/Quizzes';
import Quiz from './screens/Quiz';
import Result from './screens/Result';

const HomeNavigator = StackNavigator(
  {
    Topics: { screen: Topics },
    Quizzes: { screen: Quizzes },
    Quiz: { screen: Quiz },
    Result: { screen: Result }
  },
  {
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
        timing: Animated.timing,
        easing: Easing.step0
      }
    }),
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);

const MainNavigator = StackNavigator(
  {
    InitialLoading: { screen: InitialLoading },
    Walkthrough: { screen: Walkthrough },
    Home: { screen: HomeNavigator }
  },
  {
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);

export default MainNavigator;
