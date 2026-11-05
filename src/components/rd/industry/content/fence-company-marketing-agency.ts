import { PALETTES } from "../palettes";
import type { IndustryContent } from "../types";

/* FENCE COMPANY MARKETING AGENCY — new live page (5 Nov 2026).

   Keyword map (docs/fence-and-inspector-brief-2026-11.md; volumes from
   reports/research/fence-keywords-2026-11.md, Semrush US): this page owns
   fence company marketing (260), fence contractor marketing (210), fence
   marketing (170), fence company advertising (90), fence company marketing
   agency (50), marketing for fence contractors (50), fencing / fence
   contractor leads (140 / 140), lead generation for fence contractors
   (110) and fence company Google Ads / PPC (70 / 50). "Fence company SEO"
   and "website design" stay out of the title, H1 and H2s: the SEO page
   (/services/industry/fence-company-seo) and the web design page
   (/services/fence-company-website-design) own them and get keyword
   anchors from here.
   Web research (5 Nov): top results cover Map Pack and Business Profile
   work, PPC on "fence installation + city" searches with DIY clicks
   blocked, Local Services Ads, branded campaigns, speed to lead and quote
   follow-up, reviews after the final walk-through, yard signs and
   referrals, spring-weighted demand (prep in winter), and AI answers.
   Homeowners ask about permits, HOA approval, property lines/surveys and
   utility marking before hiring. Gaps in ranking pages: material-by-
   material marketing, commercial and farm work, AI search, lead handling.
   AEO/GEO coverage is the "ai" growth row (no aiSearch section here; the
   SEO and web design fence pages carry it).
   Fresh wording only. No prices, budgets or job costs anywhere. */

