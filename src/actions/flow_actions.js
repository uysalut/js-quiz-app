import _ from 'lodash';
import { WALKTHROUGH_COMPLETE, SET_FULL, UPDATE_HISTORY } from './types';

export const walkthroughComplete = () => {
  return { type: WALKTHROUGH_COMPLETE };
};

export const setFull = full => {
  return { type: SET_FULL, payload: full };
};

export const updateHistory = (topicId, quizId, questionId, answerId) => {
  return (dispatch, getState) => {
    const history = getState().flow.history.slice();
    const topicIndex = _.findIndex(history, { _id: topicId });
    if (topicIndex !== -1) {
      const quizIndex = _.findIndex(history[topicIndex].quizzes, {
        _id: quizId
      });
      if (quizIndex !== -1) {
        const questionIndex = _.findIndex(
          history[topicIndex].quizzes[quizIndex].questions,
          { _id: questionId }
        );
        if (questionIndex !== -1) {
          history[topicIndex].quizzes[quizIndex].questions[
            questionIndex
          ].answer = answerId;
        } else {
          history[topicIndex].quizzes[quizIndex].questions.push({
            _id: questionId,
            answer: answerId
          });
        }
      } else {
        history[topicIndex].quizzes.push({
          _id: quizId,
          isFinished: false,
          questions: [{ _id: questionId, answer: answerId }]
        });
      }
    } else {
      history.push({
        _id: topicId,
        quizzes: [
          {
            _id: quizId,
            isFinished: false,
            questions: [{ _id: questionId, answer: answerId }]
          }
        ]
      });
    }
    dispatch({ type: UPDATE_HISTORY, payload: history });
  };
};

export const restartQuiz = (topicId, quizId) => {
  return (dispatch, getState) => {
    const history = getState().flow.history.slice();
    const topicIndex = _.findIndex(history, { _id: topicId });
    const quizIndex = _.findIndex(history[topicIndex].quizzes, {
      _id: quizId
    });
    history[topicIndex].quizzes.splice(quizIndex, 1);
    dispatch({ type: UPDATE_HISTORY, payload: history });
  };
};

export const finishQuiz = (topicId, quizId) => {
  return (dispatch, getState) => {
    const history = getState().flow.history.slice();
    const topicIndex = _.findIndex(history, { _id: topicId });
    const quizIndex = _.findIndex(history[topicIndex].quizzes, {
      _id: quizId
    });
    history[topicIndex].quizzes[quizIndex].isFinished = true;
    dispatch({ type: UPDATE_HISTORY, payload: history });
  };
};
