import * as ActionTypes from './userActionTypes';
let defaultUserState = {
  username: '',
  password: '',
  passwordDouble: '',
  fullname: '',
  email: '',
  phone: '',
  message: '',
  signup: false,
};

export const userReducer = (state = defaultUserState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_USER_FIELD:
      return {
        ...state,
        [Object.keys(action.payload)[0]]: Object.values(action.payload)[0],
      };
    case ActionTypes.SIGNUP_FAILED:
      return {
        ...state,
        message: action.payload,
      };
    case ActionTypes.USER_CREATED:
      return {
        ...defaultUserState,
        message: 'User has been created!',
      };
    case ActionTypes.LOGIN_FAILED:
      return {
        ...state,
        message: action.payload,
      };
    case ActionTypes.LOGIN:
      return {
        ...state,
        password: '',
      };
    default:
      return state;
  }
};
