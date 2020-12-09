import React from 'react';

//PROPS TO ADD
// "name" for targeting reducer [e.target.name]
// "onEnter" for the function
// "label" for what the button says

const Button = (props) => {
  return (
    <button name={props.name} onClick={(e) => props.onEnter(e)}>
      {props.label || 'CLICK ME'}
    </button>
  );
};

export default Button;
