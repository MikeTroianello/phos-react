import React from 'react';
import { connect } from 'react-redux';
import { toggleField } from '../../../redux/reducers/cards/cardActionCreators';

//  PROPS
//  checkField for the property in the reducer
//  VALUE NEEDS TO BE UPDATED FOR A SPECIFIC REDUCER
//  ONCHANGE NEEDS TO BE UPDATED FOR A SPECIFIC REDUCER
//  description for what the label next to the checkbox will be

const CheckBox = (props) => {
  return (
    <div className='textbox'>
      <div>
        <input
          type='checkbox'
          name={props.checkField}
          value={true}
          onChange={props.toggleField}
        />
        <label htmlFor={props.checkField}>{props.description}</label>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cardReducer: state.cardReducer,
  collectionReducer: state.collectionReducer,
});

const mapDispatchToProps = {
  toggleField: (e) => toggleField(e),
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckBox);
