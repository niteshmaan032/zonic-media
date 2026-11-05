/* Plans, comparison rows and add-ons for the /home2 pricing section
   (owner, 23 Oct 2026). Plan prices and inclusions are the owner's list;
   the audience lines are written for any business (the owner's reference
   was a home-inspector page). Add-on prices come from the owner's
   reference image. Updated 5 Nov 2026 from the owner's revised sheet:
   Growth $750/mo annual or $950 monthly, more GBP posts, monthly reviews
   and audits, LSA on Authority. */

export type Billing = "annual" | "monthly";

export type Plan = {
  id: "foundation" | "growth" | "authority";
  name: string;
  audience: string;
  /** Price per month for each billing choice. */
  price: Record<Billing, number>;
  tag: string;
  intro?: string;
  includesFrom?: string;
  features: string[];
  bestFor: string;
  cta: string;
  featured?: boolean;
};

export const PLANS: Plan[] = [
  {
    id: "foundation",
    name: "Foundation",
    audience: "For solo owners and new businesses building local visibility.",
    price: { annual: 197, monthly: 297 },
    tag: "Local visibility essentials",
    features: [
      "Google Business Profile audit and optimization",
      "Monthly profile maintenance",
      "7 Google Business Profile posts per month",
      "On-page SEO for up to 3 existing pages (up to 5 keywords)",
      "NAP audit and citation audit of up to 20 directories",
      "Review monitoring and response guidance",
      "Monthly performance summary",
    ],
    bestFor: "New and independent local businesses.",
    cta: "Get Started",
  },
  {
    id: "growth",
    name: "Growth",
    audience: "For businesses ready to generate more direct inquiries.",
    price: { annual: 750, monthly: 950 },
    tag: "SEO + Google Ads",
    includesFrom: "Everything in Foundation, plus:",
    features: [
      "Google Ads setup or restructuring",
      "1 Google Ads account, up to 2 campaigns",
      "Keyword and negative keyword management",
      "Up to 20 Google Business Profile posts per month",
      "Geotagged images",
      "Conversion tracking",
      "Weekly campaign checks",
      "Local SEO for up to 2 priority Google Business Profile locations",
      "Optimization of up to 10 existing pages per month",
      "Review workflow setup and monitoring",
      "Monthly lead and performance report",
      "Monthly strategy review",
    ],
    bestFor: "Established businesses that want more than referrals.",
    cta: "Choose Growth",
    featured: true,
  },
  {
    id: "authority",
    name: "Authority",
    audience: "For multi-location teams and established firms.",
    price: { annual: 1250, monthly: 1500 },
    tag: "Full-funnel growth",
    intro:
      "Build a more complete acquisition system spanning search, reputation, social content and website conversion.",
    includesFrom: "Everything in Growth, plus:",
    features: [
      "Local SEO planning for up to 3 priority Google Business Profile locations",
      "Local Services Ads (LSA) account setup",
      "Optimization of up to 15 existing pages per month",
      "Management of up to 2 social platforms",
      "15 social posts per month",
      "Editing of up to 4 short-form videos per month (your footage)",
      "Meta Ads or LSA management for up to 2 campaigns, where appropriate",
      "Monthly website conversion audit",
      "Monthly lead-source review",
      "Monthly strategy meeting and action plan",
    ],
    bestFor: "Growing companies that want a coordinated marketing operation.",
    cta: "Build My Authority Plan",
  },
];

/* Who each plan is for, in the page's own words (owner, 5 Nov 2026: "the
   pages should get there own names like home inspector will get home
   inspector"). The owner's sheet reads "For solo home inspectors building
   local visibility" / "For inspectors ready to generate more direct
   inquiries" / "For multi-inspector teams and established firms"; every
   niche gets the same three lines with its own nouns. Pages without a
   niche keep the generic lines in PLANS. */

/** [starter, growing, established] noun phrases for one niche. */
export type PlanWho = [string, string, string];

