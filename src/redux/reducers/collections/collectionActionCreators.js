import * as ActionTypes from './collectionActionTypes';
import { source } from '../../../source';

export const updateCollectionField = (e) => {
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
  return {
    type: ActionTypes.TOGGLE_FIELD,
    payload: [e.target.name],
  };
};

export const createCollection = (e, collection, token) => async (dispatch) => {
  e.preventDefault();
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
  if (Number.isInteger(card.index)) {
    return {
      type: ActionTypes.EDIT_CARD_IN_ARRAY,
      payload: card,
    };
  } else {
    return {
      type: ActionTypes.ADD_CARD_TO_COLLECTION,
      payload: card,
    };
  }
};

export const saveCardArray = (e, cardArray, token, collectionId) => async (
  dispatch
) => {
  e.preventDefault();
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

export const removeCardFromTemporaryArray = (index) => ({
  type: ActionTypes.REMOVE_CARD_FROM_TEMPORARY_ARRAY,
  payload: index,
});
