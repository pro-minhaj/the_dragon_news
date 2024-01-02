import Header from '../Componets/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Componets/Footer/Footer';
import { Toaster } from 'react-hot-toast';
const Main = () => {
    return (
        <div className=''>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster />
        </div>
    );
};

export default Main;