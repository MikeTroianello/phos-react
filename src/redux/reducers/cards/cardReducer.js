import * as ActionTypes from './cardActionTypes';
let defaultCardState = {
  type: '1',
  title: '2',
  description: '',
  example: '',
  reference: '4',
  tags: '5',
  public: false,
  message: '6',
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
