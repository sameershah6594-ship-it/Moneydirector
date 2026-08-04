import AdBanner from '@/components/AdBanner';
import { Link } from 'react-router-dom';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { ArticleCardGrid } from '@/components/ArticleCard';
import { getFeaturedArticles, getPopularArticles } from '@/data/articles-index';
import { Calculator, BookOpen, ArrowRight } from 'lucide-react';

export function GuidesPage() {
  useDocumentMeta({ title: 'Finance Guides | Money Director', description: 'Step-by-step finance guides to help you navigate major financial decisions, from buying a home to planning retirement.', canonical: '/guides' });
  const guides = [...getFeaturedArticles(), ...getPopularArticles()];
  const unique = Array.from(new Map(guides.map((g) => [g.id, g])).values());
  return (
    <div className="container-wide py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-ink-900 dark:text-white mb-2">Finance Guides</h1>
      <p className="text-ink-500 dark:text-ink-400 mb-10">Comprehensive, step-by-step guides to help you navigate major financial decisions with confidence.</p>
      <ArticleCardGrid articles={unique} />
      <div className="mt-12 card p-8 bg-gradient-to-br from-brand-600 to-brand-800 text-white text-center">
        <Calculator size={32} className="mx-auto mb-3" />
        <h2 className="text-xl font-bold mb-2">Try Our Calculators</h2>
        <p className="text-brand-50 mb-4">Apply what you learn with our free financial calculators.</p>
        <Link to="/calculators" className="inline-flex items-center gap-2 bg-white text-brand-700 px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-brand-50 transition-colors">View Calculators <ArrowRight size={16} /></Link>
      </div>

      {/* All Ad Banners Group */}
      <div className="space-y-6 my-8">
        <div className="flex justify-center">
          <AdBanner adKey="c060f5177a7056171ced5eb7d122263b" width={728} height={90} />
        </div>
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

export function ResourcesPage() {
  useDocumentMeta({ title: 'Financial Resources | Money Director', description: 'Helpful financial resources, tools, and references to support your journey toward financial well-being.', canonical: '/resources' });
  const resources = [
    { title: 'All Calculators', desc: '20+ free financial calculators for loans, investments, retirement, and more.', link: '/calculators', icon: Calculator },
    { title: 'All Articles', desc: 'Browse 50+ in-depth articles across 16 finance categories.', link: '/articles', icon: BookOpen },
    { title: 'Finance Categories', desc: 'Explore content organized by topic, from banking to retirement.', link: '/categories', icon: BookOpen },
    { title: 'Editorial Policy', desc: 'Learn about our content standards and review process.', link: '/editorial-policy', icon: BookOpen },
    { title: 'Editorial Team', desc: 'Meet the writers behind our finance content.', link: '/authors', icon: BookOpen },
    { title: 'Sitemap', desc: 'Browse all pages on Money Director.', link: '/sitemap', icon: BookOpen },
  ];
  return (
    <div className="container-wide py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-ink-900 dark:text-white mb-2">Resources</h1>
      <p className="text-ink-500 dark:text-ink-400 mb-10">Tools, references, and resources to support your financial journey.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {resources.map((r, i) => (
          <Link key={i} to={r.link} className="card p-6 hover:shadow-card transition-all group">
            <r.icon className="text-brand-500 mb-3" size={24} />
            <h3 className="font-bold text-ink-900 dark:text-ink-50 group-hover:text-brand-600 transition-colors">{r.title}</h3>
            <p className="text-sm text-ink-500 dark:text-ink-400 mt-1">{r.desc}</p>
          </Link>
        ))}
      </div>

      {/* All Ad Banners Group */}
      <div className="space-y-6 my-8">
        <div className="flex justify-center">
          <AdBanner adKey="c060f5177a7056171ced5eb7d122263b" width={728} height={90} />
        </div>
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
