import React from 'react';

const Card = () => {
  return (
    <div className='signup-login-container'>
      <section className='container'>
        <div className={thing}>
          <div className='front card-div'>
            {' '}
            <Login logIt={this.logIt} />
          </div>
          <div className='back card-div'>
            <Signup logIt={this.logIt} />
          </div>
        </div>
      </section>
      <button className='create-button' onClick={this.toggle}>
        {toggle}
      </button>
    </div>
  );
};

export default Card;
