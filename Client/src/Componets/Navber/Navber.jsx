import React, { useContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import userImg from '../../assets/user.png';
import Container from 'react-bootstrap/Container';
import { userContext } from '../../Auth_Context/Auth_Context';

const Navber = () => {
    const {user} = useContext(userContext);
    
    return (
        <div>
            <Navbar expand="lg" className="">
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse className='justify-content-center' id="navbarScroll">
                        <div></div>
                    <Nav
                        className="my-2 my-lg-0 navActive"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink className={`text-decoration-none text-secondary  fs-6 fw-normal font-family-Poppins m-0 px-3 py-2 ${(isActive, isPending) => isPending ? 'pending' : isActive ? 'active' : ''}`} to="/">Home</NavLink>
                        <NavLink className='text-decoration-none text-secondary fs-6 fw-normal font-family-Poppins m-0 px-3 py-2' to="/about">About</NavLink>
                        <NavLink className='text-decoration-none text-secondary fs-6 fw-normal font-family-Poppins m-0 px-3 py-2' to="/career">Career</NavLink>
                    </Nav>
                    </Navbar.Collapse>
                    <div className='d-flex align-items-center gap-2'>
                        {
                            user && <div className='btn p-0' style={{width : '41px'}}>
                                <img className='w-100' src={userImg} alt="" />
                            </div>
                        }
                        <div>
                            {
                                user ? <button className='btn btn-danger fw-medium'>LogOut</button> : <Link to='/login' className='bg-dark text-white fs-6 fw-semibold font-family-Poppins m-0 px-3 py-2 btn'>Login</Link>
                            }
                        </div>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navber;