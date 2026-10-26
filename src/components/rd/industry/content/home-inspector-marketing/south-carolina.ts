import { PALETTES } from "@/components/rd/industry/palettes";
import type { LocationContent } from "@/components/rd/industry/types";

/* SOUTH CAROLINA HOME INSPECTOR MARKETING — redesign draft content
   (24 Oct 2026).
   Rank safety: Semrush returned no_api_units on 24 Oct, so resource_organic
   and phrase_these could not run; keywords come from web research. The
   live title's core term "Home Inspector Marketing in South Carolina" is
   kept in the title, and every phrase in the live keywords meta sits in
   the title, H1, an H2/H3 or an FAQ question.
   Web research (24 Oct): home inspectors are licensed by the SC
   Residential Builders Commission at LLR; CL-100 wood infestation reports
   are issued by licensed pest control companies; Charleston results list
   pre-listing, new-construction and 11-month warranty inspections, mold,
   pool and wind/four-point work; buyers relocating from other states book
   remotely. Fresh wording only. */

export const CONTENT: LocationContent = {
  draftSlug: "south-carolina-2",
  liveUrl: "/services/home-inspector-marketing/south-carolina",
  parent: {
    href: "/services/home-inspector-marketing",
    label: "Home Inspector Marketing",
    niche: "Home Inspector",
  },
  place: "South Carolina",
  meta: {
    title: "Home Inspector Marketing in South Carolina | SEO, Maps & Leads",
    description:
      "South Carolina home inspector marketing for Charleston, Greenville, Columbia and Myrtle Beach: Google Maps rankings, home inspector SEO, ads and agent referrals.",
    keywords: [
      "home inspector marketing south carolina",
      "home inspector seo south carolina",
      "home inspector charleston sc",
      "best home inspector charleston sc",
      "home inspectors columbia south carolina",
      "home inspector greenville sc",
      "home inspection companies south carolina",
      "home inspection cost south carolina",
      "home inspector marketing",
      "seo for home inspectors",
      "home inspector lead generation south carolina",
      "ai seo for home inspectors",
    ],
  },
  palette: PALETTES.blueOrange,
  hero: {
    h1: "South Carolina Home Inspector Marketing Agency for Busy Calendars",
    h1NoWrap: "Busy Calendars",
    lead: [
      "Relocating buyers and Charleston agents both size you up on Google before anyone books. With our ",
      {
        href: "/services/home-inspector-marketing",
        label: "home inspector marketing",
      },
      ", your company climbs the Map Pack from Greenville to Myrtle Beach, reviews keep arriving and remote buyers book on your site in minutes.",
    ],
    cta: "Get My Free SC Inspector Audit",
    tiles: {
      wide: {
        icon: "pin",
        title: "Top 3 in the Map Pack",
        sub: "Lowcountry, Midlands and Upstate, one town at a time",
        chips: [
          "Charleston",
          "Greenville",
          "Columbia",
          "Myrtle Beach",
          "+ your town",
        ],
      },
      left: {
        icon: "users",
        title: "Referrals agents feel good about",
        sub: "Reviews and reports agents are glad to forward",
      },
      right: {
        icon: "home",
        title: "Relocation bookings",
        sub: "Out-of-state buyers choose you before they arrive",
      },
      bottom: {
        title: "A fuller inspection calendar",
        sub: "Pre-listing and warranty work fills the quiet weeks",
      },
    },
  },
  services: {
    title: "Marketing for Home Inspection\nSouth Carolina Buyers Trust",
    lead: "One crew markets your inspections to South Carolina buyers statewide.",
    cta: "Audit My SC Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Business Profile Built for SC Inspectors",
        desc: "Categories, service areas, add-on services and your Residential Builders Commission license number, plus weekly photos that push you up the map.",
        points: [
          "License number displayed",
          "Town-level service areas",
          "Weekly photo posts",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Optimize my inspection profile",
          },
        ],
      },
      {
        icon: "search",
        title: "Home Inspector SEO: South Carolina Towns and Add-Ons",
        desc: "Town pages for every place you inspect, plus mold, pool, pre-listing and 11-month warranty inspection pages, worded the way buyers type them.",
        points: [
          "One page per town",
          "Add-on service pages",
          "Crawlspace answer pages",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "Home service local search",
          },
        ],
      },
      {
        icon: "target",
        title: "Regional Search Ads and Local Services Ads",
        desc: "Campaigns aimed at buyers already under contract, with LSA included, split by region so Upstate and Grand Strand budgets are tuned apart.",
        points: [
          "Campaigns per region",
          "Local Services Ads setup",
          "Career searches blocked",
        ],
        links: [
          { href: "/services/google-ads", label: "Google Ads management" },
        ],
      },
      {
        icon: "monitor",
        title: "Inspection Websites That Book Remote Buyers",
        desc: "A fast site with online scheduling, sample reports that open on a phone and a clear list of every package you sell.",
        points: [
          "Online scheduling",
          "Sample report page",
          "Packages listed clearly",
        ],
        links: [{ href: "/services/web-design", label: "Website design" }],
      },
      {
        icon: "star",
        title: "Reviews and Agent Referral Visibility",
        desc: "Review requests go out as each report lands, and an agent page shows your turnaround, sample reports and the towns you serve.",
        points: [
          "Review texts after reports",
          "Agent resource page",
          "Replies in your voice",
        ],
        links: [
          {
            href: "/google-maps-business-ranking-tool-online",
            label: "Check my map rank",
          },
        ],
      },
      {
        icon: "shield",
        title: "Suspended or Unverified Inspection Profiles",
        desc: "Google pulled your listing, or verification never finished? We locate the trigger, correct the profile and write the appeal, drawing on 900+ profiles reinstated.",
        points: [
          "Root issue located",
          "Video check prepared",
          "Appeal written for you",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Restore my SC listing",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Verification support",
          },
        ],
      },
    ],
  },
  growth: {
    title: "How We Grow South Carolina Inspection Bookings",
    lead: "Three places buyers and agents find you: the map, AI answers and a site that books on the spot.",
    rows: [
      {
        title: "Rank When Buyers Search “Best Home Inspector Charleston SC”",
        body: [
          "Most Charleston buyers check the map first and call one of the top three names. We build out your profile, Mount Pleasant and Summerville pages and a stream of new reviews, so your pin holds a top spot when a contract is signed.",
        ],
        points: [
          "Profile built to convert",
          "Pages across the metro",
          "License shown on profile",
          "Map rank tracked weekly",
        ],
        cta: "See My Charleston Ranking",
        ui: {
          kind: "maps",
          query: "best home inspector charleston sc",
          city: "Charleston",
          category: "Home inspector · SC licensed",
        },
      },
      {
        title: "AI SEO for Home Inspectors From Greenville to Rock Hill",
        body: [
          "Buyers moving from Ohio or New Jersey often ask ChatGPT or Google's AI Overviews who to hire before they ever see the house. Our ",
          {
            href: "/services/ai-seo-services",
            label: "AI search optimization",
          },
          " keeps your site, reviews and listings consistent, so those answers name your company for Upstate and Midlands towns.",
        ],
        points: [
          "Pages that answer buyer questions",
          "Matching name, address and phone",
          "Reviews that name the town",
          "Schema markup on each page",
        ],
        cta: "Check My AI Answers",
        ui: {
          kind: "ai",
          query: "who is a good home inspector in greenville sc",
          intro: "For a home inspection in Greenville, SC,",
          bullets: [
            "Licensed in South Carolina",
            "Covers Greer and Simpsonville",
            "Reports delivered next day",
          ],
        },
      },
      {
        title: "A Website Relocating Buyers Can Book From Another State",
        body: [
          "A buyer closing on a Bluffton new build may live eight states away. Your site should let them pick a package, add services and book in one visit, with sample reports and an agent page that answer questions without a phone call.",
        ],
        points: [
          "Book and pay online",
          "Add-ons at checkout",
          "Mobile sample reports",
          "Agent scheduling page",
        ],
        cta: "Plan My Booking Site",
        ui: {
          kind: "website",
          url: "yourcompany.com/charleston",
          headline: "Charleston home inspections, booked online",
          services: [
            "Buyer inspection",
            "11-month warranty",
            "Pre-listing inspection",
            "Mold testing",
          ],
        },
      },
    ],
  },
  regions: {
    title: "South Carolina Regions Where We Grow Inspectors",
    lead: "Coastal retirees, Upstate transplants and Charlotte commuters all look for inspectors in their own way, so every region has dedicated pages and ads.",
    items: [
      {
        name: "Charleston & the Lowcountry",
        cities: "Charleston · Mount Pleasant · Summerville · James Island",
        focus: "Older-home and coastal pages for relocating buyers",
      },
      {
        name: "The Upstate",
        cities: "Greenville · Spartanburg · Greer · Simpsonville",
        focus: "Warranty inspections in fast-growing subdivisions",
      },
      {
        name: "The Midlands",
        cities: "Columbia · Lexington · Irmo · Blythewood",
        focus: "Military moves near Fort Jackson and campus buyers",
      },
      {
        name: "Grand Strand",
        cities: "Myrtle Beach · Conway · North Myrtle Beach · Surfside Beach",
        focus: "Second-home and retiree buyers booking from afar",
      },
      {
        name: "York County",
        cities: "Rock Hill · Fort Mill · Tega Cay · Lake Wylie",
        focus: "Charlotte-area buyers searching across the state line",
      },
      {
        name: "Hilton Head & Beaufort",
        cities: "Hilton Head · Bluffton · Beaufort · Okatie",
        focus: "Resort and gated community pages with remote booking",
      },
    ],
    other:
      "Inspecting in Florence, Aiken or Anderson? We cover those towns too.",
  },
  reviews: {
    title: "Why Owners Give Us a 5.0 on Google",
    lead: "Unedited reviews from inspection, trade and service businesses we market.",
  },
  pricing: {
    title: "Home Inspector Lead Generation: South Carolina Plans",
    lead: [
      "Cancel any month you like, and ad spend reaches Google with a 0% markup. Want the wider picture first? Browse ",
      { href: "/services", label: "everything Zonic Media offers" },
      ".",
    ],
    compareTitle: "Compare Plans for SC Inspectors",
    compareLead: "From one town to every region you drive to.",
    addOnsTitle: "Extras for Spring Closing Season",
    addOnsLead: "Add town pages or campaigns when contracts pile up.",
    customTitle: "Several inspectors across the state?",
    customText:
      "Send us your regions and how many inspectors you run, and we'll quote it.",
  },
  faq: {
    title: "Home Inspector Marketing: South Carolina Questions",
    lead: "Licensing, towns, pricing pages and agent referrals, answered. Our phone line is open if you'd rather talk.",
    items: [
      {
        q: "Which South Carolina board licenses home inspectors, and should my marketing show it?",
        a: "The South Carolina Residential Builders Commission, part of LLR, licenses home inspectors. Yes, show it. We place the license number in your Google profile, website footer and booking page, because out-of-state buyers often look for it before they choose an inspector.",
      },
      {
        q: "What helps me outrank bigger teams for “home inspector Greenville SC”?",
        a: "Start with a complete Google profile set to Greenville and the towns around it, then add a page per town and steady reviews that mention them. Larger teams often leave suburbs like Greer and Simpsonville thin, which gives a focused inspector room to win.",
      },
      {
        q: "Can a small team stand out among home inspectors Columbia, South Carolina buyers compare?",
        a: "Yes. Columbia buyers compare a handful of names on the map, so reviews, photos and fast replies decide who gets the call. We build Lexington and Irmo pages, list every service on your profile and track rank weekly, so a small team holds its own.",
      },
      {
        q: "Should my website show the home inspection cost South Carolina buyers compare?",
        a: "Yes. Buyers want to see what an inspection includes and what add-ons run before they call, and agents like sending a link that answers it. We build clear package pages using your own fees, so pricing questions stop slowing your bookings down.",
      },
      {
        q: "Can a home inspector advertise CL-100 wood infestation reports in South Carolina?",
        a: "Only with the right pest control license. CL-100 reports are issued by licensed pest control companies, so most inspectors partner with one. We word your pages to explain that partnership plainly, so buyers and agents know who handles the report and when.",
      },
      {
        q: "How do Charleston agents decide which inspectors to refer?",
        a: "Agents protect their deals, so they look for quick reports, clear writing and calm reviews. We give you a page made for agents with sample reports, booking links and turnaround times, and keep fresh Google reviews visible whenever an agent checks your name.",
      },
      {
        q: "How is South Carolina home inspector marketing priced?",
        a: "The entry plan is $297 a month, the middle plan $750 and the top plan $1,500, all without a contract. Any ad spend carries a 0% markup. A solo inspector in one town often starts on the first tier, while teams covering several regions need more pages and campaigns.",
      },
    ],
  },
  audit: {
    title: "Get a Free South Carolina Home Inspector Audit",
    lead: [
      "Our review covers your map rank in each SC town, plus your Google profile, ",
      { href: "/services/web-design", label: "website and booking flow" },
      " and reviews. Inspecting across state lines too? We also grow inspectors in ",
      {
        href: "/services/home-inspector-marketing/north-carolina",
        label: "North Carolina",
      },
      ", ",
      { href: "/services/home-inspector-marketing/georgia", label: "Georgia" },
      ", ",
      {
        href: "/services/home-inspector-marketing/tennessee",
        label: "Tennessee",
      },
      " and ",
      { href: "/services/home-inspector-marketing/florida", label: "Florida" },
      ".",
    ],
    points: [
      "Every SC town you cover, checked",
      "Buyer and agent searches tested",
      "No contract, entry plan $297/mo",
    ],
    form: {
      formType: "home-inspector-marketing-south-carolina",
      badge: "SC inspector audit",
      title: "Request My South Carolina Inspection Audit",
      subtitle: "No cost, no contract, no sales pressure.",
      submitText: "Send My SC Audit",
      messageLabel: "Your SC towns and inspection services",
      messagePlaceholder:
        "e.g. Summerville and Mount Pleasant, buyer and warranty inspections",
    },
  },
  banner: {
    title: "Be the First Inspector South Carolina Buyers Call",
    lead: "See where you rank town by town with a free audit.",
    icons: ["inspect", "home"],
  },
};
