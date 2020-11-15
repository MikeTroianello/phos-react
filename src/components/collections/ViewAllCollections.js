import React, { Component } from 'react';

import './create-collection.css';

class ViewAllCollections extends Component {
  state = {
    collections: [],
  };

  componentDidMount = async () => {
    let collections = await fetch(
      `https://phos-backend.herokuapp.com/collections/all`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'omit',
      }
    );
    collections = await collections.json();
    this.setState({
      collections: collections,
    });
  };
  // componentDidMount = async () => {
  //   let collections = await fetch(`http://localhost:3000/collections/all`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //   collections = await collections.json();
  //   this.setState({
  //     collections: collections,
  //   });
  // };

  render() {
    console.log('COLLLLLLLLLEEECCTIONS', this.state.collections);
    return (
      <div>
        <h1>THIS IS THE COLLECTIONS</h1>
        <div className='all-collections'>
          {this.state.collections.map((collection, i) => {
            return (
              <div key={i} className='collection'>
                <h4>{collection.name}</h4>
                <h5>Tags:</h5>
                {collection.tags.map((tag, i) => {
                  return <p key={i}>{tag}</p>;
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ViewAllCollections;
