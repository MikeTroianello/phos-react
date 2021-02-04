import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./navbar.css";

const LoggedInNavbar = (props) => {
  return (
    <div className="navbar-container">
      <div className="subcontainer-one">
        <div className="link">
          <Link to={`/profile/${props.user.username}`}>
            {props.user.username}
          </Link>
        </div>
      </div>
      <div>
        <input type="search" placeholder="Search Phos" name="search" />
      </div>
      <div className="subcontainer-two">
        <div className="link">
          <Link to="/create-card">Create Card</Link>
        </div>
        <div className="link">
          <Link to="/collections/all">Collections</Link>
        </div>
        <div className="link">
          <Link to="/create-collection">Create Collection</Link>
        </div>
        <div className="link">
          <Link to="/logout">Log Out</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.userReducer,
});

export default connect(mapStateToProps)(LoggedInNavbar);