export const CONTENT: IndustryContent = {
  draftSlug: "fence-company-marketing-agency",
  liveUrl: "/services/fence-company-marketing-agency",
  niche: "Fence Company",
  meta: {
    title: "Fence Company Marketing Agency | Fence Contractor Leads & Ads",
    description:
      "Fence company marketing for US fence contractors: Google Maps rankings, Google Ads, AI answers and quote follow-up that turn fencing leads into signed jobs.",
    keywords: [
      "fence company marketing",
      "fence company marketing agency",
      "fence contractor marketing",
      "fence marketing",
      "fence marketing agency",
      "fence company advertising",
      "marketing for fence contractors",
      "marketing services for fence installers",
      "digital marketing for fence companies",
      "fence contractor leads",
      "fencing leads",
      "lead generation for fence contractors",
      "fence company google ads",
      "google ads for fence companies",
      "fence company ppc",
      "how to market a fence business",
    ],
  },
  palette: PALETTES.woodGreen,
  hero: {
    h1Lead: "Fence Company",
    h1Icon: "fence",
    h1Rest: "Marketing Agency That Turns Quotes Into Jobs",
    lead: [
      "Homeowners search “fence company near me”, compare the first three profiles and ask the most trusted one for a quote. Our fence company marketing makes that you, with Google Maps work, ",
      {
        href: "/services/industry/fence-company-seo",
        label: "fence company SEO",
      },
      ", estimate-ready ads and ",
      {
        href: "/services/fence-company-website-design",
        label: "fence company website design",
      },
      " built to book measure visits.",
    ],
    cta: "Get My Free Fence Marketing Audit",
    bento: {
      kind: "tiles",
      wide: {
        icon: "pin",
        title: "Top 3 on Google Maps",
        sub: "When locals search for a fence company near them",
        chips: ["Privacy", "Vinyl", "Chain link", "Aluminum", "+ repairs"],
      },
      left: {
        icon: "ruler",
        title: "More measure visits",
        sub: "Booked straight from online estimate requests",
      },
      right: {
        icon: "gate",
        title: "More gate and repair calls",
        sub: "Steady work between the big installs",
      },
      bottom: {
        title: "More quotes signed",
        sub: "Follow-up that turns open estimates into contracts",
      },
    },
  },
  services: {
    title: "Fence Contractor Marketing Services We Run",
    lead: "One team runs each channel, from the first search to the signed fence contract.",
    cta: "Audit My Fence Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Maps Work for Fence Builders",
        desc: "We set categories, service areas, a service for every material and finished-fence photos, so your pin rises when neighbors look for installers.",
        points: [
          "Fence contractor category set",
          "Each material listed as a service",
          "New-profile verification help",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Business Profile optimization",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Google profile verification",
          },
        ],
      },
      {
        icon: "search",
        title: "Organic Rankings for Each Fence Material",
        desc: "Pages for each material, repair service and town, backed by citations and technical cleanup, so installers from the next county fall behind you.",
        points: [
          "Material and style pages",
          "Town and suburb pages",
          "Rank reports by town",
        ],
        links: [
          {
            href: "/services/industry/fence-company-seo",
            label: "Fence company SEO",
          },
          {
            href: "/services/local-seo-for-home-services",
            label: "Local SEO for home services",
          },
        ],
      },
      {
        icon: "target",
        title: "Fence Company PPC & Local Services Ads",
        desc: "Search campaigns split by material, repair and commercial work, with DIY, supply-store and job-seeker clicks blocked before they cost you.",
        points: [
          "Ad groups per material",
          "Your brand name protected",
          "Ad account kept in your name",
        ],
        links: [
          {
            href: "/services/google-ads",
            label: "Google Ads for fence companies",
          },
        ],
      },
      {
        icon: "monitor",
        title: "Estimate-Ready Fence Websites",
        desc: "Fast mobile sites with a measure-request form, galleries sorted by material and tap-to-call on every screen, so comparing homeowners reach you first.",
        points: [
          "Online estimate form",
          "Galleries sorted by material",
          "Every lead tagged by source",
        ],
        links: [
          {
            href: "/services/fence-company-website-design",
            label: "Fence company website design",
          },
          { href: "/services/web-design", label: "Custom web design" },
        ],
      },
      {
        icon: "star",
        title: "Reviews That Mention the Fence You Built",
        desc: "A review text goes out after the final walk-through, asking customers to name the material and town, and we write every owner reply.",
        points: [
          "Texts sent at job close",
          "Owner replies drafted",
          "Suspended profile recovery",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "GBP reinstatement service",
          },
        ],
      },
      {
        icon: "sparkle",
        title: "AI Answer Visibility for Fence Contractors",
        desc: "We give ChatGPT, Gemini, Perplexity and AI Overviews matching facts about your materials, towns and warranty, so they name you when homeowners ask.",
        points: [
          "Matching facts on every listing",
          "Answer-first FAQ blocks",
          "FAQ and service schema",
        ],
        links: [
          { href: "/services/ai-seo-services", label: "AI SEO services" },
        ],
      },
    ],
  },
  growth: {
    title: "Fence Marketing That Wins the Search, the Quote and the Job",
    lead: "Five moves that reach property owners at each step, from the first search to the signed contract.",
    rows: [
      {
        title: "Hold a Map Pack Spot for “Fence Company Near Me”",
        body: [
          "Most fence calls start on Google Maps, where homeowners compare three pins and their reviews. We tune your profile, list every material you install, add the towns you cover and post photos of finished yards weekly. Check today's position with our ",
          {
            href: "/google-maps-business-ranking-tool-online",
            label: "Google Maps ranking tool",
          },
          ".",
        ],
        points: [
          "Fence contractor as primary category",
          "Service-area towns mapped",
          "Finished-yard photos each week",
          "Fake listings flagged",
        ],
        cta: "Check My Fence Map Rank",
        ui: {
          kind: "maps",
          query: "fence company near me",
          city: "Nashville",
          category: "Fence contractor · Free estimates",
        },
      },
      {
        title: "Get Named When Homeowners Ask AI Which Fence Company to Hire",
        body: [
          "More homeowners now ask ChatGPT, Gemini, Perplexity or Google AI Overviews who builds fences nearby. Our ",
          {
            href: "/services/ai-seo-services",
            label: "AI search optimization",
          },
          " covers both sides: answer-first pages on materials, permits and HOA approval that AI can quote, and matching listings plus detailed reviews that make you the business it recommends.",
        ],
        points: [
          "Answer-first permit and HOA pages",
          "FAQ and service schema",
          "Identical facts on every listing",
          "Reviews naming material and town",
        ],
        cta: "Audit My Fence AI Visibility",
        ui: {
          kind: "ai",
          query: "who installs wood privacy fences near columbus ohio",
          intro: "For a wood privacy fence around Columbus,",
          bullets: [
            "Cedar and pressure-treated builds",
            "Permit and HOA paperwork handled",
            "Written workmanship warranty",
          ],
        },
      },
      {
        title: "Show Up for Every Fence Material Homeowners Search",
        body: [
          "Homeowners rarely search “fence” alone; they search vinyl, chain link, cedar privacy or aluminum pool fence. We build a page for each material and style you install, link it to your towns and track where it ranks, all part of our ",
          {
            href: "/services/industry/fence-company-seo",
            label: "SEO for fencing companies",
          },
          ".",
        ],
        points: [
          "Vinyl and chain link pages",
          "Wood privacy style guides",
          "Pool fence safety pages",
          "Rankings tracked per material",
        ],
        cta: "See My Material Rankings",
        ui: {
          kind: "fenceRank",
          title: "Fence searches this month",
          rows: [
            ["vinyl fence installation near me", "Vinyl", "Map Pack #1"],
            ["chain link fence installers", "Chain link", "Top 3"],
            ["cedar privacy fence builder", "Wood", "Map Pack #2"],
            ["aluminum pool fence contractor", "Aluminum", "Top 3"],
          ],
          note: "One page per material, tracked town by town",
        },
      },
      {
        title: "An Online Fence Estimate That Books the Measure Visit",
        body: [
          "Many homeowners want a ballpark before they call anyone, which is why they search for a fence quote or cost calculator. We add an estimate tool where they pick material, height, length and gates, so the request arrives complete. It's part of building ",
          {
            href: "/services/fence-company-website-design",
            label: "fence company websites",
          },
          " that sell.",
        ],
        points: [
          "Material and height picker",
          "Length and gate details",
          "Instant text to your estimator",
          "Measure visit booked online",
        ],
        cta: "Add an Estimate Tool",
        ui: {
          kind: "fenceLine",
          title: "Online fence estimate",
          yard: "Backyard · sloped lot",
          specs: [
            ["Material", "Cedar shadowbox"],
            ["Height", "6 ft"],
            ["Length", "About 170 ft"],
            ["Gates", "1 single + 1 double"],
          ],
          toast: "Estimate request in",
          toastNote: "Measure visit set for Thursday morning",
        },
      },
      {
        title: "Fence Company Google Ads That Fill Your Estimate Board",
        body: [
          "Search ads and Local Services Ads target installation, repair and gate searches in your towns, with every call recorded. Then speed matters: new requests get an instant text reply and open quotes get polite follow-ups, so fewer estimates go cold. Our ",
          { href: "/services/google-ads", label: "Google Ads management" },
          " reports which ads produced signed jobs.",
        ],
        points: [
          "Material and repair campaigns",
          "Calls recorded and tagged",
          "Instant reply to new requests",
          "Quote follow-up reminders",
        ],
        cta: "Plan My Fence Ads",
        ui: {
          kind: "quotePipeline",
          title: "Estimate board · this week",
          stages: ["New request", "Measured", "Quote sent", "Signed"],
          cards: [
            { name: "Dana", job: "Vinyl privacy, backyard", stage: 0 },
            { name: "Marcus", job: "Driveway gate opener", stage: 0 },
            { name: "Priya", job: "Aluminum pool fence", stage: 1 },
            { name: "Tom", job: "Storm-damaged panels", stage: 2 },
            { name: "Elena", job: "Cedar privacy, 6 ft", stage: 2 },
            { name: "Ray", job: "Pasture fence line", stage: 3 },
            { name: "Jess", job: "Chain link dog run", stage: 3 },
          ],
          note: "Each card shows the ad or search behind it",
        },
      },
    ],
  },
  ownLeads: {
    title: "Lead Generation for Fence Contractors, Kept Exclusive",
    body: [
      "Shared lead sites sell one homeowner's fence request to several installers, and the lowest bid often wins. Our ",
      { href: "/services", label: "full-service marketing team" },
      " builds fencing leads that come straight to you through rankings, ads and reviews held in your name, so you can win on quality and speed instead of price.",
    ],
    cta: "Get Fence Leads of My Own",
    colShared: "Shared fence leads",
    colOwn: "Leads you own",
    rows: [
      [
        "Who gets the same request",
        "Three or four other installers",
        "Only your estimator",
      ],
      [
        "How the job is won",
        "Lowest price per foot",
        "Photos, reviews and fast follow-up",
      ],
      [
        "What you pay for",
        "Contact details, booked or not",
        "Rankings and pages you keep",
      ],
      [
        "What the homeowner remembers",
        "The lead site's name",
        "Your truck and yard sign",
      ],
      [
        "Next spring",
        "Buy the same kind of names again",
        "Reviews and rankings already working",
      ],
    ],
  },
  specialties: {
    title: "Marketing for Fence Contractors, Material by Material",
    lead: "A pool owner, a rancher and a property manager buy fences for different reasons, so each job type gets its own pages, ads and photos.",
    items: [
      {
        icon: "fence",
        name: "Wood & Cedar Privacy Fences",
        tactic: "Style galleries and privacy pages ranked by town",
      },
      {
        icon: "home",
        name: "Vinyl Privacy & Picket Fences",
        tactic: "Low-upkeep pitch pages aimed at vinyl searches",
      },
      {
        icon: "pool",
        name: "Ornamental Aluminum & Pool Fences",
        tactic: "Pool-safety explainers and curb-appeal style pages",
      },
      {
        icon: "pets",
        name: "Chain Link & Dog Runs",
        tactic: "Pet-owner pages paired with quick quote forms",
      },
      {
        icon: "farm",
        name: "Farm, Ranch & Pasture Fencing",
        tactic: "Rural service-area pages and acreage request forms",
      },
      {
        icon: "building",
        name: "Commercial & Security Fencing",
        tactic: "Bid-ready pages and ads for property managers",
      },
      {
        icon: "repair",
        name: "Fence Repair & Storm Damage",
        tactic: "Year-round repair pages and post-storm search ads",
      },
      {
        icon: "gate",
        name: "Gates & Automatic Gate Openers",
        tactic: "Gate and opener offers added to every install",
      },
    ],
    more: "Build decks, pergolas or retaining walls too? We market those jobs as well.",
  },
  steps: {
    title: "How We Launch Your Fence Company Advertising",
    lead: "Ads and profile fixes usually move first. Organic rankings climb over the following months, so starting in winter puts pages in place before spring installs.",
    items: [
      {
        h: "A Free Audit of Your Fence Searches",
        p: "We search installation, repair and material terms in every town you serve and report where you appear, who takes those clicks and which fixes come first.",
      },
      {
        h: "A Plan Built Around Your Crews",
        p: "We pick the materials, towns and job types to push first, weighted toward the installs your crews want and away from work you'd rather pass on.",
      },
      {
        h: "Pages, Ads and Follow-Up Go Live",
        p: "Profile changes, material pages, ads, the estimate form and review texts launch together. Each monthly report shows calls, estimate requests and signed fence jobs.",
      },
    ],
    audit: [
      ["Map Pack: fence company near me", "behind"],
      ["Vinyl and chain link pages", "gap"],
      ["Online estimate form", "open"],
      ["Reviews vs nearby installers", "behind"],
    ],
    plan: [
      "Wood privacy",
      "Gate openers",
      "Columbus",
      "Westerville",
      "Repair ads",
    ],
    launch: [
      "Material services added",
      "Fence pages published",
      "Estimate form connected",
      "Review texts switched on",
    ],
  },
  reviews: {
    title: "Reviews Our Contractor Clients Posted on Google",
    lead: "Unedited reviews from service business owners on our Google profile.",
  },
  pricing: {
    title: "Fence Company Marketing Plans, Month to Month",
    compareTitle: "Compare Plans for Fence Contractors",
    addOnsTitle: "Add Spring Install Campaigns",
    customTitle: "Installing across several counties?",
  },
  faq: {
    title: "Fence Marketing Questions Owners Ask Us",
    lead: "Leads, ads, AI answers, timing and cost, answered briefly.",
    items: [
      {
        q: "What does a fence company marketing agency do?",
        a: "It brings in estimate requests from local homeowners and property managers, then helps you close them. That covers Google Maps rankings, pages for each material and town, search ads, a website with a quote form, review collection and quote follow-up, with a monthly report linking every channel to signed fence jobs.",
      },
      {
        q: "How do fence contractors get more leads without buying them?",
        a: "Build channels that send requests to you alone. Rank in the Map Pack for installation and repair searches, publish a page per material, run ads on high-intent searches, reply to every request fast and ask each customer for a review. A yard sign and finished-job photos turn each install into the next neighbor's call.",
      },
      {
        q: "Are Google Ads worth it for fence companies?",
        a: "Usually, when they are tightly targeted. Fence searches are local and ready to buy, so ads for installation, repair and specific materials in your towns can fill the estimate calendar quickly. Waste comes from DIY, supply-store and job-seeker clicks, so we block those, record every call and move budget toward the jobs that sign.",
      },
      {
        q: "What is the best fence company advertising for a local installer?",
        a: "Advertising that meets buyers where they already look. Start with Google search and Maps, add Local Services Ads where they're available, then retarget site visitors with photos of finished yards. Referral asks and job-site signs still help. Track each channel to booked estimates, keep what signs jobs and drop the rest.",
      },
      {
        q: "How do you market a fence business through the winter?",
        a: "Use the quiet months to prepare. Winter is when we publish material pages, collect reviews and set up ads, because organic rankings take months and spring buyers start researching early. Repair, gate and commercial campaigns can keep crews working meanwhile, and many competitors pause, which makes rankings easier to move.",
      },
      {
        q: "Should a fence company website have an online quote tool?",
        a: "Yes. Many homeowners want a rough idea before they call, so a short estimate form asking for material, height, length and gates gets more requests than a plain contact page. Your estimator also arrives knowing the job. We can add one to your current site or include it in a new build.",
      },
      {
        q: "Should fence marketing cover permits, HOA rules and property lines?",
        a: "It should, because it builds trust before the first visit. Homeowners often ask whether they need a permit, HOA approval or a survey before a fence goes in. Pages explaining how you handle permits, HOA submittals, utility marking and property lines rank for those questions and get quoted in AI answers. Rules vary by town, so each page points to local requirements.",
      },
      {
        q: "How does a fence company get recommended by ChatGPT?",
        a: "By being easy to confirm. AI assistants recommend installers they can verify across several sources, so we keep your name, phone, address and services identical everywhere, earn reviews that mention the material and town, publish answer-first pages on materials, permits and repairs, and add FAQ and service schema that ChatGPT, Gemini, Perplexity and AI Overviews can read.",
      },
      {
        q: "How long until fence marketing brings in calls?",
        a: "Ads and Google profile fixes usually produce calls within the first few weeks. Organic rankings for material and town pages build over several months, depending on local competition and how strong your site is today. Monthly reports show rankings, calls and estimate requests, so the trend is visible early.",
      },
      {
        q: "How much does fence company marketing cost with Zonic Media?",
        a: "Plans are $297, $950 or $1,500 a month, billed month to month with no long contract. Google bills your ad spend directly and we add a 0% markup. The right plan depends on how many materials, towns and ad campaigns you want running at once.",
      },
    ],
  },
  audit: {
    title: "See Who Wins the Fence Jobs in Your Towns",
    lead: [
      "We test your Maps position for installation, repair and material searches, look over your Business Profile, compare your reviews with nearby installers and order the fixes by impact. Also run lawn or hardscape crews? See our ",
      {
        href: "/services/landscaping-marketing-agency",
        label: "landscaping marketing services",
      },
      ".",
    ],
    points: [
      "No long-term contract",
      "Plans from $297 per month",
      "0% markup on Google ad spend",
      "Spring campaigns planned early",
    ],
    form: {
      formType: "fence-company-marketing",
      badge: "Free fence marketing audit",
      title: "Request Your Free Fence Marketing Audit",
      subtitle: "Free, with no pressure to sign anything.",
      submitText: "Send My Fence Audit",
      messageLabel: "Your towns and fence services",
      messagePlaceholder:
        "Towns you install in, the materials you want more of, and whether you take commercial or farm work",
    },
  },
  banner: {
    title: "Be the Fence Company the Whole Street Calls Next",
    lead: "Get a free audit and a short list of fixes to make before spring.",
    icons: ["fence", "gate"],
  },
};
