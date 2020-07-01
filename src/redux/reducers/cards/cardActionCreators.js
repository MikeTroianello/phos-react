import * as ActionTypes from './cardActionTypes';

export const updateCardField = (e) => ({
  type: ActionTypes.UPDATE_FIELD,
  payload: { [e.target.name]: e.target.value },
});

export const updateCheckBox = (e) => {
  return {
    type: ActionTypes.UPDATE_CHECKBOX,
    payload: [e.target.name],
  };
};

export const createCard = (e, card) => async (dispatch) => {
  e.preventDefault();
  let response = await fetch(`http://localhost:3000/cards/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(card),
  });
  response = await response.json();
  dispatch(cardCreated(response.message));
};

export const cardCreated = (message) => ({
  type: ActionTypes.CARD_CREATED,
  payload: message,
});
