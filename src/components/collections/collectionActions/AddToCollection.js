import React from 'react';
import CreateCardForm from '../../cards/createCard/CreateCardForm';
import MiniCardMap from '../../cards/viewCards/MiniCardMap';
import Button from '../../generalAssets/buttons/Button';

import { connect } from 'react-redux';

import { saveCardArray } from '../../../redux/reducers/collections/collectionActionCreators';

import '../collections.css';

const AddToCollection = (props) => {
  return (
    <div className='add-card-page'>
      <div>
        <h1>Add Cards to the Collection</h1>
        <CreateCardForm />
      </div>
      <div>
        <h2>Cards to Add:</h2>
        <div className='mini-card-array'>
          <Button
            label='Add to Collection'
            onEnter={(e) =>
              props.saveCardArray(
                e,
                props.collection.temporaryCollection,
                props.user.token,
                props.match.params.collectionId
              )
            }
          />
          <MiniCardMap cardArray={props.collection.temporaryCollection} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  card: state.cardReducer,
  collection: state.collectionReducer,
  user: state.userReducer,
});

const mapDispatchToProps = {
  saveCardArray: (e, cardArray, token, collectionId) =>
    saveCardArray(e, cardArray, token, collectionId),
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToCollection);
