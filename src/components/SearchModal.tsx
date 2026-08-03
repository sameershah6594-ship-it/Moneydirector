import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { allArticles } from '@/data/articles-index';
import { categories } from '@/data/categories';

export function SearchModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<{ type: 'article' | 'category'; title: string; slug: string; desc: string }[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
    else { setQuery(''); setResults([]); }
  }, [open]);

  useEffect(() => {
    if (!query.trim()) { setResults([]); return; }
    const q = query.toLowerCase();
    const arts = allArticles
      .filter((a) => a.title.toLowerCase().includes(q) || a.tags.some((t) => t.includes(q)) || a.excerpt.toLowerCase().includes(q))
      .slice(0, 6)
      .map((a) => ({ type: 'article' as const, title: a.title, slug: a.slug, desc: a.excerpt }));
    const cats = categories
      .filter((c) => c.name.toLowerCase().includes(q))
      .slice(0, 3)
      .map((c) => ({ type: 'category' as const, title: c.name, slug: c.slug, desc: c.description }));
    setResults([...arts, ...cats]);
  }, [query]);

  const go = (r: { type: string; slug: string }) => {
    navigate(r.type === 'article' ? `/articles/${r.slug}` : `/categories/${r.slug}`);
    onClose();
  };

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[200] flex items-start justify-center pt-20 px-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div className="relative w-full max-w-2xl bg-white dark:bg-ink-800 rounded-2xl shadow-card overflow-hidden animate-slide-down" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-3 px-5 py-4 border-b border-ink-200 dark:border-ink-700">
          <Search size={20} className="text-ink-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter' && results[0]) go(results[0]); }}
            placeholder="Search articles, categories..."
            className="flex-1 bg-transparent outline-none text-ink-900 dark:text-ink-100 placeholder-ink-400"
          />
          <button onClick={onClose} className="text-ink-400 hover:text-ink-600" aria-label="Close search"><X size={20} /></button>
        </div>
        {results.length > 0 && (
          <div className="max-h-96 overflow-y-auto">
            {results.map((r, i) => (
              <button key={i} onClick={() => go(r)} className="w-full text-left px-5 py-3 hover:bg-ink-50 dark:hover:bg-ink-700/50 border-b border-ink-100 dark:border-ink-700/50 last:border-0">
                <div className="flex items-center gap-2">
                  <span className="chip bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">{r.type}</span>
                  <span className="font-semibold text-ink-900 dark:text-ink-100 text-sm">{r.title}</span>
                </div>
                <p className="text-xs text-ink-500 dark:text-ink-400 mt-1 line-clamp-1">{r.desc}</p>
              </button>
            ))}
          </div>
        )}
        {query && results.length === 0 && (
          <div className="px-5 py-8 text-center text-ink-400 text-sm">No results for "{query}"</div>
        )}
        {!query && (
          <div className="px-5 py-4">
            <p className="text-xs text-ink-400 mb-2">Popular searches:</p>
            <div className="flex flex-wrap gap-2">
              {['Budgeting', 'Credit Score', 'Mortgage', 'Retirement', 'Investing'].map((t) => (
                <button key={t} onClick={() => setQuery(t.toLowerCase())} className="chip bg-ink-100 dark:bg-ink-700 text-ink-700 dark:text-ink-200 hover:bg-ink-200">{t}</button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
