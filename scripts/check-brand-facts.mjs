// Facts lint: find literal brand claims typed into pages instead of coming
// from src/shared/brandFacts.ts. Report mode by default; `--strict <family>`
// exits 1 if that family still has hits. Families are path prefixes.
//   node scripts/check-brand-facts.mjs
//   node scripts/check-brand-facts.mjs --strict "src/app/(main)/services/industry"
import fs from "node:fs";
import path from "node:path";

const PATTERNS = [
  ["rating 4.9", /\b4\.9\b/],
  ["rating 5.0", /\b5\.0\b/],
  ["volume N+", /\b(50|300|500|900|1,?500)\+/],
  ["$900 website", /\$900\b/],
  ["$2,000 website", /\$2,?000\b/],
  ["six-month term", /six[- ]month/i],
  ["no long-term contracts", /no long[- ]term/i],
  ["60–90 days", /60\s?[–-]\s?90/],
  ["three to six months", /three to six months/i],
  ["invented reviews", /\b(1[0-9]{2}|2[0-9]{2}) reviews\b/],
  ["invented uplift %", /\+\d{2,3}%/],
];
const ALLOW = [
  "src/shared/brandFacts.ts",
  "src/data/evidence/",
  "public/pricing.md",
  "public/llms",
];
const ROOTS = ["src", "public/llms.txt", "public/pricing.md"];
const exts = /\.(tsx?|jsx?|json|md|txt)$/;

const files = [];
const walk = (p) => {
  const st = fs.statSync(p);
  if (st.isDirectory()) for (const e of fs.readdirSync(p)) walk(path.join(p, e));
  else if (exts.test(p)) files.push(p);
};
ROOTS.forEach((r) => fs.existsSync(r) && walk(r));

const strictIdx = process.argv.indexOf("--strict");
const strictFamily = strictIdx > -1 ? process.argv[strictIdx + 1] : null;

const byPattern = {}; const byFile = {}; let strictHits = 0;
for (const f of files) {
  if (ALLOW.some((a) => f.startsWith(a))) continue;
  const text = fs.readFileSync(f, "utf8");
  for (const [label, re] of PATTERNS) {
    const m = text.match(new RegExp(re.source, re.flags.includes("g") ? re.flags : re.flags + "g"));
    if (!m) continue;
    byPattern[label] = (byPattern[label] || 0) + 1;
    (byFile[f] = byFile[f] || []).push(`${label}×${m.length}`);
    if (strictFamily && f.startsWith(strictFamily)) strictHits += m.length;
  }
}
console.log("Files with literal brand claims, by pattern (file counts):");
for (const [k, v] of Object.entries(byPattern).sort((a, b) => b[1] - a[1])) console.log(`  ${String(v).padStart(4)}  ${k}`);
console.log(`\n${Object.keys(byFile).length} files carry at least one literal claim.`);
const fam = {};
for (const f of Object.keys(byFile)) { const k = f.split("/").slice(0, 4).join("/"); fam[k] = (fam[k] || 0) + 1; }
console.log("By area:"); for (const [k, v] of Object.entries(fam).sort((a, b) => b[1] - a[1]).slice(0, 12)) console.log(`  ${String(v).padStart(4)}  ${k}`);
fs.mkdirSync("reports", { recursive: true });
fs.writeFileSync("reports/brand-facts-lint.json", JSON.stringify({ generatedAt: new Date().toISOString(), byPattern, byFile }, null, 1));
console.log("\nDetail: reports/brand-facts-lint.json");
if (strictFamily) { console.log(`\nStrict check for ${strictFamily}: ${strictHits} hits`); process.exit(strictHits ? 1 : 0); }
