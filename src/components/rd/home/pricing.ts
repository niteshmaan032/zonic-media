/* Plans, comparison rows and add-ons for the /home2 pricing section
   (owner, 23 Oct 2026). Plan prices and inclusions are the owner's list;
   the audience lines are written for any business (the owner's reference
   was a home-inspector page). Add-on prices come from the owner's
   reference image. Growth has one price (no separate monthly rate given). */

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
      "4 Google Business Profile posts per month",
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
    price: { annual: 750, monthly: 750 },
    tag: "SEO + Google Ads",
    includesFrom: "Everything in Foundation, plus:",
    features: [
      "Google Search Ads setup or restructuring",
      "1 Google Ads account, up to 2 Search campaigns",
      "Keyword and negative keyword management",
      "Geo-targeting",
      "Conversion tracking",
      "Weekly campaign checks",
      "Local SEO for up to 3 priority Google Business Profile locations",
      "Optimization of up to 10 existing pages per month",
      "Review workflow setup and monitoring",
      "Monthly lead and performance report",
      "Quarterly strategy review",
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
    intro: "A complete acquisition system across search, reputation, social content and website conversion.",
    includesFrom: "Everything in Growth, plus:",
    features: [
      "Local SEO planning for up to 5 priority Google Business Profile locations",
      "Local Services Ads account setup",
      "Optimization of up to 8 existing pages per month",
      "Management of up to 2 social platforms",
      "8 social posts per month",
      "Editing of up to 4 short-form videos per month (your footage)",
      "Meta Ads management for up to 2 campaigns, where appropriate",
      "Quarterly website conversion audit",
      "Service-line expansion planning",
      "Monthly lead-source review",
      "Monthly strategy meeting and action plan",
    ],
    bestFor: "Growing companies that want a coordinated marketing operation.",
    cta: "Build My Authority Plan",
  },
];

/** Comparison cell: true = included, false = not included, text = detail. */
export type Cell = boolean | string;

export const COMPARE: { label: string; cells: [Cell, Cell, Cell] }[] = [
  { label: "Google Business Profile optimization", cells: [true, true, true] },
  { label: "Google Business Profile posts", cells: ["4 / month", "4 / month", "4 / month"] },
  { label: "On-page SEO (existing pages)", cells: ["Up to 3", "Up to 10 / month", "Up to 8 / month"] },
  { label: "Citation audit", cells: ["Up to 20 directories", "Up to 20 directories", "Up to 20 directories"] },
  { label: "Review management", cells: ["Monitoring + guidance", "Workflow + monitoring", "Workflow + monitoring"] },
  { label: "Google Search Ads management", cells: [false, "1 account, 2 campaigns", "1 account, 2 campaigns"] },
  { label: "Conversion tracking", cells: [false, true, true] },
  { label: "Priority Business Profile locations", cells: [false, "Up to 3", "Up to 5"] },
  { label: "Local Services Ads setup", cells: [false, false, true] },
  { label: "Social media management", cells: [false, false, "2 platforms, 8 posts / month"] },
  { label: "Short-form video editing", cells: [false, false, "Up to 4 / month"] },
  { label: "Meta Ads management", cells: [false, false, "Up to 2 campaigns"] },
  { label: "Website conversion audit", cells: [false, false, "Quarterly"] },
  { label: "Reporting", cells: ["Monthly summary", "Monthly lead report", "Monthly + lead-source review"] },
  { label: "Strategy review", cells: [false, "Quarterly", "Monthly meeting"] },
];

export const ADD_ONS: { name: string; price: string; unit: string; icon: "site" | "page" | "pin" | "ads" | "social" | "tech" }[] = [
  { name: "New Business Website", price: "From $1,000", unit: "One-time", icon: "site" },
  { name: "Additional Service-Area Landing Page", price: "$150 – $250", unit: "Per page", icon: "page" },
  { name: "Additional Location SEO Campaign", price: "From $200", unit: "Per month", icon: "pin" },
  { name: "Additional Google Ads Campaign Management", price: "$150 – $300", unit: "Per month", icon: "ads" },
  { name: "Additional Social Media Content Package", price: "From $200", unit: "Per month", icon: "social" },
  { name: "Technical SEO or Website Migration", price: "Custom quote", unit: "Based on scope", icon: "tech" },
];

export const usd = (n: number) => `$${n.toLocaleString("en-US")}`;
