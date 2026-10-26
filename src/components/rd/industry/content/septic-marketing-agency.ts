import { PALETTES } from "../palettes";
import type { IndustryContent } from "../types";

/* SEPTIC MARKETING AGENCY — redesign draft content (25 Oct 2026).

   Rank safety: Semrush API units were exhausted, so no ranking report or
   volumes were pulled. The live title's core term ("Septic Marketing
   Agency") leads the new title, and every phrase in the live keywords meta
   sits in the title, H1, an H2/H3 or an FAQ question.
   Web research (25 Oct): top agency pages cover GBP with emergency hours
   and service areas, a page per town and county, separating routine
   pumping from emergency backups, maintenance plans and reminders,
   plumber and real-estate referrals, AI/answer-engine visibility. Owners
   search "septic pumping near me", "septic inspection for home sale" and
   warning-sign questions; rural coverage is the common gap.
   No ownLeads band: shared lead sites are a minor factor for rural septic
   work, where Maps and referrals drive calls.
   Fresh wording only: nothing reused from the live page or other drafts. */

export const CONTENT: IndustryContent = {
  draftSlug: "septic-marketing-agency-2",
  liveUrl: "/services/septic-marketing-agency",
  niche: "Septic",
  meta: {
    title: "Septic Marketing Agency | Septic SEO, Google Ads & Leads",
    description:
      "Zonic Media, a septic marketing agency, books more pump-outs, inspections and repairs through septic SEO, Google Maps rankings and Google Ads in rural areas.",
    keywords: [
      "septic marketing agency",
      "septic company marketing",
      "septic tank marketing",
      "marketing for septic companies",
      "septic lead generation",
      "septic seo",
      "local seo for septic companies",
      "septic pumping leads",
      "google ads for septic companies",
      "septic service marketing",
      "septic contractor marketing",
      "septic company seo",
      "septic inspection leads",
    ],
  },
  palette: PALETTES.emeraldAmber,
  hero: {
    h1Lead: "Septic",
    h1Icon: "truck",
    h1Rest: "Marketing Agency for More Pump-Outs and Inspections",
    lead: [
      "Homeowners rarely think about their tank until it backs up, a sale needs an inspection or the pumping reminder arrives. We make sure your company is the one they find, with septic SEO, ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Google Maps profile optimization",
      },
      ", Google Ads and a ",
      { href: "/services/web-design", label: "septic website" },
      " that books service.",
    ],
    cta: "Get My Free Septic Audit",
    bento: {
      kind: "tiles",
      wide: {
        icon: "pin",
        title: "Found first in rural searches",
        sub: "For pumping, inspections and repairs in every county you cover",
        chips: ["Pumping", "Inspections", "Repairs", "New systems"],
      },
      left: {
        icon: "repeat",
        title: "More scheduled pump-outs",
        sub: "Routine work that fills the week",
      },
      right: {
        icon: "call",
        title: "First call for backups",
        sub: "Ads and Maps ready at any hour",
      },
      bottom: {
        title: "Customers who come back on schedule",
        sub: "Pumping reminders years after the first visit",
      },
    },
  },
  services: {
    title: "Septic Company Marketing for Pumping, Repairs and Installs",
    lead: "Six services built for how rural homeowners find a septic pro.",
    cta: "Audit My Septic Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Business Profile for Septic Pros",
        desc: "Septic categories, every county and town you serve, truck and job photos and regular posts, so your listing climbs rural map results.",
        points: [
          "Service areas by county",
          "Truck and job photos",
          "Verification help",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Google profile management",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Get verified on Google",
          },
        ],
      },
      {
        icon: "search",
        title: "Septic SEO for Every Town You Serve",
        desc: "Pages for pumping, inspections, drain field repair and new systems in each town, plus citations and technical cleanup.",
        points: [
          "Town and county pages",
          "Directory citations",
          "Rankings checked monthly",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "Local SEO for service trades",
          },
        ],
      },
      {
        icon: "target",
        title: "Google Ads for Septic Companies",
        desc: "Call-first ads for backup and pumping searches in your counties, with DIY drain fixes and out-of-area clicks filtered out.",
        points: [
          "County-level targeting",
          "24/7 call campaigns",
          "Out-of-area clicks blocked",
        ],
        links: [
          { href: "/services/google-ads", label: "Septic ad management" },
        ],
      },
      {
        icon: "monitor",
        title: "Septic Websites That Book Service",
        desc: "A quick mobile site with a pumping request form, inspection booking for home sales and a call button that never scrolls away.",
        points: [
          "Pumping request form",
          "Inspection booking page",
          "Every lead tracked",
        ],
        links: [
          {
            href: "/services/web-design",
            label: "Website design for septic pros",
          },
        ],
      },
      {
        icon: "star",
        title: "Reviews and Pumping Reminders",
        desc: "Review requests after each visit, replies we draft and pumping reminders timed to each tank, so customers return without searching again.",
        points: [
          "Review texts after visits",
          "Owner replies drafted",
          "Multi-year pumping reminders",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Fix a suspended profile",
          },
        ],
      },
      {
        icon: "sparkle",
        title: "AI Answers for Septic Questions",
        desc: "When owners ask ChatGPT or Gemini about a slow drain or a failed inspection, we make your company the trusted local answer.",
        points: [
          "Consistent listings",
          "Clear septic FAQs",
          "Reviews that describe visits",
        ],
        links: [
          {
            href: "/services/ai-seo-services",
            label: "AI search for septic companies",
          },
        ],
      },
    ],
  },
  growth: {
    title: "Marketing for Septic Companies, Built Around Rural Search",
    lead: "Maps, AI answers and call ads that reach every county on your route, from the town around your yard to the farm roads at the edge of your range.",
    rows: [
      {
        title: "Local SEO for Septic Companies, Starting on the Map",
        body: [
          "Rural homeowners search “septic pumping near me” and call one of the first names on the map. We list every county you serve, publish town pages, add truck and job photos and gather new reviews steadily, so your pin shows up even miles from your yard.",
        ],
        points: [
          "County service areas",
          "Town landing pages",
          "Truck and job photos",
          "Steady new reviews",
        ],
        cta: "Check My Septic Map Rank",
        ui: {
          kind: "maps",
          query: "septic pumping near me",
          city: "Knoxville",
          category: "Septic system service · Open 24 hours",
        },
      },
      {
        title: "Get Recommended When Owners Ask AI About Septic Trouble",
        body: [
          "A homeowner with a gurgling drain may turn to ChatGPT, Gemini or Google's AI answers for what to do and who to call. Our ",
          { href: "/services/ai-seo-services", label: "AI search program" },
          " gives those tools verified details: matching listings, reviews that describe real visits and plain pages on pumping, inspections and warning signs.",
        ],
        points: [
          "Listings that agree",
          "Visit-based reviews",
          "Warning-sign pages",
          "Inspection FAQs",
        ],
        cta: "Audit My Septic AI Visibility",
        ui: {
          kind: "ai",
          query: "septic company near me for a home sale inspection",
          intro: "For septic inspections before a home sale,",
          bullets: [
            "Inspection reports for buyers and lenders",
            "Pumping during the inspection",
            "Rural service across the county",
          ],
        },
      },
      {
        title: "Call Ads That Catch Septic Backups Day and Night",
        body: [
          "Backups don't wait for business hours. Urgent septic searches get Local Services Ads and Google Ads at every hour, routine pumping ads run on weekdays, and you see which keyword brought each call.",
        ],
        points: [
          "Overnight call campaigns",
          "Local Services Ads",
          "Weekday pumping campaigns",
          "Calls tied to keywords",
        ],
        cta: "Plan My Septic Ads",
        ui: {
          kind: "calls",
          title: "Septic calls this week",
          calls: [
            {
              service: "Sewage backing into the basement",
              source: "Local Services Ads",
              when: "Sun 10:32 PM",
            },
            {
              service: "Pumping before a home sale",
              source: "Google Ads",
              when: "Mon 8:15 AM",
            },
            {
              service: "Drain field inspection",
              source: "Google Ads · Call",
              when: "Wed 2:40 PM",
            },
          ],
        },
      },
    ],
  },
  specialties: {
    title: "Septic Tank Marketing for Every Service You Run",
    lead: "Routine pumping, real estate inspections and emergency calls come from different buyers, so we build distinct pages, ads and reminders for each.",
    items: [
      {
        icon: "truck",
        name: "Septic Tank Pumping",
        tactic: "Reminder texts timed to each tank's pumping cycle",
      },
      {
        icon: "inspectList",
        name: "Real Estate Septic Inspections",
        tactic: "Agent-friendly booking pages and home-sale search ads",
      },
      {
        icon: "clock",
        name: "Emergency Septic Backups",
        tactic: "24/7 call ads and an always-open map listing",
      },
      {
        icon: "grass",
        name: "Drain Field Repair & Replacement",
        tactic: "Warning-sign pages for soggy yards and slow drains",
      },
      {
        icon: "construction",
        name: "New Septic System Installs",
        tactic: "Builder and land-buyer pages with quote request forms",
      },
      {
        icon: "inspect",
        name: "Septic Camera Inspections & Locating",
        tactic: "Add-on offers on every inspection and pumping visit",
      },
      {
        icon: "water",
        name: "Grease Traps & Commercial Pumping",
        tactic: "Restaurant and facility pages with service contract forms",
      },
      {
        icon: "repeat",
        name: "Aerobic System Maintenance Contracts",
        tactic: "Renewal reminders and contract pages for aerobic owners",
      },
    ],
    more: "Also handle portable toilets, lift stations or excavation? We plan for those too.",
  },
  steps: {
    title: "Start Septic Marketing in Three Clear Steps",
    lead: "Maps and ads deliver the early wins; town pages and rankings then grow across your whole service area.",
    items: [
      {
        h: "Free Septic Market Audit",
        p: "We search pumping, inspection and backup terms from the towns you cover, then map out your position, the rivals listed above you and which counties are wide open.",
      },
      {
        h: "A County-by-County Plan",
        p: "We decide which services and counties lead, balancing emergency calls with routine pumping and inspections that keep trucks busy all week.",
      },
      {
        h: "Launch With Monthly Reports",
        p: "Profile fixes, town pages, call ads and reminders go live. Each month you get one simple report on rankings, calls and the jobs they produced.",
      },
    ],
    audit: [
      ["Maps rank: septic pumping", "behind"],
      ["Counties listed on profile", "gap"],
      ["Inspection booking page", "open"],
      ["Pumping reminder program", "open"],
    ],
    plan: [
      "Septic pumping",
      "Inspections",
      "Drain fields",
      "Knox County",
      "Blount County",
    ],
    launch: [
      "Service counties added",
      "Town pages published",
      "24/7 call ads live",
      "Pumping reminders scheduled",
    ],
  },
  reviews: {
    title: "What Owners Say After Working With Zonic Media",
    lead: "Unedited reviews from our own Google profile, where business owners rate our work 5.0.",
  },
  pricing: {
    title: "Monthly Septic Marketing Plans",
    compareTitle: "Septic Company Plans Compared",
    addOnsTitle: "Add Campaigns for Busy Pumping Months",
    customTitle: "Covering several counties or branches?",
  },
  faq: {
    title: "Septic Service Marketing FAQs for Company Owners",
    lead: "Leads, rankings, ads and plans, answered in plain terms.",
    items: [
      {
        q: "What does a septic marketing agency actually handle?",
        a: "Everything that makes your septic company the one homeowners and agents call: Google Maps rankings across your counties, pages for pumping, inspections and repairs, ads for backups and routine service, reviews gathered after each job and a site that books work.",
      },
      {
        q: "How can I get more septic pumping leads in rural areas?",
        a: "List every county and town you serve on your Google profile, publish a page for each, and collect reviews that mention those places. Add call ads for pumping searches, reminders for past customers and referral ties with local plumbers and real estate agents. A branded sticker on the tank lid or panel keeps your number handy for next time.",
      },
      {
        q: "How does septic lead generation work without buying leads?",
        a: "You build channels that only ring your phone: Maps rankings, town pages, your own Google Ads and reminders to past customers. Those calls aren't shared with other pumpers, and your rankings and reviews go on earning calls after the campaign month ends. Every one of those channels stays yours if you ever leave us.",
      },
      {
        q: "How do I market septic inspections for home sales?",
        a: "Reach the people who order them: buyers, sellers and real estate agents. We publish an inspection page explaining the process, add online booking, run ads on home-sale inspection searches and help you build a simple referral page for agents in your area. Fast report turnaround is worth mentioning everywhere, since closing dates rarely move.",
      },
      {
        q: "Is septic SEO worth it for a small company?",
        a: "Yes. Many rural markets have only a handful of septic companies with a strong online presence, so a complete profile, town pages and steady reviews can put a small operator at the top. Rankings keep bringing calls without a fee per click, and they support your Maps listing at the same time.",
      },
      {
        q: "Do Local Services Ads or Google Ads work better for septic companies?",
        a: "Often the pair works best. Local Services Ads appear first on urgent searches and you pay by the lead; Google Ads give us control over keywords, schedules and counties. We start where your market shows the most search activity and bring in the second channel when call tracking shows what books.",
      },
      {
        q: "How long does septic marketing take to bring calls?",
        a: "Ads and profile repairs often start the phone ringing within a few weeks. Search rankings grow over a few months, often faster where fewer companies compete. Your monthly report tracks rankings, calls and booked jobs, so you always see what is moving.",
      },
      {
        q: "Can AI assistants recommend my septic company?",
        a: "They can. ChatGPT, Gemini and AI Overviews tend to pick businesses whose listings match, whose reviews go into detail and whose service pages are clear. We align your details across directories, publish answers on pumping intervals and warning signs, and earn reviews that mention real visits and the towns where they happened.",
      },
      {
        q: "How much does septic marketing cost with Zonic Media?",
        a: "Plans run $297 to $1,500 per month, with a middle tier at $750, all on month-to-month terms. Ad spend is paid to Google from your own account, at 0% markup. Operators covering a few towns usually begin on the first tier; multi-truck companies running ads tend to need more.",
      },
      {
        q: "My septic company's Google profile was suspended. Can you restore it?",
        a: "Yes, and it's covered on every plan. So far we have reinstated 900+ suspended Business Profiles. We pinpoint what triggered the suspension, often a service-area or address setting, fix it, submit the appeal with documents and harden the listing against repeat flags, so your trucks stay visible on the map.",
      },
    ],
  },
  audit: {
    title: "Get a Free Septic Marketing Audit for Your Counties",
    lead: [
      "Tell us your towns and services. We'll show where you appear for pumping, inspection and backup searches, measure your profile and reviews against the companies ranked ahead of you, and pick the first fixes from our ",
      { href: "/services", label: "full service lineup" },
      ". Running a plumbing division too? Add our ",
      {
        href: "/services/plumbing-marketing-agency",
        label: "plumber marketing program",
      },
      ", part of the ",
      { href: "/industries", label: "20+ industries Zonic Media markets" },
      ".",
    ],
    points: [
      "Cancel any month",
      "Plans start at $297/mo",
      "0% markup on ad spend",
      "Suspended listings reinstated",
    ],
    form: {
      formType: "septic-marketing",
      badge: "Free septic audit",
      title: "Ask for Your Free Septic Marketing Audit",
      subtitle: "Free, and you're under no obligation.",
      submitText: "Send My Septic Audit",
      messageLabel: "Your counties and septic services",
      messagePlaceholder:
        "Towns or counties you cover, services you offer (pumping, inspections, installs) and your truck count",
    },
  },
  banner: {
    title: "Be the Septic Company Every County Calls First",
    lead: "Your free audit lists the changes that bring pumping calls soonest.",
    icons: ["truck", "water"],
  },
};
