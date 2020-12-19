import React from 'react';
import '../card.css';

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
    let cardClass;
    this.state.signup ? (cardClass = 'card flipped') : (cardClass = 'card');

    return (
      <div className='signup-login-container' onClick={this.toggle}>
        <section className='container'>
          <div className={cardClass}>
            <div className='front card-div'>
              <p>Definition</p>
              <h1 className='card-frontside-definition'>
                {this.props.card.frontside}
              </h1>
              <p className='flip-instructions'>Click to reveal definition</p>
            </div>
            <div className='back card-div'>
              <h1>{this.props.card.backside}</h1>
              <p>{this.props.card.example}</p>
              <div>
                {this.props.card.reference && (
                  <a
                    href={`${this.props.card.reference}`}
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    link
                  </a>
                )}
                <p>{this.props.card.tags}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Card;
