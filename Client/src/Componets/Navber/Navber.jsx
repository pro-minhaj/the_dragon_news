import React, { useContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import userImg from '../../assets/user.png';
import Container from 'react-bootstrap/Container';
import { userContext } from '../../Auth_Context/Auth_Context';
import toast from 'react-hot-toast';

const Navber = () => {
    const { user, logOut } = useContext(userContext);
    const navigate = useNavigate();

    // Toast
    const succuss = (success) => toast.success(success);
    const error = (error) => toast.error(error);

    const handleLogOut = () => {
        logOut()
        .then(() => {
            succuss('Logout SuccessFull!')
            navigate('/login')
        })
        .catch(e => {
            error(e.message)
        })
    }

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
                            user && <img style={{ width: '40px', height : '40px' }} className=' rounded-circle' src={user ? user.photoURL : userImg} alt="" />
                        }
                        <div>
                            {
                                user ? <button onClick={handleLogOut} className='btn btn-danger fw-medium'>LogOut</button> : <Link to='/login' className='bg-dark text-white fs-6 fw-semibold font-family-Poppins m-0 px-3 py-2 btn'>Login</Link>
                            }
                        </div>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navber;