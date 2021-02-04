import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

const LoggedOutNavbar = () => {
  return (
    <div className="navbar-container">
      <div className="subcontainer-one">
        <div className="link">
          <Link to="/login">Not Logged In</Link>
        </div>
      </div>
      <input type="search" placeholder="Search Phos" name="search" />
      <div className="subcontainer-two">
        <div className="link">
          <Link to="/">Home</Link>
        </div>
        <div className="link">
          <Link to="/collections/all">Collections</Link>
        </div>
        <div className="link">
          <Link to="/create-account">Create Account</Link>
        </div>
        <div className="link">
          <Link to="/login">Log In</Link>
        </div>
      </div>
    </div>
  );
};

export default LoggedOutNavbar;
