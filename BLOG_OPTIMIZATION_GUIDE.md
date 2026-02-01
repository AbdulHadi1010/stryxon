# Blog Subdomain SEO & Performance Optimization Guide

## Complete Guide for blog.stryxon.com

> **Context**: blog.stryxon.com is a separate Next.js application, subdomain of www.stryxon.com
> **Goal**: Achieve PageSpeed scores of 85+ Performance, 95+ Accessibility, 95+ Best Practices, 100 SEO
> **Prerequisites**: Blog is deployed on Vercel, uses Next.js App Router, Cloudflare DNS configured

---

## 1. Search Engine Verification Setup

### 1.1 Google Search Console

**Important**: Even though it's a subdomain, Google requires separate verification.

**Steps:**

1. Go to https://search.google.com/search-console
2. Click "Add Property" → Choose "URL prefix"
3. Enter: `https://blog.stryxon.com`
4. Choose "HTML tag" verification method
5. Copy the verification code (e.g., `google-site-verification: ABC123XYZ`)

**Implementation in blog's `app/layout.tsx`:**

```tsx
export const metadata = {
  metadataBase: new URL("https://blog.stryxon.com"),
  title: {
    default: "Stryxon Blog - Web Development, Cloud & AI Insights",
    template: "%s | Stryxon Blog",
  },
  description:
    "Expert insights on web development, cloud infrastructure, AI engineering, and software development best practices from Stryxon Technologies.",
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE_HERE",
  },
};
```

### 1.2 Bing Webmaster Tools

**Steps:**

1. Go to https://www.bing.com/webmasters
2. Add site: `https://blog.stryxon.com`
3. Choose "HTML Meta tag" verification (easiest)
4. Copy the verification code (e.g., `C0549FAD2F7AC236A4797DB4D4E7AC27`)

**Implementation in blog's `app/layout.tsx`:**

```tsx
export const metadata = {
  // ... other metadata
  verification: {
    google: "YOUR_GOOGLE_CODE",
    other: {
      "msvalidate.01": "YOUR_BING_VERIFICATION_CODE",
    },
  },
};
```

### 1.3 Yandex Webmaster

**Steps:**

1. Go to https://webmaster.yandex.com
2. Add site: `https://blog.stryxon.com`
3. Choose "Meta tag" verification
4. Copy the verification code

**Implementation:**

```tsx
export const metadata = {
  // ... other metadata
  verification: {
    google: "YOUR_GOOGLE_CODE",
    other: {
      "msvalidate.01": "YOUR_BING_CODE",
      "yandex-verification": "YOUR_YANDEX_CODE",
    },
  },
};
```

---

## 2. Analytics & Performance Monitoring

### 2.1 Install Vercel Analytics & Speed Insights

**Run in blog project directory:**

```bash
npm install @vercel/analytics @vercel/speed-insights
```

### 2.2 Integrate in Layout

**Update blog's `app/layout.tsx`:**

```tsx
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
```

---

## 3. Sitemap Configuration

### 3.1 Create Blog Sitemap

**Create `app/sitemap.ts` in blog project:**

```typescript
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://blog.stryxon.com";

  // Fetch all blog posts dynamically (adjust to your data source)
  // Example structure - replace with your actual blog post fetching logic
  const blogPosts = await getAllBlogPosts(); // Your function to get posts

  const postUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/categories`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...postUrls,
  ];
}
```

### 3.2 Create robots.txt

**Create `app/robots.ts` in blog project:**

```typescript
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/draft/"],
      },
      // Block AI crawlers if desired
      {
        userAgent: ["GPTBot", "ChatGPT-User", "CCBot", "anthropic-ai"],
        disallow: ["/"],
      },
    ],
    sitemap: "https://blog.stryxon.com/sitemap.xml",
  };
}
```

### 3.3 Submit Sitemaps

**After deployment:**

1. **Google Search Console**: Sitemaps → Add `https://blog.stryxon.com/sitemap.xml`
2. **Bing Webmaster**: Sitemaps → Add `https://blog.stryxon.com/sitemap.xml`
3. **Yandex Webmaster**: Indexing → Add `https://blog.stryxon.com/sitemap.xml`

