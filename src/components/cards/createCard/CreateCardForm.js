import React from 'react';
import Button from '../../generalAssets/buttons/Button';
import CheckBox from '../../generalAssets/buttons/CheckBox';
import FormChanger from './FormChanger';
import CardChoice from './CardChoice';

import { connect } from 'react-redux';
import {
  updateCardField,
  toggleField,
  clearCardForm,
  questionOrDefinition,
} from '../../../redux/reducers/cards/cardActionCreators';
import { addCardToCollection } from '../../../redux/reducers/collections/collectionActionCreators';

import './createCard.css';

const addCardAndClearForm = (e, props) => {
  e.preventDefault();
  props.addCardToCollection(props.card, props.user.id);
  // props.clearCardForm();
};

const CreateCard = (props) => {
  return (
    <form id='create-card-form'>
      <div
        className={`form-box ${
          props.card.definition ? 'definition-card' : 'question-card'
        }`}
      >
        <CardChoice />
        <FormChanger />
        <CheckBox
          checkField='public'
          description='Make this private?'
          reducer='card'
        />
        <div className='button-box'>
          <div className='extra-fields'>
            <Button
              onEnter={(e) => props.toggleField(e)}
              reducer='card'
              name='showExample'
              label={props.card.showExample ? 'No Example' : 'Add Example'}
            />
            <Button
              onEnter={(e) => props.toggleField(e)}
              reducer='card'
              name='showReference'
              label={
                props.card.showReference ? 'No Reference' : 'Add Reference'
              }
            />
          </div>
          <Button
            onEnter={(e) => addCardAndClearForm(e, props)}
            reducer='card'
            label='Create Card'
          />
        </div>
      </div>
      <h2>{props.card.message}</h2>
    </form>
  );
};

const mapStateToProps = (state) => ({
  card: state.cardReducer,
  user: state.userReducer,
});

const mapDispatchToProps = {
  updateCardField: (e) => updateCardField(e),
  // createCard: (e, card) => createCard(e, card),
  clearCardForm,
  addCardToCollection: (card, id) => addCardToCollection(card, id),
  toggleField,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateCard);
