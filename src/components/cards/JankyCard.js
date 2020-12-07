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
    let thing;
    this.state.signup ? (thing = 'card flipped') : (thing = 'card');

    return (
      <div className='homepage-top'>
        <div className='signup-login-container'>
          <section className='container'>
            <div className={thing}>
              <div className='front card-div'>
                <h1>FRONTSIDE</h1>
              </div>
              <div className='back card-div'>
                <h1>BACKSIDE</h1>
              </div>
            </div>
          </section>
          <button className='create-button' onClick={this.toggle}>
            Flip card
          </button>
        </div>
      </div>
    );
  }
}

export default Card;

// render() {
//   let thing;
//   this.state.signup ? (thing = 'card flipped') : (thing = 'card');
//   return (
//     <div className='signup-login-container'>
//       <section className='container'>
//         <div className={thing}>
//           <div className='front card-div'>FRONTSIDE</div>
//           <div className='back card-div'>BACKSIDE</div>
//         </div>
//       </section>
//       <button className='create-button' onClick={this.toggle}>
//         Flip
//       </button>
//     </div>
//   );
// }
// render() {
//   return (
//     <div class='flip-card'>
//       <div class='flip-card-inner'>
//         <div class='flip-card-front'>
//           <h1>FRONT</h1>
//         </div>
//         <div class='flip-card-back'>
//           <h1>John Doe</h1>
//           <p>Architect & Engineer</p>
//           <p>We love that guy</p>
//         </div>
//       </div>
//     </div>
//   );
// }
