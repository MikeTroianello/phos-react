import React from 'react';
import { connect } from 'react-redux';
import { updateCardField } from '../../../redux/reducers/cards/cardActionCreators';

import '../../cards/createCard/createCard.css';

const LargeTextbox = (props) => {
  return (
    <div className='textbox'>
      <label htmlFor={props.field}>{props.field.toUpperCase()}:</label>
      <textarea
        type='text'
        name={props.field}
        placeholder={props.field}
        rows={4}
        onChange={props.updateCardField}
        value={props.cardReducer[props.field]}
      ></textarea>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cardReducer: state.cardReducer,
});

const mapDispatchToProps = {
  updateCardField: (e) => updateCardField(e),
};

export default connect(mapStateToProps, mapDispatchToProps)(LargeTextbox);
