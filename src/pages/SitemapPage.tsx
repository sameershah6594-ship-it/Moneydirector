import { Link } from 'react-router-dom';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { categories } from '@/data/categories';
import { allArticles } from '@/data/articles-index';
import { calculators } from '@/data/calculators';

export function SitemapPage() {
  useDocumentMeta({ title: 'Sitemap | Money Director', description: 'Browse the complete sitemap of Money Director, including all pages, categories, articles, and calculators.', canonical: '/sitemap' });
  return (
    <div className="container-wide py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-ink-900 dark:text-white mb-8">Sitemap</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="card p-6">
          <h2 className="font-bold text-ink-900 dark:text-ink-50 mb-3">Main Pages</h2>
          <ul className="space-y-2 text-sm">{[
            { l: 'Home', p: '/' }, { l: 'About', p: '/about' }, { l: 'Contact', p: '/contact' },
            { l: 'Editorial Team', p: '/authors' }, { l: 'All Articles', p: '/articles' },
            { l: 'All Categories', p: '/categories' }, { l: 'All Calculators', p: '/calculators' },
            { l: 'Search', p: '/search' }, { l: 'Guides', p: '/guides' }, { l: 'Resources', p: '/resources' },
          ].map((i) => <li key={i.p}><Link to={i.p} className="text-brand-600 dark:text-brand-400 hover:underline">{i.l}</Link></li>)}</ul>
        </div>
        <div className="card p-6">
          <h2 className="font-bold text-ink-900 dark:text-ink-50 mb-3">Legal</h2>
          <ul className="space-y-2 text-sm">{[
            { l: 'Privacy Policy', p: '/privacy' }, { l: 'Terms of Service', p: '/terms' },
            { l: 'Disclaimer', p: '/disclaimer' }, { l: 'Editorial Policy', p: '/editorial-policy' },
            { l: 'Cookie Policy', p: '/cookie-policy' }, { l: 'Accessibility', p: '/accessibility' },
            { l: 'DMCA', p: '/dmca' },
          ].map((i) => <li key={i.p}><Link to={i.p} className="text-brand-600 dark:text-brand-400 hover:underline">{i.l}</Link></li>)}</ul>
        </div>
        <div className="card p-6">
          <h2 className="font-bold text-ink-900 dark:text-ink-50 mb-3">Calculators</h2>
          <ul className="space-y-1 text-sm">{calculators.map((c) => <li key={c.id}><Link to={`/calculators/${c.slug}`} className="text-brand-600 dark:text-brand-400 hover:underline">{c.name}</Link></li>)}</ul>
        </div>
        <div className="card p-6">
          <h2 className="font-bold text-ink-900 dark:text-ink-50 mb-3">Categories</h2>
          <ul className="space-y-2 text-sm">{categories.map((c) => <li key={c.id}><Link to={`/categories/${c.slug}`} className="text-brand-600 dark:text-brand-400 hover:underline">{c.name}</Link></li>)}</ul>
        </div>
        <div className="card p-6 sm:col-span-2">
          <h2 className="font-bold text-ink-900 dark:text-ink-50 mb-3">All Articles</h2>
          <ul className="space-y-1 text-sm grid sm:grid-cols-2 gap-x-4">{allArticles.map((a) => <li key={a.id}><Link to={`/articles/${a.slug}`} className="text-brand-600 dark:text-brand-400 hover:underline line-clamp-1">{a.title}</Link></li>)}</ul>
        </div>
      </div>
    </div>
  );
}
