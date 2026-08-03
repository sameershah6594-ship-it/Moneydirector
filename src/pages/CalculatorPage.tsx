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
    </div>
  );
}
