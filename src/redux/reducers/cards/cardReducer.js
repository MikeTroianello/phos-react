import * as ActionTypes from './cardActionTypes';
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
    // return {
    //   definition: '',
    //   frontside: '',
    //   backside: '',
    //   example: '',
    //   reference: '',
    //   tags: '',
    //   public: '',
    //   message: '',
    //   creatorId: '',
    //   showExample: '',
    //   showReference: '',
    // };
    case ActionTypes.CARD_CREATED:
      return {
        ...defaultCardState,
        definition: state.definition,
        message: action.payload,
      };
    default:
      return state;
  }
};

//NOTE: Object.keys/values will return the key/value pair for each specific text field
