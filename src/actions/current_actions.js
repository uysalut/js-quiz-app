import { SET_CURRENT_QUIZ, SET_CURRENT_TOPIC } from './types';

export const setCurrentTopic = topicId => {
  return { type: SET_CURRENT_TOPIC, payload: topicId };
};

export const setCurrentQuiz = quizId => {
  return { type: SET_CURRENT_QUIZ, payload: quizId };
};
