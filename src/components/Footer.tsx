import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Mail, Rss } from 'lucide-react';
import { Logo } from './Logo';
import { categories } from '@/data/categories';
import { calculators } from '@/data/calculators';
import { allArticles } from '@/data/articles-index';

export function Footer() {
  const latest = [...allArticles].sort((a, b) => b.publishedDate.localeCompare(a.publishedDate)).slice(0, 4);
  return (
    <footer className="bg-ink-900 dark:bg-ink-950 text-ink-300 mt-16">
      <div className="container-wide py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4"><Logo className="text-white" /></div>
            <p className="text-sm text-ink-400 leading-relaxed mb-4">
              Money Director provides free financial calculators, guides, and articles to help you make smarter money decisions. Our content is educational and should not be considered financial advice.
            </p>
            <div className="flex gap-3">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-ink-800 hover:bg-brand-600 flex items-center justify-center transition-colors" aria-label="Twitter"><Twitter size={16} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-ink-800 hover:bg-brand-600 flex items-center justify-center transition-colors" aria-label="LinkedIn"><Linkedin size={16} /></a>
              <a href="mailto:contact@moneydirector.com" className="w-9 h-9 rounded-lg bg-ink-800 hover:bg-brand-600 flex items-center justify-center transition-colors" aria-label="Email"><Mail size={16} /></a>
              <Link to="/rss.xml" className="w-9 h-9 rounded-lg bg-ink-800 hover:bg-brand-600 flex items-center justify-center transition-colors" aria-label="RSS"><Rss size={16} /></Link>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/authors" className="hover:text-white transition-colors">Editorial Team</Link></li>
              <li><Link to="/editorial-policy" className="hover:text-white transition-colors">Editorial Policy</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/calculators" className="hover:text-white transition-colors">All Calculators</Link></li>
              <li><Link to="/articles" className="hover:text-white transition-colors">All Articles</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Top Categories</h3>
            <ul className="space-y-2 text-sm">
              {categories.slice(0, 8).map((c) => (
                <li key={c.id}><Link to={`/categories/${c.slug}`} className="hover:text-white transition-colors">{c.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Latest Articles</h3>
            <ul className="space-y-3 text-sm">
              {latest.map((a) => (
                <li key={a.id}><Link to={`/articles/${a.slug}`} className="hover:text-white transition-colors line-clamp-2">{a.title}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-ink-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-ink-500">
          <p>&copy; {new Date().getFullYear()} Money Director. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms</Link>
            <Link to="/disclaimer" className="hover:text-white">Disclaimer</Link>
            <Link to="/cookie-policy" className="hover:text-white">Cookie Policy</Link>
            <Link to="/accessibility" className="hover:text-white">Accessibility</Link>
            <Link to="/dmca" className="hover:text-white">DMCA</Link>
            <Link to="/sitemap" className="hover:text-white">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
