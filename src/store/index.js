import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from '../reducers';

const logger = createLogger({
  predicate: () => process.env.NODE_ENV === 'development'
});

const store = createStore(
  reducers,
  {},
  compose(applyMiddleware(thunk, logger), autoRehydrate())
);

persistStore(store, { storage: AsyncStorage, whitelist: ['flow'] });

export default store;
