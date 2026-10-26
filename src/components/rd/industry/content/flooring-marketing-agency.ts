import { PALETTES } from "../palettes";
import type { IndustryContent } from "../types";

/* FLOORING MARKETING AGENCY — redesign draft content (25 Oct 2026).

   Rank safety: Semrush API units are exhausted, so no ranking report was
   pulled. The live title's core term ("Flooring Marketing Agency") opens
   the new title, and every phrase in the live keywords meta sits in the
   title, H1, an H2/H3 or an FAQ question.
   Web research (25 Oct): buyers search "flooring store near me",
   "carpet installation [city]", hardwood, luxury vinyl, tile and epoxy
   terms; top agency pages cover website design, local SEO, PPC, social
   and reviews for stores and installers; 2026 guides push showroom
   visits as the conversion goal, fast replies to install inquiries,
   commercial referral partners and AI assistants recommending stores.
   Angle vs sibling remodel drafts: showroom visits, in-home measures,
   material-by-material marketing and commercial installs.
   Fresh wording only: nothing reused from the live page or other drafts. */

export const CONTENT: IndustryContent = {
  draftSlug: "flooring-marketing-agency-2",
  liveUrl: "/services/flooring-marketing-agency",
  niche: "Flooring",
  meta: {
    title: "Flooring Marketing Agency | Flooring SEO, Google Ads & Leads",
    description:
      "Flooring digital marketing agency for stores and installers: flooring SEO, Google Maps rankings and Google Ads that bring showroom visits and booked installs.",
    keywords: [
      "flooring marketing agency",
      "flooring marketing company",
      "marketing for flooring contractors",
      "flooring contractor advertising agency",
      "epoxy flooring marketing agency",
      "flooring seo",
      "flooring store marketing",
      "flooring lead generation",
      "flooring advertising agency",
      "flooring internet marketing",
      "flooring company marketing",
      "flooring contractor seo",
      "flooring google ads",
      "flooring website design",
      "flooring leads",
    ],
  },
  palette: PALETTES.amberTeal,
  hero: {
    h1Lead: "Flooring",
    h1Icon: "layers",
    h1Rest: "Marketing Agency That Turns Searches Into Installs",
    lead: [
      "Some flooring buyers want to walk a showroom, others want an installer at the door with samples. We bring you both with flooring SEO, ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Google Maps optimization",
      },
      ", search ads and a ",
      {
        href: "/services/flooring-website-design",
        label: "flooring website",
      },
      " that books measures and store visits.",
    ],
    cta: "Get My Free Flooring Audit",
    bento: {
      kind: "photos",
      photoA: {
        src: "/images/free-website/free-flooring/hardwood-flooring.webp",
        position: "52% 50%",
        query: "hardwood floor installation near me",
      },
      cardA: {
        icon: "home",
        title: "More hardwood & LVP installs",
        sub: "Booked from local searches",
      },
      cardB: {
        icon: "pin",
        title: "More showroom walk-ins",
        sub: "From Maps and store searches",
      },
      photoB: {
        src: "/images/free-website/free-flooring/tile-flooring.webp",
        position: "58% 50%",
        query: "tile installer near me",
      },
    },
  },
  services: {
    title: "Flooring Marketing Services for Stores and Installers",
    lead: "One team runs every channel, from showroom visits to booked installs.",
    cta: "Audit My Flooring Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Business Profile for Flooring Stores",
        desc: "Showroom hours, product categories, install areas and real floor photos, set up so your listing wins store and installer searches.",
        points: [
          "Showroom and service-area setup",
          "Product photos every week",
          "Verification for new locations",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Business Profile optimization",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Verification help for new stores",
          },
        ],
      },
      {
        icon: "search",
        title: "Flooring SEO",
        desc: "Pages for every floor type and town, citations on home and trade directories, and technical fixes that lift your rankings.",
        points: [
          "Floor-type landing pages",
          "Directory citations",
          "Local rank tracking",
        ],
        links: [
          {
            href: "/services/industry/local-seo-for-flooring-companies",
            label: "Local SEO for flooring companies",
          },
        ],
      },
      {
        icon: "target",
        title: "Google Ads From a Flooring Advertising Agency",
        desc: "Search ads aimed at install-ready homeowners and commercial buyers, with DIY, rental and how-to searches screened out.",
        points: [
          "Install-intent keywords",
          "Showroom radius targeting",
          "Ad spend passed through at cost",
        ],
        links: [{ href: "/services/google-ads", label: "Flooring Google Ads" }],
      },
      {
        icon: "monitor",
        title: "Flooring Websites That Book Measures",
        desc: "Material pages, room galleries, showroom directions and a quick form to request an in-home measure from any phone.",
        points: [
          "Pages for each material",
          "Room-by-room galleries",
          "Measure request form",
        ],
        links: [
          {
            href: "/services/flooring-website-design",
            label: "Flooring website design",
          },
          { href: "/services/web-design", label: "Custom web design" },
        ],
      },
      {
        icon: "star",
        title: "Reviews for Stores and Install Crews",
        desc: "Review requests after every install and store sale, plus replies in your voice, so your rating stays fresh on Maps.",
        points: [
          "Requests after each install",
          "Showroom review cards",
          "Reply drafts written for you",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "Local SEO for home services",
          },
        ],
      },
      {
        icon: "sparkle",
        title: "AI Answers That Name Your Store",
        desc: "When shoppers ask AI where to buy or install floors nearby, consistent facts and detailed reviews help it point to you.",
        points: [
          "Store facts kept consistent",
          "Material FAQ pages",
          "Reviews naming floor types",
        ],
        links: [
          { href: "/services/ai-seo-services", label: "AI SEO for retailers" },
        ],
      },
    ],
  },
  growth: {
    title: "Flooring Lead Generation Across Maps, AI and Paid Search",
    lead: "Three channels feed your showroom and install calendar, each one tracked to the job it produced.",
    rows: [
      {
        title: "Rank in the Map Pack for Flooring Stores and Installers",
        body: [
          "Flooring buyers often search for a store and an installer in the same session. We set your showroom and service-area details, add each floor type you sell, post photos of real installs and track rankings by neighborhood, so your listing shows for both kinds of search.",
        ],
        points: [
          "Store and installer categories",
          "Every material listed",
          "Install photo posts",
          "Neighborhood rank grid",
        ],
        cta: "Check My Flooring Map Rank",
        ui: {
          kind: "maps",
          query: "flooring store near me",
          city: "Indianapolis",
          category: "Flooring store · Showroom open today",
        },
      },
      {
        title: "Get Recommended When Shoppers Ask AI About New Floors",
        body: [
          "A homeowner might ask ChatGPT which local store installs waterproof vinyl, or ask Gemini for a hardwood refinisher nearby. Those tools favor businesses with matching listings, reviews naming the floor type and pages that answer material questions. ",
          {
            href: "/services/ai-seo-services",
            label: "AI search optimization",
          },
          " puts all of that in place.",
        ],
        points: [
          "Matching store details",
          "Material comparison answers",
          "Floor-type review prompts",
          "Commercial project pages",
        ],
        cta: "See If AI Recommends Me",
        ui: {
          kind: "ai",
          query: "who installs waterproof vinyl plank flooring in indianapolis",
          intro: "For waterproof vinyl plank installs in Indianapolis,",
          bullets: [
            "Showroom samples you can take home",
            "Free in-home measuring",
            "Own install crews, not subcontractors",
          ],
        },
      },
      {
        title: "Flooring Ads That Ring the Store and Book the Install",
        body: [
          "Paid search works best when every click has a next step. We run Google search and call campaigns around install-ready searches, send callers to the store or the scheduler, filter out DIY and rental traffic, and record which floor type each caller wanted.",
        ],
        points: [
          "Install-ready keywords",
          "Call and store-visit tracking",
          "DIY traffic excluded",
          "Floor type logged per call",
        ],
        cta: "Plan My Flooring Ads",
        ui: {
          kind: "calls",
          title: "Flooring calls from ads this week",
          calls: [
            {
              service: "Hardwood for 3 bedrooms",
              source: "Google Ads",
              when: "Mon 9:14 AM",
            },
            {
              service: "Office LVT replacement",
              source: "Google Ads · Call",
              when: "Tue 1:40 PM",
            },
            {
              service: "Showroom visit for tile",
              source: "Google Ads · Location",
              when: "Thu 5:05 PM",
            },
          ],
        },
      },
    ],
  },
  specialties: {
    title: "Marketing for Flooring Contractors, Material by Material",
    lead: "Hardwood buyers, tile shoppers and office managers search in different ways, so each floor you sell gets its own approach.",
    photo: {
      src: "/images/free-website/free-flooring/commercial-flooring.webp",
      alt: "Two installers laying vinyl plank across an open commercial office floor",
      caption: "Residential and commercial install crews",
      sub: "From single rooms to full office floors",
    },
    items: [
      {
        icon: "layers",
        name: "Hardwood Installation",
        tactic: "Species and finish galleries ranked for install searches",
      },
      {
        icon: "water",
        name: "Luxury Vinyl Plank & Tile",
        tactic: "Waterproof-floor pages aimed at kitchens and basements",
      },
      {
        icon: "construction",
        name: "Tile & Natural Stone",
        tactic: "Bath and entryway projects shown room by room",
      },
      {
        icon: "home",
        name: "Carpet Installation",
        tactic: "Bedroom and stair pages with in-home sample visits",
      },
      {
        icon: "repeat",
        name: "Hardwood Refinishing",
        tactic: "Before-and-after sanding photos posted on Maps weekly",
      },
      {
        icon: "spray",
        name: "Epoxy & Concrete Coatings",
        tactic: "Garage and shop pages built for coating searches",
      },
      {
        icon: "building",
        name: "Commercial Flooring",
        tactic: "Property-manager pages and bid-request forms for facilities",
      },
      {
        icon: "users",
        name: "Showroom & Design Help",
        tactic: "Store-visit offers promoted through Maps and ads",
      },
    ],
    more: "Selling laminate, rugs or stair runners as well? Those get their own pages.",
  },
  steps: {
    title: "Getting More Flooring Jobs in Three Clear Steps",
    lead: "We fix what loses visits and installs today, then grow the rankings that bring buyers for years.",
    items: [
      {
        h: "We Audit Your Store and Install Presence",
        p: "We search your key floor types from your trade area, check your Maps position, compare your listing and site with nearby stores and installers, and flag where shoppers drop off. You see the results in one short report.",
      },
      {
        h: "We Pick Materials and Markets to Lead With",
        p: "Together we choose the floors, neighborhoods and commercial work to push first, based on your margins, your stock and the crews you can schedule. Slower months can get a dedicated push.",
      },
      {
        h: "We Go Live and Track Every Visit",
        p: "Listing fixes, material pages, ads and review requests launch, and your monthly report shows calls, measure requests and store visits by source. We adjust the plan as those numbers move.",
      },
    ],
    audit: [
      ["Maps rank: flooring store near me", "behind"],
      ["Material pages on your site", "gap"],
      ["Install reviews vs competitors", "behind"],
      ["Commercial search coverage", "open"],
    ],
    plan: ["Hardwood", "Luxury vinyl", "Commercial", "Carmel", "Fishers"],
    launch: [
      "Showroom listing updated",
      "Material pages published",
      "Measure form tracked",
      "Install review texts on",
    ],
  },
  reviews: {
    title: "Why Business Owners Give Zonic Media 5.0 Stars",
    lead: "Read what owners left on our Google profile, unedited and in full.",
  },
  pricing: {
    title: "Flooring Marketing Plans With No Lock-In",
    compareTitle: "Plan Comparison for Flooring Stores and Installers",
    addOnsTitle: "Extra Campaigns for New Product Lines",
    customTitle: "More than one showroom, or a commercial team?",
  },
  faq: {
    title: "Flooring Company SEO and Marketing Questions",
    lead: "Answers on showroom traffic, installs, SEO, ads, AI search and our plans.",
    items: [
      {
        q: "What does a flooring marketing company do?",
        a: "It brings buyers to your showroom and installs to your calendar. That means Maps rankings for store and installer searches, flooring SEO pages by material and town, Google Ads aimed at install-ready shoppers, reviews after every job and a website that books measures. Each lead is traced back to the search, ad or listing that produced it.",
      },
      {
        q: "What flooring store marketing brings in more showroom visits?",
        a: "Start with your Business Profile: accurate hours, directions, product categories and fresh photos of your displays. Add a page for each material, ads that reach nearby shoppers with a store-visit goal and an easy way to book a design appointment. Track visits so you know which channel works. Showroom events and seasonal sales also deserve their own Business Profile posts.",
      },
      {
        q: "How do independent flooring contractors compete with big-box stores online?",
        a: "By being more specific and more local. Big chains rank broadly, but a contractor with pages for each material and town, real install photos, detailed reviews and fast replies often wins the homeowner who wants expert installation rather than a rushed sale. Clear details about your crews and installation process help close the gap further.",
      },
      {
        q: "Are the flooring leads you generate exclusive to my company?",
        a: "Yes. Every call, form and store visit comes from channels built in your name: your listing, your site and your ads. We never sell or share leads, unlike lead sites that pass one homeowner to several installers who then compete on price. Your rankings and reviews also keep working if you pause a campaign.",
      },
      {
        q: "Is flooring SEO worth it for a small store?",
        a: "Usually. Homeowners research floors for weeks and search many material questions along the way, so ranking pages keep bringing visitors without a click charge. Flooring SEO also feeds your Maps listing and AI answers, letting a small store hold its own against bigger chains nearby. Material guides, such as hardwood versus vinyl for kitchens, often attract steady visits.",
      },
      {
        q: "What should a flooring contractor advertising agency do with Google Ads?",
        a: "Target searches that signal a project, like hardwood installation or commercial flooring contractor, within the area your crews cover. It should exclude DIY and how-to terms, track calls and measure requests, and test landing pages by material so ads send buyers to the floor they want. Weekly search-term reviews keep new wasted clicks from piling up.",
      },
      {
        q: "Are you also an epoxy flooring marketing agency?",
        a: "Yes. Epoxy and concrete coating installers sell to homeowners with garages and basements and to warehouses, shops and showrooms. We build separate pages and ad groups for residential and commercial coatings, show finished floors in photos and target the areas your crews reach. Before-and-after photos of coated garages tend to persuade quickly.",
      },
      {
        q: "How do you market commercial flooring services?",
        a: "With pages written for property managers, builders and facility teams, a bid-request form, photos of finished commercial spaces and campaigns aimed at commercial searches. Facility buyers vet references and capacity closely, so we feature project types and scheduling options such as after-hours installs. Trade pages also support referrals from general contractors and designers.",
      },
      {
        q: "Can my flooring business get recommended by ChatGPT or AI Overviews?",
        a: "Yes, when the facts about you are consistent and detailed. We align your listings, collect reviews that name the floors you installed and publish clear answers to material questions. That gives AI tools enough confidence to include your store when shoppers ask for local recommendations. Store photos and current hours on every listing help as well.",
      },
      {
        q: "How are Zonic Media's flooring marketing plans priced?",
        a: "Pricing starts at $297 per month for Foundation, with Growth at $750 and Authority at $1,500. Billing is month to month, and ad spend carries 0% markup. Single-location stores often start with Foundation; stores adding ads or a commercial push usually move up. Commercial-focused companies sometimes start on Growth so Google Ads run from day one.",
      },
    ],
  },
  audit: {
    title: "Free Flooring Marketing Audit for Your Store or Crew",
    lead: [
      "Our team checks your Maps rank for store and installer searches, your Business Profile, ",
      { href: "/services/web-design", label: "website and product pages" },
      ", reviews and ads against the flooring companies ahead of you. Plans include ",
      {
        href: "/services/gbp-reinstatement-service",
        label: "suspended profile reinstatement",
      },
      ", and you can browse our other ",
      { href: "/services", label: "marketing services" },
      " or see the ",
      { href: "/industries", label: "industries we serve" },
      ".",
    ],
    points: [
      "Plans start at $297 monthly",
      "Ad spend billed with 0% markup",
      "Month-to-month terms",
      "Reinstatement if Google suspends you",
    ],
    form: {
      formType: "flooring-marketing",
      badge: "Free flooring audit",
      title: "Request a Free Flooring Marketing Audit",
      subtitle: "Useful findings, zero obligation.",
      submitText: "Send My Flooring Audit",
      messageLabel: "Your store, service area and top floor types",
      messagePlaceholder:
        "Showroom location, towns your crews cover, materials you sell most and any commercial work",
    },
  },
  banner: {
    title: "Fill the Showroom and the Install Schedule",
    lead: "Our free audit shows what's keeping shoppers from your store and your schedule.",
    icons: ["layers", "home"],
  },
};
