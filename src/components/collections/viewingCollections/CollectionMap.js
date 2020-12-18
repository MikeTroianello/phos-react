import React from 'react';
import Collection from './SingleCollection';
import '../collections.css';

const CollectionMap = (props) => {
  return (
    <div className='all-collections'>
      {props.collections.map((collection, i) => {
        return <Collection collection={collection} key={i} />;
      })}
    </div>
  );
};

export default CollectionMap;
