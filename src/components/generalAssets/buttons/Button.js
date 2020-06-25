import React from 'react';

const Button = (props) => {
  return <button onClick={(e) => props.sendUp(e)}>CLICK ME</button>;
};

export default Button;
