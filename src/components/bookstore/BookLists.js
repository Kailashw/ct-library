import React from 'react'
import BookStoreSummary from './BookStoreSummary';
import { Link } from 'react-router-dom'

const BookList = ({ books }) => {

    return (
        <div className="project-list section">
            {
                books && books.map(book => {
                    return (
                        <Link to={`/bookstore/${book.id}`}>
                            <BookStoreSummary book={book} key={book.id} />
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default BookList