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
      <form id='create-card-form'>
        <div className='form-box'>
          
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
