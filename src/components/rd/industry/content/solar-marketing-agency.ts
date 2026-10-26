import { PALETTES } from "../palettes";
import type { IndustryContent } from "../types";

/* SOLAR MARKETING AGENCY — redesign draft content (25 Oct 2026).

   Rank safety: Semrush API units are exhausted, so no ranking report was
   pulled. The live title's core term ("Solar Marketing Agency USA") is
   kept in the new title, and every phrase in the live keywords meta is
   carried by the title, H1, an H2/H3 or an FAQ question.
   - Web research (25 Oct): top results for "solar marketing agency" cover
     local SEO and Maps, paid search, websites and lead generation; few
     cover reviews, homeowner education or AI answers. Installer guides
     stress Business Profile work, town pages, steady reviews and owning
     demand instead of buying shared marketplace leads. Homeowners research
     roof suitability, batteries and installer credentials before booking
     a consultation, and a growing share ask AI tools for local picks.
   - Owner rule for this niche: no savings, payback, incentive or price
     figures anywhere.
   Fresh wording only: nothing reused from the live page or other drafts. */

export const CONTENT: IndustryContent = {
  draftSlug: "solar-marketing-agency-2",
  liveUrl: "/services/solar-marketing-agency",
  niche: "Solar",
  meta: {
    title: "Solar Marketing Agency USA | Solar SEO, Ads & Consultations",
    description:
      "Solar digital marketing agency that books more homeowner consultations for installers with solar SEO, Google Maps rankings, Google Ads and AI search.",
    keywords: [
      "solar marketing agency",
      "solar company marketing",
      "marketing for solar installers",
      "solar lead generation",
      "exclusive solar leads",
      "solar seo",
      "local seo for solar companies",
      "solar panel installation leads",
      "google ads for solar companies",
      "solar battery storage marketing",
      "solar installer marketing",
      "solar marketing services",
      "solar website design",
    ],
  },
  palette: PALETTES.orangeEmerald,
  hero: {
    h1Lead: "Solar",
    h1Icon: "solar",
    h1Rest: "Marketing Agency That Books More Solar Consultations",
    lead: [
      "Homeowners research solar for weeks before they request a visit. We make your company the one they trust and call, with solar SEO, Google Ads, ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Google Business Profile management",
      },
      " and ",
      {
        href: "/services/solar-website-design",
        label: "solar website design",
      },
      " that turns careful readers into booked consultations.",
    ],
    cta: "Get My Free Solar Audit",
    bento: {
      kind: "photos",
      photoA: {
        src: "/images/free-website/free-solar/residential-solar.webp",
        position: "66% 50%",
        query: "solar installer near me",
      },
      cardA: {
        icon: "calendar",
        title: "More consultations on the calendar",
        sub: "From homeowners ready to talk",
      },
      cardB: {
        icon: "bolt",
        title: "More battery backup jobs",
        sub: "Storage add-ons and retrofits",
      },
      photoB: {
        src: "/images/free-website/free-solar/battery-storage.webp",
        position: "50% 50%",
        query: "solar battery installer near me",
      },
    },
  },
  services: {
    title: "Solar Company Marketing\nServices From One Team",
    lead: "Six channels homeowners use while weighing solar, run as one plan.",
    cta: "Audit My Solar Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Business Profile for Solar Installers",
        desc: "Service areas, install photos, categories and Q&A set up so your profile ranks when homeowners look for a local installer.",
        points: [
          "Install photos posted weekly",
          "Service areas mapped",
          "Help if Google suspends you",
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
        title: "Solar SEO for Every Town You Serve",
        desc: "Town pages, battery and roof-readiness guides, citations and technical fixes that lift your site for the searches homeowners make before calling.",
        points: [
          "Town and service pages",
          "Homeowner education guides",
          "Town-by-town rank reports",
        ],
        links: [
          {
            href: "/services/industry/local-seo-for-solar-companies",
            label: "Local SEO for solar companies",
          },
          {
            href: "/services/local-seo-for-home-services",
            label: "SEO for home service firms",
          },
        ],
      },
      {
        icon: "target",
        title: "Google Ads for Solar Companies, Tuned to Intent",
        desc: "Search campaigns aimed at owners ready for a site visit, with renters, job seekers and DIY kit clicks filtered out before they cost you.",
        points: [
          "Consultation-focused ads",
          "Renter and DIY negatives",
          "0% ad-spend markup",
        ],
        links: [
          {
            href: "/services/google-ads",
            label: "Solar Google Ads management",
          },
        ],
      },
      {
        icon: "monitor",
        title: "Solar Website Design That Books Visits",
        desc: "Fast pages with a consultation scheduler, project galleries and plain answers on panels, batteries and roof checks, built to turn research into requests.",
        points: [
          "Online consultation booking",
          "Project photo galleries",
          "Every form and call tracked",
        ],
        links: [
          {
            href: "/services/solar-website-design",
            label: "Websites for solar installers",
          },
          { href: "/services/web-design", label: "Custom web design" },
        ],
      },
      {
        icon: "star",
        title: "Reviews and Referral Requests",
        desc: "After each system switches on, the owner gets a review request and a simple referral link, so neighbors hear about you first.",
        points: [
          "Texts after activation",
          "Owner replies drafted",
          "Referral links for neighbors",
        ],
        links: [{ href: "#ind-audit", label: "Compare my reviews" }],
      },
      {
        icon: "sparkle",
        title: "Solar Answers in ChatGPT & AI Overviews",
        desc: "Clear, consistent facts about your company across the web, so AI assistants can confirm you and name you when homeowners ask who to trust.",
        points: [
          "Matching listings everywhere",
          "Reviews that describe installs",
          "Questions answered on-site",
        ],
        links: [
          { href: "/services/ai-seo-services", label: "AI SEO for installers" },
        ],
      },
    ],
  },
  growth: {
    title: "How Our Solar Digital Marketing Agency Books Site Visits",
    lead: "Maps, AI answers and a website that teaches and books, working together across a long buying cycle. Each one shortens the gap between first search and signed agreement.",
    rows: [
      {
        title: "Win Solar Panel Installation Leads on Google Maps",
        body: [
          "Homeowners comparing installers open the map to see who is local and well reviewed. We tune your profile, ",
          {
            href: "/services/gmb-verification-help",
            label: "verify new office locations",
          },
          ", publish town-by-town landing pages and keep real install photos coming, so your pin sits among the first three.",
        ],
        points: [
          "Solar contractor categories",
          "Town landing pages",
          "Weekly install photos",
          "Fake rival listings reported",
        ],
        cta: "Check My Solar Map Ranking",
        ui: {
          kind: "maps",
          query: "solar installer near me",
          city: "Sacramento",
          category: "Solar energy contractor · Free consultations",
        },
      },
      {
        title: "Get Named When Homeowners Ask AI About Going Solar",
        body: [
          "More homeowners now ask an AI assistant which local installer they can trust. Our ",
          { href: "/services/ai-seo-services", label: "AI SEO services" },
          " hand ChatGPT, Gemini and AI Overviews clear signals: consistent listings, detailed install reviews, licensing on show and pages that answer common solar questions plainly.",
        ],
        points: [
          "Consistent company facts",
          "Install-specific reviews",
          "Licenses and warranties shown",
          "Plain-answer solar guides",
        ],
        cta: "See If AI Recommends Us",
        ui: {
          kind: "ai",
          query:
            "which solar company near phoenix explains battery backup clearly",
          intro: "For solar with battery backup around Phoenix,",
          bullets: [
            "In-home or video consultations",
            "Designs explained in plain language",
            "Licensed local install crews",
          ],
        },
      },
      {
        title: "A Solar Website That Educates, Then Books",
        body: [
          "Solar buyers read before they reach out. We build pages that answer roof, battery and timeline questions in plain words, add galleries from your own installs and put a consultation scheduler on every screen, so research turns into a booked visit.",
        ],
        points: [
          "Homeowner education pages",
          "Consultation scheduler",
          "Real project galleries",
          "Call and form tracking",
        ],
        cta: "Plan My Solar Website",
        ui: {
          kind: "website",
          url: "yourcompany.com",
          headline: "Book your free solar consultation",
          services: [
            "Rooftop solar",
            "Battery backup",
            "EV chargers",
            "Panel repair",
          ],
        },
      },
    ],
  },
  ownLeads: {
    title: "Solar Lead Generation That Stays With Your Company",
    body: [
      "Shared lead sites sell one homeowner's details to several installers, so the first rep to dial gets the meeting and the rest pay anyway. We build demand that reaches only you: rankings, ads and a site you keep.",
    ],
    cta: "Build My Own Solar Pipeline",
    colShared: "Shared lead sellers",
    colOwn: "Your own demand",
    rows: [
      [
        "Who gets the homeowner",
        "Every installer who paid for it",
        "Only your sales team",
      ],
      [
        "What the homeowner knows",
        "Little about your company",
        "Your reviews and past installs",
      ],
      [
        "How the first talk goes",
        "A cold callback race",
        "A consultation they requested",
      ],
      [
        "What you keep afterward",
        "Nothing after your last payment",
        "Rankings, pages and reviews",
      ],
    ],
  },
  specialties: {
    title: "Solar Installer Marketing for Every System You Sell",
    lead: "Rooftop, storage and commercial buyers ask different questions, so each line is marketed with its own pages, campaigns and follow-up.",
    photo: {
      src: "/images/free-website/free-solar/financing-options.webp",
      alt: "Solar consultant walking two homeowners through a system design on a tablet",
      caption: "Residential, storage and commercial installers",
      sub: "Marketing that leads to the kitchen-table talk",
    },
    items: [
      {
        icon: "sun",
        name: "Residential Rooftop Solar",
        tactic: "Town pages and Map Pack work near every crew",
      },
      {
        icon: "bolt",
        name: "Battery Storage & Backup Power",
        tactic: "Outage-focused guides and retrofit offers for past customers",
      },
      {
        icon: "building",
        name: "Commercial Solar Projects",
        tactic: "Owner and facility-manager pages plus targeted search ads",
      },
      {
        icon: "tool",
        name: "Solar Panel Repair & Service",
        tactic: "Pages for orphaned systems whose installer closed",
      },
      {
        icon: "electric",
        name: "EV Charger Add-Ons for Solar Homes",
        tactic: "Charger pages paired with solar upgrade follow-ups",
      },
      {
        icon: "roof",
        name: "Solar With Roof Replacement",
        tactic: "Joint roof-and-solar pages for homes with aging roofs",
      },
      {
        icon: "yard",
        name: "Ground-Mount & Rural Systems",
        tactic: "Acreage-focused pages and ads for rural counties",
      },
      {
        icon: "trend",
        name: "System Expansions & Upgrades",
        tactic: "Past-customer emails when households add panels or storage",
      },
    ],
    more: "Install solar carports, pool heating or off-grid systems? Those get their own pages too.",
  },
  steps: {
    title: "From Solar Audit to Booked Consultations in Three Steps",
    lead: "Profile and ad fixes tend to show first; organic rankings and education pages build steadily over the following months.",
    items: [
      {
        h: "We Map Your Solar Market",
        p: "We search the way local homeowners do, then map your visibility across Google Maps, AI answers and organic results, and name the installers winning those consultations.",
      },
      {
        h: "We Agree on Where to Push",
        p: "Together we pick the towns, systems and channels to lead with, weighted toward the work you want more of, such as storage retrofits or commercial projects.",
      },
      {
        h: "Launch, Measure, Repeat",
        p: "Your profile changes, new town pages, campaigns and review asks start together. A single monthly report then ties rankings and calls to the consultations they produced.",
      },
    ],
    audit: [
      ["Maps rank: solar installer near me", "behind"],
      ["Battery storage pages", "gap"],
      ["Online consultation booking", "open"],
      ["Review count against leading installers", "behind"],
    ],
    plan: [
      "Rooftop solar",
      "Battery backup",
      "Commercial",
      "Sacramento",
      "Roseville",
    ],
    launch: [
      "Profile categories fixed",
      "Town pages published",
      "Consultation tracking live",
      "Review requests running",
    ],
  },
  reviews: {
    title: "Owners Who Hired Us, in Their Own Google Reviews",
    lead: "Real feedback from business owners, pulled straight from our Google profile.",
  },
  pricing: {
    title: "Solar Marketing Plans With No Long Contract",
    compareTitle: "Compare Solar Marketing Plans Side by Side",
    addOnsTitle: "Add Campaigns for Storage or New Territories",
    customTitle: "Installing across several states or branches?",
  },
  faq: {
    title: "Questions to Ask a Solar Marketing Company",
    lead: "What installers ask us about consultations, leads, SEO, ads and AI search.",
    items: [
      {
        q: "What does a solar marketing agency actually handle?",
        a: "It makes your company easy to find and easy to trust while homeowners research solar. That means Map Pack rankings, town and education pages, Google Ads aimed at owners ready to talk, a steady flow of reviews, visibility in AI answers and a website that books consultations. Everything is reported in one place each month.",
      },
      {
        q: "How can solar companies book more consultations?",
        a: "Answer the questions homeowners ask before they call: roof suitability, batteries, timelines and what a visit involves. Then make booking simple with an online scheduler, follow up quickly, ask every happy owner for a review and keep your profile active on Google Maps. Video consultations help homeowners who prefer to start remotely.",
      },
      {
        q: "How do we get exclusive solar leads instead of shared ones?",
        a: "Generate them yourself. Climb the map and the organic results in the towns you serve, run your own search ads and send that traffic to a site you own. Those requests reach only your team, and the rankings keep paying off long after a campaign ends.",
      },
      {
        q: "Is local SEO for solar companies worth the effort?",
        a: "Yes, for most installers. Homeowners still search locally and want a company nearby that will handle service later. Local SEO lifts your Maps listing, organic rankings and AI visibility together, and those pages keep bringing consultations without a per-click charge. They also make your reviews and install photos easier to find.",
      },
      {
        q: "Should solar installers run Google Ads?",
        a: "Often, yes, when the targeting is tight. Ads put you in front of high-intent searches in the towns you want right away, while SEO matures. We filter out renters, job seekers and DIY buyers, track every form and call, and bill ad spend with a 0% markup. Campaigns stay paused in towns your crews cannot reach yet.",
      },
      {
        q: "How do you approach solar battery storage marketing?",
        a: "Battery buyers include past solar customers and homeowners worried about outages. We build storage and backup-power pages, target searches for battery installers in your area and send retrofit messages to past clients. Storage requests are tracked separately, so you can see that demand on its own.",
      },
      {
        q: "Can homeowners find our solar company through ChatGPT or AI Overviews?",
        a: "Yes, as long as the facts about your company are clear and consistent. AI tools favor companies with matching listings, detailed reviews, visible licensing and pages that answer real solar questions. We line all of that up so those tools have reasons to mention you. Reviews that mention battery or roof details help the most.",
      },
      {
        q: "How soon does solar SEO start producing consultations?",
        a: "Ads and profile fixes usually produce the first consultation requests within weeks. Organic growth is slower and builds over months; how fast depends on the number of installers competing in your towns and the condition of your site. Monthly reports show the trend.",
      },
      {
        q: "What does solar marketing cost with Zonic Media?",
        a: "Zonic Media plans run $297, $750 or $1,500 per month, with cancellation open every month. Google bills ad clicks itself, and our markup on that spend is 0%. Single-crew installers often start small; multi-territory teams running ads usually need a larger plan.",
      },
      {
        q: "Can you recover a suspended Google Business Profile for a solar company?",
        a: "Yes. Recovery work comes with every plan, and to date we have restored 900+ suspended profiles. Common triggers include address, name or service-area problems, so we trace the cause, correct the listing, appeal with evidence and tighten things to prevent a repeat.",
      },
    ],
  },
  audit: {
    title: "Get a Free Solar Marketing Audit for Your Territory",
    lead: [
      "Tell us your towns and the systems you sell. We'll show where you rank, how your profile, reviews and ",
      { href: "/services/web-design", label: "site and booking flow" },
      " stack up against nearby installers, and which fixes to make first. Also replace roofs? Pair this with our ",
      {
        href: "/services/roofing-marketing-agency",
        label: "roofing marketing",
      },
      ", or browse ",
      { href: "/services", label: "every service we offer" },
      " and ",
      { href: "/industries", label: "the industries we work with" },
      ".",
    ],
    points: [
      "Month-to-month plans",
      "0% ad-spend markup",
      "Plans from $297/mo",
      "Profile reinstatement included",
    ],
    form: {
      formType: "solar-marketing",
      badge: "Free solar audit",
      title: "Claim Your Free Solar Marketing Audit",
      subtitle: "No cost, no contract, no hard sell.",
      submitText: "Send My Solar Audit",
      messageLabel: "Your towns and the systems you install",
      messagePlaceholder:
        "Towns you cover, systems you sell (rooftop, battery, commercial) and how consultations reach you today",
    },
  },
  banner: {
    title: "Be the Installer Homeowners Call When They're Ready for Solar",
    lead: "Begin with a free audit that pinpoints where your next consultations will come from.",
    icons: ["solar", "sun"],
  },
};
