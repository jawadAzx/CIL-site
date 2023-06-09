import React from 'react'
import "./Dashboard.css"
import homeimage from "../../assets/home.jpg"
import { useNavigate } from 'react-router-dom'
const Dashboard = () => {
    const navigate = useNavigate()
    return (
        <div className='dashboard-container'>
            <div className='dashboard-left'>
                <div className='dashboard-heading'>
                    Cultivating success with every sprinkle.
                </div>
                <div className='dashboard-subheading mt-1'>
                    تھوڑا سا استعمال، کر دے مالا مال
                </div>
                <button
                    className='transparent-button'
                    onClick={() => navigate('/wwe')}
                >
                    Get Started
                </button>
            </div>
            <div className='dashboard-right'>
                <img src={homeimage} alt="homeimage" className='dashboard-img' />
            </div>
        </div>
    )
}

export default Dashboard