import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

function formatDate(date){
    const currentDate = new Date()
    const dateString = currentDate.getDate() + "-" +(currentDate.getMonth() + 1) + "-" + currentDate.getFullYear()
    return dateString
}

const BookDetails = (props) => {
    const { book } = props
    if (book) {
        return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{book.title}</span>
                        <p>{book.description}</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by {book.authorFirstName} {book.authorLastName}</div>
                        <div>{formatDate(book.createdOn)}</div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container center">
                <p>Loading book details...</p>
            </div>
        )
    }
}


const mapStatetoProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    const books = state.firestore.data.books
    const book = books && books[id]
    return {
        book: book
    }
}

export default compose(
    connect(mapStatetoProps),
    firestoreConnect([
        { collection: 'books' }
    ])
)(BookDetails)