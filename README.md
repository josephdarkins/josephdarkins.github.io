# Joseph Darkins - Portfolio & Blog

A minimalist, modern personal website and blog built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Minimal, elegant design** inspired by Claude.ai's aesthetic
- **Responsive design** that looks great on all devices
- **Blog system** with markdown support for bi-weekly articles
- **SEO optimized** with meta tags, Open Graph, sitemap, and robots.txt
- **Fast performance** with static export for GitHub Pages
- **Dark-aware design** with natural color palette (stone tones)
- **No external analytics** - privacy-focused

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# Visit http://localhost:4000

# Build for production
npm run build
```

## Writing Blog Posts

Create markdown files in `content/blog/` with frontmatter:

```markdown
---
title: Your Post Title
date: 2025-02-10
category: AI & Technology
excerpt: Brief summary
---

# Your Post

Content here...
```

## Project Structure

- `app/` - Next.js pages and layouts
- `components/` - Reusable components (Navigation, Footer)
- `content/blog/` - Blog posts in markdown
- `lib/blog.ts` - Blog utilities
- `public/` - Static files (robots.txt)
- `app/globals.css` - Global styles

## Deployment

The site is configured for GitHub Pages:

```bash
npm run build
git add .
git commit -m "Update"
git push origin main
```

## Contact

- Email: joseph.darkins@gmail.com
- LinkedIn: linkedin.com/in/josephdarkins
- GitHub: github.com/josephdarkins

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
