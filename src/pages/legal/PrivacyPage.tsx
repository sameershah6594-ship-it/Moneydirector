import { useDocumentMeta } from '@/hooks/useDocumentMeta';

export function PrivacyPage() {
  useDocumentMeta({ title: 'Privacy Policy | Money Director', description: 'Read the Money Director privacy policy to understand how we handle visitor information and protect your privacy.', canonical: '/privacy' });
  return (
    <div className="container-narrow py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-ink-900 dark:text-white mb-2">Privacy Policy</h1>
      <p className="text-sm text-ink-400 mb-8">Last updated: January 2025</p>
      <div className="prose-article max-w-none">
        <h2>Introduction</h2><p>This Privacy Policy describes how Money Director handles information collected through our website. We are committed to protecting your privacy and being transparent about our data practices. By using our website, you agree to the practices described in this policy.</p>
        <h2>Information We Collect</h2><p>Money Director is a static website that does not require user registration or accounts. We collect minimal information:</p>
        <ul><li><strong>Anonymous usage data:</strong> We may use privacy-focused analytics to understand which pages are popular and how visitors find our site. This data is aggregated and does not identify individual users.</li><li><strong>Newsletter submissions:</strong> If you subscribe to our newsletter, we collect your email address to send you updates. You can unsubscribe at any time.</li><li><strong>Contact form submissions:</strong> If you contact us through our form, we collect the information you provide (name, email, message) to respond to your inquiry.</li></ul>
        <h2>How We Use Information</h2><p>We use collected information to:</p><ul><li>Respond to your inquiries and feedback</li><li>Send newsletter updates if you subscribe</li><li>Improve our content and website based on usage patterns</li><li>Monitor and protect against fraudulent activity</li></ul>
        <h2>Cookies</h2><p>Our website may use essential cookies for basic functionality. We do not use advertising cookies or third-party tracking cookies that follow you across other websites. Any analytics we use are privacy-focused and do not track individual users. You can control cookies through your browser settings.</p>
        <h2>Third-Party Services</h2><p>We may use third-party services for analytics, email delivery, and website hosting. These services have their own privacy policies, and we encourage you to review them. We do not share your personal information with third parties for marketing purposes.</p>
        <h2>Data Retention</h2><p>We retain newsletter subscriber emails only as long as you remain subscribed. Contact form submissions are retained only as long as needed to respond to your inquiry. You can request deletion of your data at any time by contacting us.</p>
        <h2>Your Rights</h2><p>You have the right to: access the personal data we hold about you, request correction of inaccurate data, request deletion of your data, unsubscribe from our newsletter at any time, and object to certain processing of your data. To exercise these rights, contact us using the information on our contact page.</p>
        <h2>Children's Privacy</h2><p>Our website is not directed at children under 13, and we do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us so we can remove it.</p>
        <h2>Changes to This Policy</h2><p>We may update this Privacy Policy from time to time. We will update the date at the top of this page when we make changes. We encourage you to review this policy periodically.</p>
        <h2>Contact</h2><p>If you have questions about this Privacy Policy or our data practices, please contact us through our contact page or at contact@moneydirector.com.</p>
      </div>
    </div>
  );
}
