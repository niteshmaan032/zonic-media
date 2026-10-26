import type { Palette } from "@/components/rd/industry/types";
import type { BrandTone } from "@/components/rd/seoservices/seoUi";

/* Colour sets for the Local SEO dropdown pages (26 Oct 2026).

   Owner: "new color pallets" — the local SEO family must not look like the
   industry pages (two-accent pastels with gradients). Each page gets its
   own four-colour set, cycled across icons, chips and pins like the
   Google-style set on /services/seo-services-2. No set repeats, and no
   niche reuses the accent pair of its industry marketing page
   (docs/industry-redesign-brief.md, "Palettes"). White text must read on
   every `solid` except the gold/amber ones, which carry dark text. */

type Hue = BrandTone & { deep: string };

const h = (
  solid: string,
  deep: string,
  soft: string,
  softText: string,
  onSolid = "#ffffff",
): Hue => ({ solid, deep, soft, softText, onSolid });

const HUES = {
  blue: h("#2563eb", "#1d4ed8", "#e7efff", "#1d4ed8"),
  indigo: h("#4f46e5", "#4338ca", "#ecebfe", "#4338ca"),
  violet: h("#7c3aed", "#6d28d9", "#f1eafe", "#6d28d9"),
  pink: h("#db2777", "#be185d", "#fde6f1", "#be185d"),
  rose: h("#e11d48", "#be123c", "#ffe4e8", "#be123c"),
  red: h("#dc2626", "#b91c1c", "#fee4e4", "#b91c1c"),
  coral: h("#ef5a3c", "#d6432a", "#ffe9e3", "#c2391f"),
  orange: h("#ea580c", "#c2410c", "#ffedd5", "#c2410c"),
  gold: h("#f5b40b", "#d99a06", "#fff4cc", "#8a5a00", "#1c1917"),
  lime: h("#65a30d", "#4d7c0f", "#ecfccb", "#3f6212"),
  emerald: h("#059669", "#047857", "#d1fae5", "#047857"),
  teal: h("#0d9488", "#0f766e", "#ccfbf1", "#0f766e"),
  cyan: h("#0891b2", "#0e7490", "#cffafe", "#0e7490"),
  sky: h("#0284c7", "#0369a1", "#e0f2fe", "#0369a1"),
  navy: h("#1e3a8a", "#172554", "#e3e8fb", "#1e3a8a"),
} satisfies Record<string, Hue>;

type HueKey = keyof typeof HUES;

/** Four hues per page, keyed by the live URL's last segment. */
const SETS: Record<string, [HueKey, HueKey, HueKey, HueKey]> = {
  "ai-seo-services": ["violet", "cyan", "pink", "gold"],
  "local-seo-for-small-business": ["emerald", "coral", "sky", "gold"],
  "local-seo-packages": ["indigo", "gold", "teal", "rose"],
  "local-seo-services-for-hvac": ["teal", "orange", "indigo", "gold"],
  "seo-services-for-plumber": ["cyan", "rose", "indigo", "lime"],
  "local-seo-for-electricians": ["sky", "violet", "gold", "rose"],
  "local-seo-for-roofing-companies": ["indigo", "coral", "emerald", "gold"],
  "local-seo-for-garage-door-companies": ["teal", "pink", "blue", "gold"],
  "local-seo-for-appliance-repair": ["emerald", "violet", "orange", "sky"],
  "local-seo-for-gutter-companies": ["blue", "orange", "lime", "pink"],
  "local-seo-for-solar-companies": ["sky", "gold", "coral", "violet"],
  "local-seo-for-bathroom-remodelers": ["teal", "rose", "indigo", "lime"],
  "local-seo-for-kitchen-remodelers": ["orange", "indigo", "cyan", "lime"],
  "local-seo-for-general-contractors": ["blue", "gold", "emerald", "coral"],
  "local-seo-for-flooring-companies": ["rose", "indigo", "gold", "cyan"],
  "local-seo-for-window-and-door-companies": [
    "sky",
    "orange",
    "emerald",
    "pink",
  ],
  "local-seo-for-painting-contractors": ["violet", "gold", "coral", "cyan"],
  "local-seo-for-landscaping-companies": ["lime", "violet", "orange", "cyan"],
  "local-seo-for-tree-service-companies": [
    "emerald",
    "orange",
    "indigo",
    "gold",
  ],
  "local-seo-for-pool-service-companies": ["blue", "coral", "teal", "gold"],
  "seo-services-for-pest-control": ["red", "indigo", "gold", "emerald"],
  "local-seo-for-commercial-cleaning": ["indigo", "teal", "coral", "lime"],
  "local-seo-services-for-residential-cleaning": [
    "pink",
    "teal",
    "blue",
    "lime",
  ],
  "dental-seo-services": ["blue", "pink", "emerald", "gold"],
  "chiropractor-local-seo-services": ["violet", "coral", "cyan", "lime"],
  pediatricians: ["sky", "pink", "gold", "emerald"],
  "local-seo-for-law-firms": ["navy", "gold", "rose", "teal"],
  "real-estate-seo-services": ["coral", "blue", "gold", "lime"],
  "local-seo-for-cannabis-dispensaries": ["emerald", "pink", "gold", "violet"],
  "seo-services-for-car-towing": ["orange", "navy", "gold", "cyan"],
};

export type ToneSet = {
  tones: [BrandTone, BrandTone, BrandTone, BrandTone];
  /** Two-accent palette for the shared industry UIs (H1 badge, steps,
      growth cards, contact tiles): first and second hue. */
  p: Palette;
};

export function toneSetFor(liveUrl: string): ToneSet {
  const key = liveUrl.split("/").filter(Boolean).pop() ?? "";
  const set = SETS[key];
  if (!set) throw new Error(`No local SEO colour set for ${liveUrl}`);
  const [a, b, c, d] = set.map((k) => HUES[k]);
  const strip = ({ solid, onSolid, soft, softText }: Hue): BrandTone => ({
    solid,
    onSolid,
    soft,
    softText,
  });
  return {
    tones: [strip(a), strip(b), strip(c), strip(d)],
    p: {
      a: a.solid,
      aDeep: a.deep,
      aSoft: a.soft,
      aText: a.softText,
      b: b.solid,
      bDeep: b.deep,
      bSoft: b.soft,
      bText: b.softText,
    },
  };
}
