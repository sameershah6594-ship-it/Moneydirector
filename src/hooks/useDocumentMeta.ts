import { useEffect } from 'react';

export function useDocumentMeta(opts: {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  jsonLd?: object;
}) {
  useEffect(() => {
    document.title = opts.title;
    const setMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };
    setMeta('description', opts.description);
    setMeta('og:title', opts.title, 'property');
    setMeta('og:description', opts.description, 'property');
    setMeta('twitter:title', opts.title);
    setMeta('twitter:description', opts.description);
    if (opts.ogImage) {
      setMeta('og:image', opts.ogImage, 'property');
      setMeta('twitter:image', opts.ogImage);
    }
    if (opts.canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', opts.canonical);
    }
    let jsonLdEl = document.getElementById('page-jsonld') as HTMLScriptElement | null;
    if (opts.jsonLd) {
      if (!jsonLdEl) {
        jsonLdEl = document.createElement('script');
        jsonLdEl.setAttribute('type', 'application/ld+json');
        jsonLdEl.id = 'page-jsonld';
        document.head.appendChild(jsonLdEl);
      }
      jsonLdEl.textContent = JSON.stringify(opts.jsonLd);
    } else if (jsonLdEl) {
      jsonLdEl.remove();
    }
    window.scrollTo(0, 0);
  }, [opts.title, opts.description, opts.canonical, opts.ogImage, opts.jsonLd]);
}
