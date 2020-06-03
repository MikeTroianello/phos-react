import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { cardReducer } from './reducers/cards/cardReducer';

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({ cardReducer }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
