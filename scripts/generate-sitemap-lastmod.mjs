// Generates src/data/sitemapLastmod.generated.json — a map of route -> ISO
// last-modified date derived from the git history of each page's source file.
// Re-run after any content edit so sitemap.xml <lastmod> stays truthful:
//   node scripts/generate-sitemap-lastmod.mjs
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const APP_ROOT = path.join(ROOT, "src", "app");
const OUT_FILE = path.join(ROOT, "src", "data", "sitemapLastmod.generated.json");
const INDUSTRY_DATA = path.join(ROOT, "src", "data", "industryMarketingPages.generated.json");

const walk = (dir) => {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(p));
    else if (entry.name === "page.tsx") out.push(p);
  }
  return out;
};

const gitDate = (file) => {
  try {
    const iso = execFileSync(
      "git",
      ["log", "-1", "--format=%cI", "--", path.relative(ROOT, file)],
      { cwd: ROOT, encoding: "utf8" },
    ).trim();
    if (iso) return iso.slice(0, 10);
  } catch {
    /* fall through to fs date */
  }
  return fs.statSync(file).mtime.toISOString().slice(0, 10);
};

// Uncommitted edits are newer than the last commit — prefer mtime when dirty.
const dirtyFiles = new Set(
  execFileSync("git", ["status", "--porcelain"], { cwd: ROOT, encoding: "utf8" })
    .split("\n")
    .map((line) => line.slice(3).trim().replaceAll("/", path.sep))
    .filter(Boolean),
);

const dateFor = (file) => {
  const rel = path.relative(ROOT, file);
  if (dirtyFiles.has(rel)) return fs.statSync(file).mtime.toISOString().slice(0, 10);
  return gitDate(file);
};

const routeFor = (file) => {
  const rel = path.relative(APP_ROOT, path.dirname(file)).replaceAll(path.sep, "/");
  const segments = rel
    .split("/")
    .filter((segment) => segment && !segment.startsWith("("));
  return `/${segments.join("/")}`.replace(/\/$/, "") || "/";
};

const SKIP = /admindashboard|admin-login|admin-email-verification|reset-password|coming-soon|thank-you|\[slug\]/;

const map = {};
for (const file of walk(APP_ROOT)) {
  if (SKIP.test(file)) continue;
  // Redirect stubs are not indexable pages — keep them out of the sitemap map.
  // Real pages may also import permanentRedirect for conditional legacy-param
  // handling (e.g. /blog), so only tiny files count as stubs.
  const source = fs.readFileSync(file, "utf8");
  if (source.includes("permanentRedirect(") && source.length < 600) continue;
  const route = routeFor(file);
  if (route.includes("[marketingAgencySlug]")) continue;
  map[route] = dateFor(file);
}

// Template-driven marketing agency pages share the generated JSON's date.
const industryDate = dateFor(INDUSTRY_DATA);
for (const slug of Object.keys(JSON.parse(fs.readFileSync(INDUSTRY_DATA, "utf8")))) {
  map[`/services/${slug}`] = industryDate;
}

// Legal pages are rendered by /legal/[slug] from JSON condition files.
const CONDITIONS_DIR = path.join(ROOT, "src", "shared", "conditions");
const legalSources = {
  "/legal/terms-conditions": "terms-new.json",
  "/legal/privacy-policy": "policy-new.json",
  "/legal/refund-policy": "refund.json",
};
for (const [route, file] of Object.entries(legalSources)) {
  map[route] = dateFor(path.join(CONDITIONS_DIR, file));
}

const sorted = Object.fromEntries(Object.entries(map).sort(([a], [b]) => a.localeCompare(b)));
fs.writeFileSync(OUT_FILE, `${JSON.stringify(sorted, null, 2)}\n`);
console.log(`Wrote ${Object.keys(sorted).length} routes to ${path.relative(ROOT, OUT_FILE)}`);
