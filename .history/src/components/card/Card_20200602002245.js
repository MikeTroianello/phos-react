import React from 'react';
import './card.css';

class Card extends React.Component {
  state = {
    signup: false,
  };
  render() {
    let toggle;
    let thing;
    this.state.signup
      ? (toggle = 'Go back to Login')
      : (toggle = 'or, Create an Account Now!');
    this.state.signup ? (thing = 'card flipped') : (thing = 'card');
    return (
      <div className='signup-login-container'>
        <section className='container'>
          <div className='thing'>
            <div className='front card-div'>
              <h1>Side One</h1>
            </div>
            <div className='back card-div'>
              <h2>Side two</h2>
            </div>
          </div>
        </section>
        <button className='create-button'>
          <p>toggle</p>
        </button>
      </div>
    );
  }
}

export default Card;
