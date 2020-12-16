import * as ActionTypes from './cardActionTypes';
import * as ActionTypes2 from '../collections/collectionActionTypes';
let defaultCardState = {
  definition: true,
  frontside: '',
  backside: '',
  example: '',
  reference: '',
  tags: '',
  public: false,
  message: '',
  creatorId: null,
  showExample: false,
  showReference: false,
  index: null,
};

export const cardReducer = (state = defaultCardState, action) => {
  switch (action.type) {
    case ActionTypes.QUESTION_OR_DEFINITION:
      return {
        ...state,
        definition: action.payload,
      };
    case ActionTypes.UPDATE_FIELD:
      return {
        ...state,
        [Object.keys(action.payload)[0]]: Object.values(action.payload)[0],
      };
    case ActionTypes.TOGGLE_FIELD:
      console.log('AAAAA');
      console.log('INSIDE TOGGLE FIELD', action.payload);
      return {
        ...state,
        [action.payload]: !state[action.payload],
      };
    case ActionTypes.EDIT_CARD:
      console.log('INSIDE THE REDDDUCCCCERRRr', action.payload);
      return { ...action.payload };

    case ActionTypes.CARD_CREATED:
      return {
        ...defaultCardState,
        definition: state.definition,
        message: action.payload,
      };
    case ActionTypes2.EDIT_CARD_IN_ARRAY:
      return {
        ...defaultCardState,
      };
    default:
      return state;
  }
};

//NOTE: Object.keys/values will return the key/value pair for each specific text field
