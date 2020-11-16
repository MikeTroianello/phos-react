import React from 'react';
import Textbox from '../generalAssets/textBoxes/Textbox';
import Button from '../generalAssets/buttons/Button';

import { connect } from 'react-redux';
import {
  updateUserField,
  createUser,
  userPreCheck,
  loginPreCheck,
} from '../../redux/reducers/user/userActionCreators';

const Login = (props) => {
  return (
    <div>
      <h1>LOGIN</h1>
      <div>
        <Textbox
          field='username'
          required={true}
          state={props.userReducer}
          dispatch={(e) => props.updateUserField(e)}
        />
        <Textbox
          field='password'
          type='password'
          required={true}
          state={props.userReducer}
          dispatch={(e) => props.updateUserField(e)}
        />
        <Button
          onEnter={(e) => props.loginPreCheck(e, props.userReducer)}
          reducer='user'
        />
      </div>
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
  loginPreCheck: (e, user) => loginPreCheck(e, user),
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
