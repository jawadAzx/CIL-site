import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './Confirmation.css'
import buy from '../../assets/buy.jpg';

const Confirmation = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const state = location.state
    return (
        <div className="buy-container">
            <div className="buy-top-container">
                <div className="buy-top-left">
                    <div className="buy-top-heading">{state.card.title}</div>
                    <div className="buy-top-subheading">{state.card.category}</div>
                </div>
                <div className="buy-top-right">
                    <img src={buy} alt="" className="buy-top-img" />
                </div>
            </div>
            <div className="delivery-mid-container">
                {/* print order places success */}
                <div className="order-summary">
                    <div className="order-details-heading">Order Placed Successfully</div>
                    <div className="order-details-text">Please check your email for confirmation.</div>
                    <button className="conf-buy-button" onClick={() => navigate('/')}>Continue</button>

                </div>
            </div>
        </div>)
}

export default Confirmation