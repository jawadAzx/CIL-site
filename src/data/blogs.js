// Blog content lives here as plain data since the site has no backend/database.
// To publish a new post, add a new object to this array and redeploy the site.
// `slug` must be unique — it is used in the URL (/blogs/<slug>).

import potatoes from "../assets/potatoes.jpg";
import ricefield from "../assets/home.jpg";
import sugarcane from "../assets/sc.jpg";
import tomatoes from "../assets/tom.jpg";
import commander from "../assets/commander.jpeg";
import wheatPath from "../assets/1s.jpg";
import ricePaddy from "../assets/buy.jpg";
import citrus from "../assets/liquidProductpage.jpg";
import vegCollage from "../assets/4s.jpg";
import riceTerraces from "../assets/1.jpg";
import wheatSunset from "../assets/2s.png";
import farmlandHills from "../assets/wwemid.jpg";
import farmerField from "../assets/images/home-upper-img.jpg";
import fruitCollage from "../assets/5s.jpg";
import ricePlanting from "../assets/wwemid2.jpg";
import agrogold from "../assets/agrogold.jpeg";
import saffaron from "../assets/saffaron.jpeg";
import cottonField from "../assets/3s.jpg";

const blogs = [
  {
    id: 1,
    slug: "zinc-sulphate-deficiency-guide",
    title: "Spotting and Correcting Zinc Deficiency in Crops",
    date: "2026-06-12",
    author: "Chemicides International",
    image: potatoes,
    excerpt:
      "Zinc deficiency is one of the most common micronutrient issues in Pakistani soils. Here's how to spot the early signs and correct it before yield is affected.",
    content: [
      "Zinc deficiency shows up as stunted growth, patchy or yellowing leaves, and smaller-than-normal fruit and grain. Left uncorrected, it can significantly reduce crop yield and quality.",
      "Soils that are sandy, alkaline, or heavily cropped over many seasons are especially prone to zinc depletion. Rice, wheat, maize, and cotton are among the crops most sensitive to low zinc levels.",
      "Applying a zinc sulphate fertilizer, such as our Agro Gold (21% Zn), Saffaron (27% Zn), or Commander (33% Zn) products, restores zinc levels in the soil and supports healthy chlorophyll production, stronger shoots, and improved disease resistance.",
      "For best results, apply during early growth stages and follow up with soil testing each season to track nutrient levels.",
    ],
  },
  {
    id: 2,
    slug: "choosing-the-right-fertilizer-for-your-soil",
    title: "How to Choose the Right Fertilizer for Your Soil",
    date: "2026-05-20",
    author: "Chemicides International",
    image: ricefield,
    excerpt:
      "Not every field needs the same nutrients. A quick guide to reading your soil and matching it to the right fertilizer program.",
    content: [
      "The starting point for any fertilizer program is a soil test. It tells you which nutrients are already sufficient and which are limiting your yield.",
      "Micronutrients like zinc and copper are needed in small quantities but have an outsized effect on plant health when missing. Macronutrients like nitrogen, phosphorus, and potassium (NPK) drive overall growth, flowering, and fruiting.",
      "Once you know your soil's gaps, match products accordingly — for example, zinc sulphate for zinc-deficient soils, or a balanced NPK blend for general growth support.",
      "Re-testing every season helps you fine-tune the program instead of guessing, saving input costs while protecting yield.",
    ],
  },
  {
    id: 3,
    slug: "multi-micronutrients-explained",
    title: "Why Multi-Micronutrient Fertilizers Matter",
    date: "2026-04-08",
    author: "Chemicides International",
    image: sugarcane,
    excerpt:
      "A single missing micronutrient can bottleneck an otherwise well-fed crop. Multi-micronutrient blends close several gaps at once.",
    content: [
      "Crops need more than just nitrogen, phosphorus, and potassium — trace elements like zinc and iron play a critical role in enzyme function, chlorophyll production, and stress tolerance.",
      "Our Micro Gold Plus blend combines zinc and iron in one application, making it easier to correct multiple deficiencies without multiple field passes.",
      "This is especially useful for cereal crops, fruit trees, leafy vegetables, legumes, and ornamental plants, where deficiencies often overlap.",
    ],
  },
  {
    id: 4,
    slug: "post-harvest-soil-care",
    title: "Post-Harvest Soil Care: Preparing for the Next Season",
    date: "2026-03-02",
    author: "Chemicides International",
    image: tomatoes,
    excerpt:
      "What you do to your soil right after harvest sets the stage for next season's crop. A few simple steps go a long way.",
    content: [
      "After harvest, soils are often depleted of the nutrients used to grow the previous crop. Replenishing key micronutrients before the next planting cycle helps avoid early-season deficiencies.",
      "Consider a soil test at this stage to plan nutrient application ahead of sowing, rather than reacting to visible deficiency symptoms mid-season.",
      "Incorporating a zinc sulphate or multi-micronutrient application during land preparation gives the next crop a stronger start.",
    ],
  },
  {
    id: 5,
    slug: "zinc-sulphate-33-percent-dosage-application-guide",
    title: "Zinc Sulphate 33% Fertilizer: Dosage, Timing and Application Guide",
    date: "2026-08-08",
    author: "Chemicides International",
    image: commander,
    excerpt:
      "How much Commander Zinc Sulphate 33% to apply, when to apply it, and whether to broadcast it or spray it — a practical guide for rice, wheat, cotton and vegetables.",
    content: [
      "Zinc sulphate 33% is one of the most concentrated granular zinc sources available to farmers, which means less product is needed per acre compared to lower-grade 21% or 27% formulations. Our Commander (Zn 33%) is packed at this strength specifically to reduce the bag weight and cost farmers carry to the field.",
      "As a general soil application guideline, most field crops respond well to a broadcast application worked into the top few inches of soil before sowing or at early tillering. Exact rates depend on your soil test results, crop, and irrigation regime, so always confirm quantities with your local agriculture extension office or the product label for your specific field.",
      "Timing matters as much as quantity. Applying zinc sulphate only after deficiency symptoms — interveinal yellowing, stunted tillers — have already appeared means the crop has already lost some potential yield. Applying at or before sowing gives roots time to take up zinc before demand peaks during vegetative growth.",
      "Zinc sulphate can also be dissolved and used as a foliar spray for a faster correction once deficiency symptoms are visible, though granular soil application remains the more common and cost-effective method for correcting a whole field of rice, wheat, cotton, or sugarcane.",
      "Because zinc sulphate reacts with soil pH, sandy and alkaline soils — common across much of Punjab and Sindh — typically show the strongest response to a 33% application, making it a reliable first fix for fields with a history of poor tillering or pale, patchy growth.",
    ],
  },
  {
    id: 6,
    slug: "zinc-sulphate-21-vs-27-vs-33-percent",
    title: "Zinc Sulphate 21% vs 27% vs 33%: Which Concentration Should You Buy?",
    date: "2026-08-04",
    author: "Chemicides International",
    image: wheatPath,
    excerpt:
      "Zinc sulphate comes in several concentrations — 21%, 27%, and 33% zinc. Here's what actually changes between them and how to pick the right one for your field and budget.",
    content: [
      "All zinc sulphate fertilizers deliver the same nutrient — zinc — but at different concentrations by weight. Our range spans Agro Gold (21% Zn), Saffaron (27% Zn, pentahydrate), and Commander (33% Zn, monohydrate), and the right choice usually comes down to cost per unit of zinc delivered rather than the price of the bag itself.",
      "A higher concentration like 33% means less product is needed to deliver the same amount of actual zinc to the soil, which can lower transport and labour costs on larger holdings. Lower concentrations like 21% spread more material per acre, which some farmers prefer for more even manual broadcasting on smaller plots.",
      "The hydration form also plays a role: monohydrate zinc sulphate (like Commander) is more concentrated and less prone to caking in storage, while pentahydrate forms (like Saffaron) dissolve slightly faster in water, which some growers prefer for tank-mixed foliar applications.",
      "For most rice, wheat, cotton, and vegetable growers correcting a general zinc deficiency, any of the three concentrations will work if the total zinc applied per acre is matched correctly. It's worth comparing price per kilogram of actual zinc, not just price per bag, when deciding between them.",
    ],
  },
  {
    id: 7,
    slug: "hudda-disease-in-rice-zinc-deficiency",
    title: "Hudda Disease in Rice: Causes, Symptoms and the Zinc Sulphate Fix",
    date: "2026-07-31",
    author: "Chemicides International",
    image: ricePaddy,
    excerpt:
      "Hudda disease causes stunted, bronzed rice seedlings and poor tillering. Learn how to recognize zinc deficiency early and choose a correction.",
    content: [
      "Rice growers across Punjab and Sindh often refer to zinc deficiency in paddy fields as 'Hudda' disease — a local term for the stunted, bronze-tipped seedlings that appear roughly two to three weeks after transplanting in zinc-deficient, waterlogged soils.",
      "The symptoms are distinctive: leaves develop rusty brown or bronze streaking starting from the midrib, plant height stays noticeably shorter than healthy patches nearby, and tillering slows down sharply. Left uncorrected, affected patches can suffer significant yield loss at harvest.",
      "Zinc becomes less available to rice roots in flooded, alkaline, and calcareous soils — exactly the conditions common in much of Pakistan's rice belt — which is why Hudda symptoms tend to reappear in the same low-lying or poorly drained fields season after season.",
      "The standard fix is a soil application of zinc sulphate, such as Commander (33% Zn) or Agro Gold (21% Zn), broadcast and incorporated before puddling or applied shortly after transplanting. Fields with a known history of Hudda benefit from planning a zinc application into every season's nursery and land preparation routine rather than waiting for symptoms to reappear.",
      "A foliar spray of dissolved zinc sulphate can green up an already-affected crop faster than a soil application alone, but it works best as a rescue treatment alongside — not instead of — a proper soil-applied zinc program for the following season.",
    ],
  },
  {
    id: 8,
    slug: "chelated-zinc-edta-vs-zinc-sulphate",
    title: "Chelated Zinc (EDTA) vs Zinc Sulphate: Which One Does Your Soil Need?",
    date: "2026-07-27",
    author: "Chemicides International",
    image: citrus,
    excerpt:
      "Zinc sulphate and chelated zinc EDTA both correct zinc deficiency, but they behave very differently in alkaline soils and high-value crops. Here's how to choose.",
    content: [
      "Zinc sulphate is the standard, cost-effective way to correct zinc deficiency across field crops, but in highly alkaline or calcareous soils the zinc it releases can quickly bind to calcium and become unavailable to plant roots again — a problem chelated zinc is specifically designed to avoid.",
      "Chelated zinc EDTA 5% wraps the zinc ion in an organic molecule that keeps it soluble and plant-available even in high-pH soils, making it more efficient — though more expensive per unit of zinc — than plain zinc sulphate in tough alkaline conditions.",
      "In practice, most field crops like rice, wheat, and cotton on moderately alkaline soils do well on zinc sulphate at a fraction of the cost. Chelated zinc tends to earn its higher price on high-value crops like citrus, vegetables, and nursery plants, or on soils with a documented history of poor response to sulphate-based zinc.",
      "A practical approach many growers use is zinc sulphate as the base soil application every season, with chelated zinc reserved for foliar sprays or fertigation on sensitive crops where a fast, reliable correction matters more than cost per acre.",
    ],
  },
  {
    id: 9,
    slug: "chelated-zinc-5-percent-foliar-spray-dosage",
    title: "Chelated Zinc 5% EDTA: Foliar Spray Dosage and Best Practices",
    date: "2026-07-23",
    author: "Chemicides International",
    image: vegCollage,
    excerpt:
      "Chelated zinc EDTA works best as a foliar spray. Here's how growers typically mix, time, and apply it for vegetables, citrus, and other high-value crops.",
    content: [
      "Because chelated zinc EDTA 5% is highly soluble, it's most commonly used as a foliar spray rather than a soil-broadcast fertilizer — a small quantity dissolved in the spray tank delivers zinc directly to the leaf, bypassing the soil chemistry that can lock up zinc sulphate in alkaline fields.",
      "Foliar sprays work best applied in the cooler hours of early morning or late afternoon, avoiding the heat of midday when leaves can scorch and spray droplets evaporate too quickly for proper uptake.",
      "Vegetable growers, citrus orchards, and nursery operations tend to see the fastest visual response from chelated zinc because these crops are usually already managed with frequent spray schedules, making it easy to fold a zinc correction into an existing program.",
      "As with any foliar micronutrient, a single application rarely provides season-long correction on its own — it works best as a supplement to a soil-applied zinc sulphate program, not a full replacement for it, especially on field crops covering larger acreage.",
    ],
  },
  {
    id: 10,
    slug: "best-zinc-fertilizer-for-alkaline-soils",
    title: "Best Zinc Fertilizer for Alkaline Soils: Sulphate, EDTA or Liquid?",
    date: "2026-07-19",
    author: "Chemicides International",
    image: riceTerraces,
    excerpt:
      "Compare zinc sulphate, chelated EDTA and liquid zinc for Pakistan's alkaline, calcareous soils and choose the right application route.",
    content: [
      "A large share of cultivated land in Pakistan sits on alkaline to calcareous soils, where high pH and free calcium carbonate cause applied zinc to quickly convert into forms plants can't absorb — which is why zinc deficiency remains one of the most persistent micronutrient issues in the region.",
      "Granular zinc sulphate, such as our Commander (33% Zn), remains the most economical way to build up soil zinc reserves over time, and repeated seasonal applications gradually improve the zinc status of a field even where some of each application gets locked up.",
      "Chelated zinc EDTA resists this lock-up far better, making it a reliable option for a faster correction or for high-value crops where waiting a season for soil-applied zinc to take full effect isn't acceptable.",
      "Liquid zinc, like our Scotch (Zn 10%), sits in between — it's absorbed quickly through foliage or in fertigation systems and is easy to combine with other spray-tank inputs, making it a practical rescue option for alkaline fields showing deficiency symptoms mid-season.",
      "For most farms, the most cost-effective long-term strategy is a base zinc sulphate program every season, with chelated or liquid zinc used selectively where symptoms appear despite the soil application.",
    ],
  },
  {
    id: 11,
    slug: "liquid-zinc-foliar-spray-dose-per-acre",
    title: "Liquid Zinc Fertilizer: Foliar Spray Dose Per Acre for Cotton, Rice and Wheat",
    date: "2026-07-15",
    author: "Chemicides International",
    image: wheatSunset,
    excerpt:
      "Liquid zinc is one of the fastest ways to correct visible zinc deficiency mid-season. Here's how growers typically dose and apply it across major field crops.",
    content: [
      "Liquid zinc fertilizers like our Scotch (Zn 10%) are formulated for direct dilution in a spray tank, making them a practical mid-season correction when deficiency symptoms — yellowing, stunted growth, delayed maturity — show up after the window for soil-applied zinc sulphate has already passed.",
      "Exact per-acre dosing depends on your sprayer's water volume, crop growth stage, and the severity of the deficiency, so it's worth checking the product label and, where possible, your local agriculture extension recommendations before mixing a full tank.",
      "Cotton and wheat typically receive one to two foliar sprays during the vegetative to early reproductive stage when zinc demand is highest, while rice growers often time a spray shortly after symptoms of Hudda (zinc deficiency) appear in transplanted paddy.",
      "As with any foliar micronutrient, spraying during cooler parts of the day and avoiding application right before rain improves uptake and reduces product wastage.",
    ],
  },
  {
    id: 12,
    slug: "liquid-vs-granular-zinc-fertilizer",
    title: "Liquid vs Granular Zinc Fertilizer: Which Should You Choose and When",
    date: "2026-07-11",
    author: "Chemicides International",
    image: farmlandHills,
    excerpt:
      "Granular zinc sulphate builds long-term soil reserves, while liquid zinc delivers a fast foliar correction. Most farms actually need both — here's how to combine them.",
    content: [
      "Granular zinc sulphate, broadcast and incorporated into the soil before sowing, is the foundation of any zinc management program — it's the most cost-effective way to build up zinc reserves in the soil over multiple seasons.",
      "Liquid zinc, applied as a foliar spray, works on a completely different timeline: it's absorbed through the leaf within hours to days, making it the tool of choice when a crop is already showing deficiency symptoms and there isn't time to wait for a soil application to take effect.",
      "The two aren't competing options so much as complementary tools — granular zinc sulphate like Commander (33% Zn) for planned, whole-field correction at sowing, and liquid zinc like Scotch (10% Zn) as a fast, targeted rescue treatment when symptoms appear mid-season.",
      "Fields with a long history of zinc deficiency, such as rice paddies prone to Hudda disease, generally benefit most from committing to a consistent granular program every season rather than relying on liquid zinc as a repeated annual fix.",
    ],
  },
  {
    id: 13,
    slug: "how-to-mix-apply-liquid-zinc-10-percent",
    title: "How to Mix and Apply Liquid Zinc 10% for Maximum Uptake",
    date: "2026-07-07",
    author: "Chemicides International",
    image: farmerField,
    excerpt:
      "Getting the most out of a liquid zinc spray comes down to water quality, tank-mixing order, and timing. A practical guide for field application.",
    content: [
      "Liquid zinc fertilizers like Scotch (Zn 10%) are formulated to mix cleanly into a spray tank, but water quality still matters — very hard or alkaline water can reduce zinc availability before the spray even reaches the leaf, so avoid mixing with highly alkaline water sources where possible.",
      "When tank-mixing with other inputs, add liquid zinc after other products are already dissolved and the tank is agitating, rather than dumping it in first, to avoid clumping or incompatibility with certain pesticides or other micronutrient blends.",
      "Spray coverage matters more than concentration for foliar zinc — a fine, even mist that wets the leaf surface without excessive runoff gives better uptake than a heavier, less uniform application at the same total dose.",
      "Apply in the early morning or late afternoon rather than the heat of midday, and avoid spraying within a few hours of expected rainfall so the zinc has time to be absorbed before it's washed off.",
    ],
  },
  {
    id: 14,
    slug: "liquid-humic-acid-benefits-root-development",
    title: "Liquid Humic Acid Fertilizer: Benefits for Root Development and Nutrient Uptake",
    date: "2026-07-03",
    author: "Chemicides International",
    image: fruitCollage,
    excerpt:
      "Liquid humic acid doesn't feed plants directly — it makes every other nutrient you apply work harder. Here's how it improves root growth and uptake.",
    content: [
      "Humic acid isn't a nutrient itself — it's a soil conditioner derived from decomposed organic matter that improves how well plant roots can access the nutrients already present in the soil, which is why it's typically applied alongside, not instead of, a regular fertilizer program.",
      "Liquid humic acid, like our Nappier (10% humic acid with 3.5% K2O), is easy to apply through a spray tank or irrigation system, making it a convenient way to work humic acid into an existing nutrient program without changing field equipment.",
      "Its main benefit is at the root: humic acid improves root branching and root hair development, which increases the surface area available for water and nutrient absorption — particularly useful in sandy or degraded soils that hold onto nutrients poorly.",
      "Because it also chelates certain nutrients, applying liquid humic acid alongside a zinc or NPK program can measurably improve how efficiently those nutrients are taken up, often showing up as a more even, vigorous crop stand.",
    ],
  },
  {
    id: 15,
    slug: "humic-acid-potash-liquid-dosage-timing",
    title: "Humic Acid + Potash Liquid Fertilizer: Application Rate and Timing Guide",
    date: "2026-06-29",
    author: "Chemicides International",
    image: sugarcane,
    excerpt:
      "Learn when to apply liquid humic acid with potassium for root development, nutrient uptake and potassium-driven crop growth.",
    content: [
      "Our Nappier liquid humic acid blend combines 10% humic acid with 3.5% potassium oxide (K2O) in a single product, covering both soil conditioning and a meaningful potassium boost in one application — useful for growers managing multiple inputs across a large cropping area.",
      "Early-season applications, at sowing or shortly after germination, take advantage of humic acid's root-development benefits when the plant is establishing its root system and most able to benefit from improved nutrient access.",
      "A second application during the vegetative to early reproductive stage lines up with rising potassium demand for flowering, fruit set, and grain fill, making the combined product useful at more than one point in the season rather than as a single early treatment.",
      "As with other liquid inputs, actual per-acre rates should be checked against the product label and adjusted for your crop, soil type, and irrigation method — sugarcane, cotton, and vegetable growers are among the most common users of a combined humic-potash liquid program.",
    ],
  },
  {
    id: 16,
    slug: "liquid-humic-acid-saline-alkaline-soils",
    title: "Liquid Humic Acid for Saline and Alkaline Soils in Pakistan",
    date: "2026-06-25",
    author: "Chemicides International",
    image: ricePlanting,
    excerpt:
      "Learn where liquid humic acid fits into a broader management plan for saline and alkaline soils in Pakistan's canal-irrigated belts.",
    content: [
      "Large areas of canal-irrigated land in Punjab and Sindh face secondary salinity and high pH, conditions that reduce how well roots can take up water and nutrients even when fertilizer is applied at the correct rate.",
      "Humic acid helps in these conditions by improving soil structure and reducing the binding of nutrients to soil particles, giving roots better access to whatever nutrients — including zinc and potassium — are already present or applied alongside it.",
      "Liquid humic acid, such as Nappier (10% humic acid, 3.5% K2O), is particularly practical for saline-affected fields because it can be applied through existing irrigation or spray equipment without requiring a separate soil-incorporation pass.",
      "It isn't a substitute for proper drainage and irrigation management on badly affected land, but as part of a broader reclamation and nutrition program, regular humic acid applications measurably improve crop stands on marginal, salt-affected soils over successive seasons.",
    ],
  },
  {
    id: 17,
    slug: "humic-acid-granular-40-percent-benefits-dosage",
    title: "Humic Acid Granular 40% Fertilizer: Benefits, Dosage and Application",
    date: "2026-06-21",
    author: "Chemicides International",
    image: tomatoes,
    excerpt:
      "A high-concentration granular humic acid, applied at land preparation, builds soil structure over time. Here's how it works and how growers typically apply it.",
    content: [
      "Granular humic acid at 40% concentration, like our Marco Polo (40% humic acid, 7% potassium), is designed to be broadcast and worked into the soil during land preparation, giving it time to break down and start improving soil structure before the crop's root system is established.",
      "At this concentration, a relatively small quantity per acre delivers a meaningful humic acid load to the soil, making it a practical option for growers who prefer a one-time granular application over repeated liquid sprays through the season.",
      "The soil-conditioning benefits build cumulatively — fields treated with granular humic acid every season for several years typically show better water retention, improved aggregate structure, and stronger, more consistent nutrient uptake than untreated fields.",
      "It pairs particularly well with a zinc sulphate or NPK program applied at the same time, since better soil structure and nutrient retention directly improve how effectively those other inputs are used by the crop.",
    ],
  },
  {
    id: 18,
    slug: "granular-vs-liquid-humic-acid-guide",
    title: "Granular vs Liquid Humic Acid: A Soil and Irrigation-Based Guide",
    date: "2026-06-17",
    author: "Chemicides International",
    image: ricefield,
    excerpt:
      "Both granular and liquid humic acid improve soil and nutrient uptake, but they suit different fields. Here's how to decide which fits your irrigation setup and soil type.",
    content: [
      "Granular humic acid, like Marco Polo (40% humic acid, 7% potassium), is applied once at land preparation and works into the soil over the growing season, making it well suited to fields where a single, thorough pre-planting application fits the existing workflow.",
      "Liquid humic acid, like Nappier (10% humic acid, 3.5% K2O), is easier to split into multiple smaller applications through a spray tank or irrigation system, which suits growers who prefer to time humic acid alongside other liquid inputs across the season.",
      "Soil type plays a role too — heavier, clay-rich soils often benefit from the slower, sustained release of a granular application, while sandy soils that drain quickly may respond better to more frequent, smaller liquid doses that don't get lost as easily between applications.",
      "Growers using drip or sprinkler irrigation are well positioned to fertigate liquid humic acid directly through the system, while flood or furrow-irrigated fields more commonly stick with a granular pre-planting application.",
      "There's no strict rule that one is better than the other — many growers use granular humic acid as the seasonal base and add a liquid application later if the crop shows signs of stress that would benefit from a mid-season boost.",
    ],
  },
  {
    id: 19,
    slug: "humic-acid-soil-health-structure",
    title: "Humic Acid for Soil Health: Building Better Soil Structure Season After Season",
    date: "2026-06-13",
    author: "Chemicides International",
    image: potatoes,
    excerpt:
      "Healthy soil structure isn't built in one season. Here's how consistent humic acid use improves water retention, root growth, and nutrient efficiency over time.",
    content: [
      "Years of intensive cropping, heavy tillage, and chemical fertilizer use without organic matter replacement leave many fields with poor soil structure — compacted, low in organic carbon, and less able to hold water or nutrients where roots can reach them.",
      "Humic acid, whether applied as a granular soil amendment like Marco Polo (40% humic acid) or a liquid like Nappier (10% humic acid), works by binding soil particles into more stable aggregates, which improves aeration, water infiltration, and root penetration over time.",
      "The effect is cumulative rather than immediate — a single application helps, but fields treated consistently across multiple seasons show the clearest improvements in water-holding capacity and nutrient-use efficiency, meaning less fertilizer is wasted to leaching or lock-up.",
      "For growers focused on long-term soil health rather than just this season's yield, working a humic acid application into land preparation every season is one of the more cost-effective ways to gradually rebuild degraded soil.",
    ],
  },
  {
    id: 20,
    slug: "zinc-sulphate-uses-in-agriculture",
    title: "Zinc Sulphate Fertilizer: Uses in Agriculture Explained",
    date: "2026-08-13",
    author: "Chemicides International",
    image: agrogold,
    excerpt:
      "From correcting deficiency to boosting yield and disease resistance — here's a complete look at how zinc sulphate is actually used across Pakistani farms.",
    content: [
      "Zinc sulphate is one of the most widely applied micronutrient fertilizers in Pakistani agriculture, used to correct soil zinc deficiency across rice, wheat, cotton, sugarcane, maize and vegetable crops grown on the country's predominantly alkaline and calcareous soils.",
      "Beyond simply correcting visible deficiency symptoms, regular zinc sulphate use supports chlorophyll synthesis, enzyme activation, and hormone regulation inside the plant — functions that directly influence tillering, flowering, and grain or fruit fill even when a crop isn't showing obvious signs of stress.",
      "Our range covers three concentrations for different budgets and application styles: Agro Gold (21% Zn) for standard broadcast programs, Saffaron (27% Zn, pentahydrate) for faster-dissolving tank mixes, and Commander (33% Zn, monohydrate) for growers who want to apply less product per acre.",
      "Most farms use zinc sulphate in one of two ways: a granular soil application worked in before sowing to build up reserves for the whole season, or a dissolved foliar spray used as a faster, targeted correction once deficiency symptoms appear mid-season.",
      "Because zinc availability drops sharply in high-pH, waterlogged, or heavily cropped soils, an annual soil test is the most reliable way to confirm whether a field genuinely needs zinc sulphate this season or whether existing reserves are still adequate.",
    ],
  },
  {
    id: 21,
    slug: "zinc-sulphate-price-per-kg-pakistan",
    title: "Zinc Sulphate Price in Pakistan: What Actually Determines Cost Per Kg",
    date: "2026-08-13",
    author: "Chemicides International",
    image: saffaron,
    excerpt:
      "Bag price isn't the full picture. Here's what drives zinc sulphate cost per kg in Pakistan and how to compare products fairly.",
    content: [
      "Zinc sulphate pricing in Pakistan varies by concentration, hydration form, pack size, and brand, which is why comparing bag price alone can be misleading — a cheaper bag of 21% Zn material isn't necessarily better value than a pricier bag of 33% Zn if you need less of the latter to deliver the same total zinc to your field.",
      "The most useful number to compare is cost per kilogram of actual zinc delivered, not cost per kilogram of product. A 25 kg bag of Commander (33% Zn) delivers roughly 8.25 kg of pure zinc, while the same size bag of Agro Gold (21% Zn) delivers about 5.25 kg — run that math against the bag price before deciding which is cheaper per unit of nutrient.",
      "Pack size also affects price per kg: smaller retail packs (3-4 kg) carry a higher per-kg cost than bulk 25 kg bags, which matters more for large-acreage growers than for smallholders topping up a limited area.",
      "Prices shift with international sulphur and zinc ore costs, currency movement, and seasonal demand around the rabi and kharif sowing windows, so it's worth checking current rates with your local dealer or distributor rather than relying on last season's numbers when budgeting for this year's program.",
    ],
  },
  {
    id: 22,
    slug: "zinc-deficiency-in-cotton",
    title: "Zinc Deficiency in Cotton: Symptoms and Correction",
    date: "2026-08-12",
    author: "Chemicides International",
    image: cottonField,
    excerpt:
      "Zinc-deficient cotton shows up as shortened internodes and small, mottled leaves well before boll formation suffers. Here's how to catch and correct it.",
    content: [
      "Cotton is moderately sensitive to zinc deficiency, and the early signs are easy to miss if you're not looking for them: shortened internodes that give the plant a bunched, rosette-like appearance, along with small, narrow leaves that develop interveinal yellowing or bronze mottling.",
      "Left uncorrected through the vegetative stage, zinc-deficient cotton typically shows delayed flowering, reduced boll set, and smaller boll size at harvest — losses that are far more costly to recover from than the price of a timely zinc application.",
      "A soil application of zinc sulphate — Agro Gold (21% Zn), Saffaron (27% Zn), or Commander (33% Zn) — worked in ahead of sowing is the standard preventive approach on fields with a known history of deficiency, particularly on the sandy and alkaline soils common across cotton-growing belts of Punjab and Sindh.",
      "Where symptoms appear mid-season despite a soil program, a foliar spray of dissolved zinc sulphate or liquid zinc (Scotch, 10% Zn) can green up the crop faster than waiting for a second soil application to take effect, though it works best as a supplement to — not a replacement for — proper soil-applied zinc.",
    ],
  },
  {
    id: 23,
    slug: "zinc-deficiency-in-wheat",
    title: "Zinc Deficiency in Wheat: Identifying and Fixing It Before Boot Stage",
    date: "2026-08-12",
    author: "Chemicides International",
    image: wheatPath,
    excerpt:
      "Wheat's zinc demand peaks earlier than most growers expect. Here's how to spot deficiency in time to protect tillering and grain fill.",
    content: [
      "Zinc-deficient wheat shows chlorotic streaking between the leaf veins, particularly on younger leaves, along with stunted growth and reduced tillering — symptoms that are often mistaken for nitrogen shortage or general poor establishment early in the season.",
      "Because zinc demand in wheat is highest during tillering and stem elongation, correcting a deficiency after the crop reaches boot stage does little to recover the tillers and yield potential already lost — timing the correction to early growth stages matters more than the total quantity applied.",
      "A basal soil application of zinc sulphate at or before sowing — Agro Gold (21% Zn), Saffaron (27% Zn), or Commander (33% Zn) — remains the most reliable way to prevent deficiency from limiting tillering in the first place, especially on the alkaline, calcareous soils common across Pakistan's wheat belt.",
      "Where a field has a documented history of zinc problems, pairing a soil application with a single foliar spray during early tillering gives the crop two chances to take up zinc before the demand window closes, rather than relying on one application alone.",
    ],
  },
  {
    id: 24,
    slug: "best-time-to-apply-zinc-sulphate",
    title: "Best Time to Apply Zinc Sulphate: A Rabi and Kharif Timing Guide",
    date: "2026-08-11",
    author: "Chemicides International",
    image: riceTerraces,
    excerpt:
      "Applying zinc sulphate at the right growth stage matters as much as the rate. Here's when to apply it across Pakistan's two main cropping seasons.",
    content: [
      "For kharif crops like rice, cotton, sugarcane, and maize, zinc sulphate is best worked into the soil during land preparation, before sowing or transplanting — this gives roots time to establish zinc uptake before the vegetative growth phase, when demand for the nutrient is highest.",
      "For rabi crops like wheat, a basal application at or just before sowing serves the same purpose, with tillering being the critical window where a zinc shortfall does the most damage to eventual yield.",
      "Waiting until visible deficiency symptoms appear — bronzing in rice, interveinal yellowing in wheat and cotton — means the crop has already lost some growth potential; at that point, a foliar spray of dissolved zinc sulphate or liquid zinc (Scotch, 10% Zn) is the fastest way to limit further damage while a soil-applied program is planned for the following season.",
      "Fields with a documented history of zinc deficiency, such as rice paddies affected by Hudda disease, benefit from building a zinc application into every season's routine at land preparation, rather than treating it as a reactive fix only after symptoms return.",
    ],
  },
  {
    id: 25,
    slug: "liquid-boron-5-percent-foliar-spray-guide",
    title: "Liquid Boron 5% Fertilizer: Foliar Spray Guide for Cotton and Fruit Crops",
    date: "2026-08-11",
    author: "Chemicides International",
    image: fruitCollage,
    excerpt:
      "Boron plays an outsized role in flowering and fruit set. Here's how growers use a 5% liquid boron spray to protect yield during the critical flowering window.",
    content: [
      "Boron is needed in very small quantities compared to macronutrients, but it plays a disproportionate role in pollen germination, flower retention, and fruit or boll set — deficiency often shows up not as visible leaf damage but as poor fruit set and lower yield with no obvious explanation.",
      "Our Bukhara (5% liquid boron) is formulated for foliar application, delivering boron directly to the plant during flowering, the growth stage when boron demand is highest and soil-applied boron often can't keep pace with plant uptake.",
      "Cotton, sunflower, and a range of fruit crops respond well to a foliar boron spray timed just before or during early flowering, when improving pollen viability and flower retention has the biggest impact on final yield.",
      "Boron has a narrow safety margin compared to most micronutrients — overapplication can cause its own toxicity symptoms — so it's worth following label dosage carefully and avoiding boron sprays on crops that haven't shown a deficiency history or soil test indication.",
    ],
  },
  {
    id: 26,
    slug: "boron-deficiency-in-cotton-sunflower",
    title: "Boron Deficiency in Cotton and Sunflower: Symptoms and Correction",
    date: "2026-08-10",
    author: "Chemicides International",
    image: vegCollage,
    excerpt:
      "Boron-deficient cotton and sunflower often look otherwise healthy while quietly losing flowers and bolls. Here's what to watch for.",
    content: [
      "Boron deficiency is easy to overlook because the plant often looks broadly healthy — the main symptom is poor flower and boll retention in cotton, or reduced seed set in the sunflower head, rather than dramatic leaf discoloration.",
      "In cotton, deficient plants may show thickened, brittle stems and shortened internodes near the growing tip, along with shedding of small bolls shortly after flowering — losses that are frequently misattributed to heat stress or pest damage rather than a nutrient shortfall.",
      "Sunflower is particularly sensitive to boron during head formation and flowering; deficiency at this stage can result in incomplete seed fill across the head, visibly reducing the harvestable yield even when the plant otherwise appeared normal through vegetative growth.",
      "A foliar spray of liquid boron, such as Bukhara (5% B), timed to just before flowering is the standard correction, and growers in fields with a known history of boron shortfall often build a preventive spray into their flowering-stage program rather than waiting for symptoms to confirm the deficiency.",
    ],
  },
  {
    id: 27,
    slug: "liquid-potash-30-percent-sugarcane-fruit",
    title: "Liquid Potash 30% (Chinar): Dosage and Benefits for Sugarcane and Fruit Crops",
    date: "2026-08-10",
    author: "Chemicides International",
    image: sugarcane,
    excerpt:
      "Potassium drives sugar accumulation, fruit size, and stress tolerance. Here's how growers use a 30% liquid potash to support sugarcane and fruit crops through the season.",
    content: [
      "Potassium plays a central role in sugar and starch movement within the plant, water regulation, and resistance to drought and disease stress — functions that make it especially important for sugarcane, where potassium directly influences sucrose accumulation in the cane.",
      "Our Chinar (30% liquid potash) is designed for foliar application or fertigation, making it easy to fold into an existing spray or irrigation schedule without the equipment changes a granular potash application would require.",
      "Sugarcane responds well to potassium applications during the grand growth and maturation phases, when sugar accumulation accelerates, while fruit crops typically see the biggest benefit from potassium timed around fruit development and sizing.",
      "Because potassium works alongside — not instead of — nitrogen and phosphorus, liquid potash is most effective as part of a balanced nutrition program rather than a standalone input, particularly on soils already managed with a regular NPK schedule.",
    ],
  },
  {
    id: 28,
    slug: "multi-micronutrient-liquid-fertilizer-samarqand",
    title: "Samarqand Multi-Micronutrient Liquid Fertilizer: Zinc, Iron, Manganese and Copper in One Spray",
    date: "2026-08-09",
    author: "Chemicides International",
    image: citrus,
    excerpt:
      "When a crop shows more than one micronutrient deficiency at once, a combined liquid blend can correct several gaps in a single pass.",
    content: [
      "Multiple micronutrient deficiencies often overlap in the same field, particularly on sandy or heavily cropped soils, which is why a combined blend can be more practical than treating each deficiency with a separate product and spray pass.",
      "Samarqand combines 6% zinc, 2% iron, 1% manganese, and 1% copper in a single liquid formulation, covering the micronutrients most commonly limiting in field crops, vegetables, and fruit trees grown on Pakistan's alkaline soils.",
      "Because it's formulated for foliar application, Samarqand works well as a rescue treatment when a crop shows generalized chlorosis or uneven growth that doesn't point to a single obvious deficiency — a combined micronutrient spray corrects multiple potential gaps without needing to diagnose each one separately first.",
      "For fields with a known, specific deficiency — such as a documented zinc shortfall on rice paddies — a targeted single-nutrient product like zinc sulphate or Scotch liquid zinc remains the more cost-effective choice; Samarqand earns its value where deficiency symptoms are mixed or the underlying cause isn't clear.",
    ],
  },
  {
    id: 29,
    slug: "ammonium-thiosulfate-fertilizer-guide",
    title: "Ammonium Thiosulfate Liquid Fertilizer: A Nitrogen-Sulfur Guide for Wheat and Cotton",
    date: "2026-08-09",
    author: "Chemicides International",
    image: wheatSunset,
    excerpt:
      "Ammonium thiosulfate delivers nitrogen and sulfur together in a liquid form that's easy to tank-mix. Here's how and when growers use it.",
    content: [
      "Sulfur deficiency is becoming more common on intensively cropped soils in Pakistan, showing up as pale, uniformly yellow young leaves that can be mistaken for nitrogen shortage — the distinction matters because correcting the wrong nutrient wastes an input and delays the actual fix.",
      "Ammonium thiosulfate delivers 11% nitrogen and 25% sulfur in a single liquid product, making it a convenient way to address both nutrients together, particularly useful for wheat and cotton, both of which have meaningful sulfur requirements for protein and oil synthesis respectively.",
      "Being a liquid, it tank-mixes readily with other inputs and can be applied through fertigation systems, though as with any sulfur-containing product it's worth checking compatibility with other tank-mix partners before combining, since sulfur compounds can react with certain pesticides and micronutrient blends.",
      "Applying ammonium thiosulfate during active vegetative growth, when nitrogen and sulfur demand are both rising, gets the most benefit from a single application compared to applying it very early or very late in the season.",
    ],
  },
  {
    id: 30,
    slug: "potassium-thiosulfate-fertigation-guide",
    title: "Potassium Thiosulfate: Fertigation and Foliar Use for Better Fruit Quality",
    date: "2026-08-09",
    author: "Chemicides International",
    image: fruitCollage,
    excerpt:
      "Learn how potassium thiosulfate supplies potassium and sulfur through fertigation, and how timing affects fruit development and quality.",
    content: [
      "Potassium thiosulfate delivers 36% potassium and 36% sulfur in a single liquid product, a combination particularly useful during fruit development, when potassium drives sugar accumulation and fruit sizing while sulfur supports the plant's broader metabolic and protein-building processes.",
      "Its high solubility and compatibility with drip irrigation make it a practical choice for growers running fertigation systems on fruit orchards and high-value vegetable crops, where precise, split applications through the season are easier to manage than periodic granular broadcasts.",
      "Because both potassium and sulfur demand rise sharply during fruit fill, timing applications to the flowering-through-fruit-development window generally gives the strongest response compared to earlier vegetative-stage applications.",
      "As with other thiosulfate-based liquids, growers should confirm compatibility before tank-mixing with other fertigation inputs, since combining incompatible products in a drip system can cause precipitation that clogs emitters rather than delivering nutrients to the root zone.",
    ],
  },
  {
    id: 31,
    slug: "calcium-polysulfide-liquid-sulfur-soil-amendment",
    title: "Calcium Polysulfide 22%: Liquid Sulfur for Alkaline Soil Correction",
    date: "2026-08-09",
    author: "Chemicides International",
    image: farmlandHills,
    excerpt:
      "High-pH soils lock up several key nutrients before crops can use them. Liquid calcium polysulfide is one of the more direct tools for lowering soil pH over time.",
    content: [
      "Much of Pakistan's cultivated land sits on alkaline to calcareous soils, where high pH reduces the availability of zinc, iron, manganese, and phosphorus even when those nutrients are present in adequate total quantity — a soil chemistry problem that fertilizer alone doesn't fully solve.",
      "Calcium polysulfide, applied as a 22% liquid sulfur product, works by releasing sulfur that oxidizes in the soil over time, gradually lowering soil pH and improving the availability of nutrients that are otherwise locked up in high-pH conditions.",
      "Because the pH-lowering effect builds up over repeated applications rather than happening instantly, calcium polysulfide is best used as a longer-term soil improvement strategy on fields with a persistent history of high pH and poor micronutrient response, rather than a quick fix for an already-visible deficiency.",
      "It's commonly applied alongside — not instead of — a regular fertilizer and micronutrient program; improving soil pH increases how efficiently nutrients like zinc sulphate are taken up, making the two approaches complementary on problem soils.",
    ],
  },
  {
    id: 32,
    slug: "copper-sulphate-fungicide-micronutrient-uses",
    title: "Copper Sulphate (Sapphire 25%): Fungicide and Micronutrient Uses in Crops",
    date: "2026-08-09",
    author: "Chemicides International",
    image: tomatoes,
    excerpt:
      "Copper sulphate does double duty — correcting copper deficiency and controlling a range of fungal diseases. Here's how growers use it for each purpose.",
    content: [
      "Copper sulphate serves two distinct roles in crop management: as a micronutrient source correcting copper deficiency in soil, and as a fungicide controlling fungal diseases like blight, mildew, and rust on the plant surface — the application method differs depending on which purpose it's being used for.",
      "As a soil amendment, Sapphire (25% Cu) corrects copper deficiency, which shows up as wilting, dieback of young shoots, and poor grain fill in cereal crops grown on copper-deficient soils, though true copper deficiency is less widespread than zinc deficiency across Pakistan's farmland.",
      "As a fungicide, dissolved copper sulphate is applied as a protective spray on vegetables, fruit trees, and other disease-prone crops, working by inhibiting fungal growth on contact rather than being absorbed systemically into the plant.",
      "Because copper sulphate is also used as an algaecide and can affect soil microbial activity at high rates, it's worth following label rates carefully and avoiding repeated high-dose applications to the same field year after year without a clear disease or deficiency justification.",
    ],
  },
  {
    id: 33,
    slug: "zinc-sulphate-dose-per-acre-rice-pakistan",
    title: "Zinc Sulphate Dose Per Acre for Rice in Pakistan: 21%, 27% and 33%",
    date: "2026-08-31",
    author: "Chemicides International Agronomy Team",
    image: ricePaddy,
    excerpt: "A practical rice zinc guide for Pakistan: compare 21%, 27% and 33% zinc sulphate, understand timing, and avoid costly rate-conversion mistakes.",
    intro: "The percentage on a zinc sulphate bag is its zinc concentration, not a universal field dose. Equal weights of 21% and 33% products do not deliver equal nutrition. Here is how to compare them and place zinc in a rice program without guessing.",
    sections: [
      { heading: "The quick concentration comparison", paragraphs: ["The Agriculture Department Punjab has recognized 5 kg packs of zinc sulphate 21%, 3.75 kg packs of 27%, and 3 kg packs of 33% for a rice micronutrient program. Each of those packs supplies approximately one kilogram of actual zinc: 1.05 kg, 1.01 kg and 0.99 kg respectively.", "These are useful nutrient-equivalence examples, not a universal prescription. Soil zinc, pH, formulation, field history and the registered label determine the appropriate rate."], bullets: ["5 kg of 21% supplies about 1.05 kg actual zinc.", "3.75 kg of 27% supplies about 1.01 kg actual zinc.", "3 kg of 33% supplies about 0.99 kg actual zinc."] },
      { heading: "When rice needs zinc most", paragraphs: ["Zinc deficiency in transplanted rice often appears two to three weeks after transplanting as bronzing, rusty-brown blotches, stunting and weak tillering. Farmers may call the condition Hudda or Khaira, but diagnosis should still rule out herbicide injury, root damage and other nutrient problems.", "Flooding changes soil chemistry and can reduce zinc availability. High-pH, calcareous soils add another risk. A field can therefore contain zinc yet fail to supply enough to young roots. Recurring symptoms in the same patches are a strong reason to test before the next crop."] },
      { heading: "Soil application or foliar rescue?", paragraphs: ["For a confirmed deficient field, uniform soil application before or around transplanting is the preventive route. Zinc moves little in soil, so piles and missed strips cause uneven access. Follow the registered label and local extension recommendation for rate and placement.", "A labelled foliar application can help an actively growing crop recover faster after symptoms appear, but it does not build the same soil reserve. Never copy a soil rate into a spray tank. Foliar concentration, water volume and compatibility must come from the foliar label."] },
      { heading: "How to choose the product", paragraphs: ["Chemicides offers Agro Gold (21% Zn), Saffaron (27% Zn) and Commander (33% Zn). Compare actual zinc delivered at the label rate, cost per treated acre, pack handling, solubility and application method. Higher concentration means less product for equivalent zinc; it does not make one option universally better.", "Before purchase, confirm the label states zinc percentage, formulation, registered crop use, batch details and directions. Persistent deficiency deserves a laboratory soil test or Agriculture Department advice rather than treatment based on leaf colour alone."] }
    ],
    faq: [
      { question: "Is 33% zinc sulphate stronger than 21%?", answer: "It is more concentrated by weight. Less product delivers the same actual zinc, but the field rate must still follow the product label and soil recommendation." },
      { question: "Can the soil dose be used as a foliar dose?", answer: "No. Soil and foliar rates are not interchangeable. Use only the foliar dilution and water volume on the registered label." },
      { question: "Should zinc be applied every rice season?", answer: "Not automatically. Zinc may have a residual soil effect. Use testing, crop history and local guidance to decide." }
    ],
    sources: [
      { label: "Agriculture Department Punjab — recognized zinc concentrations for rice", url: "https://agripunjab.gov.pk/system/files?file=EOIs+of+Rice+Seed%2C+Weedicides+%26+Micronutrients+under+National+Rice+Project+2023.pdf" },
      { label: "FAO — management of calcareous soils", url: "https://www.fao.org/soils-portal/soil-management/management-of-some-problem-soils/calcareous-soils/en/" }
    ],
    relatedSlugs: ["hudda-disease-in-rice-zinc-deficiency", "zinc-sulphate-21-vs-27-vs-33-percent", "best-time-to-apply-zinc-sulphate"]
  },
  {
    id: 34,
    slug: "zinc-deficiency-in-maize-symptoms-treatment-pakistan",
    title: "Zinc Deficiency in Maize: Symptoms, Causes and Treatment in Pakistan",
    date: "2026-08-30",
    author: "Chemicides International Agronomy Team",
    image: sugarcane,
    excerpt: "Identify zinc deficiency in maize, understand why calcareous soils raise the risk, and choose the right soil or foliar correction.",
    intro: "Maize is especially sensitive to low zinc availability. A sound diagnosis combines symptom location, field pattern and a soil or tissue test; colour alone can confuse zinc deficiency with root stress, cold injury or another nutrient shortage.",
    sections: [
      { heading: "What zinc deficiency looks like", paragraphs: ["Symptoms usually develop on younger leaves. Look for broad pale-yellow or whitish bands beside the midrib while the midrib and margins can remain greener. Plants may be shortened, with compressed internodes and delayed development.", "Deficiency is often stronger on eroded knolls, levelled areas, sandy patches or exposed calcareous subsoil. Compare affected and healthy plants of the same age and inspect roots before choosing a treatment."], bullets: ["White or yellow bands beside the midrib on young leaves", "Short plants and reduced internode length", "Patches associated with high-pH or exposed subsoil"] },
      { heading: "Why Pakistan's soils create risk", paragraphs: ["FAO guidance identifies maize as a crop in which zinc deficiency is pronounced on calcareous soils. High pH and calcium carbonate reduce soluble zinc. Heavy phosphorus application can aggravate a marginal zinc problem, so more phosphorus is not a substitute for diagnosis.", "Ask the laboratory which zinc extractant and interpretation range it uses. A raw number cannot be interpreted reliably without the method, soil type and local calibration."] },
      { heading: "Preventive soil zinc or foliar correction?", paragraphs: ["Soil-applied zinc sulphate, uniformly incorporated or placed according to the label, is the usual preventive option for confirmed deficiency. Because zinc has limited movement in soil, even coverage and placement near developing roots matter.", "Foliar zinc is faster in-season when deficiency is confirmed, but an excessive concentration or incompatible tank mix can injure leaves. Follow the maize label, observe compatibility instructions and spray during cool conditions."] },
      { heading: "A better buying decision", paragraphs: ["Map symptoms, inspect roots, rule out waterlogging and herbicide injury, and compare test results from affected and healthy zones. Then select a registered product whose route and timing match the problem.", "Chemicides' granular options are Agro Gold 21%, Saffaron 27% and Commander 33%; Scotch 10% is liquid zinc. Compare actual zinc, labelled route and cost per treated acre—not only the percentage on the pack."] }
    ],
    faq: [
      { question: "Which maize leaves show zinc deficiency first?", answer: "Younger leaves generally show pale bands beside the midrib, often with stunting and shortened internodes." },
      { question: "Can high phosphorus worsen zinc deficiency?", answer: "It can under some conditions. Use soil or tissue testing instead of assuming either nutrient is the only cause." },
      { question: "Is foliar zinc enough?", answer: "It can correct an in-season shortage quickly, but a confirmed soil deficiency also needs a longer-term fertility plan." }
    ],
    sources: [{ label: "FAO — calcareous soils and micronutrient management", url: "https://www.fao.org/soils-portal/soil-management/management-of-some-problem-soils/calcareous-soils/en/" }, { label: "FAO Soils Bulletin 21 — calcareous soils of Pakistan", url: "https://www.fao.org/4/aq284e/aq284e.pdf" }],
    relatedSlugs: ["best-zinc-fertilizer-for-alkaline-soils", "zinc-sulphate-21-vs-27-vs-33-percent", "how-to-mix-apply-liquid-zinc-10-percent"]
  },
  {
    id: 35,
    slug: "soil-test-report-guide-pakistan-fertilizer-plan",
    title: "How to Read a Soil Test Report in Pakistan and Build a Fertilizer Plan",
    date: "2026-08-29",
    author: "Chemicides International Agronomy Team",
    image: farmerField,
    excerpt: "Understand soil pH, EC, organic matter, phosphorus, potassium and micronutrients before turning laboratory numbers into fertilizer purchases.",
    intro: "A soil report is not a shopping list. It is a snapshot produced by a specific sampling and laboratory method. A defensible plan combines it with the crop, yield target, irrigation water, field history and local recommendations.",
    sections: [
      { heading: "Start with sampling quality", paragraphs: ["Divide land with different texture, slope, irrigation history or performance into separate zones. Take multiple cores in a zigzag at the laboratory's recommended depth, mix them in a clean container and submit a representative composite sample.", "Avoid fertilizer bands, manure piles, edges and unusual wet spots unless testing them separately. Record field, depth, date and previous crop. For trend monitoring, repeat the season, depth and laboratory where possible."] },
      { heading: "Read pH and electrical conductivity first", paragraphs: ["Soil pH controls nutrient availability; it is not a fertilizer rate. In alkaline, calcareous soil, zinc, iron and phosphorus can become less available even when their total quantity is not low.", "Electrical conductivity indicates soluble salts. A high result changes irrigation and amendment decisions and should not be treated with a generic acidifier before identifying salinity, sodicity, carbonate-rich soil or irrigation-water quality."] },
      { heading: "Organic matter, phosphorus and potassium", paragraphs: ["Low organic matter supports residue retention, suitable manure or compost and reduced disturbance. A humic product can complement this program but does not replace organic matter inputs.", "Available phosphorus and potassium depend on the extraction method. Use the laboratory's locally calibrated category, not a chart from another country. Excess phosphorus on calcareous soil may aggravate marginal zinc or iron availability."] },
      { heading: "Interpret micronutrients correctly", paragraphs: ["A micronutrient result should name its extraction method, such as DTPA or AB-DTPA. Critical values are method- and region-specific. If a report only says 'zinc low,' ask how that category was established.", "Tissue testing is useful when plant symptoms conflict with soil results. Soil estimates potential availability; tissue measures what entered the plant. Both require crop-stage and sampling context."] },
      { heading: "Convert the recommendation into product quantity", paragraphs: ["List every recommendation as actual nutrient per acre, then divide by the nutrient fraction on the guaranteed analysis. If a qualified recommendation calls for 1 kg actual zinc, that equals about 3.03 kg of a 33% product or 4.76 kg of a 21% product.", "Finally check the registered crop, route, rate and safety directions. Ask a local agronomist or Agriculture Department office to reconcile any conflict between the laboratory recommendation and label."] }
    ],
    faq: [
      { question: "Does low organic matter mean I need humic acid?", answer: "Humic products may complement a soil-health program, but they do not replace residues, manure or compost as sources of organic matter." },
      { question: "Can I compare test numbers from different laboratories?", answer: "Only cautiously. Extraction methods and interpretation ranges can differ; consistent sampling and laboratory methods make trends more meaningful." },
      { question: "How often should soil be tested?", answer: "It depends on crop intensity and management. Test often enough to track change, using a consistent season, depth and method; your laboratory can recommend an interval." }
    ],
    sources: [{ label: "FAO — calcareous soil management", url: "https://www.fao.org/soils-portal/soil-management/management-of-some-problem-soils/calcareous-soils/en/" }, { label: "FAO — calcareous soils of Pakistan", url: "https://www.fao.org/4/x5868e/x5868e03.htm" }],
    relatedSlugs: ["choosing-the-right-fertilizer-for-your-soil", "best-zinc-fertilizer-for-alkaline-soils", "humic-acid-soil-health-structure"]
  },
];

export default blogs;
