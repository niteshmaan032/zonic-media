import type { MetadataRoute } from "next";
import { conditionPages } from "@/shared/conditions";
import { landingPages } from "@/shared/landing-pages";

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
  { path: "/services/google-my-business", priority: 0.8 },
  { path: "/services/local-seo-for-home-services", priority: 0.8 },
  { path: "/services/web-design", priority: 0.8 },
] as const;

function toAbsoluteUrl(pathOrUrl: string) {
  return pathOrUrl.startsWith("http")
    ? pathOrUrl
    : `${SITE_URL}${pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`}`;
}

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

  const landingEntries: MetadataRoute.Sitemap = landingPages.map(({ metadata }) => ({
    url: toAbsoluteUrl(metadata.openGraph.url),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const legalEntries: MetadataRoute.Sitemap = conditionPages.map(({ slug }) => ({
    url: `${SITE_URL}/legal/${slug}`,
    lastModified,
    changeFrequency: "yearly",
    priority: 0.4,
  }));

  return [...staticEntries, ...landingEntries, ...legalEntries];
}
