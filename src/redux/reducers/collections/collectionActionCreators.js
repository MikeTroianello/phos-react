import * as ActionTypes from './collectionActionTypes';
import {source} from '../../../source'

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

export const updateCheckBox = (e) => {
  return {
    type: ActionTypes.UPDATE_CHECKBOX,
    payload: [e.target.name],
  };
};

export const createCollection = (e, collection) => async (dispatch) => {
  e.preventDefault();
  console.log('CREATING collection');
  let response = await fetch(
    `${source}/collections/create`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'omit',
      body: JSON.stringify(collection),
    }
  );
  response = await response.json();
  dispatch(collectionCreated(response.message));
};

export const collectionCreated = (message) => ({
  type: ActionTypes.COLLECTION_CREATED,
  payload: message,
});
