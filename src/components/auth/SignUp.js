import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';

class SignUp extends Component {
  state ={
    email : '',
    password : '',
    firstName : '',
    lastName : ''
  }

  handleChange = (e)=>{
      this.setState({[e.target.id] : e.target.value}) 
  }

  componentDidUpdate(){
    if(this.props.redirect){
      this.props.history.push('/')
    }
  }
  
  handleSubmit = (e) =>{
      e.preventDefault()
      this.props.signUp(this.state)
  }

  render() {
    const { auth, authError} = this.props
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3"> Sign  Up </h5>
            <div className="input-field">
                <label htmlFor="firstName"> First Name</label>
                <input type="text" id="firstName" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="lastName"> Last Name</label>
                <input type="text" id="lastName" onChange={this.handleChange}/>
            </div>
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
                    Sign Up
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
    signUp : (newUser) => dispatch(signUp(newUser))
  }
}


const mapStateToProps = state => {
  return {
      authError : state.auth.authError,
      auth : state.auth.authError,
      redirect : state.auth.redirect
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)
