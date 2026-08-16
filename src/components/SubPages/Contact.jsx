import React from 'react';
import './Contact.css';
import contact from '../../assets/contact.jpg';
import { FiArrowUpRight, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import usePageMeta from '../../hooks/usePageMeta';

const Contact=()=>{
 usePageMeta({title:'Contact Us',description:'Contact Chemicides International (Pvt) Ltd in Faisalabad, Pakistan for zinc sulphate, humic acid and other fertilizer products.',path:'/contact',image:contact});
 return <main className="contact-page">
  <section className="contact-hero"><img src={contact} alt="Agricultural landscape"/><div/><div className="contact-hero-copy"><p>Let’s grow together</p><h1>Start a conversation<br/>with our team.</h1><span>Product guidance, availability, and agricultural support from people who understand the field.</span></div></section>
  <section className="contact-main">
   <div className="contact-intro"><p className="contact-kicker">Contact us</p><h2>We’re here to help you find the right crop nutrition solution.</h2><p>Whether you are a grower, distributor, or agricultural partner, our Faisalabad team is ready to assist.</p></div>
   <div className="contact-cards">
    <a href="https://maps.google.com/?q=Regent+Mall+D-Ground+Faisalabad" target="_blank" rel="noreferrer"><span><FiMapPin/></span><small>Visit us</small><strong>1st Floor, Regent Mall</strong><p>Habib Jalib Road, D-Ground<br/>Faisalabad, Pakistan</p><FiArrowUpRight className="card-arrow"/></a>
    <a href="tel:+92418554406"><span><FiPhone/></span><small>Call us</small><strong>+92 41 855 4406–9</strong><p>Connect with our team during regular business hours.</p><FiArrowUpRight className="card-arrow"/></a>
    <a href="mailto:contact@chemicides.com"><span><FiMail/></span><small>Email us</small><strong>contact@chemicides.com</strong><p>Send your product or partnership enquiry anytime.</p><FiArrowUpRight className="card-arrow"/></a>
   </div>
  </section>
  <section className="contact-signoff"><span>Chemicides International</span><h2>Made for the land.<br/>Built for its future.</h2></section>
 </main>
};
export default Contact;
