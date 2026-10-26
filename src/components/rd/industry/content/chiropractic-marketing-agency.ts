import { PALETTES } from "../palettes";
import type { IndustryContent } from "../types";

/* CHIROPRACTIC MARKETING AGENCY — redesign draft content (25 Oct 2026).

   Rank safety: Semrush API units are exhausted, so no ranking or volume
   pull was possible. The live title's core term ("Chiropractic Marketing
   Agency USA") opens the new title, and every phrase in the live keywords
   meta sits in the title, H1, an H2/H3 or an FAQ question.
   Keywords came from web research (25 Oct 2026):
   - Top results for "chiropractic marketing agency" cover local SEO,
     Google Ads, conversion-focused websites, reputation management,
     content and video; most skip AI search entirely.
   - 2026 guides: a complete Google Business Profile and steady reviews are
     the core, booking paths must be obvious on every page, recall and
     wellness-plan reminders bring patients back, and HIPAA/FTC limits
     apply to reviews and health claims.
   - Patient searches: "chiropractor near me", auto-accident chiropractor
     (insurance questions), sports and neck/back pain care.
   - Questions: chiropractic marketing ideas, advertising ideas, how to get
     new patients, how long SEO takes.
   Healthcare rules: no patient-outcome claims; review replies never
   confirm someone is a patient or mention treatment.
   Fresh wording only: nothing reused from the live page or other drafts. */

