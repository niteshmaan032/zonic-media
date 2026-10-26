import { PALETTES } from "../palettes";
import type { IndustryContent } from "../types";

/* PEST CONTROL MARKETING AGENCY — redesign draft content (25 Oct 2026).

   Rank safety: Semrush API units are exhausted (25 Oct), so no ranking
   report or volumes were pulled. The live title's core term ("Pest Control
   Marketing Agency USA") stays at the front of the new title, and every
   phrase in the live keywords meta is carried by the title, H1, an H2/H3
   or an FAQ question.
   Web research (25 Oct): recurring service plans are the main revenue
   lever and first contact usually starts with an urgent search; seasonal
   pages (termites and ants in spring, mosquitoes in summer, rodents in
   fall) must be live before each spike; Maps, Local Services Ads, reviews
   and speed to lead drive bookings; AI answers lean on third-party
   mentions and reviews. Customers search "exterminator near me", "pest
   control near me", "termite inspection" and "[pest] control [city]".
   No photos exist in /public/images/free-website for pest control, so the
   hero uses tiles and the specialties block has no photo.
   Fresh wording only: nothing reused from the live page or other drafts.
   No prices, budgets or cost-per-lead figures anywhere. */

export const CONTENT: IndustryContent = {
  draftSlug: "pest-control-marketing-agency-2",
  liveUrl: "/services/pest-control-marketing-agency",
  niche: "Pest Control",
  meta: {
    title: "Pest Control Marketing Agency USA | Pest Control SEO & Leads",
    description:
      "Pest control marketing agency for US exterminators: pest control SEO, Google Maps, Google Ads and follow-up that turns one-time treatments into recurring plans.",
    keywords: [
      "pest control marketing agency",
      "pest control marketing company",
      "best pest control marketing agency",
      "pest control digital marketing agency",
      "pest control advertising agencies",
      "best pest control marketing agencies in us",
      "pest control marketing ideas",
      "online marketing for pest control services",
      "pest control seo",
      "pest control advertising agency",
      "pest control internet marketing",
      "pest control lead generation",
      "pest control marketing",
      "exterminator marketing",
      "pest control google ads",
      "pest control leads",
    ],
  },
  palette: PALETTES.limeTeal,
  hero: {
    h1Lead: "Pest Control",
    h1Icon: "pest",
    h1Rest: "Marketing Agency That Grows Your Recurring Routes",
    lead: [
      "People who spot termites, mice or wasps search “exterminator near me” and call fast. We put your company first with pest control SEO, ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Business Profile management",
      },
      ", Google Ads and ",
      {
        href: "/services/pest-control-website-design",
        label: "pest control website design",
      },
      ", then turn those first visits into ongoing service plans.",
    ],
    cta: "Get My Free Pest Control Audit",
    bento: {
      kind: "tiles",
      wide: {
        icon: "pin",
        title: "Top of the map for pest searches",
        sub: "Ranked in the towns and zip codes your techs already cover",
        chips: [
          "Termites",
          "Rodents",
          "Mosquitoes",
          "Bed bugs",
          "+ your pests",
        ],
      },
      left: {
        icon: "repeat",
        title: "More recurring plans",
        sub: "First treatments that turn into quarterly service",
      },
      right: {
        icon: "bug",
        title: "More termite jobs",
        sub: "Inspections and treatments booked from search",
      },
      bottom: {
        title: "Full routes in every season",
        sub: "Pest-specific pages and offers live before each wave",
      },
    },
  },
  services: {
    title: "Pest Control Digital Marketing Agency Services",
    lead: "Every channel measured by booked treatments and renewed plans.",
    cta: "Audit My Pest Control Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Business Profile for Exterminators",
        desc: "Correct categories, every pest you treat listed as a service, real job photos and weekly posts that lift your listing on the map.",
        points: [
          "Pest-by-pest service list",
          "Weekly posts and photos",
          "Reinstatement if suspended",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Google profile management",
          },
          {
            href: "/services/gbp-reinstatement-service",
            label: "Profile reinstatement",
          },
        ],
      },
      {
        icon: "search",
        title: "Pest Control SEO by Pest and Town",
        desc: "Pages for each pest, treatment and town you serve, plus citations and technical fixes, so you rank for searches that become bookings.",
        points: [
          "Pest and town pages",
          "Local citation building",
          "Rank tracking by zip code",
        ],
        links: [
          {
            href: "/services/industry/seo-services-for-pest-control",
            label: "SEO for pest control companies",
          },
          {
            href: "/services/local-seo-for-home-services",
            label: "Home service SEO program",
          },
        ],
      },
      {
        icon: "target",
        title: "Ads From a Pest Control Advertising Agency",
        desc: "Search and Local Services Ads on urgent pest searches, with spend shifted toward each season's biggest pests in your area.",
        points: [
          "Seasonal pest ad groups",
          "Call-only mobile ads",
          "Spend passed through untouched",
        ],
        links: [{ href: "/services/google-ads", label: "Pest control PPC" }],
      },
      {
        icon: "monitor",
        title: "Pest Control Websites That Sell Plans",
        desc: "Mobile sites with tap-to-call, pest ID pages, plan comparisons and online booking, so visitors can start service in a few taps.",
        points: [
          "Online plan signup",
          "Pest identification pages",
          "Every lead source tracked",
        ],
        links: [
          {
            href: "/services/pest-control-website-design",
            label: "Pest control website design",
          },
          { href: "/services/web-design", label: "Website design services" },
        ],
      },
      {
        icon: "repeat",
        title: "Recurring Plans & Retention",
        desc: "Follow-up texts and emails that turn one-time treatments into quarterly plans and bring past customers back every season.",
        points: [
          "Plan upgrade offers",
          "Seasonal reminder emails",
          "Renewal and review texts",
        ],
        links: [{ href: "#ind-audit", label: "Plan my retention program" }],
      },
      {
        icon: "sparkle",
        title: "AI Answers for Pest Control",
        desc: "We keep your facts consistent so ChatGPT, Gemini and Google AI Overviews mention your company when people ask who treats pests nearby.",
        points: [
          "Matching business facts",
          "Pest-specific reviews",
          "Safety and pet FAQs",
        ],
        links: [
          { href: "/services/ai-seo-services", label: "AI SEO services" },
        ],
      },
    ],
  },
  growth: {
    title: "Pest Control SEO, Maps and PPC That Fill Routes",
    lead: "Map rankings, AI answers and steady reviews, all aimed at turning urgent first calls into long-term plans.",
    rows: [
      {
        title: "Climb the Map for “Exterminator Near Me”",
        body: [
          "Someone who finds mice in the pantry calls a company from the map, not page two. Our team tunes your listing, adds a page for each route town and collects a steady flow of reviews until your pin sits among the top three. Check your spot with our ",
          {
            href: "/google-maps-business-ranking-tool-online",
            label: "free rank checker",
          },
          ".",
        ],
        points: [
          "Exterminator and pest categories",
          "Route-town landing pages",
          "Treatment photos posted weekly",
          "Fake listings reported",
        ],
        cta: "Check My Pest Control Map Rank",
        ui: {
          kind: "maps",
          query: "exterminator near me",
          city: "Houston",
          category: "Pest control service · Same-day visits",
        },
      },
      {
        title: "Be the Pest Company AI Assistants Recommend",
        body: [
          "Families increasingly ask ChatGPT, Gemini or an AI Overview which company treats termites or bed bugs nearby. Our ",
          { href: "/services/ai-seo-services", label: "AI visibility work" },
          " gives them facts they can check: consistent listings, reviews naming the pest, clear safety details and direct answers on every service page.",
        ],
        points: [
          "Consistent listings",
          "Reviews naming the pest",
          "Pet and child safety info",
          "Licensing shown",
        ],
        cta: "Audit My Pest Control AI Presence",
        ui: {
          kind: "ai",
          query: "best pest control company for termites in san antonio",
          intro: "For termite treatment around San Antonio,",
          bullets: [
            "Termite inspections and baiting",
            "Quarterly protection plans",
            "Licensed, pet-safe technicians",
          ],
        },
      },
      {
        title: "Collect a Google Review After Every Treatment",
        body: [
          "Recurring visits give you a steady stream of chances to earn reviews. After each treatment the customer receives a quick review-link text, and we draft the owner replies, so your rating keeps rising route by route. Recent reviews also feed the map and AI answers.",
        ],
        points: [
          "Texts after each visit",
          "Low-score alerts",
          "Owner replies drafted",
          "Rating badge on your site",
        ],
        cta: "Grow My Pest Control Reviews",
        ui: {
          kind: "reviews",
          sms: "Hi Lena, Your Company here. Your quarterly treatment is done! Mind telling neighbors how it went in a Google review?",
          reviewer: "Lena R.",
          review:
            "Ants were all over the kitchen. One visit and they were gone, and the tech explained how to keep our dog safe afterward.",
          reply: "Thanks, Lena! See you at your next quarterly visit.",
        },
      },
    ],
  },
  ownLeads: {
    title: "Pest Control Lead Generation You Don't Share",
    body: [
      "Lead sites pass each caller to several exterminators, the lowest quote wins and the customer rarely stays. Our ",
      { href: "/services", label: "full-service team" },
      " builds pest control leads that reach only you and grow into recurring plans. Every plan customer you sign stays yours.",
    ],
    cta: "Get Pest Leads That Are Yours",
    colShared: "Shared pest leads",
    colOwn: "Your own customers",
    rows: [
      [
        "Who else is calling them",
        "Several other exterminators",
        "No one else",
      ],
      ["What wins the job", "The lowest quote", "Your reviews and fast answer"],
      [
        "After the first visit",
        "Often one and done",
        "Offered a recurring plan",
      ],
      [
        "What you keep",
        "Nothing once you stop paying",
        "Rankings, pages and plan customers",
      ],
      [
        "Who owns the relationship",
        "The lead site",
        "Your company, visit after visit",
      ],
    ],
  },
  specialties: {
    title: "Online Marketing for Pest Control Services, Pest by Pest",
    lead: "Termite jobs, bed bug calls and quarterly plans are bought for different reasons, so each pest gets its own landing page and campaign.",
    items: [
      {
        icon: "home",
        name: "General Pest Plans",
        tactic: "Year-round plan pages ranked in every route town",
      },
      {
        icon: "pest",
        name: "Termite Inspection & Treatment",
        tactic: "Inspection offers and termite pages for swarm season",
      },
      {
        icon: "shield",
        name: "Rodent Control & Exclusion",
        tactic: "Fall rodent ads and entry-point sealing pages",
      },
      {
        icon: "spray",
        name: "Mosquito & Tick Control",
        tactic: "Spring signup pages for season-long yard treatments",
      },
      {
        icon: "clock",
        name: "Bed Bug Calls",
        tactic: "Discreet, urgent pages for homes, apartments and hotels",
      },
      {
        icon: "bug",
        name: "Ant & Cockroach Control",
        tactic: "Quick-booking pages tied to quarterly plan offers",
      },
      {
        icon: "pets",
        name: "Wildlife & Nuisance Animals",
        tactic: "Call-only ads for raccoons, squirrels and bats",
      },
      {
        icon: "building",
        name: "Commercial Pest Accounts",
        tactic: "Restaurant and property-manager pages with service contracts",
      },
    ],
    more: "Treat lawn insects or offer fumigation? Those get a plan as well.",
  },
  steps: {
    title: "Getting Started With Our Pest Control Marketing Company",
    lead: "Pages and ads go live before swarm, mosquito and rodent seasons.",
    items: [
      {
        h: "Free Pest Control Market Check",
        p: "We look up every pest you treat in each town you cover, then map your current rank, the companies beating you and the seasons you're missing.",
      },
      {
        h: "A Plan Timed to Pest Seasons",
        p: "We agree on the pests, towns and campaigns to push first, favoring recurring plans and higher-value work like termite and bed bug treatments.",
      },
      {
        h: "Launch and Monthly Route Reports",
        p: "Fixes to your profile, new pest pages, paid campaigns and review requests all start at once, and a monthly report lists rankings, calls, new plans signed and the source of each.",
      },
    ],
    audit: [
      ["Map rank: exterminator near me", "behind"],
      ["Termite and mosquito pages", "gap"],
      ["Recurring plan signup online", "open"],
      ["Reviews vs top 3 companies", "behind"],
    ],
    plan: ["Termites", "Mosquitoes", "Quarterly plans", "Houston", "Katy"],
    launch: [
      "Pest services listed",
      "Seasonal pages live",
      "Call tracking on",
      "Plan renewal texts set",
    ],
  },
  reviews: {
    title: "Owners We Market Rate Us on Google",
    lead: "Their reviews, exactly as they posted them on our profile.",
  },
  pricing: {
    title: "Pest Control Marketing Plans Without Annual Contracts",
    compareTitle: "Pest Control Plan Comparison",
    addOnsTitle: "Extra Campaigns for Peak Pest Season",
    customTitle: "Multiple branches or franchise territories?",
  },
  faq: {
    title: "Questions for a Pest Control SEO Company",
    lead: "Common questions from exterminators and pest company owners.",
    items: [
      {
        q: "What should a pest control marketing agency manage for you?",
        a: "It keeps your phone busy with people who need treatment and helps them become plan customers. That means Maps rankings, pest control SEO pages, paid search and LSA, a site that books service, review requests and follow-up that sells recurring plans. Every channel should be judged by the plans it signs.",
      },
      {
        q: "Which pest control marketing ideas grow recurring revenue?",
        a: "Offer a plan at every first visit, then market it everywhere: a plan comparison on your site, reminder texts before each season, review requests after each treatment and pages for the pests that bring repeat work, such as ants, rodents and mosquitoes. Make signing up as easy online as it is at the door.",
      },
      {
        q: "How do I pick the best pest control marketing agency in the US?",
        a: "Ask for proof in booked treatments and new plans, not traffic. The right agency understands pest seasons, never locks you into a long contract, adds 0% markup to ad spend and lets you own every account it sets up. Request a sample monthly report before deciding.",
      },
      {
        q: "Do pest control advertising agencies run Local Services Ads too?",
        a: "Good ones do. Local Services Ads appear above regular results and charge per lead, while search ads let you pick pests, towns and landing pages. We often begin with one channel, track which calls turn into plans, then add the other. Call tracking on both shows which one actually fills your routes.",
      },
      {
        q: "How should pest control marketing change with the seasons?",
        a: "Follow the pests. Termite and ant pages and ads should be live before spring swarms, mosquito offers before summer and rodent campaigns before fall. We schedule pages, ads and reminder emails ahead of each wave so you rank and advertise as calls climb.",
      },
      {
        q: "Is pest control internet marketing better than door-to-door sales?",
        a: "They work best together, but internet marketing grows without adding reps. Search reaches people who already have a pest problem and want to book, while door-to-door builds density in chosen neighborhoods. Many companies use search to fill routes and doors to add stops nearby.",
      },
      {
        q: "How long until pest control SEO brings in calls?",
        a: "Google profile and ad changes can lift calls within weeks. Organic rankings for pest and town pages usually take a few months, depending on local competition and how strong your site is today. You get a monthly report showing what has moved, and starting before your busy season gives rankings time to climb.",
      },
      {
        q: "Can my pest control company appear in AI Overviews and ChatGPT?",
        a: "Yes. AI tools lean on facts they can confirm, so we match your business details across every listing, earn reviews that mention the pests you solved and publish clear answers about treatments, safety and plans. That gives them reasons to suggest you.",
      },
      {
        q: "How much is pest control marketing with Zonic Media?",
        a: "Pick a plan at $297, $750 or $1,500 each month and cancel whenever you like. Google bills ad spend straight to you, and we add nothing on top (0% markup). Which tier fits depends on how many pests, towns and channels you want covered. Seasonal campaigns can be added when demand spikes.",
      },
      {
        q: "Can you recover a suspended Google profile for a pest company?",
        a: "Yes. We've reinstated 900+ suspended profiles, and every plan includes reinstatement. We identify the trigger, correct the listing, submit the appeal with supporting documents and then strengthen the profile against future flags. Not a client yet? Reinstatement is also available as a standalone service.",
      },
    ],
  },
  audit: {
    title: "See Where Your Pest Control Calls Go, Free",
    lead: [
      "We measure your Maps rank for the pests you treat, compare your Google profile and reviews with nearby exterminators, flag any ",
      {
        href: "/services/gmb-verification-help",
        label: "verification problems",
      },
      " and list the fixes that bring plan signups first.",
    ],
    points: [
      "Month-to-month terms",
      "Plans from $297 to $1,500",
      "0% markup on Google ad spend",
      "Reinstatement in every tier",
    ],
    form: {
      formType: "pest-control-marketing",
      badge: "Free pest control audit",
      title: "Request a Free Pest Control Audit",
      subtitle: "Free, and you're under no obligation.",
      submitText: "Send My Pest Control Audit",
      messageLabel: "Your service area and the pests you treat",
      messagePlaceholder:
        "Towns you cover, pests you want more calls for, and whether you sell plans",
    },
  },
  banner: {
    title: "Be the Company They Call the Moment Pests Show Up",
    lead: "A free audit shows which fixes will add plan customers first.",
    icons: ["bug", "shield"],
  },
};
