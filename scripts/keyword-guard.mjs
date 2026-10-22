// Keyword guard for the redesign (docs/growth-plan-2026-10.md §6b).
// Compares the current build against the committed baseline in
// reports/seo-snapshots + reports/text-snapshots (run `npm run snapshot` on the
// baseline commit first, commit it, then build the change and run this).
//
//   node scripts/keyword-guard.mjs                 -> all routes
//   node scripts/keyword-guard.mjs services__industry   -> routes whose key starts with it
//   node scripts/keyword-guard.mjs --layout-only   -> also require identical visible text
//   node scripts/keyword-guard.mjs --worktree      -> baseline from disk, not HEAD
//
// Fails (exit 1) when, for any route:
//  - title, meta description, canonical, robots, H1 or the H2 list changed
//  - visible word count dropped
//  - (with --layout-only) visible text changed at all
//  - a query listed for the route in reports/gsc/queries/<key>.txt (one GSC
//    query per line, exported from Search Console filtered by that page) has a
//    word that no longer appears in the visible text.
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const args = process.argv.slice(2);
const layoutOnly = args.includes("--layout-only");
// --worktree: read the baseline from the working tree instead of HEAD (for a
// dry run right after `npm run snapshot`, before the change is built).
const fromWorktree = args.includes("--worktree");
const prefix = args.find((a) => !a.startsWith("--")) || "";
const ROOT = path.resolve(".next/server/app");
if (!fs.existsSync(ROOT)) { console.error("Run `next build` first."); process.exit(1); }

const git = (p) => { if (fromWorktree) { try { return fs.readFileSync(p, "utf8"); } catch { return null; } } try { return execSync(`git show HEAD:${p}`, { encoding: "utf8", stdio: ["pipe", "pipe", "ignore"] }); } catch { return null; } };
const strip = (h) => h.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ").replace(/<noscript[\s\S]*?<\/noscript>/gi, " ").replace(/<header[\s\S]*?<\/header>/gi, " ").replace(/<footer[\s\S]*?<\/footer>/gi, " ").replace(/<nav[\s\S]*?<\/nav>/gi, " ").replace(/<div class="footer-wrapper"[\s\S]*$/i, " ").replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
const clean = (s) => s.replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/\s+/g, " ").trim();
const fields = (html) => ({ title: clean((html.match(/<title>([\s\S]*?)<\/title>/i) || [])[1] || ""), description: (html.match(/<meta name="description" content="([^"]*)"/i) || [])[1] || "", canonical: (html.match(/<link rel="canonical" href="([^"]*)"/i) || [])[1] || "", robots: (html.match(/<meta name="robots" content="([^"]*)"/i) || [])[1] || "", h1: [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) => clean(m[1])), h2: [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map((m) => clean(m[1])) });

const routes = [];
const walk = (d) => { for (const e of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, e.name); if (e.isDirectory()) walk(p); else if (e.name.endsWith(".html")) { const rel = path.relative(ROOT, p).replace(/\.html$/, "").replace(/\((main|landing|admin|admin-auth)\)\//g, ""); if (/^(admindashboard|admin-login|reset-password|admin-email-verification|_global-error|_not-found|thank-you|coming-soon)/.test(rel)) continue; const key = rel.replace(/\//g, "__"); if (key.startsWith(prefix)) routes.push({ key, file: p }); } } };
walk(ROOT);

const STOP = new Set(["the", "a", "an", "for", "of", "in", "and", "to", "near", "me", "my", "best", "top", "how", "what", "is", "on", "with", "vs", "do", "does", "i", "you", "your", "are"]);
let failures = 0, checked = 0, noBaseline = 0;
for (const { key, file } of routes) {
  const baseSeo = git(`reports/seo-snapshots/${key}.json`);
  const baseText = git(`reports/text-snapshots/${key}.txt`);
  if (!baseSeo || !baseText) { noBaseline++; continue; }
  checked++;
  const html = fs.readFileSync(file, "utf8");
  const now = fields(html); const before = JSON.parse(baseSeo);
  const text = strip(html); const words = text.split(" ").filter(Boolean).length;
  const problems = [];
  for (const k of ["title", "description", "canonical", "robots"]) if ((before[k] || "") !== now[k]) problems.push(`${k} changed: "${before[k]}" -> "${now[k]}"`);
  if (JSON.stringify(before.h1) !== JSON.stringify(now.h1)) problems.push(`H1 changed: ${JSON.stringify(before.h1)} -> ${JSON.stringify(now.h1)}`);
  if (JSON.stringify(before.h2) !== JSON.stringify(now.h2)) problems.push(`H2 list changed (${before.h2.length} -> ${now.h2.length})`);
  if (words < before.words) problems.push(`word count dropped ${before.words} -> ${words}`);
  if (layoutOnly && text !== baseText.trim()) problems.push("visible text changed (layout-only deploy)");
  const qf = path.join("reports/gsc/queries", key + ".txt");
  if (fs.existsSync(qf)) {
    const lower = text.toLowerCase() + " " + now.title.toLowerCase();
    for (const q of fs.readFileSync(qf, "utf8").split("\n").map((s) => s.trim()).filter(Boolean)) {
      const missing = q.toLowerCase().split(/\s+/).filter((w) => w.length > 2 && !STOP.has(w) && !lower.includes(w));
      if (missing.length) problems.push(`query "${q}": missing ${missing.join(", ")}`);
    }
  }
  if (problems.length) { failures++; console.log(`FAIL ${key}\n  - ${problems.join("\n  - ")}`); }
}
console.log(`\nChecked ${checked} routes${prefix ? ` (prefix "${prefix}")` : ""}; ${noBaseline} without a committed baseline; ${failures} failing.`);
process.exit(failures ? 1 : 0);
