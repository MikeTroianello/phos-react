import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

const Navbar = () => {
  return (
    <div>
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
    </div>
  );
};

export default Navbar;
