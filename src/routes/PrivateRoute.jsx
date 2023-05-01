import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <Spinner animation="border" variant="primary" />
    }


    if(user){
        return children
    }

    
    return <Navigate to='/login' state={{from: location}} replace/>
};

export default PrivateRoute;


/* *           STEPS
 * *------------------------
 * * Check user us logged in or not
 * * IF user is logged in , then allow them to visit the route
 * * Else redirect the user to login page
 * * Setup the private router
 * *
 * */ 