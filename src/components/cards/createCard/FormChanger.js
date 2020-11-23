import React from 'react';

import { connect } from 'react-redux';

import DefinitionForm from './DefinitionForm'
import QuestionForm from './QuestionForm'

const CreateCard = (props) => props.card.definition ? <DefinitionForm/> : <QuestionForm/>

const mapStateToProps = (state) => ({
  card: state.cardReducer,
});


export default connect(mapStateToProps)(CreateCard);
