import React from 'react';
import { connect } from 'react-redux';

const Home = (props) => {
  return (
    <div>
      <h1>THIS IS HOME</h1>
      {/* <h2>{props.cardReducer.type}</h2> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cardReducer: state.cardReducer,
});

export default connect(mapStateToProps)(Home);
