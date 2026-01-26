export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: [
          "ChatGPT-User",
          "GPTBot",
          "Claude-Web",
          "anthropic-ai",
          "Bingbot",
          "Googlebot",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://www.stryxon.com/sitemap.xml",
  };
}
