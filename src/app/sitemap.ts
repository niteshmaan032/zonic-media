import type { MetadataRoute } from "next";
import { getPublishedBlogs } from "@/backend/lib/blogs";
import lastmodJson from "@/data/sitemapLastmod.generated.json";
import blogRedirectsJson from "@/data/blogRedirects.json";

export const revalidate = 300;

const BASE_URL = "https://www.zonicllc.com";

// route -> ISO date, produced by `node scripts/generate-sitemap-lastmod.mjs`
// from each page's git history. Re-run the script after content edits.
const LASTMOD = lastmodJson as Record<string, string>;

// Slugs that 301 elsewhere (next.config reads the same file). They stay
// "published" in the CMS, so filter them here or the sitemap lists redirects.
const REDIRECTED_BLOG_SLUGS = new Set(Object.keys(blogRedirectsJson));

const withLastModified = (
  entries: MetadataRoute.Sitemap,
): MetadataRoute.Sitemap =>
  entries.map((entry) => {
    const route = entry.url.replace(BASE_URL, "").replace(/\/$/, "") || "/";
    const lastModified = LASTMOD[route];
    return lastModified ? { ...entry, lastModified } : entry;
  });

const STATIC_PAGES: MetadataRoute.Sitemap = [
  // Core
  { url: `${BASE_URL}/`,           changeFrequency: "daily",   priority: 1.0 },
  { url: `${BASE_URL}/services`,   changeFrequency: "weekly",  priority: 0.9 },
  { url: `${BASE_URL}/industries`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/about`,      changeFrequency: "yearly",  priority: 0.6 },
  { url: `${BASE_URL}/contact-us`, changeFrequency: "yearly",  priority: 0.6 },
  { url: `${BASE_URL}/blog`,       changeFrequency: "weekly",  priority: 0.8 },

  // Services
  { url: `${BASE_URL}/services/web-design`,                   changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/gmb-reinstatement-help`,       changeFrequency: "weekly",  priority: 0.9 },
  { url: `${BASE_URL}/services/gmb-verification-help`,        changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/google-ads`,                   changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/local-seo-for-home-services`,  changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/launchpad`,                    changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE_URL}/services/industry/local-seo-services-for-hvac`,  changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/white-label-services`,         changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/dental-website-design`,        changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/roofing-website-design`,       changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/hvac-website-design`,          changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/plumbing-website-design`,      changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/electrical-website-design`,    changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/pest-control-website-design`,  changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/bathroom-remodeling-website-design`,    changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/kitchen-remodeling-website-design`,     changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/general-contractor-website-design`,     changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/flooring-website-design`,               changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/window-and-door-website-design`,        changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/painting-contractor-website-design`,    changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/garage-door-website-design`,            changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/appliance-repair-website-design`,       changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/towing-company-website-design`,         changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/landscaping-website-design`,            changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/pool-service-website-design`,           changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/gutter-company-website-design`,         changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/tree-service-website-design`,           changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/solar-website-design`,                  changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/commercial-cleaning-website-design`,    changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/residential-cleaning-website-design`,   changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/chiropractor-website-design`,           changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/pediatrician-website-design`,           changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/law-firm-website-design`,               changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/real-estate-agent-website-design`,      changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/travel-and-tourism-marketing-agency`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/google-business-profile-services-real-estate-agents`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/non-profit-marketing-agency`,        changeFrequency: "monthly", priority: 0.8 },

  // Industry marketing agencies
  { url: `${BASE_URL}/services/auto-repair-marketing-agency`,         changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/chiropractic-marketing-agency`,        changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/cleaning-company-marketing-agency`,    changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/dental-marketing-agency`,              changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/electrician-marketing-agency`,         changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/garage-door-marketing-agency`,         changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/landscaping-marketing-agency`,         changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/law-firm-marketing-agency`,            changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/moving-company-marketing-agency`,      changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/painting-contractor-marketing-agency`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/pest-control-marketing-agency`,        changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/real-estate-marketing-agency`,         changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/roofing-marketing-agency`,             changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/septic-marketing-agency`,              changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/solar-marketing-agency`,               changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/towing-marketing-agency`,              changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/pediatric-marketing-agency`,           changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/bathroom-remodeling-marketing-agency`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/kitchen-remodeling-marketing-agency`,  changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/general-contractor-marketing-agency`,  changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/flooring-marketing-agency`,            changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/window-and-door-marketing-agency`,     changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/appliance-repair-marketing-agency`,    changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/pool-service-marketing-agency`,        changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/gutter-marketing-agency`,              changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/tree-service-marketing-agency`,        changeFrequency: "monthly", priority: 0.8 },

  // Landing pages
  { url: `${BASE_URL}/local-seo-google-business-optimization`,        changeFrequency: "monthly", priority: 0.8 },

  // Free-website offer landers
  { url: `${BASE_URL}/website-design-agency-us/offer`,                changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/roofing-website-design-agency-us/offer`,              changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/hvac-website-design-agency-us/offer`,                 changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/plumber-website-design-agency-us/offer`,              changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/auto-repair-website-design-agency-us/offer`,          changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/bathroom-remodeling-website-design-agency-us/offer`,  changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/chiropractic-website-design-agency-us/offer`,         changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/cleaning-company-website-design-agency-us/offer`,     changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/electrician-website-design-agency-us/offer`,          changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/flooring-website-design-agency-us/offer`,             changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/garage-door-website-design-agency-us/offer`,          changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/home-inspector-website-design-agency-us/offer`,       changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/kitchen-remodeling-website-design-agency-us/offer`,   changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/landscaping-website-design-agency-us/offer`,          changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/law-firm-website-design-agency-us/offer`,             changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/moving-company-website-design-agency-us/offer`,       changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/painting-contractor-website-design-agency-us/offer`,  changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/pool-service-website-design-agency-us/offer`,         changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/real-estate-website-design-agency-us/offer`,          changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/solar-website-design-agency-us/offer`,                changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/towing-website-design-agency-us/offer`,               changeFrequency: "monthly", priority: 0.8 },

  // Home inspector marketing
  { url: `${BASE_URL}/services/home-inspector-marketing`,                changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/home-inspector-marketing/california`,     changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE_URL}/services/home-inspector-marketing/florida`,        changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE_URL}/services/home-inspector-marketing/georgia`,        changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE_URL}/services/home-inspector-marketing/north-carolina`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE_URL}/services/home-inspector-marketing/texas`,          changeFrequency: "monthly", priority: 0.7 },

  // Plumbing marketing
  { url: `${BASE_URL}/services/plumbing-marketing-agency`,                changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/plumbing-marketing-agency/arizona`,        changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE_URL}/services/plumbing-marketing-agency/california`,     changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE_URL}/services/plumbing-marketing-agency/florida`,        changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE_URL}/services/plumbing-marketing-agency/georgia`,        changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE_URL}/services/plumbing-marketing-agency/illinois`,       changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE_URL}/services/plumbing-marketing-agency/north-carolina`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE_URL}/services/plumbing-marketing-agency/texas`,          changeFrequency: "monthly", priority: 0.7 },

  // HVAC marketing
  { url: `${BASE_URL}/services/hvac-marketing-agency`,                changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/hvac-marketing-agency/arizona`,        changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE_URL}/services/hvac-marketing-agency/california`,     changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE_URL}/services/hvac-marketing-agency/florida`,        changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE_URL}/services/hvac-marketing-agency/georgia`,        changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE_URL}/services/hvac-marketing-agency/illinois`,       changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE_URL}/services/hvac-marketing-agency/north-carolina`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE_URL}/services/hvac-marketing-agency/texas`,          changeFrequency: "monthly", priority: 0.7 },

  // SEO-plan pages (Aug 2026)
  { url: `${BASE_URL}/services/seo-services`,               changeFrequency: "monthly", priority: 0.9 },
  { url: `${BASE_URL}/services/ai-seo-services`,            changeFrequency: "monthly", priority: 0.9 },
  { url: `${BASE_URL}/services/local-seo-for-small-business`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/local-seo-packages`,         changeFrequency: "monthly", priority: 0.8 },

  // Locations
  { url: `${BASE_URL}/services/delaware/digital-marketing`,     changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/delaware/seo`,                   changeFrequency: "monthly", priority: 0.9 },
  { url: `${BASE_URL}/services/delaware/web-design`,            changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/wilmington/digital-marketing`,   changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/nyc/local-seo`,                  changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/nyc/digital-marketing`,          changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/philadelphia/digital-marketing`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/philadelphia/local-seo`,         changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE_URL}/services/philadelphia/sem`,               changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE_URL}/services/philadelphia/ppc`,               changeFrequency: "monthly", priority: 0.7 },

  // Industries
  { url: `${BASE_URL}/services/industry/real-estate-seo-services`,                changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/industry/chiropractor-local-seo-services`,         changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/industry/seo-services-for-car-towing`,             changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/industry/local-seo-for-roofing-companies`,         changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/industry/dental-seo-services`,                     changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/industry/pediatricians`,                           changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE_URL}/services/industry/seo-services-for-plumber`,                changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/industry/seo-services-for-pest-control`,           changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/industry/local-seo-for-law-firms`,                 changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services/industry/local-seo-for-commercial-cleaning`,       changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE_URL}/services/industry/local-seo-services-for-residential-cleaning`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE_URL}/services/industry/local-seo-for-bathroom-remodelers`,       changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE_URL}/services/industry/local-seo-for-kitchen-remodelers`,        changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE_URL}/services/industry/local-seo-for-general-contractors`,       changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE_URL}/services/industry/local-seo-for-flooring-companies`,        changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE_URL}/services/industry/local-seo-for-window-and-door-companies`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE_URL}/services/industry/local-seo-for-painting-contractors`,      changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE_URL}/services/industry/local-seo-for-electricians`,              changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE_URL}/services/industry/local-seo-for-garage-door-companies`,     changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE_URL}/services/industry/local-seo-for-appliance-repair`,          changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE_URL}/services/industry/local-seo-for-landscaping-companies`,     changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE_URL}/services/industry/local-seo-for-pool-service-companies`,    changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE_URL}/services/industry/local-seo-for-gutter-companies`,          changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE_URL}/services/industry/local-seo-for-tree-service-companies`,    changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE_URL}/services/industry/local-seo-for-solar-companies`,           changeFrequency: "monthly", priority: 0.7 },

  // Legal
  { url: `${BASE_URL}/legal/privacy-policy`,   changeFrequency: "yearly", priority: 0.3 },
  { url: `${BASE_URL}/legal/terms-conditions`, changeFrequency: "yearly", priority: 0.3 },
  { url: `${BASE_URL}/legal/refund-policy`,    changeFrequency: "yearly", priority: 0.3 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let blogEntries: MetadataRoute.Sitemap = [];
  try {
    const blogs = await getPublishedBlogs();
    blogEntries = blogs
      .filter((blog) => !REDIRECTED_BLOG_SLUGS.has(blog.slug))
      .map((blog) => ({
      url: `${BASE_URL}/blog/${blog.slug}`,
      lastModified: blog.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  } catch {
    // If the DB is unreachable during sitemap generation, skip blog entries
  }

  return [...withLastModified(STATIC_PAGES), ...blogEntries];
}
