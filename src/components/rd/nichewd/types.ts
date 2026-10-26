/* Niche website design pages — redesign schema (26 Oct 2026).

   Owner: "web design is my crucial service which i want to grow more and
   get more organic leads … redesign my all web design pages for niches …
   we start with hvac … optimized content, trending searches and keywords
   … only the important sections … something different layout of hero
   section".

   One content file per niche in ./content/<live-slug>.ts exports
   CONTENT: NicheWebContent; NicheWebTemplate renders it. The mid-page
   example site (heroes/SiteStage) is driven by each niche's `stage`
   data: a two-mode switch restyles the example homepage. */

import type { IconKey } from "@/components/rd/industry/icons";
import type { FormCopy, HeroBento, Rich } from "@/components/rd/industry/types";
import type { BrandTone } from "@/components/rd/seoservices/seoUi";

export type { Rich };

export type WdCard = {
  icon: IconKey;
  title: string;
  desc: string;
  points: [string, string, string];
  links: { href: string; label: string }[];
};

export type WdFeature = { icon: IconKey; title: string; text: string };

export type WdRow = {
  title: string;
  body: Rich;
  points: [string, string, string, string];
  cta: string;
};

export type WdStep = { when: string; h: string; p: string };

export type WdGroup = {
  name: string;
  icon: IconKey;
  pages: [string, string, string];
};

export type WdMilestone = { when: string; title: string; text: string };

export type WdBand = { icon: IconKey; value: string; label: string };

export type WdCompareRow = { topic: string; other: string; zonic: string };

/** One mode of the example site, e.g. "Cooling season" / "Heating season". */
export type StageMode = {
  label: string;
  icon: IconKey;
  badge: string;
  headline: string;
  sub: string;
  services: [string, string, string];
  /** Booking widget chips; the first is pre-selected and named in the toast. */
  book: [string, string, string];
  /** Optional photo for the "photo" look: a full-bleed hero image behind
      the example homepage and the phone header (owner, 26 Oct 2026). */
  img?: {
    src: string;
    position?: string;
    phonePosition?: string;
    /** Scale the photo up around `position` so each mode frames a
        different part of the same picture (e.g. the window vs the door). */
    zoom?: number;
  };
};

/** Example site shown in the showcase section (example copy only). */
export type SiteStageData = {
  /** Conversion widget on the example homepage: calendar booking, estimate
      request, tow dispatch, case review or home valuation. */
  widget: "book" | "quote" | "dispatch" | "case" | "valuation";
  /** aria-label of the two-mode switch. */
  switchLabel: string;
  /** e.g. "Your HVAC Co." — never a real company. */
  business: string;
  /** e.g. "yourhvacco.com". */
  domain: string;
  nav: [string, string, string, string];
  /** Header call button, e.g. "Call 24/7". */
  call: string;
  primary: string;
  secondary: string;
  proof: string;
  bookTitle: string;
  confirm: string;
  /** Subtitles under the three service tiles. */
  serviceSubs: [string, string, string];
  /** Phone toast heading, e.g. "Booking confirmed". */
  toast: string;
  /** Phone toast second line after the first booking chip, e.g.
      "Today 10 AM" or "Callback within the hour". */
  toastNote: string;
  /** Short second button on the phone's sticky bar, e.g. "Book". */
  phoneCta: string;
  modes: [StageMode, StageMode];
  /** What markers 1–4 point to: header call button, mode badge,
      booking widget, phone sticky call bar. */
  legend: [string, string, string, string];
};

export type NicheWebContent = {
  /** Live URL, e.g. "/services/hvac-website-design". */
  liveUrl: string;
  /** Example site in the showcase section. */
  stage: SiteStageData;
  /** Four colours: [primary, secondary, third, fourth]. */
  tones: [BrandTone, BrandTone, BrandTone, BrandTone];
  serviceName: string;
  audience: string;
  meta: { title: string; description: string; keywords: string[] };
  hero: {
    h1Lead: string;
    h1Rest: string;
    icon: IconKey;
    lead: Rich;
    cta: string;
    /** Floating cards around the centred copy, as on the industry pages
        (owner, 26 Oct: "make hero section just like industries hero"). */
    bento: HeroBento;
  };
  /** Mid-page section holding the niche's interactive example site (the
      former hero stage; owner, 26 Oct: "make it a section on middle of
      the page"). */
  showcase: { title: string; lead: string };
  services: {
    /** "\n" = desktop line break (two lines). */
    title: string;
    lead: string;
    cta: string;
    items: [WdCard, WdCard, WdCard, WdCard, WdCard, WdCard];
  };
  features: {
    title: string;
    lead: string;
    items: [
      WdFeature,
      WdFeature,
      WdFeature,
      WdFeature,
      WdFeature,
      WdFeature,
      WdFeature,
      WdFeature,
    ];
  };
  growth: {
    title: string;
    lead: string;
    rank: WdRow & { keywords: [string, number, number][] };
    convert: WdRow & {
      url: string;
      headline: string;
      services: [string, string, string, string];
    };
    ai: WdRow & {
      query: string;
      intro: string;
      bullets: [string, string, string];
    };
  };
  /** Animated page tree of the site we build. */
  sitemap: {
    title: string;
    lead: string;
    home: string;
    groups: [WdGroup, WdGroup, WdGroup, WdGroup];
  };
  /** "What changes after launch": four loose-phase milestones, four
      outcome cards, then the sitewide verified numbers. */
  results: {
    title: string;
    lead: string;
    cta: string;
    milestones: [WdMilestone, WdMilestone, WdMilestone, WdMilestone];
    wins: [WdFeature, WdFeature, WdFeature, WdFeature];
    /** Dark outcome band under the wins (owner, 26 Oct 2026: replaces the
        sitewide 1,500+/900+/5.0/20+ numbers with page-specific benefits —
        more leads, fast site, easy to use … — different on every page).
        `value` is a short headline, `label` one line; no figures. */
    band: [WdBand, WdBand, WdBand, WdBand];
  };
  process: {
    title: string;
    lead: string;
    items: [WdStep, WdStep, WdStep, WdStep];
  };
  compare: {
    title: string;
    lead: string;
    /** Left column heading, e.g. "Template website". */
    otherLabel: string;
    rows: [
      WdCompareRow,
      WdCompareRow,
      WdCompareRow,
      WdCompareRow,
      WdCompareRow,
      WdCompareRow,
    ];
  };
  reviews: { title: string; lead: string };
  pricing: {
    title: string;
    compareTitle: string;
    addOnsTitle: string;
    customTitle: string;
  };
  faq: { title: string; lead: string; items: { q: string; a: string }[] };
  consult: {
    title: string;
    lead: Rich;
    points: [string, string, string, string];
    form: FormCopy;
  };
  banner: { title: string; lead: string };
};
