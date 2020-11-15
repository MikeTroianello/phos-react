import React from 'react';
import {connect} from 'react-redux'
import LoggedInNavbar from './LoggedInNavbar'
import LoggedOutNavbar from './LoggedOutNavbar'

import './navbar.css';

// const Navbar = (props) => {
//   if(props.user.loggedIn)return<LoggedInNavbar/>
//   else return <LoggedOutNavbar/>
// };

const Navbar = (props) => props.user.loggedIn ? <LoggedInNavbar/> : <LoggedOutNavbar/>

const mapStateToProps = state => ({
  user: state.userReducer
})

export default connect(mapStateToProps)(Navbar);
