import logo from '../../assets/logo.png';
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { NavLink } from 'react-router-dom';
import user from '../../assets/user.png';
import './Header.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Header = () => {
    return (
        <header className='pt-4 pb-4'>
            <div className='text-center'>
                <div className='px-2 mx-auto logo'>
                    <Navbar.Brand href="/"><img className='w-100' src={logo} alt="" /></Navbar.Brand>
                </div>
                <p className="text-secondary fs-6 fw-normal font-family-Poppins  m-0 px-3 py-2">Journalism Without Fear or Favour</p>
                <div className='m-0 px-3 py-2 text-secondary fs-6 fw-medium font-family-Poppins'>
                    {
                        moment().format("dddd, MMMM D YYYY")
                    }
                </div>
            </div>
            <div className='bg-light d-flex p-3 rounded gap-4 my-3'>
                <button className='text-white fs-6 fw-medium font-family-Poppins m-0 px-3 py-2 bg-danger btn'>Latest</button>
                <Marquee pauseOnHover={true} speed={100}>
                    <h4 className='text-dark fs-6 fw-semibold font-family-Poppins m-0 px-3 py-2'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</h4>
                </Marquee>
            </div>
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
                        <div className='btn p-0' style={{width : '41px'}}>
                            <img className='w-100' src={user} alt="" />
                        </div>
                        <div>
                            <button className='bg-dark text-white fs-6 fw-semibold font-family-Poppins m-0 px-3 py-2 btn'>Login</button>
                        </div>
                    </div>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;