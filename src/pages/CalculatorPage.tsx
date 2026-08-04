import AdBanner from '@/components/AdBanner';
import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { RotateCcw, Copy, Check, Calculator as CalcIcon, ChevronRight } from 'lucide-react';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { getCalculatorBySlug, calculators } from '@/data/calculators';
import { NotFoundPage } from './NotFoundPage';
import { CalculatorEngine } from '@/components/CalculatorEngine';

export function CalculatorPage() {
  const { slug } = useParams();
  const calc = slug ? getCalculatorBySlug(slug) : undefined;
  const [copied, setCopied] = useState(false);
  useDocumentMeta({
    title: calc ? `${calc.name} | Money Director` : 'Calculator Not Found | Money Director',
    description: calc?.description || 'The calculator you are looking for could not be found.',
    canonical: slug ? `/calculators/${slug}` : '/calculators',
  });
  if (!calc) return <NotFoundPage />;

  const copyResult = (text: string) => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  return (
    <div className="container-wide py-8 sm:py-12">
      <nav className="flex items-center gap-1.5 text-xs text-ink-400 mb-6">
        <Link to="/" className="hover:text-brand-500">Home</Link><ChevronRight size={14} />
        <Link to="/calculators" className="hover:text-brand-500">Calculators</Link><ChevronRight size={14} />
        <span className="text-ink-600 dark:text-ink-300">{calc.name}</span>
      </nav>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-brand-600 text-white flex items-center justify-center"><CalcIcon size={24} /></div>
            <div><h1 className="text-2xl sm:text-3xl font-extrabold text-ink-900 dark:text-white">{calc.name}</h1><p className="text-sm text-ink-500 dark:text-ink-400">{calc.description}</p></div>
          </div>
          <CalculatorEngine slug={calc.slug} onCopy={copyResult} copied={copied} />
        </div>
        <div>
          <div className="card p-5 sticky top-24">
            <h3 className="font-bold text-ink-900 dark:text-ink-50 mb-3 text-sm">Other Calculators</h3>
            <div className="space-y-1">
              {calculators.filter((c) => c.slug !== calc.slug).slice(0, 12).map((c) => (
                <Link key={c.id} to={`/calculators/${c.slug}`} className="block px-3 py-2 text-sm text-ink-600 dark:text-ink-300 hover:bg-ink-50 dark:hover:bg-ink-700/50 rounded-lg">{c.name}</Link>
              ))}
            </div>
            <Link to="/calculators" className="block mt-3 pt-3 border-t border-ink-100 dark:border-ink-700 text-sm font-semibold text-brand-600 dark:text-brand-400">View all calculators</Link>
          </div>
        </div>
      </div>

      {/* All Ad Banners Group */}
      <div className="space-y-6 my-8">
        {/* Header Leaderboard Banner (728x90) */}
        <div className="flex justify-center">
          <AdBanner 
            adKey="c060f5177a7056171ced5eb7d122263b" 
            width={728} 
            height={90} 
          />
        </div>

        {/* Full Banner (468x60) */}
        <div className="flex justify-center">
          <AdBanner 
            adKey="a5c311e35c3cc50874ca5095d1067bd7" 
            width={468} 
            height={60} 
          />
        </div>

        {/* Mobile Banner (320x50) */}
        <div className="flex justify-center">
          <AdBanner 
            adKey="28b1ef1ed72a56336e840b4f6320c007" 
            width={320} 
            height={50} 
          />
        </div>

        {/* Medium Rectangle Banner (300x250) */}
        <div className="flex justify-center">
          <AdBanner 
            adKey="f8859593b9fae7463829294cd25ec77c" 
            width={300} 
            height={250} 
          />
        </div>

        {/* Skyscraper Banner (160x300) */}
        <div className="flex justify-center">
          <AdBanner 
            adKey="adac8595e5b09981e190ac3b9a784240" 
            width={160} 
            height={300} 
          />
        </div>

        {/* Wide Skyscraper Banner (160x600) */}
        <div className="flex justify-center">
          <AdBanner 
            adKey="f879294844b6d212e1556d3aa4f17bf5" 
            width={160} 
            height={600} 
          />
        </div>
      </div>
    </div>
  );
}
