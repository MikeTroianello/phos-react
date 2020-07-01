import React from 'react';
import TextBox from '../generalAssets/textBoxes/Textbox';

const CreateAcount = () => {
  return (
    <div>
      <h1>Create an Account</h1>
      <TextBox field='username' required={true} reducer='user' />
      <TextBox
        field='password'
        type='password'
        required={true}
        reducer='user'
      />
      <TextBox field='fullname' reducer='user' />
      <TextBox field='email' type='email' reducer='user' />
      <TextBox field='phone' type='tel' reducer='user' />
    </div>
  );
};

export default CreateAcount;
