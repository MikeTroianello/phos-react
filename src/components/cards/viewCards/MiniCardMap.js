import React from 'react';
import MiniCardDisplay from './MiniCardDisplay';
import EditMiniCardButton from '../../generalAssets/buttons/EditMiniCardButton';

import '../card.css';

const MiniCardMap = (props) => {
  return (
    <div>
      {props.cardArray.map((card, i) => {
        return (
          <div className='card-map-box' key={i}>
            <EditMiniCardButton card={card} index={i} />
            <MiniCardDisplay card={card} />
          </div>
        );
      })}
    </div>
  );
};

export default MiniCardMap;
