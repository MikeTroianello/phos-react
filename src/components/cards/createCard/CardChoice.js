import React from 'react';
import { connect } from 'react-redux';
import { questionOrDefinition } from '../../../redux/reducers/cards/cardActionCreators';

const CardChoice = (props) => {
  return (
    <div className='card-choice'>
      <div
        className={props.card.definition ? 'chosen' : ''}
        onClick={() => props.questionOrDefinition(true)}
      >
        Definition
      </div>
      <div
        className={props.card.definition ? '' : 'chosen'}
        onClick={() => props.questionOrDefinition(false)}
      >
        Question
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  card: state.cardReducer,
});

const mapDispatchToProps = {
  questionOrDefinition,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardChoice);
