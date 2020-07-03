import * as ActionTypes from './cardActionTypes';
let defaultCardState = {
  type: '',
  title: '',
  description: '',
  example: '',
  reference: '',
  tags: '',
  public: false,
  message: '',
};

export const cardReducer = (state = defaultCardState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_FIELD:
      return {
        ...state,
        [Object.keys(action.payload)[0]]: Object.values(action.payload)[0],
      };
    case ActionTypes.UPDATE_CHECKBOX:
      return {
        ...state,
        [action.payload]: !state[action.payload],
      };
    case ActionTypes.CARD_CREATED:
      return {
        ...defaultCardState,
        message: action.payload,
      };
    default:
      return state;
  }
};

//NOTE: Object.keys/values will return the key/value pair for each specific text field
