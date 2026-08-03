import { useDocumentMeta } from '@/hooks/useDocumentMeta';
export function CookiePolicyPage() {
  useDocumentMeta({ title: 'Cookie Policy | Money Director', description: 'Learn about how Money Director uses cookies and similar technologies on our website.', canonical: '/cookie-policy' });
  return (
    <div className="container-narrow py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-ink-900 dark:text-white mb-2">Cookie Policy</h1>
      <p className="text-sm text-ink-400 mb-8">Last updated: January 2025</p>
      <div className="prose-article max-w-none">
        <h2>What Are Cookies</h2><p>Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences, understand how you use the site, and provide essential functionality.</p>
        <h2>How We Use Cookies</h2><p>Money Director uses minimal cookies. We use essential cookies for basic website functionality, such as remembering your dark mode preference. We do not use advertising cookies or trackers that follow you across other websites.</p>
        <h2>Types of Cookies We Use</h2><ul>
          <li><strong>Essential cookies:</strong> Required for the website to function correctly. These include storing your theme preference.</li>
          <li><strong>Analytics cookies (if used):</strong> Privacy-focused analytics that help us understand which content is popular. These do not track individual users.</li>
        </ul>
        <h2>Managing Cookies</h2><p>You can control and delete cookies through your browser settings. Most browsers allow you to block cookies entirely, though this may affect website functionality. Refer to your browser help documentation for instructions.</p>
        <h2>Third-Party Cookies</h2><p>We do not knowingly use third-party advertising cookies. Any third-party services we use for analytics are privacy-focused and do not track you across other websites.</p>
        <h2>Updates to This Policy</h2><p>We may update this Cookie Policy as our practices evolve. Check this page periodically for changes.</p>
      </div>
    </div>
  );
}
export function AccessibilityPage() {
  useDocumentMeta({ title: 'Accessibility Statement | Money Director', description: 'Learn about our commitment to making Money Director accessible to all users, including those with disabilities.', canonical: '/accessibility' });
  return (
    <div className="container-narrow py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-ink-900 dark:text-white mb-2">Accessibility Statement</h1>
      <p className="text-sm text-ink-400 mb-8">Last updated: January 2025</p>
      <div className="prose-article max-w-none">
        <h2>Our Commitment</h2><p>Money Director is committed to making our website accessible to everyone, including people with disabilities. We strive to follow web accessibility standards and continuously improve the user experience for all visitors.</p>
        <h2>Accessibility Features</h2><ul>
          <li>Semantic HTML structure for screen reader compatibility</li>
          <li>Keyboard navigation support for all interactive elements</li>
          <li>Sufficient color contrast between text and background</li>
          <li>Alt text for all images</li>
          <li>Responsive design that adapts to different screen sizes and devices</li>
          <li>Dark mode support for users who prefer reduced brightness</li>
          <li>Respect for prefers-reduced-motion settings</li>
        </ul>
        <h2>Ongoing Efforts</h2><p>We regularly review our website for accessibility and work to address any issues identified. Our goal is to conform to Web Content Accessibility Guidelines (WCAG) where feasible.</p>
        <h2>Reporting Issues</h2><p>If you encounter any accessibility barriers while using Money Director, please contact us through our contact page. We take accessibility feedback seriously and will work to address reported issues.</p>
      </div>
    </div>
  );
}
export function DmcaPage() {
  useDocumentMeta({ title: 'DMCA Policy | Money Director', description: 'Read our DMCA policy for reporting copyright infringement on Money Director.', canonical: '/dmca' });
  return (
    <div className="container-narrow py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-ink-900 dark:text-white mb-2">DMCA Policy</h1>
      <p className="text-sm text-ink-400 mb-8">Last updated: January 2025</p>
      <div className="prose-article max-w-none">
        <h2>Copyright Statement</h2><p>All content on Money Director, including articles, calculators, graphics, and code, is the original work of our editorial and development team or is used with proper licensing. We respect the intellectual property rights of others and expect our users to do the same.</p>
        <h2>Filing a DMCA Notice</h2><p>If you believe that content on Money Director infringes your copyright, you may file a DMCA takedown notice. Your notice must include:</p><ul>
          <li>Identification of the copyrighted work you claim has been infringed</li>
          <li>Identification of the material on Money Director that you claim is infringing, with the URL</li>
          <li>Your contact information, including name, address, and email</li>
          <li>A statement that you have a good faith belief that the use is not authorized</li>
          <li>A statement under penalty of perjury that the information is accurate and that you are the owner or authorized to act on behalf of the owner</li>
          <li>Your physical or electronic signature</li>
        </ul>
        <h2>Where to Send</h2><p>Send DMCA notices to contact@moneydirector.com with the subject line "DMCA Takedown Notice."</p>
        <h2>Response</h2><p>We will review and respond to valid DMCA notices promptly, typically within 72 hours. Infringing content will be removed or disabled upon verification of a valid notice.</p>
        <h2>Counter-Notification</h2><p>If you believe your content was removed in error, you may file a counter-notification with the same contact information. We will restore content upon receiving a valid counter-notification unless we receive notice of legal action.</p>
      </div>
    </div>
  );
}
