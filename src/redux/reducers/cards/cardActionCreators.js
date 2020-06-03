import * as ActionTypes from './cardActionTypes';

export const updateField = (e) => ({
  type: ActionTypes.UPDATE_FIELD,
  payload: { [e.target.name]: e.target.value },
});

// export const updateField = (e) => {
//   console.log('THIS IS THE TYPE', e.target.name);
//   console.log('THIS IS THE VALUE', e.target.value);
// };
