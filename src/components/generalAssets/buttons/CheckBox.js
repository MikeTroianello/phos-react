import React from 'react';
import { connect } from 'react-redux';
import { updateCheckBox } from '../../../redux/reducers/cards/cardActionCreators';

const CheckBox = (props) => {
  console.log(props.cardReducer);
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
      <p>{props.cardReducer.public.toString()}</p>
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
