import Button from 'react-bootstrap/Button';
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import qZone1 from '../../assets/qZone1.png';
import qZone2 from '../../assets/qZone2.png';
import qZone3 from '../../assets/qZone3.png';
import './Right_Menu.css';
import { useContext } from 'react';
import { userContext } from '../../Auth_Context/Auth_Context';
import toast from 'react-hot-toast';

const Right_Menu = () => {
    const { googleSingIn } = useContext(userContext);

    // Toast
    const succuss = (success) => toast.success(success);
    const error = (error) => toast.error(error);

    const handleGoogleSingIn = () => {
        const loadings = toast.loading('Loading...');
        () => loadings;
        googleSingIn()
        .then(() => {
            succuss('Login SuccessFull')
            toast.dismiss(loadings)
        })
        .catch(e => {
            error(e.message.substr(10))
            toast.dismiss(loadings)
        })
    }
    return (
        <div className='sticky-top'>
            <div className='p-2'>
                <h2 className='fw-bold mb-4 font-family-Poppins fs-4'>Login With</h2>
                <div className='d-flex flex-column gap-2'>
                    <Button onClick={handleGoogleSingIn} variant="outline-primary d-flex align-items-center gap-2 w-100 justify-content-center">
                        <FaGoogle />
                        Login with Google
                    </Button>
                    <Button variant="outline-secondary d-flex align-items-center gap-2 w-100 justify-content-center">
                        <FaGithub />
                        Login with Github
                    </Button>
                </div>
            </div>
            <div className='py-3'>
                <h2 className='text-dark fs-5 fw-semibold font-family-Poppins m-0 py-2'>Find Us On</h2>
                <ListGroup className='mt-3'>
                    <ListGroup.Item className='text-secondary d-flex align-items-center gap-2 fs-6 fw-medium font-family-Poppins m-0 px-3 py-2 btn'><FaFacebookF className='bg-light text-primary' /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='text-secondary d-flex align-items-center gap-2 fs-6 fw-medium font-family-Poppins m-0 px-3 py-2 btn'><FaTwitter className='bg-light text-info' /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='text-secondary d-flex align-items-center gap-2 fs-6 fw-medium font-family-Poppins m-0 px-3 py-2 btn'><FaInstagram className='bg-light text-danger' /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <div className='bg-light py-2 my-2'>
                <h2 className='text-dark fs-5 fw-semibold font-family-Poppins m-0 px-3 py-2'>Q-Zone</h2>
                <div>
                    <div className='mt-2'>
                        <img className='w-100 btn border-0' src={qZone1} alt="" />
                    </div>
                    <div className='mt-2'>
                        <img className='w-100 btn border-0' src={qZone2} alt="" />
                    </div>
                    <div className='mt-2'>
                        <img className='w-100 btn border-0' src={qZone3} alt="" />
                    </div>
                </div>
            </div>
            <div className='right-menu-bg p-4 my-3'>
                <h1 className='text-center text-white fs-3 fw-bold font-family-Poppins m-0 px-3 py-2'>Create an Amazing Newspaper</h1>
                <p className='text-center text-white my-3 fs-6 fw-normal font-family-Poppins m-0 px-3 py-2'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <div className='text-center py-3'>
                    <button className='text-white fs-6 fw-semibold font-family-Poppins m-0 px-3 py-2 bg-danger btn'>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Right_Menu;