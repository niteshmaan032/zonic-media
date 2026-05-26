import type { MetadataRoute } from "next";
import { getPublishedBlogs } from "@/backend/lib/blogs";

export const revalidate = 300;

const BASE_URL = "https://www.zonicllc.com";

const STATIC_PAGES: MetadataRoute.Sitemap = [
  // Core
  { url: `${BASE_URL}/`,          changeFrequency: "weekly",  priority: 1.0, lastModified: new Date("2026-05-25") },
  { url: `${BASE_URL}/services`,  changeFrequency: "monthly", priority: 0.9, lastModified: new Date("2026-05-25") },
  { url: `${BASE_URL}/about`,     changeFrequency: "monthly", priority: 0.8, lastModified: new Date("2026-05-25") },
  { url: `${BASE_URL}/contact-us`,changeFrequency: "monthly", priority: 0.8, lastModified: new Date("2026-05-25") },
  { url: `${BASE_URL}/blog`,      changeFrequency: "weekly",  priority: 0.8, lastModified: new Date("2026-05-25") },

  // Services
  { url: `${BASE_URL}/services/web-design`,                changeFrequency: "monthly", priority: 0.8, lastModified: new Date("2026-05-25") },
  { url: `${BASE_URL}/services/gmb-reinstatement-help`,   changeFrequency: "monthly", priority: 0.8, lastModified: new Date("2026-05-25") },
  { url: `${BASE_URL}/services/gmb-optimization`,         changeFrequency: "monthly", priority: 0.8, lastModified: new Date("2026-05-25") },
  { url: `${BASE_URL}/services/gmb-verification-help`,    changeFrequency: "monthly", priority: 0.8, lastModified: new Date("2026-05-25") },
  { url: `${BASE_URL}/services/google-ads`,               changeFrequency: "monthly", priority: 0.8, lastModified: new Date("2026-05-25") },
  { url: `${BASE_URL}/services/local-seo-for-home-services`, changeFrequency: "monthly", priority: 0.8, lastModified: new Date("2026-05-25") },
  { url: `${BASE_URL}/services/launchpad`,                changeFrequency: "monthly", priority: 0.8, lastModified: new Date("2026-05-25") },
  { url: `${BASE_URL}/services/local-seo-services-for-hvac`, changeFrequency: "monthly", priority: 0.7, lastModified: new Date("2026-05-25") },

  // Locations
  { url: `${BASE_URL}/services/delaware/digital-marketing`,     changeFrequency: "monthly", priority: 0.7, lastModified: new Date("2026-05-25") },
  { url: `${BASE_URL}/services/philadelphia/digital-marketing`, changeFrequency: "monthly", priority: 0.7, lastModified: new Date("2026-05-25") },
  { url: `${BASE_URL}/services/philadelphia/local-seo`,         changeFrequency: "monthly", priority: 0.7, lastModified: new Date("2026-05-25") },
  { url: `${BASE_URL}/services/philadelphia/sem`,               changeFrequency: "monthly", priority: 0.7, lastModified: new Date("2026-05-25") },
  { url: `${BASE_URL}/services/philadelphia/ppc`,               changeFrequency: "monthly", priority: 0.7, lastModified: new Date("2026-05-25") },

  // Industries
  { url: `${BASE_URL}/services/industry/real-estate-seo-services`,               changeFrequency: "monthly", priority: 0.7, lastModified: new Date("2026-05-25") },
  { url: `${BASE_URL}/services/industry/chiropractor-local-seo-services`,        changeFrequency: "monthly", priority: 0.7, lastModified: new Date("2026-05-25") },
  { url: `${BASE_URL}/services/industry/seo-services-for-car-towing`,            changeFrequency: "monthly", priority: 0.7, lastModified: new Date("2026-05-25") },
  { url: `${BASE_URL}/services/industry/local-seo-for-roofing-companies`,        changeFrequency: "monthly", priority: 0.7, lastModified: new Date("2026-05-25") },
  { url: `${BASE_URL}/services/industry/dental-seo-services`,                    changeFrequency: "monthly", priority: 0.7, lastModified: new Date("2026-05-25") },
  { url: `${BASE_URL}/services/industry/pediatricians`,                          changeFrequency: "monthly", priority: 0.7, lastModified: new Date("2026-05-25") },
  { url: `${BASE_URL}/services/industry/seo-services-for-plumber`,               changeFrequency: "monthly", priority: 0.7, lastModified: new Date("2026-05-25") },
  { url: `${BASE_URL}/services/industry/seo-services-for-pest-control`,          changeFrequency: "monthly", priority: 0.7, lastModified: new Date("2026-05-25") },
  { url: `${BASE_URL}/services/industry/local-seo-for-law-firms`,                changeFrequency: "monthly", priority: 0.7, lastModified: new Date("2026-05-25") },
  { url: `${BASE_URL}/services/industry/local-seo-for-commercial-cleaning`,      changeFrequency: "monthly", priority: 0.7, lastModified: new Date("2026-05-25") },
  { url: `${BASE_URL}/services/industry/local-seo-services-for-residential-cleaning`, changeFrequency: "monthly", priority: 0.7, lastModified: new Date("2026-05-25") },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let blogEntries: MetadataRoute.Sitemap = [];
  try {
    const blogs = await getPublishedBlogs();
    blogEntries = blogs.map((blog) => ({
      url: `${BASE_URL}/blog/${blog.slug}`,
      lastModified: blog.publishedAt
        ? new Date(blog.publishedAt)
        : new Date(`${blog.publishDate}T00:00:00`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  } catch {
    // If the DB is unreachable during sitemap generation, skip blog entries
  }

  return [...STATIC_PAGES, ...blogEntries];
}
