import React, { useState } from 'react';
import { FaRegBookmark, FaRegEye } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import './New_Detalis_Content.css';
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { Rating } from '@mui/material';

const New_Detalis_Content = ({news}) => {
    const {author, title, image_url, details, rating, _id, total_view
    } = news;

    return (
        <div className='bg-white rounded-1 border border-1 border-success-subtle'>
            <header className='d-flex align-items-center justify-content-between p-3 bg-light rounded-top--1 rounded-top--1 border border-1 border-light'>
                <div className='d-flex align-items-center'>
                    <div>
                        <img className='rounded-circle cursor-pointer' src={author.img} alt="" style={{width : '40px', height : '40px'}} />
                    </div>
                    <div>
                        <h4 className='mb-0 text-dark fs-6 fw-semibold font-family-Poppins m-0 px-3'>{author.name ? author.name : 'No Name'}</h4>
                        <p className='mb-0 text-secondary fs-6 fw-normal font-family-Poppins m-0 px-3 py-2'>{author.published_date}</p>
                    </div>
                </div>
                <div className='d-flex align-items-center gap-2'>
                    <FaRegBookmark className='fs-5 text-secondary cursor-pointer' />
                    <IoShareSocialOutline className='fs-4 text-secondary cursor-pointer' />
                </div>
            </header>
            <div className='px-3'>
                <h2 className='text-dark fs-5 fw-bold font-family-Poppins m-0 py-2'>{title}</h2>
                <div className='my-3'>
                    <img className='w-100' src={image_url} alt="" />
                </div>
                <div className='py-2'>
                    <p className='text-secondary fs-6 fw-normal font-family-Poppins'>{details.length > 310 ? details.substring(0, 250) + '...' : details}</p>
                    <Link to={`/news/details/${_id}`} className='text-warning text-decoration-none fs-6 fw-semibold font-family-Poppins border-0 bg-transparent'>Read More</Link>
                </div>
                <footer className='py-3 d-flex'>
                    <div className='d-flex gap-3 flex-grow-1'>
                        <Rating name="half-rating-read" defaultValue={rating.number} precision={0.5} readOnly />
                        <p className='text-secondary fs-6 fw-medium font-family-Poppins m-0'>{rating.number}</p>
                    </div>
                    <div className='d-flex align-items-center gap-2'>
                        <FaRegEye />
                        <span className='m-0 text-secondary fs-6 fw-medium font-family-Poppins'>{total_view}</span>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default New_Detalis_Content;