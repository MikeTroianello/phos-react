import React from 'react';
import TextBox from '../generalAssets/textBoxes/Textbox';
import Button from '../generalAssets/buttons/Button';
import CheckBox from '../generalAssets/buttons/CheckBox';

const CreateCollection = () => {
  return (
    <div>
      <h1>Create a Collection!</h1>
      <TextBox />
      <CheckBox />
      <Button onEnter={() => console.log('clicked')} />
    </div>
  );
};

export default CreateCollection;
