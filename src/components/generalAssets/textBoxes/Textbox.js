import React from 'react';
import { connect } from 'react-redux';
import { updateCardField } from '../../../redux/reducers/cards/cardActionCreators';
import { updateUserField } from '../../../redux/reducers/user/userActionCreators';
import { reducerEval, reducerValue } from '../../../functions/textboxFn';

import '../../createCard/createCard.css';

//  Required props:
//
//  *field* for what the property in the reducer will be for
//  *description* for what the label for the input will be
//  *type* for what type of box this will be
//  *required* if it is necessary
//  *reducer* for which reducer it should be sent to

const Textbox = (props) => {
  return (
    <div className='textbox'>
      <label htmlFor={props.field}>{props.field.toUpperCase()}:</label>
      <input
        type={props.type || 'text'}
        name={props.field}
        placeholder={props.field}
        onChange={(e) => reducerEval(e, props)}
        value={reducerValue(props)}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  cardReducer: state.cardReducer,
  userReducer: state.userReducer,
});

const mapDispatchToProps = {
  updateCardField: (e) => updateCardField(e),
  updateUserField: (e) => updateUserField(e),
};

export default connect(mapStateToProps, mapDispatchToProps)(Textbox);
