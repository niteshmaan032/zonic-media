/* Content schema for the Local SEO dropdown redesign (26 Oct 2026).

   One data file per page in ./content/<slug>.ts exports CONTENT:
   LocalSeoContent. The template (LocalSeoTemplate.tsx) renders the
   seo-services-2 layout: split hero with an explanatory UI on the right,
   the searches we win, services, growth rows, steps, related pages,
   reviews, pricing (owner-locked, headings only), FAQ, audit form and the
   home2 gradient banner. Brief: docs/local-seo-redesign-brief.md. */

import type { IconKey } from "@/components/rd/industry/icons";
import type { FormCopy, Rich } from "@/components/rd/industry/types";

export type { Rich };

/* ---------------------------------------------------------------- hero UI */

/** One growth tab on a niche hero. */
export type GrowthTab = {
  /** Tab name, 1–2 words, e.g. "Google Maps". */
  label: string;
  /** Tab value, 1–3 words, e.g. "Rank #1", "Recommended", "More calls". */
  badge: string;
  /** Caption heading under the visual, 3–7 words. */
  title: string;
  /** Caption line, 8–16 words. */
  text: string;
};

/** Niche growth hero (owner, 26 Oct 2026: "clean interactive ui component
    … showing google maps ranking, ai ranking, getting more leads … every
    ui component should be different"). One card, three tabs (Maps / AI /
    growth) that auto-advance and can be clicked. Each tab has several
    designs; every page uses its own combination, colours and copy. */
export type GrowthHero = {
  kind: "growth";
  /** Maps tab design: pin on a map, Map Pack list, rank grid, rank by area. */
  maps: "pin" | "pack" | "grid" | "towns";
  /** AI tab design: assistant chat, Google AI Overview, voice assistant. */
  ai: "chat" | "overview" | "voice";
  /** Growth tab design: lead feed, call trend, booking calendar, pipeline. */
  growth: "feed" | "calls" | "calendar" | "pipeline";
  /** Example business, e.g. "Your Roofing Co.". */
  business: string;
  /** Google category line, e.g. "Roofing contractor". */
  category: string;
  /** Maps search, e.g. "roof repair near me". */
  query: string;
  /** "towns" design only: four generic area names (no real places). */
  areas?: [string, string, string, string];
  /** Question asked to the AI assistant / Google. */
  aiPrompt: string;
  /** Two reasons the AI names the business, 2–5 words each. */
  aiReasons: [string, string];
  /** Growth panel heading, e.g. "New roofing leads", "Bookings this week". */
  growthLabel: string;
  /** Growth items: [item, source], e.g. ["Roof inspection booked", "Google Maps"]. */
  leads: [[string, string], [string, string], [string, string]];
  tabs: [GrowthTab, GrowthTab, GrowthTab];
};

export type HeroUi = GrowthHero;

/* ----------------------------------------------------------------- blocks */

export type SeoCard = {
  icon: IconKey;
  title: string;
  desc: string;
  points: [string, string, string];
  /** Internal links (live URLs only). May be empty. */
  links: { href: string; label: string }[];
};

export type SearchGroup = {
  icon: IconKey;
  /** Group name, e.g. "Emergency searches". */
  label: string;
  /** 5–6 real searches customers type, lower case. */
  terms: string[];
};

export type GrowthRowCopy = {
  title: string;
  body: Rich;
  points: [string, string, string, string];
  cta: string;
};

export type Step = { h: string; p: string };

/** One point on the results timeline. `when` is a loose phase such as
    "First weeks" or "Months 2–3" (no promised dates or figures). */
export type Milestone = { when: string; title: string; text: string };

export type Win = { icon: IconKey; title: string; text: string };

export type CompareRow = { topic: string; other: string; zonic: string };

export type ExploreItem = {
  name: string;
  sub: string;
  href: string;
  icon: IconKey;
};

/* ------------------------------------------------------------------- page */

export type LocalSeoContent = {
  /** Live URL, e.g. "/services/industry/local-seo-for-electricians". */
  liveUrl: string;
  /** Short audience noun for schema/breadcrumbs, e.g. "Electricians". */
  audience: string;
  /** Service name for schema, e.g. "Local SEO for Electricians". */
  serviceName: string;
  meta: { title: string; description: string; keywords: string[] };
  hero: {
    h1Lead: string;
    h1Rest: string;
    icon: IconKey;
    lead: Rich;
    cta: string;
    ui: HeroUi;
  };
  searches: {
    title: string;
    lead: string;
    groups: [SearchGroup, SearchGroup, SearchGroup];
  };
  services: {
    /** "\n" marks the desktop line break; two lines. */
    title: string;
    lead: string;
    cta: string;
    items: [SeoCard, SeoCard, SeoCard, SeoCard, SeoCard, SeoCard];
  };
  growth: {
    title: string;
    lead: string;
    rank: GrowthRowCopy & {
      /** Example searches climbing: [search, from, to]. */
      keywords: [
        [string, number, number],
        [string, number, number],
        [string, number, number],
        [string, number, number],
      ];
    };
    ai: GrowthRowCopy & {
      query: string;
      /** Clause before "Your Company", e.g. "For a panel upgrade in your area,". */
      intro: string;
      bullets: [string, string, string];
    };
    leads: GrowthRowCopy & {
      /** [lead type, source, when]; type e.g. "Panel upgrade call". */
      items: [
        [string, string, string],
        [string, string, string],
        [string, string, string],
        [string, string, string],
      ];
    };
  };
  /** "What changes after you hire Zonic" (owner, 26 Oct: a section that
      shows the positive things after taking our service). A growth
      timeline of four milestones, four outcome cards, then the sitewide
      verified numbers. No invented figures or promises. */
  results: {
    title: string;
    lead: string;
    cta: string;
    milestones: [Milestone, Milestone, Milestone, Milestone];
    wins: [Win, Win, Win, Win];
  };
  /** "Zonic vs other SEO companies" (owner, 26 Oct). Six rows; `other`
      describes what businesses often get elsewhere (fair, hedged, no
      company named), `zonic` what we do instead (true statements only). */
  compare: {
    title: string;
    lead: string;
    rows: [
      CompareRow,
      CompareRow,
      CompareRow,
      CompareRow,
      CompareRow,
      CompareRow,
    ];
  };
  steps: {
    title: string;
    lead: string;
    items: [Step, Step, Step];
    audit: [string, "gap" | "behind" | "open" | "good"][];
    plan: string[];
    launch: string[];
  };
  explore: {
    title: string;
    lead: string;
    items: [ExploreItem, ExploreItem, ExploreItem, ExploreItem];
    other: string;
  };
  reviews: { title: string; lead: string };
  pricing: {
    title: string;
    compareTitle: string;
    addOnsTitle: string;
    customTitle: string;
  };
  faq: { title: string; lead: string; items: { q: string; a: string }[] };
  audit: {
    title: string;
    lead: Rich;
    points: [string, string, string, string];
    form: FormCopy;
  };
  banner: { title: string; lead: string };
};
