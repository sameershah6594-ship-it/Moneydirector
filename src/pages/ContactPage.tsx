import AdBanner from '@/components/AdBanner';
import { useState } from 'react';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { Mail, MessageSquare, Check, Send } from 'lucide-react';

export function ContactPage() {
  useDocumentMeta({ title: 'Contact Us | Money Director', description: 'Get in touch with the Money Director team. We welcome feedback, questions, and suggestions about our financial content and calculators.', canonical: '/contact' });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email.includes('@') || !form.message) return;
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };
  return (
    <div className="container-narrow py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-ink-900 dark:text-white mb-4">Contact Us</h1>
      <p className="text-ink-500 dark:text-ink-400 mb-8">Have a question, suggestion, or feedback? We would love to hear from you. Fill out the form below and we will get back to you as soon as possible.</p>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {sent ? (
            <div className="card p-8 text-center"><Check size={40} className="mx-auto text-accent-500 mb-3" /><h3 className="font-bold text-ink-900 dark:text-white text-lg">Message Sent!</h3><p className="text-sm text-ink-500 mt-2">Thank you for reaching out. We will respond to your message as soon as possible.</p></div>
          ) : (
            <form onSubmit={submit} className="card p-6 sm:p-8 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label className="label" htmlFor="name">Name</label><input id="name" className="input" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required /></div>
                <div><label className="label" htmlFor="email">Email</label><input id="email" type="email" className="input" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required /></div>
              </div>
              <div><label className="label" htmlFor="subject">Subject</label><input id="subject" className="input" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} /></div>
              <div><label className="label" htmlFor="message">Message</label><textarea id="message" rows={6} className="input" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required /></div>
              <button type="submit" className="btn-primary w-full"><Send size={16} /> Send Message</button>
            </form>
          )}
        </div>
        <div className="space-y-4">
          <div className="card p-6"><Mail className="text-brand-500 mb-2" /><h3 className="font-bold text-ink-900 dark:text-white text-sm">Email</h3><p className="text-sm text-ink-500 mt-1">contact@moneydirector.com</p></div>
          <div className="card p-6"><MessageSquare className="text-accent-500 mb-2" /><h3 className="font-bold text-ink-900 dark:text-white text-sm">Feedback</h3><p className="text-sm text-ink-500 mt-1">We welcome feedback on our articles and calculators to help us improve.</p></div>
        </div>
      </div>

      {/* All Ad Banners Group */}
      <div className="space-y-6 my-8">
        <div className="flex justify-center">
          <AdBanner adKey="c060f5177a7056171ced5eb7d122263b" width={728} height={90} />
        </div>
        <div className="flex justify-center">
          <AdBanner adKey="a5c311e35c3cc50874ca5095d1067bd7" width={468} height={60} />
        </div>
        <div className="flex justify-center">
          <AdBanner adKey="28b1ef1ed72a56336e840b4f6320c007" width={320} height={50} />
        </div>
        <div className="flex justify-center">
          <AdBanner adKey="f8859593b9fae7463829294cd25ec77c" width={300} height={250} />
        </div>
        <div className="flex justify-center">
          <AdBanner adKey="adac8595e5b09981e190ac3b9a784240" width={160} height={300} />
        </div>
        <div className="flex justify-center">
          <AdBanner adKey="f879294844b6d212e1556d3aa4f17bf5" width={160} height={600} />
        </div>
      </div>
    </div>
  );
}
