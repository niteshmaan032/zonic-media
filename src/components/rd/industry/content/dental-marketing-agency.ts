import { PALETTES } from "../palettes";
import type { IndustryContent } from "../types";

/* DENTAL MARKETING AGENCY — redesign draft content (25 Oct 2026).

   Rank safety: Semrush API units are exhausted, so no ranking or volume
   pull was possible. The live title's core term ("Dental Marketing Agency
   USA") is kept at the front of the new title, and every phrase in the
   live keywords meta sits in the title, H1, an H2/H3 or an FAQ question.
   Keywords came from web research (25 Oct 2026):
   - Top results for "dental marketing agency" cover dental SEO, Google
     Business Profile, Google/Meta ads, reputation and patient conversion
     (online booking, speed to lead, front-desk calls).
   - 2026 guides: Google Business Profile is now a leading new-patient
     channel, the top three map results take most local clicks, patients
     compare reviews and convenience, and AI answers (AEO/GEO) are a new
     discovery step. Emergency searches ("emergency dentist near me",
     "toothache dentist near me") are urgent and ready to book; patients
     check insurance and new-patient availability before calling.
   - Questions: how long dental SEO takes, whether Google Ads still work,
     how important reviews are, how to choose an agency.
   Healthcare rules: no patient-outcome claims; review replies never
   confirm someone is a patient or mention treatment.
   Fresh wording only: nothing reused from the live page or other drafts. */

