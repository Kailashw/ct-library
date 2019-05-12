import React from 'react'
import {
    Route,
    Redirect
} from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        rest.auth.uid
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/signin',
                state: { from: props.location }
              }} />
        )} />
)


const mapStateToProps = state => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps, null)(PrivateRoute)