export const CONTENT: IndustryContent = {
  draftSlug: "chiropractic-marketing-agency-2",
  liveUrl: "/services/chiropractic-marketing-agency",
  niche: "Chiropractic",
  meta: {
    title: "Chiropractic Marketing Agency USA | Chiropractor SEO & Ads",
    description:
      "Chiropractic marketing agency for US clinics: chiropractor SEO, Google Maps rankings, Google Ads, reviews and websites that turn searches into new-patient exams.",
    keywords: [
      "chiropractic marketing agency",
      "chiropractic marketing agency usa",
      "chiropractor marketing agency",
      "chiropractic marketing companies",
      "best chiropractic marketing agency",
      "chiropractor digital marketing agency",
      "chiropractic marketing ideas",
      "chiropractic advertising ideas",
      "content marketing for chiropractors",
      "chiropractic marketing company",
      "chiropractic advertising agency",
      "chiropractic internet marketing",
      "chiropractic lead generation",
      "chiropractor marketing",
      "chiropractor seo",
      "chiropractic seo",
      "marketing for chiropractors",
      "chiropractor website design",
    ],
  },
  palette: PALETTES.tealAmber,
  hero: {
    h1Lead: "Chiropractic",
    h1Icon: "medical",
    h1Rest: "Marketing Agency That Keeps Adjusting Tables Busy",
    lead: [
      "Someone with a stiff neck or sore back searches “chiropractor near me” and books the clinic that looks trusted and can see them soon. We put yours first with chiropractor SEO, ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Google listing management",
      },
      ", Google Ads and ",
      {
        href: "/services/chiropractor-website-design",
        label: "a clinic site built for booking",
      },
      ".",
    ],
    cta: "Book My Free Clinic Audit",
    bento: {
      kind: "photos",
      photoA: {
        src: "/images/free-website/free-chiropractic/new-patient-visits.webp",
        position: "58% 50%",
        query: "chiropractor near me",
      },
      cardA: {
        icon: "calendar",
        title: "More new-patient exams",
        sub: "Booked online or by phone",
      },
      cardB: {
        icon: "trend",
        title: "More injury visits",
        sub: "Sports, work and auto injuries",
      },
      photoB: {
        src: "/images/free-website/free-chiropractic/sports-injuries.webp",
        position: "52% 50%",
        query: "sports chiropractor near me",
      },
    },
  },
  services: {
    title: "Chiropractor Digital Marketing Agency Services, One Team",
    lead: "Six services that fill your schedule with new patients and regulars.",
    cta: "Audit My Clinic Marketing",
    items: [
      {
        icon: "pin",
        title: "Your Clinic Listing on Google Maps",
        desc: "Categories, services, hours, photos and a booking button tuned so your clinic rises on the map for back, neck and injury searches.",
        points: [
          "Chiropractor categories set",
          "Book-now button added",
          "Fresh clinic photos weekly",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Listing optimization for clinics",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Help verifying your listing",
          },
        ],
      },
      {
        icon: "search",
        title: "Chiropractor SEO",
        desc: "Condition and service pages, local citations and site fixes that move your clinic up for the visits you want more of.",
        points: [
          "Condition and town pages",
          "Citation consistency",
          "Monthly rank reports",
        ],
        links: [
          {
            href: "/services/industry/chiropractor-local-seo-services",
            label: "Local SEO for chiropractors",
          },
        ],
      },
      {
        icon: "target",
        title: "Google Ads From a Chiropractic Advertising Agency",
        desc: "PPC search and call ads for pain, injury and new-patient searches near your clinic, with low-intent and job-seeker clicks filtered out.",
        points: [
          "New-patient exam campaigns",
          "Radius targeting",
          "0% markup on spend",
        ],
        links: [
          { href: "/services/google-ads", label: "Paid search for clinics" },
        ],
      },
      {
        icon: "monitor",
        title: "Chiropractic Website Design",
        desc: "A fast, mobile-first site with online booking, insurance and auto-injury pages, and a clear first-visit guide for nervous new patients.",
        points: [
          "Book-online buttons",
          "What-to-expect page",
          "Every call tracked",
        ],
        links: [
          {
            href: "/services/chiropractor-website-design",
            label: "Chiropractor websites",
          },
          { href: "/services/web-design", label: "Custom site builds" },
        ],
      },
      {
        icon: "star",
        title: "Patient Reviews, Privacy First",
        desc: "Requests go out after visits, and our reply templates thank each reviewer without confirming anyone is a patient.",
        points: [
          "Automatic review texts",
          "HIPAA-safe reply drafts",
          "Reviews embedded on your site",
        ],
        links: [
          {
            href: "/services/local-seo-for-small-business",
            label: "Local search playbook",
          },
        ],
      },
      {
        icon: "sparkle",
        title: "Visibility in AI Answers",
        desc: "Consistent clinic details, detailed reviews and question-led pages help AI tools confirm your practice and suggest it to people nearby.",
        points: [
          "Matching details everywhere",
          "Condition FAQ pages",
          "Local mentions earned",
        ],
        links: [
          { href: "/services/ai-seo-services", label: "AI SEO for clinics" },
        ],
      },
    ],
  },
  growth: {
    title: "How Our Chiropractic Marketing Company Wins New Patients",
    lead: "Maps visibility, AI answers and a regular flow of new reviews, each one strengthening the others.",
    rows: [
      {
        title: "Climb the Map for “Chiropractor Near Me”",
        body: [
          "Most people in pain call one of the first clinics on the map. We tune your listing, publish landing pages for the towns your patients drive in from and keep new reviews coming. If Google ever suspends you, our ",
          {
            href: "/services/gbp-reinstatement-service",
            label: "listing reinstatement service",
          },
          " files the appeal.",
        ],
        points: [
          "Chiropractor categories",
          "Town landing pages",
          "Clinic and team photos",
          "Posts and Q&A",
        ],
        cta: "See Where My Clinic Ranks",
        ui: {
          kind: "maps",
          query: "chiropractor near me",
          city: "San Diego",
          category: "Chiropractor · Same-day appointments",
        },
      },
      {
        title: "Be the Clinic AI Tools Suggest for Back Pain",
        body: [
          "More people type questions like “which chiropractor near me helps with neck pain” into ChatGPT or Google's AI results. Our ",
          {
            href: "/services/ai-seo-services",
            label: "generative search optimization",
          },
          " lines up your listings, reviews and service pages so those tools can verify your clinic and mention it by name.",
        ],
        points: [
          "Consistent clinic details",
          "Reviews in patients' words",
          "Condition FAQ pages",
          "Credentials on display",
        ],
        cta: "Audit My Clinic's AI Visibility",
        ui: {
          kind: "ai",
          query: "chiropractor for lower back pain in austin open saturday",
          intro: "For Saturday visits around Austin,",
          bullets: [
            "Saturday and evening hours",
            "Online new-patient booking",
            "Accepts most major insurance",
          ],
        },
      },
      {
        title: "Collect Reviews After Every Visit, Safely",
        body: [
          "New patients compare star ratings before they book. After each visit a short text invites a Google review. Our replies thank the reviewer without confirming they are a patient or mentioning any care, so your rating grows without privacy risk.",
        ],
        points: [
          "Requests sent automatically",
          "Alerts on low ratings",
          "HIPAA-safe reply drafts",
          "Reviews on your website",
        ],
        cta: "Grow My Clinic Reviews",
        ui: {
          kind: "reviews",
          sms: "Hi Jordan, thanks for stopping by Your Company today. Would you share a quick Google review?",
          reviewer: "Jordan M.",
          review:
            "Booked online the same afternoon, the front desk was warm and everything ran right on time.",
          reply:
            "Thank you for taking a moment to share this, Jordan. Kind words mean a lot to our whole team.",
        },
      },
    ],
  },
  specialties: {
    title: "Chiropractic Internet Marketing for Every Service You Offer",
    lead: "A new back-pain patient, an athlete and a wellness member all choose differently, so each service gets its own approach.",
    photo: {
      src: "/images/free-website/free-chiropractic/auto-accident-care.webp",
      alt: "Chiropractor checking a patient's neck and shoulder in a bright clinic",
      caption: "Injury, sports and wellness visits",
      sub: "Marketing for each kind of appointment",
    },
    items: [
      {
        icon: "medical",
        name: "Back Pain Care",
        tactic: "Condition pages built around local back pain searches",
      },
      {
        icon: "heart",
        name: "Neck Pain & Headache Visits",
        tactic: "Symptom-led pages answering what new patients ask",
      },
      {
        icon: "shield",
        name: "Auto Accident Injury Care",
        tactic: "Insurance-step pages and fast first-visit booking",
      },
      {
        icon: "award",
        name: "Sports Chiropractic",
        tactic: "Pages and outreach for gyms, teams and runners",
      },
      {
        icon: "baby",
        name: "Prenatal & Pediatric Chiropractic",
        tactic: "Gentle-care pages for expecting mothers and families",
      },
      {
        icon: "repeat",
        name: "Wellness & Maintenance Plans",
        tactic: "Membership pages and reminders that rebook regular visits",
      },
      {
        icon: "handHeart",
        name: "Massage & Soft-Tissue Therapy",
        tactic: "Add-on offers inside booking confirmations and emails",
      },
      {
        icon: "briefcase",
        name: "Workers' Comp & Workplace Injuries",
        tactic: "Employer-friendly pages and quick new-patient scheduling",
      },
    ],
    more: "Offer decompression, dry needling or rehab? Those get marketed too.",
  },
  steps: {
    title: "From Audit to Booked Exams in Three Steps",
    lead: "Quick changes to your listing and ads go first, then come the rankings that keep exams booked.",
    items: [
      {
        h: "Free Clinic Visibility Audit",
        p: "We run the searches patients use around your clinic and show your Maps position, the clinics beating you and the gaps costing you new-patient exams.",
      },
      {
        h: "A Plan Around Your Best Services",
        p: "Next, we decide which services and towns get attention first, favoring the visits you want more of, like auto injury, sports care or wellness plans, and matching your open hours.",
      },
      {
        h: "Launch, Then a Monthly Summary",
        p: "Your listing changes, condition pages, ad campaigns and review texts all go live in the same week. A short monthly summary then tracks rankings, phone calls and booked exams, with notes on what we'll adjust next.",
      },
    ],
    audit: [
      ["Maps rank: chiropractor near me", "behind"],
      ["Listing services and hours", "gap"],
      ["Online exam booking", "open"],
      ["Reviews vs nearby clinics", "behind"],
    ],
    plan: [
      "New-patient exams",
      "Auto injury",
      "Sports care",
      "San Diego",
      "La Mesa",
    ],
    launch: [
      "Clinic listing rebuilt",
      "Condition pages live",
      "Calls traced to source",
      "Review texts running",
    ],
  },
  reviews: {
    title: "What Business Owners Say on Google",
    lead: "Real reviews from our own Google profile, rated 5.0 by the owners we serve.",
  },
  pricing: {
    title: "Chiropractic Marketing Plans Without Lock-Ins",
    compareTitle: "Compare Plans for Your Clinic",
    addOnsTitle: "Extra Campaigns When You Add Services",
    customTitle: "Running several clinic locations?",
  },
  faq: {
    title: "Questions to Ask Chiropractor Marketing Agencies",
    lead: "Plain answers on new patients, ads, content, AI search, privacy and pricing.",
    items: [
      {
        q: "What does a chiropractor marketing agency do each month?",
        a: "It keeps new patients finding and booking your clinic. Each month we update your Google listing, publish and improve service pages, manage ads, send review requests, fix citations and report on rankings, calls and booked exams, so you can see what moved and what we plan to try next.",
      },
      {
        q: "What should I look for in the best chiropractic marketing agency?",
        a: "Choose one that reports booked exams rather than clicks, handles reviews in a HIPAA-safe way, avoids promising health outcomes, leaves you owning the website and ad accounts and doesn't tie you to a long contract. A clear plan for your best services beats a long list of tactics, so ask to see one first.",
      },
      {
        q: "How are chiropractic marketing companies different from general agencies?",
        a: "Specialized chiropractic marketing companies know how patients search, which services bring repeat visits and which privacy and health-claim limits apply. A general agency may reuse retail ads. We pair local search, ads and reviews with clinic-specific pages and careful, compliant wording that never promises results.",
      },
      {
        q: "What chiropractic marketing ideas work best in 2026?",
        a: "Begin with a complete Google listing, steady reviews and online booking. Then add a page for each condition and service, short videos explaining a first visit, partnerships with gyms and local employers, wellness plan reminders and question-and-answer pages that AI assistants can cite. Add one idea at a time and track the calls each brings.",
      },
      {
        q: "Which chiropractic advertising ideas are worth paying for?",
        a: "Search ads on high-intent phrases like “chiropractor near me” and injury searches usually come first, sent to a page with online booking. Local Services Ads, call-only campaigns during office hours and a new-patient offer can help too. We skip health-based remarketing to stay HIPAA-safe.",
      },
      {
        q: "Does content marketing for chiropractors still work with AI search?",
        a: "Yes, when it answers real questions. Pages explaining what a first visit involves, what to do after a car accident or how insurance works give AI Overviews and ChatGPT clear material to cite, and they help visitors book with confidence. We draft each page with your doctors' input and keep claims factual.",
      },
      {
        q: "How does chiropractic lead generation work without paying per lead?",
        a: "Your Maps rankings, organic pages, ads and website send calls and booking requests straight to your front desk. No other clinic receives them, and the rankings and reviews you build keep producing new-patient inquiries once a campaign is over. Each inquiry is tagged with its source, so you know which channel earns its keep.",
      },
      {
        q: "Is it HIPAA-safe to ask patients for Google reviews?",
        a: "Yes, done carefully. Requests carry no treatment details, replies thank reviewers without confirming they are patients or discussing care, and no protected health information enters ads or tracking. Your team signs off on every template before it goes live.",
      },
      {
        q: "How long does chiropractic SEO take to work?",
        a: "Expect early calls from listing updates and ads in the first few weeks. Organic rankings tend to grow across several months, shaped by the clinics you compete with and the strength your site starts from. A monthly report covers rankings, calls and booked exams, so slow months never come as a surprise.",
      },
      {
        q: "What do your chiropractic marketing plans cost?",
        a: "We offer a $297 plan, a $750 plan and a $1,500 plan, each billed monthly and free of lock-ins. You pay Google for ad clicks yourself, and we never mark that spend up. A single clinic often starts on the first plan; clinics running ads or several locations usually choose more.",
      },
    ],
  },
  audit: {
    title: "Get a Free Chiropractic Marketing Audit",
    lead: [
      "Tell us about your clinic. We'll run local searches for your core services, score your Google listing, website and review count against the top three clinics, and send a short fix list. Prefer to explore first? Start with ",
      { href: "/services", label: "our full service menu" },
      ".",
    ],
    points: [
      "Month-to-month plans",
      "0% markup on ad spend",
      "Starting at $297 monthly",
      "Suspended-listing help included",
    ],
    form: {
      formType: "chiropractic-marketing",
      badge: "Free clinic audit",
      title: "Request Your Free Chiropractic Marketing Audit",
      subtitle: "Free, with nothing to sign.",
      submitText: "Send My Clinic Audit",
      messageLabel: "Your area and main chiropractic services",
      messagePlaceholder:
        "Towns you serve, services to grow (auto injury, sports, wellness plans) and number of locations",
    },
  },
  banner: {
    title: "Be the Clinic People Book When Their Back Gives Out",
    lead: "Ask for a free clinic audit and find out what will fill open exam slots first.",
    icons: ["medical", "calendar"],
  },
};
