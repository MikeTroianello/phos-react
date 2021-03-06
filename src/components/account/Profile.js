import React, { Component } from 'react';
import { connect } from 'react-redux';
import { source } from '../../source';
import CollectionMap from '../collections/viewingCollections/CollectionMap';

class Profile extends Component {
  state = {
    user: null,
    collections: [],
    id: null,
  };

  componentDidMount = async () => {
    let user = await fetch(
      `${source}/users/profiles/${this.props.user.username}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': this.props.user.token,
        },
        credentials: 'omit',
      }
    );
    user = await user.json();

    this.setState({
      user: user,
      collections: user.collections,
      id: user.id,
    });
  };

  render() {
    return (
      <div>
        <h1>Welcome to your Profile</h1>
        <CollectionMap
          collections={this.state.collections}
          id={this.state.id}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.userReducer,
});

export default connect(mapStateToProps)(Profile);
