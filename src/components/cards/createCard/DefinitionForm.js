import React from 'react';
import Textbox from '../../generalAssets/textBoxes/Textbox';
import LargeTextbox from '../../generalAssets/textBoxes/LargeTextbox';

import { connect } from 'react-redux';
import { updateCardField } from '../../../redux/reducers/cards/cardActionCreators';

import './createCard.css';

const DefinitionForm = (props) => {
  return (
    <div>
      <Textbox
        field='frontside'
        required
        state={props.card}
        dispatch={(e) => props.updateCardField(e)}
      />
      <LargeTextbox field='backside' required />
      {props.card.showExample && <LargeTextbox field='example' />}
      {props.card.showReference && (
        <Textbox
          field='reference'
          state={props.card}
          dispatch={(e) => props.updateCardField(e)}
        />
      )}
      <Textbox
        field='tags'
        state={props.card}
        dispatch={(e) => props.updateCardField(e)}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  card: state.cardReducer,
});

const mapDispatchToProps = {
  updateCardField: (e) => updateCardField(e),
};

export default connect(mapStateToProps, mapDispatchToProps)(DefinitionForm);
