import React from 'react';

import './collections.css';

const Collection = (props) => {
  return(
    <div className='collection'>
      <h4>{props.collection.name}</h4>
      <h3>Created by: {props.collection.creatorUsername}{props.collection.userCreated? " YOURS":''}</h3>
      <h5>Tags:</h5>
      <div className="tags">
        {props.collection.tags.map((tag, i) => {
          return <p key={i}>{tag}</p>;
        })}
      </div>
    </div>
  )
}

export default Collection