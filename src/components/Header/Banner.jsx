import React from 'react';
import './Banner.css';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.jpeg"
const Banner = () => {
    const navigate = useNavigate()
    return (
        <div className='banner-maincontainer'>
            <div className='banner-container' >
                <img className='logo' onClick={() => navigate('/')} src={logo} />
            </div>
            <div className='line'></div>
        </div>
    );
}

export default Banner;
