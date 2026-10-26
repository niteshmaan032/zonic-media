import { PALETTES } from "../palettes";
import type { IndustryContent } from "../types";

/* WINDOW AND DOOR MARKETING AGENCY — redesign draft content (25 Oct 2026).

   Rank safety: Semrush API units were exhausted, so no ranking report was
   pulled. The live title's core term ("Window & Door Marketing Agency")
   stays at the front of the new title, and every phrase in the live
   keywords meta is carried by the title, H1, an H2/H3 or an FAQ question:
   window and door marketing agency (title, H1) · marketing agency for
   impact windows (FAQ) · window replacement marketing (growth H2) · window
   company marketing agency (FAQ) · door installation marketing
   (specialties H2) · window and door leads (own-leads H2) · window company
   seo (service H3) · window replacement google ads (service H3) · window
   and door marketing company (FAQ) · window and door advertising agency
   (FAQ) · window and door internet marketing (services H2) · window and
   door lead generation (steps H2).
   - Web research (25 Oct): replacement buyers compare materials, glass
     and installers for weeks and request several quotes, so speed of
     follow-up, galleries, warranties and easy consultation booking win;
     energy efficiency is a top buyer priority (no savings claims on the
     page); shared lead sites sell one request to several installers;
     impact products need hurricane-zone pages; no showroom content on
     competitor pages, so consultation and showroom booking is a gap.
   Fresh wording only: nothing reused from the live page or other drafts. */

