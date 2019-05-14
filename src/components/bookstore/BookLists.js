import React from 'react'
import BookStoreSummary from './BookStoreSummary';
import { Link } from 'react-router-dom'

const BookList = ({ books }) => {

    return (
        <div className="project-list section">
            {
                books && books.map(book => {
                    return (
                        <div className="col s12 m6">
                        <Link to={`/bookstore/${book.id}`} key={book.id}>
                            <BookStoreSummary book={book}  />
                        </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default BookList