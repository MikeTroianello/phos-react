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
    case ActionTypes.REMOVE_CARD_FROM_TEMPORARY_ARRAY:
      let cardArr = state.temporaryCollection;
      cardArr.filter((card) => card !== action.payload);
      return {
        ...defaultColectionStore,
        temporaryCollection: cardArr,
      };
    default:
      return state;
  }
};
