/* Content schema for the industry redesign programme (24 Oct 2026).

   Every industry main page (IndustryTemplate, the HVAC agency layout) and
   every location page (LocationTemplate, the Florida layout) is one data
   file of these types. The templates own the markup; the data owns the
   words. Rules for the words live in docs/industry-redesign-brief.md. */

import type { IconKey } from "./icons";

/* ---------------------------------------------------------------- shared */

/** Inline text with optional links: strings render as text, objects as
    links (internal hrefs only). */
export type Rich = (string | { href: string; label: string })[];

/** Two-accent colour set for a page. `a` is the warm/primary accent,
    `b` the second accent. Soft colours are tints for icon chips. */
export type Palette = {
  a: string;
  aDeep: string;
  aSoft: string;
  aText: string;
  b: string;
  bDeep: string;
  bSoft: string;
  bText: string;
};

export type LinkItem = { href: string; label: string };

/** A service card: icon circle, title, ~20-word description, 3 short
    points, 1–2 links. */
export type ServiceCard = {
  icon: IconKey;
  title: string;
  desc: string;
  points: [string, string, string];
  links: LinkItem[];
};

/* --------------------------------------------------------- growth rows */

/** Google Maps result card: query, the city, the business category line. */
export type MapsUi = {
  kind: "maps";
  query: string;
  city: string;
  category: string;
};

/** Google AI Overview card naming the business. */
export type AiUi = {
  kind: "ai";
  query: string;
  /** Opening clause before the business name, e.g. "For same-day drain
      cleaning in Austin,". */
  intro: string;
  bullets: [string, string, string];
};

/** After-job review text, then the review and the owner's reply. */
export type ReviewsUi = {
  kind: "reviews";
  /** Card title; default "After-job review request". */
  title?: string;
  /** Note under the text; default "Sent as the job closed". */
  sentNote?: string;
  sms: string;
  reviewer: string;
  review: string;
  reply: string;
};

/** Call log from ads (no prices): source chips and services. */
export type CallsUi = {
  kind: "calls";
  title: string;
  calls: [
    { service: string; source: string; when: string },
    { service: string; source: string; when: string },
    { service: string; source: string; when: string },
  ];
};

/** Phone-sized website with a click-to-call bar and service buttons. */
export type WebsiteUi = {
  kind: "website";
  /** Main button; default "Tap to call now". */
  cta?: string;
  /** Strip under the buttons; default "Book online in 60 seconds". */
  note?: string;
  url: string;
  headline: string;
  services: [string, string, string, string];
};

/* Travel growth UIs (26 Oct 2026, travel page): ./travelUi.tsx. */

/** AI trip planner: the traveler's prompt, a three-day plan and the
    business recommended with a Book button. */
export type TripChatUi = {
  kind: "tripChat";
  prompt: string;
  days: [string, string, string];
  pick: string;
  note: string;
  img: string;
};

/** Google "Things to do": three tours, the first is the business. */
export type ThingsToDoUi = {
  kind: "thingsToDo";
  query: string;
  tabs: [string, string, string];
  tours: [
    { name: string; img: string; tag: string },
    { name: string; img: string; tag: string },
    { name: string; img: string; tag: string },
  ];
  toast: string;
};

/** The business's own booking widget with a confirmation toast. */
export type DirectBookUi = {
  kind: "directBook";
  url: string;
  title: string;
  img: string;
  dates: string;
  guests: string;
  perks: [string, string, string];
  cta: string;
  toast: string;
  toastNote: string;
};

/* Fence growth UIs (5 Nov 2026, fence contractor pages): ./fenceUi.tsx.
   Example only: no prices, no real addresses or companies. */

/** Online estimate drawn on an aerial yard view: the fence line draws
    itself around the yard, gates pop in, then the request is sent. */
