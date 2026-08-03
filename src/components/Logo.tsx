import { Link } from 'react-router-dom';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-2 font-extrabold text-lg ${className}`} aria-label="Money Director home">
      <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-brand-600 text-white shadow-glow">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2 L20 7 V17 L12 22 L4 17 V7 Z" />
          <text x="12" y="15" fontSize="10" fontWeight="bold" fill="currentColor" stroke="none" textAnchor="middle">M</text>
        </svg>
      </span>
      <span className="text-ink-900 dark:text-white tracking-tight">
        Money<span className="text-brand-600 dark:text-brand-400">Director</span>
      </span>
    </Link>
  );
}
