import { Link } from 'react-router-dom';
import type { Article } from '@/data/types';
import { getAuthorById } from '@/data/authors';
import { getCategoryById } from '@/data/categories';

export function ArticleCard({ article, compact = false }: { article: Article; compact?: boolean }) {
  const author = getAuthorById(article.authorId);
  const category = getCategoryById(article.categoryId);
  return (
    <Link to={`/articles/${article.slug}`} className="group card overflow-hidden hover:shadow-card transition-all duration-300 flex flex-col">
      <div className="aspect-[16/10] overflow-hidden bg-ink-100 dark:bg-ink-700">
        <img src={article.featuredImage} alt={article.imageAlt} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        {category && (
          <span className="chip bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300 mb-2 self-start">{category.name}</span>
        )}
        <h3 className={`font-bold text-ink-900 dark:text-ink-50 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors ${compact ? 'text-base line-clamp-2' : 'text-lg line-clamp-2'}`}>{article.title}</h3>
        {!compact && <p className="text-sm text-ink-500 dark:text-ink-400 mt-2 line-clamp-2">{article.excerpt}</p>}
        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-ink-100 dark:border-ink-700/50 text-xs text-ink-400 mt-auto">
          {author && <span>{author.name}</span>}
          <span>&bull;</span>
          <span>{article.readingTime} min read</span>
        </div>
      </div>
    </Link>
  );
}

export function ArticleCardGrid({ articles, compact = false }: { articles: Article[]; compact?: boolean }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {articles.map((a) => <ArticleCard key={a.id} article={a} compact={compact} />)}
    </div>
  );
}
