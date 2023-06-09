import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';
import logo from "../../assets/logo.jpeg"
import { ReactComponent as Ham } from '../../assets/hamburger.svg';
const Header = () => {
    const [active, setActive] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();
    const headerRef = useRef(null);
    const [isHeaderFixed, setIsHeaderFixed] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (location.pathname === '/') {
            setActive(0);
        } else if (location.pathname === '/wwe') {
            setActive(1);

        } else if (location.pathname === '/granular') {
            setActive(2);
        }
        else if (location.pathname === '/liquid') {
            setActive(3);
        }
        else if (location.pathname === '/gallery') {
            setActive(4);
        }
        else if (location.pathname === '/contact') {
            setActive(5);
        }
    }, [location.pathname]);

    useEffect(() => {
        const handleScroll = () => {
            const headerHeight = headerRef.current.offsetHeight;
            const scrollY = window.scrollY;
            setIsHeaderFixed(scrollY > headerHeight);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleNavigation = (index, path) => {
        setActive(index);
        navigate(path);
    };
    const headerClassName = isHeaderFixed == 0 ? 'header-main-container' : 'header-main-container fixed';
    const headerClassName1 = isHeaderFixed == 0 ? 'header-container' : 'header-container mt-17';
    return (
        <div ref={headerRef} className={headerClassName}>
            <img
                onClick={() => {
                    setActive("home");
                    navigate('/');
                }}
                className="header-logo"
                src={logo}
            />
            <span className='banner-text-sm'>
                Chemicides International
                <span className='banner-subtext'>
                    (Pvt) Ltd.
                </span>
            </span>
            <Ham
                className="header-ham"
                onClick={() => {
                    navigate('/menu');
                }}
            />
            <div className={headerClassName1}>
                <div
                    className='header-text'
                    onClick={() => handleNavigation(0, '/')}
                >
                    Home
                    <div className={active === 0 ? 'line-red-active' : 'line-red'}></div>
                </div>
                <div
                    className='header-text'
                    onClick={() => handleNavigation(1, '/wwe')}
                >
                    About us
                    <div className={active === 1 ? 'line-red-active' : 'line-red'}></div>
                </div>
                <div
                    className='header-text'
                    onClick={() => handleNavigation(2, '/granular')}
                >
                    Granular Fertilizers
                    <div className={active === 2 ? 'line-red-active' : 'line-red'}></div>
                </div>
                <div
                    className='header-text'
                    onClick={() => handleNavigation(3, '/liquid')}
                >
                    Liquid Fertilizers
                    <div className={active === 3 ? 'line-red-active' : 'line-red'}></div>
                </div>
                <div
                    className='header-text'
                    onClick={() => handleNavigation(4, '/gallery')}
                >
                    Gallery
                    <div className={active === 4 ? 'line-red-active' : 'line-red'}></div>
                </div>
                <div
                    className='header-text'
                    onClick={() => handleNavigation(4, '/contact')}
                >
                    Contact us
                    <div className={active === 5 ? 'line-red-active' : 'line-red'}></div>
                </div>
            </div>
            <div className='line'></div>
        </div>
    );
}

export default Header;
