import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import './Left_Menu.css';
import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';
import Frame from '../../assets/Frame.svg';

const Left_Menu = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h2 className="text-dark fs-5 fw-semibold font-family-Poppins m-0 px-3 py-2">All Category</h2>
            <div className="d-flex flex-column gap-3 my-3 ps-4">
                {
                    categories.map(categories => <span key={categories.id}><NavLink className='text-secondary fs-6 fw-medium font-family-Poppins m-0 px-3 py-2 text-decoration-none active' to={`/categories/:${categories.id}`}>{categories.name}</NavLink></span>)
                }
            </div>
            <div className="d-flex flex-column gap-3">
                <div>
                    <img className="w-100" src={img1} alt="" />
                    <h4 className="text-dark fs-6 fw-semibold font-family-Poppins m-0 px-3 py-2">Bayern Slams Authorities Over Flight Delay to Club World Cup</h4>
                    <div className="d-flex align-items-center gap-5">
                        <h6 className="m-0 text-dark fs-6 fw-medium font-family-Poppins m-0 px-3 py-2">Sports</h6>
                        <div className="d-flex">
                            <img src={Frame} alt="" />
                            <span className="text-secondary fs-6 fw-medium font-family-Poppins m-0 px-3 py-2">Jan 4, 2022</span>
                        </div>
                    </div>
                </div>
                <div>
                    <img className="w-100" src={img2} alt="" />
                    <h4 className="text-dark fs-6 fw-semibold font-family-Poppins m-0 px-3 py-2">Bayern Slams Authorities Over Flight Delay to Club World Cup</h4>
                    <div className="d-flex align-items-center gap-5">
                        <h6 className="m-0 text-dark fs-6 fw-medium font-family-Poppins m-0 px-3 py-2">Sports</h6>
                        <div className="d-flex">
                            <img src={Frame} alt="" />
                            <span className="text-secondary fs-6 fw-medium font-family-Poppins m-0 px-3 py-2">Jan 4, 2022</span>
                        </div>
                    </div>
                </div>
                <div>
                    <img className="w-100" src={img3} alt="" />
                    <h4 className="text-dark fs-6 fw-semibold font-family-Poppins m-0 px-3 py-2">Bayern Slams Authorities Over Flight Delay to Club World Cup</h4>
                    <div className="d-flex align-items-center gap-5">
                        <h6 className="m-0 text-dark fs-6 fw-medium font-family-Poppins m-0 px-3 py-2">Sports</h6>
                        <div className="d-flex">
                            <img src={Frame} alt="" />
                            <span className="text-secondary fs-6 fw-medium font-family-Poppins m-0 px-3 py-2">Jan 4, 2022</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Left_Menu;