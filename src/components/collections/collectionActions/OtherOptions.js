import React from 'react';
import { Link } from 'react-router-dom';

const OtherOptions = (props) => {
  return (
    <div className='collection-buttons'>
      <Link to={`/collections/${props.collectionId}/view`}>See the Cards</Link>
    </div>
  );
};

export default OtherOptions;
