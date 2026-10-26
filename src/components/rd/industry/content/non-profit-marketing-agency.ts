import { PALETTES } from "../palettes";
import type { IndustryContent } from "../types";

/* NONPROFIT MARKETING AGENCY — redesign draft content (25 Oct 2026).

   Rank safety: Semrush API units are exhausted, so no ranking report was
   pulled. The live title's core term ("Nonprofit Digital Marketing
   Agency") is kept in the new title, and every phrase in the live
   keywords meta is carried by the title, H1, an H2/H3 or an FAQ question
   ("non profit X" phrases are written "non-profit X").
   - Ad Grants check (25 Oct, Google Ad Grants help centre and current
     guides): eligible US charities hold 501(c)(3) status and register with
     Google for Nonprofits; government bodies, hospitals and schools are
     generally excluded; accounts must keep conversion tracking, smart
     bidding and an account-level CTR target. No dollar figures on page.
   - Web research (25 Oct): top "nonprofit marketing agency" pages cover
     SEO, paid media and Ad Grants, donations, analytics and reporting;
     their FAQs ask what an agency does, which channels work, what Ad
     Grants is, cost and timing. Donors and volunteers increasingly ask AI
     tools where to give or help; pages for mission, volunteering and
     giving need to be clear and crawlable. Maps listings matter for
     service locations (pantries, shelters, clinics).
   Fresh wording only: nothing reused from the live page or other drafts. */

