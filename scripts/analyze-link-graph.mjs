// One-off analysis: inbound-link distribution, orphaned targets, anchor diversity
// across all contextual internal links (inline-link classed) site-wide.
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const APP_ROOT = path.join(ROOT, "src", "app");
const DATA_FILE = path.join(ROOT, "src", "data", "industryMarketingPages.generated.json");

const walk = (dir, exts) => {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p, exts));
    else if (exts.some((x) => e.name.endsWith(x))) out.push(p);
  }
  return out;
};

const links = []; // {source, href, anchor}

// TSX: match <Link ... href="..." ... className="...inline-link..."> or attrs reversed, spanning newlines
const tsxRe =
  /<(?:Link|a)\b(?:[^<>]|\n)*?>/g;
for (const file of walk(APP_ROOT, [".tsx", ".jsx"])) {
  const src = fs.readFileSync(file, "utf8");
  if (!src.includes("inline-link")) continue;
  const rel = path.relative(ROOT, file).replaceAll("\\", "/");
  for (const m of src.matchAll(tsxRe)) {
    const tag = m[0];
    if (!/class(?:Name)?="[^"]*inline-link/.test(tag)) continue;
    const href = tag.match(/href="([^"]+)"/)?.[1];
    if (!href) continue;
    // anchor: text until closing tag
    const after = src.slice(m.index + tag.length);
    const anchor = after
      .slice(0, after.search(/<\/(?:Link|a)>/))
      .replace(/\{["']\s*["']\}|\{" "\}/g, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    links.push({ source: rel, href, anchor });
  }
}

// JSON pages
const data = JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
for (const [slug, page] of Object.entries(data)) {
  for (const m of page.contentHtml.matchAll(
    /<a\s+class="ima-inline-link"\s+href="([^"]+)">([\s\S]*?)<\/a>/g,
  )) {
    links.push({
      source: `json#${slug}`,
      href: m[1],
      anchor: m[2].replace(/\s+/g, " ").trim(),
    });
  }
}

// Inbound distribution
const inbound = new Map();
for (const l of links) {
  if (!inbound.has(l.href)) inbound.set(l.href, []);
  inbound.get(l.href).push(l);
}
console.log(`Total contextual links: ${links.length}\n`);
console.log("=== Inbound links per target (desc) ===");
for (const [href, arr] of [...inbound.entries()].sort((a, b) => b[1].length - a[1].length)) {
  console.log(`${String(arr.length).padStart(3)}  ${href}`);
}

// Anchor over-optimization: same exact anchor -> same target used many times
console.log("\n=== Exact-match anchor reuse (same anchor+target on 5+ pages) ===");
const anchorPair = new Map();
for (const l of links) {
  const k = `${l.anchor.toLowerCase()} => ${l.href}`;
  anchorPair.set(k, (anchorPair.get(k) ?? 0) + 1);
}
let flagged = 0;
for (const [k, n] of [...anchorPair.entries()].sort((a, b) => b[1] - a[1])) {
  if (n >= 5) {
    console.log(`${String(n).padStart(3)}  ${k}`);
    flagged++;
  }
}
if (!flagged) console.log("(none at 5+; healthy diversity)");

// Orphans: canonical service targets receiving zero contextual inbound links
const spec = fs.readFileSync(path.join(ROOT, ".claude", "interlinking-spec.md"), "utf8");
const targets = new Set();
for (const m of spec.matchAll(/`(\/[^`\s{+]*)`/g)) targets.add(m[1]);
console.log("\n=== Spec targets with ZERO inbound contextual links ===");
let orphans = 0;
for (const t of [...targets].sort()) {
  if (!inbound.has(t)) {
    console.log(`  ${t}`);
    orphans++;
  }
}
if (!orphans) console.log("(none — every canonical target receives links)");
