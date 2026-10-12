// In-content inbound link counts for every sitemap URL.
//   node scripts/crawl-inbound-links.mjs                 (live site)
//   node scripts/crawl-inbound-links.mjs --base http://localhost:3000
//   node scripts/crawl-inbound-links.mjs --compare reports/links/2026-10-07.json
// Two metrics per target: strict (links inside page copy only; header, footer,
// nav, breadcrumbs and related-link modules removed) and withModules (strict +
// RelatedServices / sibling / state-link modules). Output: reports/links/<date>.json
import fs from "node:fs";
import path from "node:path";

const arg = (k, d) => { const i = process.argv.indexOf(k); return i > -1 ? process.argv[i + 1] : d; };
const BASE = arg("--base", "https://www.zonicllc.com").replace(/\/$/, "");
const HOST = "zonicllc.com";
const MIN = +arg("--min", 3);
const compareFile = arg("--compare", null);

const sm = await (await fetch(`${BASE}/sitemap.xml`)).text();
const urls = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]).map((u) => u.replace(/^https?:\/\/[^/]+/, BASE));
const norm = (href) => { try { const u = new URL(href, BASE); if (!u.hostname.endsWith(HOST) && !u.hostname.includes("localhost")) return null; return (u.pathname.replace(/\/$/, "") || "/"); } catch { return null; } };

const stripChrome = (h) => h
  .replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<header[\s\S]*?<\/header>/gi, "").replace(/<nav[^>]*class="[^"]*(navbar|main-nav|site-nav|mobile-menu)[^"]*"[\s\S]*?<\/nav>/gi, "")
  .replace(/<footer[\s\S]*?<\/footer>/gi, "").replace(/<div class="footer-wrapper"[\s\S]*$/i, "")
  .replace(/<ol[^>]*breadcrumb[\s\S]*?<\/ol>/gi, "");
const stripModules = (h) => h
  .replace(/<(section|div|aside|nav)[^>]*class="[^"]*(relsvc|related|sibling|states-nav|hia-states|bp-related|bp-mid-cta)[^"]*"[\s\S]*?<\/\1>/gi, "");

const strict = {}, withMods = {}, anchors = {}, outCount = {};
let i = 0; const errors = [];
const count = (html, from, store) => { const seen = new Set(); for (const m of html.matchAll(/<a\s[^>]*href="([^"#?]+)[^"]*"[^>]*>([\s\S]*?)<\/a>/gi)) { const to = norm(m[1]); if (!to || to === from || seen.has(to)) continue; seen.add(to); store[to] = (store[to] || 0) + 1; if (store === strict) { const a = m[2].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim().slice(0, 50); (anchors[to] = anchors[to] || {})[a] = (anchors[to][a] || 0) + 1; } } return seen.size; };
async function worker() { while (i < urls.length) { const u = urls[i++]; try { const h = await (await fetch(u)).text(); const from = norm(u); const noChrome = stripChrome(h); outCount[from] = count(noChrome, from, withMods); count(stripModules(noChrome), from, strict); } catch (e) { errors.push(u); } } }
await Promise.all(Array.from({ length: 8 }, worker));

const pages = urls.map((u) => norm(u)).filter(Boolean).map((p) => ({ path: p, strict: strict[p] || 0, withModules: withMods[p] || 0, outbound: outCount[p] || 0, topAnchors: Object.entries(anchors[p] || {}).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([k, v]) => `${k}×${v}`) }));
const low = pages.filter((p) => p.path.startsWith("/services") && p.strict <= MIN).sort((a, b) => a.strict - b.strict);
console.log(`Crawled ${urls.length} URLs (${errors.length} errors). Service pages with ≤${MIN} strict in-content inbound: ${low.length} of ${pages.filter((p) => p.path.startsWith("/services")).length}`);
for (const p of low.slice(0, 30)) console.log(`  ${String(p.strict).padStart(3)} / ${String(p.withModules).padStart(3)}  ${p.path}`);
let deltas = null;
if (compareFile && fs.existsSync(compareFile)) { const prev = JSON.parse(fs.readFileSync(compareFile, "utf8")); const map = Object.fromEntries(prev.pages.map((p) => [p.path, p])); deltas = pages.map((p) => ({ path: p.path, strictDelta: p.strict - (map[p.path]?.strict ?? 0) })).filter((d) => d.strictDelta !== 0).sort((a, b) => b.strictDelta - a.strictDelta); console.log(`\nChanges vs ${compareFile}: ${deltas.length} pages`); for (const d of deltas.slice(0, 20)) console.log(`  ${d.strictDelta > 0 ? "+" : ""}${d.strictDelta}  ${d.path}`); }
fs.mkdirSync("reports/links", { recursive: true });
const out = path.join("reports/links", new Date().toISOString().slice(0, 10) + ".json");
fs.writeFileSync(out, JSON.stringify({ base: BASE, crawledAt: new Date().toISOString(), pages, errors, deltas }, null, 1));
console.log(`\nSaved ${out}`);