export const CONTENT: IndustryContent = {
  draftSlug: "dental-marketing-agency-2",
  liveUrl: "/services/dental-marketing-agency",
  niche: "Dental",
  meta: {
    title: "Dental Marketing Agency USA | Dental SEO, Ads & New Patients",
    description:
      "Grow your practice with a dental marketing agency for US dentists: dental SEO, Google Maps rankings, Google Ads and websites that book more new patients.",
    keywords: [
      "dental marketing agency",
      "dental marketing agency usa",
      "dental marketing agency near me",
      "dental marketing companies usa",
      "dental marketing companies near me",
      "best dental marketing agency",
      "dental seo marketing agency",
      "dental implant marketing agency",
      "marketing agency for dentists",
      "dental marketing company",
      "dental advertising agency",
      "dental internet marketing",
      "dental lead generation",
      "dental seo",
      "dental practice marketing",
      "dental google ads",
      "dental website design",
    ],
  },
  palette: PALETTES.cyanOrange,
  hero: {
    h1Lead: "Dental",
    h1Icon: "tooth",
    h1Rest: "Marketing Agency Built to Grow Your New-Patient Bookings",
    lead: [
      "Most people pick a new dentist from the map, the reviews and how easy it is to book. We make your practice the obvious choice with dental SEO, ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Business Profile management for dentists",
      },
      ", Google Ads and ",
      {
        href: "/services/dental-website-design",
        label: "a dental website that books visits",
      },
      ".",
    ],
    cta: "Get My Free Dental Audit",
    bento: {
      kind: "tiles",
      wide: {
        icon: "pin",
        title: "Top-3 Map Pack placement",
        sub: "For “dentist near me” in every neighborhood you serve",
        chips: [
          "Dentist near me",
          "Emergency dentist",
          "Implants",
          "+ your town",
        ],
      },
      left: {
        icon: "calendar",
        title: "More new-patient bookings",
        sub: "Phone and online, each one traced to its source",
      },
      right: {
        icon: "clock",
        title: "More emergency visits",
        sub: "Found first when a tooth can't wait",
      },
      bottom: {
        title: "A steady hygiene schedule",
        sub: "Recall reminders bring patients back on time",
      },
    },
  },
  services: {
    title: "What Our Marketing Agency for Dentists Runs Every Month",
    lead: "Six connected services aimed at the moment someone picks a new dentist.",
    cta: "Audit My Dental Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Business Profile for Dentists",
        desc: "Categories, services, insurance notes, office photos and a booking link set up so your listing ranks and wins the call.",
        points: [
          "Dental categories and services",
          "Booking link on the listing",
          "Weekly office updates",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Profile management for practices",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Get a new listing verified",
          },
        ],
      },
      {
        icon: "search",
        title: "Dental SEO",
        desc: "Pages for every treatment and neighborhood, cleaner citations and faster load times help your site rise for the procedures you want more of.",
        points: [
          "Treatment and town pages",
          "Citation cleanup",
          "Zip-level rank tracking",
        ],
        links: [
          {
            href: "/services/industry/dental-seo-services",
            label: "SEO for dental practices",
          },
        ],
      },
      {
        icon: "target",
        title: "Dental Google Ads",
        desc: "Search and call campaigns for emergency, implant and new-patient searches, with job-seeker and dental-school clicks blocked out.",
        points: [
          "Call-only emergency ads",
          "Negative keyword lists",
          "No markup on ad spend",
        ],
        links: [
          { href: "/services/google-ads", label: "Google Ads for dentists" },
        ],
      },
      {
        icon: "monitor",
        title: "Dental Website Design",
        desc: "A fast, phone-friendly site with online booking, an insurance page and a clear new-patient path from the very first screen.",
        points: [
          "Online booking requests",
          "Insurance-accepted page",
          "Calls and forms tracked",
        ],
        links: [
          {
            href: "/services/dental-website-design",
            label: "Websites for dental offices",
          },
        ],
      },
      {
        icon: "star",
        title: "Reviews and HIPAA-Safe Replies",
        desc: "Patients get a review request once their appointment ends, and every public reply stays generic, never confirming who is a patient.",
        points: [
          "Text and email requests",
          "Privacy-safe reply drafts",
          "Review feed on your site",
        ],
        links: [
          {
            href: "/services/local-seo-for-small-business",
            label: "Our local search method",
          },
        ],
      },
      {
        icon: "sparkle",
        title: "AI Search Visibility for Practices",
        desc: "Matching listings, detailed reviews and plain-answer pages give ChatGPT, Gemini and AI Overviews good reasons to name your practice.",
        points: [
          "Consistent practice details",
          "Question-led FAQ pages",
          "Mentions on local sites",
        ],
        links: [
          { href: "/services/ai-seo-services", label: "AI SEO for dentists" },
        ],
      },
    ],
  },
  growth: {
    title: "How Our Dental Marketing Company Brings In New Patients",
    lead: "Maps, AI answers and call-tracked ads, all pointed at a fuller appointment book.",
    rows: [
      {
        title: "Own the Map Pack for “Dentist Near Me”",
        body: [
          "Someone choosing a new dentist seldom scrolls beyond the top three pins on the map. We build out your listing, add a page for every neighborhood you draw patients from and keep fresh reviews arriving. If Google ever suspends the profile, our ",
          {
            href: "/services/gbp-reinstatement-service",
            label: "Business Profile reinstatement team",
          },
          " handles the appeal.",
        ],
        points: [
          "Dental categories",
          "Neighborhood pages",
          "Office and team photos",
          "Steady review requests",
        ],
        cta: "Check My Map Ranking",
        ui: {
          kind: "maps",
          query: "dentist near me",
          city: "Denver",
          category: "Dentist · Accepting new patients",
        },
      },
      {
        title: "Get Named When Patients Ask ChatGPT for a Dentist",
        body: [
          "A growing number of patients let ChatGPT, Gemini or an AI Overview suggest which dentist to try. Our ",
          {
            href: "/services/ai-seo-services",
            label: "answer-engine optimization",
          },
          " keeps your hours, insurance details, treatments and reviews consistent across the web, so those tools can confirm your practice and suggest it.",
        ],
        points: [
          "Matching practice details",
          "Insurance and hours listed",
          "Treatment FAQ pages",
          "Reviews that mention visits",
        ],
        cta: "See If AI Recommends Us",
        ui: {
          kind: "ai",
          query: "emergency dentist open today in tampa",
          intro: "For same-day emergency visits in Tampa,",
          bullets: [
            "Same-day emergency appointments",
            "Evening and Saturday hours",
            "Most PPO plans accepted",
          ],
        },
      },
      {
        title: "Dental Advertising Agency Campaigns That Ring the Front Desk",
        body: [
          "When a tooth cracks on a Friday, the patient calls whoever appears first. We run Google Ads on emergency, implant and new-patient searches, cut clicks that never book and tie every call back to the search term behind it. Ad schedules follow your office hours, so someone is there to answer.",
        ],
        points: [
          "Emergency call ads",
          "Implant consult campaigns",
          "Wasted-click filters",
          "Call recording",
        ],
        cta: "Plan My Dental Ads",
        ui: {
          kind: "calls",
          title: "New-patient calls from ads",
          calls: [
            {
              service: "Cracked tooth, needs a visit today",
              source: "Google Ads · Call",
              when: "7:52 AM",
            },
            {
              service: "New-patient cleaning and exam",
              source: "Google Ads",
              when: "12:18 PM",
            },
            {
              service: "Implant consultation request",
              source: "Google Business Profile",
              when: "4:36 PM",
            },
          ],
        },
      },
    ],
  },
  specialties: {
    title: "Dental Internet Marketing for Every Treatment You Offer",
    lead: "Routine, urgent and elective care are chosen in different ways, so we give each treatment separate pages, ads and follow-up.",
    items: [
      {
        icon: "calendar",
        name: "New-Patient Exams & Cleanings",
        tactic: "Insurance-accepted pages and Maps rank in your zip codes",
      },
      {
        icon: "clock",
        name: "Emergency Dental Visits",
        tactic: "Call-only ads for toothache and broken-tooth searches",
      },
      {
        icon: "tooth",
        name: "Dental Implants",
        tactic: "Consult pages with financing details and patient FAQs",
      },
      {
        icon: "smile",
        name: "Clear Aligners & Orthodontics",
        tactic: "Online smile-assessment forms and aligner question pages",
      },
      {
        icon: "sparkle",
        name: "Cosmetic Dentistry & Veneers",
        tactic: "Smile galleries built only with signed patient consent",
      },
      {
        icon: "baby",
        name: "Family & Children's Dentistry",
        tactic: "Family-friendly pages and back-to-school checkup reminders",
      },
      {
        icon: "heart",
        name: "Sedation for Anxious Patients",
        tactic: "Calm, reassuring pages for nervous first-time visitors",
      },
      {
        icon: "building",
        name: "Multi-Office Dental Groups",
        tactic: "A separate listing, page set and campaign per office",
      },
    ],
    more: "Offer sleep apnea, TMJ or gum care? Ask us about it.",
  },
  steps: {
    title: "Your Path to a Fuller Dental Schedule",
    lead: "Maps fixes and ads tend to show movement first, while organic rankings build month by month.",
    items: [
      {
        h: "We Study Your Local Dental Market",
        p: "We run the searches new patients use near your office and map your position, the practices outranking you and the spots where callers drop off.",
      },
      {
        h: "We Agree on Treatments to Lead With",
        p: "Together we pick the treatments, neighborhoods and campaigns to start with, weighted toward the care you most want to grow, such as implants or emergency visits.",
      },
      {
        h: "We Go Live and Report Each Month",
        p: "Listing updates, treatment pages, ads and review requests launch together. Each month one plain report shows rankings, calls and booked appointments.",
      },
    ],
    audit: [
      ["Map Pack: dentist near me", "behind"],
      ["Insurance and new-patient info", "gap"],
      ["Online booking", "open"],
      ["Reviews vs nearby practices", "behind"],
    ],
    plan: ["Emergency visits", "Implants", "New patients", "Denver", "Aurora"],
    launch: [
      "Business Profile updated",
      "Treatment pages published",
      "Ad calls tracked",
      "Review requests sent after visits",
    ],
  },
  reviews: {
    title: "Google Reviews From Owners We Work With",
    lead: "Every review here comes from our own Google profile, where clients rate us 5.0.",
  },
  pricing: {
    title: "Dental Marketing Plans You Can Cancel Any Month",
    compareTitle: "Compare Plans for Your Dental Practice",
    addOnsTitle: "Add Campaigns for New Treatments or Offices",
    customTitle: "Running several dental offices?",
  },
  faq: {
    title: "Dental Practice Marketing Questions, Answered",
    lead: "Straight answers on new patients, SEO, ads, AI search, privacy and pricing.",
    items: [
      {
        q: "What makes the best dental marketing agency for a growing practice?",
        a: "Look for an agency that tracks booked appointments, not clicks. It should run your Google listing, dental SEO, ads and reviews as one plan, keep reply wording HIPAA-safe, report in plain numbers and let you leave any month. Ask exactly how they count new patients before you sign anything.",
      },
      {
        q: "Do I need a dental marketing agency near me to rank locally?",
        a: "No. Local rankings depend on your listing, reviews, pages and citations, not on where the agency sits. We work with practices across the USA remotely, study each market's neighborhoods, competitors and patient mix, and meet by video. Your monthly calls and reports work the same from any distance.",
      },
      {
        q: "How do dental marketing companies near me compare with dental marketing companies USA-wide?",
        a: "Compare what they measure, what you own and how you leave. Ask who owns the website and ad accounts, whether ad spend is marked up, how calls are tracked and how long the contract runs. With us you own everything, pay a 0% markup and stay month to month. Ask any agency for a sample report before you sign.",
      },
      {
        q: "What does a dental SEO marketing agency change on my website?",
        a: "Dental SEO starts with a page for each treatment and area you serve, clear insurance and new-patient details, fast load times and local schema. We also clean up citations, connect your site to your Google listing and answer the questions patients ask before booking. Every page is written for patients first and checked by your team.",
      },
      {
        q: "Can you act as our dental implant marketing agency too?",
        a: "Yes. Implant patients research for weeks, so we build detailed implant pages, consult request forms, financing information and FAQ answers, then support them with search ads. Pages explain the consult process in plain terms, your dentist reviews them, and we never promise clinical outcomes or publish patient photos without written consent.",
      },
      {
        q: "How does dental lead generation work if we don't buy leads?",
        a: "Every inquiry comes from channels your practice owns: Maps rankings, organic search, your own ads and your website. Calls and forms reach only your front desk, never a list sold to several offices, and the rankings and reviews keep working long after any single campaign ends.",
      },
      {
        q: "How long does dental SEO take to bring new patients?",
        a: "Profile fixes and ads often bring calls within weeks. Organic positions take longer, often several months, and the pace depends on the number of nearby practices and the strength of your current site. Each monthly report lists rankings, phone calls and booked appointments side by side, so you can see the trend yourself.",
      },
      {
        q: "Are your review requests and replies HIPAA-safe?",
        a: "Yes. Requests go out by text or email without treatment details, and public replies never confirm that a reviewer is a patient or mention care. We keep ads and tracking free of protected health information, and your team approves reply templates before anything is posted. If a review raises a clinical complaint, we suggest moving that conversation offline.",
      },
      {
        q: "Will AI tools like ChatGPT recommend my dental practice?",
        a: "They can, when the facts about your practice are easy to confirm. We align your name, address, phone, hours and insurance details everywhere, earn reviews from real patients and publish clear answers to common patient questions. ChatGPT, Gemini and AI Overviews lean on those signals, though no tool's placement is ever guaranteed.",
      },
      {
        q: "What do your dental marketing plans cost?",
        a: "Zonic Media's dental plans run $297, $750 or $1,500 per month with no long contract. Google charges your ad spend at cost, since our markup on it is 0%. Single-office practices often start on the first tier; groups adding ads or more offices usually need a larger one.",
      },
    ],
  },
  audit: {
    title: "Get a Free Dental Marketing Audit for Your Practice",
    lead: [
      "Send your practice name and area. We'll check where you appear for your main treatments, compare your profile and booking flow with nearby offices, and hand you a short to-do list in order of impact. You can also browse ",
      { href: "/services", label: "every service we offer" },
      ".",
    ],
    points: [
      "Plans from $297 a month",
      "0% ad-spend markup",
      "No long-term contract",
      "Reinstatement help included",
    ],
    form: {
      formType: "dental-marketing",
      badge: "Free dental audit",
      title: "Request Your Free Dental Marketing Audit",
      subtitle: "No cost and no obligation.",
      submitText: "Send My Dental Audit",
      messageLabel: "Your area and the treatments you want to grow",
      messagePlaceholder:
        "Neighborhoods you serve, treatments to grow (implants, emergency, cosmetic) and number of offices",
    },
  },
  banner: {
    title: "Be the Dentist New Patients Choose First",
    lead: "Book a free audit to learn what's holding back your new-patient calls.",
    icons: ["tooth", "calendar"],
  },
};
