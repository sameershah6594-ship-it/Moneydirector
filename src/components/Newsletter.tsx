import { useState } from 'react';
import { Check } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes('@')) return;
    setDone(true);
    setTimeout(() => { setDone(false); setEmail(''); }, 3000);
  };
  return (
    <div className="card p-6 sm:p-8 text-center">
      <h3 className="text-xl font-bold text-ink-900 dark:text-ink-50 mb-2">Stay Money Smart</h3>
      <p className="text-sm text-ink-500 dark:text-ink-400 mb-4">Get the latest finance tips and calculator updates. No spam, unsubscribe anytime.</p>
      {done ? (
        <p className="text-accent-600 dark:text-accent-400 font-semibold flex items-center justify-center gap-2"><Check size={18} /> You are subscribed! Check your inbox.</p>
      ) : (
        <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="input flex-1" required />
          <button type="submit" className="btn-primary whitespace-nowrap">Subscribe</button>
        </form>
      )}
    </div>
  );
}
