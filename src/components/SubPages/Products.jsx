import React from 'react'
import "./Products.css"
import wwebanner from "../../assets/productpage.jpg"
import p1 from "../../assets/p1.jpg"
import { useNavigate } from 'react-router-dom'
const Products = () => {
    const navigate = useNavigate()

    const zinc = [
        {
            id: 1,
            imageUrl: p1,
            title: 'Agro gold 21%',
            details: 'A product containing zinc sulfate with a concentration of 21%. It is used as a fertilizer additive to provide plants with zinc, which is an essential micronutrient for their growth and development.',
            price: 1000,
            advantages: [
                'Advantage 1',
                'Advantage 2',
                'Advantage 3',
                'Advantage 4',
                'Advantage 5',
            ],
            category: 'Zinc Sulphate'
        },
        {
            id: 2,
            imageUrl: p1,
            title: 'Sapphire 27%',
            details: 'Zinc sulfate product with a higher concentration of 27%. It serves a similar purpose as Agro gold, but with a higher percentage of zinc sulfate.',
            price: 1000,
            advantages: [
                'Advantage 1',
                'Advantage 2',
                'Advantage 3',
                'Advantage 4',
                'Advantage 5',
            ],
            category: 'Zinc Sulphate'

        },
        {
            id: 3,
            imageUrl: p1,
            title: 'Commander  33%',
            details: 'A zinc sulfate product with a concentration of 33%. It is designed to deliver a higher amount of zinc sulfate to plants for improved nutrient uptake and overall health.',
            price: 1000,
            advantages: [
                'Advantage 1',
                'Advantage 2',
                'Advantage 3',
                'Advantage 4',
                'Advantage 5',
            ],
            category: 'Zinc Sulphate'

        },
    ];
    const humicAcid = [
        {
            id: 5,
            imageUrl: p1,
            title: 'Nappier (liquid)',
            details: 'A liquid humic acid product that helps improve soil quality and enhance plant growth. It contains a certain percentage of humic acid, which aids in nutrient absorption and root development.',
            price: 1000,
            advantages: [
                'Advantage 1',
                'Advantage 2',
                'Advantage 3',
                'Advantage 4',
                'Advantage 5',
            ],
            category: 'Humic acid'
        },
        {
            id: 6,
            imageUrl: p1,
            title: 'Marcoplo granular',
            details: 'A granular humic acid product, which can be applied to the soil to enhance its fertility and structure. It contains a certain percentage of humic acid to provide its beneficial effects.',
            price: 1000,
            advantages: [
                'Advantage 1',
                'Advantage 2',
                'Advantage 3',
                'Advantage 4',
                'Advantage 5',
            ],
            category: 'Humic acid'
        },
    ];
    const copperSulphate = [
        {
            id: 7,
            imageUrl: p1,
            title: 'Sapphire 25%',
            details: 'A copper sulfate product with a concentration of 25%. It is commonly used as a fungicide and algaecide in agriculture to control fungal diseases in plants and prevent algae growth.',
            price: 1000,
            advantages: [
                'Advantage 1',
                'Advantage 2',
                'Advantage 3',
                'Advantage 4',
                'Advantage 5',
            ],
            category: 'Humic acid'
        },
    ];
    const potash = [
        {
            id: 8,
            imageUrl: p1,
            title: 'Chinar liquid potash 30%',
            details: 'A liquid potash product with a concentration of 30%. Potash, typically in the form of potassium chloride, is a vital nutrient for plant growth, and this product provides a certain percentage of potassium to support plant development.',
            price: 1000,
            advantages: [
                'Advantage 1',
                'Advantage 2',
                'Advantage 3',
                'Advantage 4',
                'Advantage 5',
            ],
            category: 'Potash'
        },
    ];


    const Grid = (props) => {
        const { data } = props;
        return (
            <div className="product-grid">
                {data.map((card) => (

                    <div className="product-card" key={card.id} onClick={
                        () => {
                            navigate('/buy', { state: { card } })
                        }
                    }>
                        <img src={card.imageUrl} alt={card.title} className="product-card-image" />
                        <div className="product-card-details">
                            <h2 className="product-card-title">{card.title}</h2>
                            <p className="product-card-description">{card.details}</p>
                            <p className="product-card-description bold">Rs. {card.price}</p>

                        </div>
                    </div>
                ))}
            </div>
        )
    }



    return (
        <div className='product-container'>
            {/* < div className="product-top-banner">
            <h1> Cultivating success with <br /> every sprinkle.</h1>
        </div> */}
            <div className='product-top-container'>
                <div className='product-top-left'>
                    <div className='product-top-heading'>
                        Our Products
                    </div>
                </div>
                <div className='product-top-right'>
                    <img src={wwebanner} alt="wwebanner" className="wwe-top-img" />
                </div>
            </div>
            <div className="product-mid-container">
                <div className='product-category-heading'>
                    Zinc Sulphate
                </div>
                <Grid data={zinc} />
                <div className='product-category-heading mt-30'>
                    Humic acid
                </div>
                <Grid data={humicAcid} />
                <div className='product-category-heading mt-30'>
                    Copper Sulphate
                </div>
                <Grid data={copperSulphate} />
                <div className='product-category-heading mt-30'>
                    Potash
                </div>
                <Grid data={potash} />
            </div>
        </div>
    )
}

export default Products