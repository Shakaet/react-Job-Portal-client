import React, { useContext } from 'react';
import { AuthContext } from '../AuthProviver';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    let {user,loading}= useContext(AuthContext)
    const location = useLocation();

    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }


    if(user){
        return children
    }
    return (
        <div>
            <Navigate to="/login"  state={{ from: location }}></Navigate>
        </div>
    );
};

export default PrivateRoute;