---

## 4. Open Graph & Social Media Metadata

### 4.1 Global Metadata (app/layout.tsx)

```tsx
export const metadata = {
  metadataBase: new URL("https://blog.stryxon.com"),
  title: {
    default: "Stryxon Blog - Web Development & Cloud Infrastructure Insights",
    template: "%s | Stryxon Blog",
  },
  description:
    "Expert insights on web development, cloud infrastructure, AI engineering, DevOps, and modern software development from Stryxon Technologies.",
  keywords: [
    "web development blog",
    "cloud infrastructure tutorials",
    "AI engineering insights",
    "DevOps best practices",
    "Next.js tutorials",
    "software development tips",
  ],
  authors: [{ name: "Stryxon Technologies" }],
  creator: "Stryxon Technologies",
  publisher: "Stryxon Technologies",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blog.stryxon.com",
    siteName: "Stryxon Blog",
    title: "Stryxon Blog - Web Development & Cloud Infrastructure Insights",
    description:
      "Expert insights on web development, cloud infrastructure, AI engineering, and modern software development.",
    images: [
      {
        url: "/og-image.png", // Must be at public/og-image.png (1200x630px)
        width: 1200,
        height: 630,
        alt: "Stryxon Blog - Technical Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stryxon Blog - Web Development Insights",
    description:
      "Expert insights on web development, cloud infrastructure, and AI engineering.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
    other: {
      "msvalidate.01": "YOUR_BING_CODE",
      "yandex-verification": "YOUR_YANDEX_CODE",
    },
  },
};
```

### 4.2 Blog Post Metadata (app/posts/[slug]/page.tsx)

```tsx
import { Metadata } from "next";

export async function generateMetadata({ params }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug); // Your data fetching function

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      type: "article",
      url: `https://blog.stryxon.com/posts/${params.slug}`,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      images: [
        {
          url: post.coverImage || "/og-image.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage || "/og-image.png"],
    },
  };
}
```

---

## 5. Structured Data (JSON-LD)

### 5.1 Blog Organization Schema (app/layout.tsx)

```tsx
export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Stryxon Blog",
    description:
      "Expert insights on web development, cloud infrastructure, and AI engineering",
    url: "https://blog.stryxon.com",
    publisher: {
      "@type": "Organization",
      name: "Stryxon Technologies",
      url: "https://www.stryxon.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.stryxon.com/images/logo.png",
      },
    },
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
```

### 5.2 BlogPosting Schema (app/posts/[slug]/page.tsx)

```tsx
export default async function BlogPost({ params }) {
  const post = await getPostBySlug(params.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Stryxon Technologies",
      logo: {
        "@type": "ImageObject",
        url: "https://www.stryxon.com/images/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://blog.stryxon.com/posts/${params.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>{/* Your blog post content */}</article>
    </>
  );
}
```

### 5.3 BreadcrumbList Schema (for category/post pages)

```tsx
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://blog.stryxon.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Category Name",
      item: "https://blog.stryxon.com/category/web-development",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: post.title,
      item: `https://blog.stryxon.com/posts/${params.slug}`,
    },
  ],
};
```

---

## 6. Security Headers & Configuration

### 6.1 Update next.config.js in Blog Project

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "blog.stryxon.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  reactStrictMode: true,

  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error", "warn"] }
        : false,
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.target = ["web", "es2020"];
    }
    return config;
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' challenges.cloudflare.com va.vercel-scripts.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https:",
              "font-src 'self' data:",
              "connect-src 'self' https: wss:",
              "media-src 'self' https: blob:",
              "frame-src challenges.cloudflare.com",
              "worker-src 'self' blob:",
            ].join("; "),
          },
        ],
      },
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
```

### 6.2 Create .browserslistrc

**Purpose**: Target modern browsers only, removes legacy polyfills (~11 KiB savings)

**Create `.browserslistrc` in blog root:**

```
>0.5%
last 2 versions
not dead
not IE 11
not op_mini all
Chrome >= 90
Firefox >= 88
Safari >= 14
Edge >= 90
```

---

## 7. Performance Optimizations

### 7.1 Image Optimization

**All images should use Next.js Image component with optimized settings:**

