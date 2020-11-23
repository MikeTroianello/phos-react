import React from 'react';
import MiniCardDisplay from './MiniCardDisplay';

const MiniCardMap = (props) => {
  return (
    <div>
      {props.cardArray.map((card, i) => {
        return <MiniCardDisplay card={card} key={i} />;
      })}
    </div>
  );
};

export default MiniCardMap;
