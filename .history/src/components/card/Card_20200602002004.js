import React from 'react';
import './card.css';

const Card = () => {
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
};

export default Card;
