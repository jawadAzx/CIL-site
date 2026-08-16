import React from 'react';
import './Wwe.css';
import wwebanner from '../../assets/wwebanner.jpg';
import wweimg from '../../assets/wwemid2.jpg';
import vision from '../../assets/vision.jpg';
import mission from '../../assets/mission.jpg';
import { FiCheckCircle, FiCompass, FiFeather, FiShield } from 'react-icons/fi';
import usePageMeta from '../../hooks/usePageMeta';

const Wwe=()=>{
 usePageMeta({title:'About Us',description:'Chemicides International (Pvt) Ltd, Faisalabad — a manufacturer of zinc sulphate, humic acid and other granular and liquid fertilizers for farmers across Pakistan.',path:'/wwe',image:wwebanner});
 return <main className="about-page">
  <section className="about-hero"><img src={wwebanner} alt="Agricultural field"/><div className="about-hero-overlay"/><div className="about-hero-content"><p className="page-kicker">Our company</p><h1>Rooted in agriculture.<br/><em>Driven by progress.</em></h1><p>We help growers build healthier crops through dependable nutrition, thoughtful innovation, and an enduring respect for the land.</p></div><span className="hero-index">01 — About</span></section>
  <section className="story-shell">
   <div className="story-image"><img src={wweimg} alt="Healthy field and crops"/><div className="story-badge"><strong>Quality</strong><span>from formulation to field</span></div></div>
   <div className="story-copy"><p className="page-kicker green">Who we are</p><h2>A trusted partner in every growing season.</h2><p>Chemicides International Private Limited provides high-quality agricultural products designed to improve crop yields and advance agrarian practices. Our practical formulations are tailored to the specific needs of farmers and cultivators.</p><p>Backed by experienced professionals and modern manufacturing, we focus on consistent quality, reliable performance, and responsible agriculture—helping the farming community cultivate a greener, healthier future.</p><div className="story-values"><span><FiCheckCircle/>Consistent quality</span><span><FiShield/>Trusted performance</span></div></div>
  </section>
  <section className="principles"><div className="principles-heading"><p className="page-kicker green">What guides us</p><h2>Purpose beyond the product.</h2></div><div className="principle-list"><article><span>01</span><FiFeather/><h3>Respect for growers</h3><p>We treat farmers as long-term partners and place their success at the center of our work.</p></article><article><span>02</span><FiCompass/><h3>Practical innovation</h3><p>We create solutions shaped by real crop needs, local conditions, and measurable field value.</p></article><article><span>03</span><FiShield/><h3>Uncompromised quality</h3><p>Our standards remain consistent from raw material selection through manufacturing.</p></article></div></section>
  <section className="vision-grid"><article style={{backgroundImage:`url(${vision})`}}><div/><p>Our vision</p><h2>Elevating agriculture through quality farmers can believe in.</h2></article><article style={{backgroundImage:`url(${mission})`}}><div/><p>Our mission</p><h2>Supporting sustainable crop growth with innovative, dependable solutions.</h2></article></section>
 </main>
};
export default Wwe;
