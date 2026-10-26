import { PALETTES } from "@/components/rd/industry/palettes";
import type { LocationContent } from "@/components/rd/industry/types";

/* VIRGINIA HOME INSPECTOR MARKETING — redesign draft content (24 Oct 2026).
   Rank safety: Semrush returned no_api_units on 24 Oct, so resource_organic
   and phrase_these could not run; keywords come from web research. The
   live title's core term "Home Inspector Marketing in Virginia" is kept in
   the title, and every phrase in the live keywords meta sits in the title,
   H1, an H2/H3 or an FAQ question.
   Web research (24 Oct): home inspectors are licensed by DPOR's Board for
   Asbestos, Lead, and Home Inspectors (mandatory since July 2017); the New
   Residential Structure (NRS) specialty is required to inspect new
   construction; VA-guaranteed loans use the NPMA-33 wood-destroying
   insect report; the Virginia Department of Health lists dozens of
   counties and cities as high radon risk; Virginia Beach listings stress
   online scheduling, military buyers and add-ons. Fresh wording only. */

export const CONTENT: LocationContent = {
  draftSlug: "virginia-2",
  liveUrl: "/services/home-inspector-marketing/virginia",
  parent: {
    href: "/services/home-inspector-marketing",
    label: "Home Inspector Marketing",
    niche: "Home Inspector",
  },
  place: "Virginia",
  meta: {
    title: "Home Inspector Marketing in Virginia | SEO & Military Leads",
    description:
      "Virginia home inspector marketing for Northern Virginia, Richmond, Virginia Beach and Roanoke: Map Pack rankings, inspector SEO, ads, NRS pages and military buyers.",
    keywords: [
      "home inspector marketing virginia",
      "home inspector seo virginia",
      "home inspector virginia beach",
      "home inspector northern virginia",
      "home inspector richmond va",
      "best home inspector northern virginia",
      "home inspection cost in northern virginia",
      "home inspector va loan",
      "home inspector marketing",
      "seo for home inspectors",
      "home inspector lead generation virginia",
      "ai seo for home inspectors",
    ],
  },
  palette: PALETTES.orangeEmerald,
  hero: {
    h1: "Virginia Home Inspector Marketing Agency From NoVA to Norfolk",
    h1NoWrap: "NoVA to Norfolk",
    lead: [
      "Federal moves into Fairfax, military orders to Norfolk and Richmond's steady growth all bring buyers who search before they call. Our ",
      {
        href: "/services/home-inspector-marketing",
        label: "home inspector marketing agency",
      },
      " gets your DPOR-licensed company on the map, into AI answers and onto agents' shortlists in every region you serve.",
    ],
    cta: "Get My Virginia Audit",
    tiles: {
      wide: {
        icon: "pin",
        title: "Map Pack across the Commonwealth",
        sub: "Counties and independent cities, each one covered",
        chips: [
          "Fairfax",
          "Richmond",
          "Virginia Beach",
          "Roanoke",
          "+ your city",
        ],
      },
      left: {
        icon: "users",
        title: "More military bookings",
        sub: "Families on orders book you before move-in day",
      },
      right: {
        icon: "construction",
        title: "New-build work with NRS",
        sub: "Your NRS specialty in front of new-home buyers",
      },
      bottom: {
        title: "Referrals that keep coming",
        sub: "Reviews and reports agents trust with their clients",
      },
    },
  },
  services: {
    title: "What Virginia Inspection Companies Get From Us",
    lead: "Virginia counties and cities, covered by one inspector marketing team.",
    cta: "Audit My Virginia Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Profiles for DPOR-Licensed Inspectors",
        desc: "Your DPOR license, NRS specialty, counties and independent cities served, and add-on tests go on your profile, kept fresh with weekly photos.",
        points: [
          "DPOR license shown",
          "NRS specialty listed",
          "Cities and counties set",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Optimize my Google listing",
          },
        ],
      },
      {
        icon: "search",
        title: "Home Inspector SEO: Virginia Counties and Independent Cities",
        desc: "Pages for Fairfax County, the City of Fairfax, Chesapeake and every jurisdiction you cover, plus radon, NRS and pre-listing inspection pages.",
        points: [
          "Page per jurisdiction",
          "Radon testing page",
          "NRS new-build page",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "SEO for local service pros",
          },
        ],
      },
      {
        icon: "target",
        title: "Google Ads and LSA Split by Virginia Region",
        desc: "Northern Virginia, Richmond and Hampton Roads each get their own campaigns, budgets and keywords, with Local Services Ads managed alongside.",
        points: [
          "Budgets by region",
          "Military move keywords",
          "LSA leads reviewed",
        ],
        links: [{ href: "/services/google-ads", label: "Get Google Ads help" }],
      },
      {
        icon: "monitor",
        title: "Websites That Let Military Families Book Ahead",
        desc: "Online scheduling, sample reports and a page for buyers on orders, so a family still overseas can book a Norfolk inspection in minutes.",
        points: [
          "Book from anywhere",
          "Military buyer page",
          "Sample reports online",
        ],
        links: [
          { href: "/services/web-design", label: "Website design and build" },
        ],
      },
      {
        icon: "star",
        title: "Reviews Agents See Before They Refer",
        desc: "A review request follows every report, replies sound like you, and an agent page lists your turnaround, NRS specialty and coverage.",
        points: [
          "Request per report",
          "Replies in your voice",
          "Agent-ready page",
        ],
        links: [{ href: "/services", label: "Explore all services" }],
      },
      {
        icon: "shield",
        title: "Suspended Listing or Stuck Verification?",
        desc: "We work out why Google suspended or never verified your profile, repair the issue and handle the appeal from start to finish. 900+ profiles reinstated to date.",
        points: ["Reason pinned down", "Issue fixed", "Appeal handled"],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Recover my profile",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Solve my verification",
          },
        ],
      },
    ],
  },
  growth: {
    title: "Maps, Calls and AI SEO for Home Inspectors in Virginia",
    lead: "We grow you where Virginians look: the map, AI answers and ads that ring your phone.",
    rows: [
      {
        title:
          "Rank for “Best Home Inspector Northern Virginia” in Fairfax and Loudoun",
        body: [
          "Northern Virginia buyers move fast and lean on the top three map results. We build your profile around Fairfax, Loudoun and Prince William, add pages for Reston, Ashburn and Manassas, and grow reviews so you stay in that top three.",
        ],
        points: [
          "County service areas",
          "NRS and radon listed",
          "Map rank grid tracking",
          "Photos of real findings",
        ],
        cta: "See My NoVA Ranking",
        ui: {
          kind: "maps",
          query: "best home inspector northern virginia",
          city: "Fairfax",
          category: "Home inspector · DPOR licensed",
        },
      },
      {
        title: "Be the Inspector AI Suggests for “Home Inspector Richmond VA”",
        body: [
          "Buyers priced out of Northern Virginia are moving to Richmond and asking AI assistants who inspects older Fan District homes. Our ",
          { href: "/services/ai-seo-services", label: "AI SEO program" },
          " lines up your site, listings and reviews, so AI tools like ChatGPT and Gemini have clear reasons to name you.",
        ],
        points: [
          "Older-home answer pages",
          "Listings that agree",
          "DPOR license in schema",
          "Reviews naming neighborhoods",
        ],
        cta: "Check My AI Presence",
        ui: {
          kind: "ai",
          query: "home inspector richmond va for older homes",
          intro: "For older-home inspections in Richmond, VA,",
          bullets: [
            "DPOR-licensed inspector",
            "Serves Henrico and Midlothian",
            "Radon testing available",
          ],
        },
      },
      {
        title: "Turn Hampton Roads Military Moves Into Booked Calls",
        body: [
          "Families arriving on orders search, call and book within days. We run ads around Norfolk, Virginia Beach and Chesapeake for buyers using VA loans, record every call and show you which searches turn into inspections and which just waste budget.",
        ],
        points: [
          "Calls recorded and sorted",
          "VA loan buyer keywords",
          "Spend by city",
          "Monthly call report",
        ],
        cta: "Track My Virginia Calls",
        ui: {
          kind: "calls",
          title: "Today's calls · Hampton Roads",
          calls: [
            {
              service: "Buyer inspection, VA loan",
              source: "Google Ads",
              when: "9:10 AM",
            },
            {
              service: "Radon test add-on",
              source: "Google Maps",
              when: "12:25 PM",
            },
            {
              service: "NRS new-build inspection",
              source: "Local Services Ads",
              when: "3:50 PM",
            },
          ],
        },
      },
    ],
  },
  regions: {
    title: "Where We Run Home Inspector Marketing: Virginia Regions",
    lead: "Virginia mixes counties and independent cities, so every region gets service areas and pages that match its jurisdictions.",
    items: [
      {
        name: "Northern Virginia",
        cities: "Fairfax · Arlington · Alexandria · Reston",
        focus: "Fast-moving resale buyers and federal relocations",
      },
      {
        name: "Loudoun & Prince William",
        cities: "Ashburn · Leesburg · Manassas · Woodbridge",
        focus: "NRS pages for new-construction neighborhoods",
      },
      {
        name: "Hampton Roads",
        cities: "Virginia Beach · Norfolk · Chesapeake · Suffolk",
        focus: "Military families booking ahead of their orders",
      },
      {
        name: "The Peninsula",
        cities: "Newport News · Hampton · Williamsburg · Yorktown",
        focus: "Base relocations and VA loan buyer pages",
      },
      {
        name: "Greater Richmond",
        cities: "Richmond · Henrico · Chesterfield · Midlothian",
        focus: "Older-home pages and buyers priced out of NoVA",
      },
      {
        name: "Western & Central Virginia",
        cities: "Roanoke · Lynchburg · Charlottesville · Harrisonburg",
        focus: "Rural well, septic and radon add-on searches",
      },
    ],
    other:
      "Covering Fredericksburg, Winchester or Blacksburg? We'll build pages there as well.",
  },
  reviews: {
    title: "Virginia Inspectors Can Read Our Google Reviews First",
    lead: "5.0 on Google from inspectors, contractors and service companies.",
  },
  pricing: {
    title: "Home Inspector Lead Generation: Virginia Plans by Region",
    lead: [
      "Month-to-month billing, a 0% markup on ads, and ",
      {
        href: "/services/gbp-reinstatement-service",
        label: "help with a suspended profile",
      },
      " included if Google ever pulls yours.",
    ],
    compareTitle: "Virginia Plans at a Glance",
    compareLead:
      "One region or the whole Commonwealth, compare what each covers.",
    addOnsTitle: "Extras for Military Moving Season",
    addOnsLead:
      "Extra city pages or Hampton Roads ads for the summer move rush.",
    customTitle: "Inspectors in several Virginia regions?",
    customText: "List your regions and inspector count for a tailored quote.",
  },
  faq: {
    title: "Virginia Home Inspector Marketing FAQs",
    lead: "Licensing, NRS, VA loans, radon and pricing. Rather talk? Call our team.",
    items: [
      {
        q: "How do DPOR licensing and the NRS specialty affect my marketing?",
        a: "Virginia home inspectors are licensed through DPOR, the state's professional regulation department, and inspecting new construction requires its NRS (New Residential Structure) specialty. If you hold it, we promote it on new-build pages and your profile, because few competitors mention it.",
      },
      {
        q: "Can I rank for “home inspector Virginia Beach” with military families?",
        a: "Yes. Families on orders search before they arrive, often from another state. A Virginia Beach page that explains remote booking, digital reports and VA loan timing, plus reviews from other military buyers, helps you win those searches and the calls that follow.",
      },
      {
        q: "Will answering “home inspection cost in Northern Virginia” on my site win bookings?",
        a: "Yes. Buyers there compare quickly and want to know what's included before calling. A clear packages page with your own fees, add-on options and what the report covers answers that search directly and keeps buyers from bouncing to the next inspector.",
      },
      {
        q: "Do buyers searching “home inspector VA loan” also need a termite report?",
        a: "Often. VA loans commonly require a wood-destroying insect report, usually on the NPMA-33 form, completed by someone licensed for pest work. If you offer it or work with a partner, we explain that on a VA loan page so buyers can book both at once.",
      },
      {
        q: "How do independent cities affect home inspector SEO in Virginia?",
        a: "Google treats a city like Chesapeake or the City of Fairfax as its own place, separate from the nearby county. We list each jurisdiction you serve in your profile and build a page for each, so you don't vanish from searches across a city line.",
      },
      {
        q: "Is radon testing worth promoting in Virginia?",
        a: "In many areas, yes. The Virginia Department of Health classes dozens of counties and cities as high radon risk, and buyers ask about testing. A radon page, a profile service listing and a booking-form checkbox help that add-on sell itself.",
      },
      {
        q: "What do Virginia home inspector marketing plans cost?",
        a: "Virginia pricing runs from $297 a month up to $1,500, with a $750 tier between, and no long-term contract. Google bills your ad clicks directly and we add nothing on top. Inspectors in one region often start small, while teams covering NoVA and Hampton Roads need more pages and campaigns.",
      },
    ],
  },
  audit: {
    title: "Get Your Free Virginia Inspector Marketing Audit",
    lead: [
      "You'll see your map position in every county and independent city you serve, with notes on your profile, site and reviews. Inspecting beyond Virginia? We also grow inspectors in ",
      {
        href: "/services/home-inspector-marketing/maryland",
        label: "Maryland",
      },
      ", ",
      {
        href: "/services/home-inspector-marketing/north-carolina",
        label: "North Carolina",
      },
      ", ",
      {
        href: "/services/home-inspector-marketing/tennessee",
        label: "Tennessee",
      },
      " and ",
      {
        href: "/services/home-inspector-marketing/kentucky",
        label: "Kentucky",
      },
      ".",
    ],
    points: [
      "Every jurisdiction you serve, checked",
      "NRS and military searches tested",
      "Month to month, from $297",
    ],
    form: {
      formType: "home-inspector-marketing-virginia",
      badge: "Free Virginia audit",
      title: "Request a Free Virginia Inspection Audit",
      subtitle: "No charge and no commitment.",
      submitText: "Send My Virginia Audit",
      messageLabel: "Your Virginia cities, counties and services",
      messagePlaceholder:
        "e.g. Loudoun and Fairfax, resale and NRS inspections",
    },
  },
  banner: {
    title: "Be Virginia's First Call for Home Inspections",
    lead: "A free audit shows your rank in every county and city you cover.",
    icons: ["inspectList", "building"],
  },
};
