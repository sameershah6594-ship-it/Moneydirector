import { Link } from 'react-router-dom';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { Calculator as CalcIcon, ArrowRight } from 'lucide-react';
import { calculators } from '@/data/calculators';

export function CalculatorsPage() {
  useDocumentMeta({ title: 'Free Financial Calculators | Money Director', description: 'Access 20+ free financial calculators for loans, mortgages, investments, retirement, budgeting, taxes, and more.', canonical: '/calculators' });
  const grouped = calculators.reduce((acc, c) => { (acc[c.category] = acc[c.category] || []).push(c); return acc; }, {} as Record<string, typeof calculators>);
  return (
    <div className="container-wide py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-ink-900 dark:text-white mb-2">Financial Calculators</h1>
      <p className="text-ink-500 dark:text-ink-400 mb-10">Free, accurate calculators to help you plan loans, investments, retirement, budgets, and more. No registration required.</p>
      {Object.entries(grouped).map(([cat, calcs]) => (
        <div key={cat} className="mb-10">
          <h2 className="text-xl font-bold text-ink-900 dark:text-white mb-4">{cat}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {calcs.map((c) => (
              <Link key={c.id} to={`/calculators/${c.slug}`} className="card p-5 hover:shadow-card transition-all group flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-900/40 flex items-center justify-center shrink-0 group-hover:bg-brand-600 transition-colors">
                  <CalcIcon size={22} className="text-brand-600 group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-ink-900 dark:text-ink-50">{c.name}</h3>
                  <p className="text-sm text-ink-500 dark:text-ink-400 mt-1">{c.description}</p>
                  <span className="text-xs font-semibold text-brand-600 dark:text-brand-400 mt-2 inline-flex items-center gap-1">Open calculator <ArrowRight size={12} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function CalculatorPage() {
  useDocumentMeta({ title: 'Calculator | Money Director', description: 'Use this free financial calculator.', canonical: '/calculators' });
  return (
    <div className="container-narrow py-12 sm:py-16 text-center">
      <CalcIcon size={48} className="mx-auto text-brand-500 mb-4" />
      <h1 className="text-2xl font-bold text-ink-900 dark:text-white mb-2">Calculator</h1>
      <p className="text-ink-500 dark:text-ink-400 mb-6">Select a calculator from our collection.</p>
      <Link to="/calculators" className="btn-primary">View All Calculators</Link>
    </div>
  );
}
