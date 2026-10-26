import { PALETTES } from "@/components/rd/industry/palettes";
import type { LocationContent } from "@/components/rd/industry/types";

/* ALABAMA HOME INSPECTOR MARKETING — redesign draft content (24 Oct 2026).
   Rank safety: Semrush resource_organic (US, 24 Oct) returned no ranking
   data for the live URL; API units then ran out, so keyword work came from
   web research. The live title's core term "Home Inspector Marketing in
   Alabama" stays in the title, and every live keywords-meta phrase sits in
   the title, H1, an H2/H3 or an FAQ question. Head-term volumes (Semrush
   US, 18 Sep 2026): home inspector marketing 210 · seo for home inspectors
   170 · home inspector seo 140.
   Web research (24 Oct): Alabama licenses individual inspectors through
   the Division of Construction Management; termite (wood infestation)
   letters come from certified pest control firms; Madison, Jefferson and
   Shelby counties are higher-radon areas; FORTIFIED roofs matter in Mobile
   and Baldwin counties; top Birmingham results stress radon, mold and
   same-day reports. Fresh wording only. */

export const CONTENT: LocationContent = {
  draftSlug: "alabama-2",
  liveUrl: "/services/home-inspector-marketing/alabama",
  parent: {
    href: "/services/home-inspector-marketing",
    label: "Home Inspector Marketing",
    niche: "Home Inspector",
  },
  place: "Alabama",
  meta: {
    title: "Home Inspector Marketing in Alabama | Maps & Radon Leads",
    description:
      "Alabama home inspector marketing for Birmingham, Huntsville, Mobile and Montgomery: Google Maps rankings, radon and city pages, ads, reviews and agent referrals.",
    keywords: [
      "home inspector marketing alabama",
      "home inspector seo alabama",
      "home inspector birmingham al",
      "home inspection huntsville al",
      "home inspection mobile alabama",
      "home inspection montgomery al",
      "home inspection cost alabama",
      "best home inspectors birmingham al",
      "home inspector marketing",
      "seo for home inspectors",
      "home inspector lead generation alabama",
      "ai seo for home inspectors",
    ],
  },
  palette: PALETTES.roseCyan,
  hero: {
    h1: "Alabama Home Inspector Marketing Agency for Fuller Calendars",
    h1NoWrap: "Fuller Calendars",
    lead: [
      "Alabama buyers book inspectors two ways: an agent's referral or a quick Google search after the offer is signed. Our ",
      {
        href: "/services/home-inspector-marketing",
        label: "home inspector marketing program",
      },
      " puts your company in both places, from Huntsville and Birmingham to Mobile Bay, with Maps rankings, radon pages and reviews that keep coming.",
    ],
    cta: "Get My Alabama Inspector Audit",
    tiles: {
      wide: {
        icon: "pin",
        title: "Top 3 on Alabama maps",
        sub: "For buyer searches in each town on your route",
        chips: [
          "Birmingham",
          "Huntsville",
          "Mobile",
          "Montgomery",
          "+ your town",
        ],
      },
      left: {
        icon: "inspect",
        title: "Radon tests booked online",
        sub: "Test pages for north Alabama and Shelby County",
      },
      right: {
        icon: "users",
        title: "Agents send buyers back",
        sub: "Booking links and reports they can forward",
      },
      bottom: {
        title: "A calendar that fills itself",
        sub: "Direct bookings from buyers who found you first",
      },
    },
  },
  services: {
    title: "Maps, Ads and SEO for Home Inspectors Across Alabama",
    lead: "Every channel that books Alabama home inspections, run by one team.",
    cta: "Audit My Alabama Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Maps Rankings for Alabama Inspectors",
        desc: "We set inspection categories, list each add-on test, map your service towns and post fresh job photos so the profile keeps climbing.",
        points: [
          "Categories and add-ons set",
          "Service towns mapped",
          "Fresh job photos weekly",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Tune my Business Profile",
          },
        ],
      },
      {
        icon: "search",
        title: "Home Inspector SEO for Alabama Towns and Radon Searches",
        desc: "Town pages for every stop on your route, plus radon, crawlspace, new-construction and termite-letter pages that rank for the tests buyers want.",
        points: [
          "Town-by-town pages",
          "Radon and crawlspace pages",
          "Citations cleaned up",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "Local SEO for home service firms",
          },
        ],
      },
      {
        icon: "target",
        title: "Alabama Inspection Ads: Google Search and LSA",
        desc: "Search ads and Google Guaranteed listings that reach buyers already in contract across your counties, with DIY and job-seeker clicks blocked.",
        points: [
          "Under-contract search terms",
          "Google Guaranteed badge",
          "County-level targeting",
        ],
        links: [
          { href: "/services/google-ads", label: "Google Ads management" },
        ],
      },
      {
        icon: "monitor",
        title: "Inspection Websites That Take Bookings",
        desc: "A fast mobile site where buyers pick a time, tick add-ons, see your license number and open a sample report agents can pass along.",
        points: [
          "Online scheduler",
          "Sample report page",
          "License shown site-wide",
        ],
        links: [
          { href: "/services/web-design", label: "Inspector-ready web design" },
        ],
      },
      {
        icon: "star",
        title: "Alabama Reviews and Agent Referral Visibility",
        desc: "Review texts go out as each report is delivered, and agents get a booking page and shareable report, so they recommend you again.",
        points: [
          "Texts on report delivery",
          "Agent booking page",
          "Owner-voice replies",
        ],
        links: [{ href: "/services", label: "Browse every service we offer" }],
      },
      {
        icon: "shield",
        title: "Suspended Alabama Listings, Fixed and Verified",
        desc: "A suspended or unverified listing can halt calls overnight. We pinpoint the issue, correct it and submit the appeal, backed by our record of 900+ reinstated profiles.",
        points: [
          "Cause traced and fixed",
          "Video check-in prep",
          "Appeal written and filed",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Restore my Alabama listing",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Finish my verification",
          },
        ],
      },
    ],
  },
  growth: {
    title: "How We Fill Alabama Inspection Calendars",
    lead: "Maps first, then AI answers, then the reviews agents and buyers read before they call.",
    rows: [
      {
        title: "Own the Map When Buyers Type “Home Inspector Birmingham AL”",
        body: [
          "A Hoover buyer with a signed contract checks the map and phones one of the three inspectors listed first. We tune your profile, build Birmingham and Over-the-Mountain town pages and keep reviews arriving, so your pin makes that short list. See where you stand with our ",
          {
            href: "/google-maps-business-ranking-tool-online",
            label: "free Maps rank checker",
          },
          ".",
        ],
        points: [
          "Inspector categories set",
          "Over-the-Mountain town pages",
          "Geo-tagged job photos",
          "Fake listings reported",
        ],
        cta: "See My Birmingham Ranking",
        ui: {
          kind: "maps",
          query: "home inspector birmingham al",
          city: "Birmingham",
          category: "Home inspector · Radon & crawlspace",
        },
      },
      {
        title: "AI SEO for Home Inspectors Serving Huntsville and Madison",
        body: [
          "Relocating engineers and military families now ask ChatGPT or Gemini to recommend a Huntsville inspector. Our ",
          {
            href: "/services/ai-seo-services",
            label: "AI search optimization",
          },
          " gives those assistants consistent facts: your license, matching listings, reviews that describe real findings and a clear page for every test you run.",
        ],
        points: [
          "License on every listing",
          "Answer-first radon pages",
          "Matching business details",
          "Reviews naming the town",
        ],
        cta: "Check My AI Visibility",
        ui: {
          kind: "ai",
          query: "who does radon testing with a home inspection in huntsville",
          intro: "For a Huntsville home inspection with radon testing,",
          bullets: [
            "Licensed in Alabama",
            "Radon and crawlspace checks",
            "Reports sent the same day",
          ],
        },
      },
      {
        title: "Make the “Best Home Inspectors Birmingham AL” Shortlist",
        body: [
          "Lists of the best inspectors lean on Google reviews, and so do the agents deciding who to refer. When your report lands, the client gets a quick text with a link to review you on Google, and we draft every owner reply.",
        ],
        points: [
          "Requests sent on delivery",
          "Replies in your voice",
          "Low ratings flagged",
          "Best reviews featured on site",
        ],
        cta: "Grow My Birmingham Reviews",
        ui: {
          kind: "reviews",
          sms: "Hi Dana, it's Your Company. Your Hoover inspection report is ready. Would you mind rating us on Google?",
          reviewer: "Dana W.",
          review:
            "Crawled the whole crawlspace, was straight with us about the roof, and the report came that same evening. Our agent already sent a friend his way.",
          reply: "Thanks, Dana! Enjoy the new house in Hoover.",
        },
      },
    ],
  },
  regions: {
    title: "Alabama Markets We Cover, Huntsville to the Gulf Coast",
    lead: "Each part of the state books inspections in its own way, and our pages, ads and service areas follow suit.",
    items: [
      {
        name: "Tennessee Valley",
        cities: "Huntsville · Madison · Decatur · Athens",
        focus: "Radon and new-construction pages for fast-growing suburbs",
      },
      {
        name: "Greater Birmingham",
        cities: "Birmingham · Hoover · Vestavia Hills · Trussville",
        focus: "Map Pack pushes in a crowded metro, radon add-ons included",
      },
      {
        name: "Mobile Bay",
        cities: "Mobile · Daphne · Fairhope · Spanish Fort",
        focus: "Roof and wind-condition pages for coastal buyers",
      },
      {
        name: "Baldwin Beaches",
        cities: "Gulf Shores · Orange Beach · Foley",
        focus: "Online booking for second-home and out-of-state buyers",
      },
      {
        name: "River Region",
        cities: "Montgomery · Prattville · Millbrook · Wetumpka",
        focus: "Pages aimed at military moves and first-time buyers",
      },
      {
        name: "College Towns & Wiregrass",
        cities: "Tuscaloosa · Auburn · Opelika · Dothan",
        focus: "Investor and parent-buyer pages where few rivals compete",
      },
    ],
    other:
      "Inspecting in Florence, Gadsden or Anniston? We build pages for those towns as well.",
  },
  reviews: {
    title: "Alabama Inspectors Can Check Our 5.0 Google Rating",
    lead: "Owners of home service businesses we've grown, in their own words.",
  },
  pricing: {
    title: "Alabama Home Inspector Marketing Plans",
    lead: [
      "Every plan runs month to month, you pay ad spend with no markup from us, and you can ",
      { href: "/services", label: "add any other service we offer" },
      " as the company grows.",
    ],
    compareTitle: "Compare Plans for Alabama Inspection Firms",
    compareLead:
      "From one-inspector shops to multi-inspector teams across several metros.",
    addOnsTitle: "Add-Ons for Alabama's Busy Spring",
    addOnsLead: "More town pages or extra ads for the spring listing rush.",
    customTitle: "Inspectors in Huntsville and Mobile?",
    customText:
      "Tell us every office and route, and we'll quote one combined plan.",
  },
  faq: {
    title: "Alabama Home Inspector Marketing FAQ",
    lead: "Licensing, city rankings, add-ons and leads. Want a real person? Call us.",
    items: [
      {
        q: "Do Alabama home inspectors need a license, and should I show it?",
        a: "Yes. Alabama licenses individual home inspectors through the Division of Construction Management, and licenses go to people, not companies. We list each inspector's license number on your Google listing, site and agent handouts, because buyers and agents look for it before they book.",
      },
      {
        q: "Can one office rank for “home inspection Huntsville AL” and “home inspection Montgomery AL”?",
        a: "In organic results, yes: separate city pages with local photos and reviews can rank in both. On Google Maps, distance from your address weighs heavily, so a Montgomery map spot usually needs a real local presence or a second inspector based there. We plan within Google's rules.",
      },
      {
        q: "Can a page for “home inspection cost Alabama” searches bring in bookings?",
        a: "Yes. Buyers comparing inspectors look up cost before they call. A clear page on what drives your fee, from home size and age to crawlspace access and add-on tests, paired with an instant quote form, turns those searches into bookings. You decide whether to show figures.",
      },
      {
        q: "What helps me win “home inspection Mobile Alabama” searches?",
        a: "A Mobile city page that covers roof age, wind exposure and moisture, Google posts ahead of storm season and reviews from Mobile and Baldwin County clients. If you're a certified FORTIFIED evaluator, that service gets its own page, since coastal buyers and insurers ask about it.",
      },
      {
        q: "Do radon tests and termite letters belong in my Alabama marketing?",
        a: "Yes, they're among the easiest add-ons to sell online. Madison, Jefferson and Shelby counties are higher-radon areas, so radon pages rank well there. Termite letters have to be issued by a licensed pest control firm; when you partner with one, your pages say so clearly.",
      },
      {
        q: "What does home inspector lead generation in Alabama look like beyond agent referrals?",
        a: "Agent referrals stay central, so we make you easy to recommend with a booking link and a forwardable sample report. Alongside that we build a direct pipeline of Maps rankings, city pages, inspection ads and pre-listing offers for sellers, so one quiet agent never empties your week.",
      },
    ],
  },
  audit: {
    title: "Get a Free Alabama Home Inspector Marketing Audit",
    lead: [
      "Our team looks up your map rank in each Alabama town you serve, reviews your profile, site and add-on searches, and shows where bookings slip to other inspectors.",
    ],
    points: [
      "Every Alabama town on your route checked",
      "Radon and add-on searches included",
      "Month-to-month tiers: $297, $750, $1,500",
    ],
    form: {
      formType: "home-inspector-marketing-alabama",
      badge: "Free Alabama audit",
      title: "Request Your Alabama Inspector Audit",
      subtitle: "No cost, no contract and no sales pitch.",
      submitText: "Send My Alabama Audit",
      messageLabel: "Your Alabama towns and add-on tests",
      messagePlaceholder: "e.g. Huntsville and Madison, radon and new builds",
    },
  },
  banner: {
    title: "Turn Alabama Home Searches Into Inspection Bookings",
    lead: "One free audit maps your rank in every Alabama town you cover.",
    icons: ["inspectList", "pin"],
  },
};
