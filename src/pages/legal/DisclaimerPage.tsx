import { useDocumentMeta } from '@/hooks/useDocumentMeta';

export function DisclaimerPage() {
  useDocumentMeta({ title: 'Disclaimer | Money Director', description: 'Read the Money Director disclaimer regarding the limitations of our financial content and calculators.', canonical: '/disclaimer' });
  return (
    <div className="container-narrow py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-ink-900 dark:text-white mb-2">Disclaimer</h1>
      <p className="text-sm text-ink-400 mb-8">Last updated: January 2025</p>
      <div className="prose-article max-w-none">
        <h2>General Disclaimer</h2><p>The information provided on Money Director is for general informational and educational purposes only. All content is provided in good faith, however, we make no representation or warranty of any kind regarding the accuracy, adequacy, validity, reliability, or completeness of any information on this website.</p>
        <h2>Not Financial Advice</h2><p>Content on Money Director is not financial advice, investment advice, tax advice, or legal advice. Our articles, guides, and calculators are educational tools designed to help you understand financial concepts. They are not a substitute for professional advice tailored to your specific circumstances.</p><p>Before making any financial decisions, you should consult with a qualified financial advisor, tax professional, or attorney who can assess your individual situation and provide personalized guidance.</p>
        <h2>Calculator Disclaimer</h2><p>Our financial calculators are provided as educational tools. They use standard financial formulas and make simplifying assumptions. Real-world results may differ from calculator outputs due to factors including but not limited to: changes in interest rates, tax law changes, investment performance variability, fees, and individual circumstances.</p><p>Calculator results are estimates and should not be relied upon as the sole basis for financial decisions. Always verify important calculations with a qualified professional.</p>
        <h2>Investment Disclaimer</h2><p>Any references to investment returns, historical performance, or investment strategies are for educational purposes. Past performance does not guarantee future results. All investments carry risk, including the potential loss of principal. You should carefully consider your investment objectives and risk tolerance before investing.</p>
        <h2>External Links Disclaimer</h2><p>Money Director may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy, relevance, or completeness of information on external websites.</p>
        <h2>Use at Your Own Risk</h2><p>Your use of Money Director and reliance on any information is solely at your own risk. Money Director will not be liable for any losses or damages resulting from the use of our website or reliance on its content.</p>
        <h2>Professional Consultation</h2><p>We strongly encourage you to seek professional advice for your specific financial situation. A qualified professional can provide guidance tailored to your individual circumstances that general educational content cannot provide.</p>
      </div>
    </div>
  );
}
