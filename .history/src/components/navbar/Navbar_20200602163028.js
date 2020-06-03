import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

const Navbar = () => {
  return (
    <div>
      <Link className='link' to='/'>
        Home
      </Link>
      <Link className='link' to='/create'>
        Create Card
      </Link>
      <Link className='link' to='/collections'>
        Collections
      </Link>
    </div>
  );
};

export default Navbar;
