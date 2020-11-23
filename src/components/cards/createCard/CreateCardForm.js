import React from 'react';
import Button from '../generalAssets/buttons/Button';
import CheckBox from '../generalAssets/buttons/CheckBox';
import FormChanger from './FormChanger';
import CardChoice from './CardChoice';

import { connect } from 'react-redux';
import {
  updateCardField,
  // createCard,
  clearCardForm,
} from '../../redux/reducers/cards/cardActionCreators';
import { addCardToCollection } from '../../redux/reducers/collections/collectionActionCreators';

import './createCard.css';

const addCardAndClearForm = (e, props) => {
  e.preventDefault();
  console.log('ALL DA PROPS', props);
  console.log('THE ID', props.user.id);
  console.log('THE USER', props.user);
  props.addCardToCollection(props.card, props.user.id);
  props.clearCardForm();
};

const CreateCard = (props) => {
  console.log('THE CARD', props);
  return (
    <form id='create-card-form'>
      <div className='form-box'>
        <CardChoice />
        <FormChanger />
        <CheckBox
          checkField='public'
          description='Make this private?'
          reducer='card'
        />
        <Button onEnter={(e) => addCardAndClearForm(e, props)} reducer='card' />
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
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateCard);
