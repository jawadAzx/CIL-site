import React from 'react';
import './Dashboard.css';
import homeimage from '../../assets/cil-agriculture-hero-hd.png';
import productImage from '../../assets/agrogold.jpeg';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight, FiCheck, FiDroplet, FiLayers, FiTrendingUp } from 'react-icons/fi';
import usePageMeta from '../../hooks/usePageMeta';
import { SITE_URL, SITE_NAME, DEFAULT_DESCRIPTION } from '../../seo/config';

const Dashboard = () => {
    const navigate = useNavigate();
    usePageMeta({path:'/',description:DEFAULT_DESCRIPTION,image:homeimage,jsonLd:{'@context':'https://schema.org','@type':'Organization',name:SITE_NAME,url:SITE_URL,logo:`${SITE_URL}/logo.jpeg`,description:DEFAULT_DESCRIPTION}});

    return <main className="home-page">
        <section className="hero">
            <img className="hero-image" src={homeimage} alt="Healthy crops growing in a cultivated field" />
            <div className="hero-shade" />
            <div className="hero-content">
                <p className="eyebrow">Crop nutrition · Made in Pakistan</p>
                <h1>Better soil.<br/><em>Stronger harvests.</em></h1>
                <p className="hero-copy">Science-led crop nutrition engineered for Pakistan's soils, helping growers unlock healthier crops and more dependable yields.</p>
                <div className="hero-actions">
                    <button className="primary-btn" onClick={() => navigate('/granular')}>Explore our products <FiArrowRight /></button>
                    <button className="text-btn" onClick={() => navigate('/wwe')}>Discover our story</button>
                </div>
                <p className="urdu">تھوڑا سا استعمال، کر دے مالا مال</p>
            </div>
            <div className="hero-proof"><strong>Rooted in progress</strong><span>Supporting farmers with quality agricultural inputs and practical expertise.</span></div>
        </section>

        <section className="intro section-wrap">
            <div><p className="eyebrow dark">Why Chemicides</p><h2>Plant nutrition built around the realities of the field.</h2></div>
            <p>We combine thoughtful formulation, consistent manufacturing, and on-ground agricultural understanding to give every crop the foundation it needs to thrive.</p>
        </section>

        <section className="benefit-grid section-wrap">
            <article><FiDroplet/><span>01</span><h3>Precise Nutrition</h3><p>Targeted micronutrients designed for efficient crop uptake and visible field performance.</p></article>
            <article><FiLayers/><span>02</span><h3>Soil First</h3><p>Formulations that correct deficiencies while supporting long-term soil productivity.</p></article>
            <article><FiTrendingUp/><span>03</span><h3>Yield Focused</h3><p>Dependable products made to help farmers protect quality and improve output.</p></article>
        </section>

        <section className="product-feature section-wrap">
            <div className="product-visual"><span>Featured solution</span><img src={productImage} alt="Agro Gold zinc fertilizer pack"/></div>
            <div className="product-copy"><p className="eyebrow dark">Micronutrient solutions</p><h2>Give every crop a stronger start.</h2><p>Our granular fertilizer portfolio addresses critical zinc and micronutrient deficiencies across rice, wheat, maize, sugarcane, cotton, and vegetables.</p><ul><li><FiCheck/> Consistent, quality-controlled formulations</li><li><FiCheck/> Developed for diverse Pakistani crops</li><li><FiCheck/> Practical pack sizes for every farm</li></ul><button className="dark-btn" onClick={() => navigate('/granular')}>View product range <FiArrowRight/></button></div>
        </section>

        <section className="home-cta"><div><p className="eyebrow">Grow with confidence</p><h2>Let’s cultivate better outcomes, together.</h2></div><button onClick={() => navigate('/contact')}>Speak with our team <FiArrowRight/></button></section>
    </main>;
};
export default Dashboard;
