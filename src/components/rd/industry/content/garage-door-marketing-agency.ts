import { PALETTES } from "../palettes";
import type { IndustryContent } from "../types";

/* GARAGE DOOR MARKETING AGENCY — redesign draft content (25 Oct 2026).

   Rank safety: Semrush API units were exhausted, so no ranking report was
   pulled. The live title's core term ("Garage Door Marketing Agency")
   stays at the front of the new title, and every phrase in the live
   keywords meta is carried by the title, H1, an H2/H3 or an FAQ question:
   garage door marketing agency (title, H1) · garage door marketing company
   (FAQ) · garage door digital marketing agency (FAQ) · garage door repair
   website marketing (service H3) · garage door advertising (service H3) ·
   garage door seo (title, service H3, FAQ) · garage door lead generation
   (growth H2) · garage door company marketing (services H2, FAQ) · garage
   door advertising agency (FAQ) · garage door internet marketing
   (specialties H2).
   - Web research (25 Oct): repair is a same-day, emergency search (broken
     springs, dead openers, off-track doors); Local Services Ads and the
     Business Profile lead the channel mix; Google requires Advanced
     Verification for US garage door advertisers (Google Ads and Local
     Services); fake listings crowd the category; repair visits lead to
     opener and new-door upgrades.
   Fresh wording only: nothing reused from the live page or other drafts. */

export const CONTENT: IndustryContent = {
  draftSlug: "garage-door-marketing-agency-2",
  liveUrl: "/services/garage-door-marketing-agency",
  niche: "Garage Door",
  meta: {
    title: "Garage Door Marketing Agency | Garage Door SEO, Ads & Leads",
    description:
      "Garage door marketing agency for repair and install companies: garage door SEO, Google Maps rankings and Local Services Ads that bring spring and opener calls.",
    keywords: [
      "garage door marketing agency",
      "garage door marketing company",
      "garage door digital marketing agency",
      "garage door repair website marketing",
      "garage door advertising",
      "garage door seo",
      "garage door lead generation",
      "garage door company marketing",
      "garage door advertising agency",
      "garage door internet marketing",
      "garage door marketing",
      "garage door repair marketing",
      "garage door leads",
      "marketing for garage door companies",
    ],
  },
  palette: PALETTES.orangeViolet,
  hero: {
    h1Lead: "Garage Door",
    h1Icon: "garage",
    h1Rest: "Marketing Agency That Books Spring & Opener Calls",
    lead: [
      "When a spring snaps or an opener dies, homeowners call the first garage door company they trust on Google. We put you there with garage door SEO, ",
      {
        href: "/local-seo-google-business-optimization",
        label: "a tuned Google Business Profile",
      },
      ", verified call ads and a ",
      {
        href: "/services/garage-door-website-design",
        label: "garage door website",
      },
      " built for quick calls.",
    ],
    cta: "Get My Free Garage Door Audit",
    bento: {
      kind: "photos",
      photoA: {
        src: "/images/free-website/free-garage-door/broken-springs.webp",
        position: "22% 50%",
        query: "garage door spring repair near me",
      },
      cardA: {
        icon: "wrench",
        title: "More spring repair calls",
        sub: "Same-day jobs, all week",
      },
      cardB: {
        icon: "garage",
        title: "More opener installs",
        sub: "Repairs that turn into upgrades",
      },
      photoB: {
        src: "/images/free-website/free-garage-door/opener-repair.webp",
        position: "40% 50%",
        query: "garage door opener repair near me",
      },
    },
  },
  services: {
    title: "Garage Door Repair Digital Marketing Agency Services",
    lead: "Six services built around how people look for garage door help.",
    cta: "Audit My Garage Door Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Maps for Garage Door Pros",
        desc: "Correct categories, service areas, job photos and weekly posts, so your listing ranks when a door won't open or close.",
        points: [
          "Service-area setup",
          "Weekly job photos",
          "Spam listing reports",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Google listing optimization",
          },
          {
            href: "/services/gbp-reinstatement-service",
            label: "Suspended listing reinstatement",
          },
        ],
      },
      {
        icon: "search",
        title: "Garage Door SEO for Every Town",
        desc: "Pages for springs, openers, cables and new doors in each town on your route, backed by citations and site repairs.",
        points: [
          "Repair and install pages",
          "Town-by-town coverage",
          "Citation building",
        ],
        links: [
          {
            href: "/services/industry/local-seo-for-garage-door-companies",
            label: "Local SEO for door companies",
          },
        ],
      },
      {
        icon: "target",
        title: "Garage Door Advertising on Google",
        desc: "Call-first PPC campaigns and Local Services Ads on urgent repair searches, with help getting through Google's extra advertiser verification.",
        points: [
          "Advanced Verification support",
          "After-hours call ads",
          "Ad spend billed at 0% markup",
        ],
        links: [{ href: "/services/google-ads", label: "Call ad management" }],
      },
      {
        icon: "monitor",
        title: "Garage Door Repair Website Marketing",
        desc: "Fast mobile pages with a sticky call bar, service menus and a door style gallery, built to turn a frantic search into a call.",
        points: [
          "Call bar on every screen",
          "Door style gallery",
          "Every call tracked",
        ],
        links: [
          {
            href: "/services/garage-door-website-design",
            label: "Garage door website design",
          },
          { href: "/services/web-design", label: "Custom website builds" },
        ],
      },
      {
        icon: "star",
        title: "Reviews After Every Door Job",
        desc: "Every finished job sends the customer a Google review request by text, and we write owner replies, so trust is built before the phone rings.",
        points: [
          "Automatic review texts",
          "Replies drafted for you",
          "Live review feed on site",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "Home service SEO",
          },
        ],
      },
      {
        icon: "sparkle",
        title: "AI Answers for Garage Door Repairs",
        desc: "We line up your listings, reviews and repair pages so AI assistants suggest you when someone nearby asks who fixes doors fast.",
        points: [
          "Consistent listings",
          "Job-specific reviews",
          "Answer-first FAQs",
        ],
        links: [
          { href: "/services/ai-seo-services", label: "AI SEO services" },
        ],
      },
    ],
  },
  growth: {
    title: "Garage Door Lead Generation From Maps, AI and Ads",
    lead: "Three channels that reach homeowners the moment the door gets stuck.",
    rows: [
      {
        title: "Rank on the Map for “Garage Door Repair Near Me”",
        body: [
          "Stuck-door searches end on the map, where homeowners call one of the top few names. We tune your listing, publish service pages for every town on your route and keep reviews and job photos coming, so your company sits in that top group. Listing not verified yet? Use our ",
          {
            href: "/services/gmb-verification-help",
            label: "Business Profile verification support",
          },
          ".",
        ],
        points: [
          "Garage door categories",
          "Town service pages",
          "Geo-tagged job photos",
          "Hours that match reality",
        ],
        cta: "Check My Map Ranking",
        ui: {
          kind: "maps",
          query: "garage door repair near me",
          city: "Dallas",
          category: "Garage door repair service · Open now",
        },
      },
      {
        title: "Be the Door Company ChatGPT Suggests",
        body: [
          "More homeowners now let ChatGPT, Gemini or Google's AI results tell them who can fix a broken spring today. Our ",
          {
            href: "/services/ai-seo-services",
            label: "AI search optimization",
          },
          " gives them reasons to name you: matching listings, reviews that mention real repairs and pages that answer safety and repair-or-replace questions.",
        ],
        points: [
          "Matching business details",
          "Repair-specific reviews",
          "Safety and FAQ pages",
          "Clear service areas",
        ],
        cta: "Run My AI Visibility Check",
        ui: {
          kind: "ai",
          query: "who can fix a broken garage door spring today in tampa",
          intro: "For same-day spring repair in Tampa,",
          bullets: [
            "Torsion spring replacement",
            "Same-day appointments",
            "Licensed, insured technicians",
          ],
        },
      },
      {
        title: "Call Ads That Catch Every Stuck Door",
        body: [
          "Urgent repair searches happen at all hours. We run call-focused Google Ads and Local Services Ads day and night, block DIY and parts-shopping clicks, and record each call so you can see which searches book jobs.",
        ],
        points: [
          "24/7 call campaigns",
          "Local Services Ads",
          "DIY click filters",
          "Recorded calls",
        ],
        cta: "Plan My Garage Door Ads",
        ui: {
          kind: "calls",
          title: "Today's calls from paid search",
          calls: [
            {
              service: "Broken torsion spring",
              source: "Local Services Ads",
              when: "7:18 AM",
            },
            {
              service: "Opener won't respond",
              source: "Google Ads · Call",
              when: "12:46 PM",
            },
            {
              service: "Door off track",
              source: "Google Ads",
              when: "6:02 PM",
            },
          ],
        },
      },
    ],
  },
  ownLeads: {
    title: "Garage Door Leads That Ring Only Your Phone",
    body: [
      "Shared lead sites pass one repair request to several door companies at once, and the fastest dialer wins. Our ",
      { href: "/services", label: "full range of marketing services" },
      " sends calls straight to you, under your own name and reviews.",
    ],
    cta: "Get My Own Door Leads",
    colShared: "Shared lead sites",
    colOwn: "Your own calls",
    rows: [
      ["Who gets the call", "Several door companies", "Your dispatcher only"],
      [
        "How you win it",
        "Call back first, then haggle",
        "They already chose you",
      ],
      ["Name on the job", "The directory's brand", "Your company and reviews"],
      [
        "Repeat work",
        "Starts from zero",
        "Tune-ups and upgrades come back to you",
      ],
    ],
  },
  specialties: {
    title: "Garage Door Internet Marketing for Every Service",
    lead: "A snapped spring and a new carriage-house door are very different purchases, so we treat them as separate campaigns.",
    photo: {
      src: "/images/free-website/free-garage-door/new-door-installation.webp",
      alt: "Technician fitting a new white garage door panel on a suburban home",
      caption: "Repairs, new doors and commercial work",
      sub: "From same-day springs to full replacements",
    },
    items: [
      {
        icon: "wrench",
        name: "Broken Spring Replacement",
        tactic: "Same-day call ads and spring repair pages per town",
      },
      {
        icon: "bolt",
        name: "Opener Repair & Smart Openers",
        tactic: "Smart-opener upgrade offers on every repair visit",
      },
      {
        icon: "clock",
        name: "Emergency Garage Door Service",
        tactic: "After-hours call campaigns with live call tracking",
      },
      {
        icon: "garage",
        name: "New Garage Door Installs",
        tactic: "Style galleries and design-consult request forms",
      },
      {
        icon: "tool",
        name: "Cables, Rollers & Off-Track Doors",
        tactic: "Problem-first pages written for stressed homeowners",
      },
      {
        icon: "calendar",
        name: "Tune-Ups & Maintenance Plans",
        tactic: "Yearly reminder texts sent to past customers",
      },
      {
        icon: "building",
        name: "Commercial Overhead Door Service",
        tactic: "Facility-manager outreach and loading-dock repair pages",
      },
      {
        icon: "snow",
        name: "Weather Seals & Insulated Doors",
        tactic: "Seasonal upgrade offers before winter and summer",
      },
    ],
    more: "Install gate openers or smart locks as well? Tell us and we'll add them.",
  },
  steps: {
    title: "Three Steps to More Garage Door Calls",
    lead: "Fixes on Maps and ads show first; rankings for repair pages build over the following months.",
    items: [
      {
        h: "Free Garage Door Market Audit",
        p: "We run spring, opener and new-door searches across your service area and map out your position, the companies beating you and the gaps that cost you calls.",
      },
      {
        h: "A Plan for Repairs and Installs",
        p: "We pick the services, towns and campaigns to push first, balancing quick repair calls with bigger new-door and opener projects.",
      },
      {
        h: "Launch and See Every Call Sourced",
        p: "Profile work, pages, ads and review texts all start in the same week. Your monthly report then lists rankings, calls, booked jobs and which search produced each one.",
      },
    ],
    audit: [
      ["Maps rank: garage door repair", "behind"],
      ["Advertiser verification", "gap"],
      ["After-hours call coverage", "open"],
      ["Reviews vs nearby door pros", "behind"],
    ],
    plan: ["Spring repair", "Openers", "New doors", "Dallas", "Plano"],
    launch: [
      "Profile categories fixed",
      "Town pages live",
      "Call tracking on",
      "Review texts going out",
    ],
  },
  reviews: {
    title: "Google Reviews From Home Service Owners We Market",
    lead: "What local business owners wrote about working with our team, straight from Google.",
  },
  pricing: {
    title: "Garage Door Marketing Plans Without Lock-In",
    compareTitle: "Compare Garage Door Marketing Plans",
    addOnsTitle: "Add Campaigns When Repair Calls Spike",
    customTitle: "Running trucks in several metros?",
  },
  faq: {
    title: "Garage Door Marketing Questions, Answered",
    lead: "Calls, ads, verification, AI search and plans, in short answers.",
    items: [
      {
        q: "What does a garage door marketing company do?",
        a: "It keeps your phone ringing with repair and install work. That means ranking your Google listing on Maps for spring, opener and off-track searches, building service pages for each town, running verified call ads, collecting reviews after every job and keeping your website quick to call from a phone.",
      },
      {
        q: "How is a garage door digital marketing agency different from a general one?",
        a: "It knows the trade's quirks: Google's extra advertiser checks for door companies, fake listings crowding the map, urgent same-day searches and the jump from a spring repair to a new opener or door. Campaigns, pages and reporting are built around those calls instead of generic traffic.",
      },
      {
        q: "Do garage door companies need Advanced Verification to run Google Ads?",
        a: "Yes. In the United States, Google requires garage door companies to pass Advanced Verification before search ads or Local Services Ads will run. It includes checks on your business and its documents and can take a few weeks. We help you prepare and set up campaigns so ads launch once you're approved.",
      },
      {
        q: "What does a garage door advertising agency do differently for repair calls?",
        a: "It treats every click like an emergency call. We run call-first ads around the clock, filter out DIY and parts searches, schedule ads around your dispatch capacity and record every call. That way your ad spend goes toward booked spring and opener jobs, not browsers.",
      },
      {
        q: "If I already run ads, is garage door SEO worth it?",
        a: "Yes. Ad traffic ends the day you pause spending, while pages that rank keep bringing calls. Garage door SEO also supports your Maps listing and gives AI tools clear facts to quote, so one effort helps in three places homeowners look. Most companies do best running both.",
      },
      {
        q: "How can a garage door company get more new door installations?",
        a: "Show buyers what's possible. Publish style galleries, a page for each door material and an easy design-consult request, then follow up with repair customers whose doors are aging. Reviews that mention new installs and ads aimed at replacement searches help you win bigger projects, not just repairs.",
      },
      {
        q: "Can garage door company marketing get me into ChatGPT and AI Overviews?",
        a: "It can. Assistants favor companies whose details hold up when compared across sites, so we make your listings identical, gather reviews that mention the exact repairs you did, publish clear safety and repair-or-replace answers and show your licensing and warranties. Those signals help when someone asks who to call.",
      },
      {
        q: "How long until garage door marketing brings more calls?",
        a: "Ads and profile fixes tend to produce calls first, once advertiser verification is cleared. Organic rankings for repair and install pages come later and depend on local competition. Your monthly report shows calls, rankings and booked jobs, so progress is never a guess.",
      },
      {
        q: "What does garage door marketing cost with Zonic Media?",
        a: "Pick from $297, $750 and $1,500 monthly plans, all billed month to month. You pay Google for ad spend yourself, and we take 0% markup on it. Smaller shops with one or two trucks often begin with the entry plan; companies running several technicians and 24/7 ads usually pick a larger one.",
      },
      {
        q: "Do you handle suspended Google listings for garage door companies?",
        a: "Yes. Door companies face strict listing reviews because the category draws fake profiles. We have reinstated 900+ suspended profiles so far, and every plan includes that help: we find the cause, correct the listing, submit evidence to Google and keep watch afterward.",
      },
    ],
  },
  audit: {
    title: "Find Out Why Door Calls Go to Competitors",
    lead: [
      "Tell us your towns. We'll check where you rank for spring, opener and new-door searches, compare your reviews, profile and ",
      { href: "/services/web-design", label: "website setup" },
      " with the companies outranking you, and put the fixes in order. See every trade we serve on our ",
      { href: "/industries", label: "industries page" },
      ".",
    ],
    points: [
      "No annual contract",
      "Ad spend at a 0% markup",
      "Plans from $297 monthly",
      "Suspended profile help included",
    ],
    form: {
      formType: "garage-door-marketing",
      badge: "Free door company audit",
      title: "Get a Free Garage Door Marketing Audit",
      subtitle: "Free and no strings attached.",
      submitText: "Send My Garage Door Audit",
      messageLabel: "Your towns and door services",
      messagePlaceholder:
        "Areas you cover, repair or install focus, and whether you run 24/7",
    },
  },
  banner: {
    title: "Be the Door Company They Call When It Won't Budge",
    lead: "Get a free audit and a ranked list of fixes for more repair calls.",
    icons: ["garage", "wrench"],
  },
};
