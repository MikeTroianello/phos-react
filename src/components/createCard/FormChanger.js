import React from 'react';

import { connect } from 'react-redux';
import {
  updateCardField,
  createCard,
} from '../../redux/reducers/cards/cardActionCreators';

import DefinitionForm from './DefinitionForm'
import QuestionForm from './QuestionForm'

const CreateCard = (props) => props.card.definition ? 


const mapStateToProps = (state) => ({
  card: state.cardReducer,
});

const mapDispatchToProps = {
  updateCardField: (e) => updateCardField(e),
  createCard: (e, card) => createCard(e, card),
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateCard);
