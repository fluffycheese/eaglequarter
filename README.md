# 🦅 Eagle Quarter Newbury Website
[Website for independent news](https://eaglequarter.co.uk) regarding Eagle Quarter development in Newbury town centre.

This repository contains the source code for the **Eagle Quarter Newbury** information website, built with [Astro](https://astro.build/) and hosted on [Cloudflare Pages](https://pages.cloudflare.com/). The site is fully static and optimized for SEO, featuring Markdown-based content, responsive design, and optional comment integration.
## 🤷‍♂️ Reason for building this website
### A local publishing experiment, a technical playground, and a slow return to building on the web
#### What this project is
This repository powers [eaglequarter.co.uk](https://eaglequarter.co.uk), a small but growing independent site covering:
- The Eagle Quarter development in Newbury
- Wider Newbury town centre regeneration
- Editorials and news about independent local businesses (retailers, restaurants, cafés)
- Community perspectives and long-form pieces written by people who actually live and work here

At its core, this is a local publishing project — but it’s also a technical learning exercise, a portfolio piece, and a place for me to indulge a long-standing obsession with infrastructure, automation, and new frameworks.
### Why this exists
I haven’t built a website from the ground up in ~20 years.In that time, my career has been focused on:
- Server and platform infrastructure
- Reliability, availability, and operations
- Consulting on systems rather than owning end-to-end delivery

Most of my day-to-day work has lived in:
- Terraform / OpenTofu
- NixOS
- Docker (including Swarm)
- Systems design, automation, and failure modes

This project is me deliberately stepping back into:
- Modern frontend tooling
- Static-first publishing
- SEO-aware content delivery
- Simple systems that scale socially, not just technically

I wanted something real, with real users and constraints — not a tutorial app.
### 🗃️ Personal Portfolio Project
This project is a self-directed exercise to explore **modern, serverless website deployment** using [Astro](https://astro.build/) and [Cloudflare Pages](https://pages.cloudflare.com/). The goal is to gain hands-on experience with:
- **Astro framework**: Writing content in Markdown, using reusable layouts, and generating fully static HTML for performance and SEO.
- **Serverless deployment**: Hosting on Cloudflare Pages to deliver content globally without managing web servers.
- **Best practices focused**: Aiming to maximise key website metrics - performance, accesibility, SEO, etc. Using clean URLs, structured metadata, schema.org integration, and fast-loading pages.
**This project demonstrates:**
- Setting up static site generators
- Integrating content in Markdown
- Creating multi-stage development workflows (dev → staging → production)
- Leveraging serverless hosting for performance, reliability, and scalability
- Applying best practices at every stage of the build
> ⚠️ This project is used as a learning exercise to enhance and expand my skills in **modern web development, infrastructure and deployment workflows**
### ⚙️ Why I chose this stack
This setup was intentionally selected to align with my **existing toolstack and automation-focused workflow**:
- **Astro**: Enables rapid content updates via Markdown, making it easy to add new articles and maintain consistent layouts without rebuilding complex templates.
- **Cloudflare Pages**: Offers **speed, global edge delivery, and automated deployment**. It integrates seamlessly with other Cloudflare tools I use on other projects, such as Workers and Turnstiles, making it easy to extend functionality with minimal configuration.
- **Git branching and workflow**: Provides versioned development, staging, and production branches, enabling rollbacks, auditing, and safe collaboration.
- **Immutable modular infrastructure**: Fits with my philosophy of portability, automation and reproducibility (inspired by my NixOS, Terraform/OpenTofu, docker and docker swarm projects) — prioritizing **rebuilding and redeploying cleanly** rather than repairing or patching live servers.
> Overall, this stack allows me to **quickly iterate, deploy, and scale** while following best practices, modularity, and automation — all while learning and experimenting with modern web development techniques.
## 🚧 Development Branches & Workflow
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
4. Cloudflare automatically builds and deploys a preview URL for review/testing.
5. Once approved, merge `staging` → `main` and push.
6. Cloudflare automatically builds and deploys the production site.
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
## 🛠️ Local Development
### Prerequisites
- Node.js ≥ 18
- npm (comes with Node.js)
- Git (optional)
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
│   └── content/              # Markdown content files
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
## 📝 Automated local news ingestion
- Automated local news aggregation
- Human-reviewed AI editorial workflow
- Immutable content pipeline
- SEO-first static publishing
- No scraping abuse
- Clear attribution & ethics
### 🤖 n8n workflow
```bash
Cron
  ↓
Search / Crawl sources
  ↓
Filter Eagle Quarter relevance
  ↓
Deduplicate vs existing posts
  ↓
AI summarise + rewrite
  ↓
Generate Markdown frontmatter + content
  ↓
Commit to GitHub (dev branch, src/content/news/draft folder)
```
