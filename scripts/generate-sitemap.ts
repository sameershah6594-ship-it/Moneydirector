import { writeFileSync } from 'fs';
import { categories } from '../src/data/categories';
import { allArticles } from '../src/data/articles-index';
import { calculators } from '../src/data/calculators';
import { authors } from '../src/data/authors';

// Change this to your actual domain when deploying
const BASE = process.env.SITE_URL || 'https://moneydirector.com';

const urls: string[] = [`${BASE}/`];
const staticPages = ['/about', '/contact', '/calculators', '/categories', '/articles', '/authors', '/search', '/guides', '/resources', '/privacy', '/terms', '/disclaimer', '/editorial-policy', '/cookie-policy', '/accessibility', '/dmca', '/sitemap'];
staticPages.forEach((p) => urls.push(`${BASE}/#${p}`));
categories.forEach((c) => urls.push(`${BASE}/#/categories/${c.slug}`));
calculators.forEach((c) => urls.push(`${BASE}/#/calculators/${c.slug}`));
authors.forEach((a) => urls.push(`${BASE}/#/authors/${a.id}`));
allArticles.forEach((a) => urls.push(`${BASE}/#/articles/${a.slug}`));

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`).join('\n')}
</urlset>`;

writeFileSync('public/sitemap.xml', xml);
console.log(`Sitemap generated with ${urls.length} URLs`);
