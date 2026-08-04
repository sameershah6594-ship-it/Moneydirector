import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search as SearchIcon } from 'lucide-react';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { allArticles } from '@/data/articles-index';
import { categories } from '@/data/categories';
import { ArticleCardGrid } from '@/components/ArticleCard';
import AdBanner from '@/components/AdBanner';

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
      
      {/* Category Filter Chips */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button onClick={() => { setCat(''); setPage(1); }} className={`chip ${!cat ? 'bg-brand-600 text-white' : 'bg-ink-100 dark:bg-ink-700 text-ink-600 dark:text-ink-300'}`}>All</button>
        {categories.map((c) => <button key={c.id} onClick={() => { setCat(c.id); setPage(1); }} className={`chip ${cat === c.id ? 'bg-brand-600 text-white' : 'bg-ink-100 dark:bg-ink-700 text-ink-600 dark:text-ink-300 hover:bg-ink-200'}`}>{c.name}</button>)}
      </div>

      {/* Top Leaderboard Ad Banner (728x90) */}
      <div className="my-6 flex justify-center">
        <AdBanner adKey="c060f5177a7056171ced5eb7d122263b" width={728} height={90} />
      </div>

      {/* Articles Grid */}
      <ArticleCardGrid articles={shown} />

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => <button key={p} onClick={() => setPage(p)} className={`w-10 h-10 rounded-lg font-semibold text-sm ${p === page ? 'bg-brand-600 text-white' : 'bg-ink-100 dark:bg-ink-700 text-ink-600 dark:text-ink-300 hover:bg-ink-200'}`}>{p}</button>)}
        </div>
      )}

      {/* All Ad Banners Section */}
      <div className="space-y-6 my-12 border-t border-ink-100 dark:border-ink-800 pt-8">
        <div className="flex justify-center">
          <AdBanner adKey="a5c311e35c3cc50874ca5095d1067bd7" width={468} height={60} />
        </div>
        <div className="flex justify-center">
          <AdBanner adKey="28b1ef1ed72a56336e840b4f6320c007" width={320} height={50} />
        </div>
        <div className="flex justify-center">
          <AdBanner adKey="f8859593b9fae7463829294cd25ec77c" width={300} height={250} />
        </div>
        <div className="flex justify-center">
          <AdBanner adKey="adac8595e5b09981e190ac3b9a784240" width={160} height={300} />
        </div>
        <div className="flex justify-center">
          <AdBanner adKey="f879294844b6d212e1556d3aa4f17bf5" width={160} height={600} />
        </div>
      </div>
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
      
      {/* Top Leaderboard Banner for Search */}
      <div className="my-6 flex justify-center">
        <AdBanner adKey="c060f5177a7056171ced5eb7d122263b" width={728} height={90} />
      </div>

      {results.length > 0 ? <ArticleCardGrid articles={results} /> : q ? <p className="text-ink-400">No articles found. Try different keywords.</p> : <p className="text-ink-400">Start typing in the search bar above.</p>}

      {/* Ad Banners */}
      <div className="space-y-6 my-12 border-t border-ink-100 dark:border-ink-800 pt-8">
        <div className="flex justify-center">
          <AdBanner adKey="f8859593b9fae7463829294cd25ec77c" width={300} height={250} />
        </div>
        <div className="flex justify-center">
          <AdBanner adKey="a5c311e35c3cc50874ca5095d1067bd7" width={468} height={60} />
        </div>
        <div className="flex justify-center">
          <AdBanner adKey="28b1ef1ed72a56336e840b4f6320c007" width={320} height={50} />
        </div>
      </div>
    </div>
  );
}
