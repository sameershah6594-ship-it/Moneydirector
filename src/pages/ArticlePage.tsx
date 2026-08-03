import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Calendar, Clock, Tag, ArrowLeft, Share2, Link2, Check, ChevronRight, Twitter, Linkedin, Mail } from 'lucide-react';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { getArticleBySlug, getRelatedArticles } from '@/data/articles-index';
import { getAuthorById } from '@/data/authors';
import { getCategoryById } from '@/data/categories';
import { ArticleCardGrid } from '@/components/ArticleCard';
import { NotFoundPage } from './NotFoundPage';

export function ArticlePage() {
  const { slug } = useParams();
  const [copied, setCopied] = useState(false);
  const [progress, setProgress] = useState(0);

  const article = slug ? getArticleBySlug(slug) : undefined;
  const author = article ? getAuthorById(article.authorId) : undefined;
  const category = article ? getCategoryById(article.categoryId) : undefined;
  const related = article ? getRelatedArticles(article, 3) : [];

  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById('article-content');
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [slug]);

  useDocumentMeta({
    title: article ? article.metaTitle : 'Article Not Found | Money Director',
    description: article ? article.metaDescription : 'The article you are looking for could not be found.',
    canonical: slug ? `/articles/${slug}` : '/articles',
    ogImage: article?.featuredImage,
    jsonLd: article ? {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.title,
      description: article.metaDescription,
      image: article.featuredImage,
      author: { '@type': 'Person', name: author?.name || 'Money Director' },
      publisher: { '@type': 'Organization', name: 'Money Director' },
      datePublished: article.publishedDate,
      dateModified: article.updatedDate,
      mainEntityOfPage: { '@type': 'WebPage', '@id': `https://moneydirector.com/articles/${article.slug}` },
    } : undefined,
  });

  if (!article) return <NotFoundPage />;

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const copyLink = () => { navigator.clipboard.writeText(shareUrl); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  const formatDate = (d: string) => new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div>
      <div className="reading-progress" style={{ width: `${progress}%` }} />
      <div className="container-narrow py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-ink-400 mb-6 flex-wrap">
          <Link to="/" className="hover:text-brand-500">Home</Link><ChevronRight size={14} />
          <Link to="/articles" className="hover:text-brand-500">Articles</Link><ChevronRight size={14} />
          {category && <><Link to={`/categories/${category.slug}`} className="hover:text-brand-500">{category.name}</Link><ChevronRight size={14} /></>}
          <span className="text-ink-600 dark:text-ink-300 truncate">{article.title}</span>
        </nav>

        {/* Header */}
        <div className="mb-6">
          {category && <Link to={`/categories/${category.slug}`} className="chip bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300 mb-3">{category.name}</Link>}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink-900 dark:text-white tracking-tight leading-tight">{article.title}</h1>
          <p className="text-lg text-ink-500 dark:text-ink-400 mt-4">{article.excerpt}</p>
          <div className="flex items-center gap-4 mt-5 text-sm text-ink-400 flex-wrap">
            {author && (
              <Link to={`/authors/${author.id}`} className="flex items-center gap-2 hover:text-brand-500">
                <img src={author.photo} alt={author.name} className="w-8 h-8 rounded-full object-cover" />
                <span className="font-semibold text-ink-700 dark:text-ink-200">{author.name}</span>
              </Link>
            )}
            <span className="flex items-center gap-1"><Calendar size={14} /> {formatDate(article.publishedDate)}</span>
            <span className="flex items-center gap-1"><Clock size={14} /> {article.readingTime} min read</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="rounded-2xl overflow-hidden mb-8 aspect-[16/9] bg-ink-100 dark:bg-ink-700">
          <img src={article.featuredImage} alt={article.imageAlt} className="w-full h-full object-cover" />
        </div>

        {/* Share buttons */}
        <div className="flex items-center gap-2 mb-8 pb-6 border-b border-ink-100 dark:border-ink-700">
          <span className="text-sm text-ink-400 mr-2">Share:</span>
          <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(article.title)}`} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-ink-100 dark:bg-ink-700 hover:bg-brand-600 hover:text-white flex items-center justify-center transition-colors"><Twitter size={16} /></a>
          <a href={`https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-ink-100 dark:bg-ink-700 hover:bg-brand-600 hover:text-white flex items-center justify-center transition-colors"><Linkedin size={16} /></a>
          <a href={`mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent(shareUrl)}`} className="w-9 h-9 rounded-lg bg-ink-100 dark:bg-ink-700 hover:bg-brand-600 hover:text-white flex items-center justify-center transition-colors"><Mail size={16} /></a>
          <button onClick={copyLink} className="w-9 h-9 rounded-lg bg-ink-100 dark:bg-ink-700 hover:bg-brand-600 hover:text-white flex items-center justify-center transition-colors" aria-label="Copy link">{copied ? <Check size={16} /> : <Link2 size={16} />}</button>
        </div>

        {/* Table of Contents */}
        <div className="card p-5 mb-8">
          <h3 className="font-bold text-ink-900 dark:text-ink-50 mb-3 text-sm uppercase tracking-wide">Table of Contents</h3>
          <ol className="space-y-1.5">
            {article.tableOfContents.map((t, i) => (
              <li key={t.id}><a href={`#${t.id}`} className="text-sm text-brand-600 dark:text-brand-400 hover:underline flex items-baseline gap-2"><span className="text-ink-400 font-mono text-xs">{String(i + 1).padStart(2, '0')}</span> {t.title}</a></li>
            ))}
          </ol>
        </div>

        {/* Article Content */}
        <div id="article-content" className="prose-article max-w-none">
          {article.content.map((section, i) => (
            <section key={i}>
              <h2 id={article.tableOfContents[i]?.id || `section-${i}`}>{section.heading}</h2>
              {section.body.map((p, j) => <p key={j} dangerouslySetInnerHTML={{ __html: p.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') }} />)}
            </section>
          ))}

          {/* FAQs */}
          <h2 id="frequently-asked-questions">Frequently Asked Questions</h2>
          <div className="space-y-3 mb-8">
            {article.faqs.map((f, i) => (
              <details key={i} className="card p-4 group">
                <summary className="font-semibold text-ink-900 dark:text-ink-50 cursor-pointer list-none flex items-center justify-between">{f.question} <ChevronRight size={18} className="text-ink-400 group-open:rotate-90 transition-transform" /></summary>
                <p className="text-sm text-ink-500 dark:text-ink-400 mt-3">{f.answer}</p>
              </details>
            ))}
          </div>

          {/* Conclusion */}
          <h2>Conclusion</h2>
          <p>Understanding {article.title.toLowerCase().replace(/how to |understanding |the complete guide to |a beginner guide to /g, '')} is an important step in improving your financial knowledge. The principles covered in this article provide a foundation, but financial decisions should always be made with consideration of your individual circumstances. We encourage you to use our free calculators to apply these concepts to your own situation, and to consult with a qualified professional for advice tailored to your specific needs.</p>
        </div>

        {/* Tags */}
        <div className="flex items-center gap-2 mt-8 pt-6 border-t border-ink-100 dark:border-ink-700 flex-wrap">
          <Tag size={16} className="text-ink-400" />
          {article.tags.map((t) => <Link key={t} to={`/search?q=${encodeURIComponent(t)}`} className="chip bg-ink-100 dark:bg-ink-700 text-ink-600 dark:text-ink-300 hover:bg-ink-200">{t}</Link>)}
        </div>

        {/* Author bio */}
        {author && (
          <div className="card p-6 mt-8 flex items-start gap-4">
            <img src={author.photo} alt={author.name} className="w-16 h-16 rounded-full object-cover shrink-0" />
            <div>
              <p className="text-xs text-ink-400 mb-1">Written by</p>
              <Link to={`/authors/${author.id}`} className="font-bold text-ink-900 dark:text-ink-50 hover:text-brand-500">{author.name}</Link>
              <p className="text-xs text-brand-600 dark:text-brand-400 font-semibold">{author.role}</p>
              <p className="text-sm text-ink-500 dark:text-ink-400 mt-2">{author.bio}</p>
            </div>
          </div>
        )}

        {/* Back link */}
        <Link to="/articles" className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-brand-600 dark:text-brand-400 hover:underline"><ArrowLeft size={16} /> Back to all articles</Link>
      </div>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="container-wide py-12 border-t border-ink-100 dark:border-ink-800">
          <h2 className="text-2xl font-bold text-ink-900 dark:text-white mb-6">Related Articles</h2>
          <ArticleCardGrid articles={related} compact />
        </section>
      )}
    </div>
  );
}
