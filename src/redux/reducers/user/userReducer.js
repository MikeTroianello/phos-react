import * as ActionTypes from './userActionTypes';
let defaultUserState = {
  username: 'qqq',
  password: 'paww',
  fullname: 'fullname',
  phone: '867-5309',
  email: 'e@mail.com',
  errorMessage: '',
};

export const userReducer = (state = defaultUserState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_FIELD:
      return {
        ...state,
        [Object.keys(action.payload)[0]]: Object.values(action.payload)[0],
      };
    default:
      return state;
  }
};
