import React from 'react';

import './card.css';

const MiniCardDisplay = (props) => {
  return (
    <div
      className={`mini-card ${
        props.card.definition ? 'definition' : 'question'
      }`}
    >
      {props.card.frontside}
    </div>
  );
};

export default MiniCardDisplay;
