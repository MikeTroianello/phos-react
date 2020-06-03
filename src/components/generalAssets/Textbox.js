import React from 'react';
import { connect } from 'react-redux';
import { updateField } from '../../redux/reducers/cards/cardActionCreators';

import '../createCard/createCard.css';

const Textbox = (props) => {
  return (
    <div className='textbox'>
      <label htmlFor={props.field}>{props.field.toUpperCase()}:</label>
      <input
        type='text'
        name={props.field}
        placeholder={props.field}
        onChange={props.updateField}
        value={props.cardReducer[props.field]}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  cardReducer: state.cardReducer,
});

const mapDispatchToProps = {
  updateField: (e) => updateField(e),
};

export default connect(mapStateToProps, mapDispatchToProps)(Textbox);
