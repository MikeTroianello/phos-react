import * as ActionTypes from './collectionActionTypes';

export const updateCollectionField = (e) => ({
  type: ActionTypes.UPDATE_COLLECTION_FIELD,
  payload: { [e.target.name]: e.target.value },
});
