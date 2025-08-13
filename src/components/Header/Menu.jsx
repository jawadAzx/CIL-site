import React from 'react';
import './Menu.css';
import { useNavigate } from 'react-router-dom'
const Menu = () => {
    const navigate = useNavigate();
    return (
        <div className="menu-container">
            <div className="menu-header">
                <span className="back-arrow" onClick={() => { navigate("/") }}>&#8592;</span>
            </div>
            <div className="menu-items">
                <Row title="Home" navigateTo={() => navigate('/')} />
                <Row title="About us" navigateTo={() => navigate('/wwe')} />
                <Row title="Granular Fertilizers" navigateTo={() => navigate('/granular')} />
                {/* <Row title="Liquid Fertilizers" navigateTo={() => navigate('/liquid')} /> */}
                <Row title="Contact Us" navigateTo={() => navigate('/contact')} />
            </div>
        </div>
    );
};

const Row = ({ title, navigateTo }) => {
    return (
        <div className="menu-row" onClick={navigateTo} >
            <h3 className="menu-title">{title}</h3>
            <div className="menu-line"></div>
        </div >
    );
};

export default Menu;