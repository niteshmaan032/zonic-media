import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/shared/urlConfig";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: [
        "/legal/privacy-policy",
        "/legal/terms-conditions",
        "/legal/refund-policy",
        "/coming-soon",
        "/terms-conditions",
        "/admindashboard",
      ],
    },
    sitemap: `${getSiteUrl()}/sitemap.xml`,
  };
}
