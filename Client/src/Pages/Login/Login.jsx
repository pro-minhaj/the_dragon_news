import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import Navber from '../../Componets/Navber/Navber';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='bg-light vh-100'>
            <Container>
                <div className='py-4'>
                    <Navber></Navber>
                </div>
                <div id='form-page' className='w-50 mt-5 p-5 mx-auto bg-white shadow rounded'>
                    <h1 className='text-center text-dark fs-2 fw-semibold font-family-Poppins m-0 py-2'>Login your account</h1>
                    <Form className='mt-5'>
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