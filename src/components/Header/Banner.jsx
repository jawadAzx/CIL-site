import React from 'react';
import './Banner.css';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate()
    return (
        <div className='banner-maincontainer'>
            <div className='banner-container' >
                <Logo className='logo' onClick={() => navigate('/')} />
            </div>
            <div className='line'></div>
        </div>
    );
}

export default Banner;
