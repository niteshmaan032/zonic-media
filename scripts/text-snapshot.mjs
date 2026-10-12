// Freeze guard: dump the visible text of every prerendered route so a deploy
// can prove it changed no copy. Run after `next build`:
//   node scripts/text-snapshot.mjs            -> reports/text-snapshots/<route>.txt
//   git diff --stat reports/text-snapshots    -> must be empty for a structural PR
// Header, footer, nav, scripts and styles are stripped so only page copy counts.
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(".next/server/app");
const OUT = path.resolve("reports/text-snapshots");
if (!fs.existsSync(ROOT)) {
  console.error("No .next/server/app — run `next build` first.");
  process.exit(1);
}
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

const strip = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<header[\s\S]*?<\/header>/gi, " ")
    .replace(/<footer[\s\S]*?<\/footer>/gi, " ")
    .replace(/<nav[\s\S]*?<\/nav>/gi, " ")
    .replace(/<div class="footer-wrapper"[\s\S]*$/i, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&").replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

let n = 0;
const walk = (dir) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith(".html")) {
      const rel = path.relative(ROOT, p).replace(/\.html$/, "").replace(/\((main|landing|admin|admin-auth)\)\//g, "");
      if (/^(admindashboard|admin-login|reset-password|admin-email-verification|_global-error|_not-found|thank-you|coming-soon)/.test(rel)) continue;
      const text = strip(fs.readFileSync(p, "utf8"));
      const file = path.join(OUT, rel.replace(/\//g, "__") + ".txt");
      fs.writeFileSync(file, text + "\n");
      n++;
    }
  }
};
walk(ROOT);
console.log(`Wrote ${n} snapshots to ${path.relative(".", OUT)}`);
