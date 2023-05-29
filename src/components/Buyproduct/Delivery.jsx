import React, { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Delivery.css';
import buy from '../../assets/buy.jpg';
import emailjs from '@emailjs/browser';
import { DotLoader } from 'react-spinners';
const Delivery = () => {
    const location = useLocation();
    const state = location.state;

    const OrderForm = () => {
        const navigate = useNavigate();
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [address, setAddress] = useState('');
        const [phoneNumber, setPhoneNumber] = useState('');
        const [city, setCity] = useState('');
        const [active, setActive] = useState(true);


        const handleSubmit = (e) => {
            e.preventDefault();
            // Perform validation and submit order
            const orderData = {
                name,
                email,
                address,
                phoneNumber,
                city,
                product: state.card.title,
                price: state.card.price,
                quantity: state.quantity,
                total: state.card.price * state.quantity,
            };
            setActive(false);
            emailjs.send('service_bzgor5l', 'template_csp3sj9', orderData, '8S1Wx7chKDGJW_1YH').then(
                function (response) {
                    emailjs.send('service_bzgor5l', 'template_f2i1ajl', orderData, '8S1Wx7chKDGJW_1YH').then(
                        function (response) {
                            navigate('/confirmation', { state: { card: state.card } });
                        },
                        function (error) {

                            alert('FAILED...', error);
                        }
                    );
                },
                function (error) {

                    alert('FAILED...', error);
                }
            );

        };

        return (
            <div>
                <h2>Place an Online Order</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-column">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-column ml-2">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-column">
                            <label htmlFor="address">Address:</label>
                            <textarea
                                id="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-column ml-2">
                            <label htmlFor="city">City:</label>
                            <input
                                type="text"
                                id="city"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-column">
                            <label htmlFor="phoneNumber">Phone Number:</label>
                            <input
                                type="tel"
                                id="phoneNumber"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className={"del-buy-button"
                            + (active ? '' : ' disabled')}
                            disabled={!active} >
                            Place Order <DotLoader className='loader' color='#fff' size={20} loading={!active} />
                        </button>
                    </div>

                </form >
            </div >
        );
    };

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
                <div className="order-details">
                    <h2>Order Details</h2>
                    <div className='order-details-total'> {state.card.title}</div>
                    <div className='order-details-text'> {state.card.category}</div>
                    <div className='order-details-text'> {state.card.details}</div>
                    <div className='order-details-text'> Rs. {state.card.price}</div>
                    <div className='order-details-text'> Quantity: {state.quantity}</div>
                    <div className='order-details-text'>
                        <span className='order-details-total' >Total:</span>  {state.card.price * state.quantity}
                    </div>
                    {/* Add more order details as needed */}
                </div>
                <OrderForm />
            </div>
        </div>
    );
};

export default Delivery;
