import * as ActionTypes from './collectionActionTypes';

let defaultColectionStore = {
  name: '',
  tags: '',
  private: false,
  message: '',
  temporaryCollection: [],
  // temporaryCollection: [
  //   {
  //     definition: true,
  //     frontside: 'ONE',
  //     backside: 'ONe',
  //     example: 'ev',
  //     reference: 'weg',
  //     tags: 'wwgw',
  //     public: false,
  //     showExample: true,
  //     showReference: true,
  //   },
  //   {
  //     definition: false,
  //     frontside: 'TWO',
  //     backside: 'sdfg',
  //     example: 'sdfg',
  //     reference: '',
  //     tags: 'wwgw',
  //     public: false,
  //     showExample: true,
  //     showReference: false,
  //   },
  //   {
  //     definition: true,
  //     frontside: 'THREE',
  //     backside: 'Backsiede',
  //     example: '',
  //     reference: '',
  //     tags: 'xxxxx',
  //     public: true,
  //     showExample: false,
  //     showReference: false,
  //   },
  // ],
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
    case ActionTypes.EDIT_CARD_IN_ARRAY:
      let cardArr = state.temporaryCollection;
      cardArr.splice(action.payload.index, 1, action.payload);
      console.log('NEW ARRR', cardArr);
      return {
        ...defaultColectionStore,
        temporaryCollection: cardArr,
      };
    default:
      return state;
  }
};
