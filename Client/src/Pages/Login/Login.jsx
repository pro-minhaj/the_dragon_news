import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import Navber from '../../Componets/Navber/Navber';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import { userContext } from '../../Auth_Context/Auth_Context';
import toast from 'react-hot-toast';

const Login = () => {
    const {singIn} = useContext(userContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    // Toast
    const succuss = (success) => toast.success(success);
    const error = (error) => toast.error(error);

    const handleLogin = event => {
        const loadings = toast.loading('Loading...');
        () => loadings;
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        singIn(email, password)
        .then(() => {
            navigate(from)
            succuss('LogIn SuccessFull')
            toast.dismiss(loadings)
        })
        .catch(e => {
            error(e.message)
            toast.dismiss(loadings)
        })
    }
    return (
        <div className='bg-light vh-100'>
            <Container>
                <div className='py-4'>
                    <Navber></Navber>
                </div>
                <div id='form-page' className='w-50 mt-5 p-5 mx-auto bg-white shadow rounded'>
                    <h1 className='text-center text-dark fs-2 fw-semibold font-family-Poppins m-0 py-2'>Login your account</h1>
                    <Form onSubmit={handleLogin} className='mt-5'>
                        <div className='border-bottom mb-5'></div>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='text-dark fs-6 fw-semibold font-family-Poppins m-0 py-2'>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className='text-dark fs-6 fw-semibold font-family-Poppins m-0 py-2'>Password</Form.Label>
                            <Form.Control type="password" name='password' placeholder="Password" required />
                        </Form.Group>
                        <Button variant="dark w-100 mb-4 mt-3" type="submit">
                            Login
                        </Button>
                        <p className='text-center m-0 px-3 py-2'>Dont’t Have An Account ? <Link className='text-decoration-none text-danger' to="/register">Register</Link></p>
                    </Form>
                </div>
            </Container>
        </div>
    );
};

export default Login;