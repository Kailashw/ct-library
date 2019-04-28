import React, { Component } from 'react'

class CreateBookStore extends Component {
  state ={
    title : '',
    description : '',
  }

  handleChange = (e)=>{
      this.setState({[e.target.id] : e.target.value}) 
  }

  handleSubmit = (e) =>{
      e.preventDefault()
      console.log(this.state)
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3"> Sign In </h5>
            <div className="input-field">
                <label htmlFor="title"> Title</label>
                <input type="text" id="title" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="description"> Description</label>
                <textarea id="description" className="materialize-textarea" onChange={this.handleChange}/>
            </div>
            <div>
                <button className="btn pink lighten-1 z-depth-0">
                    Create Book
                </button>
            </div>
        </form>
        
      </div>
    )
  }
}

export default CreateBookStore