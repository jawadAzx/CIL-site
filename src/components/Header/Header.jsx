import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Ham } from '../../assets/hamburger.svg';
const Header = () => {
    const [active, setActive] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();
    const headerRef = useRef(null);
    const [isHeaderFixed, setIsHeaderFixed] = useState(false);

    useEffect(() => {
        if (location.pathname === '/') {
            setActive(0);
        } else if (location.pathname === '/wwe') {
            setActive(1);
        } else if (location.pathname === '/products') {
            setActive(2);
        }  else if (location.pathname === '/contact') {
            setActive(3);
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
            <Logo
                onClick={() => {
                    setActive("home");
                    navigate('/');
                }}
                className="header-logo"
            />
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
                    Who we are
                    <div className={active === 1 ? 'line-red-active' : 'line-red'}></div>
                </div>
                <div
                    className='header-text'
                    onClick={() => handleNavigation(2, '/products')}
                >
                    Our products
                    <div className={active === 2 ? 'line-red-active' : 'line-red'}></div>
                </div>
                <div
                    className='header-text'
                    onClick={() => handleNavigation(3, '/contact')}
                >
                    Contact us
                    <div className={active === 3 ? 'line-red-active' : 'line-red'}></div>
                </div>
            </div>
            <div className='line'></div>
        </div>
    );
}

export default Header;
