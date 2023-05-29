import React from 'react'
import "./Wwe.css"
import wwebanner from "../../assets/wwebanner.jpg"
import wweimg from "../../assets/wwemid.jpg"
const Wwe = () => {
    return (
        <div className='wwe-container'>
            {/* < div className="wwe-top-banner">
                <h1> Cultivating success with <br /> every sprinkle.</h1>
            </div> */}
            <div className='wwe-top-container'>
                <div className='wwe-top-left'>
                    <div className='wwe-top-heading'>
                        Who We Are
                    </div>
                </div>
                <div className='wwe-top-right'>
                    <img src={wwebanner} alt="wwebanner" className="wwe-top-img" />
                </div>
            </div>
            <div className='wwe-mid-container '>
                < div className='wwe-top-text'>
                    Envisioning value creation for a multitude of stakeholders, Engro has invested in a diverse portfolio of businesses across the verticals of energy and related infrastructure, agricultural outputs, petrochemicals and telecommunication infrastructure in over 50 years. Engro is committed to helping overcome Pakistan’s energy crisis by using the country’s resources, and strengthen the agri-food sector by equipping our farmers with the right tools and capabilities.
                    Engro recognizes that social prosperity is imperative for business growth. Hence, every venture of Engro operates on an inclusive business growth ideology wherein its success is integrated with the development of society. Investing today for a better tomorrow for Pakistan is at the cornerstone of every business we venture into. It is this passion that fuels Engro to step into unchartered territories, bring sustainable solutions to the forefront, and become the leading provider of products and services in the energy, agricultural, chemicals, and nutrition sectors.
                </div>
                <img src={wweimg} alt="wweimg" className="wwe-mid-img" />
            </div>
            <div className='wwe-bot-container'>
                <div className='wwe-bot-left'>
                    <div className='wwe-bot-left-heading'>
                        Vision
                    </div>
                    < div className='wwe-bot-left-text'>
                        To be the premier Pakistani enterprise with a global reach, passionately pursuing value creation for all stakeholders.
                    </div>
                </div>
                <div className='wwe-bot-right'>
                    <div className='wwe-bot-right-heading'>
                        Mission
                    </div>
                    < div className='wwe-bot-right-text'>
                        To be the premier Pakistani enterprise with a global reach, passionately pursuing value creation for all stakeholders.
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Wwe