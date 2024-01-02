import Header from '../Componets/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Componets/Footer/Footer';

const Main = () => {
    return (
        <div className=''>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;