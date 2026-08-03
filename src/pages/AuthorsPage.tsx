import { Link, useParams } from 'react-router-dom';
import { Twitter, Linkedin, Mail, ArrowLeft } from 'lucide-react';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { authors, getAuthorById } from '@/data/authors';
import { getArticlesByAuthor } from '@/data/articles-index';
import { ArticleCardGrid } from '@/components/ArticleCard';
import { NotFoundPage } from './NotFoundPage';

export function AuthorsPage() {
  useDocumentMeta({ title: 'Editorial Team | Money Director', description: 'Meet the Money Director editorial team of finance writers who create our calculators, guides, and articles.', canonical: '/authors' });
  return (
    <div className="container-narrow py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-ink-900 dark:text-white mb-2">Editorial Team</h1>
      <p className="text-ink-500 dark:text-ink-400 mb-10">Our team of dedicated finance writers brings diverse expertise across personal finance topics, from banking and investing to insurance and budgeting.</p>
      <div className="space-y-6">
        {authors.map((a) => {
          const count = getArticlesByAuthor(a.id).length;
          return (
            <div key={a.id} className="card p-6 flex flex-col sm:flex-row gap-6">
              <img src={a.photo} alt={a.name} className="w-24 h-24 rounded-2xl object-cover shrink-0" />
              <div className="flex-1">
                <Link to={`/authors/${a.id}`} className="text-xl font-bold text-ink-900 dark:text-white hover:text-brand-500">{a.name}</Link>
                <p className="text-sm text-brand-600 dark:text-brand-400 font-semibold">{a.role}</p>
                <p className="text-sm text-ink-500 dark:text-ink-400 mt-2">{a.bio}</p>
                <div className="flex items-center gap-2 mt-3">
                  <span className="chip bg-ink-100 dark:bg-ink-700 text-ink-600 dark:text-ink-300">{count} articles</span>
                  {a.expertise.slice(0, 3).map((e) => <span key={e} className="chip bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">{e}</span>)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function AuthorProfilePage() {
  const { id } = useParams();
  const author = id ? getAuthorById(id) : undefined;
  useDocumentMeta({ title: author ? `${author.name} | Money Director` : 'Author Not Found | Money Director', description: author?.bio || 'Author profile not found.', canonical: id ? `/authors/${id}` : '/authors' });
  if (!author) return <NotFoundPage />;
  const articles = getArticlesByAuthor(author.id);
  return (
    <div className="container-narrow py-12 sm:py-16">
      <Link to="/authors" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 dark:text-brand-400 mb-6 hover:underline"><ArrowLeft size={16} /> All authors</Link>
      <div className="flex flex-col sm:flex-row gap-6 mb-10">
        <img src={author.photo} alt={author.name} className="w-28 h-28 rounded-2xl object-cover shrink-0" />
        <div className="flex-1">
          <h1 className="text-3xl font-extrabold text-ink-900 dark:text-white">{author.name}</h1>
          <p className="text-brand-600 dark:text-brand-400 font-semibold">{author.role}</p>
          <p className="text-ink-500 dark:text-ink-400 mt-3">{author.longBio}</p>
          <div className="flex items-center gap-2 mt-4">
            {author.social.twitter && <a href={`https://twitter.com/${author.social.twitter}`} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-ink-100 dark:bg-ink-700 hover:bg-brand-600 hover:text-white flex items-center justify-center transition-colors"><Twitter size={16} /></a>}
            {author.social.linkedin && <a href={`https://linkedin.com/in/${author.social.linkedin}`} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-ink-100 dark:bg-ink-700 hover:bg-brand-600 hover:text-white flex items-center justify-center transition-colors"><Linkedin size={16} /></a>}
            {author.social.email && <a href={`mailto:${author.social.email}`} className="w-9 h-9 rounded-lg bg-ink-100 dark:bg-ink-700 hover:bg-brand-600 hover:text-white flex items-center justify-center transition-colors"><Mail size={16} /></a>}
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {author.expertise.map((e) => <span key={e} className="chip bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">{e}</span>)}
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-ink-900 dark:text-white mb-6">Articles by {author.name}</h2>
      {articles.length > 0 ? <ArticleCardGrid articles={articles} /> : <p className="text-ink-400">No articles yet.</p>}
    </div>
  );
}
