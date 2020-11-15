import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import { logout } from '../../redux/reducers/user/userActionCreators'
import {source} from '../../source'

// const Logout = async (props) => {
//   if(props.user.loggedIn){
//   return(
//     <div>
//       <h1>Logging out...</h1>
//     </div>
//   )}else{
//     return <Redirect to='/'/>
//   }
// }

class Logout extends React.Component{
  async componentDidMount(){
    await fetch(`${source}/users/logout`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'omit',
      });
   this.props.logout()
   this.props.history.push('/');
  }
  render(){
      return(
        <div>
          <h1>Logging out...</h1>
        </div>
      )
  }
}

const mapStateToProps = state => ({
  user: state.userReducer
})

const mapDispatchToProps = {
  logout: ()=>logout()
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout)