import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

export function NotFoundPage() {
  useDocumentMeta({ title: '404 - Page Not Found | Money Director', description: 'The page you are looking for could not be found.', canonical: '/404' });
  return (
    <div className="container-narrow py-20 sm:py-32 text-center">
      <p className="text-8xl font-extrabold text-brand-600 dark:text-brand-400">404</p>
      <h1 className="text-2xl font-bold text-ink-900 dark:text-white mt-4">Page Not Found</h1>
      <p className="text-ink-500 dark:text-ink-400 mt-2 mb-8">The page you are looking for does not exist or has been moved.</p>
      <div className="flex gap-3 justify-center">
        <Link to="/" className="btn-primary"><Home size={16} /> Go Home</Link>
        <Link to="/search" className="btn-secondary"><Search size={16} /> Search</Link>
      </div>
    </div>
  );
}
