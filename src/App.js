import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { localStorageLogin } from './redux/reducers/user/userActionCreators';
import Navbar from './components/navbar/Navbar';
import Routes from './Routes';

import './App.css';

const App = (props) => {
  useEffect(() => {
    props.localStorageLogin();
  });
  return (
    <div>
      <Navbar />
      <Routes />
    </div>
  );
};

const mapDispatchToProps = { localStorageLogin };

export default connect(null, mapDispatchToProps)(App);
