// Computed-style comparison for redesign migrations: records the computed
// style of every element inside <main> (document order) at 390/768/1440 px,
// then compares two captures property by property. Use it to prove a CSS
// migration (e.g. stylesheet -> Tailwind) renders identically.
//   node scripts/style-diff.mjs capture --base http://localhost:3131 --route /x --out reports/style/x-before.json
//   node scripts/style-diff.mjs compare reports/style/x-before.json reports/style/x-after.json
import fs from "node:fs";
import path from "node:path";
import puppeteer from "puppeteer-core";

const [mode, ...rest] = process.argv.slice(2);
const arg = (k, d) => { const i = rest.indexOf(k); return i > -1 ? rest[i + 1] : d; };
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const SKIP = /^(animation|transition|will-change|-webkit-tap|caret|cursor|perspective-origin|transform-origin|inset-block|inset-inline)/;

if (mode === "capture") {
  const base = arg("--base"), route = arg("--route"), out = arg("--out");
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: "new" });
  const result = {};
  for (const w of [390, 768, 1440]) {
    const page = await browser.newPage();
    await page.setViewport({ width: w, height: 900 });
    await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "no-preference" }]);
    await page.goto(base + route, { waitUntil: "networkidle2", timeout: 60000 });
    await page.evaluate(() => document.fonts.ready);
    // freeze every CSS animation/transition at t=0 so captures are deterministic
    await page.evaluate(() => { for (const a of document.getAnimations()) { a.pause(); a.currentTime = 0; } });
    result[w] = await page.evaluate((skipSrc) => {
      const skip = new RegExp(skipSrc);
      const els = [...document.querySelectorAll("main, main *")];
      return els.map((el, i) => {
        const out = { i, tag: el.tagName.toLowerCase(), cls: (el.getAttribute("class") || "").split(/\s+/).filter((c) => !c.startsWith("tw:")).slice(0, 3).join(" "), s: {} };
        for (const pe of ["", "::before", "::after"]) {
          const cs = getComputedStyle(el, pe || null);
          if (pe && (cs.content === "none" || cs.content === "normal")) continue;
          for (let k = 0; k < cs.length; k++) { const p = cs[k]; if (skip.test(p)) continue; out.s[pe + p] = cs.getPropertyValue(p); }
        }
        return out;
      });
    }, SKIP.source);
    await page.close();
  }
  await browser.close();
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, JSON.stringify(result));
  console.log(`captured ${Object.values(result).map((a) => a.length).join("/")} elements -> ${out}`);
} else if (mode === "compare") {
  const [aF, bF] = rest;
  const A = JSON.parse(fs.readFileSync(aF, "utf8")), B = JSON.parse(fs.readFileSync(bF, "utf8"));
  let total = 0; const byProp = {}; const byEl = {};
  for (const w of Object.keys(A)) {
    if (A[w].length !== B[w].length) console.log(`${w}px: element count ${A[w].length} vs ${B[w].length}`);
    const n = Math.min(A[w].length, B[w].length);
    for (let i = 0; i < n; i++) {
      const a = A[w][i], b = B[w][i];
      if (a.tag !== b.tag) { console.log(`${w}px #${i}: tag ${a.tag} vs ${b.tag}`); break; }
      const keys = new Set([...Object.keys(a.s), ...Object.keys(b.s)]);
      for (const k of keys) if (a.s[k] !== b.s[k]) {
        total++; byProp[k] = (byProp[k] || 0) + 1;
        const key = `${a.tag}.${b.cls || a.cls}`;
        (byEl[key] = byEl[key] || []).push(`${w}:${k}: ${a.s[k]} -> ${b.s[k]}`);
      }
    }
  }
  console.log(`differences: ${total}`);
  console.log("by property:", Object.entries(byProp).sort((x, y) => y[1] - x[1]).slice(0, 25).map(([k, v]) => `${k}=${v}`).join(", "));
  const els = Object.entries(byEl).sort((x, y) => y[1].length - x[1].length);
  console.log(`elements with differences: ${els.length}`);
  for (const [k, v] of els.slice(0, Number(arg("--top", 40)))) console.log(`  ${k} (${v.length}): ${[...new Set(v)].slice(0, 4).join(" | ")}`);
  process.exit(total ? 1 : 0);
}
