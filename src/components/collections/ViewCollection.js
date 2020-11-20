import React, { Component } from 'react';
import { source } from '../../source';
import CardMap from '../card/CardMap';

class ViewCollection extends Component {
  state = {
    cardArray: [],
  };

  componentDidMount = async () => {
    let results = await fetch(
      `${source}/collections/${this.props.match.params.collectionId}/view`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'omit',
      }
    );
    results = await results.json();
    console.log('DA results', results);
    this.setState({
      cardArray: results.cards,
    });
  };

  render() {
    return (
      <div>
        <h1>This Collections' Cards:</h1>
        <CardMap cardArray={this.state.cardArray} />
      </div>
    );
  }
}

export default ViewCollection;
