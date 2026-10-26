import { PALETTES } from "@/components/rd/industry/palettes";
import type { LocationContent } from "@/components/rd/industry/types";

/* COLORADO HOME INSPECTOR MARKETING — redesign draft content (24 Oct 2026).
   Rank safety: Semrush resource_organic (US, 24 Oct, first row only before
   API units ran out) shows the live URL ranking for "marketing home
   inspections" (pos 75, vol 50). The exact phrase is the growth H2. The
   live title's core term "Home Inspector Marketing in Colorado" stays in
   the title, and every live keywords-meta phrase sits in the title, H1,
   an H2/H3 or an FAQ question. Head-term volumes (Semrush US, 18 Sep
   2026): home inspector marketing 210 · seo for home inspectors 170.
   Web research (24 Oct): Colorado has no state license for general home
   inspectors; radon measurement and mitigation have needed a state
   license (DORA) since July 2022; top Denver and Front Range results cover
   radon, sewer scopes, expansive soils, hail-worn roofs and choosing an
   inspector without a license to check. Fresh wording only. */

export const CONTENT: LocationContent = {
  draftSlug: "colorado-2",
  liveUrl: "/services/home-inspector-marketing/colorado",
  parent: {
    href: "/services/home-inspector-marketing",
    label: "Home Inspector Marketing",
    niche: "Home Inspector",
  },
  place: "Colorado",
  meta: {
    title: "Home Inspector Marketing in Colorado | Maps & More Bookings",
    description:
      "Colorado home inspector marketing for Denver, Colorado Springs, Fort Collins and Boulder: Map Pack rankings, radon and sewer scope pages, ads and reviews.",
    keywords: [
      "home inspector marketing colorado",
      "home inspector seo colorado",
      "home inspector colorado springs",
      "home inspector denver co",
      "home inspection fort collins",
      "home inspection colorado springs cost",
      "home inspector colorado requirements",
      "home inspection boulder",
      "home inspector marketing",
      "seo for home inspectors",
      "home inspector lead generation colorado",
      "ai seo for home inspectors",
      "marketing home inspections",
    ],
  },
  palette: PALETTES.amberIndigo,
  hero: {
    h1: "Colorado Home Inspector Marketing Agency for Front Range Calls",
    h1NoWrap: "Front Range",
    lead: [
      "Colorado doesn't license home inspectors, so buyers judge you by reviews, credentials and how easily they can book. Our ",
      {
        href: "/services/home-inspector-marketing",
        label: "marketing for home inspectors",
      },
      " makes that case on Google across Denver, Colorado Springs and Northern Colorado, with Map Pack rankings, radon and sewer scope pages and reviews buyers trust.",
    ],
    cta: "Get My Colorado Inspector Audit",
    tiles: {
      wide: {
        icon: "pin",
        title: "Top 3 along the Front Range",
        sub: "Map spots from Fort Collins to Pueblo",
        chips: [
          "Denver",
          "Colorado Springs",
          "Fort Collins",
          "Boulder",
          "+ your town",
        ],
      },
      left: {
        icon: "inspect",
        title: "More radon and sewer add-ons",
        sub: "Pages for the tests Colorado buyers expect",
      },
      right: {
        icon: "award",
        title: "Trust without a state license",
        sub: "Credentials and reviews shown everywhere",
      },
      bottom: {
        title: "Bookings beyond your agent list",
        sub: "Buyers who search and choose you themselves",
      },
    },
  },
  services: {
    title: "SEO for Home Inspectors on the Front Range and Western Slope",
    lead: "Colorado inspectors get Maps, rankings and ads from one partner.",
    cta: "Audit My Colorado Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Profile Work for Colorado Inspectors",
        desc: "Categories, service towns, radon and sewer scope services, certifications and weekly job photos, tuned to lift you on the map.",
        points: [
          "Radon and sewer services listed",
          "Certifications shown",
          "Photos from real jobs",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Sharpen my Google listing",
          },
        ],
      },
      {
        icon: "search",
        title: "Home Inspector SEO in Colorado, From Radon to Soils",
        desc: "City pages plus answer pages on radon, sewer lines, expansive soils and hail-worn roofs, the topics Colorado buyers research first.",
        points: [
          "City and suburb pages",
          "Radon and soil pages",
          "Citations aligned",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "Local SEO for home service businesses",
          },
        ],
      },
      {
        icon: "target",
        title: "Google Ads and LSA for Colorado Home Inspections",
        desc: "Paid search and Local Services Ads reach buyers inside their inspection window, fenced to the Front Range counties you actually cover.",
        points: [
          "Inspection-window keywords",
          "Google Guaranteed badge",
          "County targeting",
        ],
        links: [
          { href: "/services/google-ads", label: "Colorado ad campaigns" },
        ],
      },
      {
        icon: "monitor",
        title: "Colorado Inspection Websites With Instant Booking",
        desc: "Phone-first pages with live slots, radon and sewer add-ons at checkout, your certifications and a sample report agents can share.",
        points: [
          "Live booking slots",
          "Add-on choices",
          "Credentials up front",
        ],
        links: [
          {
            href: "/services/web-design",
            label: "Websites for inspection firms",
          },
        ],
      },
      {
        icon: "star",
        title: "Colorado Reviews and Agent Referral Tools",
        desc: "Review requests go out as reports are delivered, and Front Range agents get a booking page plus a report preview to forward.",
        points: [
          "Requests on delivery",
          "Agent booking page",
          "Owner replies handled",
        ],
        links: [{ href: "/services", label: "See everything we do" }],
      },
      {
        icon: "shield",
        title: "Help for Suspended Colorado Google Listings",
        desc: "Listing suspended, or a postcard code that never came? We locate the problem, sort it out and see the appeal through, drawing on 900+ reinstated profiles.",
        points: [
          "Problem located",
          "Verification walkthrough",
          "Appeal managed for you",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Reinstate my Google listing",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Fix a stuck verification",
          },
        ],
      },
    ],
  },
  growth: {
    title: "Marketing Home Inspections Across the Front Range and Beyond",
    lead: "How we bring Colorado buyers to your calendar, one channel at a time.",
    rows: [
      {
        title: "Take a Top 3 Spot for “Home Inspector Colorado Springs”",
        body: [
          "Military families and new arrivals in Colorado Springs rarely have an inspector in mind, so they compare the first three on the map. We load your profile with radon and sewer scope services, add pages for Monument, Fountain and Briargate, and grow your review count.",
        ],
        points: [
          "Radon and sewer services",
          "El Paso County town pages",
          "Real job photos",
          "Rank grid reports",
        ],
        cta: "Check My Springs Ranking",
        ui: {
          kind: "maps",
          query: "home inspector colorado springs",
          city: "Colorado Springs",
          category: "Home inspector · Sewer scope & radon",
        },
      },
      {
        title: "AI SEO for Home Inspectors in Denver, Boulder and Fort Collins",
        body: [
          "Buyers moving to Denver often ask ChatGPT whether radon testing is needed or who scopes sewer lines in older neighborhoods. Our ",
          { href: "/services/ai-seo-services", label: "AI SEO program" },
          " posts plain answers on your site and keeps every listing consistent, so AI tools mention you by name.",
        ],
        points: [
          "Answer pages on radon",
          "Consistent listings",
          "Credentials in schema",
          "Reviews mentioning towns",
        ],
        cta: "Audit My AI Mentions",
        ui: {
          kind: "ai",
          query: "do i need a radon test with a home inspection in boulder",
          intro: "For a Boulder home inspection with a radon test,",
          bullets: [
            "Licensed radon measurement",
            "Sewer scope on request",
            "Report the same day",
          ],
        },
      },
      {
        title: "Reviews That Replace a State License in Buyers' Eyes",
        body: [
          "With no license number to check, Colorado buyers and agents read reviews closely. As each report goes out, the client receives a one-tap review request, and our team drafts replies that show how you handle questions.",
        ],
        points: [
          "One-tap review requests",
          "Replies drafted for you",
          "Low-star alerts",
          "Reviews on your website",
        ],
        cta: "Build My Colorado Reviews",
        ui: {
          kind: "reviews",
          sms: "Hi Marcus, it's Your Company. Your Littleton inspection report just landed. Would a quick Google review be OK?",
          reviewer: "Marcus T.",
          review:
            "Explained the radon results clearly, scoped the sewer line and pointed out hail wear on the roof. Exactly what we needed before closing.",
          reply: "Thanks, Marcus! Good luck with the closing in Littleton.",
        },
      },
    ],
  },
  regions: {
    title: "Colorado Regions, From the Front Range to the Western Slope",
    lead: "Metro suburbs, mountain towns and the Western Slope each search differently, so pages and service areas match each one.",
    items: [
      {
        name: "Denver Metro",
        cities: "Denver · Aurora · Lakewood · Arvada",
        focus:
          "Sewer camera and older-home pages for established neighborhoods",
      },
      {
        name: "South Metro & Douglas County",
        cities: "Littleton · Highlands Ranch · Castle Rock · Parker",
        focus: "New-build and radon pages for growing suburbs",
      },
      {
        name: "Boulder County",
        cities: "Boulder · Longmont · Louisville · Lafayette",
        focus: "Radon-focused pages and well-reviewed profiles",
      },
      {
        name: "Northern Colorado",
        cities: "Fort Collins · Loveland · Greeley · Windsor",
        focus: "Expansive-soil and new-construction pages",
      },
      {
        name: "Pikes Peak Region",
        cities: "Colorado Springs · Monument · Fountain · Pueblo",
        focus: "Military-relocation booking pages and map work",
      },
      {
        name: "Mountains & Western Slope",
        cities: "Grand Junction · Durango · Summit County",
        focus: "Mountain-home pages covering wells, septic and snow",
      },
    ],
    other:
      "Working in Steamboat, Salida or Sterling? We'll build pages for those towns too.",
  },
  reviews: {
    title: "Colorado Owners: Our 5.0 Google Rating, in Their Words",
    lead: "Unedited reviews left on Google by the trade owners we work with.",
  },
  pricing: {
    title: "Plans and Pricing for Colorado Inspectors",
    lead: [
      "No contracts, and your ad spend is passed to Google at a 0% markup. Need something different? ",
      { href: "/services", label: "View our full service menu" },
      ".",
    ],
    compareTitle: "Colorado Plan Comparison",
    compareLead: "One suburb, the Front Range or all of Colorado.",
    addOnsTitle: "Add-Ons for Summer Moving Season",
    addOnsLead: "More town pages or ads when Front Range listings peak.",
    customTitle: "Inspectors in Denver and the Springs?",
    customText: "Send every office and route for one tailored quote.",
  },
  faq: {
    title: "Answers for Colorado Home Inspectors",
    lead: "Requirements, radon, rankings, pricing pages and leads. Questions left? Give us a call.",
    items: [
      {
        q: "What are the home inspector Colorado requirements, and how do I show trust without a license?",
        a: "Colorado has no state license or exam for general home inspectors, though radon measurement has required a state license since 2022. Without a license number, trust comes from certifications, insurance, sample reports and reviews, so we display all four on your profile, website and ads.",
      },
      {
        q: "What's the fastest way to rank for “home inspector Denver CO” in a crowded metro?",
        a: "Start with the suburbs near your base, such as Lakewood, Arvada or Englewood, where competition is lighter. Strong pages, local reviews and job photos win those maps first, and that local strength then lifts your main Denver page in organic results.",
      },
      {
        q: "How should my site answer “home inspection Colorado Springs cost” searches?",
        a: "With a page that explains what moves your fee, such as size, age, radon or sewer add-ons and travel to Monument or Pueblo, plus an instant quote form. Buyers asking about cost are ready to book, and you decide whether figures appear.",
      },
      {
        q: "Is it worth building pages for “home inspection Fort Collins” and “home inspection Boulder”?",
        a: "Yes. Northern Colorado and Boulder County buyers search by town, and radon and soil questions run high there. A page for each city with local photos and reviews usually ranks faster than one broad Front Range page.",
      },
      {
        q: "Should radon and sewer scope services get their own pages?",
        a: "Yes. Colorado buyers search for both directly. A radon page should note that your tester holds the state radon license, and a sewer scope page with short camera clips helps buyers of older Denver homes see why it matters.",
      },
      {
        q: "Which channels drive home inspector lead generation in Colorado?",
        a: "On top of your agent referrals, we build three direct channels: Google Maps rankings, city and add-on pages that rank organically, and ads aimed at buyers in their inspection window. We tie each inspection to the channel that produced it and report on it monthly.",
      },
    ],
  },
  audit: {
    title: "Free Colorado Home Inspector Marketing Audit",
    lead: [
      "We run your buyers' searches in each Colorado town you cover, grade your listing, website and reviews, and name the inspectors currently winning those calls.",
    ],
    points: [
      "Each Front Range town you serve, reviewed",
      "Radon and sewer scope searches run",
      "Three plans: $297, $750 or $1,500 monthly",
    ],
    form: {
      formType: "home-inspector-marketing-colorado",
      badge: "Free Colorado audit",
      title: "Get a Colorado Inspector Audit",
      subtitle: "Free to request, with no commitment.",
      submitText: "Send My Colorado Audit",
      messageLabel: "Colorado towns and services you offer",
      messagePlaceholder: "e.g. Littleton and Parker, radon and sewer scopes",
    },
  },
  banner: {
    title: "Fill Your Front Range Calendar With Direct Bookings",
    lead: "Your free audit shows your map spot in every Colorado town you serve.",
    icons: ["inspect", "award"],
  },
};
