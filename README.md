# Vaishnavan.dev

A production-ready, AdSense-friendly developer portfolio and blog website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- ✅ Next.js 14+ with App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ MDX blog posts with frontmatter
- ✅ SEO optimized (metadata, sitemap, robots.txt, RSS feed)
- ✅ AdSense compliant (privacy policy, terms, disclaimer, cookie policy)
- ✅ Cookie consent banner
- ✅ Developer tools page (JSON Formatter, Base64 Encoder/Decoder, UUID Generator)
- ✅ Contact form with Formspree integration
- ✅ Responsive design
- ✅ Dark mode support
- ✅ Search and tag filtering for blog posts
- ✅ Table of contents for blog posts
- ✅ Related posts suggestions

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd own-site
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create a `.env.local` file (optional):
```env
NEXT_PUBLIC_SITE_URL=https://vaishnavan.dev
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
own-site/
├── app/                    # Next.js App Router pages
│   ├── blog/              # Blog pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── tools/             # Tools page
│   ├── privacy-policy/    # Legal pages
│   ├── terms/
│   ├── disclaimer/
│   ├── cookie-policy/
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── sitemap.ts         # Dynamic sitemap
│   ├── robots.ts          # robots.txt
│   └── rss.xml/           # RSS feed
├── components/            # React components
├── content/
│   └── posts/             # MDX blog posts
├── lib/                    # Utility functions
└── public/                # Static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Blog Posts

Blog posts are stored in `content/posts/` as MDX files with frontmatter:

```mdx
---
title: Your Post Title
date: 2024-01-01
description: Post description
tags: ['Tag1', 'Tag2']
excerpt: Short excerpt
---

Your content here...
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the project
4. Add environment variables if needed
5. Deploy!

### Environment Variables

Set these in your Vercel project settings:

- `NEXT_PUBLIC_SITE_URL` - Your site URL (e.g., https://vaishnavan.dev)
- `NEXT_PUBLIC_FORMSPREE_ENDPOINT` - Your Formspree form endpoint (optional)

### Custom Domain

1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions
5. Vercel will automatically provision SSL certificates

## Google AdSense Setup

### Prerequisites

Before applying for AdSense, ensure:

1. ✅ Your site has substantial original content (20+ pages)
2. ✅ All legal pages are in place (Privacy Policy, Terms, Disclaimer, Cookie Policy)
3. ✅ Your site is live and accessible
4. ✅ You have an About page and Contact information
5. ✅ Your site uses HTTPS
6. ✅ Content is original and not copyrighted

### Application Process

1. Go to [Google AdSense](https://www.google.com/adsense)
2. Sign in with your Google account
3. Click "Get Started"
4. Enter your website URL
5. Complete the application form
6. Add the AdSense code to your site (you'll receive it after approval)

### Adding AdSense Code

Once approved, add the AdSense code to `app/layout.tsx`:

```tsx
// Add in the <head> section
<script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
  crossOrigin="anonymous"
></script>
```

### ads.txt File

Create a `public/ads.txt` file with your AdSense publisher ID:

```
google.com, pub-XXXXXXXXXX, DIRECT, f08c47fec0942fa0
```

Replace `pub-XXXXXXXXXX` with your actual AdSense publisher ID.

### Ad Placement

- Place ads above the fold (but not too intrusive)
- Between content sections
- In sidebars (if applicable)
- After article content
- Use responsive ad units for mobile

### Best Practices

- Don't click your own ads
- Don't ask others to click your ads
- Follow AdSense policies
- Monitor performance regularly
- Balance ads with user experience

## SEO Optimization

The site includes:

- ✅ Dynamic metadata for all pages
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ JSON-LD structured data
- ✅ XML sitemap
- ✅ robots.txt
- ✅ RSS feed
- ✅ Canonical URLs
- ✅ Semantic HTML

## Content Guidelines

### Blog Posts

- Write original, helpful content
- Aim for 800-1200 words per post
- Use proper headings (H1, H2, H3)
- Include code examples where relevant
- Add images with alt text
- Use tags appropriately

### Legal Pages

- Privacy Policy must include AdSense information
- Terms of Service should be comprehensive
- Disclaimer should cover content and external links
- Cookie Policy should explain all cookie types

## Customization

### Update Site Information

1. Edit `lib/metadata.ts` to update site name and URL
2. Update footer in `components/Footer.tsx`
3. Update social links in footer and contact page
4. Update About page content

### Add New Blog Post

1. Create a new `.mdx` file in `content/posts/`
2. Add frontmatter with title, date, description, tags
3. Write your content in MDX format
4. The post will automatically appear on the blog page

### Modify Tools

Edit the tools in `app/tools/page.tsx` to add or modify developer tools.

## Troubleshooting

### Build Errors

- Ensure all dependencies are installed: `npm install`
- Check Node.js version (18+ required)
- Clear `.next` folder and rebuild

### MDX Issues

- Ensure frontmatter is properly formatted
- Check that all required fields are present
- Verify file extension is `.mdx`

### Formspree Not Working

- Verify your Formspree endpoint is correct
- Check that the endpoint is set in environment variables
- Ensure CORS is properly configured

## Support

For issues or questions:

- Email: vaishnavan268@gmail.com
- Check the blog posts for tutorials and guides

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons and UI patterns from various open source projects

---

Built with ❤️ by Vaishnavan
