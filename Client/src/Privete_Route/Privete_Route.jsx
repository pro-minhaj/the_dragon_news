import React, { useContext, useEffect } from 'react';
import { userContext } from '../Auth_Context/Auth_Context';
import { Navigate} from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const Privete_Route = ({ children }) => {
    const { user, loading } = useContext(userContext);

    if (loading) {
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    }
    if (user) {
        return children;
    }
    return (
        <Navigate to='/login' replace={true}></Navigate>
    );
};

export default Privete_Route;