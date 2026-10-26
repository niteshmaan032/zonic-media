import { PALETTES } from "../palettes";
import type { IndustryContent } from "../types";

/* APPLIANCE REPAIR MARKETING AGENCY — redesign draft content (25 Oct 2026).

   Rank safety: Semrush API units are exhausted, so no ranking report was
   pulled. The live title's core term ("Appliance Repair Marketing Agency")
   is kept in the new title, and every phrase in the live keywords meta is
   carried by the title, H1, an H2/H3 or an FAQ question.
   - Web research (25 Oct): top results for "appliance repair marketing
     agency" cover Google Ads, Local Services Ads, local SEO and web design;
     the strongest pages build brand, appliance and symptom pages, because
     buyers search the brand plus the problem and book within hours. Common
     questions: brand pages, Local Services Ads, competing with manufacturer
     service, which channels bring calls first. AI answers and reviews are
     a gap on most competitor pages.
   - No brand or company names used anywhere (owner rule).
   Fresh wording only: nothing reused from the live page or other drafts. */

export const CONTENT: IndustryContent = {
  draftSlug: "appliance-repair-marketing-agency-2",
  liveUrl: "/services/appliance-repair-marketing-agency",
  niche: "Appliance Repair",
  meta: {
    title: "Appliance Repair Marketing Agency | SEO, Ads & Same-Day Calls",
    description:
      "Zonic Media is an appliance repair marketing agency that brings same-day service calls with appliance repair SEO, brand pages, Google Maps rankings and Google Ads.",
    keywords: [
      "appliance repair marketing agency",
      "appliance repair marketing",
      "appliance repair seo",
      "appliance repair google ads",
      "appliance repair lead generation",
      "appliance repair advertising",
      "marketing for appliance repair companies",
      "appliance repair company marketing",
      "appliance repair marketing company",
      "appliance repair advertising agency",
      "appliance repair internet marketing",
      "appliance repair website design",
      "appliance repair leads",
    ],
  },
  palette: PALETTES.roseCyan,
  hero: {
    h1Lead: "Appliance Repair",
    h1Icon: "kitchen",
    h1Rest: "Marketing Agency for More Same-Day Repair Calls",
    lead: [
      "When a fridge stops cooling or a washer floods the floor, people book the first repair company they trust. We get yours in that spot with appliance repair SEO, ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Business Profile management",
      },
      ", call ads and ",
      {
        href: "/services/appliance-repair-website-design",
        label: "appliance repair website design",
      },
      " built for fast bookings.",
    ],
    cta: "Get My Free Repair Audit",
    bento: {
      kind: "tiles",
      wide: {
        icon: "pin",
        title: "Leading the local repair map",
        sub: "For fridge, washer and oven repair searches near you",
        chips: ["Refrigerators", "Washers", "Dryers", "Ovens", "+ your brands"],
      },
      left: {
        icon: "call",
        title: "More same-day calls",
        sub: "From people with a broken appliance right now",
      },
      right: {
        icon: "star",
        title: "Reviews that win the call",
        sub: "Fresh feedback after every repair ticket",
      },
      bottom: {
        title: "A fuller route every day",
        sub: "Suburb pages that keep jobs close to your vans",
      },
    },
  },
  services: {
    title: "Appliance Repair Company Marketing, Run by One Team",
    lead: "One team runs every channel from broken appliance to booked visit.",
    cta: "Audit My Repair Marketing",
    items: [
      {
        icon: "pin",
        title: "Business Profile & Map Pack Work",
        desc: "Categories, appliance services, brands serviced, hours and job photos set so your listing climbs for urgent repair searches nearby.",
        points: [
          "Brands and appliances listed",
          "Fresh repair photos",
          "Reinstatement if suspended",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Map Pack optimization",
          },
          {
            href: "/services/gbp-reinstatement-service",
            label: "Suspended profile help",
          },
        ],
      },
      {
        icon: "search",
        title: "Appliance Repair SEO by Brand and Appliance",
        desc: "Separate pages for each appliance, brand and symptom you fix, plus suburb pages and citations, so you rank for the exact problem people type.",
        points: [
          "Brand and model pages",
          "Symptom-led repair pages",
          "Suburb coverage pages",
        ],
        links: [
          {
            href: "/services/industry/local-seo-for-appliance-repair",
            label: "Local SEO for appliance repair",
          },
          {
            href: "/services/local-seo-for-home-services",
            label: "Home service local SEO",
          },
        ],
      },
      {
        icon: "target",
        title: "Appliance Repair Google Ads Built Around Dispatch",
        desc: "Call-first search ads and Local Services Ads shown during your working hours, with replace-or-buy shoppers and parts hunters filtered out.",
        points: [
          "Call-only campaigns",
          "Hours-based scheduling",
          "0% ad-spend markup",
        ],
        links: [
          {
            href: "/services/google-ads",
            label: "Repair shop PPC management",
          },
        ],
      },
      {
        icon: "monitor",
        title: "Repair Booking Websites",
        desc: "Mobile-first sites with a tap-to-call button, a short booking form, appliance menus and service-area maps, so visitors book in seconds.",
        points: [
          "Tap-to-call everywhere",
          "Online booking requests",
          "Calls and forms tracked",
        ],
        links: [
          {
            href: "/services/appliance-repair-website-design",
            label: "Appliance repair websites",
          },
        ],
      },
      {
        icon: "star",
        title: "Reviews That Win the Next Call",
        desc: "Each completed ticket triggers a text requesting a Google review; we write the replies, so your rating stays fresh where people compare shops.",
        points: [
          "Texts after every ticket",
          "Replies in your voice",
          "Low-rating alerts",
        ],
        links: [{ href: "#ind-audit", label: "See my review gap" }],
      },
      {
        icon: "sparkle",
        title: "AI Answer Visibility for Repair Shops",
        desc: "We give ChatGPT, Gemini and AI Overviews consistent facts, detailed reviews and clear repair pages, so they suggest you for urgent fixes.",
        points: [
          "Consistent listings",
          "Reviews naming the repair",
          "Plain-answer repair FAQs",
        ],
        links: [
          { href: "/services/ai-seo-services", label: "AI SEO services" },
        ],
      },
    ],
  },
  growth: {
    title: "Marketing for Appliance Repair Companies That Need Calls Today",
    lead: "Maps, AI answers and call ads, aimed at people with a broken appliance and no patience to wait. Every channel reports back to the same call log.",
    rows: [
      {
        title: "Rank on the Map for “Appliance Repair Near Me”",
        body: [
          "Urgent repair searches mostly end on the map, not the website list. We fill your profile with every appliance and brand you service, ",
          {
            href: "/services/gmb-verification-help",
            label: "verify new locations",
          },
          ", publish suburb pages and keep repair photos current. Check your position with our ",
          {
            href: "/google-maps-business-ranking-tool-online",
            label: "free Maps rank checker",
          },
          ".",
        ],
        points: [
          "Appliance categories set",
          "Brands listed on profile",
          "Suburb landing pages",
          "Weekly repair photos",
        ],
        cta: "See My Map Position",
        ui: {
          kind: "maps",
          query: "appliance repair near me",
          city: "Tampa",
          category: "Appliance repair service · Same-day visits",
        },
      },
      {
        title: "Get Suggested When People Ask AI Who Fixes Appliances",
        body: [
          "Someone with a dead dishwasher may put the question to ChatGPT or an AI Overview, hoping for a tech who can come today. Our ",
          { href: "/services/ai-seo-services", label: "AI search work" },
          " makes your shop easy to verify: matching listings, reviews that mention the appliance and pages listing the brands you repair.",
        ],
        points: [
          "Matching business listings",
          "Appliance-specific reviews",
          "Brand coverage pages",
          "Same-day details stated",
        ],
        cta: "Test My AI Presence",
        ui: {
          kind: "ai",
          query:
            "who can fix a refrigerator that stopped cooling today in dallas",
          intro: "For same-day refrigerator repair in Dallas,",
          bullets: [
            "Techs trained on major brands",
            "Arrival windows sent by text",
            "Common parts stocked on the van",
          ],
        },
      },
      {
        title: "Call Ads That Run While Your Techs Are Free",
        body: [
          "We point Google Ads and Local Services Ads at repair searches during the hours you can dispatch, pause them when the schedule fills, block replacement shoppers and trace every call to the keyword and appliance behind it.",
        ],
        points: [
          "Dispatch-hour scheduling",
          "Local Services Ads",
          "Replacement-shopper filters",
          "Recorded call tracking",
        ],
        cta: "Plan My Repair Ads",
        ui: {
          kind: "calls",
          title: "Repair calls from ads this morning",
          calls: [
            {
              service: "Washer won't drain",
              source: "Google Ads · Call",
              when: "8:14 AM",
            },
            {
              service: "Fridge not cooling",
              source: "Local Services Ads",
              when: "9:37 AM",
            },
            {
              service: "Oven won't heat",
              source: "Google Ads",
              when: "11:52 AM",
            },
          ],
        },
      },
    ],
  },
  ownLeads: {
    title: "Appliance Repair Lead Generation You Don't Split With Rivals",
    body: [
      "Lead-selling sites pass the same broken-dryer request to several shops, then charge each of them. We build calls that come straight to your dispatcher from your own rankings, ads and website, and they keep coming while those assets stay strong.",
    ],
    cta: "Get Calls That Are Mine",
    colShared: "Lead-selling sites",
    colOwn: "Your own channels",
    rows: [
      [
        "Who receives the request",
        "Several repair shops",
        "Only your dispatcher",
      ],
      [
        "Who the customer calls",
        "Whoever replies first",
        "The shop they found",
      ],
      [
        "What builds over time",
        "Nothing you own",
        "Rankings, reviews and pages",
      ],
      ["Name the customer remembers", "The lead site", "Your company name"],
    ],
  },
  specialties: {
    title: "Appliance Repair Marketing for Each Appliance You Fix",
    lead: "A warm fridge, a dryer that won't heat and a built-in range repair are searched in different ways, so every appliance gets dedicated pages and ads.",
    items: [
      {
        icon: "kitchen",
        name: "Refrigerator & Freezer Repair",
        tactic: "Urgent pages for warm fridges and leaking freezers",
      },
      {
        icon: "water",
        name: "Washer & Dryer Service Calls",
        tactic: "Symptom pages for drains, spins and no-heat dryers",
      },
      {
        icon: "drop",
        name: "Dishwasher Leaks & Drain Faults",
        tactic: "Leak and won't-drain pages ranked in each suburb",
      },
      {
        icon: "flame",
        name: "Oven, Range & Cooktop Repair",
        tactic: "Gas and electric pages with safety-first booking prompts",
      },
      {
        icon: "award",
        name: "High-End & Built-In Appliances",
        tactic: "Premium brand pages that attract higher-value repair tickets",
      },
      {
        icon: "building",
        name: "Commercial Kitchen Equipment",
        tactic: "Restaurant-focused pages and weekday search campaigns",
      },
      {
        icon: "snow",
        name: "Ice Makers & Wine Coolers",
        tactic: "Small-appliance pages that catch add-on service calls",
      },
      {
        icon: "wind",
        name: "Dryer Vent Cleaning",
        tactic: "Safety reminders sent to past repair customers",
      },
    ],
    more: "Fix microwaves, disposals or laundromat machines too? Tell us and we'll build pages for them.",
  },
  steps: {
    title: "From Repair Market Audit to a Full Dispatch Board",
    lead: "Profile fixes and call ads tend to move first; brand and symptom pages build ranking strength month after month.",
    items: [
      {
        h: "We Search Like Your Customers Do",
        p: "We run appliance and brand searches from inside your service area and map where you appear, who beats you on Maps and which gaps cost you calls.",
      },
      {
        h: "We Pick the Repairs to Push",
        p: "Together we choose the appliances, brands and suburbs to lead with, favoring the repair tickets you want more of and the areas your techs reach fastest.",
      },
      {
        h: "We Go Live and Show the Results",
        p: "Profile edits, brand pages, call ads and review texts all launch. Each month one plain report ties rankings and calls to completed repair tickets.",
      },
    ],
    audit: [
      ["Maps rank: appliance repair near me", "behind"],
      ["Brand pages on site", "gap"],
      ["Ads during dispatch hours", "open"],
      ["Reviews vs top shops", "behind"],
    ],
    plan: ["Refrigerators", "Washers", "Built-ins", "Tampa", "Brandon"],
    launch: [
      "Profile brands listed",
      "Symptom pages live",
      "Call tracking active",
      "Review texts sending",
    ],
  },
  reviews: {
    title: "What Service Business Owners Say on Google",
    lead: "Read what owners we work with wrote about us on Google, word for word.",
  },
  pricing: {
    title: "Appliance Repair Marketing Plans, No Lock-In",
    compareTitle: "Compare Appliance Repair Plans",
    addOnsTitle: "Add Campaigns for New Suburbs or Brands",
    customTitle: "Running several vans across multiple metros?",
  },
  faq: {
    title: "Appliance Repair Marketing Questions We Hear Most",
    lead: "Clear answers on calls, brand pages, ads, AI search and how we work.",
    items: [
      {
        q: "What should an appliance repair marketing company do for my shop?",
        a: "It should keep your phone ringing with the repair jobs you want. That covers Map Pack rankings, pages for each appliance and brand, call-focused ads during dispatch hours, steady reviews, AI search visibility and a website people can book from in seconds.",
      },
      {
        q: "How do I get more same-day appliance repair calls?",
        a: "Be visible and easy to book at the moment something breaks. Keep your Business Profile complete and active, show same-day availability clearly, run call ads during hours you can dispatch, answer quickly and request a review after every completed ticket. Texting a clear arrival window keeps customers from calling the next shop.",
      },
      {
        q: "Should appliance repair companies build a page for every brand?",
        a: "For the brands you are trained and stocked for, yes. People often search the brand plus the problem, and a dedicated page answers that search far better than a general list. We build brand pages around real repairs, never thin copies. Each one lists the models, common faults and parts you handle.",
      },
      {
        q: "Which appliance repair internet marketing channels bring calls fastest?",
        a: "Paid search and Local Services Ads usually produce the earliest calls once they launch, and a tuned Business Profile follows close behind. Organic pages take longer but reduce your reliance on paid clicks, so we normally run both side by side.",
      },
      {
        q: "Do I need an appliance repair advertising agency, or can I run ads myself?",
        a: "You can run them yourself, but repair ads leak money fast on replacement shoppers, parts buyers and out-of-area clicks. An agency adds negative keywords, dispatch-hour scheduling and call tracking. We add nothing on top of what you pay Google for ads: a 0% markup.",
      },
      {
        q: "Do Local Services Ads pay off for appliance repair?",
        a: "For many shops, yes. They sit above the regular results, show a trust badge and bill by the lead, not by the click. They work best alongside a healthy review count and fast call answering, which is why we set up both together.",
      },
      {
        q: "How can an independent repair shop compete with manufacturer service?",
        a: "Win on speed, range and local trust. Highlight quick visits, list every brand you service, show your techs and reviews from your area, and answer out-of-warranty questions clearly. Owners whose warranty has ended are often looking for exactly that.",
      },
      {
        q: "Can my appliance repair business appear in ChatGPT or AI Overviews?",
        a: "Yes. AI tools lean on information they can confirm, so we align your listings everywhere, gather reviews that name the appliance and repair, and publish clear pages on brands, symptoms and service areas. That gives them solid reasons to recommend you. Clear same-day details matter too.",
      },
      {
        q: "What does appliance repair marketing cost with Zonic Media?",
        a: "Monthly plans cost $297, $750 or $1,500, with no long contract. A single-van shop usually begins on the smallest plan, while multi-tech teams running ads tend to pick the larger ones. Your free audit shows which level fits your area.",
      },
      {
        q: "How long does appliance repair SEO take to work?",
        a: "Paid ads and listing fixes often bring calls in the first weeks. Brand and symptom pages gain ranking strength across several months, quicker in small towns and slower in crowded metros. Monthly reporting shows which pages and calls are growing.",
      },
    ],
  },
  audit: {
    title: "Free Appliance Repair Marketing Audit for Your Area",
    lead: [
      "Send your service area and the appliances you fix. We'll check your Maps position, profile, ",
      {
        href: "/services/appliance-repair-website-design",
        label: "booking website",
      },
      " and reviews against the shops ranking above you, then list the fixes worth doing first. You can also browse ",
      { href: "/services", label: "all of our services" },
      " or ",
      { href: "/industries", label: "other industries we market" },
      ".",
    ],
    points: [
      "Plans from $297/mo",
      "Cancel any month",
      "Zero markup on ads",
      "Profile reinstatement help",
    ],
    form: {
      formType: "appliance-repair-marketing",
      badge: "Free repair shop audit",
      title: "Get Your Free Appliance Repair Audit",
      subtitle: "Free, quick and with no obligation.",
      submitText: "Send My Repair Audit",
      messageLabel: "Your service area and appliances you fix",
      messagePlaceholder:
        "Towns you cover, appliances and brands you service, and whether you offer same-day visits",
    },
  },
  banner: {
    title: "Be the Repair Shop People Call When Something Breaks",
    lead: "Our free audit pinpoints the changes that will fill tomorrow's schedule fastest.",
    icons: ["kitchen", "wrench"],
  },
};
