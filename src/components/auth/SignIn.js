import React, { Component } from 'react'
import {connect} from 'react-redux'
import {signIn} from '../../store/actions/authActions'
import {Redirect} from 'react-router-dom'

class SignIn extends Component {
  state ={
    email : '',
    password : '',
    redirectToReferrer: false
  }

  handleChange = (e)=>{
      this.setState({[e.target.id] : e.target.value}) 
  }

  handleSubmit = (e) =>{
      e.preventDefault()
      this.props.signIn(this.state)
  }
  
  componentDidUpdate(){
    // if already logged in then redirect.
    const {auth} = this.props
    if(auth.uid){
      this.setState({redirectToReferrer: true})
    }
  }

  render() {
    const {authError} = this.props
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer === true) {
      return <Redirect to={from} />
    }

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3"> Sign In </h5>
            <div className="input-field">
                <label htmlFor="email"> Email</label>
                <input type="email" id="email" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="password"> Password</label>
                <input type="password" id="password" onChange={this.handleChange}/>
            </div>
            <div>
                <button className="btn pink lighten-1 z-depth-0">
                    Login 
                </button>
            </div>
            <div className="red-text center">
                {
                  authError ? <p>{authError} </p> : ''
                }
            </div>
        </form>
        
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
      signIn : (creds) => dispatch(signIn(creds))
  }
}


const mapStateToProps = state => {
  return {
      authError : state.auth.authError,
      auth : state.firebase.auth
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn)