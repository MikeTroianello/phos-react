import React from 'react';
import TextBox from '../generalAssets/textBoxes/Textbox';
import Button from '../generalAssets/buttons/Button';
import CheckBox from '../generalAssets/buttons/CheckBox';

import { connect } from 'react-redux';
import {
  updateCollectionField,
  createCollection,
} from '../../redux/reducers/collections/collectionActionCreators';

import './collections.css';

const CreateCollection = (props) => {
  console.log('MESSAGE!!', props.collectionReducer);
  return (
    <div>
      <div>
        <h1>Create a Collection!</h1>
        <TextBox
          field='name'
          required={true}
          state={props.collectionReducer}
          dispatch={(e) => props.updateCollectionField(e)}
        />
        <TextBox
          field='tags'
          required={true}
          state={props.collectionReducer}
          dispatch={(e) => props.updateCollectionField(e)}
        />
        <CheckBox
          reducer='collection'
          checkField='private'
          description='Make this private?'
        />
        <Button
          onEnter={(e) => props.createCollection(e, props.collectionReducer, props.user.token)}
        />
      </div>
      <h1>{props.collectionReducer.message}</h1>
    </div>
  );
};

const mapStateToProps = (state) => ({
  collectionReducer: state.collectionReducer,
  user: state.userReducer
});

const mapDispatchToProps = {
  updateCollectionField: (e) => updateCollectionField(e),
  createCollection: (e, collection, token) => createCollection(e, collection, token),
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateCollection);

// name: {
//   type: String,
// },
// cards: [{ type: Schema.Types.ObjectId, ref: 'Card' }],
// tags: {
//   type: Array,
// },
// public: {
//   type: Boolean,
//   default: false,
// },

// field='title'
// required={true}
// state={props.cardReducer}
// dispatch={(e) => props.updateCardField(e)}
