// Rebuilds public/llms-full.txt = public/llms.txt + every deep-dive in
// public/llms/*.md, separated by horizontal rules. Run after editing either:
//   node scripts/build-llms-full.mjs
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const PUB = path.join(ROOT, "public");
const ORDER = [
  "gmb-reinstatement.md",
  "gmb-verification.md",
  "gmb-optimization.md",
  "local-seo.md",
  "web-design.md",
  "google-ads.md",
];

const index = fs.readFileSync(path.join(PUB, "llms.txt"), "utf8").trimEnd();
const sections = ORDER.map((name) =>
  fs.readFileSync(path.join(PUB, "llms", name), "utf8").trimEnd(),
);

fs.writeFileSync(
  path.join(PUB, "llms-full.txt"),
  `${[index, ...sections].join("\n\n---\n\n")}\n`,
);
console.log(`Wrote llms-full.txt (${index.length} index + ${sections.length} sections)`);
