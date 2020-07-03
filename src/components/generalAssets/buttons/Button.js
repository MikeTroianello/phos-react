import React from 'react';

const Button = (props) => {
  return <button onClick={(e) => props.onEnter(e)}>CLICK ME</button>;
};

export default Button;
