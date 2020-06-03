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
        <Link to='/create'>Create Card</Link>
      </div>
      <div className='link'>
        <Link to='/collections'>Collections</Link>
      </div>
    </div>
  );
};

export default Navbar;