export const CONTENT: IndustryContent = {
  draftSlug: "non-profit-marketing-agency-2",
  liveUrl: "/services/non-profit-marketing-agency",
  niche: "Nonprofit",
  meta: {
    title: "Nonprofit Digital Marketing Agency | Ad Grants, SEO & Donors",
    description:
      "Nonprofit digital marketing agency helping charities win donors and volunteers with Google Ad Grants, nonprofit SEO, Maps listings and donation-ready sites.",
    keywords: [
      "nonprofit marketing agency",
      "nonprofit digital marketing agency",
      "nonprofit marketing agency near me",
      "nonprofit advertising agency",
      "marketing company for non profit",
      "best nonprofit marketing agencies",
      "google ad grants management",
      "nonprofit seo services",
      "nonprofit website design",
      "non profit marketing company",
      "non profit advertising agency",
      "non profit internet marketing",
      "non profit lead generation",
      "marketing company for non profit businesses",
      "google ad grants",
    ],
  },
  palette: PALETTES.roseBlue,
  hero: {
    h1Lead: "Nonprofit",
    h1Icon: "charity",
    h1Rest: "Marketing Agency That Brings You Donors and Volunteers",
    lead: [
      "People looking for a cause to support, a place to volunteer or a program near them start on Google. At ",
      { href: "/", label: "Zonic Media" },
      ", we put your mission in those results with Google Ad Grants, nonprofit SEO, ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Google Maps listings",
      },
      " and ",
      { href: "/services/web-design", label: "donation-ready websites" },
      ".",
    ],
    cta: "Get My Free Nonprofit Audit",
    bento: {
      kind: "tiles",
      wide: {
        icon: "handHeart",
        title: "More monthly donors",
        sub: "From people already searching for your cause",
        chips: ["Donors", "Volunteers", "Program clients", "+ your cause"],
      },
      left: {
        icon: "users",
        title: "More volunteer sign-ups",
        sub: "Shifts filled from search and AI answers",
      },
      right: {
        icon: "target",
        title: "Ad Grants put to work",
        sub: "Free search ads aimed at real actions",
      },
      bottom: {
        title: "Programs people can find",
        sub: "Every service site listed on Google Maps",
      },
    },
  },
  services: {
    title: "Ads, Search and Websites From One Nonprofit Advertising Agency",
    lead: "Six services that help people find your cause, then give or sign up.",
    cta: "Audit My Nonprofit Marketing",
    items: [
      {
        icon: "target",
        title: "Google Ad Grants Management for Charities",
        desc: "Setup, keyword research and ongoing tuning so your grant account stays compliant and sends people to donate, volunteer or find services.",
        points: [
          "Application and setup help",
          "Conversion tracking in place",
          "Monthly compliance checks",
        ],
        links: [
          { href: "/services/google-ads", label: "Google Ads management" },
        ],
      },
      {
        icon: "search",
        title: "Nonprofit SEO Services for Causes and Programs",
        desc: "Program, cause and location pages, technical fixes and local citations, so your site ranks when people search for the help or cause you offer.",
        points: [
          "Program and cause pages",
          "Technical site fixes",
          "Rankings tracked monthly",
        ],
        links: [
          {
            href: "/services/local-seo-for-small-business",
            label: "Our local SEO method",
          },
        ],
      },
      {
        icon: "monitor",
        title: "Nonprofit Website Design Built for Giving",
        desc: "Fast, accessible sites with a clear donate button, volunteer sign-up and program finder, so visitors take action on any device.",
        points: [
          "Prominent donate button",
          "Volunteer sign-up forms",
          "Accessible on every device",
        ],
        links: [{ href: "/services/web-design", label: "Website design" }],
      },
      {
        icon: "pin",
        title: "Google Maps for Program Locations",
        desc: "Business Profiles for pantries, shelters, clinics and offices, with current hours and services, so people nearby can find help fast.",
        points: [
          "A profile per service site",
          "Hours and services current",
          "Help if a listing is suspended",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Profile setup and optimization",
          },
          {
            href: "/services/gbp-reinstatement-service",
            label: "Suspended profile recovery",
          },
        ],
      },
      {
        icon: "sparkle",
        title: "Mission Visibility in AI Answers",
        desc: "Consistent facts, clear program pages and trustworthy mentions, so ChatGPT, Gemini and AI Overviews can name you when people ask where to give or help.",
        points: [
          "Consistent organization details",
          "Program pages AI can read",
          "Mentions from local sources",
        ],
        links: [
          { href: "/services/ai-seo-services", label: "AI SEO services" },
        ],
      },
      {
        icon: "camera",
        title: "Impact Stories & Social Posts",
        desc: "Short program videos, impact posts and a plain monthly report your board can read, each pointing back to giving or volunteering.",
        points: [
          "Short program videos",
          "Weekly impact posts",
          "Monthly report for the board",
        ],
        links: [{ href: "/about", label: "Meet our team" }],
      },
    ],
  },
  growth: {
    title: "Show Up Where Donors, Volunteers and Clients Look",
    lead: "Maps for the people you serve, AI answers for curious supporters and a website that turns interest into action. Each path ends in a clear next step: give, volunteer or get help.",
    rows: [
      {
        title: "Put Every Program Site on Google Maps",
        body: [
          "People needing a pantry, shelter or clinic search the map first. We set up and ",
          {
            href: "/services/gmb-verification-help",
            label: "verify a profile",
          },
          " for each location, keep hours and services current and add photos of real programs, so your sites appear when neighbors look for help.",
        ],
        points: [
          "Correct nonprofit categories",
          "One profile per site",
          "Hours kept current",
          "Program photos added",
        ],
        cta: "Check My Maps Visibility",
        ui: {
          kind: "maps",
          query: "food pantry near me",
          city: "Columbus",
          category: "Food bank · Open today",
        },
      },
      {
        title: "Get Your Cause Named in AI Answers",
        body: [
          "Supporters increasingly put questions to ChatGPT, Gemini and Google's AI Overview about where to volunteer or which local charities to back. We give those tools clear signals: matching listings, program pages with plain facts, news mentions and reviews, so your organization becomes an answer they repeat.",
        ],
        points: [
          "Consistent organization facts",
          "Clear program pages",
          "Local news mentions",
          "Volunteer reviews",
        ],
        cta: "See If AI Mentions Us",
        ui: {
          kind: "ai",
          query: "where can i volunteer on saturdays in austin",
          intro: "For Saturday volunteering in Austin,",
          bullets: [
            "Weekend shifts listed online",
            "Family-friendly roles",
            "Quick online sign-up",
          ],
        },
      },
      {
        title: "A Website That Turns Visitors Into Supporters",
        body: [
          "Interest fades fast if giving takes too many steps. We build pages with a clear donate button, short volunteer forms and a simple program finder, connect your donation platform and track every gift and sign-up back to the search that brought it.",
        ],
        points: [
          "Short donation path",
          "Volunteer shift sign-up",
          "Program finder",
          "Gift and sign-up tracking",
        ],
        cta: "Plan My Nonprofit Website",
        ui: {
          kind: "website",
          cta: "Donate now",
          note: "Volunteer sign-up takes a minute",
          url: "yourorganization.org",
          headline: "Help feed families this weekend",
          services: ["Donate monthly", "Volunteer", "Find food help", "Events"],
        },
      },
    ],
  },
  specialties: {
    title: "Nonprofit Marketing Shaped Around Your Cause",
    lead: "A food bank, an animal rescue and a youth program win support for different reasons, so each one receives tailored pages, campaigns and stories.",
    items: [
      {
        icon: "handHeart",
        name: "Food Banks & Meal Programs",
        tactic: "Pantry listings on Maps with current distribution hours",
      },
      {
        icon: "home",
        name: "Housing & Homeless Services",
        tactic: "Help-now pages and listings for each shelter site",
      },
      {
        icon: "pets",
        name: "Animal Shelters & Rescues",
        tactic: "Adoption pages and foster sign-ups found locally",
      },
      {
        icon: "users",
        name: "Youth Mentoring & After-School Programs",
        tactic: "Mentor recruitment campaigns and parent enrollment pages",
      },
      {
        icon: "medical",
        name: "Community Health Clinics",
        tactic: "Service and eligibility pages written in plain language",
      },
      {
        icon: "leaf",
        name: "Conservation & Cleanup Groups",
        tactic: "Event pages that fill volunteer days and cleanups",
      },
      {
        icon: "paint",
        name: "Museums, Theaters & Arts Groups",
        tactic: "Event and membership pages that fill seats",
      },
      {
        icon: "award",
        name: "Veteran Support Organizations",
        tactic: "Pages for veterans and families, plus donor campaigns",
      },
    ],
    more: "Serve seniors, refugees or a faith community? We plan around those missions too.",
  },
  steps: {
    title: "Three Steps to a Stronger Nonprofit Presence",
    lead: "Maps and Ad Grants fixes show first; organic reach builds after.",
    items: [
      {
        h: "We Review How People Find You",
        p: "We search the way donors, volunteers and clients do, check your visibility on Maps, in AI answers and in regular results, and confirm whether your Ad Grants account is compliant.",
      },
      {
        h: "We Agree on Goals and Priorities",
        p: "Together we choose the actions that matter most, like monthly gifts, volunteer shifts or program sign-ups, and the locations and causes to promote first.",
      },
      {
        h: "We Launch and Share Clear Reports",
        p: "Profiles, pages, grant campaigns and tracking go live. Every month you see donations, sign-ups and inquiries by source, in a report ready for your board.",
      },
    ],
    audit: [
      ["Maps: food pantry near me", "behind"],
      ["Ad Grants conversion tracking", "gap"],
      ["Online volunteer sign-up", "open"],
      ["Program pages on site", "behind"],
    ],
    plan: [
      "Monthly donors",
      "Volunteers",
      "Food programs",
      "Columbus",
      "Franklin County",
    ],
    launch: [
      "Location profiles verified",
      "Grant campaigns live",
      "Donation tracking on",
      "Program pages published",
    ],
  },
  reviews: {
    title: "What Owners and Organizations Say About Us",
    lead: "Reviews from the people we work with, taken directly from Google.",
  },
  pricing: {
    title: "Simple Monthly Plans for Nonprofits",
    compareTitle: "Compare Nonprofit Marketing Plans",
    addOnsTitle: "Add a Campaign for Your Next Fundraiser",
    customTitle: "A large charity or multi-chapter network?",
  },
  faq: {
    title: "Nonprofit Marketing Questions We Answer Often",
    lead: "Ad Grants, donors, volunteers, AI search and working with us, answered simply.",
    items: [
      {
        q: "What does a non-profit advertising agency do with Google Ad Grants?",
        a: "It turns the grant into real results. That means confirming eligibility, building campaigns around actions like donating and volunteering, choosing keywords people actually search, setting up conversion tracking and adjusting the account each month so it meets Google's program rules and stays active.",
      },
      {
        q: "Is our organization eligible for Google Ad Grants?",
        a: "Most U.S. charities with current 501(c)(3) status that register with Google for Nonprofits can apply. Government bodies, hospitals and schools are generally excluded, though some affiliated foundations qualify. Your website also has to meet Google's quality standards. We check eligibility during your free audit.",
      },
      {
        q: "Which non-profit internet marketing channels work best for small charities?",
        a: "Start with the channels that cost least to run: a clear website, a complete Google Business Profile for each site and an active Ad Grants account. Then add email for donors, short program videos and pages that answer the questions people ask about your cause. Track every gift and sign-up so you know what works.",
      },
      {
        q: "How does non-profit lead generation work for donors and volunteers?",
        a: "It means capturing interest and following up. Search, Maps and AI answers bring people to pages built for one action each: give, volunteer or get help. Short forms collect their details, and timely emails turn first-time contacts into regular donors and returning volunteers.",
      },
      {
        q: "Can a nonprofit appear on Google Maps?",
        a: "Yes, if people visit or are served at a physical location during set hours, such as a pantry, shelter or clinic. Each site can have its own Business Profile. Organizations without public locations usually rely on search, Ad Grants and AI visibility instead. Keep each site's hours accurate, especially around holidays and weather closures.",
      },
      {
        q: "Can ChatGPT and AI Overviews recommend our nonprofit?",
        a: "Yes. These assistants favor organizations whose details they can cross-check, which is why we keep your information identical across listings, publish clear program and impact pages, earn local news mentions and encourage reviews. That gives them good reasons to name your organization when people ask where to give.",
      },
      {
        q: "Why hire a marketing company for non-profit businesses instead of relying on volunteers?",
        a: "Volunteers bring heart but often limited time and changing schedules. A dedicated team keeps your grant account compliant, your listings accurate and your site updated every month, and reports results clearly. Staff and volunteers can then spend their hours on programs. You also get a single contact person who knows your programs.",
      },
      {
        q: "What should we look for when comparing the best nonprofit marketing agencies?",
        a: "Look for Ad Grants experience, clear reporting on donations and sign-ups rather than likes, month-to-month terms and someone who explains things without jargon. Ask how they track results and who does the work. Be wary of anyone promising viral growth or guaranteed rankings.",
      },
      {
        q: "Do we need a nonprofit marketing agency near me, or can a remote team serve us?",
        a: "A remote team suits most organizations. We handle Maps, search, Ad Grants and websites for nonprofits across the U.S. through video calls and shared reports. What matters is knowing your community, which we learn through your team, your programs and local searches.",
      },
      {
        q: "How much does a non-profit marketing company like Zonic Media cost?",
        a: "Nonprofits choose $297, $750 or $1,500 plans, billed monthly with no annual contract. For eligible charities, Google Ad Grants covers the search ad spend, and any paid ads we run carry a 0% markup. Smaller groups usually start on the first plan, and we recommend one after your free audit.",
      },
    ],
  },
  audit: {
    title: "Get a Free Nonprofit Marketing Audit",
    lead: [
      "Tell us about your mission and locations. We'll review your Maps listings, Ad Grants setup, website and AI visibility, then list the fixes that bring donors and volunteers first. Prefer to talk? Use our ",
      { href: "/contact-us", label: "contact page" },
      ", or explore ",
      { href: "/services", label: "all our services" },
      " and ",
      { href: "/industries", label: "the sectors we support" },
      ".",
    ],
    points: [
      "No annual contract",
      "Plans from $297/mo",
      "0% markup on paid ads",
      "Suspended-profile recovery included",
    ],
    form: {
      formType: "non-profit-marketing",
      badge: "Free nonprofit audit",
      title: "Request a Free Nonprofit Marketing Audit",
      subtitle: "No cost, and no obligation to sign.",
      submitText: "Send My Nonprofit Audit",
      messageLabel: "Your mission, locations and goals",
      messagePlaceholder:
        "Your cause, the areas you serve, whether you use Google Ad Grants and what you need most (donors, volunteers, clients)",
    },
  },
  banner: {
    title: "Help More People Find, Fund and Join Your Mission",
    lead: "Ask for a free audit and we'll show how more supporters can find you.",
    icons: ["charity", "heart"],
  },
};