export type FenceLineUi = {
  kind: "fenceLine";
  /** Card heading, e.g. "Online fence estimate". */
  title: string;
  /** Short yard label, e.g. "Backyard · corner lot" (never an address). */
  yard: string;
  /** Spec rows shown beside the map: [label, value]. Four rows, e.g.
      ["Material", "Vinyl privacy"], ["Height", "6 ft"],
      ["Length", "About 180 ft"], ["Gates", "1 walk + 1 drive"]. */
  specs: [
    [string, string],
    [string, string],
    [string, string],
    [string, string],
  ];
  toast: string;
  toastNote: string;
};

/** One search per fence material, each with where the business shows. */
export type FenceRankUi = {
  kind: "fenceRank";
  title: string;
  /** [search, material chip, result], e.g.
      ["vinyl fence installation near me", "Vinyl", "Map Pack #1"]. */
  rows: [
    [string, string, string],
    [string, string, string],
    [string, string, string],
    [string, string, string],
  ];
  note: string;
};

/** Estimate pipeline board: four stages, job cards moving to "won". */
export type QuotePipelineUi = {
  kind: "quotePipeline";
  title: string;
  /** Stage names, e.g. ["New", "Measured", "Quoted", "Won"]. */
  stages: [string, string, string, string];
  /** Job cards: first name + job, and the stage index (0–3). */
  cards: { name: string; job: string; stage: 0 | 1 | 2 | 3 }[];
  note: string;
};

/* White label UIs (5 Nov 2026, /services/white-label-services):
   ./whiteLabelUi.tsx. Example only: "Your Agency", plain client names,
   rank positions and statuses, no prices or figures. */

/** A client report branded as the reselling agency. */
export type BrandReportUi = {
  kind: "brandReport";
  title: string;
  /** Example client line, e.g. "Prepared for Lakeside Dental". */
  client: string;
  /** Searches climbing: [search, from, to]. */
  ranks: [
    [string, number, number],
    [string, number, number],
    [string, number, number],
  ];
  /** Work shipped this month, 2–5 words each. */
  done: [string, string, string];
  note: string;
};

/** A Business Profile reinstatement case moving to "Reinstated". */
export type CaseTrackerUi = {
  kind: "caseTracker";
  title: string;
  /** Example client line, e.g. "Client: Ridgeway Roofing". */
  client: string;
  steps: [string, string, string, string];
  toast: string;
  toastNote: string;
};

/** Fulfillment queue across several agency clients. */
export type PartnerQueueUi = {
  kind: "partnerQueue";
  title: string;
  /** [client, task, status] — status one of "Done", "In review", "Live", "Queued". */
  rows: [string, string, string][];
  note: string;
};

export type GrowthUi =
  | MapsUi
  | AiUi
  | ReviewsUi
  | CallsUi
  | WebsiteUi
  | TripChatUi
  | ThingsToDoUi
  | DirectBookUi
  | FenceLineUi
  | FenceRankUi
  | QuotePipelineUi
  | BrandReportUi
  | CaseTrackerUi
  | PartnerQueueUi;

/** One alternating row in the "how we grow you" section. */
export type GrowthRow = {
  title: string;
  body: Rich;
  points: [string, string, string, string];
  cta: string;
  ui: GrowthUi;
};

/* ------------------------------------------------------------ hero */

/** A solid hero tile: icon, a short outcome title, one benefit line. */
export type HeroTile = { icon: IconKey; title: string; sub: string };

/** Main-page hero bento. With photos (HVAC style): two tall photos with a
    growth card each. Without photos: four solid growth tiles. */
export type HeroBento =
  | {
      kind: "photos";
      photoA: { src: string; position?: string; query: string };
      cardA: HeroTile;
      photoB: { src: string; position?: string; query: string };
      cardB: HeroTile;
    }
  | {
      kind: "tiles";
      wide: HeroTile & { chips: string[] };
      left: HeroTile;
      right: HeroTile;
      bottom: { title: string; sub: string };
    };

