import React, { Component } from 'react'
import Notifications from './Notifications'
import BookLists from '../bookstore/BookLists'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class DashBoard extends Component {

    constructor(props) {
        super()
    }

    render() {
        const { books } = this.props
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <BookLists books={books} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.firestore.ordered.books
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'books' }
    ])
)(DashBoard)