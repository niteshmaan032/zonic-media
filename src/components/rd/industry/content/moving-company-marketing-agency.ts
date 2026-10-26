import { PALETTES } from "../palettes";
import type { IndustryContent } from "../types";

/* MOVING COMPANY MARKETING AGENCY — redesign draft content (25 Oct 2026).

   Rank safety: Semrush API units are exhausted, so no ranking report was
   pulled. The live title's core term ("Moving Company Marketing Agency")
   stays in the new title, and every phrase in the live keywords meta is
   carried by the title, H1, an H2/H3 or an FAQ question.
   - Web research (25 Oct): local moves convert on Maps, reviews and quick
     replies; long-distance moves on licensing, written quotes and process
     pages, so top agencies build separate local, long-distance, route and
     commercial pages; shared aggregator leads go to several movers at
     once; demand climbs from late winter to a summer peak, so SEO starts
     months ahead; Local Services Ads and AI recommendations are growing.
     Common questions: when to start for peak season, separate pages,
     licensing badges, reviews needed, commercial moves, AI search.
   No price estimates on the page (owner note).
   Fresh wording only: nothing reused from the live page or other drafts. */

export const CONTENT: IndustryContent = {
  draftSlug: "moving-company-marketing-agency-2",
  liveUrl: "/services/moving-company-marketing-agency",
  niche: "Moving Company",
  meta: {
    title: "Moving Company Marketing Agency | Mover SEO, Ads & Quote Leads",
    description:
      "Moving company marketing agency for local and long-distance movers: moving company SEO, Google Maps, Google Ads and reviews that turn searches into quote requests.",
    keywords: [
      "moving company marketing agency",
      "how to market a moving company",
      "moving company marketing",
      "moving company seo",
      "moving company google ads",
      "moving company lead generation",
      "moving company advertising",
      "movers marketing agency",
      "moving company marketing company",
      "moving company advertising agency",
      "moving company internet marketing",
      "marketing for movers",
      "movers seo",
      "moving leads",
    ],
  },
  palette: PALETTES.blueOrange,
  hero: {
    h1Lead: "Moving Company",
    h1Icon: "moving",
    h1Rest: "Marketing Agency for More Quote Requests",
    lead: [
      "People planning a move compare a few movers in one evening and choose on reviews, clear answers and a fast quote. We get you on that shortlist with moving company SEO, ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Google Business Profile optimization",
      },
      ", seasonal ads and a ",
      { href: "/services/web-design", label: "website built for quotes" },
      ".",
    ],
    cta: "Get My Free Mover Audit",
    bento: {
      kind: "photos",
      photoA: {
        src: "/images/free-website/free-moving-company/local-moving.webp",
        position: "50% 50%",
        query: "local movers near me",
      },
      cardA: {
        icon: "home",
        title: "More local move quotes",
        sub: "Apartments, houses and offices",
      },
      cardB: {
        icon: "moving",
        title: "More long-distance jobs",
        sub: "Interstate moves booked ahead",
      },
      photoB: {
        src: "/images/free-website/free-moving-company/long-distance-moving.webp",
        position: "52% 50%",
        query: "long distance movers",
      },
    },
  },
  services: {
    title: "Marketing Services for Movers, From First Search to Booked Move",
    lead: "Digital marketing services that keep your crew on every mover shortlist.",
    cta: "Audit My Moving Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Maps for Moving Companies",
        desc: "We set up moving categories, service areas, crew and truck photos and a weekly posting rhythm so your listing ranks for nearby moving searches.",
        points: [
          "Local and long-distance services",
          "Crew and truck photos",
          "Verification support",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Profile optimization",
          },
          {
            href: "/services/gmb-verification-help",
            label: "GMB verification support",
          },
        ],
      },
      {
        icon: "search",
        title: "Moving Company SEO for Local and Interstate Work",
        desc: "Separate pages for local moves, long-distance routes, packing and storage, plus citations and schema, so each kind of move finds its page.",
        points: [
          "Local and route pages",
          "Licensing details shown",
          "City-by-city rank reports",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "Local search for movers and home pros",
          },
        ],
      },
      {
        icon: "target",
        title: "Moving Company PPC and Google Ads",
        desc: "High-intent moving searches get search and Local Services campaigns, scheduled around peak season and filtered to skip truck-rental and job clicks.",
        points: [
          "Peak-season scheduling",
          "Local Services Ads",
          "Quote calls tracked",
        ],
        links: [
          { href: "/services/google-ads", label: "Google Ads for movers" },
        ],
      },
      {
        icon: "monitor",
        title: "Quote-Ready Mover Websites",
        desc: "Fast mobile sites with a short quote form, click-to-call and clear pages for each service, so visitors ask for a quote before leaving.",
        points: [
          "Short quote request form",
          "Licensing and insurance shown",
          "Calls and forms tracked",
        ],
        links: [
          { href: "/services/web-design", label: "Website design for movers" },
          { href: "/moving-company-website-design-agency-us/offer", label: "Free moving company website" },
        ],
      },
      {
        icon: "star",
        title: "Reviews After Every Move",
        desc: "Once the truck is unloaded, your customer is invited by text to leave a Google review; we draft polite replies for you.",
        points: [
          "Requests on move day",
          "Replies in your voice",
          "Reviews on your quote page",
        ],
        links: [{ href: "#ind-audit", label: "How do my reviews compare?" }],
      },
      {
        icon: "sparkle",
        title: "AI Search Visibility for Movers",
        desc: "People ask ChatGPT, Gemini and AI Overviews for reliable movers; we give those tools verified facts so your company comes up.",
        points: [
          "Matching listings everywhere",
          "Clear service and route pages",
          "Reviews that describe moves",
        ],
        links: [
          { href: "/services/ai-seo-services", label: "AI SEO services" },
          { href: "/services", label: "See all our services" },
        ],
      },
    ],
  },
  growth: {
    title: "How Our Moving Company SEO Agency Gets You Shortlisted",
    lead: "Maps, AI answers and seasonal ads, each one aimed at a quote request.",
    rows: [
      {
        title: "Moving Company SEO That Wins “Movers Near Me”",
        body: [
          "Local moves usually start on the map, where people compare stars, photos and how quickly a mover replies. We sharpen your profile, add town pages across your service area and keep move-day reviews flowing, with ",
          {
            href: "/services/gbp-reinstatement-service",
            label: "suspended listing recovery",
          },
          " included if Google ever pulls it.",
        ],
        points: [
          "Moving categories",
          "Town service pages",
          "Crew photo posts",
          "Quick review replies",
        ],
        cta: "Check My Mover Map Rank",
        ui: {
          kind: "maps",
          query: "movers near me",
          city: "Nashville",
          category: "Moving company · Online quotes",
        },
      },
      {
        title: "Get Suggested When People Ask AI for Reliable Movers",
        body: [
          "People planning a move now turn to ChatGPT and Google's AI Overview to find movers they can trust. Using ",
          {
            href: "/services/ai-seo-services",
            label: "AI search optimization",
          },
          ", we give those assistants details to confirm: matching listings, licensing details, reviews that describe real moves and clear pages for each service you offer.",
        ],
        points: [
          "Consistent listings",
          "Licensing on display",
          "Reviews about real moves",
          "Service FAQ pages",
        ],
        cta: "See If AI Suggests Us",
        ui: {
          kind: "ai",
          query: "reliable long distance movers from chicago to denver",
          intro: "For long-distance moves out of Chicago,",
          bullets: [
            "Licensed for interstate moves",
            "Written, itemized moving quotes",
            "Packing and storage available",
          ],
        },
      },
      {
        title: "Moving Company Advertising Timed to Peak Season",
        body: [
          "Moving demand swings with the seasons, so your ads should too. We run search and Local Services Ads hardest when people plan moves, ease off in quiet weeks, block truck-rental and job clicks, and trace every call and quote request to its source.",
        ],
        points: [
          "Seasonal ad schedules",
          "Local Services Ads",
          "Wasted-click filters",
          "Calls and forms tracked",
        ],
        cta: "Plan My Moving Ads",
        ui: {
          kind: "calls",
          title: "Quote calls from ads today",
          calls: [
            {
              service: "Three-bedroom house, local move",
              source: "Google Ads · Call",
              when: "9:14 AM",
            },
            {
              service: "Long-distance move to Denver",
              source: "Local Services Ads",
              when: "12:30 PM",
            },
            {
              service: "Small office relocation",
              source: "Google Ads",
              when: "4:52 PM",
            },
          ],
        },
      },
    ],
  },
  ownLeads: {
    title: "Moving Company Lead Generation Without Shared Quote Lists",
    body: [
      "Shared lead sites sell one move to several companies at once, so every mover races to call first and quote lowest. We build quote requests that come only to you, earned by your rankings, your ads and a site you keep.",
    ],
    cta: "Get Quote Requests of My Own",
    colShared: "Shared moving leads",
    colOwn: "Requests you own",
    rows: [
      ["Who else gets the request", "Several movers at once", "No one else"],
      [
        "How you win the job",
        "Fastest call and lowest quote",
        "They chose you from your reviews",
      ],
      [
        "What your spend builds",
        "Nothing once the lead is used",
        "Rankings and reviews that last",
      ],
      [
        "In the off-season",
        "Fewer leads, same race",
        "Past customers and referrals return",
      ],
    ],
  },
  specialties: {
    title: "Marketing for Every Kind of Move You Handle",
    lead: "A studio apartment, a cross-country family move and an office relocation start with different searches, so each gets its own plan.",
    photo: {
      src: "/images/free-website/free-moving-company/commercial-moving.webp",
      alt: "Movers wheeling boxes and a plant through an office during a commercial move",
      caption: "Residential, long-distance and commercial moves",
      sub: "Plus packing, storage and specialty items",
    },
    items: [
      {
        icon: "home",
        name: "Local Residential Moves",
        tactic: "Town pages and a top map spot nearby",
      },
      {
        icon: "moving",
        name: "Long-Distance & Interstate",
        tactic: "Route pages from your city to popular destinations",
      },
      {
        icon: "building",
        name: "Apartment & Condo Moves",
        tactic: "Pages covering elevators, stairs and short-notice moves",
      },
      {
        icon: "briefcase",
        name: "Office & Commercial Moves",
        tactic: "Business pages and outreach to property managers",
      },
      {
        icon: "layers",
        name: "Packing & Unpacking",
        tactic: "Add-on offers in quote forms and follow-ups",
      },
      {
        icon: "key",
        name: "Moving Storage",
        tactic: "Storage pages paired with every long-distance quote",
      },
      {
        icon: "heart",
        name: "Senior & Downsizing Moves",
        tactic: "Calm, detailed pages written for families and caregivers",
      },
      {
        icon: "shield",
        name: "Piano & Specialty Items",
        tactic: "Specialty pages for pianos, safes and antiques",
      },
    ],
    more: "Offer junk removal, labor-only help or military moves? We market those too.",
  },
  steps: {
    title: "Moving Company Internet Marketing, Ready Before Peak Season",
    lead: "Start before spring, so rankings and reviews are in place when the busiest search weeks arrive.",
    items: [
      {
        h: "We Audit Your Moving Market",
        p: "We search local and long-distance moving terms from your area, then show where you rank, which movers outrank you and where quote requests slip away.",
      },
      {
        h: "We Plan Around Your Seasons",
        p: "Together we choose the move types, towns and routes to push first, timed so your pages and ads are running ahead of your busiest months.",
      },
      {
        h: "We Launch and Track Every Quote",
        p: "Profile edits, service pages, ads and review requests all start in one launch. You then get a monthly view of rankings, calls, quote requests and the moves they turned into.",
      },
    ],
    audit: [
      ["Map rank: movers near me", "behind"],
      ["Profile services and areas", "gap"],
      ["Online quote form", "open"],
      ["Reviews vs nearby movers", "behind"],
    ],
    plan: ["Local moves", "Long-distance", "Packing", "Nashville", "Franklin"],
    launch: [
      "Mover profile rebuilt",
      "Route pages published",
      "Seasonal ads scheduled",
      "Move-day review texts on",
    ],
  },
  reviews: {
    title: "Google Reviews From Owners Who Hired Us",
    lead: "Unedited feedback from business owners, as posted on our Google profile.",
  },
  pricing: {
    title: "Moving Company Marketing Plans Through Every Season",
    compareTitle: "Compare Plans for Local and Long-Distance Movers",
    addOnsTitle: "Add Campaigns Before Moving Season Peaks",
    customTitle: "Running crews from several locations?",
  },
  faq: {
    title: "Moving Company Marketing Questions, Answered",
    lead: "Leads, SEO, ads, seasons and AI search for moving company owners.",
    items: [
      {
        q: "What does a movers marketing agency do for a moving company?",
        a: "It fills your calendar with quote requests that come straight to you. That covers map rankings, moving company SEO pages for local and long-distance work, seasonal Google Ads, a website built for quotes, steady move-day reviews and a place in AI recommendations.",
      },
      {
        q: "How to market a moving company: what should come first?",
        a: "Start with what people compare: a complete Google Business Profile, recent reviews that describe real moves and a mobile site with a short quote form. Then add separate local and long-distance pages, seasonal ads and follow-ups to past customers and old quotes.",
      },
      {
        q: "How can movers get more leads in the slow season?",
        a: "Use the quiet months to build. Publish route and service pages, collect reviews, follow up with past quotes and customers, and reach property managers and agents who refer moves. Keep ads on your best searches so rankings carry the busy months.",
      },
      {
        q: "Do long-distance moves need their own pages on my site?",
        a: "Yes. People booking a cross-country move search differently and want to see licensing, insurance and how the process works, while local customers care about speed and reviews. Separate pages let each rank for its own searches and answer the right questions.",
      },
      {
        q: "Do I need a moving company advertising agency for Google Ads?",
        a: "Usually, yes. Moving searches attract truck-rental shoppers and job seekers, so campaigns need negative keywords, seasonal schedules and call tracking to turn clicks into quotes. We run all of that with a 0% markup on your ad spend.",
      },
      {
        q: "Is moving company SEO worth it compared with buying leads?",
        a: "For most movers, yes. Bought leads end when you stop paying and go to several companies, while rankings keep sending quote requests that come only to you. SEO also lifts your map listing and shapes what AI tools say when people look for a mover.",
      },
      {
        q: "Can AI assistants like ChatGPT recommend my moving company?",
        a: "Yes, when they can confirm who you are. We keep your listings consistent, show your licensing, earn reviews that describe real moves and add plain answers about your services and routes to your site. That gives AI tools solid reasons to name you.",
      },
      {
        q: "What does a moving company marketing company charge at Zonic Media?",
        a: "Plans cost $297, $750 or $1,500 each month, all month to month, with ad spend billed at a 0% markup. Smaller local movers usually begin on the first tier; companies running long-distance routes and seasonal ads tend to need more.",
      },
      {
        q: "When should movers start marketing for peak season?",
        a: "A few months before it. Rankings and review counts take time to build, so starting in winter means your pages, profile and ads are ready when spring and summer searches climb. Ads can then scale up quickly as demand rises.",
      },
      {
        q: "How long until a moving company gets more quote requests?",
        a: "Ads and profile fixes can bring requests within weeks. Rankings for local and long-distance searches take several months, and longer where many movers compete. Your monthly report shows calls, quote requests and booked moves, so progress stays clear.",
      },
    ],
  },
  audit: {
    title: "Free Moving Company Marketing Audit Before Peak Season",
    lead: [
      "Tell us the towns and routes you serve. We check your map position for moving searches, compare your profile, ",
      { href: "/services/web-design", label: "quote form and website" },
      " and reviews with the movers ranked above you, and list what to fix first. Movers are one of the ",
      { href: "/industries", label: "20+ trades and niches we market" },
      ".",
    ],
    points: [
      "Month-to-month billing",
      "Starts at $297 per month",
      "0% ad-spend markup",
      "Profile reinstatement included",
    ],
    form: {
      formType: "moving-company-marketing",
      badge: "Free mover audit",
      title: "Your Free Moving Company Marketing Audit",
      subtitle: "Free, and you're never locked in.",
      submitText: "Send My Mover Audit",
      messageLabel: "Your service area and move types",
      messagePlaceholder:
        "Towns and routes you cover, local or long-distance focus, and your busiest months",
    },
  },
  banner: {
    title: "Be the Mover People Book Before They Pack",
    lead: "Claim a free audit and find out what brings quote requests soonest.",
    icons: ["moving", "home"],
  },
};
