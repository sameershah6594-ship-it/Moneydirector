import { Link } from 'react-router-dom';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { ArticleCardGrid } from '@/components/ArticleCard';
import { CategoryCard } from '@/components/CategoryCard';
import { Newsletter } from '@/components/Newsletter';
import { categories } from '@/data/categories';
import { allArticles, getPopularArticles } from '@/data/articles-index';
import { authors } from '@/data/authors';
import { Award, Target, ShieldCheck, Users, BookOpen, Calculator } from 'lucide-react';

export function AboutPage() {
  useDocumentMeta({
    title: 'About Us | Money Director',
    description: 'Learn about Money Director, our mission to provide accessible financial education, our editorial standards, and our team of finance writers.',
    canonical: '/about',
  });
  return (
    <div className="container-narrow py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-ink-900 dark:text-white mb-6">About Money Director</h1>
      <div className="prose-article max-w-none">
        <p>Money Director is a financial education website dedicated to making personal finance accessible, understandable, and actionable for everyone. We provide free calculators, in-depth guides, and original articles covering every major area of personal finance, from banking basics to advanced investment strategies.</p>

        <h2>Our Mission</h2>
        <p>We believe that financial literacy is a fundamental life skill that should be available to all, regardless of background, income, or education level. Too much financial information is either behind paywalls, obscured by jargon, or driven by sales pitches for specific products. Money Director exists to change that.</p>
        <p>Our mission is to provide clear, honest, practical financial information that helps people make better decisions with their money. We focus on education, not promotion. We do not sell financial products, earn commissions on recommendations, or use fear-based marketing to drive engagement.</p>

        <h2>What We Offer</h2>
        <ul>
          <li><strong>Financial Calculators:</strong> Over 20 free, fully-functional calculators covering loans, mortgages, investments, retirement, taxes, and more.</li>
          <li><strong>In-Depth Articles:</strong> Original, educational articles written by our team of finance writers, covering 16 finance categories.</li>
          <li><strong>Practical Guides:</strong> Step-by-step guides that walk you through real financial decisions, from buying a house to planning for retirement.</li>
          <li><strong>Author Profiles:</strong> Transparency about who writes our content and their areas of expertise.</li>
        </ul>

        <h2>Our Editorial Standards</h2>
        <p>Every article published on Money Director follows our editorial policy. Content is researched, written, and reviewed to ensure accuracy and clarity. We display publication and update dates on every article so you know how current the information is. We do not publish fake reviews, testimonials, or marketing claims. We do not invent statistics or make unsubstantiated claims about results.</p>
        <p>Our content is educational, not advisory. We provide information and tools to help you understand financial concepts and make informed decisions, but we do not provide personalized financial advice. For advice tailored to your specific situation, we recommend consulting a qualified financial professional.</p>

        <h2>How We Are Different</h2>
        <p>Many finance websites are owned by financial institutions or lead-generation companies that use content to sell products. Money Director is independent. Our primary goal is to educate, not to sell. This means our content is objective, our calculators are genuinely useful, and our recommendations are based on what is best for the reader, not what generates the most revenue.</p>
        <p>We also believe in transparency. Our editorial policy is public, our authors are identified, and our content standards are documented. If we make an error, we correct it and note the correction. If we update an article, we show the update date.</p>

        <h2>Who We Serve</h2>
        <p>Money Director serves anyone who wants to improve their financial knowledge and decision-making. Whether you are just starting to learn about budgeting, working to pay off debt, planning for retirement, or building an investment portfolio, our content is designed to meet you where you are and help you take the next step.</p>
        <p>We do not assume prior knowledge. Our articles explain concepts from the ground up, define terms when first used, and provide practical examples. At the same time, we cover advanced topics for readers who are ready to go deeper.</p>
      </div>

      <div className="grid sm:grid-cols-3 gap-4 mt-10">
        <div className="card p-6 text-center"><Target className="mx-auto text-brand-500 mb-2" /><h3 className="font-bold text-ink-900 dark:text-white">Our Mission</h3><p className="text-sm text-ink-500 mt-1">Accessible financial education for everyone</p></div>
        <div className="card p-6 text-center"><ShieldCheck className="mx-auto text-accent-500 mb-2" /><h3 className="font-bold text-ink-900 dark:text-white">Our Standards</h3><p className="text-sm text-ink-500 mt-1">Accuracy, transparency, and honesty</p></div>
        <div className="card p-6 text-center"><Users className="mx-auto text-brand-500 mb-2" /><h3 className="font-bold text-ink-900 dark:text-white">Our Team</h3><p className="text-sm text-ink-500 mt-1">Dedicated finance writers and editors</p></div>
      </div>

      <h2 className="text-2xl font-bold text-ink-900 dark:text-white mt-12 mb-6">Meet Our Editorial Team</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {authors.map((a) => (
          <Link key={a.id} to={`/authors/${a.id}`} className="card p-5 flex items-center gap-4 hover:shadow-card transition-all">
            <img src={a.photo} alt={a.name} loading="lazy" className="w-16 h-16 rounded-full object-cover" />
            <div><p className="font-bold text-ink-900 dark:text-ink-50">{a.name}</p><p className="text-xs text-brand-600 dark:text-brand-400 font-semibold">{a.role}</p><p className="text-xs text-ink-400 mt-1">{a.expertise.slice(0, 2).join(', ')}</p></div>
          </Link>
        ))}
      </div>

      <div className="mt-12">
        <Newsletter />
      </div>
    </div>
  );
}
