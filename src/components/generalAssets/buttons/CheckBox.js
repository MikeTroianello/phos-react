import React from 'react';
import { connect } from 'react-redux';
import { updateCheckBox } from '../../../redux/reducers/cards/cardActionCreators';

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
          value={props.cardReducer.public}
          onChange={props.updateCheckBox}
        />
        <label htmlFor={props.checkField}>{props.description}</label>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cardReducer: state.cardReducer,
});

const mapDispatchToProps = {
  updateCheckBox: (e) => updateCheckBox(e),
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckBox);
