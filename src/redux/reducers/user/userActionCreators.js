import * as ActionTypes from './userActionTypes';

export const updateUserField = (e) => {
  return {
    type: ActionTypes.UPDATE_USER_FIELD,
    payload: { [e.target.name]: e.target.value },
  };
};
