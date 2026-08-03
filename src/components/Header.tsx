import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Search, Moon, Sun, ChevronDown, Calculator as CalcIcon, FileText, LayoutGrid, BookOpen, Info, Mail } from 'lucide-react';
import { Logo } from './Logo';
import { AnnouncementBar } from './AnnouncementBar';
import { SearchModal } from './SearchModal';
import { useTheme } from '@/hooks/useTheme';
import { categories } from '@/data/categories';
import { calculators } from '@/data/calculators';

const navItems = [
  { label: 'Home', path: '/', icon: LayoutGrid },
  { label: 'Calculators', path: '/calculators', icon: CalcIcon, mega: 'calc' },
  { label: 'Categories', path: '/categories', icon: LayoutGrid, mega: 'cat' },
  { label: 'Articles', path: '/articles', icon: FileText },
  { label: 'Guides', path: '/guides', icon: BookOpen },
  { label: 'Resources', path: '/resources', icon: Info },
  { label: 'About', path: '/about', icon: Info },
  { label: 'Contact', path: '/contact', icon: Mail },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [megaMenu, setMegaMenu] = useState<string | null>(null);
  const { theme, toggle } = useTheme();
  const location = useLocation();

  const closeAll = () => { setMobileOpen(false); setMegaMenu(null); };

  return (
    <>
      <AnnouncementBar />
      <header className="sticky top-0 z-[100] glass border-b border-ink-200/60 dark:border-ink-700/60">
        <div className="container-wide flex items-center justify-between h-[var(--header-h)] gap-4">
          <Logo />
          <nav className="hidden lg:flex items-center gap-1" onMouseLeave={() => setMegaMenu(null)}>
            {navItems.map((item) => (
              <div key={item.path} className="relative" onMouseEnter={() => setMegaMenu(item.mega || null)}>
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${
                      isActive ? 'text-brand-600 dark:text-brand-400' : 'text-ink-600 dark:text-ink-300 hover:text-ink-900 dark:hover:text-ink-100'
                    }`
                  }
                  onClick={closeAll}
                >
                  {item.label}
                  {item.mega && <ChevronDown size={14} className="opacity-60" />}
                </NavLink>
                {item.mega === 'cat' && megaMenu === 'cat' && (
                  <div className="absolute top-full left-0 w-[600px] bg-white dark:bg-ink-800 rounded-2xl shadow-card border border-ink-200 dark:border-ink-700 p-4 grid grid-cols-2 gap-1 animate-slide-down z-50">
                    {categories.map((c) => (
                      <Link key={c.id} to={`/categories/${c.slug}`} onClick={closeAll} className="flex items-start gap-2 p-2 rounded-lg hover:bg-ink-50 dark:hover:bg-ink-700/50">
                        <span className="text-brand-500 mt-0.5">&#9679;</span>
                        <div>
                          <p className="text-sm font-semibold text-ink-800 dark:text-ink-100">{c.name}</p>
                          <p className="text-xs text-ink-500 dark:text-ink-400 line-clamp-1">{c.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
                {item.mega === 'calc' && megaMenu === 'calc' && (
                  <div className="absolute top-full left-0 w-[520px] bg-white dark:bg-ink-800 rounded-2xl shadow-card border border-ink-200 dark:border-ink-700 p-4 grid grid-cols-2 gap-1 animate-slide-down z-50">
                    {calculators.slice(0, 10).map((c) => (
                      <Link key={c.id} to={`/calculators/${c.slug}`} onClick={closeAll} className="p-2 rounded-lg hover:bg-ink-50 dark:hover:bg-ink-700/50">
                        <p className="text-sm font-semibold text-ink-800 dark:text-ink-100">{c.name}</p>
                        <p className="text-xs text-ink-500 dark:text-ink-400 line-clamp-1">{c.description}</p>
                      </Link>
                    ))}
                    <Link to="/calculators" onClick={closeAll} className="col-span-2 text-center text-sm font-semibold text-brand-600 dark:text-brand-400 py-2 border-t border-ink-100 dark:border-ink-700 mt-1">
                      View all calculators
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="flex items-center gap-1 sm:gap-2">
            <button onClick={() => setSearchOpen(true)} className="btn-ghost !p-2" aria-label="Search"><Search size={20} /></button>
            <button onClick={toggle} className="btn-ghost !p-2" aria-label="Toggle dark mode">
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="btn-ghost !p-2 lg:hidden" aria-label="Menu">
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        {mobileOpen && (
          <nav className="lg:hidden border-t border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 px-4 py-3 space-y-1 animate-slide-down">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} end={item.path === '/'} onClick={closeAll}
                className={({ isActive }) => `block px-3 py-2.5 rounded-lg text-sm font-medium ${isActive ? 'bg-brand-50 dark:bg-brand-950/30 text-brand-700 dark:text-brand-300' : 'text-ink-700 dark:text-ink-200 hover:bg-ink-50 dark:hover:bg-ink-700/50'}`}>
                {item.label}
              </NavLink>
            ))}
            <div className="pt-2 border-t border-ink-100 dark:border-ink-700 mt-2">
              <p className="text-xs font-semibold text-ink-400 uppercase px-3 py-1">Top Categories</p>
              {categories.slice(0, 6).map((c) => (
                <Link key={c.id} to={`/categories/${c.slug}`} onClick={closeAll} className="block px-3 py-2 text-sm text-ink-600 dark:text-ink-300 hover:bg-ink-50 dark:hover:bg-ink-700/50 rounded-lg">{c.name}</Link>
              ))}
            </div>
          </nav>
        )}
      </header>
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
