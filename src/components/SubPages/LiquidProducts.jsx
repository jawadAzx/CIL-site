import React from 'react'
import "./Products.css"
import wwebanner from "../../assets/liquidProductpage.jpg"
import p1 from "../../assets/p1.jpg"
import { useNavigate } from 'react-router-dom'
const Products = () => {
    const navigate = useNavigate()

    const liquidZincProducts = [
        {
            id: 1,
            imageUrl: p1,
            title: 'Liquid Zinc 10% | 20 Litre pack',
            details: 'Unlock the power of liquid zinc for your plants with our high-quality fertilizer. This innovative blend contains 10% zinc, a crucial micronutrient for plant growth and development. Experience the transformative benefits of liquid zinc, including improved nutrient uptake, enhanced enzyme activity, and increased plant vigor. Choose our liquid zinc fertilizer for healthier plants and improved crop yields.',
            price: 3000,
            advantages: [
                "Provides essential zinc micronutrient",
                "Improves nutrient uptake and utilization",
                "Enhances enzyme activity",
                "Stimulates plant vigor and growth",
                "Increases crop yields and quality",
                "Suitable for a wide range of crops including field crops, vegetables, and fruits"
            ],
            category: 'Liquid Zinc'
        }
    ];

    const liquidHumicAcidProducts = [
        {
            id: 2,
            imageUrl: p1,
            title: 'Liquid Humic Acid 10% | 20 Litre',
            details: 'Experience the benefits of liquid humic acid for your plants with our premium fertilizer. This exceptional blend contains 10% humic acid and 3.5% potassium oxide (K2O) to enhance nutrient availability and improve soil health. Unlock the transformative power of liquid humic acid, including improved nutrient absorption, root development, and overall plant vitality. Choose our liquid humic acid fertilizer for healthier plants and superior crop performance.',
            price: 2500,
            advantages: [
                "Enhances nutrient availability and absorption",
                "Improves soil health and fertility",
                "Stimulates root development",
                "Enhances overall plant vitality",
                "Increases crop yields and quality",
                "Ideal for a wide range of crops including field crops, vegetables, and fruits"
            ],
            category: 'Liquid Humic Acid'
        }
    ];

    const ammoniumThiosulfateProducts = [
        {
            id: 3,
            imageUrl: p1,
            title: 'Ammonium Thiosulfate | 20 Litre',
            details: 'Unlock the potential of your plants with our premium ammonium thiosulfate fertilizer. This powerful blend contains 11% nitrogen and 25% sulfur, providing essential nutrients for optimal plant growth and health. Experience the transformative benefits of ammonium thiosulfate, including improved nutrient uptake, enhanced root development, and increased crop yields. Choose our ammonium thiosulfate fertilizer for healthier plants and superior crop performance.',
            price: 2300,
            advantages: [
                "Provides essential nitrogen and sulfur",
                "Promotes optimal plant growth and health",
                "Enhances nutrient uptake and utilization",
                "Improves root development",
                "Increases crop yields and quality",
                "Ideal for a wide range of crops including field crops, vegetables, and fruits"
            ],
            category: 'Ammonium Thiosulfate'
        }
    ];

    const potassiumThiosulfateProducts = [
        {
            id: 4,
            imageUrl: p1,
            title: 'Potassium Thiosulfate| 10 Litre',
            details: 'Experience the power of potassium thiosulfate, a high-quality fertilizer enriched with 36% potassium and 36% sulfur. This potent blend provides essential nutrients for optimal plant growth and development. Unlock the full potential of your crops with our potassium thiosulfate formula, ensuring robust growth, improved nutrient uptake, and increased crop yields. Choose our potassium thiosulfate fertilizer for healthier plants and superior crop performance.',
            price: 5500,
            advantages: [
                "Provides essential potassium and sulfur",
                "Promotes optimal plant growth and development",
                "Enhances nutrient uptake and utilization",
                "Improves crop quality and yield",
                "Suitable for a wide range of crops including field crops, vegetables, and fruits",
                "Ideal for addressing potassium and sulfur deficiencies"
            ],
            category: 'Potassium Thiosulfate'
        }
    ];

    const calciumPolysulfideProducts = [
        {
            id: 5,
            imageUrl: p1,
            title: 'Calcium Polysulfide 22% (Liquid Sulfur) | 10 Litre',
            details: 'Unlock the power of liquid sulfur with our calcium polysulfide fertilizer. This innovative blend contains 22% liquid sulfur, a vital nutrient for promoting plant health and vitality. Experience the transformative benefits of calcium polysulfide, including improved nutrient availability, enhanced root development, and increased crop yields. Choose our calcium polysulfide fertilizer for healthier plants and superior crop performance.',
            price: 1000,
            advantages: [
                "Provides essential liquid sulfur",
                "Improves nutrient availability",
                "Enhances root development",
                "Promotes overall plant health",
                "Increases crop yields and quality",
                "Suitable for a wide range of crops including field crops, vegetables, and fruits"
            ],
            category: 'Calcium Polysulfide'
        }
    ];

    const liquidBoronProducts = [
        {
            id: 6,
            imageUrl: p1,
            title: 'Liquid Boron 5%',
            details: 'Unlock the power of liquid boron for your plants with our high-quality fertilizer. This innovative blend contains 5% boron, an essential micronutrient for plant growth and development. Experience the transformative benefits of liquid boron, including improved flower and fruit set, enhanced pollen germination, and increased crop yields. Choose our liquid boron fertilizer for healthier plants and superior crop performance.',
            price: 0, // Please provide the actual price for the product
            advantages: [
                "Provides essential boron micronutrient",
                "Promotes flower and fruit set",
                "Enhances pollen germination",
                "Increases crop yields and quality",
                "Suitable for a wide range of crops including fruits, vegetables, and flowering plants",
                "Ideal for addressing boron deficiencies"
            ],
            category: 'Liquid Boron'
        }
    ];

    const multiMicronutrientsProducts = [
        {
            id: 7,
            imageUrl: p1,
            title: 'Multi Micronutrients | 1 Litre',
            details: 'Unlock the power of multi micronutrients for your plants with our premium fertilizer. This unique blend contains essential micronutrients including 6% zinc, 2% iron, 1% manganese, and 1% copper. Experience the transformative benefits of our multi micronutrients formula, including improved nutrient absorption, enhanced enzyme activity, and increased plant health. Choose our multi micronutrients fertilizer for healthier plants and superior crop performance.',
            price: 300,
            advantages: [
                "Provides essential micronutrients including zinc, iron, manganese, and copper",
                "Enhances nutrient absorption and utilization",
                "Stimulates enzyme activity",
                "Improves overall plant health",
                "Increases crop yields and quality",
                "Suitable for a wide range of crops including field crops, vegetables, and fruits"
            ],
            category: 'Multi Micronutrients'
        },
        {
            id: 8,
            imageUrl: p1,
            title: 'Multi Micronutrients | 20 Litre',
            details: 'Unlock the power of multi micronutrients for your plants with our premium fertilizer. This unique blend contains essential micronutrients including 6% zinc, 2% iron, 1% manganese, and 1% copper. Experience the transformative benefits of our multi micronutrients formula, including improved nutrient absorption, enhanced enzyme activity, and increased plant health. Choose our multi micronutrients fertilizer for healthier plants and superior crop performance.',
            price: 2750,
            advantages: [
                "Provides essential micronutrients including zinc, iron, manganese, and copper",
                "Enhances nutrient absorption and utilization",
                "Stimulates enzyme activity",
                "Improves overall plant health",
                "Increases crop yields and quality",
                "Suitable for a wide range of crops including field crops, vegetables, and fruits"
            ],
            category: 'Multi Micronutrients'
        }
    ];


    const liquidPotashProducts = [
        {
            id: 9,
            imageUrl: p1,
            title: 'Liquid Potash 30% | 10 Litre ',
            details: 'Unlock the power of liquid potash for your plants with our high-quality fertilizer. This innovative blend contains 30% potash (potassium oxide), a crucial nutrient for promoting plant growth, fruit development, and overall plant health. Experience the transformative benefits of liquid potash, including improved root development, increased nutrient uptake, and enhanced crop yields. Choose our liquid potash fertilizer for healthier plants and superior crop performance.',
            price: 4500,
            advantages: [
                "Provides essential potash (potassium) nutrient",
                "Promotes plant growth and development",
                "Enhances root development",
                "Improves nutrient uptake and utilization",
                "Increases fruit development and quality",
                "Suitable for a wide range of crops including fruits, vegetables, and field crops"
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
                        <img src={card.imageUrl} p1t={card.title} className="product-card-image" />
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
                <Grid data={multiMicronutrientsProducts} />
                <div className="product-category-heading mt-30">
                    Liquid Potash
                </div>
                <Grid data={liquidPotashProducts} />


            </div>
        </div>
    )
}

export default Products