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
            title: 'Zinc sulphate 21% | 4kg pack',
            details: 'A product containing zinc sulfate with a concentration of 21%. It is used as a fertilizer additive to provide plants with zinc, which is an essential micronutrient for their growth and development.',
            price: 1525,
            advantages: [
                'Promotes vigorous growth of lush and healthy green leaves.',
                'Prevents withering and patchy growth, leading to the development of normal-sized leaves.',
                'Higher zinc content in zinc sulfate enhances the plants ability to fight off diseases, resulting in overall improved growth.',
                'Using zinc sulfate with higher zinc concentration has been proven to significantly increase crop yield. It also reduces problems like chlorosis (yellowing of leaves), flower and fruit drop, ensuring better productivity.',
                'Supports the growth of crop shoots and accelerates the formation of grains and fruits.',
                'Best for crops like rice, wheat, maize, sugarcane, cotton, and vegetables.'
            ],
            category: 'Zinc Sulphate'
        },
        {
            id: 2,
            imageUrl: p1,
            title: 'Zinc sulphate 33% | 3kg pack',
            details: 'Zinc sulfate product with a higher concentration of 33%. It serves a similar purpose as Agro gold, but with a higher percentage of zinc sulfate.',
            price: 1725,
            advantages: [
                'Promotes vigorous growth of lush and healthy green leaves.',
                'Prevents withering and patchy growth, leading to the development of normal-sized leaves.',
                'Enhances the plants resistance to diseases and boosts overall growth rate.',
                'Proven to significantly increase crop yield and reduce the occurrence of chlorosis, flower, and fruit drop.',
                'Supports the growth of crop shoots and accelerates the formation of grains and fruits.',
                'Best for crops like rice, wheat, maize, sugarcane, cotton, and vegetables.'
            ],
            category: 'Zinc Sulphate'
        }
    ];
    const copperSulfateProducts = [
        {
            id: 3,
            imageUrl: p1,
            title: 'Copper sulfate 25% | 25kg pack',
            details: 'Gardeners and commercial farmers often utilize copper sulphate as a fertilizer or fungicide to combat fungal infections and molds.',
            price: 25000,
            advantages: [
                'Copper sulphate is widely utilized as a fungicide to combat fungal infections in crops. It inhibits the growth and development of fungi, helping to prevent and manage diseases such as blight, mildew, and rust.',
                'Copper deficiency in soils can negatively affect plant growth and development. Copper sulphate is employed as a soil amendment to correct this deficiency. It provides essential copper ions to plants, promoting healthy growth and ensuring optimal nutrient uptake.',
                'Copper sulphate is used as a fungicide, algaecide, root killer, and herbicide in agriculture.',
            ],
            category: 'Copper Sulfate'
        }
    ];

    const multiMicronutrientsProducts = [
        {
            id: 4,
            imageUrl: p1,
            title: 'Multi micronutrients | 4kg pack',
            details: 'Introducing our breakthrough multi-micronutrient fertilizer, enriched with zinc (Zn) and iron (Fe). This powerful formula unlocks plant potential by enhancing growth, improving nutrient uptake, and fortifying against deficiencies and diseases. Experience exceptional results and bountiful yields with our innovative fertilizer.',
            price: 950,
            advantages: [
                "Enhanced plant growth and development",
                "Increased chlorophyll production for improved photosynthesis",
                "Improved nutrient uptake and transport within plants",
                "Prevention of nutrient deficiencies",
                "Enhanced disease resistance and stress tolerance",
                "Best for Cereal crops, Fruit trees, Leafy vegetables, Legumes ,and Ornamental plants such as flowers, shrubs"
            ],
            category: 'Multi Micronutrients'
        }
    ];
    const ammoniumSulphateProducts = [
        {
            id: 5,
            imageUrl: p1,
            title: 'Ammonium sulphate | 50kg pack',
            details: 'Our revolutionary fertilizer, packed with 21% nitrogen (N) and an impressive 24% sulfur (S) from ammonium sulfate. This powerful blend promotes vigorous plant growth, boosts nutrient absorption, and ensures optimal performance. Unlock the potential of your plants with our transformative formula for thriving growth and abundant yields.',
            price: 3700,
            advantages: [
                "Promotes vigorous plant growth",
                "Enhances nutrient absorption and utilization",
                "Boosts chlorophyll production for improved photosynthesis",
                "Strengthens plant structure and resilience",
                "Increases crop yields and quality",
                "Best for Broccoli, Cabbage, Cauliflower, Kale, Tomatoes, Peppers, Eggplants, Peas, Lentils, Soybeans Onions and Garlic"
            ],
            category: 'Ammonium Sulphate'
        }
    ];
    const ammoniumPhosphateProducts = [
        {
            id: 6,
            imageUrl: p1,
            title: 'Ammonium phosphate | 25kg pack',
            details: 'Our innovative fertilizer contains 11% nitrogen (N) and an impressive 46% phosphorus pentoxide (P2O5) derived from ammonium phosphate. This powerful formula promotes optimal plant growth, supports root development, and enhances nutrient uptake. Unlock the full potential of your crops with our transformative blend for abundant yields and improved quality.',
            price: 4100,
            advantages: [
                "Promotes optimal plant growth",
                "Supports root development",
                "Enhances nutrient uptake",
                "Boosts phosphorus availability for vital plant processes",
                "Increases crop yields and quality",
                "Best for crops requiring higher phosphorus levels such as corn, potatoes, tomatoes, beans, and fruits"
            ],
            category: 'Ammonium Phosphate'
        }
    ];
    const potassiumSulphateProducts = [
        {
            id: 7,
            imageUrl: p1,
            title: 'Potassium sulfate | 25kg pack',
            details: 'Experience the power of our premium fertilizer enriched with an impressive 50% potassium oxide (K2O) sourced from potassium sulfate. This exceptional blend promotes robust plant growth, stimulates flowering and fruiting, and improves plant resilience to environmental stress. Unlock the full potential of your crops with our high-quality formula, ensuring abundant yields and superior crop quality.',
            price: 2500,
            advantages: [
                "Promotes vigorous plant growth",
                "Stimulates flowering and fruiting",
                "Enhances plant resilience to environmental stress",
                "Optimizes potassium levels for essential plant functions",
                "Increases crop yields and improves quality",
                "Ideal for a wide range of crops including fruits, vegetables, and flowering plants"
            ],
            category: 'Potassium Sulfate'
        }
    ];

    const humicAcidProducts = [
        {
            id: 8,
            imageUrl: p1,
            title: 'Humic acid | 8kg pack',
            details: 'Unlock the potential of your plants with our premium fertilizer enriched with 40% humic acid and 7% potassium. This exceptional blend promotes enhanced nutrient absorption, improves soil structure, and boosts plant resilience. Experience the transformative power of humic acid for healthier plants, increased yields, and improved overall plant performance.',
            price: 1400,
            advantages: [
                "Enhances nutrient absorption",
                "Improves soil structure and fertility",
                "Boosts plant resilience to stress",
                "Increases root development",
                "Improves plant health and vitality",
                "Ideal for a wide range of crops including vegetables, fruits, and ornamental plants"
            ],
            category: 'Humic Acid'
        }
    ];

    const npkFertilizerProducts = [
        {
            id: 9,
            imageUrl: p1,
            title: 'NPK 10:10:10 | 25kg pack',
            details: 'Unlock the potential of your plants with our balanced NPK fertilizer featuring a balanced ratio of 10:10:10. This versatile blend provides essential nitrogen, phosphorus, and potassium for optimal plant nutrition, resulting in balanced growth, improved root development, and overall plant health. Experience the transformative power of our balanced NPK formula, ensuring healthy growth and high-quality yields.',
            price: 6250,
            advantages: [
                "Promotes balanced plant growth",
                "Enhances root development",
                "Supports overall plant health",
                "Provides essential nutrients for vital plant functions",
                "Improves crop yields and quality",
                "Suitable for a wide range of crops including vegetables, fruits, and field crops"
            ],
            category: 'NPK Fertilizer'
        },
        {
            id: 10,
            imageUrl: p1,
            title: 'NPK 20:20:20 | 25kg pack',
            details: 'Experience the power of our high NPK fertilizer with a balanced ratio of 20:20:20. This potent blend provides a strong nutrient foundation for optimal plant growth, improved flowering, and increased yield potential. Unlock the true potential of your crops with our high NPK formula, ensuring robust growth, abundant blooms, and superior crop quality.',
            price: 12500,
            advantages: [
                "Promotes vigorous plant growth",
                "Stimulates flowering and fruiting",
                "Enhances nutrient availability and uptake",
                "Provides balanced nutrition for optimal plant development",
                "Boosts crop yields and improves quality",
                "Suitable for a wide range of crops including vegetables, fruits, and field crops"
            ],
            category: 'NPK Fertilizer'
        }
    ];

    const potassiumNitrateProducts = [
        {
            id: 11,
            imageUrl: p1,
            title: 'Potassium Nitrate | 25kg pack',
            details: 'Unlock the potential of your plants with our premium potassium nitrate fertilizer. This powerful blend with a ratio of 13:0:44 provides essential potassium and nitrogen for vigorous plant growth, improved flowering, and enhanced fruit development. Experience the transformative power of potassium nitrate for healthier plants, increased yields, and superior crop quality.',
            price: 9000,
            advantages: [
                "Promotes vigorous plant growth",
                "Stimulates flowering and fruiting",
                "Enhances nutrient absorption and utilization",
                "Improves plant resilience to stress",
                "Increases crop yields and improves quality",
                "Ideal for fruiting crops, greenhouse plants, and high-value crops"
            ],
            category: 'Potassium Nitrate'
        }
    ];

    const ureaPhosphateProducts = [
        {
            id: 12,
            imageUrl: p1,
            title: 'Urea Phosphate | 25kg pack',
            details: 'Experience the power of urea phosphate, a high-quality fertilizer enriched with a ratio of 17:44:0. This potent blend provides essential nitrogen and phosphorus for optimal plant growth, root development, and overall plant health. Unlock the full potential of your crops with our urea phosphate formula, ensuring robust growth, abundant yields, and improved crop quality.',
            price: 8500,
            advantages: [
                "Promotes optimal plant growth",
                "Enhances root development",
                "Provides essential nitrogen and phosphorus",
                "Improves nutrient uptake and utilization",
                "Increases crop yields and improves quality",
                "Suitable for a wide range of crops including field crops, vegetables, and fruits"
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