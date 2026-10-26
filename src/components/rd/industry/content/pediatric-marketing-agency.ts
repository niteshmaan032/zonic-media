import { PALETTES } from "../palettes";
import type { IndustryContent } from "../types";

/* PEDIATRIC MARKETING AGENCY — redesign draft content (25 Oct 2026).

   Rank safety: Semrush API units are exhausted, so no ranking or volume
   pull was possible. The live title's core term ("Pediatric Marketing
   Agency") opens the new title, and every phrase in the live keywords
   meta sits in the title, H1, an H2/H3 or an FAQ question.
   Keywords came from web research (25 Oct 2026):
   - Top results for "pediatric marketing agency" are healthcare web and
     marketing shops (web design, HIPAA-compliant forms, case studies);
     none answer parents' own questions or cover AI search.
   - Parents search "pediatrician near me" and "pediatrician accepting new
     patients [city]", then check insurance, new-patient availability,
     providers and practice feel; many start in the second or third
     trimester; meet-and-greet visits and OB-GYN referrals matter.
   - Strongest channels per guides: complete Google Business Profile,
     steady parent reviews, local SEO, then paid search.
   Healthcare rules: no patient-outcome claims; review replies never
   confirm someone is a patient or mention treatment.
   Fresh wording only: nothing reused from the live page or other drafts. */

