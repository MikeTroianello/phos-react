import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { cardReducer } from './reducers/cards/cardReducer';
import { userReducer } from './reducers/user/userReducer';

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({ cardReducer, userReducer }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
