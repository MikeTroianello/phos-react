import React, { Component } from 'react';
import CollectionMap from './CollectionMap';
import { source } from '../../../source';
import { connect } from 'react-redux';

import '../collections.css';

class ViewAllCollections extends Component {
  state = {
    collections: [],
  };

  componentDidMount = async () => {
    let collections = await fetch(`${source}/collections/all`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': this.props.user.token,
      },
      credentials: 'omit',
    });
    collections = await collections.json();
    this.setState({
      collections: collections,
    });
  };

  render() {
    return (
      <div>
        <h1>THIS IS THE COLLECTIONS</h1>
        <CollectionMap collections={this.state.collections} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.userReducer,
});

export default connect(mapStateToProps)(ViewAllCollections);
