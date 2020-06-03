import React from 'react';

const Card = () => {
  return (
    <div className='signup-login-container'>
      <section className='container'>
        <div className={thing}>
          <div className='front card-div'>
            <h1>Side One</h1>
          </div>
          <div className='back card-div'>
            <h2>Side two</h2>
          </div>
        </div>
      </section>
      <button className='create-button' onClick={this.toggle}>
        <p>toggle</p>
      </button>
    </div>
  );
};

export default Card;
