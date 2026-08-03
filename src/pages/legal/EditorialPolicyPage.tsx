import { useDocumentMeta } from '@/hooks/useDocumentMeta';

export function EditorialPolicyPage() {
  useDocumentMeta({ title: 'Editorial Policy | Money Director', description: 'Learn about our editorial standards, content review process, and commitment to accuracy and transparency in financial education.', canonical: '/editorial-policy' });
  return (
    <div className="container-narrow py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-ink-900 dark:text-white mb-2">Editorial Policy</h1>
      <p className="text-sm text-ink-400 mb-8">Last updated: January 2025</p>
      <div className="prose-article max-w-none">
        <h2>Our Commitment</h2><p>Money Director is committed to providing accurate, clear, and useful financial information. This editorial policy outlines the standards and practices we follow to ensure the quality and integrity of our content.</p>
        <h2>Content Standards</h2><ul>
          <li><strong>Accuracy:</strong> We strive to ensure all information is accurate at the time of publication. Financial concepts are explained correctly, and calculations use appropriate formulas.</li>
          <li><strong>Clarity:</strong> We write in plain language, defining technical terms when first used. Our goal is to make finance understandable for readers at all levels of knowledge.</li>
          <li><strong>Objectivity:</strong> Our content is educational, not promotional. We do not recommend specific financial products in exchange for compensation. When we mention product types, we do so for educational purposes.</li>
          <li><strong>Honesty:</strong> We do not use fake testimonials, invented statistics, false claims, or misleading comparisons. Our content reflects genuine educational intent.</li>
          <li><strong>Usefulness:</strong> We focus on providing practical, actionable information that readers can apply to their financial decisions.</li>
        </ul>
        <h2>Content Review Process</h2><p>All articles go through a review process before publication. This process includes checking for factual accuracy, clarity, completeness, and adherence to our editorial standards. Content is reviewed by our editorial team to ensure it meets our quality benchmarks.</p>
        <h2>Content Updates</h2><p>Financial information can change over time due to new regulations, market conditions, or product changes. We review and update our content periodically to maintain accuracy. Each article displays its original publication date and last updated date so readers know how current the information is.</p>
        <h2>Author Transparency</h2><p>Every article on Money Director is attributed to a named author. Our authors have profiles that describe their background, areas of expertise, and role at Money Director. We believe readers have the right to know who is providing the information they rely on.</p>
        <h2>No Sponsored Content</h2><p>Money Director does not publish sponsored articles or paid promotions. All content is created by our editorial team based on what we believe is most useful to our readers, not based on commercial arrangements with third parties.</p>
        <h2>Affiliate Disclosure</h2><p>If Money Director ever includes affiliate links in the future, such links will be clearly disclosed. Any potential affiliate relationships will not influence our editorial content or recommendations.</p>
        <h2>Corrections</h2><p>If we discover an error in our content, we correct it promptly. Significant corrections are noted on the affected article with the date of correction. If you spot an error, please contact us so we can review and correct it.</p>
        <h2>Reader Feedback</h2><p>We welcome feedback on our content. If you believe an article is inaccurate, unclear, or could be improved, please contact us through our contact page. Reader feedback helps us maintain and improve our content quality.</p>
        <h2>Calculator Methodology</h2><p>Our calculators use established financial formulas. Each calculator is designed to provide educational estimates based on user inputs. We document the methodology behind our calculations to ensure transparency. However, calculator results are estimates and may not reflect real-world outcomes exactly.</p>
      </div>
    </div>
  );
}
