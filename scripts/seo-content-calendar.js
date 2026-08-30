const fs = require('fs');
const path = require('path');

const backlog = [
  { cluster: 'Zinc', keyword: 'zinc deficiency in sugarcane Pakistan', intent: 'diagnosis', product: 'Agro Gold / Commander / Scotch' },
  { cluster: 'Zinc', keyword: 'zinc sulphate for cotton per acre Pakistan', intent: 'application', product: 'Agro Gold / Saffaron / Commander' },
  { cluster: 'Boron', keyword: 'boron deficiency in sunflower symptoms', intent: 'diagnosis', product: 'Bukhara 5%' },
  { cluster: 'Potassium', keyword: 'potash fertilizer for potato tuber bulking', intent: 'application', product: 'Chinar 30%' },
  { cluster: 'Sulfur', keyword: 'sulfur deficiency in wheat vs nitrogen deficiency', intent: 'comparison', product: 'Ammonium Thiosulfate' },
  { cluster: 'Soil health', keyword: 'saline vs sodic soil difference Pakistan', intent: 'education', product: 'Nappier / Marco Polo' },
  { cluster: 'Micronutrients', keyword: 'iron deficiency chlorosis in citrus Pakistan', intent: 'diagnosis', product: 'Samarqand / Micro Gold Plus' },
  { cluster: 'Commercial', keyword: 'fertilizer manufacturer Pakistan micronutrients', intent: 'supplier research', product: 'Chemicides range' },
];

const now = new Date();
const start = Date.UTC(now.getUTCFullYear(), 0, 1);
const week = Math.ceil((((now - start) / 86400000) + new Date(start).getUTCDay() + 1) / 7);
const item = backlog[(week - 1) % backlog.length];
const title = `SEO content brief ${now.getUTCFullYear()}-W${String(week).padStart(2, '0')}: ${item.keyword}`;
const body = `# ${title}\n\n**Primary keyword:** ${item.keyword}\n**Search intent:** ${item.intent}\n**Content cluster:** ${item.cluster}\n**Relevant product:** ${item.product}\n\n## Required before publishing\n\n- [ ] Inspect the current Google results and identify the unanswered question\n- [ ] Verify agronomic claims against Pakistan government, FAO, university extension, or peer-reviewed sources\n- [ ] Write a direct answer, diagnostic table, field checklist, FAQs, and clear label-safety language\n- [ ] Link to at least three relevant Chemicides guides and one relevant product category\n- [ ] Add descriptive image alt text and a unique meta description\n- [ ] Run \`npm run seo:check\` and a full production prerender build\n- [ ] Request indexing in Google Search Console after deployment\n`;

const output = path.join(__dirname, '../seo-weekly-brief.md');
fs.writeFileSync(output, body);
console.log(title);
