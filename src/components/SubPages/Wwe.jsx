import React from 'react'
import "./Wwe.css"
import wwebanner from "../../assets/wwebanner.jpg"
import wweimg from "../../assets/wwemid2.jpg"
const Wwe = () => {
    return (
        <div className='wwe-container'>
            {/* < div className="wwe-top-banner">
                <h1> Cultivating success with <br /> every sprinkle.</h1>
            </div> */}
            <div className='wwe-top-container'>
                <div className='wwe-top-left'>
                    <div className='wwe-top-heading'>
                        About us
                    </div>
                </div>
                <div className='wwe-top-right'>
                    <img src={wwebanner} alt="wwebanner" className="wwe-top-img" />
                </div>
            </div>
            <div className='wwe-mid-container '>
                < div className='wwe-top-text'>

                    Chemicides International Private Limited is a leading chemical company that provides high-quality agricultural products for improved crop yields and enhanced agrarian practices. Our commitment to excellence and innovation has become a trusted name in the industry.
                    Our extensive product range includes cutting-edge solutions tailored to meet the specific needs of farmers and cultivators. From optimizing crop nutrition to promoting growth and productivity, our innovative formulations deliver outstanding results.
                    Backed by a team of experienced professionals and state-of-the-art manufacturing facilities, we ensure consistent quality and superior performance in all our products. At Chemicides International, we prioritize customer satisfaction and sustainable agriculture practices.
                    Choose Chemicides International Private Limited as your reliable partner for agricultural excellence. Discover our range of practical solutions to support the global agricultural community and contribute to a greener, healthier future. Experience the difference with Chemicides International.
                </div>
                <img src={wweimg} alt="wweimg" className="wwe-mid-img" />
            </div>
            <div className='wwe-bot-container'>
                <div className='wwe-bot-left'>
                    <div className='wwe-bot-left-heading'>
                        Vision
                    </div>
                    < div className='wwe-bot-left-text'>
                        We believe in treating our farmers with respect and faith. Our motto is to provide high-quality products that exceed the expectations of our esteemed customers.
                    </div>
                </div>
                <div className='wwe-bot-right'>
                    <div className='wwe-bot-right-heading'>
                        Mission
                    </div>
                    < div className='wwe-bot-right-text'>
                        Our mission is to be a trusted provider of high-quality agricultural products, supporting farmers worldwide with innovative solutions for sustainable crop growth and enhanced yields.                    </div>
                </div>
            </div>

        </div>
    )
}

export default Wwe