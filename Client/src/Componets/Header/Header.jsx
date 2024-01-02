import Marquee from "react-fast-marquee";
import './Header.css';
import Navber from '../Navber/Navber';
import Header_Top from "../Header_Top/Header_Top";

const Header = () => {
    return (
        <header className='pt-4 pb-4'>
            <Header_Top></Header_Top>
            <div className='bg-light d-flex p-3 rounded gap-4 my-3'>
                <button className='text-white fs-6 fw-medium font-family-Poppins m-0 px-3 py-2 bg-danger btn'>Latest</button>
                <Marquee pauseOnHover={true} speed={100}>
                    <h4 className='text-dark fs-6 fw-semibold font-family-Poppins m-0 px-3 py-2'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</h4>
                </Marquee>
            </div>
            <Navber></Navber>
        </header>
    );
};

export default Header;