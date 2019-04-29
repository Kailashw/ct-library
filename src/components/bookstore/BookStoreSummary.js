import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import {compose} from 'redux'

const BookStoreSummary = ( props ) => {
    const { book } = props
    if(book){
        return (
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">
                        {book.title}
                    </span>
                    <p> {book.description}</p>
                    <p className="grey-text"> 3rd May 2019 </p>
                </div>
            </div>
        )
    }else{
        return (
            <div className="container center">
                <p>Loading book details...</p>
            </div>
        )
    }
}


const mapStatetoProps = (state, ownProps )=> {
    const id = ownProps.book.id
    const books = state.firestore.data.books 
    const book = books && books[id]
    return {
        book : book
    }
}

export default compose(
    connect(mapStatetoProps),
    firestoreConnect([
        { collection : 'books'}
    ])
    )(BookStoreSummary)