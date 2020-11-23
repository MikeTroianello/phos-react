import React from 'react';
import CollectionOptions from './collectionActions/CollectionOptions';

import './collections.css';

//THERE MAY BE AN ISSUE HERE WITH PROPS.COLECTION._ID

const Collection = (props) => {
  console.log('THE UNDERSCORE', props.collection._id);
  console.log('NO UNDERSCORE', props.collection.id);
  return (
    <div className='collection'>
      <h4>{props.collection.name}</h4>
      <h3>
        Created by: {props.collection.creatorUsername}
        {props.collection.userCreated ? ' YOURS' : ''}
      </h3>
      <h5>Tags:</h5>
      <div className='tags'>
        {props.collection.tags.map((tag, i) => {
          return <p key={i}>{tag}</p>;
        })}
      </div>
      <CollectionOptions
        userCreated={props.collection.userCreated}
        collectionId={props.collection._id}
      />
    </div>
  );
};

export default Collection;
