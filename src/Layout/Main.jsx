import Header from '../Componets/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Componets/Footer/Footer';

const Main = () => {
    return (
        <div className='container mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;