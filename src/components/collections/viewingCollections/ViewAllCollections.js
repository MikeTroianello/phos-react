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
    console.log(this.props.user);
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

  // render() {
  //   console.log('COLLLLLLLLLEEECCTIONS', this.state.collections);
  //   return (
  //     <div>
  //       <h1>THIS IS THE COLLECTIONS</h1>
  //       <div className='all-collections'>
  //         {this.state.collections.map((collection, i) => {
  //           console.log(collection.userCreated)
  //           return (
  //             <div key={i} className='collection'>
  //               <h4>{collection.name}</h4>
  //               <h3>Created by: {collection.creatorUsername}{collection.userCreated? " YOURS":''}</h3>
  //               <h5>Tags:</h5>
  //               <div className="tags">
  //                 {collection.tags.map((tag, i) => {
  //                   return <p key={i}>{tag}</p>;
  //                 })}
  //               </div>
  //             </div>
  //           );
  //         })}
  //       </div>
  //     </div>
  //   );
  // }
  render() {
    console.log('PRRROOOOOOOOOOPPPPPPPPS', this.props);
    console.log('COLLLLLLLLLEEECCTIONS', this.state.collections);
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
