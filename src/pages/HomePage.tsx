import AdBanner from '@/components/AdBanner';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, TrendingUp, TrendingDown, Calculator, ShieldCheck, Target, Award, Users, BookOpen, ArrowRight, Check, Clock } from 'lucide-react';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { ArticleCardGrid } from '@/components/ArticleCard';
import { CategoryCard } from '@/components/CategoryCard';
import { Newsletter } from '@/components/Newsletter';
import { categories } from '@/data/categories';
import { getFeaturedArticles, getTrendingArticles, getEditorsPicks, getPopularArticles, getLatestArticles, allArticles } from '@/data/articles-index';
import { calculators } from '@/data/calculators';
import { authors } from '@/data/authors';

const faqs = [
  { question: 'Is Money Director free to use?', answer: 'Yes, all our calculators, guides, and articles are completely free. We do not require registration or charge any fees.' },
  { question: 'Are the calculators accurate?', answer: 'Our calculators use standard financial formulas. However, results are estimates for educational purposes and should not replace professional financial advice.' },
  { question: 'Do you offer financial advice?', answer: 'No, our content is educational. We provide tools and information to help you make informed decisions, but we do not provide personalized financial advice.' },
  { question: 'How often is content updated?', answer: 'We regularly review and update our articles to ensure accuracy. Each article displays its last updated date.' },
];

const stats = [
  { value: '20+', label: 'Free Calculators' },
  { value: '50+', label: 'In-Depth Articles' },
  { value: '16', label: 'Finance Categories' },
  { value: '100%', label: 'Free to Use' },
];

const tips = [
  { icon: TrendingUp, title: 'Start Investing Early', text: 'Time is your greatest asset. Thanks to compound interest, starting even a few years earlier can mean significantly more wealth.' },
  { icon: ShieldCheck, title: 'Build an Emergency Fund', text: 'Aim for 3-6 months of expenses in a high-yield savings account. This protects you from unexpected costs and financial setbacks.' },
  { icon: Calculator, title: 'Track Your Spending', text: 'You cannot manage what you do not measure. Track expenses to find money leaks and redirect them toward your goals.' },
  { icon: Target, title: 'Set Clear Goals', text: 'Use the SMART framework to set specific, measurable financial goals. Written goals are more likely to be achieved.' },
  { icon: TrendingDown, title: 'Pay Off High-Interest Debt', text: 'Credit card debt at 20% interest costs you more than investments can earn. Eliminate it first.' },
  { icon: Award, title: 'Improve Your Credit Score', text: 'A better score saves thousands on loans. Pay on time, keep utilization low, and check your reports for errors.' },
];

