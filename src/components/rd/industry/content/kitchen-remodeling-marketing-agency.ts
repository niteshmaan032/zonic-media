import { PALETTES } from "../palettes";
import type { IndustryContent } from "../types";

/* KITCHEN REMODELING MARKETING AGENCY — redesign draft content (25 Oct 2026).

   Rank safety: Semrush API units are exhausted, so no ranking report was
   pulled. The live title's core term ("Kitchen Remodeling Marketing
   Agency") opens the new title, and every phrase in the live keywords
   meta sits in the title, H1, an H2/H3 or an FAQ question.
   Web research (25 Oct): homeowners search "kitchen remodel near me",
   "kitchen remodeler near me", "cabinet replacement contractor" and
   "design build kitchen remodeler"; top pages cover Maps, SEO, PPC,
   portfolio sites, fast lead response and nurture for long, multi-step
   decisions; AI answers (Gemini, ChatGPT) are a new shortlist step.
   Angle vs sibling remodel drafts: design consultations, long sales
   cycles, follow-up and design-build process.
   Fresh wording only: nothing reused from the live page or other drafts. */

export const CONTENT: IndustryContent = {
  draftSlug: "kitchen-remodeling-marketing-agency-2",
  liveUrl: "/services/kitchen-remodeling-marketing-agency",
  niche: "Kitchen Remodeling",
  meta: {
    title: "Kitchen Remodeling Marketing Agency | SEO, PPC & Design Leads",
    description:
      "Kitchen remodeling marketing agency: kitchen remodeling SEO, Google Maps rankings, Google Ads and lead follow-up that turn planners into design visits.",
    keywords: [
      "kitchen remodeling marketing agency",
      "home remodeling marketing agency",
      "kitchen remodeling leads",
      "kitchen remodel lead generation",
      "kitchen remodeling seo",
      "remodeling contractor marketing",
      "design build marketing agency",
      "home improvement marketing agency",
      "kitchen remodeling marketing company",
      "kitchen remodeling advertising agency",
      "kitchen remodeling internet marketing",
      "kitchen remodeling lead generation",
      "marketing for kitchen remodelers",
      "kitchen remodeling ppc",
      "kitchen remodeling website design",
    ],
  },
  palette: PALETTES.roseEmerald,
  hero: {
    h1Lead: "Kitchen Remodeling",
    h1Icon: "kitchen",
    h1Rest: "Marketing Agency for Booked Design Visits",
    lead: [
      "A new kitchen is a months-long decision, and homeowners shortlist remodelers long before they sign. We keep you on that list with kitchen remodeling SEO, ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Google Maps rankings",
      },
      ", Google Ads, steady follow-up and a ",
      {
        href: "/services/kitchen-remodeling-website-design",
        label: "kitchen remodeling website",
      },
      " that turns your portfolio into booked consultations.",
    ],
    cta: "Get My Free Kitchen Audit",
    bento: {
      kind: "photos",
      photoA: {
        src: "/images/free-website/free-kitchen-remodeling/full-kitchen-remodels.webp",
        position: "50% 50%",
        query: "kitchen remodel near me",
      },
      cardA: {
        icon: "calendar",
        title: "More design consultations",
        sub: "Booked from search and Maps",
      },
      cardB: {
        icon: "trend",
        title: "More signed kitchens",
        sub: "Follow-up that wins slow deciders",
      },
      photoB: {
        src: "/images/free-website/free-kitchen-remodeling/design-build.webp",
        position: "60% 50%",
        query: "design build kitchen remodeler",
      },
    },
  },
  services: {
    title: "Kitchen Renovation Marketing for Long Sales Cycles",
    lead: "Kitchen buyers browse and wait; we keep you visible until they sign.",
    cta: "Audit My Kitchen Marketing",
    items: [
      {
        icon: "pin",
        title: "Maps Listing Built for Kitchen Searches",
        desc: "We set kitchen remodeling categories, list cabinets, countertops and layouts as services, and post finished kitchens so your listing earns clicks.",
        points: [
          "Kitchen services listed",
          "Portfolio photos posted weekly",
          "New-profile verification",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Google Business Profile management",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Get a profile verified",
          },
        ],
      },
      {
        icon: "search",
        title: "Kitchen Remodeling SEO",
        desc: "Pages for each kitchen service, style and neighborhood, backed by citations and technical fixes, so planners find you early in their research.",
        points: [
          "Style and service pages",
          "Neighborhood landing pages",
          "Technical SEO cleanup",
        ],
        links: [
          {
            href: "/services/industry/local-seo-for-kitchen-remodelers",
            label: "Local SEO for kitchen remodelers",
          },
        ],
      },
      {
        icon: "target",
        title: "Google Ads for Kitchen Remodelers",
        desc: "Search and remarketing campaigns that reach homeowners comparing remodelers, then remind them of your work while they decide.",
        points: [
          "Full-project search terms",
          "Remarketing to past visitors",
          "Every consultation tracked",
        ],
        links: [
          { href: "/services/google-ads", label: "Kitchen remodeling PPC" },
        ],
      },
      {
        icon: "monitor",
        title: "Portfolio Websites That Book Consultations",
        desc: "Project galleries sorted by style, a page on your design process, financing options and a calendar for booking design visits.",
        points: [
          "Galleries by kitchen style",
          "Design-process page",
          "Online consultation booking",
        ],
        links: [
          {
            href: "/services/kitchen-remodeling-website-design",
            label: "Kitchen remodeling website design",
          },
          { href: "/services/web-design", label: "Website design services" },
        ],
      },
      {
        icon: "repeat",
        title: "Lead Follow-Up and Nurture",
        desc: "Text and email sequences stay in touch with homeowners who asked about a kitchen but aren't ready to sign yet.",
        points: [
          "Instant inquiry alerts",
          "Timed text and email reminders",
          "Old leads reactivated",
        ],
        links: [{ href: "/services", label: "All our marketing services" }],
      },
      {
        icon: "sparkle",
        title: "Visibility in AI Kitchen Answers",
        desc: "Homeowners now ask AI tools to suggest kitchen remodelers. We publish the facts, reviews and answers those tools look for.",
        points: [
          "Consistent business facts",
          "Project-detailed reviews",
          "Kitchen FAQ content",
        ],
        links: [
          {
            href: "/services/ai-seo-services",
            label: "AI search optimization",
          },
        ],
      },
    ],
  },
  growth: {
    title: "Kitchen Remodeling Lead Generation From Search to Signed Contract",
    lead: "Map rankings start the conversation, AI answers build trust and your website closes the booking.",
    rows: [
      {
        title: "Climb the Map for Every Kitchen Search in Your Area",
        body: [
          "When homeowners begin planning, the map is often where they shortlist. We align your categories, list each kitchen service, post photos of finished rooms every week and earn reviews that mention cabinets and countertops, moving your listing into the top three across your area.",
        ],
        points: [
          "Kitchen remodeler category",
          "Cabinet and countertop services",
          "Finished-kitchen photo posts",
          "Neighborhood rank checks",
        ],
        cta: "Check My Kitchen Map Rank",
        ui: {
          kind: "maps",
          query: "kitchen remodeling near me",
          city: "Naperville",
          category: "Kitchen remodeler · Design consultations",
        },
      },
      {
        title: "Be the Remodeler AI Recommends for a New Kitchen",
        body: [
          "Ask Gemini, ChatGPT or an AI Overview for a design-build kitchen remodeler and it lists a few names with reasons. We give it reasons to list yours: matching business details, reviews describing real projects and ",
          { href: "/services/ai-seo-services", label: "answer-first pages" },
          " about your process.",
        ],
        points: [
          "Business details aligned",
          "Reviews that name the kitchen",
          "Process and timeline pages",
          "Design-build FAQ answers",
        ],
        cta: "Review My AI Presence",
        ui: {
          kind: "ai",
          query: "best design build kitchen remodeler in naperville",
          intro: "For design-build kitchen remodels in Naperville,",
          bullets: [
            "3D layouts before demolition starts",
            "Cabinets, counters and lighting in one contract",
            "One project manager start to finish",
          ],
        },
      },
      {
        title: "A Kitchen Website That Fills Your Consultation Calendar",
        body: [
          "Kitchen shoppers want proof before they share their address. Your site leads with galleries sorted by style, explains your design process and financing options plainly, and lets visitors book a design visit in a few taps, with every request tracked to its source.",
        ],
        points: [
          "Style-sorted galleries",
          "Financing options page",
          "Online design-visit booking",
          "Source tracking on every form",
        ],
        cta: "Plan My Kitchen Website",
        ui: {
          kind: "website",
          url: "yourcompany.com",
          headline: "Kitchens designed and built around how you cook",
          services: ["Full Remodels", "Cabinetry", "Countertops", "Islands"],
        },
      },
    ],
  },
  specialties: {
    title: "A Design Build Marketing Agency for Every Kitchen Service",
    lead: "A full gut remodel and a countertop swap attract different homeowners on different timelines, so we give every service separate pages and campaigns.",
    photo: {
      src: "/images/free-website/free-kitchen-remodeling/custom-cabinetry.webp",
      alt: "Installer fitting soft-close drawers into new custom kitchen cabinets",
      caption: "Cabinet, countertop and island crews",
      sub: "From design visit to final walkthrough",
    },
    items: [
      {
        icon: "kitchen",
        name: "Full Kitchen Remodels",
        tactic: "Portfolio pages and remarketing for months-long decisions",
      },
      {
        icon: "carpenter",
        name: "Custom & Semi-Custom Cabinetry",
        tactic: "Cabinet style galleries with design-visit booking forms",
      },
      {
        icon: "layers",
        name: "Countertop Replacement",
        tactic: "Material comparison pages for quartz, granite and marble",
      },
      {
        icon: "construction",
        name: "Kitchen Islands & Layout Changes",
        tactic: "Before-and-after floor plans that show the change",
      },
      {
        icon: "bolt",
        name: "Lighting & Electrical Upgrades",
        tactic: "Add-on offers placed inside every kitchen project page",
      },
      {
        icon: "clipboard",
        name: "Design-Build Kitchen Projects",
        tactic: "Process pages from first sketch to final walkthrough",
      },
      {
        icon: "home",
        name: "Open-Concept Kitchen Conversions",
        tactic: "Wall-removal project stories ranked for open-plan searches",
      },
      {
        icon: "paint",
        name: "Cabinet Refacing & Refinishing",
        tactic:
          "Lighter-commitment offers that bring in future remodel clients",
      },
    ],
    more: "Building butler's pantries, backsplashes or appliance fit-outs? Those get pages too.",
  },
  steps: {
    title: "Kitchen Remodel SEO Services That Win Signed Projects",
    lead: "Quick wins first on Maps and ads, then the content and follow-up that carry homeowners through a long decision.",
    items: [
      {
        h: "We Review Your Kitchen Pipeline",
        p: "We check where you appear for kitchen searches in your area, how your galleries and reviews compare with nearby remodelers, and how fast inquiries get a reply. You get the findings in plain language.",
      },
      {
        h: "We Choose the Kitchens Worth Pursuing",
        p: "Together we decide which services, styles and neighborhoods to push first, favoring the full remodels and cabinetry projects your team wants more of. Seasonal timing is planned in too.",
      },
      {
        h: "We Build, Nurture and Report",
        p: "Pages, ads and follow-up sequences go live, and each month you see consultations booked, where they came from and which ones became signed kitchens. Adjustments happen every month based on those numbers.",
      },
    ],
    audit: [
      ["Maps rank: kitchen remodel near me", "behind"],
      ["Gallery pages by kitchen style", "gap"],
      ["Reply time to new inquiries", "open"],
      ["Reviews that mention kitchens", "good"],
    ],
    plan: [
      "Full remodels",
      "Custom cabinets",
      "Countertops",
      "Naperville",
      "Wheaton",
    ],
    launch: [
      "Kitchen services on profile",
      "Style galleries published",
      "Follow-up texts scheduled",
      "Remarketing ads live",
    ],
  },
  reviews: {
    title: "What Owners Say About Our Marketing, in Their Own Words",
    lead: "Every review below was posted by a client on our Google Business Profile.",
  },
  pricing: {
    title: "Kitchen Remodeling Marketing Plans Without Annual Contracts",
    compareTitle: "What Each Kitchen Remodeler Plan Includes",
    addOnsTitle: "Extra Pages and Campaigns for New Kitchen Services",
    customTitle: "Kitchen and bath firm with several showrooms?",
  },
  faq: {
    title: "What Kitchen Remodelers Want to Know Before Hiring Us",
    lead: "Answers on consultations, SEO, ads, follow-up, AI search and plans.",
    items: [
      {
        q: "How does a kitchen remodeling marketing company get more design consultations?",
        a: "By meeting homeowners at each stage. Maps rankings and SEO pages catch early research, Google Ads reach active shoppers, galleries and reviews build confidence, and follow-up keeps you in touch until they book. Success is measured in consultations and signed kitchens, not clicks. Reports show which channel produced each booked visit.",
      },
      {
        q: "Where do the best kitchen remodeling leads come from?",
        a: "Usually from homeowners who found you themselves: Maps, organic search, your own ads and referrals from past clients. Those people have already seen your work, so they arrive warmer than names bought from shared lead sites, which pass one homeowner to several remodelers at once. We help you build more of the first kind every month.",
      },
      {
        q: "What is kitchen remodel lead generation, and how is it different from buying leads?",
        a: "Lead generation means building channels that send inquiries straight to you: rankings, ads, a website and reviews. Buying leads rents someone else's inquiries, often shared with competitors. Owned channels keep working after any single month ends, and every homeowner who contacts you chose your company. It also builds a name homeowners recognize the next time they plan a project.",
      },
      {
        q: "How long is a kitchen sales cycle, and how do you follow up?",
        a: "It often runs several months from first search to signed contract, with a design visit and revisions in between. We set up instant inquiry alerts, timed texts and emails, and remarketing ads showing your finished kitchens, so homeowners who pause still remember you when they're ready. Reply speed matters too, because the first remodeler to answer often gets the visit.",
      },
      {
        q: "Does kitchen remodeling SEO still work with AI Overviews at the top of Google?",
        a: "Yes. AI Overviews draw on pages that rank and explain things clearly, so solid kitchen remodeling SEO feeds both. We write service and process pages that answer homeowner questions directly, which helps you rank organically and gives AI summaries something worth citing. We also add structured data so search engines read those pages correctly.",
      },
      {
        q: "Can a kitchen remodeling advertising agency filter out bargain hunters?",
        a: "Largely, yes. We target searches that signal a full project, exclude DIY, cheap and single-item terms, aim ads at the neighborhoods you prefer and send clicks to galleries rather than a bare form. Homeowners who book after seeing your work tend to be better fits. Search terms are reviewed weekly so new waste gets blocked quickly.",
      },
      {
        q: "Can one home remodeling marketing agency handle kitchens and baths together?",
        a: "Yes, as long as each service gets its own pages, keywords and ad groups. Kitchen and bath buyers search differently and decide on different timelines, so we market them side by side without blending them. The setup works whether you sell one or both. Kitchen-and-bath firms can also share reviews and gallery traffic across both services.",
      },
      {
        q: "What does remodeling contractor marketing look like for a design-build firm?",
        a: "It sells the process as much as the result. Design-build firms do best with pages that walk through design, selections and construction, galleries of finished rooms, reviews praising project management and ads that reach homeowners who want one team from plan to final walkthrough. We also track how many consultations turn into signed design agreements.",
      },
      {
        q: "How is Zonic Media different from a general home improvement marketing agency?",
        a: "We report on what matters to remodelers: consultations booked, projects signed and where each one came from. We've optimized 1,500+ Google Business Profiles across 20+ industries, yet every kitchen client gets a plan built around kitchens, not a template shared with roofers or plumbers. Monthly reports show those numbers for your own projects.",
      },
      {
        q: "What are your kitchen remodeling marketing plan prices?",
        a: "You choose from three tiers: $297, $750 or $1,500 per month, with no annual contract. Your ad budget is paid straight to Google, and we add 0% markup. Remodelers starting with Maps and SEO often begin on the first tier; those adding Google Ads and follow-up usually need Growth or higher. You can change tiers as your crews and goals change.",
      },
    ],
  },
  audit: {
    title: "Find the Gaps Between Kitchen Searches and Signed Projects",
    lead: [
      "We review your Maps ranking for kitchen searches, your Business Profile, ",
      { href: "/services/web-design", label: "portfolio site" },
      ", reviews and reply speed next to the remodelers outranking you, and rank the fixes by impact. A suspended listing is covered by our ",
      {
        href: "/services/gbp-reinstatement-service",
        label: "reinstatement service",
      },
      ", and we serve ",
      { href: "/industries", label: "20+ industries" },
      " in total.",
    ],
    points: [
      "Three tiers: $297, $750, $1,500",
      "Ad spend with 0% markup",
      "No annual contract",
      "Suspended listings reinstated",
    ],
    form: {
      formType: "kitchen-remodeling-marketing",
      badge: "Free kitchen audit",
      title: "Request Your Free Kitchen Remodeling Marketing Audit",
      subtitle: "Clear findings, no sales pressure.",
      submitText: "Send My Kitchen Audit",
      messageLabel: "Your area and the kitchen projects you want",
      messagePlaceholder:
        "Towns you cover, project types (full remodels, cabinets, countertops) and how you run design visits",
    },
  },
  banner: {
    title: "Stay on the Shortlist Until They Sign",
    lead: "Request a free audit and get a ranked list of kitchen marketing fixes.",
    icons: ["kitchen", "calendar"],
  },
};
