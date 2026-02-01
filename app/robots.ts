export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      // Block AI content scrapers
      {
        userAgent: [
          "ChatGPT-User",
          "GPTBot",
          "Claude-Web",
          "anthropic-ai",
          "CCBot",
        ],
        disallow: ["/"],
      },
    ],
    sitemap: "https://www.stryxon.com/sitemap.xml",
  };
}
