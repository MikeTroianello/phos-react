import React from 'react';
import Textbox from '../generalAssets/textBoxes/Textbox';
import LargeTextbox from '../generalAssets/textBoxes/LargeTextbox';
import Button from '../generalAssets/buttons/Button';
import CheckBox from '../generalAssets/buttons/CheckBox';

import { connect } from 'react-redux';
import { createCard } from '../../redux/reducers/cards/cardActionCreators';

import './createCard.css';

const CreateCard = (props) => {
  console.log('THE CARD REDUCER FOR CREATE CARD', props.cardReducer);
  return (
    <div>
      <h1>The Form</h1>
      <form id='create-card-form'>
        <div className='form-box'>
          <Textbox field='type' required={true} />
          <Textbox field='title' required={true} />
          <LargeTextbox field='description' required={true} />
          <LargeTextbox field='example' />
          <Textbox field='reference' />
          <Textbox field='tags' />
          <CheckBox checkField='public' description='Make this private?' />
          <Button sendUp={(e) => props.createCard(e, props.cardReducer)} />
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cardReducer: state.cardReducer,
});

const mapDispatchToProps = {
  createCard: (e, card) => createCard(e, card),
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateCard);
