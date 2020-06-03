import React from 'react';
import Textbox from '../generalAssets/Textbox';
import LargeTextbox from '../generalAssets/LargeTextbox';

import { connect } from 'react-redux';

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
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cardReducer: state.cardReducer,
});

export default connect(mapStateToProps)(CreateCard);
