import type { MetadataRoute } from "next";

const DISALLOWED = [
  "/coming-soon",
  "/admindashboard",
  "/404",
  "/thank-you",
  "/api/",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: DISALLOWED,
      },
      // Explicitly welcome AI / answer-engine crawlers (AEO) so the site can
      // be cited by ChatGPT, Claude, Perplexity, Gemini, and AI Overviews.
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-Web",
          "anthropic-ai",
          "PerplexityBot",
          "Perplexity-User",
          "Google-Extended",
          "Applebot-Extended",
          "CCBot",
          "meta-externalagent",
        ],
        allow: "/",
        disallow: DISALLOWED,
      },
    ],
    sitemap: "https://www.zonicllc.com/sitemap.xml",
  };
}
