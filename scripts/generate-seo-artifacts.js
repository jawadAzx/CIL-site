// Runs before every build (see "prebuild" in package.json).
// Reads src/data/blogs.js — the single source of truth for blog content — and:
//   1. writes public/sitemap.xml
//   2. writes the route list react-snap should prerender into package.json's "reactSnap.include"
// This keeps the sitemap and prerendered routes in sync with blogs.js without manual upkeep.
process.env.NODE_ENV = process.env.NODE_ENV || 'production';

const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');

// Keep in sync with src/seo/config.js SITE_URL.
const SITE_URL = 'https://www.chemicides.com';

// blogs.js uses ES module `import`/`export default` syntax and imports image files.
// Transpile it with the project's own babel preset, then stub out image extensions
// so requiring the transpiled module doesn't try to parse binary files as JS.
['.jpg', '.jpeg', '.png', '.svg', '.webp'].forEach((ext) => {
  require.extensions[ext] = (mod) => {
    mod.exports = `/static/media/placeholder${ext}`;
  };
});

const blogsSourcePath = path.join(__dirname, '../src/data/blogs.js');
const { code } = babel.transformFileSync(blogsSourcePath, {
  presets: [require.resolve('babel-preset-react-app')],
  babelrc: false,
  configFile: false,
});

// Written alongside the original file so its relative asset imports still resolve.
const tmpPath = path.join(__dirname, '../src/data/.blogs.generated.js');
fs.writeFileSync(tmpPath, code);
let blogs;
try {
  blogs = require(tmpPath).default;
} finally {
  fs.unlinkSync(tmpPath);
}

const staticRoutes = [
  { route: '/', changefreq: 'weekly', priority: '1.0' },
  { route: '/wwe', changefreq: 'monthly', priority: '0.6' },
  { route: '/granular', changefreq: 'monthly', priority: '0.8' },
  { route: '/blogs', changefreq: 'daily', priority: '0.8' },
  { route: '/contact', changefreq: 'yearly', priority: '0.5' },
];

const today = new Date().toISOString().split('T')[0];

const urlEntries = [
  ...staticRoutes.map(
    ({ route, changefreq, priority }) =>
      `  <url>\n    <loc>${SITE_URL}${route}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`
  ),
  ...blogs.map(
    (post) =>
      `  <url>\n    <loc>${SITE_URL}/blogs/${post.slug}</loc>\n    <lastmod>${post.date}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>`
  ),
];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries.join('\n')}\n</urlset>\n`;

fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemapXml);
console.log(`[seo] sitemap.xml written with ${urlEntries.length} URLs`);

// Update reactSnap.include in package.json so every static route and blog post
// gets prerendered, without needing crawlable <a href> links to discover them all.
const pkgPath = path.join(__dirname, '../package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

const include = [
  ...staticRoutes.map((r) => r.route),
  ...blogs.map((post) => `/blogs/${post.slug}`),
];

pkg.reactSnap = {
  ...(pkg.reactSnap || {}),
  include,
};

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
console.log(`[seo] package.json reactSnap.include updated with ${include.length} routes`);
