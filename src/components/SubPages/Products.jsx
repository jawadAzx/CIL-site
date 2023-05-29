import React from 'react'
import "./Products.css"
import wwebanner from "../../assets/productpage.jpg"
import p1 from "../../assets/p1.jpg"
import { useNavigate } from 'react-router-dom'
const Products = () => {
    const navigate = useNavigate()
    const cardsData = [
        {
            id: 1,
            imageUrl: p1,
            title: 'Card 1',
            details: 'This is the details for Card 1',
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
            title: 'Card 2',
            details: 'This is the details for Card 2',
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
            title: 'Card 1',
            details: 'This is the details for Card 1',
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
            id: 4,
            imageUrl: p1,
            title: 'Card 2',
            details: 'This is the details for Card 2',
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
    const cardsData2 = [
        {
            id: 5,
            imageUrl: p1,
            title: 'Card 1',
            details: 'This is the details for Card 1',
            price: 1000,
            advantages: [
                'Advantage 1',
                'Advantage 2',
                'Advantage 3',
                'Advantage 4',
                'Advantage 5',
            ],
            category: 'Copper Sulphate'
        },
        {
            id: 6,
            imageUrl: p1,
            title: 'Card 2',
            details: 'This is the details for Card 2',
            price: 1000,
            advantages: [
                'Advantage 1',
                'Advantage 2',
                'Advantage 3',
                'Advantage 4',
                'Advantage 5',
            ],
            category: 'Copper Sulphate'
        },
        {
            id: 7,
            imageUrl: p1,
            title: 'Card 1',
            details: 'This is the details for Card 1',
            price: 1000,
            advantages: [
                'Advantage 1',
                'Advantage 2',
                'Advantage 3',
                'Advantage 4',
                'Advantage 5',
            ],
            category: 'Copper Sulphate'
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
                <Grid data={cardsData} />
                <div className='product-category-heading mt-30'>
                    Copper Sulphate
                </div>
                <Grid data={cardsData2} />
            </div>
        </div>
    )
}

export default Products