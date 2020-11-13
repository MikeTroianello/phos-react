import * as ActionTypes from './userActionTypes';

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
  // e.preventDefault();
  let response = await fetch(
    `${process.env.BACKEND}/users/signup`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(user),
    }
  );
  response = await response.json();
  dispatch(userCreated(response.message));
};

export const userCreated = (message) => ({
  type: ActionTypes.USER_CREATED,
  payload: message,
});

export const loginPreCheck = (e, user) => {
  e.preventDefault();
  if (!user.username || !user.password) {
    return {
      type: ActionTypes.LOGIN_FAILED,
      payload: 'Please enter a username and password',
    };
  } else login(user);
};

export const login = (user) => async (dispatch) => {
  console.log('LOGGING IN', user);
  // let response = await fetch(`https://phos-backend.herokuapp.com/users/login`, {
  let response = await fetch(`${process.env.BACKEND}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(user),
  });
  response = await response.json();
  dispatch(loggedIn(response.message));
};

export const loggedIn = (message) => ({
  type: ActionTypes.LOGIN,
  payload: message,
});
