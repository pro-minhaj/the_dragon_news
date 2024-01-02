import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.png';
import moment from 'moment';

const Header_Top = () => {
    return (
        <div>
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
        </div>
    );
};

export default Header_Top;