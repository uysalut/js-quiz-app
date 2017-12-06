import { SET_CURRENT_TOPIC, SET_CURRENT_QUIZ } from '../actions/types';

const INITIAL_STATE = {
  currentTopic: null,
  currentQuiz: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_TOPIC:
      return { ...state, currentTopic: action.payload };
    case SET_CURRENT_QUIZ:
      return { ...state, currentQuiz: action.payload };
    default:
      return state;
  }
};
