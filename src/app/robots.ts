import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: [
        "/legal/privacy-policy",
        "/legal/terms-conditions",
        "/legal/refund-policy",
        "/coming-soon",
        "/404",
        "/thank-you",
        "/terms-conditions",
        "/admindashboard",
      ],
    },
    sitemap: "https://www.zonicllc.com/sitemap.xml",
  };
}
