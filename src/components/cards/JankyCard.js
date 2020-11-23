import React from 'react';
import './card.css';

class Card extends React.Component {
  state = {
    signup: false,
  };

  toggle = () => {
    this.setState((prevState) => ({
      signup: !prevState.signup,
    }));
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
          <div className={thing}>
            <div className='front card-div'>HELLO</div>
            <div className='back card-div'>GOODBYE</div>
          </div>
        </section>
        <button className='create-button' onClick={this.toggle}>
          {toggle}
        </button>
      </div>
    );
  }
}

export default Card;