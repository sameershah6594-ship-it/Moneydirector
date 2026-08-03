# Money Director

A complete, production-ready finance website with 20+ working calculators, 50+ in-depth articles, 16 finance categories, dark mode, search, and full SEO optimization.

## Quick Start (Local Development)

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages (Automatic)

This repository includes a GitHub Actions workflow that builds and deploys automatically.

### Steps:

1. **Push this code to a GitHub repository** (public or private).

2. **Enable GitHub Pages:**
   - Go to your repo settings on GitHub
   - Click **Pages** in the left sidebar
   - Under **Source**, select **GitHub Actions**
   - That's it! The included workflow handles everything.

3. **Wait for the action to complete:**
   - Go to the **Actions** tab in your repo
   - You'll see "Deploy to GitHub Pages" running
   - Once complete, your site is live at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

4. **Optional - Set a custom domain:**
   - If you have a custom domain, add it in Settings > Pages > Custom domain
   - Set the `SITE_URL` variable in Settings > Secrets and variables > Actions to your domain
   - This ensures the sitemap uses your domain

### How it works:
- The GitHub Action runs on every push to `main` or `master`
- It builds the site, generates the sitemap, and adds a 404.html fallback
- It deploys the `dist/` folder to GitHub Pages
- No manual steps needed after the initial setup

## Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Vercel auto-detects Vite. The included `vercel.json` handles SPA routing.
4. Click Deploy. Your site is live in seconds.

## Deploy to Cloudflare Pages

1. Push your code to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com) and create a new project
3. Connect your GitHub repository
4. Build command: `npm run build`
5. Output directory: `dist`
6. Click Save and Deploy

## Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and import your repository
3. The included `netlify.toml` handles build settings and SPA redirects
4. Click Deploy

## Features

- 20+ fully functional financial calculators (EMI, mortgage, compound interest, retirement, etc.)
- 50+ original SEO-optimized articles across 16 finance categories
- 5 author profiles with editorial team page
- Full dark mode / light mode toggle
- Live search with article and category filtering
- Mega menu navigation with sticky header
- Glassmorphism design, soft shadows, smooth animations
- Fully responsive (mobile, tablet, desktop)
- SEO: sitemap.xml, robots.txt, RSS feed, Open Graph, Twitter Cards, JSON-LD schema
- Reading progress bar on articles
- Back-to-top button
- Newsletter signup
- Contact form
- 404 page, sitemap page, all legal pages (Privacy, Terms, Disclaimer, Editorial Policy, Cookie Policy, Accessibility, DMCA)

## Tech Stack

- React + TypeScript
- Vite
- React Router (HashRouter for static hosting compatibility)
- Tailwind CSS
- Lucide React icons

## Build

```bash
npm run build      # Builds to dist/ with sitemap and 404 fallback
npm run typecheck   # Type checking
npm run preview     # Preview the production build locally
```

## License

This project is free to use for educational and personal finance purposes.
