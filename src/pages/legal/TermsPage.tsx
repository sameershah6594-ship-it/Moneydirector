import { useDocumentMeta } from '@/hooks/useDocumentMeta';

export function TermsPage() {
  useDocumentMeta({ title: 'Terms of Service | Money Director', description: 'Read the terms of service for using Money Director, including acceptable use, disclaimers, and limitations of liability.', canonical: '/terms' });
  return (
    <div className="container-narrow py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-ink-900 dark:text-white mb-2">Terms of Service</h1>
      <p className="text-sm text-ink-400 mb-8">Last updated: January 2025</p>
      <div className="prose-article max-w-none">
        <h2>Acceptance of Terms</h2><p>By accessing and using Money Director, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.</p>
        <h2>Use of Our Website</h2><p>Money Director provides free financial calculators, guides, and articles for educational purposes. You agree to use our website only for lawful purposes and in a manner that does not infringe the rights of others or restrict their use of the website.</p>
        <h2>Educational Content Only</h2><p>All content on Money Director is provided for educational and informational purposes only. It is not intended as financial advice, investment advice, tax advice, or legal advice. You should consult with a qualified professional before making financial decisions based on information from this website.</p>
        <h2>Calculator Accuracy</h2><p>Our financial calculators use standard formulas and are designed to provide estimates. However, results may vary based on individual circumstances and assumptions. We do not guarantee the accuracy of calculator results and recommend verifying important calculations with a financial professional.</p>
        <h2>Intellectual Property</h2><p>All content on Money Director, including articles, calculators, designs, and code, is the property of Money Director and is protected by copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works without permission.</p>
        <h2>Third-Party Links</h2><p>Our website may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of these external sites. You access third-party websites at your own risk.</p>
        <h2>Limitation of Liability</h2><p>Money Director is provided on an "as is" and "as available" basis. We do not warrant that the website will be error-free, uninterrupted, or free of harmful components. To the fullest extent permitted by law, we disclaim all liability for damages arising from your use of or reliance on our website and its content.</p>
        <h2>No Professional Relationship</h2><p>Use of this website does not create a professional or advisory relationship between you and Money Director. We do not provide personalized financial advice through this website.</p>
        <h2>Changes to Terms</h2><p>We may modify these Terms of Service at any time. We will update the date at the top of this page when we make changes. Continued use of the website after changes constitutes acceptance of the new terms.</p>
        <h2>Contact</h2><p>If you have questions about these Terms of Service, please contact us through our contact page.</p>
      </div>
    </div>
  );
}
