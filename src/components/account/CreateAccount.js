import React from 'react';
import TextBox from '../generalAssets/textBoxes/Textbox';
import Button from '../generalAssets/buttons/Button';

import { connect } from 'react-redux';
import {
  updateUserField,
  createUser,
  userPreCheck,
} from '../../redux/reducers/user/userActionCreators';

const CreateAcount = (props) => {
  return (
    <div>
      <h1>Create an Account</h1>
      <div>
        <TextBox
          field='username'
          required
          state={props.userReducer}
          dispatch={(e) => props.updateUserField(e)}
        />
        <TextBox
          field='password'
          type='password'
          required
          state={props.userReducer}
          dispatch={(e) => props.updateUserField(e)}
        />
        <TextBox
          field='passwordDouble'
          type='password'
          required
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
      <Button
        onEnter={(e) => props.userPreCheck(e, props.userReducer)}
        reducer='user'
      />
      <h1>{props.userReducer.message}</h1>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userReducer: state.userReducer,
});

const mapDispatchToProps = {
  updateUserField: (e) => updateUserField(e),
  createUser: (e, user) => createUser(e, user),
  userPreCheck: (e, user) => userPreCheck(e, user),
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateAcount);
