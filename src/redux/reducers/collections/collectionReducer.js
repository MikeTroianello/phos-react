import * as ActionTypes from './collectionActionTypes';
let defaultColectionStore = {
  name: '',
  tags: '',
  private: false,
  message: '',
  temporaryCollection: []
};

export const collectionReducer = (state = defaultColectionStore, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_COLLECTION_FIELD:
      console.log('HEre:', action.payload);
      return {
        ...state,
        [Object.keys(action.payload)[0]]: Object.values(action.payload)[0],
      };
    case ActionTypes.UPDATE_CHECKBOX:
      return {
        ...state,
        [action.payload]: !state[action.payload],
      };
    case ActionTypes.ADD_CARD:
      return {
        ...state,
        temporaryCollection: [...state.temporaryCollection, action.payload],
      };
    case ActionTypes.COLLECTION_CREATED:
      console.log('HEEERRREEE', action.payload);
      return {
        ...defaultColectionStore,
        message: 'Collection was created!',
      };
    default:
      return state;
  }
};
