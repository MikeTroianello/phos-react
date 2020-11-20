import * as ActionTypes from './userActionTypes';

import { source } from '../../../source';

export const updateUserField = (e) => {
  return {
    type: ActionTypes.UPDATE_USER_FIELD,
    payload: { [e.target.name]: e.target.value },
  };
};

export const userPreCheck = (e, user) => {
  e.preventDefault();
  if (!user.username || !user.password || !user.passwordDouble) {
    return {
      type: ActionTypes.SIGNUP_FAILED,
      payload:
        'Username, Password, and a confirmation of your password are required',
    };
  } else return createUser(user);
};

export const createUser = (user) => async (dispatch) => {
  console.log('HERE', process.env);
  let response = await fetch(`${source}/users/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'omit',
    body: JSON.stringify(user),
  });
  response = await response.json();
  dispatch(loggedIn('Welcome to Phos!', response.token));
};

export const userCreated = (message) => ({
  type: ActionTypes.USER_CREATED,
  payload: message,
});

export const loginPreCheck = (e, user) => (dispatch) => {
  e.preventDefault();
  console.log('DA PRE CHECK', user);
  if (!user.username || !user.password) {
    return {
      type: ActionTypes.LOGIN_FAILED,
      payload: 'Please enter a username and password',
    };
  } else dispatch(login(user));
};

export const login = (user) => async (dispatch) => {
  console.log('LOGGING IN', user);
  let response = await fetch(`${source}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'omit',
    body: JSON.stringify(user),
  });
  response = await response.json();
  console.log('YOU HAVE NOW LOGGED IN', response);
  dispatch(loggedIn(response.message, response.token, response.id));
};

export const loggedIn = (message, token, id) => ({
  type: ActionTypes.LOGIN,
  payload: { message, token, id },
});

export const checkLogin = async () => {
  let response = await fetch(`${source}/users/checkLogin`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'omit',
  });
  response = await response.json();
  console.log('WHAT IS HAPPENING?', response);
};

// export const logout = async() => {
//   console.log("INSIDE LOGOUT")
//   await fetch(`${source}/users/logout`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     credentials: 'omit',
//   });
//   console.log("YOU HAVE NOW LOGGED OUT")
//   return{type: ActionTypes.LOGOUT}
// }
export const logout = () => {
  // console.log("INSIDE LOGOUT")
  // await fetch(`${source}/users/logout`, {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   credentials: 'omit',
  // });
  // console.log("YOU HAVE NOW LOGGED OUT")
  return { type: ActionTypes.LOGOUT };
};