```tsx
import Image from "next/image";

// Blog post images
<Image
  src={post.coverImage}
  alt={post.title}
  width={1200}
  height={630}
  quality={75}
  priority={false}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..." // Generate blur placeholder
/>

// Thumbnail images
<Image
  src={post.thumbnail}
  alt={post.title}
  width={400}
  height={225}
  quality={75}
  loading="lazy"
/>
```

**Image Guidelines:**

- Use quality={75} (default is 75, avoid going higher)
- Enable AVIF/WebP formats in next.config.js (done above)
- Use `priority={true}` only for above-the-fold images
- Always provide width/height to prevent CLS
- Use blur placeholders for better UX

### 7.2 Dynamic Imports & Code Splitting

**For heavy components (syntax highlighters, charts, etc.):**

```tsx
import dynamic from "next/dynamic";

// Heavy syntax highlighter - load only when needed
const CodeBlock = dynamic(() => import("@/components/CodeBlock"), {
  loading: () => <div className="h-96 bg-gray-900 animate-pulse rounded" />,
  ssr: false,
});

// Comments section - load after main content
const Comments = dynamic(() => import("@/components/Comments"), {
  loading: () => <div className="h-64 bg-gray-50 animate-pulse" />,
});

// Share buttons - defer loading
const ShareButtons = dynamic(() => import("@/components/ShareButtons"), {
  loading: () => null,
});
```

### 7.3 Font Optimization

**In app/layout.tsx:**

```tsx
import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap", // Prevents FOIT (Flash of Invisible Text)
  preload: true,
});

const headingFont = localFont({
  src: "../public/fonts/heading-font.woff2",
  variable: "--font-heading",
  display: "swap",
  preload: true,
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${headingFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

### 7.4 Preconnect to Required Origins

**Add to app/layout.tsx head:**

```tsx
export const metadata = {
  // ... other metadata
  other: {
    link: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "dns-prefetch",
        href: "https://fonts.gstatic.com",
      },
    ]
      .map((link) => `<link rel="${link.rel}" href="${link.href}" />`)
      .join(""),
  },
};

// Or add directly in layout:
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

---

## 8. Accessibility (WCAG 2.1 AA Compliance)

### 8.1 Essential Accessibility Rules

**1. All interactive elements must have accessible names:**

```tsx
// ❌ Bad - no accessible name
<button onClick={handleClick}>
  <SearchIcon />
</button>

// ✅ Good - has aria-label
<button onClick={handleClick} aria-label="Search blog posts">
  <SearchIcon />
</button>

// ✅ Better - visible text
<button onClick={handleClick}>
  <SearchIcon />
  <span>Search</span>
</button>
```

**2. Touch targets must be at least 44x44px (iOS) or 48x48px (Android):**

```tsx
// ❌ Bad - too small
<button className="p-1">
  <Icon />
</button>

// ✅ Good - minimum touch target
<button className="min-h-12 min-w-12 p-3">
  <Icon />
</button>
```

**3. Images must have meaningful alt text:**

```tsx
// ❌ Bad - no alt or generic alt
<Image src="/post.jpg" alt="image" />

// ✅ Good - descriptive alt
<Image
  src="/post.jpg"
  alt="Developer writing code on laptop with React and TypeScript"
/>

// Decorative images
<Image src="/decoration.png" alt="" role="presentation" />
```

**4. Color contrast must be at least 4.5:1:**

```tsx
// ❌ Bad - low contrast (gray on light gray)
<p className="text-gray-400 bg-gray-100">Read more</p>

// ✅ Good - sufficient contrast
<p className="text-gray-800 bg-white">Read more</p>
<p className="text-white bg-gray-900">Read more</p>
```

**5. Heading hierarchy must be logical:**

```tsx
// ❌ Bad - skips levels
<h1>Blog Post Title</h1>
<h4>Section Title</h4>

// ✅ Good - proper hierarchy
<h1>Blog Post Title</h1>
<h2>Main Section</h2>
<h3>Subsection</h3>
```

**6. Links must have clear purpose:**

```tsx
// ❌ Bad - ambiguous
<a href="/post/1">Click here</a>

// ✅ Good - descriptive
<a href="/post/1">Read "Next.js 15 Performance Guide"</a>
```

