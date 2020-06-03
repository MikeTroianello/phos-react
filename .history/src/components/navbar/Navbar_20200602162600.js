import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

const Navbar = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/create'>Create Card</Link>
      <Link to='/collections'>Collections</Link>
    </div>
  );
};

export default Navbar;
