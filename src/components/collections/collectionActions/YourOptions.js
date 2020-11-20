import React from 'react';
import { Link } from 'react-router-dom';

const YourOptions = (props) => {
  return (
    <div className='collection-buttons'>
      <Link to={`/collections/${props.collectionId}/add-cards`}>Add cards</Link>
      <Link to={`/collections/${props.collectionId}/view`}>See the Cards</Link>
    </div>
  );
};

export default YourOptions;