**7. Forms must have labels:**

```tsx
// ❌ Bad - no label
<input type="email" placeholder="Email" />

// ✅ Good - proper label
<label htmlFor="email">Email Address</label>
<input id="email" type="email" />

// ✅ Also good - hidden label
<label htmlFor="search" className="sr-only">Search posts</label>
<input id="search" type="search" placeholder="Search..." />
```

### 8.2 Skip to Content Link

**Add at the top of app/layout.tsx:**

```tsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded"
        >
          Skip to main content
        </a>

        <nav>{/* Navigation */}</nav>

        <main id="main-content" tabIndex={-1}>
          {children}
        </main>

        <footer>{/* Footer */}</footer>
      </body>
    </html>
  );
}
```

**Add sr-only utility to globals.css:**

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.focus\:not-sr-only:focus {
  position: static;
  width: auto;
  height: auto;
  padding: inherit;
  margin: inherit;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
```

---

## 9. CSS Animations (GPU Acceleration)

### 9.1 Use Transform & Opacity Only

**❌ Bad - Triggers Layout/Paint:**

```css
@keyframes slide {
  from {
    left: 0;
  }
  to {
    left: 100px;
  }
}

@keyframes fade {
  from {
    background-color: blue;
  }
  to {
    background-color: red;
  }
}
```

**✅ Good - GPU Accelerated:**

```css
@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100px);
  }
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Force GPU acceleration */
.animated-element {
  will-change: transform, opacity;
  transform: translateZ(0);
}
```

### 9.2 Use CSS Variables for Dynamic Animations

```css
:root {
  --animation-duration: 300ms;
  --animation-timing: cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-in {
  animation: fadeIn var(--animation-duration) var(--animation-timing);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

## 10. Cloudflare Configuration (Subdomain)

### 10.1 DNS Setup

**In Cloudflare Dashboard:**

1. Go to DNS settings for stryxon.com
2. Add CNAME record:
   - **Type**: CNAME
   - **Name**: blog
   - **Target**: cname.vercel-dns.com (or your Vercel domain)
   - **Proxy status**: Proxied (orange cloud) ✅
   - **TTL**: Auto

### 10.2 Page Rules (Free Tier: 3 rules)

**Create these page rules in order:**

**Rule 1: Cache Everything (Blog Posts)**

- URL: `blog.stryxon.com/posts/*`
- Settings:
  - Cache Level: Cache Everything
  - Edge Cache TTL: 1 day
  - Browser Cache TTL: 4 hours

**Rule 2: Cache Static Assets**

- URL: `blog.stryxon.com/_next/static/*`
- Settings:
  - Cache Level: Cache Everything
  - Edge Cache TTL: 1 year
  - Browser Cache TTL: 1 year

**Rule 3: Force HTTPS**

- URL: `http://blog.stryxon.com/*`
- Settings:
  - Always Use HTTPS: On

### 10.3 Speed Settings

**Cloudflare → Speed:**

- Auto Minify: Enable HTML, CSS, JavaScript
- Brotli: On
- Early Hints: On (if available)
- Rocket Loader: Off (conflicts with React hydration)

### 10.4 Security Settings

**Cloudflare → Security:**

- Security Level: Medium
- Challenge Passage: 30 minutes
- Browser Integrity Check: On
- Bot Fight Mode: On (be careful - test thoroughly)

---

## 11. Vercel Deployment Configuration

### 11.1 Create vercel.json in Blog Root

```json
{
  "version": 2,
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "SAMEORIGIN"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ],
  "rewrites": [
    {
      "source": "/feed",
      "destination": "/api/feed"
    },
    {
      "source": "/rss",
      "destination": "/api/feed"
    }
  ]
}
```

### 11.2 Environment Variables

**In Vercel Dashboard → Settings → Environment Variables:**

- `NEXT_PUBLIC_SITE_URL=https://blog.stryxon.com`
- `NEXT_PUBLIC_MAIN_SITE_URL=https://www.stryxon.com`
- Any API keys (CMS, analytics, etc.)

---

## 12. RSS Feed (Optional but Recommended)

### 12.1 Create RSS Feed API Route

**Create `app/api/feed/route.ts`:**

```typescript
import { NextResponse } from "next/server";

export async function GET() {
  const posts = await getAllBlogPosts(); // Your function

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Stryxon Blog</title>
    <link>https://blog.stryxon.com</link>
    <description>Expert insights on web development, cloud infrastructure, and AI engineering</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://blog.stryxon.com/feed" rel="self" type="application/rss+xml"/>
    ${posts
      .map(
        (post) => `
    <item>
      <title>${post.title}</title>
      <link>https://blog.stryxon.com/posts/${post.slug}</link>
      <description>${post.excerpt}</description>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <guid>https://blog.stryxon.com/posts/${post.slug}</guid>
    </item>`,
      )
      .join("")}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
```

### 12.2 Add RSS Link to Metadata

**In app/layout.tsx:**

```tsx
export const metadata = {
  // ... other metadata
  alternates: {
    types: {
      "application/rss+xml": "https://blog.stryxon.com/feed",
    },
  },
};
```

---

## 13. Internal Linking Between Main Site & Blog

### 13.1 Link from Main Site to Blog

**In www.stryxon.com navigation:**

```tsx
<nav>
  <Link href="/">Home</Link>
  <Link href="/services">Services</Link>
  <Link href="/about">About</Link>
  <Link href="https://blog.stryxon.com">Blog</Link>
  <Link href="/#contact">Contact</Link>
</nav>
```

### 13.2 Link from Blog to Main Site

**In blog.stryxon.com navigation:**

```tsx
<nav>
  <Link href="/">Blog Home</Link>
  <Link href="/categories">Categories</Link>
  <Link href="https://www.stryxon.com">Main Site</Link>
  <Link href="https://www.stryxon.com/services">Services</Link>
  <Link href="https://www.stryxon.com/#contact">Contact</Link>
</nav>
```

### 13.3 Add rel="alternate" for Cross-Domain

**In main site app/layout.tsx:**

```tsx
<link
  rel="alternate"
  type="text/html"
  href="https://blog.stryxon.com"
  title="Stryxon Blog"
/>
```

**In blog app/layout.tsx:**

```tsx
<link
  rel="alternate"
  type="text/html"
  href="https://www.stryxon.com"
  title="Stryxon Main Site"
/>
```

---

## 14. Testing & Validation Checklist

### 14.1 PageSpeed Insights

**Test both Mobile & Desktop:**

1. Go to https://pagespeed.web.dev/
2. Test: `https://blog.stryxon.com`
3. Target scores:
   - Performance: 85+ (90+ ideal)
   - Accessibility: 95+
   - Best Practices: 95+
   - SEO: 100

**Common Issues to Fix:**

- ✅ Largest Contentful Paint (LCP) < 2.5s
- ✅ First Input Delay (FID) < 100ms
- ✅ Cumulative Layout Shift (CLS) < 0.1
- ✅ Total Blocking Time (TBT) < 300ms

### 14.2 Social Media Preview Testing

**Facebook Debugger:**

1. https://developers.facebook.com/tools/debug/
2. Enter: `https://blog.stryxon.com`
3. Click "Fetch new information"
4. Verify og:image displays correctly

**Twitter Card Validator:**

1. https://cards-dev.twitter.com/validator
2. Enter: `https://blog.stryxon.com`
3. Verify card preview

**LinkedIn Post Inspector:**

1. https://www.linkedin.com/post-inspector/
2. Enter: `https://blog.stryxon.com`

### 14.3 Accessibility Testing

**Manual Tests:**

1. Keyboard navigation (Tab, Enter, Escape)
2. Screen reader (NVDA on Windows, VoiceOver on Mac)
3. Zoom to 200% - layout should not break
4. Color contrast checker: https://webaim.org/resources/contrastchecker/

**Automated Tests:**

1. Lighthouse accessibility audit (in PageSpeed Insights)
2. axe DevTools browser extension
3. WAVE browser extension

### 14.4 Search Console Verification

**After 48 hours:**

1. Google Search Console → Coverage → Check for errors
2. Google Search Console → Enhancements → Check structured data
3. Bing Webmaster → Site Scan → Fix any issues
4. Yandex Webmaster → Site Quality → Review recommendations

### 14.5 Core Web Vitals (Real User Monitoring)

**Vercel Dashboard:**

1. Check after 24-48 hours of live traffic
2. View real user data from Vercel Speed Insights
3. Target:
   - LCP: <2.5s (75th percentile)
   - FID: <100ms (75th percentile)
   - CLS: <0.1 (75th percentile)

---

## 15. Post-Launch Optimization Tasks

### 15.1 Week 1: Monitor & Fix

- [ ] Check Vercel Analytics for errors
- [ ] Review PageSpeed Insights scores
- [ ] Fix any accessibility issues found
- [ ] Ensure all verification codes work
- [ ] Submit sitemaps to all search engines

### 15.2 Week 2: Content & Structure

- [ ] Add BreadcrumbList schema to all category pages
- [ ] Add BlogPosting schema to all blog posts
- [ ] Create proper 404 page with helpful navigation
- [ ] Add search functionality
- [ ] Implement related posts feature

### 15.3 Week 3: Advanced Features

- [ ] Set up email newsletter integration
- [ ] Add social sharing buttons with proper tracking
- [ ] Implement reading time estimates
- [ ] Add table of contents for long posts
- [ ] Set up comment system (if desired)

### 15.4 Month 1: Growth & SEO

- [ ] Submit to blog directories (Feedly, Bloglovin, etc.)
- [ ] Create internal linking strategy
- [ ] Monitor Google Search Console for indexing
- [ ] Analyze which posts rank best
- [ ] Create content calendar based on performance

---

## 16. Common Pitfalls to Avoid

### ❌ Don't Do This:

1. **Using external images without optimization** - Always use Next.js Image component
2. **Blocking render with heavy JavaScript** - Use dynamic imports for non-critical code
3. **Not setting priority on hero images** - Use priority={true} for above-the-fold images
4. **Forgetting alt text on images** - Always provide descriptive alt text
5. **Using <div> for buttons** - Use semantic <button> elements
6. **Inline styles instead of CSS** - Use Tailwind or CSS modules for better performance
7. **Not testing on mobile devices** - Always test responsive design
8. **Ignoring 404 errors** - Monitor Search Console for broken links
9. **Using generic meta descriptions** - Write unique descriptions for each post
10. **Not compressing images before upload** - Use tools like TinyPNG first

### ✅ Best Practices:

1. **Always use semantic HTML** - <article>, <section>, <nav>, <header>, <footer>
2. **Lazy load below-the-fold content** - Images, comments, share buttons
3. **Provide loading states** - Show skeletons/spinners during data fetching
4. **Use proper heading hierarchy** - Only one <h1> per page
5. **Add breadcrumbs for navigation** - Helps users and search engines
6. **Include publish/update dates** - Shows content freshness
7. **Link to related content** - Improves user engagement and SEO
8. **Monitor Core Web Vitals** - Use Vercel Speed Insights
9. **Keep dependencies minimal** - Only install what you need
10. **Test before deploying** - Run `npm run build` locally first

---

## 17. Quick Reference: File Checklist

### Required Files in Blog Root:

```
blog.stryxon.com/
├── app/
│   ├── layout.tsx          ✅ Add metadata, Analytics, verification
│   ├── page.tsx            ✅ Blog homepage
│   ├── sitemap.ts          ✅ Dynamic sitemap generation
│   ├── robots.ts           ✅ Robots.txt configuration
│   ├── api/
│   │   └── feed/
│   │       └── route.ts    ✅ RSS feed
│   ├── posts/
│   │   └── [slug]/
│   │       └── page.tsx    ✅ Blog post with metadata + schema
│   └── globals.css         ✅ Global styles + accessibility utilities
├── components/             ✅ Reusable components
├── public/
│   ├── og-image.png        ✅ 1200x630px social sharing image
│   ├── favicon.ico         ✅ Favicon
│   ├── apple-touch-icon.png ✅ 180x180px iOS icon
│   └── robots.txt          ✅ (generated from robots.ts)
├── .browserslistrc         ✅ Modern browser targets
├── next.config.js          ✅ Security headers, image optimization
├── vercel.json             ✅ Deployment configuration
├── package.json            ✅ Dependencies + scripts
└── tsconfig.json           ✅ TypeScript configuration
```

---

## 18. Final Deployment Commands

### Before Deploying:

```bash
# 1. Install all optimizations
npm install @vercel/analytics @vercel/speed-insights

# 2. Test build locally
npm run build

# 3. Test production build locally
npm run start

# 4. Check for build errors
npm run lint
```

### Deploy to Production:

```bash
# 1. Commit all changes
git add .
git commit -m "feat: Complete SEO and performance optimization for blog subdomain"

# 2. Push to main branch (triggers Vercel deployment)
git push origin main

# 3. Monitor deployment in Vercel dashboard
```

### Post-Deployment:

```bash
# 1. Test live site
open https://blog.stryxon.com

# 2. Test sitemap
open https://blog.stryxon.com/sitemap.xml

# 3. Test robots.txt
open https://blog.stryxon.com/robots.txt

# 4. Verify search engine tags
curl -I https://blog.stryxon.com | grep -i "x-robots-tag"
```

---

## 19. Monitoring Dashboard Setup

### Vercel Dashboard

**Monitor these metrics weekly:**

- Total Pageviews
- Unique Visitors
- Top Pages
- Core Web Vitals (LCP, FID, CLS)
- Error Rate
- Build Times

### Google Search Console

**Monitor these metrics weekly:**

- Total Impressions
- Total Clicks
- Average Position
- Click-Through Rate (CTR)
- Coverage Issues
- Core Web Vitals Report

### Cloudflare Analytics

**Monitor these metrics weekly:**

- Total Requests
- Bandwidth
- Cache Hit Rate
- Threats Blocked
- Geographic Distribution

---

## 20. Support Resources

### Documentation:

- Next.js Docs: https://nextjs.org/docs
- Vercel Docs: https://vercel.com/docs
- Cloudflare Docs: https://developers.cloudflare.com
- Schema.org: https://schema.org/BlogPosting
- WCAG 2.1: https://www.w3.org/WAI/WCAG21/quickref/

### Testing Tools:

- PageSpeed Insights: https://pagespeed.web.dev/
- Facebook Debugger: https://developers.facebook.com/tools/debug/
- Twitter Card Validator: https://cards-dev.twitter.com/validator
- LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/
- Schema Markup Validator: https://validator.schema.org/
- WAVE Accessibility: https://wave.webaim.org/
- axe DevTools: https://www.deque.com/axe/devtools/

### Community:

- Next.js Discord: https://discord.gg/nextjs
- Vercel Community: https://github.com/vercel/next.js/discussions
- Stack Overflow: https://stackoverflow.com/questions/tagged/next.js

---

## Summary: AI Implementation Prompt

**When an AI agent needs to optimize blog.stryxon.com, use this prompt:**

```
You are optimizing blog.stryxon.com, a Next.js blog subdomain of www.stryxon.com.

Execute these steps in order:

1. Update app/layout.tsx with metadata, verification codes, Analytics, and SpeedInsights
2. Create app/sitemap.ts with dynamic blog post generation
3. Create app/robots.ts with proper crawl directives
4. Update next.config.js with security headers, image optimization, and modern browser targeting
5. Create .browserslistrc targeting Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
6. Add JSON-LD structured data (Blog, BlogPosting, BreadcrumbList) to relevant pages
7. Ensure all images use Next.js Image component with quality={75}
8. Add accessibility fixes: aria-labels, touch targets (min-h-12), proper heading hierarchy
9. Use dynamic imports for heavy components (code blocks, comments, share buttons)
10. Create RSS feed at app/api/feed/route.ts
11. Deploy and verify in Google Search Console, Bing, Yandex
12. Test with PageSpeed Insights, Facebook Debugger, accessibility tools
13. Monitor Core Web Vitals in Vercel dashboard

Target scores: 85+ Performance, 95+ Accessibility, 95+ Best Practices, 100 SEO
```

---

**Document Version**: 1.0  
**Last Updated**: February 1, 2026  
**Maintained By**: Stryxon Technologies  
**Contact**: https://www.stryxon.com/#contact
