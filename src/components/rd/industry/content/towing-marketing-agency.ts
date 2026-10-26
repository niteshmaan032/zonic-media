import { PALETTES } from "../palettes";
import type { IndustryContent } from "../types";

/* TOWING MARKETING AGENCY — redesign draft content (25 Oct 2026).

   Rank safety: Semrush API units are exhausted, so no ranking report was
   pulled. The live title's core term ("Towing Marketing Agency") stays in
   the new title, and every phrase in the live keywords meta is carried by
   the title, H1, an H2/H3 or an FAQ question.
   - Web research (25 Oct): stranded drivers call the first trusted map
     result and move on if nobody answers; the Map Pack sits on top of
     "tow truck near me" searches; top pages cover call-only Google Ads,
     Local Services Ads, call tracking by channel and shift, town pages,
     LocalBusiness schema and AI Overview visibility; owners want direct
     cash calls instead of motor club rates, plus fleet, body shop and
     heavy-duty work. Common questions: time to rank, city pages, AI
     Overviews, SEO vs ads.
   Fresh wording only: nothing reused from the live page or other drafts. */

export const CONTENT: IndustryContent = {
  draftSlug: "towing-marketing-agency-2",
  liveUrl: "/services/towing-marketing-agency",
  niche: "Towing",
  meta: {
    title: "Towing Marketing Agency | Towing SEO, Google Ads & Calls",
    description:
      "Towing marketing agency for tow and roadside companies: towing SEO, Google Maps rankings, call-only Google Ads and call tracking that keep your trucks dispatched.",
    keywords: [
      "towing marketing agency",
      "tow marketing agency",
      "towing company marketing",
      "how to advertise a towing business",
      "towing seo",
      "towing company google ads",
      "tow truck marketing",
      "towing lead generation",
      "towing marketing company",
      "towing advertising agency",
      "towing internet marketing",
      "tow truck seo",
      "towing company seo",
      "roadside assistance marketing",
    ],
  },
  palette: PALETTES.redTeal,
  hero: {
    h1Lead: "Towing",
    h1Icon: "tow",
    h1Rest: "Marketing Agency for More Calls, Day and Night",
    lead: [
      "A stranded driver calls the first tow company they trust, often at 2 a.m. on a highway shoulder. We make that your number with towing SEO, ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Google Business Profile optimization",
      },
      ", call-only ads and ",
      {
        href: "/services/towing-company-website-design",
        label: "towing websites built for one-tap calls",
      },
      ".",
    ],
    cta: "Get My Free Towing Audit",
    bento: {
      kind: "photos",
      photoA: {
        src: "/images/free-website/free-towing/emergency-towing.webp",
        position: "52% 50%",
        query: "tow truck near me",
      },
      cardA: {
        icon: "clock",
        title: "More 24/7 tow calls",
        sub: "Every hour your trucks run",
      },
      cardB: {
        icon: "tool",
        title: "More roadside jobs",
        sub: "Lockouts, jump-starts and flats",
      },
      photoB: {
        src: "/images/free-website/free-towing/roadside-assistance.webp",
        position: "56% 40%",
        query: "roadside assistance near me",
      },
    },
  },
  services: {
    title: "Towing Company Marketing Services Built Around the Phone",
    lead: "Six services that make yours the number stranded drivers call first.",
    cta: "Audit My Towing Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Business Profile for Tow Companies",
        desc: "Towing categories, service areas, truck photos and round-the-clock hours set up so you rank on the map wherever drivers break down.",
        points: [
          "Correct towing categories",
          "Truck and scene photos",
          "Suspension recovery included",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Profile optimization",
          },
          {
            href: "/services/gbp-reinstatement-service",
            label: "Suspended profile recovery",
          },
        ],
      },
      {
        icon: "search",
        title: "Towing SEO for Every Town You Cover",
        desc: "A page for every service and each town you tow in, backed by citations and schema, so search sends tow and roadside calls to you.",
        points: [
          "Service and town pages",
          "Citation fixes",
          "Area-by-area rank checks",
        ],
        links: [
          {
            href: "/services/industry/seo-services-for-car-towing",
            label: "Towing SEO services",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Verification support",
          },
        ],
      },
      {
        icon: "target",
        title: "Call-Only Ads for Tow Calls",
        desc: "Search and Local Services campaigns that put a call button in front of nearby drivers, with job-seeker and how-to clicks blocked.",
        points: [
          "Call-only mobile ads",
          "Night and weekend schedules",
          "Calls tracked to each ad",
        ],
        links: [
          { href: "/services/google-ads", label: "Towing Google Ads help" },
        ],
      },
      {
        icon: "monitor",
        title: "Towing Websites Built for One Tap",
        desc: "Fast sites with a sticky call bar, service-area maps and simple pages for towing, roadside help and heavy recovery.",
        points: [
          "Call button on every screen",
          "Service-area pages",
          "Every call tracked",
        ],
        links: [
          {
            href: "/services/towing-company-website-design",
            label: "Towing website design",
          },
        ],
      },
      {
        icon: "call",
        title: "Call Tracking for Tow Dispatch",
        desc: "Tracked numbers show which listing, page or ad brought each call, so you know what keeps the trucks rolling and what to cut.",
        points: [
          "Numbers for each channel",
          "Recorded calls for training",
          "Calls matched to tows",
        ],
        links: [{ href: "#ind-audit", label: "Check my call flow" }],
      },
      {
        icon: "sparkle",
        title: "AI Search for Tow Companies",
        desc: "When a driver asks ChatGPT, Gemini or Google's AI results who can tow now, we put your company in the answer with facts it can check.",
        points: [
          "Matching listings everywhere",
          "Clear service-area pages",
          "Reviews naming real tows",
        ],
        links: [
          { href: "/services/ai-seo-services", label: "AI SEO services" },
          { href: "/services", label: "Every service we offer" },
        ],
      },
    ],
  },
  growth: {
    title: "How We Keep Tow Calls Coming to Your Dispatcher",
    lead: "Maps, AI answers and call ads, all routed to the phone your drivers answer.",
    rows: [
      {
        title: "Towing SEO That Holds the Map for “Tow Truck Near Me”",
        body: [
          "Drivers on the shoulder tap the first map result with good reviews and a 24-hour label. We tune your profile, build pages for each town on your routes and keep reviews and truck photos fresh, so your pin shows wherever cars break down. Check yours with our ",
          {
            href: "/google-maps-business-ranking-tool-online",
            label: "free rank checker",
          },
          ".",
        ],
        points: [
          "Towing categories",
          "Route town pages",
          "Truck photo posts",
          "Spam listings reported",
        ],
        cta: "Check My Tow Map Rank",
        ui: {
          kind: "maps",
          query: "tow truck near me",
          city: "Houston",
          category: "Towing service · Open 24 hours",
        },
      },
      {
        title: "Be the Tow Company AI Names When Someone Is Stranded",
        body: [
          "More drivers now let ChatGPT or Google's AI Overview pick who can tow them right now. Through ",
          {
            href: "/services/ai-seo-services",
            label: "AI search optimization",
          },
          ", we make sure those answers find solid facts about you: matching listings, a clearly stated service area, accurate hours and reviews that describe fast, careful tows.",
        ],
        points: [
          "Listings that match",
          "Service area spelled out",
          "Accurate hours",
          "Reviews about real tows",
        ],
        cta: "Test My AI Visibility",
        ui: {
          kind: "ai",
          query: "who can tow my car tonight near downtown denver",
          intro: "For late-night tows around Denver,",
          bullets: [
            "Flatbed trucks for all-wheel-drive cars",
            "Text updates while the truck is on the way",
            "Lockouts and jump-starts too",
          ],
        },
      },
      {
        title: "Towing Company Google Ads That Ring Your Dispatcher",
        body: [
          "Breakdowns don't wait for business hours. We run call-only ",
          { href: "/services/google-ads", label: "Google Ads" },
          " plus Local Services listings for urgent towing searches around the clock, block clicks that never become tows and trace each call to the search behind it.",
        ],
        points: [
          "Call-only ads",
          "Local Services Ads",
          "Junk-click filters",
          "Every call recorded",
        ],
        cta: "Plan My Tow Ads",
        ui: {
          kind: "calls",
          title: "Tow calls from ads tonight",
          calls: [
            {
              service: "Flatbed tow, highway breakdown",
              source: "Google Ads · Call",
              when: "11:48 PM",
            },
            {
              service: "Lockout in a grocery lot",
              source: "Local Services Ads",
              when: "1:05 AM",
            },
            {
              service: "Accident recovery to body shop",
              source: "Google Ads",
              when: "3:22 AM",
            },
          ],
        },
      },
    ],
  },
  ownLeads: {
    title: "Towing Lead Generation Beyond Motor Club Dispatch",
    body: [
      "Motor club and app dispatch keeps trucks moving, but the rates are set for you and the customer belongs to someone else. We build direct calls from drivers, body shops and fleets who find your name and pick you.",
    ],
    cta: "Build My Direct Tow Calls",
    colShared: "Dispatch-only work",
    colOwn: "Your own direct calls",
    rows: [
      ["Who sets the rate", "The dispatch network", "You do"],
      [
        "Whose name the driver sees",
        "The club or app",
        "Your company and reviews",
      ],
      [
        "Repeat business",
        "Starts over each call",
        "Drivers and shops call you back",
      ],
      [
        "When dispatch slows",
        "Trucks sit idle",
        "Maps, search and ads keep ringing",
      ],
    ],
  },
  specialties: {
    title: "Tow Truck Marketing for Every Call Type You Run",
    lead: "A lockout, a highway accident and a semi recovery come from different searches, so we match each one with its own set of pages, ads and follow-up.",
    photo: {
      src: "/images/free-website/free-towing/heavy-duty-towing.webp",
      alt: "Heavy-duty wrecker lifting the front of a white semi truck on a highway shoulder",
      caption: "Light, medium and heavy-duty towing",
      sub: "Plus roadside help and recovery",
    },
    items: [
      {
        icon: "clock",
        name: "24-Hour Emergency Towing",
        tactic: "Overnight call ads and a round-the-clock map listing",
      },
      {
        icon: "truck",
        name: "Flatbed Towing",
        tactic: "Flatbed pages for all-wheel-drive, luxury and lowered cars",
      },
      {
        icon: "tow",
        name: "Accident Recovery",
        tactic: "Recovery pages and ties with nearby body shops",
      },
      {
        icon: "tool",
        name: "Roadside Assistance",
        tactic: "Lockout, jump-start and flat-tire pages ranked by town",
      },
      {
        icon: "shipping",
        name: "Heavy-Duty & Semi Towing",
        tactic: "Commercial pages and ads aimed at trucking dispatchers",
      },
      {
        icon: "car",
        name: "Junk Car Removal",
        tactic: "Pickup request pages ranked for scrap car searches",
      },
      {
        icon: "building",
        name: "Private Property Towing",
        tactic: "Pages and outreach for property managers and lots",
      },
      {
        icon: "briefcase",
        name: "Fleet & Dealer Accounts",
        tactic: "Business pages and outreach to fleets and dealerships",
      },
    ],
    more: "Run motorcycle towing, winch-outs or equipment transport? We market those too.",
  },
  steps: {
    title: "Towing Internet Marketing, Set Up in Three Steps",
    lead: "We fix what costs you calls tonight, then build the rankings that keep trucks busy next year.",
    items: [
      {
        h: "Free Towing Market Check",
        p: "We search tow and roadside terms from the roads you cover and show where you appear, which companies outrank you and which towns you are missing.",
      },
      {
        h: "We Map Your Routes and Priorities",
        p: "Together we pick the services, towns and hours to push first, weighted toward the calls your trucks handle best, from flatbed tows to heavy recovery.",
      },
      {
        h: "Go Live and Count Every Call",
        p: "Your profile, town pages, call-only ads and post-tow review texts go live in one push. Every month after, you see rankings, calls by source and the tows they turned into.",
      },
    ],
    audit: [
      ["Map spot: tow truck near me", "behind"],
      ["24-hour hours on profile", "gap"],
      ["Calls tracked by source", "open"],
      ["Reviews vs nearby tow companies", "behind"],
    ],
    plan: [
      "Flatbed towing",
      "Roadside help",
      "Accident recovery",
      "Houston",
      "Katy",
    ],
    launch: [
      "Tow profile rebuilt",
      "Route town pages live",
      "Call-only ads running",
      "Review texts after each tow",
    ],
  },
  reviews: {
    title: "Tow Company Owners Back Us With a 5.0 on Google",
    lead: "Every review here comes straight from our Google Business Profile.",
  },
  pricing: {
    title: "Towing Marketing Plans That Flex With Your Fleet",
    compareTitle: "Compare Plans for Small and Large Tow Fleets",
    addOnsTitle: "Add Coverage for New Towns or Trucks",
    customTitle: "Running yards in several cities?",
  },
  faq: {
    title: "Towing Marketing Questions, Answered Straight",
    lead: "Calls, SEO, ads, AI search and plans for tow company owners.",
    items: [
      {
        q: "What does a tow marketing agency handle for a towing company?",
        a: "It keeps your phones ringing with direct calls. That covers map rankings for tow and roadside searches, towing SEO pages built around each service and the towns you work, call-only ads, tracked phone numbers, steady reviews and a website drivers can call from with one tap.",
      },
      {
        q: "How to advertise a towing business: where should a new tow company start?",
        a: "Start where stranded drivers look: a complete Google Business Profile with round-the-clock hours, a phone-friendly site with one-tap calling and reviews from every tow. Then add call-only ads for nights and weekends, plus pages for every town on your routes.",
      },
      {
        q: "How do towing companies get more direct cash calls?",
        a: "Be the name drivers find and trust on their own. Rank on the map for urgent tow searches, run call-only ads during your busiest hours, answer every call fast and collect reviews. Direct callers pay your rates, not a dispatch network's.",
      },
      {
        q: "Is towing SEO worth it if I already run Google Ads?",
        a: "Yes. Ads stop the moment you pause them, while towing SEO and a strong map listing keep the phone ringing with no per-click fee. Rankings also feed the AI answers drivers read, so the two together cover more of the searches in your area.",
      },
      {
        q: "Should I hire a towing advertising agency or run Google Ads myself?",
        a: "Towing ads burn through clicks fast without tight settings. An agency adds negative keywords, call-only formats, hour-by-hour schedules and call tracking. We manage the account, and your ad spend reaches Google with a 0% markup from us.",
      },
      {
        q: "Do Local Services Ads work for tow truck companies?",
        a: "Often, yes. Local Services Ads sit at the top of urgent searches and charge by the lead, which suits emergency towing. We usually pair them with call-only search ads so you control hours, towns and services, then compare which brings better calls.",
      },
      {
        q: "Will AI assistants recommend my tow company to stranded drivers?",
        a: "They can, when the facts about you match. We keep your name, number and hours consistent everywhere, spell out your service area, earn reviews that mention real tows and answer common roadside questions on your site, giving AI tools solid reasons to suggest you.",
      },
      {
        q: "How much does a towing marketing company cost at Zonic Media?",
        a: "Plans run $297, $750 or $1,500 monthly with no long contract to sign, and ad spend is billed at a 0% markup. One-truck operators often start on the first tier; fleets running ads across several towns usually need more.",
      },
      {
        q: "Can you bring in heavy-duty and semi recovery work?",
        a: "Yes. Heavy-duty calls come from trucking dispatchers, fleet managers and highway incidents, so we build dedicated recovery pages, list your equipment and run ads aimed at commercial searches. Those jobs tend to be larger, so we track them separately in your reports.",
      },
      {
        q: "How long until a towing company sees more calls?",
        a: "Call-only ads and profile fixes can bring calls within weeks. Map and organic rankings usually build over a few months, depending on how many tow companies compete near you. Your monthly report shows calls by source, so progress is easy to follow.",
      },
    ],
  },
  audit: {
    title: "See Which Tow Calls You're Missing With a Free Audit",
    lead: [
      "Send your company name and the roads you cover. We'll show where you appear for tow and roadside searches, compare your profile, ",
      {
        href: "/services/towing-company-website-design",
        label: "towing website",
      },
      " and reviews against the companies above you, and point out the first fixes. Towing is one of the ",
      { href: "/industries", label: "industries we market" },
      ".",
    ],
    points: [
      "Month-to-month terms",
      "From $297 a month",
      "0% markup on ad spend",
      "Reinstatement on every tier",
    ],
    form: {
      formType: "towing-marketing",
      badge: "Free towing audit",
      title: "Claim Your Free Towing Marketing Audit",
      subtitle: "Free, no contract required.",
      submitText: "Send My Towing Audit",
      messageLabel: "Your service area and tow services",
      messagePlaceholder:
        "Towns and highways you cover, truck types, and whether you run 24/7",
    },
  },
  banner: {
    title: "Be the Tow Company Drivers Call First",
    lead: "Book a free audit covering your map listing, ads and calls.",
    icons: ["tow", "clock"],
  },
};
