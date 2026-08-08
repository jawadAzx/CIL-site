import React from 'react'
import "./Dashboard.css"
import homeimage from "../../assets/home.jpg"
import { useNavigate } from 'react-router-dom'
import usePageMeta from '../../hooks/usePageMeta'
import { SITE_URL, SITE_NAME, DEFAULT_DESCRIPTION } from '../../seo/config'

const Dashboard = () => {
    const navigate = useNavigate()

    usePageMeta({
        path: '/',
        description: DEFAULT_DESCRIPTION,
        image: homeimage,
        jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: SITE_NAME,
            url: SITE_URL,
            logo: `${SITE_URL}/logo.jpeg`,
            description: DEFAULT_DESCRIPTION,
            address: {
                '@type': 'PostalAddress',
                streetAddress: '1st floor Regent Mall, Habib Jalib road, D-Ground',
                addressLocality: 'Faisalabad',
                addressCountry: 'PK',
            },
            contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+92-41-8554406',
                contactType: 'sales',
                email: 'contact@chemicides.com',
            },
        },
    });

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