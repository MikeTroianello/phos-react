import React from 'react';
import { connect } from 'react-redux';
import { updateField } from '../../../redux/reducers/cards/cardActionCreators';

import '../../createCard/createCard.css';

const LargeTextbox = (props) => {
  return (
    <div className='textbox'>
      <label htmlFor={props.field}>{props.field.toUpperCase()}:</label>
      <textarea
        type='text'
        name={props.field}
        placeholder={props.field}
        rows={4}
        onChange={props.updateField}
        value={props.cardReducer[props.field]}
      ></textarea>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cardReducer: state.cardReducer,
});

const mapDispatchToProps = {
  updateField: (e) => updateField(e),
};

export default connect(mapStateToProps, mapDispatchToProps)(LargeTextbox);
