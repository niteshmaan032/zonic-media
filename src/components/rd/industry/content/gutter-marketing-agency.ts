import { PALETTES } from "../palettes";
import type { IndustryContent } from "../types";

/* GUTTER MARKETING AGENCY — redesign draft content (25 Oct 2026).

   Rank safety: Semrush API units were exhausted, so no ranking report or
   volumes were pulled. The live title's core term ("Gutter Marketing
   Agency") leads the new title, and every phrase in the live keywords meta
   sits in the title, H1, an H2/H3 or an FAQ question.
   Web research (25 Oct): top agency pages cover Maps/GBP, service-line
   pages (installs, guards, cleaning, repair), seasonal campaigns timed to
   storms and leaf fall, reviews, and AI search; owner questions centre on
   competing with national guard brands, which service line to market
   first and how seasonal the work is. Homeowners search "gutter
   installation near me", "gutter cleaning near me" and guard comparisons.
   Fresh wording only: nothing reused from the live page or other drafts. */

export const CONTENT: IndustryContent = {
  draftSlug: "gutter-marketing-agency-2",
  liveUrl: "/services/gutter-marketing-agency",
  niche: "Gutter",
  meta: {
    title: "Gutter Marketing Agency | Gutter Company SEO & Google Ads",
    description:
      "Zonic Media is the gutter marketing agency that wins installers, guard dealers and cleaning crews more estimates through SEO, Google Maps and Google Ads.",
    keywords: [
      "gutter marketing agency",
      "gutter marketing company",
      "gutter company marketing",
      "gutter company seo",
      "gutter company google ads",
      "gutter installation leads",
      "gutter guard marketing",
      "gutter cleaning marketing",
      "gutter contractor advertising",
      "gutter advertising agency",
      "gutter internet marketing",
      "gutter lead generation",
      "marketing for gutter companies",
      "seo for gutter companies",
      "gutter company website design",
    ],
  },
  palette: PALETTES.slateTeal,
  hero: {
    h1Lead: "Gutter",
    h1Icon: "roof",
    h1Rest: "Marketing Agency That Fills Your Estimate Calendar",
    lead: [
      "Homeowners look for a gutter pro after the first downpour, the first leaf drop or a cracked downspout. We make sure they find you, with gutter company SEO, ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Google Business Profile optimization",
      },
      ", storm-timed Google Ads and ",
      {
        href: "/services/gutter-company-website-design",
        label: "gutter websites that book estimates",
      },
      ".",
    ],
    cta: "Get My Free Gutter Audit",
    bento: {
      kind: "tiles",
      wide: {
        icon: "pin",
        title: "A top-3 map spot",
        sub: "For installs, guards and cleanings in the towns you cover",
        chips: ["Seamless gutters", "Gutter guards", "Cleanings", "Downspouts"],
      },
      left: {
        icon: "calendar",
        title: "More booked estimates",
        sub: "Requests that land straight on your calendar",
      },
      right: {
        icon: "storm",
        title: "Busy after every downpour",
        sub: "Ads and pages live before the rain",
      },
      bottom: {
        title: "Cleanings that grow into guard jobs",
        sub: "Photo follow-ups that win the bigger install",
      },
    },
  },
  services: {
    title: "Gutter Company Marketing for Installs, Guards and Cleanings",
    lead: "Six services tuned to searches that end in a booked gutter estimate.",
    cta: "Audit My Gutter Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Maps for Gutter Contractors",
        desc: "We set the right categories, list every service, post fresh job photos and keep your profile active, so you climb the local map.",
        points: [
          "Category and service cleanup",
          "Weekly install photos",
          "Verification help included",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Google profile tuning",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Get your profile verified",
          },
        ],
      },
      {
        icon: "search",
        title: "Gutter Company SEO",
        desc: "Pages for seamless gutters, guards, cleaning and repairs in each town you name, backed by citations and site fixes.",
        points: [
          "Service and town pages",
          "Local citations",
          "Rankings by city",
        ],
        links: [
          {
            href: "/services/industry/local-seo-for-gutter-companies",
            label: "Gutter company local SEO",
          },
        ],
      },
      {
        icon: "target",
        title: "Gutter Company Google Ads",
        desc: "Search and call ads on install and guard searches, raised ahead of storms and leaf season, with DIY clicks blocked.",
        points: [
          "Storm and leaf-season pushes",
          "DIY clicks filtered",
          "Calls tracked to the job",
        ],
        links: [
          { href: "/services/google-ads", label: "Gutter ad management" },
        ],
      },
      {
        icon: "monitor",
        title: "Gutter Company Website Design",
        desc: "Fast mobile sites with a free-estimate form, guard comparisons and install photos, built to turn visits into appointments.",
        points: [
          "Estimate form on every page",
          "Before-and-after galleries",
          "Every call and form logged",
        ],
        links: [
          {
            href: "/services/gutter-company-website-design",
            label: "Websites for gutter companies",
          },
        ],
      },
      {
        icon: "star",
        title: "Reviews and Repeat Cleanings",
        desc: "Each finished job triggers a text that requests a Google review, and fall reminders bring past cleaning customers back each year.",
        points: [
          "Automatic review requests",
          "Replies in your voice",
          "Seasonal cleaning reminders",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "Home services local search",
          },
          {
            href: "/services/gbp-reinstatement-service",
            label: "Suspended profile recovery",
          },
        ],
      },
      {
        icon: "sparkle",
        title: "AI Search Visibility for Gutter Pros",
        desc: "Homeowners now ask AI assistants which gutter company to hire. We give those tools consistent, checkable facts that point to you.",
        points: [
          "Matching listings everywhere",
          "Reviews that name the work",
          "Clear answers on your site",
        ],
        links: [
          {
            href: "/services/ai-seo-services",
            label: "AI SEO for local businesses",
          },
        ],
      },
    ],
  },
  growth: {
    title: "How We Turn Gutter Searches Into Booked Estimates",
    lead: "Map rankings, AI answers and a converting website, each feeding the same estimate calendar your office already runs.",
    rows: [
      {
        title: "Show Up First for “Gutter Installation Near Me”",
        body: [
          "When water spills over the edge, most homeowners call one of the first map results they see. We sharpen your Google profile, build a landing page for every town you cover and keep new reviews coming in, so your listing climbs into the top three. Check yours with our ",
          {
            href: "/google-maps-business-ranking-tool-online",
            label: "free Maps rank checker",
          },
          ".",
        ],
        points: [
          "Gutter categories set",
          "Town landing pages",
          "Install photos weekly",
          "Spam listings reported",
        ],
        cta: "Check My Gutter Map Rank",
        ui: {
          kind: "maps",
          query: "gutter installation near me",
          city: "Pittsburgh",
          category: "Gutter contractor · Free estimates",
        },
      },
      {
        title: "Get Named When Homeowners Ask AI About Gutter Guards",
        body: [
          "A growing share of homeowners now put that question to ChatGPT, Gemini or the AI Overview at the top of Google before picking a gutter company. Our ",
          {
            href: "/services/ai-seo-services",
            label: "AI visibility service",
          },
          " feeds those tools facts they can check: matching listings, detailed reviews, install photos and plain answers about guards, sizes and materials.",
        ],
        points: [
          "Consistent business details",
          "Reviews that mention guards",
          "Guard comparison pages",
          "Plain-answer FAQs",
        ],
        cta: "See If AI Recommends Me",
        ui: {
          kind: "ai",
          query: "who installs micro mesh gutter guards near me",
          intro: "For micro-mesh guard installs nearby,",
          bullets: [
            "Seamless gutters made on site",
            "Micro-mesh guard options",
            "Free on-site estimates",
          ],
        },
      },
      {
        title: "A Gutter Website That Turns Visits Into Estimates",
        body: [
          "Gutter shoppers often compare a few companies on their phone before asking for a quote. Your site loads fast, shows real installs, explains guard options and puts a short estimate form and call button on every screen.",
        ],
        points: [
          "Estimate form up top",
          "Tap-to-call bar",
          "Guard comparison page",
          "Install photo gallery",
        ],
        cta: "Plan My Gutter Website",
        ui: {
          kind: "website",
          url: "yourcompany.com",
          headline: "Seamless gutters and guards, installed right",
          services: [
            "Seamless gutters",
            "Gutter guards",
            "Gutter cleaning",
            "Repairs",
          ],
        },
      },
    ],
  },
  ownLeads: {
    title: "Gutter Lead Generation That Stays Yours Alone",
    body: [
      "Shared lead sites sell one homeowner to several gutter crews, so the job turns into a price fight before you arrive. We build leads from your own rankings, ads and site instead. Run a roofing crew too? Pair this with our ",
      {
        href: "/services/roofing-marketing-agency",
        label: "roofing marketing",
      },
      ".",
    ],
    cta: "Build My Own Gutter Leads",
    colShared: "Bought, shared leads",
    colOwn: "Your own gutter leads",
    rows: [
      ["Who else gets the call", "Several gutter crews", "Nobody but you"],
      [
        "How the quote goes",
        "A race to the lowest price",
        "They picked you before calling",
      ],
      [
        "What you keep afterward",
        "Nothing once you stop paying",
        "Rankings, reviews and a site",
      ],
      [
        "Next fall's cleaning",
        "Sold again to someone else",
        "A reminder from your company",
      ],
    ],
  },
  specialties: {
    title: "Gutter Marketing Built Around Each Service You Sell",
    lead: "A storm repair, a guard upgrade and a yearly cleaning are bought in different ways. We give every line a separate landing page, ad group and reminder plan.",
    items: [
      {
        icon: "roof",
        name: "Seamless Gutter Installation",
        tactic: "Install pages by town with free-estimate forms",
      },
      {
        icon: "shield",
        name: "Gutter Guards & Leaf Protection",
        tactic: "Guard comparison pages and leaf-season search ads",
      },
      {
        icon: "clean",
        name: "Gutter Cleaning & Flushing",
        tactic: "Fall and spring reminders to every past customer",
      },
      {
        icon: "tool",
        name: "Gutter Repair & Re-Pitching",
        tactic: "Leak and sag pages for urgent repair searches",
      },
      {
        icon: "drop",
        name: "Downspouts & Drainage",
        tactic: "Foundation-water pages paired with drainage add-on offers",
      },
      {
        icon: "storm",
        name: "Storm-Damaged Gutter Repair",
        tactic: "Ads switched on within hours of heavy storms",
      },
      {
        icon: "snow",
        name: "Heat Cables & Ice Dam Prevention",
        tactic: "Early-winter pages for cold-climate service areas",
      },
      {
        icon: "building",
        name: "Commercial & Multi-Unit Gutters",
        tactic: "Building-manager outreach pages and HOA contract ads",
      },
    ],
    more: "Add soffit, fascia or roof washing? They get a plan as well.",
  },
  steps: {
    title: "Three Steps to a Busier Gutter Season",
    lead: "We line up the quick wins on Maps and ads first, then build the search rankings that carry you through every season.",
    items: [
      {
        h: "Free Gutter Market Audit",
        p: "We search your top gutter jobs from the towns you cover, then report your position, who beats you on the map and where estimates slip away.",
      },
      {
        h: "A Plan Timed to Your Seasons",
        p: "We agree with you on which services, towns and campaigns come first, with guard and install work weighted ahead of leaf drop and spring storms.",
      },
      {
        h: "Launch, Track and Review Each Month",
        p: "Your rebuilt profile, town pages, ads and review texts start in the same week. After that, a plain monthly report covers rankings, calls and estimate requests, plus the jobs each one booked.",
      },
    ],
    audit: [
      ["Map rank: gutter installation", "behind"],
      ["Profile services and photos", "gap"],
      ["Guard comparison page", "open"],
      ["Review total vs map leaders", "behind"],
    ],
    plan: [
      "Gutter guards",
      "Seamless installs",
      "Fall cleanings",
      "Pittsburgh",
      "Bethel Park",
    ],
    launch: [
      "Business Profile rebuilt",
      "Guard and install pages live",
      "Call tracking switched on",
      "Post-job review texts running",
    ],
  },
  reviews: {
    title: "Home Service Owners on Our Gutter Marketing Work",
    lead: "Real Google reviews from owners we market. Our average sits at 5.0 stars.",
  },
  pricing: {
    title: "Gutter Marketing Plans With No Long Contract",
    compareTitle: "Compare Gutter Company Plans",
    addOnsTitle: "Add Campaigns Before Leaf Season",
    customTitle: "Covering several cities with gutter crews?",
  },
  faq: {
    title: "FAQs on Marketing a Gutter Business",
    lead: "Straight answers on estimates, rankings, ads, AI tools and cost.",
    items: [
      {
        q: "What does hiring a gutter marketing agency get me?",
        a: "A gutter company that gets chosen when homeowners search. That covers a top-three map listing, pages for installs, guards and cleanings, Google Ads timed to storms and leaf season, steady reviews and a website that books estimates. Suspended-profile recovery is part of the package too.",
      },
      {
        q: "How can I get more gutter installation leads?",
        a: "Rank where homeowners look first: the Google map and the top organic results for install searches in your towns. Add estimate forms and click-to-call to every page, run ads after big storms and turn each cleaning visit into a photo-backed install quote.",
      },
      {
        q: "How does gutter guard marketing work for a local installer?",
        a: "You compete on trust and proximity rather than TV budgets. Publish clear guard comparison pages, show local install photos and reviews, hold a top-three map spot and run search ads on guard terms in your zip codes. Many homeowners prefer an installer they can meet.",
      },
      {
        q: "What is the best gutter cleaning marketing for repeat business?",
        a: "Reminders. Every cleaning customer gets a text or email before leaf drop and again in spring, with a one-tap booking link. Pair that with a review request after each visit and photos of any damage you spot, which opens the door to repair and guard work.",
      },
      {
        q: "Which works better for gutter contractor advertising: Local Services Ads or Google search ads?",
        a: "Usually a mix of the two. Local Services Ads show a Google-verified badge above everything else and bill per lead, while search ads let us choose keywords, schedules and the page each click lands on. We usually launch one first, then add the other once call tracking proves what books.",
      },
      {
        q: "How do I choose the right gutter marketing company?",
        a: "Pick one that clearly understands seasonal demand, reports on booked estimates rather than clicks, keeps your website and ad accounts under your ownership, and bills month to month. Ask how they handle Maps, reviews and AI search, not just ads, and request a sample report before you sign anything.",
      },
      {
        q: "What does a gutter advertising agency do differently from a general agency?",
        a: "It plans around your seasons and job mix. Budgets rise ahead of storms and leaf drop, keywords separate cleaning from install searches, DIY and job-seeker clicks are blocked, and every call is traced to the job it booked. Ads also pause when your crews are fully scheduled.",
      },
      {
        q: "Is gutter internet marketing worth it for a small crew?",
        a: "Yes. Even a two-truck crew can win its own towns on Google Maps, where homeowners choose from the top few names. A complete profile, steady reviews and a quick mobile site keep producing calls long after the setup work is done. Start with the profile, since it feeds every other channel.",
      },
      {
        q: "How do I get ChatGPT to recommend my gutter business?",
        a: "Give AI tools facts they can confirm. Your name, address and phone should read the same on every listing, reviews should mention guards and installs, and your site needs clear service and FAQ pages with real project photos. That makes you a safe answer to suggest.",
      },
      {
        q: "How much is gutter marketing with Zonic Media?",
        a: "Plans cost $297, $750 or $1,500 per month, and you can leave any month. Ad money is charged by Google to your own account at 0% markup. Most single-crew gutter companies start small and add ads or more towns once estimates pick up.",
      },
    ],
  },
  audit: {
    title: "Get a Free Gutter Audit Before the Next Big Storm",
    lead: [
      "Tell us the towns you cover and the jobs you want more of. Our audit ranks you against nearby gutter crews for install, guard and cleaning searches, checks your reviews and site, and maps out which ",
      { href: "/services", label: "marketing services" },
      " deserve priority. Gutter work is one of ",
      { href: "/industries", label: "20+ industries we market" },
      ".",
    ],
    points: [
      "No long-term contract",
      "Plans start at $297 a month",
      "0% markup on your ad budget",
      "900+ suspended profiles reinstated",
    ],
    form: {
      formType: "gutter-marketing",
      badge: "Free gutter audit",
      title: "Get Your Gutter Company Audit",
      subtitle: "No cost, no contract, no pressure.",
      submitText: "Send My Gutter Audit",
      messageLabel: "Your towns and gutter services",
      messagePlaceholder:
        "Towns you cover, services you want more of (installs, guards, cleanings) and crew count",
    },
  },
  banner: {
    title: "Be the Gutter Crew Homeowners Call When It Pours",
    lead: "Book a free audit to learn which changes win estimates first.",
    icons: ["storm", "roof"],
  },
};
