import { readdirSync } from "fs";
import { join, relative, sep } from "path";
import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/shared/urlConfig";

const APP_DIR = join(process.cwd(), "src", "app");
const PAGE_FILE = "page.tsx";

const EXCLUDED_ROUTE_SEGMENTS = new Set([
  "api",
  "coming-soon",
  "legal",
  "thank-you",
  "[slug]",
]);
const EXCLUDED_ROUTE_GROUPS = new Set(["(admin)", "(admin-auth)"]);

const PRIORITY_BY_PATH: Record<string, number> = {
  "/": 1,
  "/services": 0.9,
  "/about": 0.8,
  "/contact-us": 0.8,
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

  if (
    allSegments.some((segment) => EXCLUDED_ROUTE_SEGMENTS.has(segment))
  ) {
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

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();
  const routes = getPageFiles(APP_DIR)
    .map(toRoutePath)
    .filter((route): route is string => route !== null)
    .sort((a, b) => a.localeCompare(b));

  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: PRIORITY_BY_PATH[path] ?? 0.8,
  }));
}
