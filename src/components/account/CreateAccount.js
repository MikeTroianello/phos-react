import React from 'react';
import TextBox from '../generalAssets/textBoxes/Textbox';

import { connect } from 'react-redux';
import { updateUserField } from '../../redux/reducers/user/userActionCreators';

const CreateAcount = (props) => {
  return (
    <div>
      <h1>Create an Account</h1>
      <TextBox
        field='username'
        required={true}
        state={props.userReducer}
        dispatch={(e) => props.updateUserField(e)}
      />
      <TextBox
        field='password'
        type='password'
        required={true}
        state={props.userReducer}
        dispatch={(e) => props.updateUserField(e)}
      />
      <TextBox
        field='passwordDouble'
        type='password'
        required={true}
        state={props.userReducer}
        dispatch={(e) => props.updateUserField(e)}
      />
      <TextBox
        field='fullname'
        state={props.userReducer}
        dispatch={(e) => props.updateUserField(e)}
      />
      <TextBox
        field='email'
        type='email'
        state={props.userReducer}
        dispatch={(e) => props.updateUserField(e)}
      />
      <TextBox
        field='phone'
        type='tel'
        state={props.userReducer}
        dispatch={(e) => props.updateUserField(e)}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  userReducer: state.userReducer,
});

const mapDispatchToProps = {
  updateUserField: (e) => updateUserField(e),
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateAcount);