const WHO: [RegExp, PlanWho][] = [
  [
    /home-inspector/,
    [
      "solo home inspectors",
      "inspectors",
      "multi-inspector teams and established firms",
    ],
  ],
  [
    /fence/,
    [
      "solo fence installers",
      "fence companies",
      "multi-crew fence companies and established firms",
    ],
  ],
  [
    /roof/,
    [
      "solo roofers",
      "roofing companies",
      "multi-crew roofing companies and established firms",
    ],
  ],
  [
    /hvac/,
    [
      "solo HVAC contractors",
      "HVAC companies",
      "multi-truck HVAC companies and established firms",
    ],
  ],
  [
    /plumb/,
    [
      "solo plumbers",
      "plumbing companies",
      "multi-van plumbing companies and established firms",
    ],
  ],
  [
    /electric/,
    [
      "solo electricians",
      "electrical contractors",
      "multi-crew electrical contractors and established firms",
    ],
  ],
  [
    /landscap/,
    [
      "solo landscapers",
      "landscaping companies",
      "multi-crew landscaping companies and established firms",
    ],
  ],
  [
    /dental|dentist/,
    [
      "solo dentists",
      "dental practices",
      "multi-location dental groups and established practices",
    ],
  ],
  [
    /law-firm/,
    [
      "solo attorneys",
      "law firms",
      "multi-office law firms and established practices",
    ],
  ],
  [
    /real-estate/,
    [
      "solo real estate agents",
      "agents and teams",
      "multi-agent brokerages and established teams",
    ],
  ],
  [
    /auto-repair/,
    [
      "independent auto repair shops",
      "auto repair shops",
      "multi-location shops and established garages",
    ],
  ],
  [
    /chiropract/,
    [
      "solo chiropractors",
      "chiropractic clinics",
      "multi-location chiropractic groups and established clinics",
    ],
  ],
  [
    /garage-door/,
    [
      "solo garage door techs",
      "garage door companies",
      "multi-truck garage door companies and established firms",
    ],
  ],
  [
    /moving/,
    [
      "new moving companies",
      "moving companies",
      "multi-truck movers and established firms",
    ],
  ],
  [
    /painting/,
    [
      "solo painters",
      "painting contractors",
      "multi-crew painting companies and established firms",
    ],
  ],
  [
    /appliance/,
    [
      "solo appliance repair techs",
      "appliance repair companies",
      "multi-tech repair companies and established firms",
    ],
  ],
  [
    /bathroom/,
    [
      "new bathroom remodelers",
      "remodeling companies",
      "multi-crew remodeling firms and established builders",
    ],
  ],
  [
    /kitchen/,
    [
      "new kitchen remodelers",
      "remodeling companies",
      "multi-crew remodeling firms and established builders",
    ],
  ],
  [
    /cannabis/,
    [
      "single-store dispensaries",
      "dispensaries",
      "multi-location dispensary groups and established brands",
    ],
  ],
  [
    /flooring/,
    [
      "solo flooring installers",
      "flooring companies",
      "multi-crew flooring companies and established firms",
    ],
  ],
  [
    /general-contractor/,
    [
      "solo general contractors",
      "contracting companies",
      "multi-crew builders and established firms",
    ],
  ],
  [
    /gutter/,
    [
      "solo gutter installers",
      "gutter companies",
      "multi-crew gutter companies and established firms",
    ],
  ],
  [
    /non-profit/,
    [
      "small nonprofits",
      "nonprofits",
      "multi-program nonprofits and established organizations",
    ],
  ],
  [
    /pediatric/,
    [
      "solo pediatricians",
      "pediatric practices",
      "multi-provider pediatric groups and established practices",
    ],
  ],
  [
    /pest/,
    [
      "solo pest control operators",
      "pest control companies",
      "multi-route pest control companies and established firms",
    ],
  ],
  [
    /pool/,
    [
      "solo pool technicians",
      "pool service companies",
      "multi-route pool companies and established firms",
    ],
  ],
  [
    /septic/,
    [
      "solo septic pumpers",
      "septic companies",
      "multi-truck septic companies and established firms",
    ],
  ],
  [
    /solar/,
    [
      "new solar installers",
      "solar companies",
      "multi-crew solar companies and established firms",
    ],
  ],
  [
    /tow/,
    [
      "solo tow operators",
      "towing companies",
      "multi-truck towing fleets and established firms",
    ],
  ],
  [
    /tree/,
    [
      "solo arborists",
      "tree service companies",
      "multi-crew tree companies and established firms",
    ],
  ],
  [
    /window/,
    [
      "solo window and door installers",
      "window and door companies",
      "multi-crew installers and established firms",
    ],
  ],
  [
    /cleaning/,
    [
      "solo cleaners",
      "cleaning companies",
      "multi-team cleaning companies and established firms",
    ],
  ],
  [
    /travel/,
    [
      "new tour operators",
      "travel businesses",
      "multi-location travel brands and established firms",
    ],
  ],
  [
    /home-services/,
    [
      "solo home service pros",
      "home service companies",
      "multi-crew home service companies and established firms",
    ],
  ],
];

