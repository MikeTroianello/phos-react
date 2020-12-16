import React, { Fragment } from 'react';
import MiniCardDisplay from './MiniCardDisplay';
import EditMiniCardButton from '../../generalAssets/buttons/EditMiniCardButton';
const MiniCardMap = (props) => {
  return (
    <div>
      {props.cardArray.map((card, i) => {
        return (
          <Fragment key={i}>
            <EditMiniCardButton card={card} index={i} />
            <MiniCardDisplay card={card} />
          </Fragment>
        );
      })}
    </div>
  );
};

export default MiniCardMap;
