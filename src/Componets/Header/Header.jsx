import logo from '../../assets/logo.png';
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import user from '../../assets/user.png';

const Header = () => {
    return (
        <header className='pt-4 pb-5'>
            <div className='text-center'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <p className="text-secondary fs-6 fw-normal font-family-Poppins  m-0 px-3 py-2">Journalism Without Fear or Favour</p>
                <div className='m-0 px-3 py-2 text-secondary fs-6 fw-medium font-family-Poppins'>
                    {
                        moment().format("dddd, MMMM D YYYY")
                    }
                </div>
            </div>
            <div className='bg-light d-flex p-3 rounded gap-4 my-4'>
                <button className='text-white fs-6 fw-medium font-family-Poppins m-0 px-3 py-2 bg-danger btn'>Latest</button>
                <Marquee pauseOnHover={true} speed={100}>
                    <h4 className='text-dark fs-6 fw-semibold font-family-Poppins m-0 px-3 py-2'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</h4>
                </Marquee>
            </div>
            <nav className='d-flex align-items-center justify-content-between'>
                <div></div>
                <ul className='d-flex ps-0 m-0'>
                    <li className='list-group-item'><Link className='text-decoration-none text-secondary fs-6 fw-normal font-family-Poppins m-0 px-3 py-2' to="/">Home</Link></li>
                    <li className='list-group-item'><Link className='text-decoration-none text-secondary fs-6 fw-normal font-family-Poppins m-0 px-3 py-2' to="/about">About</Link></li>
                    <li className='list-group-item'><Link className='text-decoration-none text-secondary fs-6 fw-normal font-family-Poppins m-0 px-3 py-2' to="/career">Career</Link></li>
                </ul>
                <div className='d-flex align-items-center gap-2'>
                    <div className='btn p-0' style={{width : '41px'}}>
                        <img className='w-100' src={user} alt="" />
                    </div>
                    <div>
                        <button className='bg-dark text-white fs-6 fw-semibold font-family-Poppins m-0 px-3 py-2 btn'>Login</button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;