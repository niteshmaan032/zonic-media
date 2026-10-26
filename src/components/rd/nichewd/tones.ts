import type { BrandTone } from "@/components/rd/seoservices/seoUi";

/* Colour sets for the niche website design pages (26 Oct 2026).

   Owner: "the different color palletes used" — every web design page gets
   its own four-colour set. tones[0] and tones[1] colour the two modes of
   the example site (seasons, storm vs re-roof …), tones[2] the markers.
   No set repeats, no two pages share a lead pair, and no niche reuses the
   lead pair of its local SEO page (localseo/tones.ts) or its industry
   marketing page (docs/industry-redesign-brief.md, "Palettes"). White
   text reads on every `solid` except gold, which carries dark text. */

const h = (
  solid: string,
  soft: string,
  softText: string,
  onSolid = "#ffffff",
): BrandTone => ({ solid, onSolid, soft, softText });

const HUES = {
  blue: h("#2563eb", "#e7efff", "#1d4ed8"),
  navy: h("#1e3a8a", "#e3e8fb", "#1e3a8a"),
  indigo: h("#4f46e5", "#ecebfe", "#4338ca"),
  violet: h("#7c3aed", "#f1eafe", "#6d28d9"),
  purple: h("#9333ea", "#f5e9ff", "#7e22ce"),
  fuchsia: h("#c026d3", "#fbe8fe", "#a21caf"),
  pink: h("#db2777", "#fde6f1", "#be185d"),
  rose: h("#e11d48", "#ffe4e8", "#be123c"),
  red: h("#dc2626", "#fee4e4", "#b91c1c"),
  coral: h("#ef5a3c", "#ffe9e3", "#c2391f"),
  orange: h("#ea580c", "#ffedd5", "#c2410c"),
  gold: h("#f5b40b", "#fff4cc", "#8a5a00", "#1c1917"),
  lime: h("#65a30d", "#ecfccb", "#3f6212"),
  green: h("#16a34a", "#dcfce7", "#15803d"),
  emerald: h("#059669", "#d1fae5", "#047857"),
  teal: h("#0d9488", "#ccfbf1", "#0f766e"),
  cyan: h("#0891b2", "#cffafe", "#0e7490"),
  sky: h("#0284c7", "#e0f2fe", "#0369a1"),
  slate: h("#475569", "#eef1f5", "#334155"),
} satisfies Record<string, BrandTone>;

type HueKey = keyof typeof HUES;

/** Four hues per page, keyed by the live URL's last segment. */
const SETS: Record<string, [HueKey, HueKey, HueKey, HueKey]> = {
  "hvac-website-design": ["sky", "orange", "indigo", "emerald"],
  "plumbing-website-design": ["navy", "cyan", "orange", "lime"],
  "electrical-website-design": ["gold", "navy", "teal", "fuchsia"],
  "roofing-website-design": ["indigo", "red", "gold", "teal"],
  "garage-door-website-design": ["blue", "gold", "rose", "emerald"],
  "appliance-repair-website-design": ["cyan", "orange", "purple", "lime"],
  "gutter-company-website-design": ["teal", "coral", "indigo", "gold"],
  "solar-website-design": ["orange", "navy", "emerald", "sky"],
  "bathroom-remodeling-website-design": ["sky", "rose", "violet", "lime"],
  "kitchen-remodeling-website-design": ["emerald", "coral", "navy", "gold"],
  "general-contractor-website-design": ["slate", "orange", "teal", "gold"],
  "flooring-website-design": ["purple", "gold", "teal", "coral"],
  "window-and-door-website-design": ["cyan", "violet", "gold", "emerald"],
  "painting-contractor-website-design": ["fuchsia", "sky", "gold", "lime"],
  "landscaping-website-design": ["green", "orange", "sky", "violet"],
  "tree-service-website-design": ["teal", "orange", "navy", "lime"],
  "pool-service-website-design": ["cyan", "gold", "indigo", "pink"],
  "pest-control-website-design": ["orange", "emerald", "navy", "rose"],
  "commercial-cleaning-website-design": ["navy", "emerald", "sky", "gold"],
  "residential-cleaning-website-design": ["pink", "blue", "gold", "cyan"],
  "dental-website-design": ["teal", "indigo", "gold", "pink"],
  "chiropractor-website-design": ["indigo", "emerald", "coral", "sky"],
  "pediatrician-website-design": ["coral", "cyan", "purple", "gold"],
  "law-firm-website-design": ["navy", "red", "gold", "sky"],
  "real-estate-agent-website-design": ["teal", "gold", "violet", "rose"],
  "towing-company-website-design": ["red", "slate", "gold", "cyan"],
};

export function tonesFor(
  slug: string,
): [BrandTone, BrandTone, BrandTone, BrandTone] {
  const set = SETS[slug];
  if (!set) throw new Error(`No web design colour set for ${slug}`);
  const [a, b, c, d] = set.map((k) => HUES[k]);
  return [a, b, c, d];
}