export type FormCopy = {
  formType: string;
  badge: string;
  title: string;
  subtitle: string;
  submitText: string;
  messageLabel: string;
  messagePlaceholder: string;
};

/** Pricing section headings. Owner-locked (25 Oct 2026): the section's
    body text and cards are the same on every page; only these four
    headings are written per page. The optional fields are ignored. */
export type PricingCopyData = {
  title: string;
  compareTitle: string;
  addOnsTitle: string;
  customTitle: string;
  lead?: Rich;
  compareLead?: string;
  addOnsLead?: string;
  customText?: string;
};

/* ------------------------------------------------- audience lanes */

/** One audience the business markets to (home inspectors, 5 Nov 2026:
    real estate agents vs homeowners). */
export type AudienceLane = {
  /** e.g. "Real estate agents". */
  audience: string;
  icon: IconKey;
  /** 20–30 words: what this audience wants and how we win it. */
  pitch: string;
  /** Mini UI: a search or request line, e.g. "pre-listing inspection near
      me" or "Inspection request from an agent". */
  query: string;
  /** Mini UI: four steps from first touch to booked, 2–4 words each. */
  flow: [string, string, string, string];
  /** Mini UI: result chip, e.g. "Report in 24 hours". */
  badge: string;
  /** Three inspection types for this audience and the tactic that sells each. */
  jobs: [
    { name: string; tactic: string },
    { name: string; tactic: string },
    { name: string; tactic: string },
  ];
};

/** "Who we market you to" section: two audience lanes and the add-on
    services both audiences buy. */
export type AudiencesCopy = {
  title: string;
  lead: Rich;
  lanes: [AudienceLane, AudienceLane];
  /** Add-on services both audiences book, e.g. "Radon testing". */
  addOns: { title: string; items: string[] };
  cta: string;
};

/* ------------------------------------------------- AI search (AEO/GEO) */

/** AEO + GEO section (5 Nov 2026): an AI answer board (engines, the
    customer's question, the answer naming the business and the sources it
    cites) beside four AEO/GEO tactic cards. Rendered by ./AiSearchSection. */
export type AiSearchCopy = {
  title: string;
  lead: Rich;
  /** The customer's question to the assistants. */
  prompt: string;
  /** Clause before "Your Company", e.g. "For an aluminum pool fence,". */
  answer: string;
  /** Three reasons the answer gives, 3–7 words each. */
  reasons: [string, string, string];
  /** Four tactic cards; `tag` says which discipline it belongs to. */
  tactics: [AiTactic, AiTactic, AiTactic, AiTactic];
  cta: string;
};

export type AiTactic = {
  tag: "AEO" | "GEO";
  icon: IconKey;
  title: string;
  /** 18–28 words. */
  text: string;
};

/* -------------------------------------------------------- main page */