export const CONTENT: IndustryContent = {
  draftSlug: "pediatric-marketing-agency-2",
  liveUrl: "/services/pediatric-marketing-agency",
  niche: "Pediatric",
  meta: {
    title: "Pediatric Marketing Agency | Practice SEO, Ads & New Families",
    description:
      "Help more parents choose your practice. Our pediatric marketing agency runs pediatric SEO, Google Maps rankings, Google Ads and websites that book new families.",
    keywords: [
      "pediatric marketing agency",
      "marketing agency for doctors",
      "digital marketing agency for doctors",
      "pediatric marketing ideas",
      "pediatric practice marketing",
      "healthcare marketing agency",
      "pediatric seo",
      "medical practice marketing",
      "pediatric marketing company",
      "pediatric advertising agency",
      "pediatric internet marketing",
      "pediatric lead generation",
      "pediatrician marketing",
      "pediatrician seo",
      "marketing for pediatricians",
      "pediatrician website design",
    ],
  },
  palette: PALETTES.violetAmber,
  hero: {
    h1Lead: "Pediatric",
    h1Icon: "baby",
    h1Rest: "Marketing Agency That Helps New Families Find You First",
    lead: [
      "Parents choose a pediatrician carefully, often before the baby arrives: they search “pediatrician near me”, then check your insurance and whether you take new patients. We answer both with pediatric SEO, ",
      {
        href: "/local-seo-google-business-optimization",
        label: "practice Business Profile management",
      },
      ", Google Ads and ",
      {
        href: "/services/pediatrician-website-design",
        label: "a parent-friendly practice website",
      },
      ".",
    ],
    cta: "Get My Free Practice Audit",
    bento: {
      kind: "tiles",
      wide: {
        icon: "pin",
        title: "Top 3 for “pediatrician near me”",
        sub: "In the neighborhoods your families call home",
        chips: [
          "Pediatrician near me",
          "New patients welcome",
          "Sick visits today",
          "+ your town",
        ],
      },
      left: {
        icon: "baby",
        title: "More newborn sign-ups",
        sub: "Expecting parents choose you before delivery",
      },
      right: {
        icon: "calendar",
        title: "More booked well visits",
        sub: "Checkups scheduled online, any hour",
      },
      bottom: {
        title: "A growing patient panel",
        sub: "Reviews and referrals keep new families arriving",
      },
    },
  },
  services: {
    title: "Pediatric Practice Marketing Services Parents Notice",
    lead: "Six services aimed at the questions parents ask before choosing a doctor for their child.",
    cta: "Audit My Practice Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Profile for Pediatricians",
        desc: "Correct categories, hours, insurance notes, office photos and a new-patient booking link, so your listing ranks and earns the call.",
        points: [
          "Pediatrician category set",
          "New-patient link added",
          "Weekly updates and photos",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Profile optimization for practices",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Verify a new office listing",
          },
        ],
      },
      {
        icon: "search",
        title: "Pediatric SEO",
        desc: "Pages for each visit type and nearby town, plus citations and site fixes that lift your practice for the searches parents run.",
        points: [
          "Visit-type and town pages",
          "Healthcare citation cleanup",
          "Rankings tracked by area",
        ],
        links: [
          {
            href: "/services/industry/pediatricians",
            label: "SEO for pediatric practices",
          },
        ],
      },
      {
        icon: "target",
        title: "Google Ads for Pediatric Practices",
        desc: "Search and call ads on new-patient, sick-visit and newborn searches, built without patient data or health-based remarketing.",
        points: [
          "New-patient campaigns",
          "Office-hours call ads",
          "0% ad-spend markup",
        ],
        links: [
          { href: "/services/google-ads", label: "Paid search management" },
        ],
      },
      {
        icon: "monitor",
        title: "Pediatrician Website Design",
        desc: "A warm, fast site with provider bios, insurance plans, a new-patient form and online booking that parents can use one-handed.",
        points: [
          "Insurance-accepted page",
          "Meet-the-doctor bios",
          "Bookings and calls tracked",
        ],
        links: [
          {
            href: "/services/pediatrician-website-design",
            label: "Websites for pediatricians",
          },
        ],
      },
      {
        icon: "star",
        title: "Parent Reviews, Handled Privately",
        desc: "After visits, parents get a short review request, and every public reply thanks them without confirming their child is a patient.",
        points: [
          "Requests by text or email",
          "Replies that protect privacy",
          "Reviews shown on site",
        ],
        links: [
          {
            href: "/services/local-seo-for-small-business",
            label: "Our local SEO approach",
          },
        ],
      },
      {
        icon: "sparkle",
        title: "AI Answers for Parents",
        desc: "Consistent details, reviews and clear answers about insurance, hours and new patients help AI tools suggest your practice.",
        points: [
          "Matching practice details",
          "Parent question pages",
          "Local mentions earned",
        ],
        links: [
          {
            href: "/services/ai-seo-services",
            label: "AI search optimization services",
          },
        ],
      },
    ],
  },
  growth: {
    title: "How Our Pediatric Marketing Company Reaches New Parents",
    lead: "Maps rankings, AI answers and a website that welcomes new families, all aimed at booked visits.",
    rows: [
      {
        title: "Show Up First When Parents Search the Map",
        body: [
          "Parents shortlisting pediatricians start with the three practices on the map. We complete your listing, build a page for each nearby town and keep parent reviews flowing. If your profile is ever suspended, we ",
          {
            href: "/services/gbp-reinstatement-service",
            label: "restore it through Google's appeal process",
          },
          ".",
        ],
        points: [
          "Pediatrician categories",
          "Town pages",
          "Office and staff photos",
          "New-patient posts",
        ],
        cta: "Check My Practice on Maps",
        ui: {
          kind: "maps",
          query: "pediatrician near me",
          city: "Nashville",
          category: "Pediatrician · Accepting new patients",
        },
      },
      {
        title: "Get Suggested When Parents Ask AI for a Pediatrician",
        body: [
          "Busy parents now type questions like “which pediatrician near me takes new patients?” into ChatGPT, Gemini or Google's AI results. Our ",
          { href: "/services/ai-seo-services", label: "AI visibility work" },
          " keeps your insurance, hours, providers and reviews consistent, giving those assistants facts they can check before naming you.",
        ],
        points: [
          "Insurance plans listed",
          "Provider bios",
          "Parent FAQ pages",
          "Consistent listings",
        ],
        cta: "Check What AI Says About Us",
        ui: {
          kind: "ai",
          query: "pediatrician accepting new patients in plano",
          intro: "For new patients around Plano,",
          bullets: [
            "Accepting newborns and siblings",
            "Same-day sick appointments",
            "Evening and weekend hours",
          ],
        },
      },
      {
        title: "A Website That Answers Parents Before They Call",
        body: [
          "Parents decide in seconds whether a practice fits. Your site puts accepted insurance, new-patient openings, provider bios and same-day sick visits up front, with tap-to-call and online booking, so the call or form comes straight to your front desk.",
        ],
        points: [
          "Insurance page up front",
          "Meet-the-doctor videos",
          "Online booking",
          "Tracked calls and forms",
        ],
        cta: "Review My Practice Website",
        ui: {
          kind: "website",
          url: "yourcompany.com/new-patients",
          headline: "Welcoming new patients, newborns to teens",
          services: [
            "Well-child visits",
            "Same-day sick visits",
            "Newborn care",
            "Sports physicals",
          ],
        },
      },
    ],
  },
  specialties: {
    title: "Pediatric Internet Marketing for Every Visit Type",
    lead: "Newborn sign-ups, sick visits and school physicals each follow their own search pattern, so each gets its own plan.",
    items: [
      {
        icon: "baby",
        name: "Newborn & Prenatal Visits",
        tactic: "Expecting-parent pages and meet-the-doctor booking forms",
      },
      {
        icon: "calendar",
        name: "Well-Child Checkups",
        tactic: "Checkup reminder emails and online booking links",
      },
      {
        icon: "clock",
        name: "Same-Day Sick Visits",
        tactic: "Sick-visit pages and call ads for weekday mornings",
      },
      {
        icon: "shield",
        name: "Vaccines & Immunizations",
        tactic: "Vaccine policy pages answering parents' common questions",
      },
      {
        icon: "award",
        name: "School & Sports Physicals",
        tactic: "Back-to-school campaigns timed before forms are due",
      },
      {
        icon: "users",
        name: "Teen & Adolescent Care",
        tactic: "Teen-health pages written for parents and teens",
      },
      {
        icon: "monitor",
        name: "Pediatric Telehealth Visits",
        tactic: "Virtual-visit pages and after-hours booking options",
      },
      {
        icon: "building",
        name: "Multi-Location Pediatric Groups",
        tactic: "Separate profiles, pages and ads for each office",
      },
    ],
    more: "Lactation, behavioral health or allergy care? We cover it.",
  },
  steps: {
    title: "Getting Started Takes Three Simple Steps",
    lead: "Start before back-to-school season, when parents line up physicals and look for new doctors.",
    items: [
      {
        h: "A Free Look at Your Local Visibility",
        p: "We search like a new parent in your area and note your Maps spot, every practice listed above you and what parents can't find on your site.",
      },
      {
        h: "A Plan Built Around Your Openings",
        p: "We pick the visit types, towns and campaigns to lead with, such as newborn sign-ups, sick visits or sports physicals, based on your openings and goals.",
      },
      {
        h: "Go Live and Track Every New Family",
        p: "Profile updates, visit-type pages, paid campaigns and review requests start together. From then on, a monthly report shows where you rank, how many parents called or booked online and which channel sent each new family.",
      },
    ],
    audit: [
      ["Maps rank: pediatrician near me", "behind"],
      ["Insurance info on listing", "gap"],
      ["New-patient booking online", "open"],
      ["Parent review count", "behind"],
    ],
    plan: [
      "Newborn sign-ups",
      "Sick visits",
      "Physicals",
      "Nashville",
      "Franklin",
    ],
    launch: [
      "Listing completed",
      "Visit pages published",
      "Phone tracking live",
      "Parent review requests on",
    ],
  },
  reviews: {
    title: "5.0 on Google From the Owners We Serve",
    lead: "Read unedited reviews from business owners we work with, pulled from our own Google profile.",
  },
  pricing: {
    title: "Pediatric Marketing Plans Billed Month to Month",
    compareTitle: "Compare Plans for Your Pediatric Practice",
    addOnsTitle: "Add Campaigns for New Offices or Services",
    customTitle: "Running a multi-office pediatric group?",
  },
  faq: {
    title: "Pediatric Marketing FAQs for Practice Owners",
    lead: "New families, ads, privacy, AI search and plans, answered plainly.",
    items: [
      {
        q: "What pediatric marketing ideas work best in 2026?",
        a: "Start with a complete Google listing, steady parent reviews and an insurance-and-new-patients page with online booking. Then add expecting-parent content, meet-the-doctor videos, back-to-school physical campaigns, referral ties with local OB-GYNs and parent FAQ pages written for AI search. Roll them out one at a time so you can see what each adds.",
      },
      {
        q: "Is pediatric marketing different from general medical practice marketing?",
        a: "Yes. Parents, not patients, make the choice, and they often decide before a child is born. Pediatric marketing speaks to them about insurance, new-patient openings, provider style, sick-visit access and vaccine policies. Privacy care matters even more, since every patient is a minor, so ads, forms and review replies are built with that in mind.",
      },
      {
        q: "What should a digital marketing agency for doctors do for a pediatric office?",
        a: "It should keep your Google listing complete, publish pages for each visit type and town, run privacy-safe ads, manage parent reviews and track calls and bookings. A good marketing agency for doctors also keeps protected health information out of every campaign and report, and writes in a warm, plain voice parents trust.",
      },
      {
        q: "Do you work as a healthcare marketing agency for other specialties?",
        a: "Yes. Besides pediatric practices, we market dental offices, chiropractic clinics and other local healthcare businesses. Each gets its own pages and campaigns, but the same rules apply everywhere: no outcome claims, no patient data in ads and review replies that protect privacy.",
      },
      {
        q: "How does pediatric lead generation work for a practice?",
        a: "New-family inquiries come from sources the practice controls, such as its Maps listing, search rankings, paid campaigns and website. Every call and booking request lands at your front desk and is tracked, so you can see which channel brought each family and invest where it pays off.",
      },
      {
        q: "Can a pediatric advertising agency run Google Ads without patient data?",
        a: "Yes, and it should. We target searches, locations and office hours, not health conditions or patient lists, and no protected health information ever reaches remarketing lists or analytics. Ads lead to pages about new patients, sick visits or physicals, never anything that hints at a diagnosis.",
      },
      {
        q: "Are review requests and replies HIPAA-safe for a pediatric practice?",
        a: "They are when built carefully. Requests carry no visit details, replies thank parents without confirming their child is seen at your practice, and staff never discuss care in public. We draft the templates, your team approves them, and nothing goes live without that sign-off. Clinical concerns raised in reviews are taken offline by phone.",
      },
      {
        q: "Can parents find our practice through ChatGPT or AI Overviews?",
        a: "Yes, when your details are simple to verify. We keep your practice details, office hours and accepted plans identical on every listing, gather parent reviews and post plain answers to the questions parents ask most. Those signals give AI assistants the confidence to name your practice when a parent asks.",
      },
      {
        q: "How long does pediatric SEO take to show results?",
        a: "Ads and a completed listing usually produce calls within the first month or so. Organic rankings grow over several months, depending on nearby competition and your site's starting point. You get a monthly report on rankings, calls and new-family bookings, with the next month's priorities spelled out.",
      },
      {
        q: "What do pediatric marketing plans cost at Zonic Media?",
        a: "Pricing starts at $297 a month, with $750 and $1,500 tiers for practices that want more channels or offices. All plans run month to month, and ad spend goes to Google with a 0% markup. Most single-office practices begin on the first tier.",
      },
    ],
  },
  audit: {
    title: "Free Pediatric Marketing Audit for Your Practice",
    lead: [
      "Share your practice name and the towns your families come from. We'll test parent searches like “pediatrician near me”, review your listing, new-patient page and reviews, and rank the changes by impact. Browse ",
      { href: "/services", label: "our marketing services" },
      " or the ",
      { href: "/industries", label: "industries we serve" },
      ".",
    ],
    points: [
      "Month-to-month billing",
      "Tiers from $297/mo",
      "0% markup on ads",
      "Profile reinstatement covered",
    ],
    form: {
      formType: "pediatric-marketing",
      badge: "Free practice audit",
      title: "Request Your Free Pediatric Marketing Audit",
      subtitle: "Free, and you're never obligated.",
      submitText: "Send My Practice Audit",
      messageLabel: "Your towns and the visits you want more of",
      messagePlaceholder:
        "Towns you serve, visits to grow (newborns, sick visits, physicals) and number of offices",
    },
  },
  banner: {
    title: "Be the Pediatrician New Parents Trust First",
    lead: "A free practice audit shows what's keeping new families from booking.",
    icons: ["baby", "heart"],
  },
};
