import { PALETTES } from "../palettes";
import type { IndustryContent } from "../types";

/* REFERENCE EXAMPLE (not routed): the owner-approved HVAC agency draft's
   words in the IndustryContent schema. Shows the expected tone, lengths
   and field usage. Never copy its wording to another page. */

export const HVAC_EXAMPLE: IndustryContent = {
  draftSlug: "hvac-marketing-agency-2",
  liveUrl: "/services/hvac-marketing-agency",
  niche: "HVAC",
  meta: {
    title: "HVAC Marketing Agency | SEO, PPC & HVAC Lead Generation",
    description:
      "HVAC marketing agency for contractors: Google Business Profile, HVAC SEO, PPC and websites that turn “AC repair near me” searches into booked jobs.",
    keywords: [
      "hvac marketing agency",
      "hvac marketing company",
      "hvac lead generation",
      "hvac ppc",
    ],
  },
  palette: PALETTES.redSky,
  hero: {
    h1Lead: "HVAC",
    h1Icon: "hvac",
    h1Rest:
      "Marketing Agency for Contractors Who Want More Calls & Booked Jobs",
    lead: [
      "We turn “AC repair near me” and “furnace repair near me” searches into booked jobs for HVAC contractors, with HVAC SEO, ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Google Business Profile optimization",
      },
      ", HVAC PPC and ",
      {
        href: "/services/hvac-website-design",
        label: "HVAC websites built to get calls",
      },
      ".",
    ],
    cta: "Get Free HVAC Audit",
    bento: {
      kind: "photos",
      photoA: {
        src: "/images/free-website/free-hvac/ac-repair.webp",
        position: "30% 50%",
        query: "ac repair near me",
      },
      cardA: {
        icon: "snow",
        title: "More AC repair calls",
        sub: "Every summer peak",
      },
      cardB: {
        icon: "flame",
        title: "More furnace jobs",
        sub: "Every winter rush",
      },
      photoB: {
        src: "/images/free-website/free-hvac/furnace-heating.webp",
        position: "72% 50%",
        query: "furnace repair near me",
      },
    },
  },
  services: {
    title: "HVAC Marketing Services That Fill Your Schedule",
    lead: "Six services from one HVAC marketing company, each tuned to how homeowners search, call and come back.",
    cta: "Audit My Full Funnel",
    items: [
      {
        icon: "pin",
        title: "Google Business Profile & Map Pack",
        desc: "Categories, services, photos and offers set up so you land in the top three when homeowners search for AC or furnace repair.",
        points: [
          "Full profile rebuild",
          "Products & Q&A set up",
          "GBP reinstatement included",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Profile optimization",
          },
        ],
      },
      {
        icon: "search",
        title: "HVAC SEO",
        desc: "A page for every service and town you cover, plus citations and schema, so Google ranks you for the jobs you want.",
        points: [
          "AC, furnace & heat pump pages",
          "Local citation building",
          "Monthly ranking reports",
        ],
        links: [
          {
            href: "/services/industry/local-seo-services-for-hvac",
            label: "Local SEO for HVAC",
          },
        ],
      },
      {
        icon: "target",
        title: "HVAC PPC & Local Services Ads",
        desc: "Google Ads and Local Services Ads on emergency and install searches, with budgets raised before each busy season.",
        points: [
          "Google Guaranteed setup",
          "Emergency & seasonal keywords",
          "0% ad-spend markup",
        ],
        links: [
          { href: "/services/google-ads", label: "Google Ads management" },
        ],
      },
      {
        icon: "monitor",
        title: "HVAC Website Design",
        desc: "HVAC websites built for phones: quick to load, click-to-call on every page, online booking and service pages that rank.",
        points: [
          "Emergency call button up top",
          "Call & form tracking",
          "Built for local SEO",
        ],
        links: [
          {
            href: "/services/hvac-website-design",
            label: "HVAC website design",
          },
        ],
      },
      {
        icon: "star",
        title: "Reviews & Reputation",
        desc: "A review request after every job keeps fresh 5-star reviews coming in, the first thing homeowners and Google check.",
        points: [
          "Text & email review requests",
          "Replies written for you",
          "Review widget on your site",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "Local SEO for home services",
          },
        ],
      },
      {
        icon: "repeat",
        title: "Maintenance Memberships",
        desc: "Membership pages and reminders that turn one-off repairs into twice-a-year tune-up visits.",
        points: [
          "Membership signup page",
          "Spring & fall tune-up reminders",
          "Renewal texts & emails",
        ],
        links: [{ href: "#ind-audit", label: "Plan my membership program" }],
      },
    ],
  },
  growth: {
    title: "How Our HVAC Marketing Company Books More Calls",
    lead: "Map Pack rankings, seasonal ads and AI search, working together.",
    rows: [
      {
        title: "Rank in the Map Pack for “AC Repair Near Me”",
        body: [
          "The Map Pack sits above the search results homeowners scroll, so we optimize your Google Business Profile, service-area pages and reviews to make you one of the three companies they call.",
        ],
        points: [
          "HVAC categories",
          "Service-area pages",
          "Review requests",
          "Photos & offers",
        ],
        cta: "Check My Map Pack Position",
        ui: {
          kind: "maps",
          query: "ac repair near me",
          city: "Phoenix",
          category: "HVAC contractor · Open 24 hours",
        },
      },
      {
        title: "Get Recommended in ChatGPT and AI Overviews",
        body: [
          "Homeowners now ask AI assistants which HVAC company to call. Our ",
          {
            href: "/services/ai-seo-services",
            label: "AI search optimization",
          },
          " makes your business easy to verify, with consistent listings, recent reviews and pages that answer real questions.",
        ],
        points: [
          "Consistent listings",
          "Fresh reviews",
          "FAQ answers",
          "Clear service pages",
        ],
        cta: "Audit My AI Visibility",
        ui: {
          kind: "ai",
          query: "best hvac company near me for a heat pump",
          intro: "For heat pump installs nearby,",
          bullets: [
            "Heat pump installs",
            "24/7 emergency service",
            "Maintenance plans",
          ],
        },
      },
      {
        title: "Turn Every Service Call Into a Review",
        body: [
          "A text goes out when the job closes and asks for a Google review. We write the replies, so your rating keeps climbing.",
        ],
        points: [
          "Automatic requests",
          "Replies written for you",
          "Review widget",
          "More 5-star reviews",
        ],
        cta: "Grow My Reviews",
        ui: {
          kind: "reviews",
          sms: "Hi Dana, thanks for choosing Your Company today! Could you leave us a quick Google review?",
          reviewer: "Dana P.",
          review:
            "AC was out on the hottest day of the year and they had it running by dinner.",
          reply: "Thanks, Dana! Glad we could get you cool again.",
        },
      },
    ],
  },
  ownLeads: {
    title: "HVAC Lead Generation Without Shared Leads",
    body: [
      "Shared leads go to several contractors at once, so you race to call first and pay whether you book the job or not. We build HVAC leads that come to you alone.",
    ],
    cta: "Get More HVAC Leads",
    colShared: "Shared leads",
    colOwn: "Your own leads",
    rows: [
      ["Who gets the lead", "Several contractors", "Only your company"],
      [
        "What you pay for",
        "Every lead, booked or not",
        "Rankings, site and ads you own",
      ],
      [
        "When you stop paying",
        "Leads stop",
        "Rankings and reviews keep working",
      ],
      [
        "Repeat business",
        "Starts over every job",
        "Yours: tune-ups and memberships",
      ],
    ],
  },
  specialties: {
    title: "HVAC Marketing for Every Service You Sell",
    lead: "Each service gets its own plan, built around how homeowners buy that job.",
    photo: {
      src: "/images/free-website/free-hvac/commercial-hvac.webp",
      alt: "HVAC technicians servicing commercial rooftop units",
      caption: "Residential and commercial HVAC",
      sub: "Service, installs and maintenance plans",
    },
    items: [
      {
        icon: "snow",
        name: "AC Repair & Install",
        tactic: "24/7 call ads and a top-3 Map Pack spot",
      },
      {
        icon: "flame",
        name: "Furnace & Heating",
        tactic: "Winter ad schedules and no-heat service pages",
      },
      {
        icon: "heatPump",
        name: "Heat Pump Installs",
        tactic: "Install pages with quote and financing forms",
      },
      {
        icon: "clock",
        name: "Emergency & 24-Hour Service",
        tactic: "Call-only ads that keep running after hours",
      },
      {
        icon: "hvac",
        name: "Ductless Mini-Splits",
        tactic: "Quote-request pages for single-room comfort",
      },
      {
        icon: "wrench",
        name: "Tune-Ups & Maintenance",
        tactic: "Spring and fall offers sent to past customers",
      },
      {
        icon: "air",
        name: "Duct Cleaning & Air Quality",
        tactic: "Add-on offers in follow-up texts and emails",
      },
      {
        icon: "building",
        name: "Commercial HVAC",
        tactic: "B2B service pages and contract-focused ads",
      },
    ],
    more: "Sell something else? We market it too.",
  },
  steps: {
    title: "Start Your HVAC Marketing in 3 Steps",
    lead: "Start before your busy season, so rankings and ads are working when the calls come in.",
    items: [
      {
        h: "Free HVAC Marketing Audit",
        p: "We search your services the way homeowners do and show where you rank, who outranks you and the quickest wins.",
      },
      {
        h: "A Plan Built Around Your Peaks",
        p: "We pick the services, towns and ad budget to push first, timed so you're ranking before summer and winter demand.",
      },
      {
        h: "Launch, Track, Report",
        p: "Profile, pages, ads and review requests go live. Each month you see rankings, calls and booked jobs in one report.",
      },
    ],
    audit: [
      ["Map Pack position", "behind"],
      ["Google Business Profile", "gap"],
      ["Reviews vs competitors", "behind"],
      ["Maintenance plans", "open"],
    ],
    plan: ["AC repair", "Heat pumps", "Phoenix", "Mesa", "Emergency ads"],
    launch: [
      "Google profile rebuilt",
      "Service pages published",
      "Ads and call tracking on",
      "Review requests switched on",
    ],
  },
  locations: {
    title: "HVAC Marketing in Your State",
    lead: [
      "Each state has its own plan, built on the playbook behind our ",
      {
        href: "/services/plumbing-marketing-agency",
        label: "plumbing marketing agency",
      },
      ".",
    ],
    items: [
      {
        name: "Florida HVAC Marketing",
        href: "/services/hvac-marketing-agency/florida",
        cities: "Miami · Tampa · Orlando",
      },
      {
        name: "Texas HVAC Marketing",
        href: "/services/hvac-marketing-agency/texas",
        cities: "Houston · Dallas · Austin",
      },
    ],
    other: "Other states? We serve HVAC contractors nationwide.",
  },
  reviews: {
    title: "What HVAC Contractors Say About Us",
    lead: "Real Google reviews from businesses we work with.",
  },
  pricing: {
    title: "HVAC Marketing Plans, Month to Month",
    lead: [
      "Month to month, with ad spend billed at a 0% markup. Every plan covers ",
      {
        href: "/services/gbp-reinstatement-service",
        label: "Google Business Profile reinstatement",
      },
      " if your listing is ever suspended.",
    ],
    compareTitle: "Compare HVAC Marketing Plans",
    compareLead: "What each plan covers, from Map Pack to Google Ads.",
    addOnsTitle: "Add Campaigns as You Grow",
    addOnsLead: "Extra ad campaigns or service-area pages for busy seasons.",
    customTitle: "Running several branches or states?",
    customText:
      "Tell us your markets and we'll quote a multi-location HVAC plan.",
  },
  faq: {
    title: "HVAC Marketing Agency FAQs",
    lead: "Leads, timelines, costs and AI search, answered.",
    items: [
      {
        q: "What is HVAC marketing?",
        a: "HVAC marketing is how heating and cooling contractors get found and chosen by homeowners: Map Pack and search rankings, Google Ads and Local Services Ads, a website that turns visits into calls, and steady reviews.",
      },
      {
        q: "How can HVAC companies get more leads?",
        a: "Own the searches that bring calls: rank in the Map Pack, run ads on emergency searches before your busy season, put click-to-call everywhere and ask for a review after every job.",
      },
    ],
  },
  audit: {
    title: "Get a Free HVAC Marketing Audit Before Your Next Peak",
    lead: [
      "See where you rank for your top HVAC searches, how your Google Business Profile, ",
      { href: "/services/web-design", label: "website design" },
      " and reviews compare with the companies above you, and what to fix first.",
    ],
    points: [
      "Month-to-month plans",
      "Reinstatement on every plan",
      "Plans from $297/mo",
      "0% ad-spend markup",
    ],
    form: {
      formType: "hvac-marketing",
      badge: "Free HVAC audit",
      title: "Get Your Free HVAC Marketing Audit",
      subtitle: "Free, with no obligation.",
      submitText: "Send My Free Audit",
      messageLabel: "Your service area and HVAC specialties",
      messagePlaceholder:
        "City, the services you want more of, and your peak season",
    },
  },
  banner: {
    title: "Be the First Call in Every Heat Wave and Cold Snap",
    lead: "Start before your next peak with a free HVAC marketing audit.",
    icons: ["sun", "snow"],
  },
};
