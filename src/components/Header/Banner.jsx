import React from 'react';
import './Banner.css';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.jpeg"
const Banner = () => {
    const navigate = useNavigate()
    return (
        <div className='banner-maincontainer'>
            <div className='banner-subcontainer' >
                <img className='logo' onClick={() => navigate('/')} src={logo} />
                <span className='banner-text'>
                    Chemicides International
                    <span className='banner-subtext'>
                        (Pvt) Ltd.
                    </span>
                </span>
            </div>
            <div className='line'></div>
        </div >
    );
}

export default Banner;
