import React, {Component} from 'react';
import {connect} from 'react-redux';
import {source} from '../../source';
import CollectionMap from '../collections/CollectionMap'

class Profile extends Component{

  state ={
    user: null,
    collections: []
  }

  componentDidMount=async()=>{
    console.log(this.props.user)
    let user = await fetch(
      `${source}/users/profiles/${this.props.user.username}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': this.props.user.token
        },
        credentials: 'omit',
      }
    );
    user = await user.json();
    console.log(user)
    console.log('HMMMMMMMMM',user.collections)
    this.setState({
      user: user,
      collections: user.collections
    },()=>console.log("THE NEW STATE", this.state));
  }

  render(){
    return(
      <div>
        <h1>Welcome to your Profile</h1>
        <CollectionMap collections={this.state.collections}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.userReducer
})

export default connect(mapStateToProps)(Profile)