export const CONTENT: IndustryContent = {
  draftSlug: "window-and-door-marketing-agency-2",
  liveUrl: "/services/window-and-door-marketing-agency",
  niche: "Window and Door",
  meta: {
    title: "Window & Door Marketing Agency | Replacement SEO, Ads & Leads",
    description:
      "Window and door marketing agency for replacement companies and window and door contractors: SEO, Google Maps, Google Ads and more booked consultations.",
    keywords: [
      "window and door marketing agency",
      "marketing agency for impact windows",
      "window replacement marketing",
      "window company marketing agency",
      "door installation marketing",
      "window and door leads",
      "window company seo",
      "window replacement google ads",
      "window and door marketing company",
      "window and door advertising agency",
      "window and door internet marketing",
      "window and door lead generation",
      "window replacement leads",
      "window company marketing",
      "impact window marketing",
    ],
  },
  palette: PALETTES.fuchsiaIndigo,
  hero: {
    h1Lead: "Window and Door",
    h1Icon: "window",
    h1Rest: "Marketing Agency for More Booked Consultations",
    lead: [
      "Replacement buyers research for weeks, compare a few companies and then book an in-home or showroom visit. We make sure they book yours, with window company SEO, ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Google Business Profile upkeep",
      },
      ", Google Ads and a ",
      {
        href: "/services/window-and-door-website-design",
        label: "window and door website",
      },
      " built to schedule consultations.",
    ],
    cta: "Get My Free Window Audit",
    bento: {
      kind: "tiles",
      wide: {
        icon: "pin",
        title: "Top 3 for window replacement",
        sub: "In the towns where you want projects",
        chips: [
          "Replacement windows",
          "Entry doors",
          "Patio doors",
          "+ your town",
        ],
      },
      left: {
        icon: "calendar",
        title: "More booked consultations",
        sub: "In-home visits and showroom appointments",
      },
      right: {
        icon: "sun",
        title: "Win energy-upgrade projects",
        sub: "Pages for drafty, foggy and failing windows",
      },
      bottom: {
        title: "A steady project pipeline",
        sub: "Follow-ups that keep slow deciders moving",
      },
    },
  },
  services: {
    title: "Digital Marketing for Window and Door Companies, From One Team",
    lead: "Six services aimed at homeowners planning a replacement project.",
    cta: "Audit My Window Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Maps for Window Companies",
        desc: "Categories, products, showroom hours and install photos set up so you rank when nearby homeowners search for replacement windows.",
        points: [
          "Products and services listed",
          "Showroom details added",
          "Reinstatement if suspended",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Profile setup and optimization",
          },
          {
            href: "/services/gbp-reinstatement-service",
            label: "GBP reinstatement",
          },
        ],
      },
      {
        icon: "search",
        title: "Window Company SEO",
        desc: "Pages for each window style, door type and town, with citations and technical fixes that lift you for high-value replacement searches.",
        points: [
          "Style and material pages",
          "Town landing pages",
          "Rank tracking by city",
        ],
        links: [
          {
            href: "/services/industry/local-seo-for-window-and-door-companies",
            label: "Local SEO for window companies",
          },
        ],
      },
      {
        icon: "target",
        title: "Window Replacement Google Ads",
        desc: "Search ads plus Local Services Ads for replacement and door searches, with repair-only and DIY clicks filtered out and every consultation tracked.",
        points: [
          "Campaigns by product line",
          "Consultation call tracking",
          "0% ad-spend markup",
        ],
        links: [
          { href: "/services/google-ads", label: "Replacement ad management" },
        ],
      },
      {
        icon: "monitor",
        title: "Window Websites Built to Book Visits",
        desc: "Fast pages with product galleries, financing details, a consultation scheduler and click-to-call, built for slow, careful buyers.",
        points: [
          "Online consult scheduler",
          "Style and color galleries",
          "Every request tracked",
        ],
        links: [
          {
            href: "/services/window-and-door-website-design",
            label: "Window and door websites",
          },
          { href: "/services/web-design", label: "Custom web design" },
        ],
      },
      {
        icon: "star",
        title: "Reviews and Project Follow-Up",
        desc: "Review requests after each install and gentle follow-ups on open quotes keep trust high and stalled projects moving.",
        points: [
          "Post-install review texts",
          "Owner replies written",
          "Quote follow-up sequences",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "Home services local SEO",
          },
        ],
      },
      {
        icon: "sparkle",
        title: "AI Search for Window Companies",
        desc: "Detailed product pages, consistent listings and project reviews help AI assistants like ChatGPT and Gemini recommend you with confidence.",
        points: [
          "Matching listings",
          "Product-rich reviews",
          "Buyer FAQ pages",
        ],
        links: [
          { href: "/services/ai-seo-services", label: "AI SEO services" },
        ],
      },
    ],
  },
  growth: {
    title:
      "Local Marketing for Window and Door Companies That Fills Your Calendar",
    lead: "Maps, AI answers and tracked ads, timed to a long buying cycle.",
    rows: [
      {
        title: "Rank in the Map Pack for “Window Replacement Near Me”",
        body: [
          "Homeowners shortlisting window companies start on the map and read reviews before calling. We optimize your profile with products and showroom details, add a page for each town and keep install photos and reviews fresh. Opening a new location? Get ",
          {
            href: "/services/gmb-verification-help",
            label: "help verifying it",
          },
          ".",
        ],
        points: [
          "Window and door categories",
          "Town pages",
          "Install photo posts",
          "Showroom hours listed",
        ],
        cta: "See My Map Position",
        ui: {
          kind: "maps",
          query: "window replacement near me",
          city: "Raleigh",
          category: "Window installation service · Showroom open",
        },
      },
      {
        title: "Get Named When Buyers Ask AI About Windows",
        body: [
          "Buyers ask ChatGPT and Gemini which company to trust for energy-efficient windows or a new entry door. Our ",
          {
            href: "/services/ai-seo-services",
            label: "AI search optimization",
          },
          " feeds those assistants solid details: listings that match, reviews naming the products installed and pages explaining glass options, warranties and install steps.",
        ],
        points: [
          "Consistent listings",
          "Product-specific reviews",
          "Warranty details shown",
          "Glass and frame FAQs",
        ],
        cta: "Audit My AI Mentions",
        ui: {
          kind: "ai",
          query:
            "best window replacement company in columbus for energy efficient windows",
          intro: "For energy-efficient window replacement in Columbus,",
          bullets: [
            "Low-E and double-pane options",
            "In-home consultations",
            "Certified, insured installers",
          ],
        },
      },
      {
        title: "Paid Search That Books In-Home Visits",
        body: [
          "Replacement projects come with long research periods, so we run search campaigns alongside Local Services Ads that target ready-to-buy searches, retarget visitors who browsed your styles, and trace every call and form to the keyword behind it.",
        ],
        points: [
          "Product-line campaigns",
          "Local Services Ads",
          "Retargeting for researchers",
          "Call and form tracking",
        ],
        cta: "Plan My Window Ads",
        ui: {
          kind: "calls",
          title: "Consultation requests this week",
          calls: [
            {
              service: "Whole-house window replacement",
              source: "Google Ads · Call",
              when: "Mon 10:24 AM",
            },
            {
              service: "Sliding patio door install",
              source: "Local Services Ads",
              when: "Wed 4:51 PM",
            },
            {
              service: "Fiberglass entry door",
              source: "Google Ads · Form",
              when: "Sat 9:15 AM",
            },
          ],
        },
      },
    ],
  },
  ownLeads: {
    title: "Window and Door Leads You Don't Share",
    body: [
      "Shared lead sites sell the same replacement request to several installers, then everyone races to call and discount. Our ",
      { href: "/services", label: "full marketing program" },
      " brings homeowners straight to your showroom and calendar instead.",
    ],
    cta: "Get My Own Window Leads",
    colShared: "Shared lead sites",
    colOwn: "Your own consultations",
    rows: [
      [
        "Who gets the homeowner",
        "Several installers at once",
        "Your sales team alone",
      ],
      [
        "What decides the sale",
        "Price cuts",
        "Your reviews, products and process",
      ],
      ["Brand they remember", "The lead site", "Your company and showroom"],
      [
        "When spending pauses",
        "Requests stop",
        "Rankings, pages and reviews remain",
      ],
    ],
  },
  specialties: {
    title: "Window and Door Contractor Marketing, Product by Product",
    lead: "Replacement windows, entry doors and storm protection attract different buyers, so every product line is marketed on its own terms.",
    items: [
      {
        icon: "window",
        name: "Replacement Window Projects",
        tactic: "Style pages for double-hung, casement and slider windows",
      },
      {
        icon: "sun",
        name: "Energy-Efficient Window Upgrades",
        tactic: "Drafty-window pages explaining glass and frame options",
      },
      {
        icon: "storm",
        name: "Impact Windows & Hurricane Doors",
        tactic: "Storm-zone pages covering code and protection details",
      },
      {
        icon: "door",
        name: "Front Entry Door Replacement",
        tactic: "Curb-appeal galleries and design-consult booking forms",
      },
      {
        icon: "home",
        name: "Patio & Sliding Door Installs",
        tactic: "Spring and summer ads for outdoor living projects",
      },
      {
        icon: "shield",
        name: "Storm & Security Doors",
        tactic: "Add-on offers sent after each window install",
      },
      {
        icon: "layers",
        name: "Vinyl, Wood & Fiberglass Product Lines",
        tactic: "Material comparison pages that answer buyer questions",
      },
      {
        icon: "building",
        name: "Commercial Windows & Storefront Glass",
        tactic: "Builder and property-manager outreach with project pages",
      },
    ],
    more: "Sell skylights, bay windows or glass repair? We market those too.",
  },
  steps: {
    title: "Window and Door Lead Generation in Three Steps",
    lead: "Maps and ads go first; search rankings for product pages build steadily after.",
    items: [
      {
        h: "Free Window Market Audit",
        p: "We run replacement window and door searches across your towns, then point out where you place, which installers beat you and what keeps consultations from booking.",
      },
      {
        h: "A Plan Around Your Product Lines",
        p: "We choose the products, towns and campaigns to push first, weighted toward the projects you most want, like whole-house replacements or impact upgrades.",
      },
      {
        h: "Launch and Track Every Consultation",
        p: "Profile updates, product pages, ad campaigns and post-install review texts switch on at the same time. Monthly reports show rankings, calls, booked consultations and which search brought each one.",
      },
    ],
    audit: [
      ["Maps rank: window replacement", "behind"],
      ["Products on Google profile", "gap"],
      ["Online consultation booking", "open"],
      ["Reviews vs top 3 installers", "behind"],
    ],
    plan: [
      "Replacement windows",
      "Entry doors",
      "Impact glass",
      "Raleigh",
      "Cary",
    ],
    launch: [
      "Profile products added",
      "Product pages live",
      "Consult tracking on",
      "Review requests running",
    ],
  },
  reviews: {
    title: "Google Reviews From Local Owners We Help Grow",
    lead: "Real reviews from business owners, straight from our own Google listing.",
  },
  pricing: {
    title: "Window and Door Marketing Plans, Cancel Anytime",
    compareTitle: "Compare Window and Door Marketing Plans",
    addOnsTitle: "Add Campaigns for Peak Replacement Season",
    customTitle: "Running several showrooms?",
  },
  faq: {
    title: "Window and Door Marketing FAQs",
    lead: "Consultations, ads, AI search and plans, answered briefly.",
    items: [
      {
        q: "How can a window and door marketing company help my business?",
        a: "It moves homeowners from first search to a booked consultation. That covers Maps rankings for replacement searches, product and town pages, search ads plus Local Services Ads, reviews after each install, follow-ups on open quotes and a website where buyers can schedule an in-home or showroom visit.",
      },
      {
        q: "Why hire a window company marketing agency instead of buying leads?",
        a: "Bought leads are often shared with several installers, so you compete on price from the first call. Your own rankings, ads and reviews bring buyers who already picked you, are easier to close and keep working after a campaign ends. Many companies keep some bought leads while building their own channels.",
      },
      {
        q: "Are you a marketing agency for impact windows and hurricane doors?",
        a: "Yes. Impact products need their own pages, keywords and timing. We build pages that explain code requirements and storm protection in plain words, target coastal and hurricane-zone towns, and run ads ahead of storm season, so homeowners find you while they're still planning.",
      },
      {
        q: "How should window companies market energy-efficient windows?",
        a: "Focus on what homeowners notice: drafts, condensation, noisy rooms and rooms that never feel comfortable. Explain glass packages, frames and ratings in plain words, show real installs and let reviews describe the difference. Avoid promising specific savings; buyers trust claims you can actually prove.",
      },
      {
        q: "Should a window and door advertising agency use Local Services Ads?",
        a: "Usually, alongside search ads. Local Services Ads put a verified badge above the regular results and you pay per lead, which suits replacement searches. Google Ads give more control over product lines, towns and landing pages. We start with whichever fits your market and add the other once tracking shows what books visits.",
      },
      {
        q: "How can a window company get more showroom and in-home consultations?",
        a: "Make booking easy and answer questions early. Add an online scheduler, show products and finishes, explain your process and warranty, and reply quickly when someone asks for a quote. Retargeting ads and email reminders bring back researchers who left without booking.",
      },
      {
        q: "Will AI tools like ChatGPT and Google AI Overviews suggest my window company?",
        a: "They can. AI tools rely on facts they can cross-check, so we keep your listings consistent, earn reviews that mention the products you installed, publish clear pages on glass, frames and warranties, and answer common replacement questions. That gives AI answers a firm basis for including your company.",
      },
      {
        q: "How long does window and door marketing take to work?",
        a: "Ads and profile fixes can bring consultation requests fairly soon. Organic rankings for product and town pages take several months; the pace depends on local competition and where your site starts. Because buyers research for weeks, we track each lead from first visit to booked consultation.",
      },
      {
        q: "How do window companies earn more referrals and repeat projects?",
        a: "Ask at the right time and stay in touch. Request a review and a referral after the final walkthrough, check in when warranty service comes due, and offer entry or storm door upgrades to past window clients. Homeowners who loved one project often hire the same company for the next.",
      },
      {
        q: "What does window and door marketing cost at Zonic Media?",
        a: "Plans run $297, $750 or $1,500 per month, with no annual term. Google bills your ad spend, and we charge no markup on it (0%). Single-showroom companies often start on a smaller plan; firms running several product lines and ads across many towns usually need more.",
      },
    ],
  },
  audit: {
    title: "See Where Your Window Company Loses Consultations",
    lead: [
      "We'll check your Maps rank for replacement searches, compare your reviews, products and ",
      { href: "/services/web-design", label: "website booking flow" },
      " with the installers ranking higher, then send an ordered list of fixes. Want to see the other trades we work with? Visit our ",
      { href: "/industries", label: "industries hub" },
      ".",
    ],
    points: [
      "Month-to-month terms",
      "Reinstatement help on every plan",
      "0% markup on ads",
      "Starting at $297/mo",
    ],
    form: {
      formType: "window-and-door-marketing",
      badge: "Free window audit",
      title: "Request a Window and Door Marketing Audit",
      subtitle: "Free, no obligation.",
      submitText: "Send My Window Audit",
      messageLabel: "Your towns and product lines",
      messagePlaceholder:
        "Areas you serve, windows or doors you push most, and your showroom location if you have one",
    },
  },
  banner: {
    title: "Be the Window Company Homeowners Book First",
    lead: "A free audit shows the gaps between you and the installers getting booked.",
    icons: ["window", "door"],
  },
};
