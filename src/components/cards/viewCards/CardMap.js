import React from 'react';
import DefinitionCard from './ViewDefinitionCard';
import QuestionCard from './ViewQuestionCard';

const CardMap = (props) => {
  return (
    <div>
      {props.cardArray.map((card, i) => {
        return card.definition ? (
          <DefinitionCard card={card} key={i} />
        ) : (
          <QuestionCard card={card} key={i} />
        );
      })}
    </div>
  );
};

export default CardMap;
