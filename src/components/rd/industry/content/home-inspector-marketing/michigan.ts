import { PALETTES } from "@/components/rd/industry/palettes";
import type { LocationContent } from "@/components/rd/industry/types";

/* MICHIGAN HOME INSPECTOR MARKETING — redesign draft content (24 Oct 2026).
   Semrush returned no_api_units on 24 Oct, so keywords and angles come from
   web research. Rank safety: the live title's core term "Home Inspector
   Marketing in Michigan" opens the title, and every live keywords-meta
   phrase sits in the title, H1, an H2/H3 or an FAQ question. Verified facts
   used: Michigan has no state license or registration for home inspectors;
   septic time-of-transfer rules are local (e.g. Barry-Eaton District Health
   Department, Leelanau County); sewer scopes and radon are common add-ons
   in Metro Detroit. */

export const CONTENT: LocationContent = {
  draftSlug: "michigan-2",
  liveUrl: "/services/home-inspector-marketing/michigan",
  parent: {
    href: "/services/home-inspector-marketing",
    label: "Home Inspector Marketing",
    niche: "Home Inspector",
  },
  place: "Michigan",
  meta: {
    title: "Home Inspector Marketing in Michigan | Detroit & Grand Rapids",
    description:
      "Michigan home inspector marketing for Metro Detroit, Ann Arbor, Grand Rapids and Lansing: Google Maps rankings, city SEO, ads and reviews that prove credentials.",
    keywords: [
      "home inspector marketing michigan",
      "home inspector seo michigan",
      "home inspector metro detroit",
      "home inspector grand rapids",
      "home inspection ann arbor",
      "home inspection cost michigan",
      "certified home inspector michigan",
      "home inspector lansing mi",
      "home inspector marketing",
      "seo for home inspectors",
      "home inspector lead generation michigan",
      "ai seo for home inspectors",
    ],
  },
  palette: PALETTES.amberTeal,
  hero: {
    h1: "Michigan Home Inspector Marketing Agency for Fuller Schedules",
    h1NoWrap: "Fuller Schedules",
    lead: [
      "Michigan doesn't license home inspectors, so buyers lean on Google reviews, credentials and map rankings to choose one. As a ",
      {
        href: "/services/home-inspector-marketing",
        label: "home inspector marketing agency",
      },
      ", we make your company the clear pick in Metro Detroit, Ann Arbor, Grand Rapids and Lansing, from first search to booked inspection.",
    ],
    cta: "Get My Michigan Audit",
    tiles: {
      wide: {
        icon: "pin",
        title: "Top 3 in Michigan map results",
        sub: "From Wayne County to the Lakeshore and up north",
        chips: [
          "Detroit",
          "Grand Rapids",
          "Ann Arbor",
          "Lansing",
          "+ your city",
        ],
      },
      left: {
        icon: "award",
        title: "Credentials buyers see",
        sub: "Certifications and insurance shown where buyers compare",
      },
      right: {
        icon: "water",
        title: "More sewer scope bookings",
        sub: "Add-on pages for older Detroit-area sewer lines",
      },
      bottom: {
        title: "Booked ahead of the spring market",
        sub: "Ads and pages live before the snowmelt listings",
      },
    },
  },
  services: {
    title: "Our Marketing Services for Michigan Home Inspectors",
    lead: "Solo or fleet, Michigan inspectors keep every channel with one team.",
    cta: "Audit My Michigan Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Business Profile Work From Detroit to Traverse City",
        desc: "Categories, county service areas, add-on services and real inspection photos, tuned until your pin climbs in each Michigan market you work.",
        points: [
          "County service areas",
          "Add-ons as services",
          "Photos from real jobs",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Google Business Profile optimization",
          },
        ],
      },
      {
        icon: "search",
        title: "Home Inspector SEO, Michigan Cities and Add-On Tests",
        desc: "City pages for every market you work, plus sewer scope, radon, well and septic pages, written for the way Michigan buyers search.",
        points: [
          "City pages that rank",
          "Sewer scope and radon",
          "Well and septic pages",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "Home service SEO",
          },
        ],
      },
      {
        icon: "target",
        title: "Michigan Inspector Google Ads and Local Services Ads",
        desc: "Paid search and Local Services campaigns that reach Michigan buyers mid-contract, limited to your counties and screened for training-course clicks.",
        points: [
          "Under-contract searches",
          "County-level targeting",
          "Course clicks filtered",
        ],
        links: [
          { href: "/services/google-ads", label: "Google Ads for inspectors" },
        ],
      },
      {
        icon: "monitor",
        title: "Michigan Inspection Sites With Sample Reports",
        desc: "Mobile-first sites with online booking, a sample report and your credentials up top, so buyers trust you without a state license to check.",
        points: [
          "Sample report download",
          "Credentials above the fold",
          "Online booking",
        ],
        links: [
          { href: "/services/web-design", label: "Custom website design" },
        ],
      },
      {
        icon: "star",
        title: "Reviews and Agent Referrals Across Michigan",
        desc: "Review requests sent with each report, plus an agent-ready page and a profile that helps Michigan agents hand out your name with confidence.",
        points: [
          "Requests with each report",
          "Agent referral page",
          "Replies written for you",
        ],
        links: [{ href: "/services", label: "Every service we offer" }],
      },
      {
        icon: "shield",
        title: "Suspended Michigan Profiles Brought Back",
        desc: "When Google suspends your listing or stalls verification, we track down the reason, fix the record and appeal. 900+ profiles reinstated so far.",
        points: [
          "Suspension cause traced",
          "Verification paperwork",
          "900+ profiles reinstated",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Reinstate my Michigan profile",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Sort out my verification",
          },
        ],
      },
    ],
  },
  growth: {
    title: "Home Inspector Lead Generation: Michigan Calls You Can Trace",
    lead: "The map, AI answers and a call log that shows which channel books your inspections.",
    rows: [
      {
        title: "Be the Home Inspector Metro Detroit Buyers Tap on Maps",
        body: [
          "Buyers in Royal Oak, Dearborn and Livonia search on their phones and call one of the first three pins. We sharpen your profile, add suburb pages and keep fresh reviews flowing, so your company competes for those spots across Wayne, Oakland and Macomb.",
        ],
        points: [
          "Suburb service areas",
          "Sewer scope listed",
          "Weekly job photos",
          "Grid rank checks",
        ],
        cta: "See My Detroit Ranking",
        ui: {
          kind: "maps",
          query: "home inspector metro detroit",
          city: "Detroit",
          category: "Home inspector · Sewer scope",
        },
      },
      {
        title: "AI SEO for Home Inspectors From Ann Arbor to Lansing",
        body: [
          "When a buyer asks ChatGPT or Google's AI who inspects older homes near the university, the answer comes from what websites, listings and reviews say. Our ",
          { href: "/services/ai-seo-services", label: "AI SEO services" },
          " shape all three, so your company is described correctly and suggested by name.",
        ],
        points: [
          "Answer pages per city",
          "Credentials stated clearly",
          "Schema markup added",
          "Listings kept identical",
        ],
        cta: "Check My AI Answers",
        ui: {
          kind: "ai",
          query: "home inspection ann arbor",
          intro: "For a home inspection in Ann Arbor,",
          bullets: [
            "Sewer scope on older lines",
            "Radon testing available",
            "Serves Ypsilanti and Saline",
          ],
        },
      },
      {
        title: "See Which Calls Turn Into Booked Michigan Inspections",
        body: [
          "Every call gets recorded and tagged by source, city and job type, so you can tell which ads and listings actually book inspections. We challenge bad Local Services leads and shift budget toward whatever fills your Lansing or Kalamazoo calendar.",
        ],
        points: [
          "Recorded call log",
          "Source and city tags",
          "Bad leads challenged",
          "Monthly booking report",
        ],
        cta: "Show Me My Call Sources",
        ui: {
          kind: "calls",
          title: "Today's calls · Lansing",
          calls: [
            {
              service: "Buyer's home inspection",
              source: "Local Services Ads",
              when: "8:40 AM",
            },
            {
              service: "Sewer scope add-on",
              source: "Google Maps",
              when: "11:15 AM",
            },
            {
              service: "Radon test",
              source: "Google Ads",
              when: "2:05 PM",
            },
          ],
        },
      },
    ],
  },
  regions: {
    title: "Michigan Markets We Cover, Lower Peninsula to the U.P.",
    lead: "Each market is planned separately, with city pages and ad settings built around its housing and buyers.",
    items: [
      {
        name: "Detroit & Wayne County",
        cities: "Detroit · Dearborn · Livonia · Westland",
        focus: "City-lot pages for older homes and sewer scopes",
      },
      {
        name: "Oakland & Macomb",
        cities: "Troy · Royal Oak · Novi · Sterling Heights",
        focus: "Busy suburb pages for move-up buyers",
      },
      {
        name: "Ann Arbor & Washtenaw",
        cities: "Ann Arbor · Ypsilanti · Saline · Chelsea",
        focus: "University-area buyers and radon add-ons",
      },
      {
        name: "West Michigan",
        cities: "Grand Rapids · Holland · Muskegon · Kalamazoo",
        focus: "Lakeshore homes, basements and agent outreach",
      },
      {
        name: "Lansing & Mid-Michigan",
        cities: "Lansing · East Lansing · Flint · Saginaw",
        focus: "Capital-area pages and first-time buyer content",
      },
      {
        name: "Northern Michigan & the U.P.",
        cities: "Traverse City · Petoskey · Marquette · Sault Ste. Marie",
        focus: "Well, septic and second-home inspection pages",
      },
    ],
    other:
      "Inspecting somewhere else in Michigan? We'll map out pages for it too.",
  },
  reviews: {
    title: "A 5.0 Google Rating From the Owners We Serve",
    lead: "What the home service owners we market each month say on Google.",
  },
  pricing: {
    title: "Home Inspector Marketing Plans for Michigan Companies",
    lead: [
      "No tier locks you in past a month, ad budgets carry a 0% markup, and any plan can pair with ",
      { href: "/services/web-design", label: "a new inspection website" },
      ".",
    ],
    compareTitle: "Michigan Plans Compared",
    compareLead:
      "From one inspector in one county to teams covering the state.",
    addOnsTitle: "Extras for Busy Listing Months",
    addOnsLead:
      "Launch extra city pages or campaigns once spring listings arrive.",
    customTitle: "Offices on both peninsulas?",
    customText: "Share your locations and we'll quote one combined plan.",
  },
  faq: {
    title: "Michigan Home Inspector Marketing Questions",
    lead: "Licensing, cities, add-ons and costs. Questions left? Give us a call.",
    items: [
      {
        q: "Do I need to be a certified home inspector in Michigan to rank?",
        a: "No. Michigan has no state license or registration for home inspectors, so Google won't ask for one. Buyers still look for proof, though, so we feature your national certification, insurance and years in business on your profile and website, right where buyers compare companies.",
      },
      {
        q: "How do I become the home inspector Grand Rapids agents recommend?",
        a: "Make referring you easy. We build an agent page with your booking link, sample report and turnaround times, keep reviews coming from buyers those agents already know, and post useful notes on West Michigan homes that agents can share with their clients.",
      },
      {
        q: "Can my company rank for both home inspection Ann Arbor and home inspector Lansing MI searches?",
        a: "Yes, if you inspect in both. Your Google profile ranks best near your office, so the second city leans on its own service page, reviews that name it and local listings. With a staffed office in each city, a second verified profile is allowed too.",
      },
      {
        q: "Should I post home inspection cost in Michigan on my website?",
        a: "Post a clear fee guide in your own numbers. Buyers searching costs want to know what's included, how size and age change the fee and which add-ons are extra. A plain page answers that, keeps them on your site and filters out pure price shoppers early.",
      },
      {
        q: "Which add-on inspections should Michigan inspectors market?",
        a: "Lead with what local homes need: sewer scopes for older Detroit-area lines, radon tests, and well and septic evaluations in rural areas, where some counties and townships require a septic check when a home changes hands. Each add-on gets its own page and profile service.",
      },
      {
        q: "How long does Michigan home inspector marketing take to work?",
        a: "Ads and a rebuilt Google profile can start bringing calls in the first month or two. City pages and reviews take a few months to settle into steady rankings, which is why starting in winter puts you in position before spring listings peak. You get a report every month.",
      },
      {
        q: "How much do your Michigan marketing plans cost?",
        a: "Each Michigan plan is billed monthly at $297, $750 or $1,500, with no long-term contract. Ad spend carries a 0% markup, so every ad dollar reaches Google. Larger plans add more cities, more content and paid campaigns for busy seasons.",
      },
    ],
  },
  audit: {
    title: "See Where Michigan Buyers Find You With a Free Audit",
    lead: [
      "We measure your map spot in every Michigan city you serve, plus your profile, site, reviews and credentials, then show where inspections slip to competitors. Covering nearby states too? We also grow inspectors in ",
      { href: "/services/home-inspector-marketing/ohio", label: "Ohio" },
      ", ",
      { href: "/services/home-inspector-marketing/indiana", label: "Indiana" },
      ", ",
      {
        href: "/services/home-inspector-marketing/wisconsin",
        label: "Wisconsin",
      },
      " and ",
      {
        href: "/services/home-inspector-marketing/illinois",
        label: "Illinois",
      },
      ".",
    ],
    points: [
      "Every county and city checked",
      "Credentials and reviews audited",
      "Month-to-month plans from $297",
    ],
    form: {
      formType: "home-inspector-marketing-michigan",
      badge: "Free Michigan audit",
      title: "Get Your Free Michigan Audit",
      subtitle: "Free and no strings attached.",
      submitText: "Send My Michigan Audit",
      messageLabel: "Your Michigan cities and add-ons",
      messagePlaceholder: "e.g. Troy and Novi, sewer scopes and radon",
    },
  },
  banner: {
    title: "Fill Your Michigan Inspection Calendar Before Spring",
    lead: "A free audit maps your rank in each Michigan city you serve.",
    icons: ["inspectList", "snow"],
  },
};
