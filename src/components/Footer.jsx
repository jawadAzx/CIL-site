import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import logo from '../assets/logo.jpeg';
import './Footer.css';

const Footer=()=> <footer className="site-footer"><div className="footer-grid">
  <div className="footer-brand"><img src={logo} alt=""/><div><strong>Chemicides International</strong><p>Advancing agriculture through responsible crop nutrition and trusted field solutions.</p></div></div>
  <div><h3>Company</h3><Link to="/wwe">About us</Link><Link to="/granular">Products</Link><Link to="/blogs">Agronomy insights</Link></div>
  <div><h3>Get in touch</h3><p><FiMapPin/> D-Ground, Faisalabad, Pakistan</p><a href="tel:+92418554406"><FiPhone/> +92 41 855 4406–9</a><a href="mailto:contact@chemicides.com"><FiMail/> contact@chemicides.com</a></div>
</div><div className="footer-bottom"><span>© {new Date().getFullYear()} Chemicides International (Pvt) Ltd.</span><span>Growing value. Responsibly.</span></div></footer>;
export default Footer;
