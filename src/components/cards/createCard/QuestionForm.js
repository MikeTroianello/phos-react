import React from 'react';
import Textbox from '../../generalAssets/textBoxes/Textbox';
import LargeTextbox from '../../generalAssets/textBoxes/LargeTextbox';

import { connect } from 'react-redux';
import { updateCardField } from '../../../redux/reducers/cards/cardActionCreators';

import './createCard.css';

const QuestionForm = (props) => {
  return (
    <div>
      <LargeTextbox field='frontside' required />
      <LargeTextbox field='backside' required />
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
    </div>
  );
};

const mapStateToProps = (state) => ({
  cardReducer: state.cardReducer,
});

const mapDispatchToProps = {
  updateCardField: (e) => updateCardField(e),
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);
