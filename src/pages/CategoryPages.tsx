import { Link, useParams } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { categories, getCategoryBySlug } from '@/data/categories';
import { getArticlesByCategory } from '@/data/articles-index';
import { CategoryCard } from '@/components/CategoryCard';
import { ArticleCardGrid } from '@/components/ArticleCard';
import { NotFoundPage } from './NotFoundPage';

export function CategoriesPage() {
  useDocumentMeta({ title: 'Finance Categories | Money Director', description: 'Browse all finance categories on Money Director, from banking and investing to retirement and debt management.', canonical: '/categories' });
  return (
    <div className="container-wide py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-ink-900 dark:text-white mb-2">Finance Categories</h1>
      <p className="text-ink-500 dark:text-ink-400 mb-10">Explore {categories.length} finance categories with in-depth articles and guides for every stage of your financial journey.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((c) => <CategoryCard key={c.id} {...c} />)}
      </div>
    </div>
  );
}

export function CategoryPage() {
  const { slug } = useParams();
  const category = slug ? getCategoryBySlug(slug) : undefined;
  useDocumentMeta({ title: category ? `${category.name} | Money Director` : 'Category Not Found | Money Director', description: category?.longDescription || 'The category you are looking for could not be found.', canonical: slug ? `/categories/${slug}` : '/categories' });
  if (!category) return <NotFoundPage />;
  const articles = getArticlesByCategory(category.id);
  return (
    <div className="container-wide py-12 sm:py-16">
      <nav className="flex items-center gap-1.5 text-xs text-ink-400 mb-6">
        <Link to="/" className="hover:text-brand-500">Home</Link><ChevronRight size={14} />
        <Link to="/categories" className="hover:text-brand-500">Categories</Link><ChevronRight size={14} />
        <span className="text-ink-600 dark:text-ink-300">{category.name}</span>
      </nav>
      <div className="rounded-2xl overflow-hidden aspect-[16/6] mb-8 bg-ink-100 dark:bg-ink-700">
        <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-ink-900 dark:text-white mb-4">{category.name}</h1>
      <p className="text-ink-500 dark:text-ink-400 mb-8 max-w-3xl">{category.longDescription}</p>
      <h2 className="text-xl font-bold text-ink-900 dark:text-white mb-6">Articles in {category.name}</h2>
      {articles.length > 0 ? <ArticleCardGrid articles={articles} /> : <p className="text-ink-400">No articles in this category yet.</p>}
    </div>
  );
}
