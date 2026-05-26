import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: [
        "/coming-soon",
        "/terms-conditions",
        "/admindashboard",
        "/404",
        "/thank-you",
      ],
    },
    sitemap: "https://www.zonicllc.com/sitemap.xml",
  };
}
