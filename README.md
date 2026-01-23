# Eagle Quarter
Website for independent news regarding Eagle Quarter development in Newbury town centre
# Eagle Quarter Newbury Website
This repository contains the source code for the **Eagle Quarter Newbury** information website, built with [Astro](https://astro.build/) and hosted on [Cloudflare Pages](https://pages.cloudflare.com/). The site is fully static and optimized for SEO, featuring Markdown-based content, responsive design, and optional comment integration.
---
## 🏗 Development Branches & Workflow
We use a three-stage branching workflow to ensure safe development and production deployments.

| Branch | Purpose | Cloudflare Deployment |
|--------|---------|---------------------|
| `dev` | Local development branch. Work on content, pages, layouts. | **No automated build**. Preview locally with `npm run dev` or `npm run preview`. |
| `staging` | Integration branch after `dev` changes are verified locally. | **Automated Cloudflare Pages build** for testing on a live preview URL. |
| `main` | Production-ready branch. Merges from `staging` after testing. | **Automated Cloudflare Pages build** and deployment to `https://eaglequarter.co.uk`. |

**Recommended workflow:**

1. Work on `dev` locally.
2. Test locally using `npm run dev` or `npm run preview`.
3. Merge `dev` → `staging` and push.
4. Cloudflare generates a preview URL for review/testing.
5. Once approved, merge `staging` → `main`.
6. Cloudflare deploys the production site automatically.
> **Note:** All merges should be done via pull requests to maintain a clear history and allow review.
---
## ☁️ Cloudflare Pages Setup
1. **Create a new Pages project** on Cloudflare and connect this GitHub repository.
2. **Production branch**: `main`
3. **Preview branch**: `staging` (optional: any feature branch can also trigger a preview build)
4. **Framework preset**: `Astro`
5. **Build settings**:
   - Build command: `npm run build`
   - Output directory: `dist`
6. **Environment variables**: Only required if integrating Giscus comments or analytics (see Astro docs).
7. **Custom domain**: `eaglequarter.co.uk` → set via Cloudflare Pages dashboard.
8. **Always HTTPS**: Enable for secure connections.
---
## 💻 Local Development
### Prerequisites
- Node.js ≥ 18
- npm (comes with Node.js)
### Install dependencies
```bash
npm install
```
### Run local development server
```bash
npm run dev
```
- Starts Astro dev server at http://localhost:4321/
- Supports hot reload for rapid development
- Works with Markdown content and layout updates
### Preview production build locally
```bash
npm run build
npm run preview
```
- Builds the static site to dist/
- Serves the production output locally
- Useful for testing before pushing to staging or main
### Clean and rebuild (optional)
```bash
rm -rf dist .astro node_modules
npm install
npm run build
```
- Ensures a fresh build if you encounter caching or build errors
### 📂 File structure
```bash
eaglequarter/
├── astro.config.mjs          # Astro configuration
├── package.json              # Project dependencies and scripts
├── public/                   # Static assets (favicon, robots.txt, etc.)
├── src/
│   ├── layouts/              # Shared layouts (BaseLayout.astro)
│   ├── pages/                # Astro pages (.astro)
│   └── content/articles/     # Markdown content files
├── .gitignore                # Files and folders to ignore in Git
└── README.md
```
### 📜 Notes
- Markdown pages are imported with:
```bash
import { frontmatter, Content } from '../content/articles/development.md';
```
- SEO-friendly metadata is pulled from the frontmatter (title & description).
- Use `trailingSlash: "always"` in `astro.config.mjs` for clean URLs compatible with Cloudflare Pages.
- Optional: add Giscus comments or analytics by injecting scripts in BaseLayout.astro.
### ⚙️ Summary
This workflow ensures:
- Safe local development (dev)
- Automated preview builds (staging)
- Automated production deployment to live site (main)

Following this workflow keeps content consistent, previewable, and SEO-optimized.