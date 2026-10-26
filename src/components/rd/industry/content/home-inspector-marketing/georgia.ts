import { PALETTES } from "@/components/rd/industry/palettes";
import type { LocationContent } from "@/components/rd/industry/types";

/* GEORGIA HOME INSPECTOR MARKETING — redesign draft content (24 Oct 2026).
   Semrush returned no_api_units on 24 Oct, so the live page's ranking
   report and keyword volumes could not be pulled. Rank safety: the live
   title's core term "Home Inspector Marketing in Georgia" stays in the
   title, and every phrase in the live keywords meta sits in the title,
   H1, an H2/H3 or an FAQ question.
   Web research (24 Oct): Georgia has no state home inspector license yet
   (HB 1305 / SB 458 debated in the 2026 session); no pre-sale radon rule,
   EPA ranks Cobb, Fulton, DeKalb and Gwinnett highest for radon; termite
   letters come from licensed pest control companies (Georgia Dept. of
   Agriculture); top Atlanta pages cover radon, sewer scope, termite/WDO,
   crawlspace moisture and new-construction phase inspections. */

export const CONTENT: LocationContent = {
  draftSlug: "georgia-2",
  liveUrl: "/services/home-inspector-marketing/georgia",
  parent: {
    href: "/services/home-inspector-marketing",
    label: "Home Inspector Marketing",
    niche: "Home Inspector",
  },
  place: "Georgia",
  meta: {
    title: "Home Inspector Marketing in Georgia | Atlanta to Savannah",
    description:
      "Georgia home inspector marketing for Atlanta, Alpharetta, Marietta and Savannah: Google Maps rankings, home inspector SEO, agent-ready reviews and Google Ads.",
    keywords: [
      "home inspector marketing georgia",
      "home inspectors in georgia",
      "home inspectors atlanta ga",
      "home inspections alpharetta ga",
      "home inspectors savannah ga",
      "georgia home inspection services",
      "home inspector marketing",
      "home inspector seo",
      "radon testing atlanta",
      "sewer scope inspection atlanta",
    ],
  },
  palette: PALETTES.emeraldIndigo,
  hero: {
    h1: "Georgia Home Inspector Marketing Agency, Atlanta to the Coast",
    h1NoWrap: "Atlanta to the Coast",
    lead: [
      "Georgia buyers pick an inspector in the few days after an offer is accepted, often from Google Maps or an agent's short list. Our ",
      {
        href: "/services/home-inspector-marketing",
        label: "home inspector marketing",
      },
      " team puts your name in both places across metro Atlanta, Augusta, Athens and Savannah.",
    ],
    cta: "Get My Georgia Inspector Audit",
    tiles: {
      wide: {
        icon: "pin",
        title: "Top 3 on Maps in each suburb",
        sub: "Alpharetta, Marietta and Decatur ranked one by one",
        chips: ["Atlanta", "Alpharetta", "Marietta", "Savannah", "+ your town"],
      },
      left: {
        icon: "users",
        title: "More agent referrals",
        sub: "A profile Atlanta agents feel safe sharing",
      },
      right: {
        icon: "inspect",
        title: "Radon and sewer scope jobs",
        sub: "Add-on pages for north Georgia buyers",
      },
      bottom: {
        title: "Booked straight from your site",
        sub: "Buyers pick a time slot without calling",
      },
    },
  },
  services: {
    title: "Marketing Your Georgia Home Inspection Services, Start to Finish",
    lead: "Your Georgia listing, site, ads and reviews, kept in the same hands.",
    cta: "Audit My Georgia Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Maps Rankings Suburb by Suburb",
        desc: "Your Google Business Profile gets the right inspection categories, metro service areas and fresh job photos, so you rise in each Atlanta suburb you cover.",
        points: [
          "Inspection categories set",
          "Suburb service areas",
          "Photos from real jobs",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Google profile optimization",
          },
        ],
      },
      {
        icon: "search",
        title: "Home Inspector SEO for Atlanta Suburbs and Add-Ons",
        desc: "Town pages for Alpharetta, Marietta and Lawrenceville, along with radon, sewer scope and new-build pages written around what Georgia buyers type.",
        points: [
          "A page for each suburb",
          "Radon and sewer scope pages",
          "Pre-drywall and 11-month pages",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "Local SEO for home service pros",
          },
        ],
      },
      {
        icon: "target",
        title: "Paid Search and Local Services Ads Across Metro Atlanta",
        desc: "Google search ads plus Local Services Ads that reach buyers with a signed contract near you, while job-hunting searches stay out.",
        points: [
          "Buyer-intent keywords only",
          "Local Services Ads setup",
          "Calls tracked per campaign",
        ],
        links: [
          { href: "/services/google-ads", label: "Google Ads management" },
        ],
      },
      {
        icon: "monitor",
        title: "A Website That Books Georgia Inspections",
        desc: "Mobile pages that load quickly and let buyers schedule, preview a sample report and choose add-ons between showings.",
        points: [
          "Online scheduling",
          "Sample report on show",
          "Add-ons picked at booking",
        ],
        links: [{ href: "/services/web-design", label: "Website design" }],
      },
      {
        icon: "star",
        title: "Reviews Plus a Page Built for Referring Agents",
        desc: "Review requests sent after each report, owner replies, and an agent page with turnaround and report samples so referring agents look good.",
        points: [
          "Requests after every report",
          "Replies in your voice",
          "Agent-friendly referral page",
        ],
        links: [{ href: "/services", label: "All marketing services" }],
      },
      {
        icon: "shield",
        title: "Fixing Suspended or Stuck Georgia Profiles",
        desc: "Suspended, or stuck on a verification that won't finish? Either one stops bookings cold. We locate the trigger, repair it and file a clean appeal, backed by 900+ reinstatements.",
        points: [
          "Cause traced and fixed",
          "Video verification prep",
          "900+ profiles reinstated",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Profile reinstatement",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Verification help",
          },
        ],
      },
    ],
  },
  growth: {
    title: "How Georgia Home Inspectors Win More Buyers",
    lead: "Three places Georgia buyers and agents check before they book, and what we change in each.",
    rows: [
      {
        title: "Climb the Map When Buyers Search “Home Inspectors Atlanta GA”",
        body: [
          "With a due diligence clock running, many Atlanta buyers phone an inspector straight from the map. We tune the profile, publish suburb pages and request a review after each job, so you hold a top spot in the parts of the metro you actually drive to.",
        ],
        points: [
          "Grid tracking by suburb",
          "Radon and sewer scope listed",
          "Weekly job photos",
          "Booking link on profile",
        ],
        cta: "See My Atlanta Ranking",
        ui: {
          kind: "maps",
          query: "home inspectors atlanta ga",
          city: "Atlanta",
          category: "Home inspector · Radon testing",
        },
      },
      {
        title: "Be the Inspector AI Names for “Home Inspections Alpharetta GA”",
        body: [
          "Families moving into North Fulton often put the question to Gemini or ChatGPT before they phone any inspector. Our ",
          { href: "/services/ai-seo-services", label: "AI SEO" },
          " work lines up your site, profile and directory listings so those tools have clear reasons to suggest your company.",
        ],
        points: [
          "Answer pages per service",
          "Matching details everywhere",
          "Schema on every page",
          "Reviews that name the suburb",
        ],
        cta: "Check My AI Visibility",
        ui: {
          kind: "ai",
          query: "home inspections alpharetta ga",
          intro: "For home inspections in Alpharetta,",
          bullets: [
            "Same-week buyer inspections",
            "Radon and sewer scope add-ons",
            "Photo reports the same day",
          ],
        },
      },
      {
        title: "Turn Each Finished Report Into a Review Agents Read",
        body: [
          "Agents in Cobb and Gwinnett check reviews before they share your name with a client. We text each buyer when the report lands, make leaving a review take seconds and draft replies that sound like you, so your profile keeps earning trust.",
        ],
        points: [
          "Text sent with the report",
          "One-tap review link",
          "Owner replies drafted",
          "Low ratings flagged early",
        ],
        cta: "Grow My Georgia Reviews",
        ui: {
          kind: "reviews",
          sms: "Hi Dana, your Marietta inspection report is ready. If it helped, would you leave a quick Google review?",
          reviewer: "Dana",
          review:
            "Clear report, great photos, and he walked us through the crawlspace issues before our deadline.",
          reply:
            "Thanks Dana! Glad we caught the crawlspace moisture in time. Enjoy the new home.",
        },
      },
    ],
  },
  regions: {
    title: "Georgia Markets We Cover, From North Fulton to the Coast",
    lead: "Metro Atlanta acts like several markets, and the coast and mid-state cities have their own agents, so each gets its own pages.",
    items: [
      {
        name: "Atlanta & Inside the Perimeter",
        cities: "Atlanta · Decatur · Sandy Springs · Smyrna",
        focus: "Older-home pages for sewer scope and wiring findings",
      },
      {
        name: "North Fulton & Forsyth",
        cities: "Alpharetta · Roswell · Johns Creek · Cumming",
        focus: "Radon testing pages for relocating buyers",
      },
      {
        name: "Cobb & Cherokee",
        cities: "Marietta · Kennesaw · Woodstock · Canton",
        focus: "Map Pack work in busy suburbs with tight agent ties",
      },
      {
        name: "Gwinnett & East Metro",
        cities: "Lawrenceville · Duluth · Buford · Snellville",
        focus: "New-construction phase inspection pages",
      },
      {
        name: "Savannah & Coastal Georgia",
        cities: "Savannah · Pooler · Richmond Hill · Brunswick",
        focus: "A separate profile plan for the coast's own agents",
      },
      {
        name: "Augusta, Athens, Macon & Columbus",
        cities: "Augusta · Athens · Macon · Columbus",
        focus: "City pages where fewer inspectors compete online",
      },
    ],
    other:
      "Inspecting homes somewhere else in Georgia? We'll map your towns too.",
  },
  reviews: {
    title: "Why Owners Give Zonic Media a 5.0 Google Rating",
    lead: "Real Google reviews from local service businesses we market.",
  },
  pricing: {
    title: "Georgia Home Inspector Marketing Plans",
    lead: [
      "Nothing here locks you in. Plans renew month by month, and your ad budget reaches Google at a 0% markup. Browse our ",
      { href: "/services", label: "full list of services" },
      " to see what each plan can include.",
    ],
    compareTitle: "Compare Plans for Georgia Inspectors",
    compareLead: "Coverage from a single suburb up to all of Georgia.",
    addOnsTitle: "Extras for Georgia's Spring Rush",
    addOnsLead: "More suburb pages or ad campaigns when contracts pile up.",
    customTitle: "Inspectors on staff in Atlanta and Savannah?",
    customText: "Tell us each office and service area for one quote.",
  },
  faq: {
    title: "Questions From Home Inspectors in Georgia",
    lead: "Licensing, radon, termite letters, suburbs and the coast. Rather talk it through? Call us.",
    items: [
      {
        q: "Does Georgia require a license to run home inspections?",
        a: "Not today. Georgia doesn't license home inspectors at the state level, though a licensing bill was debated in the 2026 session. Until then, we show buyers what they can check: association membership, insurance, a sample report and reviews.",
      },
      {
        q: "How do I rank for home inspectors Savannah GA if I also cover Atlanta?",
        a: "You need a real presence on the coast. A Google profile ranks near its address, so an inspector serving both areas needs a verified Savannah location, plus pages and reviews for Pooler and Richmond Hill. Without one, we focus coastal effort on ads and city pages.",
      },
      {
        q: "Should I market radon testing to Georgia buyers?",
        a: "Yes, especially north of Atlanta. Georgia has no pre-sale radon test rule, so buyers decide for themselves, and many in Cobb, Fulton, DeKalb, Gwinnett and Forsyth ask about it. A radon page, a listing on your Google profile and an add-on button at booking turn those questions into paid tests.",
      },
      {
        q: "Can I advertise termite inspections in Georgia?",
        a: "Only for the work you're licensed to do. Official termite letters in Georgia come from pest control companies overseen by the Department of Agriculture. If you hold that license, we build a termite page. If not, we describe your visual wood-damage checks honestly and can name the partner who writes the letter.",
      },
      {
        q: "Will Atlanta agents refer me more if I rank on Google?",
        a: "Often, yes. Agents want to hand clients an inspector who looks established, and a full profile, recent reviews and a clean sample report make that easy. An agent page with turnaround times makes recommending you a one-link job.",
      },
      {
        q: "How long before home inspector SEO brings Georgia bookings?",
        a: "Calls from ads and a cleaned-up profile often start within weeks. Suburb pages and Map Pack gains build over three to six months, faster in Augusta or Macon than in North Fulton, where more inspectors compete. Monthly reports show the trend.",
      },
      {
        q: "What do your Georgia plans cost?",
        a: "You can start at $297, step up to $750 or go to $1,500 each month with no contract, and ad budgets pass straight through at a 0% markup. Many start small and add suburbs later.",
      },
    ],
  },
  audit: {
    title: "Get a Free Georgia Home Inspector Marketing Audit",
    lead: [
      "Our audit ranks you suburb by suburb across Georgia, reviews your Google profile, booking flow and reviews, and points out the searches sending buyers to rivals. Also serving buyers over the state line? Our inspector work extends to ",
      {
        href: "/services/home-inspector-marketing/florida",
        label: "Florida",
      },
      ", ",
      {
        href: "/services/home-inspector-marketing/south-carolina",
        label: "South Carolina",
      },
      ", ",
      {
        href: "/services/home-inspector-marketing/north-carolina",
        label: "North Carolina",
      },
      ", ",
      {
        href: "/services/home-inspector-marketing/tennessee",
        label: "Tennessee",
      },
      " and ",
      {
        href: "/services/home-inspector-marketing/alabama",
        label: "Alabama",
      },
      ".",
    ],
    points: [
      "Each suburb and city ranked",
      "Radon and add-on searches tested",
      "Plans from $297, no long contract",
    ],
    form: {
      formType: "home-inspector-marketing-georgia",
      badge: "Free Georgia audit",
      title: "Get Your Free Georgia Inspector Audit",
      subtitle: "No cost, no contract, no pressure.",
      submitText: "Send My Georgia Audit",
      messageLabel: "Your Georgia towns and add-on services",
      messagePlaceholder: "e.g. Marietta and Roswell, radon and sewer scope",
    },
  },
  banner: {
    title: "Keep Your Georgia Inspection Calendar Full, Spring Through Winter",
    lead: "Your free audit maps where you stand in each suburb, from Roswell to Pooler.",
    icons: ["inspectList", "pin"],
  },
};
