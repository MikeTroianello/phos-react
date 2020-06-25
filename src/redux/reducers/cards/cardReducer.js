import * as ActionTypes from './cardActionTypes';
let defaultState = {
  type: '',
  title: '',
  description: '',
  example: '',
  reference: '',
  tags: '',
  public: false,
};

export const cardReducer = (state = defaultState, action) => {
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
    case ActionTypes.CREATE_CARD:
      return {
        type: '',
        title: '',
        description: '',
        example: '',
        reference: '',
        tags: '',
        public: false,
      };
    default:
      return state;
  }
};
