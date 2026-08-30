process.env.NODE_ENV = process.env.NODE_ENV || 'production';

const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');

['.jpg', '.jpeg', '.png', '.svg', '.webp'].forEach((ext) => {
  require.extensions[ext] = (mod) => { mod.exports = `/static/media/placeholder${ext}`; };
});

const source = path.join(__dirname, '../src/data/blogs.js');
const temporary = path.join(__dirname, '../src/data/.blogs.seo-check.js');
const { code } = babel.transformFileSync(source, { presets: [require.resolve('babel-preset-react-app')], babelrc: false, configFile: false });
fs.writeFileSync(temporary, code);

let blogs;
try { blogs = require(temporary).default; } finally { fs.unlinkSync(temporary); }

const errors = [];
const slugs = new Set();
const ids = new Set();
for (const post of blogs) {
  if (slugs.has(post.slug)) errors.push(`Duplicate slug: ${post.slug}`);
  if (ids.has(post.id)) errors.push(`Duplicate id: ${post.id}`);
  slugs.add(post.slug); ids.add(post.id);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(post.slug)) errors.push(`Invalid slug: ${post.slug}`);
  if (!post.title || !post.excerpt || !post.date || !post.image) errors.push(`Missing required metadata: ${post.slug}`);
  if (post.excerpt && post.excerpt.length > 170) errors.push(`Meta description over 170 characters: ${post.slug}`);
  for (const related of post.relatedSlugs || []) if (!blogs.some((candidate) => candidate.slug === related)) errors.push(`Broken related link in ${post.slug}: ${related}`);
  for (const sourceItem of post.sources || []) if (!/^https:\/\//.test(sourceItem.url)) errors.push(`Non-HTTPS source in ${post.slug}`);
}

if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`[seo] ${blogs.length} posts passed metadata, slug, source, and internal-link checks`);
