import * as ActionTypes from './userActionTypes';
let defaultUserState = {
  username: '',
  password: '',
  passwordDouble: '',
  fullname: '',
  email: '',
  phone: '',
  errorMessage: '',
  signup: false,
};

export const userReducer = (state = defaultUserState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_USER_FIELD:
      console.log('INSIDE REDUCER');
      return {
        ...state,
        [Object.keys(action.payload)[0]]: Object.values(action.payload)[0],
      };
    default:
      return state;
  }
};
