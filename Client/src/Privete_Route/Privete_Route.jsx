import React, { useContext, useEffect } from 'react';
import { userContext } from '../Auth_Context/Auth_Context';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const Privete_Route = ({ children }) => {
    const { user, loading } = useContext(userContext);
    const location = useLocation();

    if (loading) {
        return <div className='container mx-auto'>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    }
    if (user) {
        return children;
    }
    return (
        <Navigate state={{ from: location }} to='/login' replace></Navigate>
    );
};

export default Privete_Route;