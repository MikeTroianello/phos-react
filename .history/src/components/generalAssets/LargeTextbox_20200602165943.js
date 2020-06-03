import React from 'react';
import connect from 'react-redux';

const LargeTextbox = (props) => {
  return <input type='text' name={props.name}></input>;
};

export default connect()(LargeTextbox);
