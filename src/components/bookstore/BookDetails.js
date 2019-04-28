import React from 'react'

function BookDetails(props) {
    const id = props.match.params.id
    return (
        <div className="container section project-details">
            <div className="card z-depth-0" >
                <div className="card-content" >
                    <span className="card-title"> Book Details - {id} </span>
                    <p> Lorem ipsum dolor sit amet constecteur apdiscipling idit. Lorem ipsum dolor sit amet constecteur apdiscipling idit. </p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div> Posted By Kailas Walldoddi</div>
                    <div> 2nd September 2019 </div>
                </div>
            </div>
        </div>
    )
}

export default BookDetails
