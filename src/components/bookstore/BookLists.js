import React from 'react'
import BookStoreSummary from './BookStoreSummary';


const BookList = ({books}) => {

    return (
        <div className="project-list section">
        {
            books && books.map(book=> {
                return (<BookStoreSummary book={book} key={book.id}/>)
            })
        }
        </div>
    )
}

export default BookList