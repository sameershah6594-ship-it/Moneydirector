import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search as SearchIcon } from 'lucide-react';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { allArticles } from '@/data/articles-index';
import { categories } from '@/data/categories';
import { ArticleCardGrid } from '@/components/ArticleCard';

export function AllArticlesPage() {
  useDocumentMeta({ title: 'All Articles | Money Director', description: 'Browse all finance articles on Money Director covering banking, loans, credit cards, investing, retirement, taxes, and more.', canonical: '/articles' });
  const [page, setPage] = useState(1);
  const [cat, setCat] = useState('');
  const perPage = 9;
  const filtered = useMemo(() => cat ? allArticles.filter((a) => a.categoryId === cat) : allArticles, [cat]);
  const totalPages = Math.ceil(filtered.length / perPage);
  const shown = filtered.slice((page - 1) * perPage, page * perPage);
  return (
    <div className="container-wide py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-ink-900 dark:text-white mb-2">All Articles</h1>
      <p className="text-ink-500 dark:text-ink-400 mb-8">Browse our complete library of finance articles across {categories.length} categories.</p>
      <div className="flex flex-wrap gap-2 mb-8">
        <button onClick={() => { setCat(''); setPage(1); }} className={`chip ${!cat ? 'bg-brand-600 text-white' : 'bg-ink-100 dark:bg-ink-700 text-ink-600 dark:text-ink-300'}`}>All</button>
        {categories.map((c) => <button key={c.id} onClick={() => { setCat(c.id); setPage(1); }} className={`chip ${cat === c.id ? 'bg-brand-600 text-white' : 'bg-ink-100 dark:bg-ink-700 text-ink-600 dark:text-ink-300 hover:bg-ink-200'}`}>{c.name}</button>)}
      </div>
      <ArticleCardGrid articles={shown} />
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => <button key={p} onClick={() => setPage(p)} className={`w-10 h-10 rounded-lg font-semibold text-sm ${p === page ? 'bg-brand-600 text-white' : 'bg-ink-100 dark:bg-ink-700 text-ink-600 dark:text-ink-300 hover:bg-ink-200'}`}>{p}</button>)}
        </div>
      )}
    </div>
  );
}

export function SearchPage() {
  const [params] = useSearchParams();
  const q = params.get('q') || '';
  useDocumentMeta({ title: `Search: ${q} | Money Director`, description: `Search results for ${q} on Money Director.`, canonical: '/search' });
  const results = useMemo(() => {
    if (!q) return [];
    const query = q.toLowerCase();
    return allArticles.filter((a) => a.title.toLowerCase().includes(query) || a.excerpt.toLowerCase().includes(query) || a.tags.some((t) => t.includes(query)));
  }, [q]);
  return (
    <div className="container-wide py-12 sm:py-16">
      <div className="flex items-center gap-3 mb-8">
        <SearchIcon className="text-brand-500" />
        <h1 className="text-2xl sm:text-3xl font-extrabold text-ink-900 dark:text-white">Search Results</h1>
      </div>
      <p className="text-ink-500 dark:text-ink-400 mb-6">{q ? `${results.length} results for "${q}"` : 'Enter a search term to find articles.'}</p>
      {results.length > 0 ? <ArticleCardGrid articles={results} /> : q ? <p className="text-ink-400">No articles found. Try different keywords.</p> : <p className="text-ink-400">Start typing in the search bar above.</p>}
    </div>
  );
}
