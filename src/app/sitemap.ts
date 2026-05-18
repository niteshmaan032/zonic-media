import { readdirSync, statSync } from "fs";
import { join, relative, sep } from "path";
import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/shared/urlConfig";
import { getPublishedBlogs } from "@/backend/lib/blogs";

const APP_DIR = join(process.cwd(), "src", "app");
const PAGE_FILE = "page.tsx";

const EXCLUDED_ROUTE_SEGMENTS = new Set([
  "api",
  "coming-soon",
  "legal",
  "thank-you",
  "[slug]",
  "blogs",
]);
const EXCLUDED_ROUTE_GROUPS = new Set(["(admin)", "(admin-auth)"]);

const PRIORITY_BY_PATH: Record<string, number> = {
  "/": 1,
  "/services": 0.9,
  "/about": 0.8,
  "/contact-us": 0.8,
  "/blogs": 0.8,
};

function getPageFiles(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = join(dir, entry.name);

    if (entry.isDirectory()) {
      return getPageFiles(entryPath);
    }

    return entry.isFile() && entry.name === PAGE_FILE ? [entryPath] : [];
  });
}

function toRoutePath(filePath: string): string | null {
  const routePath = relative(APP_DIR, filePath);
  const allSegments = routePath.split(sep).slice(0, -1);

  if (allSegments.some((segment) => EXCLUDED_ROUTE_GROUPS.has(segment))) {
    return null;
  }

  if (allSegments.some((segment) => EXCLUDED_ROUTE_SEGMENTS.has(segment))) {
    return null;
  }

  const segments = allSegments.filter(
    (segment) => !(segment.startsWith("(") && segment.endsWith(")")),
  );

  if (segments.length === 0) {
    return "/";
  }

  return `/${segments.join("/")}`;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();

  // Static pages
  const routes = getPageFiles(APP_DIR)
    .map((filePath) => ({ path: toRoutePath(filePath), filePath }))
    .filter(
      (entry): entry is { path: string; filePath: string } =>
        entry.path !== null,
    )
    .sort((a, b) => a.path.localeCompare(b.path));

  const staticEntries: MetadataRoute.Sitemap = routes.map(
    ({ path, filePath }) => {
      const stat = statSync(filePath, { throwIfNoEntry: false });
      return {
        url: `${siteUrl}${path}`,
        lastModified: stat?.mtime ?? new Date(),
        changeFrequency: path === "/" ? "weekly" : "monthly",
        priority: PRIORITY_BY_PATH[path] ?? 0.7,
      };
    },
  );

  // Add /blogs listing page explicitly
  staticEntries.push({
    url: `${siteUrl}/blogs`,
    changeFrequency: "weekly",
    priority: 0.8,
  });

  // Blog post pages from the database
  let blogEntries: MetadataRoute.Sitemap = [];
  try {
    const blogs = await getPublishedBlogs();
    blogEntries = blogs.map((blog) => ({
      url: `${siteUrl}/blogs/${blog.slug}`,
      lastModified: blog.publishedAt
        ? new Date(blog.publishedAt)
        : new Date(`${blog.publishDate}T00:00:00`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  } catch {
    // If the DB is unreachable during sitemap generation, skip blog entries
  }

  return [...staticEntries, ...blogEntries];
}
