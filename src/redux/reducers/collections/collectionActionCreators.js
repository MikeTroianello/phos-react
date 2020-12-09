import * as ActionTypes from './collectionActionTypes';
import { source } from '../../../source';

export const updateCollectionField = (e) => {
  console.log('UPDATING...');
  return {
    type: ActionTypes.UPDATE_COLLECTION_FIELD,
    payload: { [e.target.name]: e.target.value },
  };
};
// export const updateCollectionField = (e) => ({
//   type: ActionTypes.UPDATE_COLLECTION_FIELD,
//   payload: { [e.target.name]: e.target.value },
// });

export const toggleField = (e) => {
  console.log('FIELDDD', e);
  console.log('TERGET DOT NAME', e.target.name);
  return {
    type: ActionTypes.TOGGLE_FIELD,
    payload: [e.target.name],
  };
};

export const createCollection = (e, collection, token) => async (dispatch) => {
  e.preventDefault();
  console.log('CREATING collection');
  let response = await fetch(`${source}/collections/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': token,
    },
    credentials: 'omit',
    body: JSON.stringify(collection),
  });
  response = await response.json();
  dispatch(collectionCreated(response.message));
};

export const collectionCreated = (message) => ({
  type: ActionTypes.COLLECTION_CREATED,
  payload: message,
});

export const addCardToCollection = (card, id) => {
  console.log('THIS IS THE ID', id);
  card.creatorId = id;
  console.log('THE CARD', card);
  return {
    type: ActionTypes.ADD_CARD_TO_COLLECTION,
    payload: card,
  };
};

export const saveCardArray = (e, cardArray, token, collectionId) => async (
  dispatch
) => {
  e.preventDefault();
  console.log('CREATING collection', cardArray, collectionId);
  console.log('OTHER', collectionId);
  let response = await fetch(`${source}/collections/add/${collectionId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': token,
    },
    credentials: 'omit',
    body: JSON.stringify(cardArray),
  });
  response = await response.json();
  dispatch(collectionCreated(response.message));
};

export const cardArraySaved = () => ({
  type: ActionTypes.CARD_ARRAY_SAVED,
});