/** The niche nouns for a page path, if the page belongs to a niche. */
export function planWhoFor(path: string): PlanWho | undefined {
  return WHO.find(([re]) => re.test(path))?.[1];
}

/** A plan's audience line, in the page's own words when it has a niche. */
export function planAudience(plan: Plan, who?: PlanWho): string {
  if (!who) return plan.audience;
  if (plan.id === "foundation")
    return `For ${who[0]} building local visibility.`;
  if (plan.id === "growth")
    return `For ${who[1]} ready to generate more direct inquiries.`;
  return `For ${who[2]}.`;
}

/** Comparison cell: true = included, false = not included, text = detail. */
export type Cell = boolean | string;

export const COMPARE: { label: string; cells: [Cell, Cell, Cell] }[] = [
  { label: "Google Business Profile optimization", cells: [true, true, true] },
  {
    label: "Google Business Profile posts",
    cells: ["7 / month", "Up to 20 / month", "Up to 20 / month"],
  },
  {
    label: "On-page SEO (existing pages)",
    cells: ["Up to 3", "Up to 10 / month", "Up to 15 / month"],
  },
  {
    label: "Citation audit",
    cells: [
      "Up to 20 directories",
      "Up to 20 directories",
      "Up to 20 directories",
    ],
  },
  {
    label: "Review management",
    cells: [
      "Monitoring + guidance",
      "Workflow + monitoring",
      "Workflow + monitoring",
    ],
  },
  {
    label: "Google Ads management",
    cells: [false, "1 account, 2 campaigns", "1 account, 2 campaigns"],
  },
  { label: "Geotagged images", cells: [false, true, true] },
  { label: "Conversion tracking", cells: [false, true, true] },
  {
    label: "Priority Business Profile locations",
    cells: [false, "Up to 2", "Up to 3"],
  },
  { label: "Local Services Ads setup", cells: [false, false, true] },
  {
    label: "Social media management",
    cells: [false, false, "2 platforms, 15 posts / month"],
  },
  {
    label: "Short-form video editing",
    cells: [false, false, "Up to 4 / month"],
  },
  {
    label: "Meta Ads or LSA management",
    cells: [false, false, "Up to 2 campaigns"],
  },
  { label: "Website conversion audit", cells: [false, false, "Monthly"] },
  {
    label: "Reporting",
    cells: [
      "Monthly summary",
      "Monthly lead report",
      "Monthly + lead-source review",
    ],
  },
  { label: "Strategy review", cells: [false, "Monthly", "Monthly meeting"] },
];

export const ADD_ONS: {
  name: string;
  price: string;
  unit: string;
  icon: "site" | "page" | "pin" | "ads" | "social" | "tech";
}[] = [
  {
    name: "New Business Website",
    price: "From $950",
    unit: "One-time",
    icon: "site",
  },
  {
    name: "Additional Service-Area Landing Page",
    price: "$150 – $250",
    unit: "Per page",
    icon: "page",
  },
  {
    name: "Additional Location SEO Campaign",
    price: "From $200",
    unit: "Per month",
    icon: "pin",
  },
  {
    name: "Additional Google Ads Campaign Management",
    price: "$150 – $300",
    unit: "Per month",
    icon: "ads",
  },
  {
    name: "Additional Social Media Content Package",
    price: "From $200",
    unit: "Per month",
    icon: "social",
  },
  {
    name: "Technical SEO or Website Migration",
    price: "Custom quote",
    unit: "Based on scope",
    icon: "tech",
  },
];

export const usd = (n: number) => `$${n.toLocaleString("en-US")}`;
