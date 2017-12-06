import { combineReducers } from 'redux';
import flow from './flow_reducer';
import current from './current_reducer';

const rootReducer = combineReducers({
  flow,
  current
});

export default rootReducer;
