import React from 'react'
import "./Products.css"
import wwebanner from "../../assets/productpage.jpg"
import p1 from "../../assets/p1.jpg"
import { useNavigate } from 'react-router-dom'
const Products = () => {
    const navigate = useNavigate()

    const zincSulphateProducts = [
        {
            id: 1,
            imageUrl: p1,
            title: 'Zinc sulphate 21%',
            details: 'A product containing zinc sulfate with a concentration of 21%. It is used as a fertilizer additive to provide plants with zinc, which is an essential micronutrient for their growth and development.',
            price: 1525,
            advantages: [
                '4kg pack',
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
            title: 'Zinc sulphate 33%',
            details: 'Zinc sulfate product with a higher concentration of 27%. It serves a similar purpose as Agro gold, but with a higher percentage of zinc sulfate.',
            price: 1725,
            advantages: [
                '3kg pack',
                'Advantage 2',
                'Advantage 3',
                'Advantage 4',
                'Advantage 5',
            ],
            category: 'Zinc Sulphate'
        }
    ];
    const copperSulfateProducts = [
        {
            id: 3,
            imageUrl: p1,
            title: 'Copper sulfate 25%',
            details: 'A product containing copper sulfate with a concentration of 25%. It is used as a fertilizer additive to provide plants with copper, which is an essential micronutrient for their growth and development.',
            price: 25000,
            advantages: [
                '25kg pack',
                'Advantage 2',
                'Advantage 3',
                'Advantage 4',
                'Advantage 5',
            ],
            category: 'Copper Sulfate'
        }
    ];

    const multiMicronutrientsProducts = [
        {
            id: 4,
            imageUrl: p1,
            title: 'Multi micronutrients',
            details: 'A product containing multiple micronutrients including 8% zinc and 2% iron. It provides essential nutrients to plants for healthy growth and development.',
            price: 950,
            advantages: [
                '4kg pack',
                'Advantage 2',
                'Advantage 3',
                'Advantage 4',
                'Advantage 5',
            ],
            category: 'Multi Micronutrients'
        }
    ];
    const ammoniumSulphateProducts = [
        {
            id: 5,
            imageUrl: p1,
            title: 'Ammonium sulphate',
            details: 'A product containing ammonium sulfate with 21% nitrogen and 24% sulfur. It provides a readily available source of nitrogen and sulfur for plants.',
            price: 3700,
            advantages: [
                '50kg pack',
                'Advantage 2',
                'Advantage 3',
                'Advantage 4',
                'Advantage 5',
            ],
            category: 'Ammonium Sulphate'
        }
    ];
    const ammoniumPhosphateProducts = [
        {
            id: 6,
            imageUrl: p1,
            title: 'Ammonium phosphate',
            details: 'A product containing ammonium phosphate with 11% nitrogen and 46% P2O5. It provides a source of nitrogen and phosphorus for plants.',
            price: 5000,
            advantages: [
                '25kg pack',
                'Advantage 2',
                'Advantage 3',
                'Advantage 4',
                'Advantage 5',
            ],
            category: 'Ammonium Phosphate'
        }
    ];
    const potassiumSulphateProducts = [
        {
            id: 7,
            imageUrl: p1,
            title: 'Potassium sulphate',
            details: 'A product containing potassium sulfate with a concentration of 50% K2O. It provides plants with potassium, an essential macronutrient for their growth and development.',
            price: 7500,
            advantages: [
                '25kg pack',
                'Advantage 2',
                'Advantage 3',
                'Advantage 4',
                'Advantage 5',
            ],
            category: 'Potassium Sulphate'
        }
    ];
    const humicAcidProducts = [
        {
            id: 8,
            imageUrl: p1,
            title: 'Humic acid',
            details: 'A product containing 40% humic acid and 7% potassium. It helps improve soil structure and nutrient availability to plants.',
            price: 1400,
            advantages: [
                '8kg pack',
                'Advantage 2',
                'Advantage 3',
                'Advantage 4',
                'Advantage 5',
            ],
            category: 'Humic Acid'
        }
    ];
    const npkFertilizerProducts = [
        {
            id: 9,
            imageUrl: p1,
            title: 'N:P:K 10:10:10',
            details: 'A balanced fertilizer with equal proportions of nitrogen, phosphorus, and potassium (N:P:K = 10:10:10). It provides essential macronutrients for plant growth.',
            price: 6250,
            advantages: [
                '25kg pack',
                'Advantage 2',
                'Advantage 3',
                'Advantage 4',
                'Advantage 5',
            ],
            category: 'NPK Fertilizer'
        },
        {
            id: 10,
            imageUrl: p1,
            title: 'N:P:K 20:20:20',
            details: 'A balanced fertilizer with higher proportions of nitrogen, phosphorus, and potassium (N:P:K = 20:20:20). It provides essential macronutrients for plant growth.',
            price: 12500,
            advantages: [
                '25kg pack',
                'Advantage 2',
                'Advantage 3',
                'Advantage 4',
                'Advantage 5',
            ],
            category: 'NPK Fertilizer'
        }
    ];
    const potassiumNitrateProducts = [
        {
            id: 11,
            imageUrl: p1,
            title: 'Potassium Nitrate',
            details: 'A product containing potassium nitrate with a ratio of 13:0:44 (N:P:K). It provides a source of potassium and nitrogen for plants.',
            price: 9000,
            advantages: [
                '25kg pack',
                'Advantage 2',
                'Advantage 3',
                'Advantage 4',
                'Advantage 5',
            ],
            category: 'Potassium Nitrate'
        }
    ];
    const ureaPhosphateProducts = [
        {
            id: 12,
            imageUrl: p1,
            title: 'Urea Phosphate 17:44:0',
            details: 'A product containing urea phosphate with a ratio of 17:44:0 (N:P:K). It provides a source of nitrogen and phosphorus for plants.',
            price: 8500,
            advantages: [
                '25kg pack',
                'Advantage 2',
                'Advantage 3',
                'Advantage 4',
                'Advantage 5',
            ],
            category: 'Urea Phosphate'
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
            <div className='product-top-container'>
                <div className='product-top-left'>
                    <div className='product-top-heading'>
                        Granular Fertilizers
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
                <Grid data={zincSulphateProducts} />
                <div className='product-category-heading mt-30'>
                    Copper Sulphate
                </div>
                <Grid data={copperSulfateProducts} />
                <div className='product-category-heading mt-30'>
                    Multi Micronutrients
                </div>
                <Grid data={multiMicronutrientsProducts} />
                <div className='product-category-heading mt-30'>
                    Ammonium Sulphate
                </div>
                <Grid data={ammoniumSulphateProducts} />
                <div className='product-category-heading mt-30'>
                    Ammonium Phosphate
                </div>
                <Grid data={ammoniumPhosphateProducts} />
                <div className='product-category-heading mt-30'>
                    Potassium Sulphate
                </div>

                <Grid data={potassiumSulphateProducts} />
                <div className='product-category-heading mt-30'>
                    Humic Acid
                </div>
                <Grid data={humicAcidProducts} />
                <div className='product-category-heading mt-30'>
                    NPK Fertilizer
                </div>
                <Grid data={npkFertilizerProducts} />
                <div className='product-category-heading mt-30'>
                    Potassium Nitrate
                </div>
                <Grid data={potassiumNitrateProducts} />
                <div className='product-category-heading mt-30'>
                    Urea Phosphate
                </div>
                <Grid data={ureaPhosphateProducts} />

            </div>
        </div>
    )
}

export default Products