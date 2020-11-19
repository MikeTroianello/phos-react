import * as ActionTypes from './userActionTypes';
let defaultUserState = {
  username: 'mike',
  password: 'mike',
  passwordDouble: '',
  fullname: '',
  email: '',
  phone: '',
  message: '',
  token: null,
  loggedIn:false,
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
        message: action.payload.message,
        token: action.payload.token,
        loggedIn: true
      };
    case ActionTypes.LOGOUT:
      return{
        ...defaultUserState,
        message: 'You have logged out!'
      }
    default:
      return state;
  }
};
