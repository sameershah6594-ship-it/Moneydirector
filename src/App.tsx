import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/hooks/useTheme';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';
import { PrivacyPage } from '@/pages/legal/PrivacyPage';
import { TermsPage } from '@/pages/legal/TermsPage';
import { DisclaimerPage } from '@/pages/legal/DisclaimerPage';
import { EditorialPolicyPage } from '@/pages/legal/EditorialPolicyPage';
import { CookiePolicyPage, AccessibilityPage, DmcaPage } from '@/pages/legal/OtherLegalPages';
import { AuthorsPage, AuthorProfilePage } from '@/pages/AuthorsPage';
import { AllArticlesPage, SearchPage } from '@/pages/AllArticlesPage';
import { ArticlePage } from '@/pages/ArticlePage';
import { CategoriesPage, CategoryPage } from '@/pages/CategoryPages';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { SitemapPage } from '@/pages/SitemapPage';
import { CalculatorsPage } from '@/pages/CalculatorsPage';
import { CalculatorPage } from '@/pages/CalculatorPage';
import { GuidesPage, ResourcesPage } from '@/pages/GuidesResources';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-ink-50 dark:bg-ink-950 text-ink-800 dark:text-ink-200">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/calculators" element={<CalculatorsPage />} />
            <Route path="/calculators/:slug" element={<CalculatorPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/categories/:slug" element={<CategoryPage />} />
            <Route path="/articles" element={<AllArticlesPage />} />
            <Route path="/articles/:slug" element={<ArticlePage />} />
            <Route path="/authors" element={<AuthorsPage />} />
            <Route path="/authors/:id" element={<AuthorProfilePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/guides" element={<GuidesPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="/editorial-policy" element={<EditorialPolicyPage />} />
            <Route path="/cookie-policy" element={<CookiePolicyPage />} />
            <Route path="/accessibility" element={<AccessibilityPage />} />
            <Route path="/dmca" element={<DmcaPage />} />
            <Route path="/sitemap" element={<SitemapPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}
