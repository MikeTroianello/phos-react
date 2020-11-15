import React from 'react';
import { connect } from 'react-redux';
import {source} from '../../source'

const checkLogin = async (token) => {
  console.log('YEET',token)
  let response = await fetch(`${source}/users/checkLogin`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': token
    },
    credentials: 'omit',
  });
  response = await response.json();
  console.log("WHAT IS HAPPENING?", response)
}

const Home = (props) => {
  return (
    <div>
      <h1>THIS IS HOME</h1>
      {/* <h2>{props.cardReducer.type}</h2> */}
      <button onClick={()=>checkLogin(props.userReducer.token)}>Check Login</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log('STATE', state);
  return {
    cardReducer: state.cardReducer,
    userReducer: state.userReducer,
  };
};

export default connect(mapStateToProps)(Home);