export type IndustryContent = {
  /** Draft route, e.g. "plumbing-marketing-agency-2". */
  draftSlug: string;
  /** Live URL the draft will replace (canonical), e.g.
      "/services/plumbing-marketing-agency". */
  liveUrl: string;
  /** Short niche name for schema and breadcrumbs, e.g. "Plumbing". */
  niche: string;
  /** Optional schema overrides for pages that are not "<niche> Marketing
      Agency" (white label services, 5 Nov 2026). */
  schema?: {
    name: string;
    serviceType: string;
    parent?: { name: string; url: string };
  };
  meta: { title: string; description: string; keywords: string[] };
  palette: Palette;
  hero: {
    /** The H1. `h1Icon` renders a small icon badge after `h1Lead`. */
    h1Lead: string;
    h1Rest: string;
    h1Icon: IconKey;
    lead: Rich;
    cta: string;
    bento: HeroBento;
    /** Optional full-bleed background video (travel page, owner 26 Oct
        2026). When set, VideoHero replaces the bento hero and shows the
        `tiles` bento as glass outcome cards. `srcSmall` is served below
        768px; `poster` is the first frame (first paint, reduced motion). */
    video?: { src: string; srcSmall?: string; poster: string };
  };
  services: {
    title: string;
    lead: string;
    cta: string;
    items: ServiceCard[];
  };
  growth: { title: string; lead: string; rows: GrowthRow[] };
  /** Optional flat background for every growth-row UI panel, replacing
      the palette tints (travel: home2's grey card colour, var(--panel)). */
  growthPanel?: string;
  /** Optional "who we market you to" lanes (home inspectors). */
  audiences?: AudiencesCopy;
  /** Optional AEO + GEO section after the growth rows. */
  aiSearch?: AiSearchCopy;
  /** Optional dark band: leads you own vs shared leads (home services). */
  ownLeads?: {
    title: string;
    body: Rich;
    cta: string;
    colShared: string;
    colOwn: string;
    rows: [string, string, string][];
  };
  /** Every service you sell + what we run for it. */
  specialties: {
    title: string;
    lead: string;
    photo?: { src: string; alt: string; caption: string; sub: string };
    items: { icon: IconKey; name: string; tactic: string }[];
    more: string;
  };
  steps: {
    title: string;
    lead: string;
    items: [
      { h: string; p: string },
      { h: string; p: string },
      { h: string; p: string },
    ];
    /** Step 1 UI rows: label + status. */
    audit: [string, "gap" | "behind" | "open" | "good"][];
    /** Step 2 UI chips (services/areas to push first). */
    plan: string[];
    /** Step 3 UI checklist. */
    launch: string[];
    /** Optional step UI card titles (default: free audit / growth plan /
        launch checklist). */
    uiTitles?: {
      audit: string;
      auditChip: string;
      plan: string;
      launch: string;
    };
  };
  /** Only for niches with location pages. */
  locations?: {
    title: string;
    lead: Rich;
    items: { name: string; href: string; cities: string }[];
    other: string;
  };
  reviews: { title: string; lead: string };
  /** Monthly-plan section headings. Optional: the white label page (sold
      to agencies) leaves the retail plans out. */
  pricing?: PricingCopyData;
  faq: { title: string; lead: string; items: { q: string; a: string }[] };
  audit: {
    title: string;
    lead: Rich;
    points: [string, string, string, string];
    form: FormCopy;
  };
  banner: { title: string; lead: string; icons: [IconKey, IconKey] };
};

/* ---------------------------------------------------- location page */

export type LocationContent = {
  /** Draft route segment, e.g. "texas-2". */
  draftSlug: string;
  /** Live URL (canonical), e.g. "/services/plumbing-marketing-agency/texas". */
  liveUrl: string;
  parent: { href: string; label: string; niche: string };
  place: string;
  meta: { title: string; description: string; keywords: string[] };
  palette: Palette;
  hero: {
    h1: string;
    /** Phrase inside the H1 that must not break across lines. */
    h1NoWrap?: string;
    lead: Rich;
    cta: string;
    tiles: {
      wide: HeroTile & { chips: string[] };
      left: HeroTile;
      right: HeroTile;
      bottom: { title: string; sub: string };
    };
  };
  services: {
    title: string;
    lead: string;
    cta: string;
    items: ServiceCard[];
  };
  growth: { title: string; lead: string; rows: GrowthRow[] };
  /** Optional "who we market you to" lanes (home inspectors). */
  audiences?: AudiencesCopy;
  regions: {
    title: string;
    lead: string;
    items: { name: string; cities: string; focus: string }[];
    other: string;
  };
  reviews: { title: string; lead: string };
  pricing: PricingCopyData;
  faq: { title: string; lead: string; items: { q: string; a: string }[] };
  audit: {
    title: string;
    lead: Rich;
    points: [string, string, string];
    form: FormCopy;
  };
  banner: { title: string; lead: string; icons: [IconKey, IconKey] };
};
