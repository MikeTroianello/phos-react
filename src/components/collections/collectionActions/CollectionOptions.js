import React from 'react';
import OtherOptions from './OtherOptions.js';
import YourOptions from './YourOptions.js';
import { connect } from 'react-redux';

const CollectionOptions = (props) => {
  return props.user.loggedIn ? (
    <YourOptions collectionId={props.collectionId} />
  ) : (
    <OtherOptions collectionId={props.collectionId} />
  );
};

const mapStateToProps = (state) => ({
  user: state.userReducer,
});

export default connect(mapStateToProps)(CollectionOptions);
