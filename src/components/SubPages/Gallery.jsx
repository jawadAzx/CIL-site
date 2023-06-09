import React, { useState, useEffect } from 'react';
import './Gallery.css';
import wwebanner from '../../assets/productpage.jpg';
import s1 from '../../assets/1s.jpg';
import s2 from '../../assets/2s.png';
import s3 from '../../assets/3s.jpg';
import s4 from '../../assets/4s.jpg';
import s5 from '../../assets/5s.jpg';
import buy from '../../assets/buy.jpg';
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [s1, s2, s3, s4, s5, buy];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="product-container">
            <div className="product-top-container">
                <div className="product-top-left">
                    <div className="product-top-heading">Gallery</div>
                </div>
                <div className="product-top-right">
                    <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} className="wwe-top-img" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;
