import * as ActionTypes from './collectionActionTypes';
let defaultColectionStore = {
  name: '',
  tags: '',
  private: false,
  message: '',
  temporaryCollection: [],
};

export const collectionReducer = (state = defaultColectionStore, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_COLLECTION_FIELD:
      console.log('HEre:', action.payload);
      return {
        ...state,
        [Object.keys(action.payload)[0]]: Object.values(action.payload)[0],
      };
    case ActionTypes.TOGGLE_FIELD:
      console.log('HMMMMMMMM');
      return {
        ...state,
        [action.payload]: !state[action.payload],
      };
    case ActionTypes.ADD_CARD_TO_COLLECTION:
      return {
        ...state,
        temporaryCollection: [...state.temporaryCollection, action.payload],
      };
    case ActionTypes.COLLECTION_CREATED:
      return {
        ...defaultColectionStore,
        message: 'Collection was created!',
      };
    case ActionTypes.CARD_ARRAY_SAVED:
      return {
        ...defaultColectionStore,
        message: 'Cards were added to the collection!',
      };
    default:
      return state;
  }
};
