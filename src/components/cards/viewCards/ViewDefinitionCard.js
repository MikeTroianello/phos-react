import React from 'react';

const Card = (props) => {
  return (
    <div>
      <h1>{props.card.frontside}</h1>
      <p>{props.card.backside}</p>
      <p>{props.card.reference}</p>
      <p>{props.card.tags}</p>
    </div>
  );
};

export default Card;
