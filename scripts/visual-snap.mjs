// Visual check for the redesign: screenshots of every route in a family at
// 390 / 768 / 1440 px, plus a pixel diff against the previous run and an
// overflow check (any element wider than the viewport, or text clipped by a
// fixed-height box).
//   node scripts/visual-snap.mjs --base http://localhost:3000 --prefix /services/industry
//   node scripts/visual-snap.mjs --base http://localhost:3000 --routes /,/about
// Output: reports/visual/<date>/<viewport>/<route>.png and summary.json.
// Compare: reports/visual/<previous date> is diffed automatically when present.
import fs from "node:fs";
import path from "node:path";
import puppeteer from "puppeteer-core";
import { PNG } from "pngjs";
import pixelmatch from "pixelmatch";

const arg = (k, d) => { const i = process.argv.indexOf(k); return i > -1 ? process.argv[i + 1] : d; };
const BASE = arg("--base", "http://localhost:3000").replace(/\/$/, "");
const PREFIX = arg("--prefix", "");
const ROUTES = arg("--routes", "");
const CHROME = arg("--chrome", "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome");
const VIEWPORTS = [[390, 844], [768, 1024], [1440, 900]];

let routes;
if (ROUTES) routes = ROUTES.split(",");
else {
  const sm = await (await fetch(`${BASE}/sitemap.xml`)).text();
  routes = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname).filter((p) => p.startsWith(PREFIX || "/"));
}
const stamp = new Date().toISOString().slice(0, 10);
// --out <name> writes to reports/visual/<name>; --compare <name> diffs against it
// (default: the most recent earlier dated run).
const OUT = path.join("reports/visual", arg("--out", stamp));
const prevDir = arg("--compare", null) || (fs.existsSync("reports/visual") ? fs.readdirSync("reports/visual").filter((d) => /^\d{4}-/.test(d) && d < stamp).sort().pop() : null);
const browser = await puppeteer.launch({ executablePath: CHROME, headless: "new" });
const summary = [];
const issuesHeight = [];
for (const route of routes) {
  for (const [w, h] of VIEWPORTS) {
    const page = await browser.newPage();
    await page.setViewport({ width: w, height: h });
    await page.goto(BASE + route, { waitUntil: "networkidle2", timeout: 60000 });
    await page.evaluate(() => document.fonts && document.fonts.ready);
    const issues = await page.evaluate((vw) => {
      const out = [];
      if (document.documentElement.scrollWidth > vw + 1) out.push(`horizontal overflow ${document.documentElement.scrollWidth}px`);
      for (const el of document.querySelectorAll("main p, main li, main h1, main h2, main h3")) {
        const box = el.closest("[class]");
        if (el.scrollHeight > el.clientHeight + 2 && getComputedStyle(el).overflow !== "visible") out.push(`clipped text: ${el.textContent.trim().slice(0, 60)}`);
        if (box && getComputedStyle(box).overflow === "hidden" && box.scrollHeight > box.clientHeight + 4 && box.contains(el)) { out.push(`text inside overflow:hidden box: ${el.textContent.trim().slice(0, 60)}`); break; }
      }
      return out.slice(0, 10);
    }, w);
    const dir = path.join(OUT, String(w)); fs.mkdirSync(dir, { recursive: true });
    const file = path.join(dir, (route === "/" ? "home" : route.slice(1).replace(/\//g, "__")) + ".png");
    await page.screenshot({ path: file, fullPage: true });
    let diffPct = null;
    if (prevDir) {
      const prev = path.join("reports/visual", prevDir, String(w), path.basename(file));
      if (fs.existsSync(prev)) {
        const a = PNG.sync.read(fs.readFileSync(prev)), b = PNG.sync.read(fs.readFileSync(file));
        const W = Math.min(a.width, b.width), H = Math.min(a.height, b.height);
        const crop = (img) => { const o = new PNG({ width: W, height: H }); PNG.bitblt(img, o, 0, 0, W, H, 0, 0); return o; };
        const diff = new PNG({ width: W, height: H });
        const n = pixelmatch(crop(a).data, crop(b).data, diff.data, W, H, { threshold: 0.1 });
        diffPct = +(100 * n / (W * H)).toFixed(3);
        if (n > 0) fs.writeFileSync(file.replace(/\.png$/, ".diff.png"), PNG.sync.write(diff));
        if (a.height !== b.height) issuesHeight.push(`${w}px ${route}: page height ${a.height} -> ${b.height}`);
      }
    }
    summary.push({ route, width: w, issues, diffPct });
    await page.close();
  }
}
await browser.close();
fs.writeFileSync(path.join(OUT, "summary.json"), JSON.stringify(summary, null, 1));
const bad = summary.filter((s) => s.issues.length);
console.log(`${routes.length} routes × ${VIEWPORTS.length} viewports → ${OUT}`);
console.log(`Layout issues: ${bad.length}`); for (const b of bad.slice(0, 25)) console.log(`  ${b.width}px ${b.route}: ${b.issues.join(" | ")}`);
if (prevDir) { console.log(`Pixel diff vs ${prevDir}:`); for (const s of summary) if (s.diffPct !== null) console.log(`  ${s.width}px ${s.route}: ${s.diffPct}%`); for (const h of issuesHeight) console.log(`  HEIGHT ${h}`); }
process.exit(bad.length ? 1 : 0);
