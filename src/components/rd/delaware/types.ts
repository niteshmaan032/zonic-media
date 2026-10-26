import type { ReactNode } from "react";
import type {
  PhlImage,
  PhlLandingData,
} from "@/app/components/PhlLocationLanding";
import type { HubApp } from "@/components/rd/dfw-kit/hub";
import type { PricingCopy } from "@/components/rd/home/HomePricing";

/* Data for the Delaware redesign drafts (22 Oct 2026). Same shape as the
   live pages' PhlLandingData, so the three PhlLocationLanding pages pass
   their data object unchanged; the bespoke digital-marketing page builds
   one from its own constants. Widened: `results.lead` (carries a link) and
   service cards, which may carry Dallas-style points and a link. */

/** Page type; picks the page's own UI set. The phl-* types are the
    Philadelphia drafts and the nyc-* types the NYC pages (23 Oct 2026),
    built on the same template. */
export type DelawareKind =
  | "marketing"
  | "seo"
  | "web"
  | "wilmington"
  | "phl-marketing"
  | "phl-seo"
  | "phl-ppc"
  | "phl-sem"
  | "nyc-marketing"
  | "nyc-seo"
  | "nyc-web";

type ServiceCard = PhlLandingData["services"]["cards"][number] & {
  points?: string[];
  href?: string;
  link?: string;
};

export type DelawareData = Omit<PhlLandingData, "results" | "services"> & {
  results: Omit<PhlLandingData["results"], "lead"> & { lead?: ReactNode };
  services: Omit<PhlLandingData["services"], "cards"> & {
    cards: ServiceCard[];
    /** Paragraph beside the heading (Dallas layout). */
    lead?: ReactNode;
  };
};

export type DelawareRankRow = {
  city: string;
  keyword: string;
  rank: string;
  change: string;
};

/** One row of the white "how we win" band (Dallas features pattern). */
export type DelawareFeature = {
  label: string;
  title: string;
  body: ReactNode;
  points: { t: string; d: string }[];
  href: string;
  link: string;
  ui:
    | "towns"
    | "ads"
    | "ai"
    | "keywords"
    | "crawl"
    | "citations"
    | "devices"
    | "lighthouse"
    | "leadform"
    | "suburbs"
    | "lsa"
    | "reviews"
    | "social"
    | "hoods"
    | "funnel"
    | "pages"
    | "links"
    | "gsc"
    | "tree"
    | "terms"
    | "abtest"
    | "serpshare"
    | "loop"
    | "budget"
    | "hours"
    | "leadlog"
    | "monitor"
    | "blocks"
    | "categories"
    | "schema"
    | "a11y"
    | "editor"
    | "waterfall";
};

export type DelawareExtras = {
  kind: DelawareKind;
  /** Wide photo in the about section (landscape). Defaults to the page's
      showcase photo. */
  aboutPhoto?: PhlImage & { position?: string };
  /** About heading as explicit lines at the Dallas size (no accent). */
  aboutTitle?: string[];
  /** Text card in the narrow about box (replaces the county map card). */
  aboutCard?: {
    kicker: string;
    title: string;
    points: ReactNode[];
    foot: string;
  };
  /** Centred blue banner in the Dallas "banner" slot, before the
      comparison (digital-marketing page: its "SEO + Web Design, One Agency"
      block). */
  banner?: { eyebrow: string; h2: string; body: ReactNode; cta: string };
  /** Dallas-style feature rows; replaces the results rows when given. */
  features?: { h2: string; lead: ReactNode; items: DelawareFeature[] };
  /** Local rank tracker (shown on the dark local-SEO card). */
  rank?: {
    scope: string;
    rows: DelawareRankRow[];
    summaryPercent: number;
    summaryLabel: string;
    stats: { label: string; value: string }[];
    footnote: string;
  };
  /** Dark card as the local SEO block (rank board UI) instead of the band. */
  localSeo?: {
    eyebrow: string;
    h2: string;
    body: ReactNode;
    points: string[];
    cta: { href: string; label: string };
  };
  /** "Found everywhere" platform hub; replaces the grow links when given. */
  platforms?: {
    h2: string;
    lead: ReactNode;
    left: HubApp[];
    right: HubApp[];
    leftLabel: string;
    rightLabel: string;
    /** Centre of the hub (default: map pin, "Your business"). */
    centerIcon?: ReactNode;
    centerTitle?: string;
    centerSub?: string;
  };
  /** Dallas-style contact intro: heading split around a chat icon. */
  contact?: { before: string; after: string; lead: string };
  /** Per-step links for the process arrows (default: the contact form). */
  stepLinks?: string[];
  /** Pricing section (plans, comparison, add-ons) with this page's
      headings; shown after the comparison, before the FAQ. */
  pricing?: PricingCopy;
  /** Hide the "grow further" links under the hub. */
  noGrow?: boolean;
  /** Testimonial heading (default "Real Reviews, Real Results"). */
  reviewsTitle?: string;
  /** Hero pillar backgrounds, a → d (a and d take white text, b and c
      ink). Every page gets its own set (owner, 22 Oct). */
  pillars?: [string, string, string, string];
  /** Compare scorecard style (default: dot scale). */
  scoreStyle?:
    | "dots"
    | "columns"
    | "tiles"
    | "rings"
    | "delta"
    | "table"
    | "bullet"
    | "radar"
    | "slope"
    | "dumbbell"
    | "needles";
  /** Journey phone (default: Business Profile with the showcase stats when
      the page has a showcase, else the leads lock screen). */
  phone?:
    | "profile"
    | "leads"
    | "site"
    | "report"
    | "social"
    | "serp"
    | "callad"
    | "semreport"
    | "textback"
    | "voice"
    | "booking";
  /** UI on the dark band card (default: the console). */
  darkUi?:
    | "console"
    | "build"
    | "mappack"
    | "channels"
    | "visibility"
    | "roas"
    | "blended"
    | "boroughs"
    | "insights"
    | "relaunch";
  /** Photo on the journey phone (default: the showcase photo). */
  phoneImage?: PhlImage;
};
