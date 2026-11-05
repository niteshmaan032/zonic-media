import { PALETTES } from "../palettes";
import type { IndustryContent } from "../types";

/* WHITE LABEL SEO SERVICES — redesign of /services/white-label-services in
   the new layout (owner, 5 Nov 2026: "redesign the page with our new
   layout and with new trending keywords and content … dont use the old
   content of this page i want the fresh one").

   Keyword map (reports/research/white-label-keywords-2026-11.md; Semrush
   US + Search Console): title and H1 own "white label seo services"
   (4,400, KD 19) "for agencies" (880), keeping the old title's core term.
   H2s and FAQs carry white label local seo services (2,400), white label
   seo reseller / seo reseller program (2,400 / 1,900), white label GMB
   services (170, KD 5; the page already earns impressions for "white label
   gmb services" and "white label gbp seo"), white label seo reports
   (2,400), white label web design / development (1,600 / 1,000), white
   label PPC / Google Ads management (1,000 / 480), white label AI SEO (210),
   what is white label SEO (1,300) and private label SEO (1,300). Link
   building is left out: we don't sell it.
   Facts kept from the old page (fresh wording): 900+ profiles reinstated
   and verified, five-to-seven-day average reinstatement, no fix no charge
   on the reinstatement fee, a 48-hour response standard, wholesale partner
   rates with no minimum volume, clients never see Zonic. No prices,
   figures or company names. Rendered by IndustryTemplate; no retail
   pricing section (the plans are for business owners, not agencies). */

