import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createBookStore } from '../../store/actions/booksStoreActions'

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
      this.props.createBookStore(this.state)
      this.props.history.push('/')
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3"> Add a Book </h5>
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

const mapDispatchToProps = (dispatch)=>{
  return {
    createBookStore :  (book) => dispatch(createBookStore(book))
  }

}

export default connect(null,mapDispatchToProps)(CreateBookStore)
