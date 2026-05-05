import type { MetadataRoute } from "next";

const SITE_URL = "https://zonicllc.com";

const staticRoutes = [
  { path: "/", priority: 1 },
  { path: "/about", priority: 0.8 },
  { path: "/contact-us", priority: 0.8 },
  { path: "/services", priority: 0.9 },
  { path: "/services/gmb-optimization", priority: 0.8 },
  { path: "/services/gmb-reinstatement-help", priority: 0.8 },
  { path: "/services/gmb-verification-help", priority: 0.8 },
  { path: "/services/google-ads", priority: 0.8 },
  { path: "/services/industry/car-towing", priority: 0.8 },
  { path: "/services/launchpad", priority: 0.8 },
  { path: "/services/local-seo-for-home-services", priority: 0.8 },
  { path: "/services/industry/dental-seo-services", priority: 0.8 },
  { path: "/services/industry/local-seo-services-for-hvac", priority: 0.8 },
  { path: "/services/industry/local-seo-for-roofing-companies", priority: 0.8 },
  { path: "/services/industry/pediatricians", priority: 0.8 },
  { path: "/services/industry/pest-control", priority: 0.8 },
  { path: "/services/industry/plumber", priority: 0.8 },
  { path: "/services/delaware/digital-marketing", priority: 0.8 },
  { path: "/services/philadelphia/digital-marketing", priority: 0.8 },
  { path: "/services/philadelphia/local-seo", priority: 0.8 },
  { path: "/services/philadelphia/ppc", priority: 0.8 },
  { path: "/services/philadelphia/sem", priority: 0.8 },
  { path: "/services/web-design", priority: 0.8 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(
    ({ path, priority }) => ({
      url: `${SITE_URL}${path}`,
      lastModified,
      changeFrequency: path === "/" ? "weekly" : "monthly",
      priority,
    }),
  );
  return staticEntries;
}
