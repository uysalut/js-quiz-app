import {
  WALKTHROUGH_COMPLETE,
  SET_FULL,
  UPDATE_HISTORY
} from '../actions/types';

const INITIAL_STATE = {
  isWalkthrough: false,
  full: [],
  history: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WALKTHROUGH_COMPLETE:
      return { ...state, isWalkthrough: true };
    case SET_FULL:
      return { ...state, full: action.payload };
    case UPDATE_HISTORY:
      return { ...state, history: action.payload };
    default:
      return state;
  }
};
