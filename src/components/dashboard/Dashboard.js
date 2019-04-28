import React, { Component } from 'react'
import Notifications from './Notifications'
import BookLists from '../bookstore/BookLists'

class DashBoard extends Component {

    constructor(props){
        super()
    }

    render(){
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <BookLists/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications/>
                    </div>
                </div> 
            </div>            
            ) 
    }
}

export default DashBoard