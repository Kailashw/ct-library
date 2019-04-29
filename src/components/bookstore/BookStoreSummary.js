import React from 'react'

const BookStoreSummary = ({ book }) => {

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
}

export default BookStoreSummary