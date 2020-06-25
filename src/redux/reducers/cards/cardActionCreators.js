import * as ActionTypes from './cardActionTypes';

export const updateField = (e) => ({
  type: ActionTypes.UPDATE_FIELD,
  payload: { [e.target.name]: e.target.value },
});

// export const updateCheckBox = (e) => {
//   let val = Boolean(e.target.value);
//   console.log('WE ARE HERE', e.target.name, val);
//   return {
//     type: ActionTypes.UPDATE_CHECKBOX,
//     payload: { [e.target.name]: val },
//   };
// };
export const updateCheckBox = (e) => {
  return {
    type: ActionTypes.UPDATE_CHECKBOX,
    payload: [e.target.name],
  };
};

// export const createCard = (card) => ({
//   type: ActionTypes.CREATE_CARD,
//   payload: card,
// });

export const createCard = (e, card) => {
  e.preventDefault();
  console.log('THIS SHOULD STAY????', card);
  return {
    type: ActionTypes.CREATE_CARD,
    payload: card,
  };
};
