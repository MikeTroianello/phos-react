import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { cardReducer } from './reducers/cards/cardReducer';
import { userReducer } from './reducers/user/userReducer';
import { collectionReducer } from './reducers/collections/collectionReducer';

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({ cardReducer, userReducer, collectionReducer }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
