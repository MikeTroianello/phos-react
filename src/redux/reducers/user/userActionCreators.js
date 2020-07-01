import * as ActionTypes from './userActionTypes';

export const updateUserField = (e) => ({
  type: ActionTypes.UPDATE_FIELD,
  payload: { [e.target.name]: e.target.value },
});