export const CONTENT: IndustryContent = {
  draftSlug: "white-label-services",
  liveUrl: "/services/white-label-services",
  niche: "White Label SEO",
  schema: {
    name: "White Label SEO Services",
    serviceType: "White Label SEO",
    parent: { name: "Services", url: "/services" },
  },
  meta: {
    title: "White Label SEO Services for Agencies | Local SEO, GMB & PPC",
    description:
      "White label SEO services for agencies: local SEO, GMB management and reinstatement, web design, PPC and AI SEO, delivered and reported under your own brand.",
    keywords: [
      "white label seo services",
      "white label seo services for agencies",
      "white label seo",
      "white label local seo services",
      "white label local seo",
      "white label seo reseller",
      "seo reseller program",
      "white label gmb services",
      "white label google business profile management",
      "white label seo report",
      "white label web design",
      "white label ppc management",
      "white label google ads management",
      "white label ai seo",
      "private label seo",
      "what is white label seo",
    ],
  },
  palette: PALETTES.indigoTeal,
  hero: {
    h1Lead: "White Label SEO Services",
    h1Icon: "layers",
    h1Rest: "for Agencies That Want More Retainers",
    lead: [
      "Sell local SEO, ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Google Business Profile management",
      },
      ", websites and ads under your own logo. Our specialists do the work behind the scenes, report in your branding and never speak to your clients, so you can take on more accounts without hiring.",
    ],
    cta: "Apply as a White Label Partner",
    bento: {
      kind: "tiles",
      wide: {
        icon: "layers",
        title: "Your logo on every report",
        sub: "Clients only ever see your agency",
        chips: ["Local SEO", "GMB", "Web design", "PPC", "AI SEO"],
      },
      left: {
        icon: "shield",
        title: "Suspended profiles back",
        sub: "Reinstatement handled for your clients",
      },
      right: {
        icon: "trend",
        title: "More retainers sold",
        sub: "Delivered without new hires",
      },
      bottom: {
        title: "Margins you control",
        sub: "Wholesale partner rates, your retail price",
      },
    },
  },
  services: {
    title: "White Label SEO Services You Can Resell as Your Own",
    lead: "Pick one service or bundle several. Each one is fulfilled by our team and delivered in your agency's name.",
    cta: "See Partner Options",
    items: [
      {
        icon: "pin",
        title: "White Label Local SEO Services",
        desc: "Map Pack and organic rankings for your local clients through on-page work, citations and the city and service pages Google rewards.",
        points: [
          "Map Pack and organic gains",
          "Citation and NAP cleanup",
          "Service and city pages",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "Local SEO for home services",
          },
        ],
      },
      {
        icon: "star",
        title: "White Label GMB Management",
        desc: "Monthly Google Business Profile care for every client: categories, services, posts, photos, questions and review replies kept current.",
        points: [
          "Weekly profile posts",
          "Review reply drafts",
          "Category and service audits",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Business Profile optimization",
          },
        ],
      },
      {
        icon: "shield",
        title: "Profile Reinstatement and Verification",
        desc: "Suspended or stuck in verification? We find the cause, fix it and see the case through while you stay the client's contact.",
        points: [
          "Suspension cause found",
          "Appeal written and filed",
          "Video verification support",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "GBP reinstatement",
          },
          {
            href: "/services/gmb-verification-help",
            label: "GMB verification help",
          },
        ],
      },
      {
        icon: "monitor",
        title: "White Label Web Design and Development",
        desc: "Fast WordPress sites built for local businesses, with clear calls to action and pages ready to rank, handed over in your name.",
        points: [
          "Mobile-first WordPress builds",
          "Service and city pages",
          "Launch-ready SEO basics",
        ],
        links: [{ href: "/services/web-design", label: "Website design" }],
      },
      {
        icon: "target",
        title: "White Label PPC Management",
        desc: "Google Ads campaigns set up, tracked and tuned for your clients, with every call and form recorded and reported under your brand.",
        points: [
          "Search and call campaigns",
          "Conversion tracking",
          "Weekly bid and query checks",
        ],
        links: [
          { href: "/services/google-ads", label: "Google Ads management" },
        ],
      },
      {
        icon: "sparkle",
        title: "White Label AI SEO for AEO and GEO",
        desc: "Get client businesses quoted in Google AI Overviews and recommended by ChatGPT, Gemini and Perplexity, sold as part of your SEO.",
        points: [
          "Answer-first content",
          "Schema and entity facts",
          "AI mention checks",
        ],
        links: [
          { href: "/services/ai-seo-services", label: "AI SEO services" },
        ],
      },
    ],
  },
  growth: {
    title: "How Our White Label Program Grows Your Agency",
    lead: "You sell and own the relationship. We handle the delivery, the reporting and the hard cases.",
    rows: [
      {
        title: "White Label SEO Reports Branded as Your Agency",
        body: [
          "Every month your clients get a clear report with your logo, your colors and your name: rank movement for the searches they care about, profile activity and the work completed. Nothing in it points back to us, and the format can match the template you already send.",
        ],
        points: [
          "Your logo and colors",
          "Rank movement by search",
          "Work completed listed",
          "Matches your template",
        ],
        cta: "See a Sample Branded Report",
        ui: {
          kind: "brandReport",
          title: "Monthly SEO report",
          client: "Prepared for Lakeside Dental",
          ranks: [
            ["dentist near me", 9, 3],
            ["teeth whitening lakeside", 14, 4],
            ["emergency dentist", 11, 2],
          ],
          done: [
            "Profile posts live",
            "Citations corrected",
            "New service page",
          ],
          note: "No Zonic name anywhere in the report",
        },
      },
      {
        title: "White Label GMB Services for Suspended and Unverified Profiles",
        body: [
          "A suspended profile can cost a client most of their calls overnight. Our team has reinstated and verified 900+ profiles, so you can say yes when one lands on your desk. We trace the trigger, prepare the evidence and handle the appeal, and you tell the client the good news. More on our ",
          {
            href: "/services/gbp-reinstatement-service",
            label: "Google Business Profile reinstatement service",
          },
          ".",
        ],
        points: [
          "900+ profiles reinstated",
          "Five to seven days on average",
          "No fix, no charge",
          "You stay the contact",
        ],
        cta: "Send Us a Suspended Profile",
        ui: {
          kind: "caseTracker",
          title: "Reinstatement case",
          client: "Client: Ridgeway Roofing",
          steps: [
            "Suspension trigger found",
            "Evidence gathered",
            "Appeal filed with Google",
            "Profile reinstated",
          ],
          toast: "Profile live again",
          toastNote: "Your agency shares the news with the client",
        },
      },
      {
        title: "White Label Local SEO That Lifts Clients Into the Map Pack",
        body: [
          "Local clients judge you by one thing: whether they show up when nearby customers search. We work the profile, citations, reviews and location pages until they do, then keep them there. It is the same playbook behind our ",
          {
            href: "/services/local-seo-for-home-services",
            label: "home services local SEO",
          },
          ", delivered under your name.",
        ],
        points: [
          "Profile and category work",
          "Citations and reviews",
          "Location pages that rank",
          "Rank tracking by area",
        ],
        cta: "Plan a Local SEO Client",
        ui: {
          kind: "maps",
          query: "plumber near me",
          city: "Your client's city",
          category: "Plumber",
        },
      },
      {
        title: "SEO Reseller Fulfillment Your Team Never Has to Chase",
        body: [
          "Send a brief and the work starts. Each client has a clear task list, due dates and a status you can check, and we answer partner requests within a 48-hour standard, usually much sooner. Your team spends its time selling, not following up.",
        ],
        points: [
          "Simple client intake",
          "Status for every task",
          "48-hour response standard",
          "Timelines agreed upfront",
        ],
        cta: "Start a Partner Account",
        ui: {
          kind: "partnerQueue",
          title: "Partner work this week",
          rows: [
            ["Lakeside Dental", "Monthly profile posts", "Done"],
            ["Ridgeway Roofing", "Suspension appeal", "In review"],
            ["Harbor Law Group", "City landing pages", "Live"],
            ["Summit Heating", "Citation cleanup", "Queued"],
          ],
          note: "Every client tracked in one queue",
        },
      },
      {
        title: "White Label Web Design and Development for Client Sites",
        body: [
          "When a client's site holds their rankings back, offer a rebuild without a developer on payroll. We design fast, mobile-first WordPress sites with service and city pages, call buttons and forms, typically live in two to three weeks. See how we approach ",
          { href: "/services/web-design", label: "website design" },
          ".",
        ],
        points: [
          "Mobile-first builds",
          "Pages ready to rank",
          "Calls and forms tracked",
          "Live in two to three weeks",
        ],
        cta: "Scope a Client Website",
        ui: {
          kind: "website",
          url: "yourclient.com",
          headline: "Same-day service from a local team you can trust",
          services: ["Repairs", "Installations", "Maintenance", "Free quotes"],
        },
      },
      {
        title: "White Label PPC Management With Every Lead Tracked",
        body: [
          "Add paid search to your retainers. We build and manage Google Ads campaigns for your clients, track every call and form, and report results in your branding. Ad spend is billed by Google to the client, never marked up. Details on our ",
          { href: "/services/google-ads", label: "Google Ads management" },
          ".",
        ],
        points: [
          "Search and call campaigns",
          "Call and form tracking",
          "Weekly query checks",
          "Spend billed by Google",
        ],
        cta: "Add PPC to Your Offer",
        ui: {
          kind: "calls",
          title: "Calls from client campaigns",
          calls: [
            {
              service: "Emergency plumbing",
              source: "Google Ads · search",
              when: "9:12 AM",
            },
            {
              service: "Roof inspection",
              source: "Google Ads · call ad",
              when: "11:40 AM",
            },
            {
              service: "New patient visit",
              source: "Google Ads · search",
              when: "2:05 PM",
            },
          ],
        },
      },
    ],
  },
  audiences: {
    title: "Who Our White Label SEO Program Is Built For",
    lead: [
      "Two kinds of partners send us work: agencies that need more delivery capacity, and web designers and consultants whose clients keep asking about Google. Both keep the client; we stay invisible. Questions first? ",
      { href: "/contact-us", label: "Talk to our partner team" },
      ".",
    ],
    lanes: [
      {
        audience: "Marketing and SEO agencies",
        icon: "briefcase",
        pitch:
          "You have the clients and the sales process. We add delivery capacity for local SEO, GMB and websites, so you can sign more retainers without adding headcount.",
        query: "New client brief: local SEO and GMB for a dental group",
        flow: [
          "Send the brief",
          "We do the work",
          "Branded report",
          "You bill monthly",
        ],
        badge: "Clients stay yours",
        jobs: [
          {
            name: "Local SEO retainers",
            tactic: "Fulfilled to your process, naming and reporting dates",
          },
          {
            name: "Multi-location GMB programs",
            tactic: "Every location's profile managed on one schedule",
          },
          {
            name: "Overflow and backlog work",
            tactic: "Extra hands when your own team is at capacity",
          },
        ],
      },
      {
        audience: "Web designers, consultants and freelancers",
        icon: "users",
        pitch:
          "Your clients already ask you to fix their Google listing or get them found. Say yes, hand the work to us and keep both the client and the margin.",
        query: "Client asks: can you fix our Google listing?",
        flow: [
          "Say yes",
          "Hand it to us",
          "We fix it quietly",
          "You keep the client",
        ],
        badge: "A new service line, no hire",
        jobs: [
          {
            name: "Google listing fixes",
            tactic: "Profile cleanup, verification and suspension help",
          },
          {
            name: "SEO after the website launch",
            tactic: "Monthly local SEO sold as your own care plan",
          },
          {
            name: "AI search readiness",
            tactic: "AEO and GEO checks added to the sites you build",
          },
        ],
      },
    ],
    addOns: {
      title: "Services Partners Add Most Often",
      items: [
        "Profile reinstatement",
        "Video verification",
        "Citation cleanup",
        "Review replies",
        "City landing pages",
        "AI search audits",
      ],
    },
    cta: "Talk About a Partnership",
  },
  aiSearch: {
    title: "White Label AI SEO: AEO and GEO Your Clients Will Ask About",
    lead: [
      "Business owners now hear that customers ask ChatGPT and Google's AI Overviews who to hire. With our ",
      { href: "/services/ai-seo-services", label: "AI SEO services" },
      " behind you, your agency can sell answer engine and generative engine optimization as a new line, branded as yours.",
    ],
    prompt:
      "Who is a well-reviewed family dentist near me with Saturday hours?",
    answer: "For a family dentist with Saturday appointments,",
    reasons: [
      "Clear pages for each treatment",
      "Many recent reviews",
      "Same details on every listing",
    ],
    tactics: [
      {
        tag: "AEO",
        icon: "chat",
        title: "Answer-Ready Client Pages",
        text: "Service pages open with short, direct answers to the questions customers ask, written so AI Overviews and assistants can quote them accurately.",
      },
      {
        tag: "AEO",
        icon: "layers",
        title: "Schema on Every Key Page",
        text: "FAQ, service and local business markup tells answer engines exactly what each client offers, where they work and how to contact them.",
      },
      {
        tag: "GEO",
        icon: "check",
        title: "One Set of Facts Everywhere",
        text: "Name, services, hours and service areas match across the website, Business Profile and directories, so assistants trust the business enough to recommend it.",
      },
      {
        tag: "GEO",
        icon: "star",
        title: "Reviews That Name the Work",
        text: "We help clients earn reviews that mention the service and the town, the kind of evidence generative engines use when choosing who to suggest.",
      },
    ],
    cta: "Add AI SEO to Your Offer",
  },
  ownLeads: {
    title: "White Label SEO vs Hiring an In-House Team",
    body: [
      "Hiring SEO staff means months of recruiting and training before a single client sees results. A white label partner gives you a trained team from the first brief, priced per client. Prefer to keep some work in-house? Many partners send us only the ",
      {
        href: "/services/gmb-verification-help",
        label: "verification and reinstatement cases",
      },
      ".",
    ],
    cta: "Compare It for Your Agency",
    colShared: "In-house hire",
    colOwn: "Zonic white label",
    rows: [
      [
        "Getting started",
        "Recruit, train and buy tools",
        "Start with your first brief",
      ],
      [
        "Cost model",
        "Salaries whether busy or not",
        "Wholesale rate per client",
      ],
      [
        "Suspended profiles",
        "Learned on client accounts",
        "900+ reinstated already",
      ],
      ["Capacity", "Fixed by headcount", "Grows with your pipeline"],
      ["Branding", "Your brand", "Your brand, never ours"],
      ["Commitment", "Payroll every month", "No minimum volume"],
    ],
  },
  specialties: {
    title: "Everything in Our White Label Reseller Program",
    lead: "Resell any of these on its own or as part of a bundle. Each is delivered by the same in-house team.",
    items: [
      {
        icon: "pin",
        name: "Client Profile Optimization",
        tactic: "Categories, services, photos and posts set up right",
      },
      {
        icon: "shield",
        name: "Suspended Client Profiles",
        tactic: "Suspension cause fixed and the appeal handled",
      },
      {
        icon: "check",
        name: "Profile Verification",
        tactic: "Video and document verification guided end to end",
      },
      {
        icon: "layers",
        name: "Citation Building and Cleanup",
        tactic: "Consistent name, address and phone across directories",
      },
      {
        icon: "star",
        name: "Review Management",
        tactic: "Review requests and reply drafts in the client's voice",
      },
      {
        icon: "file",
        name: "Local SEO Content",
        tactic: "Service and location pages written ready to publish",
      },
      {
        icon: "monitor",
        name: "Agency-Branded WordPress Sites",
        tactic: "Fast local business sites delivered under your brand",
      },
      {
        icon: "sparkle",
        name: "AI Search Audits",
        tactic: "Where a client appears in AI answers, and how to fix it",
      },
    ],
    more: "Need a service that isn't listed? Ask our partner team",
  },
  steps: {
    title: "How the SEO Reseller Program Works",
    lead: "Three steps from first call to branded results, with no setup fee and no minimum number of clients.",
    items: [
      {
        h: "Agree the Partnership",
        p: "A short call to set wholesale rates, branding rules, report format and how you'd like updates delivered.",
      },
      {
        h: "Send Client Work",
        p: "Share a brief and the client's access through our intake form. We confirm scope and timelines before starting.",
      },
      {
        h: "We Deliver in Your Name",
        p: "Our team does the work and hands back branded reports on schedule. You present the results and bill your client.",
      },
    ],
    audit: [
      ["Branded report template", "good"],
      ["Client access checklist", "good"],
      ["Wholesale rate sheet", "open"],
      ["Partner update channel", "good"],
    ],
    plan: ["Local SEO", "GMB management", "Reinstatement", "Web design", "PPC"],
    uiTitles: {
      audit: "Partner setup",
      auditChip: "Day one",
      plan: "Services you resell",
      launch: "First client checklist",
    },
    launch: [
      "Brief received",
      "Access confirmed",
      "Work underway",
      "First branded report",
    ],
  },
  reviews: {
    title: "What Business Owners Say About Our Work",
    lead: "Partners resell the same work these businesses rate us for on Google.",
  },
  faq: {
    title: "White Label SEO FAQs for Agencies",
    lead: "Straight answers on branding, pricing, reporting and the services you can resell.",
    items: [
      {
        q: "What is white label SEO?",
        a: "White label SEO is search work done by a specialist team and sold by your agency under your own brand. We handle the rankings, Google Business Profile and content work; you own the client relationship, set the price and deliver every report with your logo.",
      },
      {
        q: "What's the difference between white label SEO and an SEO reseller program?",
        a: "The terms overlap. An SEO reseller program usually means you resell a provider's packages, while white label means the work, reports and messages carry only your brand. Ours is both: you resell our fulfillment, and nothing a client sees mentions Zonic Media.",
      },
      {
        q: "Is private label SEO the same thing?",
        a: "Private label SEO is another name for the same model: a partner fulfills SEO that you sell as your own. Some providers use the term for custom work and white label for packaged services. With us, the work and the branding rules are the same either way.",
      },
      {
        q: "Will my clients ever know you're involved?",
        a: "No. We never contact your clients, and every report, deliverable and update goes out in your agency's name. If a client needs a strategy call, you lead it and we brief you beforehand.",
      },
      {
        q: "Who owns the client accounts and data?",
        a: "Your client and your agency do. Business Profiles, Google Ads accounts, analytics and websites stay in the client's name with your agency as manager. We work through delegated access, which ends cleanly if you ever move the work.",
      },
      {
        q: "How is white label SEO priced for agencies?",
        a: "Partners get wholesale rates on each service, below our standard pricing, and set their own retail price. There is no minimum number of clients and work runs month to month, so you only pay for accounts you have sold. We share the rate sheet after a short call.",
      },
      {
        q: "What do white label SEO reports include?",
        a: "Monthly reports in your branding show rank changes for target searches, Business Profile activity, calls and form leads where tracking allows, and the work completed that month. We can match your existing report template or supply an unbranded one.",
      },
      {
        q: "Can you reinstate a suspended Google Business Profile for my client?",
        a: "Yes. Reinstatement is our specialty, with 900+ profiles reinstated and verified. Cases resolve in five to seven business days on average, and the reinstatement fee follows a no fix, no charge policy. You stay the client's point of contact the whole time.",
      },
      {
        q: "Do you offer white label web design and PPC management?",
        a: "Yes. We build fast WordPress sites for agency clients, typically live in two to three weeks, and manage Google Ads campaigns with call and form tracking. Ad spend is billed by Google to the client, and everything is reported in your brand.",
      },
      {
        q: "Can you add AI SEO, AEO and GEO, to my clients' plans?",
        a: "Yes. We optimize client sites and profiles to be quoted in Google AI Overviews and recommended by ChatGPT, Gemini and Perplexity, using answer-first pages, schema, consistent business facts and reviews that name the service. Sell it as an add-on or inside your SEO retainer.",
      },
    ],
  },
  audit: {
    title: "Apply to Become a White Label Partner",
    lead: [
      "Tell us about your agency and the services you'd like to resell. We'll reply with partner rates, a sample branded report and next steps. Prefer to read more first? See ",
      { href: "/about", label: "who we are" },
      " or ",
      { href: "/services", label: "every service we offer" },
      ".",
    ],
    points: [
      "Wholesale partner rates",
      "No minimum volume",
      "Reports in your brand",
      "48-hour response standard",
    ],
    form: {
      formType: "white-label-services",
      badge: "Partner application",
      title: "Tell Us About Your Agency",
      subtitle: "We'll reply with partner rates and a sample branded report.",
      submitText: "Apply as a Partner",
      messageLabel: "Services you want to resell",
      messagePlaceholder:
        "e.g. local SEO and GMB management for a few dental clients, plus one suspended profile",
    },
  },
  banner: {
    title: "Grow Your Agency Without Growing Payroll",
    lead: "Resell local SEO, GMB, websites and ads under your brand, delivered by a team your clients will never meet.",
    icons: ["layers", "handshake"],
  },
};
