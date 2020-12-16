import * as ActionTypes from './cardActionTypes';
import { source } from '../../../source';

export const updateCardField = (e) => ({
  type: ActionTypes.UPDATE_FIELD,
  payload: { [e.target.name]: e.target.value },
});

export const toggleField = (e) => {
  e.preventDefault();
  console.log('TOGGLIN', e.target.name);
  return {
    type: ActionTypes.TOGGLE_FIELD,
    payload: [e.target.name],
  };
};

// export const toggleField = (e) => ({
//   type: ActionTypes.UPDATE_FIELD,
//   payload: e.target.name,
// });

// export const createCard = (e, card) => async (dispatch) => {
//   e.preventDefault();
//   console.log('CREATING CARD');
//   let response = await fetch(
//     `${source}/cards/create`,
//     {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       credentials: 'omit',
//       body: JSON.stringify(card),
//     }
//   );
//   response = await response.json();
//   dispatch(cardCreated(response.message));
// };

export const clearCardForm = () => ({
  type: ActionTypes.CARD_CREATED,
});

export const cardCreated = (message) => ({
  type: ActionTypes.CARD_CREATED,
  payload: message,
});

export const questionOrDefinition = (response) => ({
  type: ActionTypes.QUESTION_OR_DEFINITION,
  payload: response,
});

// export const editCard = (card) => ({
//   type: ActionTypes.EDIT_CARD,
//   payload: card,
// });
export const editCard = (e, card) => {
  e.preventDefault();
  return { type: ActionTypes.EDIT_CARD, payload: card };
};
