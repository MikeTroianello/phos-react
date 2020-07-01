import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='link'>
        <Link to='/'>Home</Link>
      </div>
      <div className='link'>
        <Link to='/create-card'>Create Card</Link>
      </div>
      <div className='link'>
        <Link to='/collections'>Collections</Link>
      </div>
      <div className='link'>
        <Link to='/create-account'>Create Account</Link>
      </div>
    </div>
  );
};

export default Navbar;
