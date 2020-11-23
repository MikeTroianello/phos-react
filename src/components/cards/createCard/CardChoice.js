import React from 'react';
import { connect } from 'react-redux';
import { questionOrDefinition } from '../../../redux/reducers/cards/cardActionCreators';

const CardChoice = (props) => {
  return (
    <div className='card-choice'>
      <div onClick={() => props.questionOrDefinition(true)}>Definition</div>
      <div onClick={() => props.questionOrDefinition(false)}>Question</div>
    </div>
  );
};

const mapDispatchToProps = {
  questionOrDefinition,
};

export default connect(null, mapDispatchToProps)(CardChoice);
