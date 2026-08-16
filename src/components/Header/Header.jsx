import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import './Header.css';
import logo from '../../assets/logo.jpeg';

const links = [
    ['Home', '/'],
    ['About', '/wwe'],
    ['Products', '/granular'],
    ['Insights', '/blogs'],
    ['Contact', '/contact'],
];

const Header = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => setOpen(false), []);

    return (
        <header className="site-header">
            <div className="header-inner">
                <button className="brand" onClick={() => navigate('/')} aria-label="Chemicides International home">
                    <img src={logo} alt="" />
                    <span><strong>Chemicides</strong><small>International (Pvt) Ltd.</small></span>
                </button>
                <nav className={open ? 'main-nav open' : 'main-nav'} aria-label="Main navigation">
                    {links.map(([label, path]) => (
                        <NavLink key={path} to={path} end={path === '/'} onClick={() => setOpen(false)}>{label}</NavLink>
                    ))}
                </nav>
                <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
                    {open ? <FiX /> : <FiMenu />}
                </button>
            </div>
        </header>
    );
};

export default Header;
