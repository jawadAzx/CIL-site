import React from 'react'
import "./Contact.css"
import contact from "../../assets/contact.jpg"
const Contact = () => {
    return (
        <div className='contact-container'>
            <div className='contact-top-container'>
                <div className='contact-top-left'>
                    <div className='contact-top-heading'>
                        Contact us
                    </div>
                </div>
                <div className='contact-top-right'>
                    <img src={contact} alt="" className="contact-top-img" />
                </div>
            </div>
            <div className=''>
                <div className='contact-details-container'>
                    <div className='contact-bold-text'>
                        Address
                    </div>
                    <div className='contact-text'>
                        1st floor Regent Mall, Habib Jalib road, D-Ground, Faisalabad
                    </div>
                </div>
                <div className='contact-details-container'>
                    <div className='contact-bold-text'>
                        Phone
                    </div>
                    <div className='contact-text'>
                        041-855 4406
                    </div>
                </div>
                <div className='contact-details-container'>

                    <div className='contact-bold-text'>
                        Email
                    </div>
                    <div className='contact-text'>
                        chemicides@gmail.com
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact