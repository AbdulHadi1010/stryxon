import { MetadataRoute } from "next";

/**
 * Robots.txt configuration for stryxon.com
 *
 * SEO Best Practice: Cross-link sitemaps from different subdomains
 * to ensure Google understands they're part of the same brand ecosystem.
 * This helps pass authority between main site and blog subdomain.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/", // Don't crawl API routes
          "/_next/", // Don't crawl Next.js internals
          "/private/", // Don't crawl private pages (if any)
        ],
      },
      // Block AI content scrapers from training on our content
      {
        userAgent: [
          "ChatGPT-User",
          "GPTBot",
          "Claude-Web",
          "anthropic-ai",
          "CCBot",
          "Google-Extended", // Google's AI training bot
          "Omgilibot", // AI training crawler
          "FacebookBot", // Meta AI training
        ],
        disallow: ["/"],
      },
      {
        // Give Googlebot explicit permission for search indexing
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/_next/", "/private/"],
      },
      {
        // Bing specific rules
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/_next/", "/private/"],
      },
    ],
    sitemap: [
      // Primary sitemap for main domain
      "https://www.stryxon.com/sitemap.xml",

      // Blog subdomain sitemap (cross-linking for SEO authority)
      // Each subdomain should have its own sitemap, but we reference it here
      // to signal to Google that blog.stryxon.com is part of the same brand
      "https://blog.stryxon.com/sitemap.xml",
    ],
    host: "https://www.stryxon.com",
  };
}
