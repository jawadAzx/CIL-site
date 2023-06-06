import React from 'react'
import "./Products.css"
import wwebanner from "../../assets/productpage.jpg"
import p1 from "../../assets/p1.jpg"
import { useNavigate } from 'react-router-dom'
const Products = () => {
    const navigate = useNavigate()

    const liquidZincProducts = [
        {
            id: 1,
            imageUrl: p1,
            title: 'Liquid zinc 10%',
            details: 'A liquid fertilizer product containing 10% zinc. It provides plants with zinc, which is an essential micronutrient for their growth and development.',
            price: 3000,
            advantages: [
                '20 Litre pack',
            ],
            category: 'Liquid Zinc'
        }
    ];
    const liquidHumicAcidProducts = [
        {
            id: 2,
            imageUrl: p1,
            title: 'Liquid Humic Acid 10%',
            details: 'A liquid fertilizer product containing 10% humic acid and 3.5% potassium oxide (K2O). It helps improve soil structure and nutrient availability to plants.',
            price: 2500,
            advantages: [
                '20 Litre pack',
            ],
            category: 'Liquid Humic Acid'
        }
    ];

    const ammoniumThiosulfateProducts = [
        {
            id: 3,
            imageUrl: p1,
            title: 'Ammonium Thiosulfate',
            details: 'A liquid fertilizer product containing 11% nitrogen and 25% sulfur in the form of ammonium thiosulfate. It provides a readily available source of nitrogen and sulfur for plants.',
            price: 2300,
            advantages: [
                '20 Litre pack',
            ],
            category: 'Ammonium Thiosulfate'
        }
    ];
    const potassiumThiosulfateProducts = [
        {
            id: 4,
            imageUrl: p1,
            title: 'Potassium Thiosulfate',
            details: 'A liquid fertilizer product containing 36% potassium and 36% sulfur in the form of potassium thiosulfate. It provides plants with potassium and sulfur, which are essential nutrients for their growth and development.',
            price: 5500,
            advantages: [
                '10 Litre pack',
            ],
            category: 'Potassium Thiosulfate'
        }
    ];
    const calciumPolysulfideProducts = [
        {
            id: 5,
            imageUrl: p1,
            title: 'Calcium polysulfide 22% (liquid sulphur)',
            details: 'A liquid fertilizer product containing 22% calcium polysulfide, which provides a source of liquid sulfur for plants.',
            price: 1000,
            advantages: [
                '10 Litre pack',
            ],
            category: 'Calcium Polysulfide'
        }
    ];
    const liquidBoronProducts = [
        {
            id: 6,
            imageUrl: p1,
            title: 'Liquid Boron 5%',
            details: 'A liquid fertilizer product containing 5% boron. It provides plants with boron, an essential micronutrient for their growth and development.',
            price: 99,

            advantages: [
                '// Add the advantages here,'
            ],
            category: 'Liquid Boron'
        }
    ];
    const liquidMicronutrientsProducts = [
        {
            id: 7,
            imageUrl: p1,
            title: 'Multi micronutrients',
            details: 'A liquid fertilizer product containing multiple micronutrients, including 6% zinc, 2% iron, 1% manganese, and 1% copper. It provides plants with essential micronutrients for their growth and development.',
            price: 66,
            advantages: [
                "Add the advantages here,"
            ],
            category: 'Multi Micronutrients'
        }
    ];
    const liquidPotashProducts = [
        {
            id: 8,
            imageUrl: p1,
            title: 'Liquid potash 30%',
            details: 'A liquid fertilizer product containing 30% potash (potassium). It provides plants with potassium, an essential macronutrient for their growth and development.',
            price: 4500,
            advantages: [
                '10 Litre pack',
            ],
            category: 'Liquid Potash'
        }
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
                        Liquid Ferilizers
                    </div>
                </div>
                <div className='product-top-right'>
                    <img src={wwebanner} alt="wwebanner" className="wwe-top-img" />
                </div>
            </div>
            <div className="product-mid-container">
                <div className="product-category-heading">
                    Liquid Zinc
                </div>
                <Grid data={liquidZincProducts} />
                <div className="product-category-heading mt-30">
                    Liquid Humic Acid
                </div>
                <Grid data={liquidHumicAcidProducts} />
                <div className="product-category-heading mt-30">
                    Ammonium Thiosulfate
                </div>
                <Grid data={ammoniumThiosulfateProducts} />
                <div className="product-category-heading mt-30">
                    Potassium Thiosulfate
                </div>
                <Grid data={potassiumThiosulfateProducts} />
                <div className="product-category-heading mt-30">
                    Calcium Polysulfide
                </div>
                <Grid data={calciumPolysulfideProducts} />
                <div className="product-category-heading mt-30">
                    Liquid Boron
                </div>
                <Grid data={liquidBoronProducts} />
                <div className="product-category-heading mt-30">
                    Multi Micronutrients
                </div>
                <Grid data={liquidMicronutrientsProducts} />
                <div className="product-category-heading mt-30">
                    Liquid Potash
                </div>
                <Grid data={liquidPotashProducts} />


            </div>
        </div>
    )
}

export default Products