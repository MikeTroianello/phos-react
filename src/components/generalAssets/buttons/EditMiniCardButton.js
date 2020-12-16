import React from 'react';
import { connect } from 'react-redux';
import { editCard } from '../../../redux/reducers/cards/cardActionCreators';
import { removeCardFromTemporaryArray } from '../../../redux/reducers/collections/collectionActionCreators';

//THE CARD INFO WILL BE PASSED IN FROM MiniCardMap

const EditMiniCardButton = (props) => {
  const cardEditing = (e, card, index) => {
    e.preventDefault();
    props.removeCardFromTemporaryArray(index);
    props.editCard(card);
  };
  return (
    <button onClick={(e) => cardEditing(e, props.card, props.index)}>
      Edit
    </button>
  );
};

// const mapStateToProps = (state) => ({});

const mapDispatchToProps = { editCard, removeCardFromTemporaryArray };

export default connect(null, mapDispatchToProps)(EditMiniCardButton);
