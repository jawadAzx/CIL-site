import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Bp.css';
import buy from "../../assets/buy.jpg";
import ps1 from "../../assets/productsample1.png";
import ps2 from "../../assets/productsample2.png";
import Modal from './Modal'; // Import your modal component here
import { BsRocketTakeoff, BsCash } from "react-icons/bs";
import { ImLoop2 } from "react-icons/im";
const Bp = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state;
    const [activeImage, setActiveImage] = useState(0);
    const [modalOpen, setModalOpen] = useState(false); // State to track modal open/close
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (event) => {
        setQuantity(parseInt(event.target.value));
    };

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className='buy-container'>
            <div className='buy-top-container'>
                <div className='buy-top-left'>
                    <div className='buy-top-heading'>{state.card.title}</div>
                    <div className='buy-top-subheading'>{state.card.category}</div>
                </div>
                <div className='buy-top-right'>
                    <img src={buy} alt='' className='buy-top-img' />
                </div>
            </div>
            <div className='buy-mid-container-sm'>
                <span className='buy-imgs-container'>
                    <img
                        src={activeImage === 0 ? ps1 : ps2}
                        alt=''
                        className='buy-imgs-main'
                        onClick={openModal} // Open modal on click
                    />
                    <div className='buy-sub-imgs-row'>
                        <img
                            src={ps1}
                            alt=''
                            className={`buy-imgs-sub ${activeImage === 0 ? 'buy-imgs-sub-active' : ''
                                }`}
                            onClick={() => setActiveImage(0)}
                        />
                        <img
                            src={ps2}
                            alt=''
                            className={`buy-imgs-sub ${activeImage === 1 ? 'buy-imgs-sub-active' : ''
                                }`}
                            onClick={() => setActiveImage(1)}
                        />
                    </div>
                </span>
                <div className='buy-prod-price mt-1' >
                    Rs. {state.card.price}
                </div>
                <div className='buy-quant-container'>
                    <div>
                        <label htmlFor='quantity' className='buy-quant-heading'>
                            Quantity:
                        </label>
                        <input
                            type='number'
                            id='quantity'
                            min='1'
                            value={quantity}
                            onChange={handleQuantityChange}
                            className=''
                        />
                    </div>

                </div>
                <button
                    className='buy-button'
                    onClick={() => {
                        navigate('/delivery', {
                            state: {
                                card: state.card,
                                quantity: quantity,
                            },
                        });
                    }}
                >
                    Buy Now
                </button>
                <span >
                    <div className='buy-prod-adv-heading'>
                        Advantages
                    </div>
                    <ul className='buy-prod-adv-list'>
                        {
                            state.card.advantages.map((advantage) => (
                                <li className='buy-prod-adv-list-item'>
                                    {advantage}
                                </li>
                            ))

                        }
                    </ul>
                </span>
                <span className='buy-prod-details-container'>
                    <div className='buy-del-container buy-mt-1-sm'>
                        <BsRocketTakeoff style={{ fontSize: '2rem', color: "#DA974E" }} />
                        <div className='buy-del-features'>
                            Fast shipping
                        </div>
                    </div>
                    <div className='buy-del-container buy-mt-3 buy-mt-1-sm'>
                        <BsCash style={{ fontSize: '2rem', color: "#DA974E" }} />
                        <div className='buy-del-features'>
                            Cash on Delivery
                        </div>
                    </div>
                    <div className='buy-del-container buy-mt-3'>
                        <ImLoop2 style={{ fontSize: '2rem', color: "#DA974E" }} />
                        <div className='buy-del-features'>
                            7 Days Replacement
                        </div>
                    </div>
                </span>
            </div>



            <div className='buy-mid-container'>
                <span className='buy-imgs-container'>
                    <img
                        src={activeImage === 0 ? ps1 : ps2}
                        alt=''
                        className='buy-imgs-main'
                        onClick={openModal} // Open modal on click
                    />
                    <div className='buy-sub-imgs-row'>
                        <img
                            src={ps1}
                            alt=''
                            className={`buy-imgs-sub ${activeImage === 0 ? 'buy-imgs-sub-active' : ''
                                }`}
                            onClick={() => setActiveImage(0)}
                        />
                        <img
                            src={ps2}
                            alt=''
                            className={`buy-imgs-sub ${activeImage === 1 ? 'buy-imgs-sub-active' : ''
                                }`}
                            onClick={() => setActiveImage(1)}
                        />
                    </div>
                </span>

                <span className='buy-prod-details-container'>
                    <div className='buy-prod-price' >
                        Rs. {state.card.price}
                    </div>
                    <div className='buy-prod-desc'>
                        {state.card.details}
                    </div>
                    {/* <div className='buy-prod-adv-heading'>
                            Advantages
                        </div> */}
                    <ul className='buy-prod-adv-list'>
                        {
                            state.card.advantages.map((advantage) => (
                                <li className='buy-prod-adv-list-item'>
                                    {advantage}
                                </li>
                            ))

                        }
                    </ul>

                </span>
                <span className='buy-prod-details-container'>
                    <div className='buy-del-container'>
                        <BsRocketTakeoff style={{ fontSize: '2rem', color: "#DA974E" }} />
                        <div className='buy-del-features'>
                            Fast Delivery
                        </div>
                    </div>
                    <div className='buy-del-container buy-mt-3'>
                        <BsCash style={{ fontSize: '2rem', color: "#DA974E" }} />
                        <div className='buy-del-features'>
                            Cash on Delivery
                        </div>
                    </div>
                    <div className='buy-del-container buy-mt-3'>
                        <ImLoop2 style={{ fontSize: '2rem', color: "#DA974E" }} />
                        <div className='buy-del-features'>
                            7 Days Replacement
                        </div>
                    </div>
                    <div className='buy-quant-container buy-mb-1-sm'>
                        <div>
                            <label htmlFor='quantity' className='buy-quant-heading'>
                                Quantity:
                            </label>
                            <input
                                type='number'
                                id='quantity'
                                min='1'
                                value={quantity}
                                onChange={handleQuantityChange}
                                className=''
                            />
                        </div>

                    </div>
                    <button
                        className='buy-button'
                        onClick={() => {
                            navigate('/delivery', {
                                state: {
                                    card: state.card,
                                    quantity: quantity,
                                },
                            });
                        }}
                    >
                        Buy Now
                    </button>
                </span>

            </div>
            {modalOpen && (
                <Modal closeModal={closeModal}>
                    <img src={activeImage === 0 ? ps1 : ps2} alt='Modal Image' />
                </Modal>
            )}
        </div>
    );
};

export default Bp;
