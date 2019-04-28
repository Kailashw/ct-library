import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li> <NavLink to="/create"> Bookstore </NavLink> </li>
            <li> <NavLink to="/signout"> Logout</NavLink> </li>
            <li> <NavLink to="/profile" className="btn btn-floating pink lighten-1"> KW </NavLink> </li>
        </ul>
    )
}

export default SignedInLinks