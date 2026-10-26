import { PALETTES } from "../palettes";
import type { IndustryContent } from "../types";

/* REAL ESTATE MARKETING AGENCY — redesign draft content (25 Oct 2026).

   Rank safety: Semrush API units are exhausted, so no ranking report was
   pulled. The live title's core term ("Real Estate Marketing Agency USA")
   stays in the new title, and every phrase in the live keywords meta is
   carried by the title, H1, an H2/H3 or an FAQ question.
   - Web research (25 Oct): agents win sellers through the Map Pack, a
     complete Business Profile with weekly posts and reviews, home
     valuation offers and neighborhood pages; buyers and sellers now ask
     AI assistants for an agent by neighborhood, first-time-buyer help or
     home type; housing ads follow Google's restricted-targeting rules;
     top agency pages cover seller vs buyer leads, IDX sites, video and
     shared portal leads. No market statistics on the page (owner note).
   Fresh wording only: nothing reused from the live page or other drafts. */

export const CONTENT: IndustryContent = {
  draftSlug: "real-estate-marketing-agency-2",
  liveUrl: "/services/real-estate-marketing-agency",
  niche: "Real Estate",
  meta: {
    title: "Real Estate Marketing Agency USA | Realtor SEO, Ads & Leads",
    description:
      "Real estate marketing agency for agents, teams and brokerages: Google Business Profile, real estate SEO, Google Ads and websites that win seller and buyer leads.",
    keywords: [
      "real estate marketing agency",
      "real estate marketing agency usa",
      "real estate digital marketing agency",
      "best real estate marketing agency",
      "real estate marketing companies in usa",
      "real estate marketing agency near me",
      "marketing agency for real estate",
      "real estate seo",
      "real estate video marketing agency",
      "real estate marketing company",
      "real estate advertising agency",
      "real estate internet marketing",
      "real estate lead generation",
      "realtor marketing",
      "seo for realtors",
      "real estate seller leads",
    ],
  },
  palette: PALETTES.emeraldIndigo,
  hero: {
    h1Lead: "Real Estate",
    h1Icon: "key",
    h1Rest: "Marketing Agency for More Listings and Buyer Leads",
    lead: [
      "Sellers search “realtor near me” long before they sign a listing agreement, and buyers ask AI tools who knows their neighborhood. We put your name in both answers with real estate SEO, ",
      {
        href: "/services/google-business-profile-services-real-estate-agents",
        label: "Google Business Profile management for agents",
      },
      ", compliant Google Ads and ",
      {
        href: "/services/real-estate-agent-website-design",
        label: "agent websites that capture every inquiry",
      },
      ".",
    ],
    cta: "Get My Free Agent Audit",
    bento: {
      kind: "photos",
      photoA: {
        src: "/images/free-website/free-real-estate/sell-a-home.webp",
        position: "66% 45%",
        query: "realtor to sell my house",
      },
      cardA: {
        icon: "key",
        title: "More seller listings",
        sub: "From owners getting ready to list",
      },
      cardB: {
        icon: "users",
        title: "More buyer inquiries",
        sub: "Showing requests straight from Google",
      },
      photoB: {
        src: "/images/free-website/free-real-estate/buy-a-home.webp",
        position: "34% 45%",
        query: "real estate agent near me",
      },
    },
  },
  services: {
    title: "Real Estate Digital Marketing\nServices for Agents and Teams",
    lead: "Six channels that bring buyers and sellers to you directly.",
    cta: "Audit My Real Estate Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Business Profile for Realtors",
        desc: "Your agent or brokerage profile set up with the right categories, service areas, listing photos and weekly posts, so you show on the map.",
        points: [
          "Agent and office profiles",
          "Weekly listing posts",
          "Verification handled",
        ],
        links: [
          {
            href: "/services/google-business-profile-services-real-estate-agents",
            label: "GBP services for agents",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Profile verification help",
          },
        ],
      },
      {
        icon: "search",
        title: "Real Estate SEO by Neighborhood",
        desc: "Community, condo and listing pages plus local citations that help your site rank when people search the towns and subdivisions you sell.",
        points: [
          "Neighborhood and condo pages",
          "Citation and schema cleanup",
          "Rankings tracked by area",
        ],
        links: [
          {
            href: "/services/industry/real-estate-seo-services",
            label: "Real estate SEO services",
          },
          {
            href: "/services/local-seo-for-small-business",
            label: "Local search for service businesses",
          },
        ],
      },
      {
        icon: "target",
        title: "Google Ads for Listing and Buyer Leads",
        desc: "Search campaigns on home value, selling and buying searches, built inside Google's housing ad rules and sent to pages that capture contacts.",
        points: [
          "Housing-policy compliant setup",
          "Valuation and buyer funnels",
          "Leads tracked to appointments",
        ],
        links: [
          { href: "/services/google-ads", label: "Real estate Google Ads" },
        ],
      },
      {
        icon: "monitor",
        title: "Real Estate Agent Website Design",
        desc: "Fast agent and team sites with listing search, home valuation forms and neighborhood guides, so every visit can start a conversation.",
        points: [
          "Home valuation form",
          "Listing and area pages",
          "Call and form tracking",
        ],
        links: [
          {
            href: "/services/real-estate-agent-website-design",
            label: "Websites for agents",
          },
          { href: "/services/web-design", label: "Custom web design" },
        ],
      },
      {
        icon: "star",
        title: "Reviews From Every Closing",
        desc: "A short text after each closing invites happy clients to review you on Google; we write your replies, so trust grows deal by deal.",
        points: [
          "Requests after closing",
          "Reply drafts in your voice",
          "Review feed on your site",
        ],
        links: [{ href: "#ind-audit", label: "Compare my reviews" }],
      },
      {
        icon: "sparkle",
        title: "AI Search Visibility for Agents",
        desc: "ChatGPT, Gemini and Google AI Overviews recommend agents whose details check out. We line yours up so you get named for local agent questions.",
        points: [
          "Matching profiles everywhere",
          "Area expertise pages",
          "FAQ answers AI can cite",
        ],
        links: [
          { href: "/services/ai-seo-services", label: "AI SEO services" },
        ],
      },
    ],
  },
  growth: {
    title: "How Our Marketing Agency for Real Estate Wins You Clients",
    lead: "Maps, AI answers and a site that captures contacts, each one feeding the next.",
    rows: [
      {
        title: "Show Up on the Map When Sellers Search “Realtor Near Me”",
        body: [
          "Homeowners thinking about selling often check the map first and call an agent with strong, recent reviews nearby. We handle your ",
          {
            href: "/local-seo-google-business-optimization",
            label: "profile optimization",
          },
          ", add a page for each area you farm and keep posts fresh, with ",
          {
            href: "/services/gbp-reinstatement-service",
            label: "suspension recovery",
          },
          " if Google ever pulls your listing.",
        ],
        points: [
          "Agent-specific categories",
          "Area farm pages",
          "Listing photo posts",
          "Fresh review requests",
        ],
        cta: "Check My Map Ranking",
        ui: {
          kind: "maps",
          query: "realtor near me",
          city: "Scottsdale",
          category: "Real estate agent · By appointment",
        },
      },
      {
        title: "Be the Agent ChatGPT Recommends in Your Area",
        body: [
          "Buyers and sellers now ask AI assistants which agent knows their neighborhood. With ",
          {
            href: "/services/ai-seo-services",
            label: "AI search optimization",
          },
          ", we hand those tools details they can confirm: matching profiles, detailed reviews from past clients and clear pages about the areas and home types you know best.",
        ],
        points: [
          "Consistent agent profiles",
          "Reviews naming neighborhoods",
          "Area expertise pages",
          "Plain-answer FAQs",
        ],
        cta: "See If AI Recommends Me",
        ui: {
          kind: "ai",
          query: "best real estate agent in scottsdale for first-time buyers",
          intro: "For first-time buyers in Scottsdale,",
          bullets: [
            "Patient guidance for first-time buyers",
            "Knows the local neighborhoods well",
            "Quick replies to showing requests",
          ],
        },
      },
      {
        title: "A Website That Turns Browsers Into Seller Appointments",
        body: [
          "Most visitors aren't ready to call on day one. Our ",
          {
            href: "/services/real-estate-agent-website-design",
            label: "real estate agent website design",
          },
          " pairs a home valuation form, saved-search signups and neighborhood guides with fast pages, so you capture the contact and follow up while they decide.",
        ],
        points: [
          "Home valuation form",
          "Saved-search signups",
          "Neighborhood guides",
          "Click-to-call on mobile",
        ],
        cta: "Plan My Agent Website",
        ui: {
          kind: "website",
          url: "yourcompany.com",
          headline: "Curious what your home is worth?",
          services: [
            "Sell my home",
            "Search listings",
            "Neighborhood guides",
            "Book a showing",
          ],
        },
      },
    ],
  },
  ownLeads: {
    title: "Real Estate Lead Generation You Don't Share With Other Agents",
    body: [
      "Portals and shared lead sites hand one buyer to several agents, so the quickest dialer wins and the rest have paid for nothing. We build seller and buyer leads that reach only you, through search rankings, your own ads and a site that stays yours.",
    ],
    cta: "Build My Own Lead Flow",
    colShared: "Rented portal leads",
    colOwn: "Leads you own",
    rows: [
      [
        "Who gets the inquiry",
        "Several agents at once",
        "Only you or your team",
      ],
      ["Whose brand they remember", "The portal's", "Your name and reviews"],
      [
        "Seller leads",
        "Few and far between",
        "Valuation requests from your site",
      ],
      [
        "If you pause spending",
        "The inquiries dry up",
        "Your rankings and profile stay put",
      ],
    ],
  },
  specialties: {
    title: "One Real Estate Marketing Company for Every Side of the Deal",
    lead: "Listing, buying, luxury and relocation clients find agents through different routes, so we give each group dedicated pages, ads and follow-up.",
    photo: {
      src: "/images/free-website/free-real-estate/luxury-listings.webp",
      alt: "Real estate agent showing a couple a modern home with a water view",
      caption: "Listings, buyers and luxury homes",
      sub: "For solo agents, teams and brokerages",
    },
    items: [
      {
        icon: "key",
        name: "Seller & Listing Leads",
        tactic: "Home valuation pages and seller-intent search ads",
      },
      {
        icon: "home",
        name: "Buyer Representation",
        tactic: "Neighborhood guides with saved-search signups and alerts",
      },
      {
        icon: "award",
        name: "Luxury Listings",
        tactic: "Showcase listing pages and polished profile posts",
      },
      {
        icon: "users",
        name: "First-Time Buyers",
        tactic: "Plain-language guides that answer first-home questions",
      },
      {
        icon: "building",
        name: "Condos & New Construction",
        tactic: "Building and community pages ranked by name",
      },
      {
        icon: "moving",
        name: "Relocation Clients",
        tactic: "Moving-here guides for buyers from other cities",
      },
      {
        icon: "briefcase",
        name: "Teams & Brokerages",
        tactic: "Agent bios and office pages under one brand",
      },
      {
        icon: "camera",
        name: "Listing Videos & Tours",
        tactic: "Walkthrough videos posted to your profile and pages",
      },
    ],
    more: "Work with investors, rentals or land? We market those too.",
  },
  steps: {
    title: "Real Estate Internet Marketing, Live in Three Steps",
    lead: "Profile and page fixes bring early inquiries; search presence follows.",
    items: [
      {
        h: "We Audit Your Market Presence",
        p: "We search the areas you sell the way sellers and buyers do, then show where you appear, which agents outrank you and what is costing you inquiries.",
      },
      {
        h: "We Pick Your Farm Areas and Focus",
        p: "Together we choose the neighborhoods, client types and campaigns to push first, weighted toward the listings and home types you want more of.",
      },
      {
        h: "We Launch and Send a Monthly Report",
        p: "Profile updates, area pages, ads and review requests switch on. Each month you see rankings, inquiries and appointments in one clear report.",
      },
    ],
    audit: [
      ["Map spot: realtor near me", "behind"],
      ["Agent Business Profile", "gap"],
      ["Home valuation capture", "open"],
      ["Reviews vs nearby agents", "behind"],
    ],
    plan: [
      "Seller leads",
      "First-time buyers",
      "Scottsdale",
      "Tempe",
      "Valuation ads",
    ],
    launch: [
      "Agent profile rebuilt",
      "Area pages published",
      "Valuation form tracked",
      "Closing review texts on",
    ],
  },
  reviews: {
    title: "Before You Hire Us, Read Our Google Reviews",
    lead: "Feedback from real clients, exactly as they posted it.",
  },
  pricing: {
    title: "Real Estate Marketing Plans for Agents and Teams",
    compareTitle: "Compare Plans for Agents, Teams and Brokerages",
    addOnsTitle: "Add Campaigns Before a Big Listing Push",
    customTitle: "Running a brokerage with several offices?",
  },
  faq: {
    title: "Real Estate Marketing Questions From Agents",
    lead: "Leads, SEO, ads, AI search and pricing, explained without jargon.",
    items: [
      {
        q: "What does a marketing agency for real estate do for agents?",
        a: "It gets sellers and buyers to contact you instead of a competitor. The work covers your map ranking, real estate SEO for the areas you sell, compliant Google Ads, a site that captures contacts, steady reviews and a presence in ChatGPT and AI Overviews.",
      },
      {
        q: "How do I choose the best real estate marketing agency for my team?",
        a: "Pick one that ranks agents on Google Maps, builds area pages and runs compliant housing ads, with month-to-month terms and plain reporting on inquiries and appointments. Ask how they produce seller leads, not just buyer traffic, and who owns the website and profiles.",
      },
      {
        q: "How can real estate agents get more seller leads?",
        a: "Give homeowners a reason to reach out before they list. A home valuation page, seller-focused ads, a strong Business Profile with recent reviews and helpful guides about selling in your area all bring owners to you months before they choose an agent.",
      },
      {
        q: "Is real estate SEO worth it for a solo agent?",
        a: "Yes, with focus. A solo agent can't outrank the big portals for a whole city, but can win the map and organic results for a few neighborhoods, condo buildings or home types. That local focus also feeds the AI answers buyers and sellers now read.",
      },
      {
        q: "Should I hire a real estate advertising agency for Google Ads?",
        a: "It helps, because housing ads follow special rules. Google limits targeting by age, gender, parental or marital status and zip code, so campaigns rely on search intent, strong landing pages and clean tracking. We handle that setup, and ad spend carries a 0% markup.",
      },
      {
        q: "Can ChatGPT and Google AI Overviews point clients to my real estate business?",
        a: "Yes. AI tools favor agents whose details line up across the web, so we make your profiles consistent, earn detailed reviews that mention neighborhoods and home types, and publish clear answers to buyer and seller questions on your site. That gives them good reasons to suggest you.",
      },
      {
        q: "Do I need a real estate video marketing agency for listing videos?",
        a: "Not for search. If you or a videographer already film walkthroughs and area tours, we publish them where they help you rank: your Google Business Profile, listing pages and neighborhood guides, with titles and descriptions written around what local buyers search.",
      },
      {
        q: "Is there a real estate marketing agency near me, or do you work remotely?",
        a: "Our team is based in Delaware and serves agents and brokerages nationwide. Everything runs through shared reports, calls and screen shares, and we research your local market before any work begins, so distance never slows things down.",
      },
      {
        q: "How much do real estate marketing companies in USA cities charge?",
        a: "With us, plans start at $297 a month, with $750 and $1,500 tiers for bigger goals, and none of them lock you in. Ad spend passes through to Google at 0% markup. Solo agents covering a few neighborhoods usually start small; teams running ads across several areas need more.",
      },
      {
        q: "How long does real estate marketing take to bring inquiries?",
        a: "Profile fixes and ads can bring inquiries within weeks. Neighborhood rankings take longer, often several months, and more agents competing there means more time. Seller leads also take longer because owners research early, which is why the valuation funnel starts right away.",
      },
    ],
  },
  audit: {
    title: "Get a Free Real Estate Marketing Audit for Your Farm Area",
    lead: [
      "Share the neighborhoods you work. We'll look at your map position for agent searches, compare your Business Profile, ",
      { href: "/services/web-design", label: "website and lead capture" },
      " and reviews against the top local agents, then rank the changes worth making first.",
    ],
    points: [
      "No long contracts",
      "Plans begin at $297 monthly",
      "Ad spend at 0% markup",
      "Suspended profiles reinstated",
    ],
    form: {
      formType: "real-estate-marketing",
      badge: "Free agent audit",
      title: "Request a Free Audit for Your Real Estate Business",
      subtitle: "Free and pressure-free.",
      submitText: "Send My Agent Audit",
      messageLabel: "Your market and goals",
      messagePlaceholder:
        "Neighborhoods you sell, whether you want more sellers or buyers, and team size",
    },
  },
  banner: {
    title: "Be the Agent Sellers Call Before They List",
    lead: "Start with a free audit and see which changes bring inquiries first.",
    icons: ["key", "home"],
  },
};
