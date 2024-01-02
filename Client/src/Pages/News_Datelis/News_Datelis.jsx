import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Right_Menu from '../../Componets/Right_Menu/Right_Menu';
import { FaArrowLeft } from "react-icons/fa6";
import editorsInsight1 from '../../assets/editorsInsight1.png';
import editorsInsight2 from '../../assets/editorsInsight2.png';
import editorsInsight3 from '../../assets/editorsInsight3.png';
import { CiCalendar } from "react-icons/ci";

const News_Datelis = () => {
    const news = useLoaderData();
    const {title, image_url, details} = news;

    return (
        <div>
            <h2 className='text-dark fs-6 fw-semibold font-family-Poppins m-0 py-2'>Dragon News</h2>
            <Row className='g-4 mt-0'>
                <Col md={9}>
                    <div className='bg-white rounded-1 border border-1 p-4'>
                        <div>
                            <img className='img-fluid' src={image_url} alt="" />
                        </div>
                        <h2 className='<p class="text-dark fs-4 fw-bold font-family-Poppins m-0 py-3'>{title}</h2>
                        <div className='mb-3'>
                            <p className='text-secondary fs-6 fw-normal font-family-Poppins m-0 py-2'>{details}</p>
                        </div>
                        <Link to={'/'} className='text-decoration-none text-white bg-danger btn px-3'>
                            <FaArrowLeft className='text-white me-2' />
                            All news in this category
                        </Link>
                    </div>
                    <div className='my-5'>
                        <h2 >Editors Insight</h2>
                        <Row className='g-4 mt-2'>
                            <Col md={4}>
                                <div>
                                    <img className='img-fluid' src={editorsInsight1} alt="" />
                                </div>
                                <h2 className='text-dark fs-6 fw-semibold font-family-Poppins m-0 py-2'>
                                    21 The Most Stylish Wedding Guest Dresses For Spring
                                </h2>
                                <div className='d-flex align-items-center gap-3'>
                                    <CiCalendar className='text-secondary fs-5' />
                                    <p className='text-secondary fs-6 fw-medium font-family-Poppins m-0 py-2'>Jan 4, 2022</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div>
                                    <img className='img-fluid' src={editorsInsight2} alt="" />
                                </div>
                                <h2 className='text-dark fs-6 fw-semibold font-family-Poppins m-0 py-2'>
                                    21 The Most Stylish Wedding Guest Dresses For Spring
                                </h2>
                                <div className='d-flex align-items-center gap-3'>
                                    <CiCalendar className='text-secondary fs-5' />
                                    <p className='text-secondary fs-6 fw-medium font-family-Poppins m-0 py-2'>Jan 4, 2022</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div>
                                    <img className='img-fluid' src={editorsInsight3} alt="" />
                                </div>
                                <h2 className='text-dark fs-6 fw-semibold font-family-Poppins m-0 py-2'>
                                    21 The Most Stylish Wedding Guest Dresses For Spring
                                </h2>
                                <div className='d-flex align-items-center gap-3'>
                                    <CiCalendar className='text-secondary fs-5' />
                                    <p className='text-secondary fs-6 fw-medium font-family-Poppins m-0 py-2'>Jan 4, 2022</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col md={3}>
                    <Right_Menu></Right_Menu>
                </Col>
            </Row>
        </div>
    );
};

export default News_Datelis;