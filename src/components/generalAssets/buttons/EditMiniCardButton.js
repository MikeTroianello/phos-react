import React from 'react';
import { connect } from 'react-redux';
import { editCard } from '../../../redux/reducers/cards/cardActionCreators';
import { removeCardFromTemporaryArray } from '../../../redux/reducers/collections/collectionActionCreators';

//THE CARD INFO WILL BE PASSED IN FROM MiniCardMap

const EditMiniCardButton = (props) => {
  return (
    <button
      onClick={(e) => props.editCard(e, { ...props.card, index: props.index })}
    >
      Edit
    </button>
  );
};

// const mapStateToProps = (state) => ({});

const mapDispatchToProps = { editCard, removeCardFromTemporaryArray };

export default connect(null, mapDispatchToProps)(EditMiniCardButton);