export function HomePage() {
  useDocumentMeta({
    title: 'Money Director — Smart Finance Calculators, Guides & Articles',
    description: 'Free financial calculators, in-depth guides, and expert articles on banking, investing, loans, retirement, budgeting and more. Take control of your money today.',
    canonical: '/',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Money Director',
      url: 'https://moneydirector.com',
      potentialAction: { '@type': 'SearchAction', target: 'https://moneydirector.com/search?q={query}', 'query-input': 'required name=query' },
    },
  });
  const navigate = useNavigate();
  const [searchQ, setSearchQ] = useState('');
  const featured = getFeaturedArticles().slice(0, 3);
  const trending = getTrendingArticles().slice(0, 3);
  const editorsPicks = getEditorsPicks().slice(0, 3);
  const popular = getPopularArticles().slice(0, 3);
  const latest = getLatestArticles(6);

  const heroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQ.trim()) navigate(`/search?q=${encodeURIComponent(searchQ)}`);
  };

  return (
    <div>
      {/* Header Ad Banner (728x90) */}
<AdBanner 
  adKey="c060f5177a7056171ced5eb7d122263b" 
  width={728} 
  height={90} 
/>
      {/* Hero */}    
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-accent-50 dark:from-ink-900 dark:via-ink-950 dark:to-ink-900 py-16 sm:py-24">
        <div className="absolute inset-0 opacity-30 dark:opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(47,129,254,0.15), transparent 50%), radial-gradient(circle at 80% 80%, rgba(16,185,129,0.15), transparent 50%)' }} />
        <div className="container-wide relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <span className="chip bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300 mb-4">Your trusted finance companion</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink-900 dark:text-white tracking-tight leading-[1.1]">
                Take Control of <span className="text-brand-600 dark:text-brand-400">Your Money</span>
              </h1>
              <p className="text-lg text-ink-600 dark:text-ink-300 mt-5 max-w-xl">
                Free financial calculators, in-depth guides, and expert articles to help you budget smarter, invest wisely, and build lasting wealth.
              </p>
              <form onSubmit={heroSearch} className="mt-8 flex gap-3 max-w-lg">
                <div className="relative flex-1">
                  <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-400" />
                  <input type="text" value={searchQ} onChange={(e) => setSearchQ(e.target.value)} placeholder="Search articles, calculators..." className="input !pl-12" />
                </div>
                <button type="submit" className="btn-primary">Search</button>
              </form>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-xs text-ink-400">Popular:</span>
                {['Budgeting', 'Mortgage', 'Retirement', 'Credit Score'].map((t) => (
                  <button key={t} onClick={() => navigate(`/search?q=${t.toLowerCase()}`)} className="text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline">{t}</button>
                ))}
              </div>
            </div>
            <div className="hidden lg:block animate-fade-in">
              <div className="relative">
                <div className="card p-6 glass">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-ink-500 dark:text-ink-400">Retirement Projection</p>
                      <p className="text-2xl font-bold text-ink-900 dark:text-white">$847,250</p>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-accent-100 dark:bg-accent-900/40 flex items-center justify-center"><TrendingUp className="text-accent-600" /></div>
                  </div>
                  <div className="h-32 flex items-end gap-2">
                    {[30, 45, 55, 40, 65, 75, 85, 95, 100].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-brand-500 to-accent-400 transition-all" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-ink-100 dark:border-ink-700">
                    <div><p className="text-xs text-ink-400">Monthly</p><p className="font-bold text-ink-900 dark:text-white">$500</p></div>
                    <div><p className="text-xs text-ink-400">Years</p><p className="font-bold text-ink-900 dark:text-white">30</p></div>
                    <div><p className="text-xs text-ink-400">Return</p><p className="font-bold text-ink-900 dark:text-white">7%</p></div>
                  </div>
                </div>
                <div className="card p-4 glass absolute -bottom-6 -left-6 w-48 animate-fade-up" style={{ animationDelay: '0.3s' }}>
                  <div className="flex items-center gap-2 mb-1"><ShieldCheck size={16} className="text-accent-600" /><span className="text-xs font-semibold text-ink-700 dark:text-ink-200">Emergency Fund</span></div>
                  <p className="text-xl font-bold text-ink-900 dark:text-white">$15,000</p>
                  <p className="text-xs text-ink-400">6 months saved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Calculators */}
      <section className="container-wide py-14">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink-900 dark:text-white">Popular Calculators</h2>
            <p className="text-ink-500 dark:text-ink-400 mt-1">Free tools to plan your financial future</p>
          </div>
          <Link to="/calculators" className="btn-ghost text-sm hidden sm:inline-flex">View all <ArrowRight size={16} /></Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {calculators.slice(0, 8).map((c) => (
            <Link key={c.id} to={`/calculators/${c.slug}`} className="card p-5 hover:shadow-card transition-all group">
              <div className="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-900/40 flex items-center justify-center mb-3 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                <Calculator size={20} className="text-brand-600 group-hover:text-white" />
              </div>
              <h3 className="font-semibold text-ink-900 dark:text-ink-50 text-sm">{c.name}</h3>
              <p className="text-xs text-ink-500 dark:text-ink-400 mt-1 line-clamp-2">{c.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Guides */}
      <section className="container-wide py-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-ink-900 dark:text-white mb-8">Featured Guides</h2>
        <ArticleCardGrid articles={featured} />
      </section>

      {/* Trending + Editors Picks */}
      <section className="container-wide py-14">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-ink-900 dark:text-white mb-6 flex items-center gap-2"><TrendingUp className="text-brand-500" /> Trending Articles</h2>
            <ArticleCardGrid articles={trending} compact />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-ink-900 dark:text-white mb-6 flex items-center gap-2"><Award className="text-accent-500" /> Editor's Picks</h2>
            <ArticleCardGrid articles={editorsPicks} compact />
          </div>
        </div>
      </section>

      {/* Most Popular + Latest */}
      <section className="container-wide py-14">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-ink-900 dark:text-white mb-6">Most Popular</h2>
            <ArticleCardGrid articles={popular} compact />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-ink-900 dark:text-white mb-6">Latest Articles</h2>
            <ArticleCardGrid articles={latest.slice(0, 3)} compact />
          </div>
        </div>
      </section>

      {/* Finance Categories */}
      <section className="container-wide py-14">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-ink-900 dark:text-white">Finance Categories</h2>
          <Link to="/categories" className="btn-ghost text-sm hidden sm:inline-flex">All categories <ArrowRight size={16} /></Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.slice(0, 8).map((c) => <CategoryCard key={c.id} {...c} />)}
        </div>
      </section>

      {/* Finance Tips */}
      <section className="bg-gradient-to-br from-ink-100 to-brand-50 dark:from-ink-900 dark:to-ink-950 py-14">
        <div className="container-wide">
          <h2 className="text-2xl sm:text-3xl font-bold text-ink-900 dark:text-white mb-8 text-center">Finance Tips for Everyday Life</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tips.map((t, i) => (
              <div key={i} className="card p-6 hover:shadow-card transition-all">
                <div className="w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-900/40 flex items-center justify-center mb-4"><t.icon className="text-brand-600" /></div>
                <h3 className="font-bold text-ink-900 dark:text-ink-50 mb-2">{t.title}</h3>
                <p className="text-sm text-ink-500 dark:text-ink-400">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us + Mission */}
      <section className="container-wide py-14">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="card p-8">
            <div className="flex items-center gap-2 mb-4"><ShieldCheck className="text-accent-600" /><h2 className="text-xl font-bold text-ink-900 dark:text-white">Why Trust Money Director</h2></div>
            <ul className="space-y-3">
              {['Clear editorial standards and review process', 'Content written by knowledgeable finance writers', 'Regularly updated articles with dates shown', 'Free, ad-light experience with no paywalls', 'Transparent methodology for all calculations', 'No fake reviews, testimonials, or marketing claims'].map((t, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-ink-600 dark:text-ink-300"><Check size={18} className="text-accent-500 mt-0.5 shrink-0" /> {t}</li>
              ))}
            </ul>
          </div>
          <div className="card p-8 bg-gradient-to-br from-brand-600 to-brand-800 text-white">
            <Target className="mb-4" size={32} />
            <h2 className="text-xl font-bold mb-3">Our Mission</h2>
            <p className="text-brand-50 leading-relaxed">We believe financial knowledge should be accessible to everyone. Money Director exists to provide clear, honest, and practical financial information that helps people make better money decisions, regardless of their background or income level.</p>
            <p className="text-brand-50 leading-relaxed mt-3">Our content focuses on education, not sales. We do not promote specific products for commission, and we do not use fear or hype to drive engagement. Just straightforward, useful information.</p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-brand-700 text-white py-12">
        <div className="container-wide grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <p className="text-3xl sm:text-4xl font-extrabold">{s.value}</p>
              <p className="text-brand-100 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest calculators + Featured categories */}
      <section className="container-wide py-14">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-ink-900 dark:text-white mb-6 flex items-center gap-2"><Calculator className="text-brand-500" /> More Calculators</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {calculators.slice(8, 14).map((c) => (
                <Link key={c.id} to={`/calculators/${c.slug}`} className="card p-4 flex items-center gap-3 hover:shadow-card transition-all">
                  <div className="w-10 h-10 rounded-lg bg-accent-100 dark:bg-accent-900/40 flex items-center justify-center shrink-0"><Calculator size={18} className="text-accent-600" /></div>
                  <div><p className="font-semibold text-sm text-ink-900 dark:text-ink-50">{c.name}</p><p className="text-xs text-ink-400 line-clamp-1">{c.description}</p></div>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-ink-900 dark:text-white mb-6 flex items-center gap-2"><BookOpen className="text-accent-500" /> More Categories</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {categories.slice(8, 16).map((c) => (
                <Link key={c.id} to={`/categories/${c.slug}`} className="card p-4 text-center hover:shadow-card transition-all">
                  <p className="font-semibold text-sm text-ink-900 dark:text-ink-50">{c.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles full */}
      <section className="container-wide py-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-ink-900 dark:text-white mb-8">Latest Articles</h2>
        <ArticleCardGrid articles={latest} />
      </section>

      {/* Newsletter */}
      <section className="container-wide py-14">
        <Newsletter />
      </section>

      {/* FAQ */}
      <section className="container-wide py-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-ink-900 dark:text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((f, i) => (
            <details key={i} className="card p-5 group">
              <summary className="font-semibold text-ink-900 dark:text-ink-50 cursor-pointer flex items-center justify-between list-none">
                {f.question}
                <ArrowRight size={18} className="text-ink-400 group-open:rotate-90 transition-transform" />
              </summary>
              <p className="text-sm text-ink-500 dark:text-ink-400 mt-3">{f.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
