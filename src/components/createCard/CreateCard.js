import React from 'react';
import Textbox from '../generalAssets/textBoxes/Textbox';
import LargeTextbox from '../generalAssets/textBoxes/LargeTextbox';
import Button from '../generalAssets/buttons/Button';
import CheckBox from '../generalAssets/buttons/CheckBox';

import { connect } from 'react-redux';
import {
  updateCardField,
  createCard,
} from '../../redux/reducers/cards/cardActionCreators';

import './createCard.css';

const CreateCard = (props) => {
  return (
    <div>
      <h1>The Form</h1>
      <form id='create-card-form'>
        <div className='form-box'>
          <Textbox
            field='type'
            required={true}
            state={props.cardReducer}
            dispatch={(e) => props.updateCardField(e)}
          />
          <Textbox
            field='title'
            required={true}
            state={props.cardReducer}
            dispatch={(e) => props.updateCardField(e)}
          />
          <LargeTextbox field='description' required={true} />
          <LargeTextbox field='example' />
          <Textbox
            field='reference'
            state={props.cardReducer}
            dispatch={(e) => props.updateCardField(e)}
          />
          <Textbox
            field='tags'
            state={props.cardReducer}
            dispatch={(e) => props.updateCardField(e)}
          />
          <CheckBox
            checkField='public'
            description='Make this private?'
            reducer='card'
          />
          <Button
            onEnter={(e) => props.createCard(e, props.cardReducer)}
            reducer='card'
          />
        </div>
      </form>
      <h2>{props.cardReducer.message}</h2>
      <ul>
        {Object.values(props.cardReducer).map((value) => {
          return <li>{value.toString()}</li>;
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cardReducer: state.cardReducer,
});

const mapDispatchToProps = {
  updateCardField: (e) => updateCardField(e),
  createCard: (e, card) => createCard(e, card),
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateCard);
