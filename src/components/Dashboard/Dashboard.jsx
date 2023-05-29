import React from 'react'
import "./Dashboard.css"
import homeimage from "../../assets/home.jpg"
const Dashboard = () => {
    return (
        <div className='dashboard-container'>
            <div className='dashboard-left'>
                <div className='dashboard-heading'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                </div>
                <button
                    className='transparent-button'
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