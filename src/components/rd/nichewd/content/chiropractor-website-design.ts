/* Chiropractor Website Design — redesign draft copy (26 Oct 2026).

   Research, 26 Oct 2026:
   - Search Console, 90 days, live page: chiropractic website design 324
     impressions (pos 45.1) · chiropractor website design 132 (39.3) ·
     chiropractor web design company 110 (35.1) · chiropractor web design
     110 (40.3) · chiropractic web design 99 (35.0) · website design for
     chiropractors 91 (41.3) · chiropractic website companies 84 (38.1) ·
     custom chiropractic websites 66 (57.3) · chiropractic websites 63
     (46.3).
   - Semrush US: chiropractic website design 480 (KD 9, easy) ·
     chiropractic websites 480 (17) · chiropractic web design 320 (17) ·
     chiropractor website design 260 (0).
   - Web research (clinic-website guides, 2026): most new-patient traffic
     arrives on phones; short first-visit forms (name, phone, preferred
     times, reason) book better than long ones, with intake sent after;
     one page per condition (low back pain, neck pain, sciatica,
     headaches, prenatal) and per injury type (auto accident, sports,
     work); a personal injury page that explains the first visit and
     paperwork without promising coverage; insurance vs cash-pay clarity;
     evening/Saturday hours and parking answered fast; new-patient offers
     allowed but no guarantees or risky before/after claims. Practices ask
     about cost, build time, booking integration, whether a Google profile
     is enough and whether a builder will do.
   Rules kept: build time 2–3 weeks (owner), no prices except the locked
   pricing section, no company or software named, no clinical claims,
   verified numbers only, every live content link kept; small-business
   local SEO link replaces the home-services one. */

import { tonesFor } from "../tones";
import type { NicheWebContent } from "../types";

export const CONTENT: NicheWebContent = {
  liveUrl: "/services/chiropractor-website-design",
  stage: {
    widget: "book",
    switchLabel: "Preview the example site by reason for visit",
    business: "Your Chiropractic Clinic",
    domain: "yourchiroclinic.com",
    nav: ["Conditions", "Injuries", "First visit", "Doctors"],
    call: "Call the clinic",
    primary: "Book first visit",
    secondary: "What to expect",
    proof: "Rated by local patients",
    bookTitle: "Book a first visit",
    confirm: "Book this time",
    serviceSubs: ["New-patient exams", "Evening times", "Walk-ins welcome"],
    toast: "First visit booked",
    toastNote: "Intake link sent",
    phoneCta: "Book",
    modes: [
      {
        label: "Back & neck pain",
        icon: "handHeart",
        badge: "Back pain · New patients",
        headline: "Back Pain Slowing You Down? Book a First Visit.",
        sub: "Gentle exams and adjustments for back pain, neck pain, sciatica and headaches.",
        services: ["Low back pain", "Neck & headaches", "Sciatica"],
        book: ["New-patient exam", "Adjustment", "Follow-up visit"],
        img: {
          src: "/images/free-website/free-chiropractic/back-pain-care.webp",
          position: "50% 40%",
        },
      },
      {
        label: "Auto & sports",
        icon: "car",
        badge: "Accident & sports injuries",
        headline: "Hurt in a Car Accident? Get Seen This Week.",
        sub: "Injury exams, paperwork help and care plans after crashes and sports strains.",
        services: ["Auto injury exam", "Sports injuries", "Whiplash care"],
        book: ["Accident exam", "Sports injury", "Work injury"],
        img: {
          src: "/images/free-website/free-chiropractic/sports-injuries.webp",
          position: "50% 45%",
        },
      },
    ],
    legend: [
      "Click-to-call clinic button",
      "Condition and injury landing pages",
      "First-visit booking calendar",
      "Call bar that follows the thumb",
    ],
  },
  // Indigo for pain care, emerald for injuries, then coral and sky.
  tones: tonesFor("chiropractor-website-design"),
  serviceName: "Chiropractic Website Design",
  audience: "chiropractors and chiropractic clinics",
  meta: {
    title: "Chiropractic Website Design | Custom Chiropractor Websites",
    description:
      "Chiropractic website design that books new-patient exams: condition and injury pages, online first-visit booking, intake forms and fast pages on phones.",
    keywords: [
      "chiropractic website design",
      "chiropractic websites",
      "chiropractic web design",
      "chiropractor website design",
      "chiropractor web design",
      "chiropractor web design company",
      "website design for chiropractors",
      "chiropractic website companies",
      "custom chiropractic websites",
      "chiropractor websites",
      "chiropractic website design company",
    ],
  },
  hero: {
    h1Lead: "Chiropractic Website Design",
    h1Rest: "Built to Book New-Patient Exams",
    icon: "handHeart",
    lead: [
      "Our website design for chiropractors sends back pain, headache and car accident searches to the right page, then lets patients claim a first-visit slot without calling. Your ",
      { href: "/services/web-design", label: "custom website" },
      " for the clinic launches in 2–3 weeks, with condition pages made to rank in your town.",
    ],
    cta: "Get My Free Chiropractic Mockup",
    bento: {
      kind: "photos",
      photoA: {
        src: "/images/home-improvement-web/chiropractor-hero.webp",
        position: "center 35%",
        query: "chiropractic website design",
      },
      cardA: {
        icon: "pin",
        title: "Found for Every Condition You Treat",
        sub: "Back, neck, sciatica and injury pages",
      },
      photoB: {
        src: "/images/home-improvement-web/chiropractor-first-impressions-1.webp",
        position: "center 25%",
        query: "chiropractor near me",
      },
      cardB: {
        icon: "trend",
        title: "A Steadier Flow of New Patients",
        sub: "First-visit booking open on weekends too",
      },
    },
  },
  showcase: {
    title: "Preview a Chiropractor Website Design for Pain and Injury Patients",
    lead: "Flip between back pain and injury care and watch the pages, booking and mobile view adapt.",
  },
  services: {
    title: "Chiropractor Web Design Built\nAround How Patients Choose",
    lead: "Solo clinics, multi-doctor practices and sports-focused offices get one chiropractor web design company for design, copy and upkeep.",
    cta: "Start My Chiropractic Site Plan",
    items: [
      {
        icon: "monitor",
        title: "Custom Chiropractic Websites",
        desc: "Designed from a blank page around your techniques, doctors and the patients you want more of, never a recycled theme.",
        points: [
          "Original design",
          "Doctor and technique bios",
          "Patient-focused copy",
        ],
        links: [
          { href: "/services/web-design", label: "Website design services" },
        ],
      },
      {
        icon: "repeat",
        title: "Rebuilds That Protect Search Traffic",
        desc: "Older clinic sites get faster pages and a clearer booking path, with every ranking URL kept or redirected.",
        points: ["Ranking pages kept", "Clean redirects", "Faster load times"],
        links: [],
      },
      {
        icon: "handHeart",
        title: "Condition and Symptom Pages",
        desc: "A page each for low back pain, neck pain, sciatica, headaches and more, so patients see their problem named.",
        points: [
          "Back and neck pages",
          "Sciatica and headache pages",
          "Prenatal care page",
        ],
        links: [
          {
            href: "/services/industry/chiropractor-local-seo-services",
            label: "Chiropractor local SEO",
          },
        ],
      },
      {
        icon: "car",
        title: "Auto Accident and Injury Pages",
        desc: "Personal injury, sports and workplace injury pages that explain the first visit, the paperwork and what to bring.",
        points: ["Car accident page", "Sports injury page", "Work injury page"],
        links: [
          {
            href: "/services/google-ads",
            label: "Google Ads for chiropractors",
          },
        ],
      },
      {
        icon: "calendar",
        title: "First-Visit Booking and Intake",
        desc: "Online booking tied to your clinic scheduling software, with intake paperwork sent ahead of the exam.",
        points: [
          "New-patient time slots",
          "Paperwork done at home",
          "Reschedule links",
        ],
        links: [],
      },
      {
        icon: "tool",
        title: "Wellness Plan Pages and Site Care",
        desc: "Pages for maintenance and wellness memberships, plus hosting, backups and edits whenever schedules or services change.",
        points: [
          "Wellness plan pages",
          "Managed hosting",
          "Monthly content edits",
        ],
        links: [
          {
            href: "/services/chiropractic-marketing-agency",
            label: "Chiropractic marketing",
          },
          {
            href: "/chiropractic-website-design-agency-us/offer",
            label: "Free chiropractic website offer",
          },
        ],
      },
    ],
  },
  features: {
    title: "Must-Haves on Every Chiropractor Website We Ship",
    lead: "Each piece answers a question a patient in pain has before booking.",
    items: [
      {
        icon: "phone",
        title: "Call or Book From Any Screen",
        text: "A pinned bar keeps the clinic line and booking button within thumb reach.",
      },
      {
        icon: "clock",
        title: "Evening and Weekend Times Shown",
        text: "Patients see the late and Saturday openings that fit around work.",
      },
      {
        icon: "handHeart",
        title: "Your Techniques, Explained Simply",
        text: "Plain pages on adjustments, soft-tissue work and decompression, minus the jargon.",
      },
      {
        icon: "clipboard",
        title: "A First-Visit Walkthrough",
        text: "What happens at the exam, how long it takes and what to wear.",
      },
      {
        icon: "shield",
        title: "Insurance and Cash-Pay Clarity",
        text: "Accepted plans, personal injury cases and self-pay options laid out plainly.",
      },
      {
        icon: "users",
        title: "A Page for Each Doctor",
        text: "Credentials, techniques and a friendly photo for each chiropractor.",
      },
      {
        icon: "star",
        title: "Google Reviews Where Patients Decide",
        text: "Recent ratings placed beside booking buttons and condition content.",
      },
      {
        icon: "search",
        title: "Clinic Schema and Local Signals",
        text: "Clinic, doctor and service markup so Google understands every page.",
      },
    ],
  },
  growth: {
    title: "Where a New Chiropractic Website Finds Patients",
    lead: "Local rankings, an easy first-visit booking path and mentions in AI answers.",
    rank: {
      title: "Rank for Every Ache Patients Search",
      body: [
        "Condition, injury and neighborhood pages are written around real searches, from sciatica help to a car accident chiropractor, and positions are reviewed each week. Our ",
        {
          href: "/services/industry/chiropractor-local-seo-services",
          label: "chiropractor local SEO",
        },
        " and ",
        {
          href: "/local-seo-google-business-optimization",
          label: "Google profile optimization",
        },
        " carry that reach onto Google Maps.",
      ],
      points: [
        "Condition-led pages",
        "Neighborhood landing pages",
        "Weekly ranking reports",
        "Clinic schema",
      ],
      cta: "Plan My Condition Pages",
      keywords: [
        ["chiropractor near me", 17, 2],
        ["car accident chiropractor", 29, 4],
        ["sciatica chiropractor", 24, 3],
        ["chiropractor open saturday", 33, 6],
      ],
    },
    convert: {
      title: "Turn Sore-Back Visitors Into Booked Exams",
      body: [
        "A short first-visit form, clear time slots and a call bar that follows the thumb turn more visits into exams. Every booking is labeled with the condition page and search term behind it, and ",
        {
          href: "/services/chiropractic-marketing-agency",
          label: "our chiropractic marketing team",
        },
        " can then push more visitors toward the condition pages with the strongest booking rate.",
      ],
      points: [
        "Short first-visit form",
        "Open times on screen",
        "Bookings tied to pages",
        "One-thumb layout",
      ],
      cta: "Walk Me Through the Booking Path",
      url: "yourchiroclinic.com",
      headline: "Back Pain? Book Your First Visit Today",
      services: ["First visit", "Adjustment", "Injury exam", "Massage"],
    },
    ai: {
      title: "Earn a Spot in AI Answers About Chiropractors",
      body: [
        "Someone with a stiff neck may now ask an AI chat tool or Google AI Overviews which chiropractor nearby takes walk-ins. Clear answers on each page plus structured data help your clinic get cited, the same groundwork as our ",
        { href: "/services/ai-seo-services", label: "AI search optimization" },
        ".",
      ],
      points: [
        "Question-led page copy",
        "Doctor and clinic schema",
        "Hours and insurance in text",
        "AI mention checks",
      ],
      cta: "See If AI Mentions My Clinic",
      query: "best chiropractor for sciatica near me",
      intro: "For sciatica care close by,",
      bullets: [
        "Clear first-visit guide",
        "Evening appointments",
        "Strong patient reviews",
      ],
    },
  },
  sitemap: {
    title: "How Patients Find Each Page of a Chiropractic Website",
    lead: "Conditions, injuries and towns each get a page of their own, so more of the site can rank.",
    home: "Your Chiropractic Clinic homepage",
    groups: [
      {
        name: "Conditions",
        icon: "handHeart",
        pages: ["Low back pain", "Neck pain & headaches", "Sciatica"],
      },
      {
        name: "Injuries",
        icon: "car",
        pages: ["Auto accidents", "Sports injuries", "Work injuries"],
      },
      {
        name: "New Patients",
        icon: "clipboard",
        pages: ["First visit guide", "Insurance & payment", "Intake forms"],
      },
      {
        name: "Clinic & Areas",
        icon: "pin",
        pages: ["Meet the doctors", "Town pages", "Hours & parking"],
      },
    ],
  },
  results: {
    title: "How Chiropractic Clinics Grow After Their Site Launches",
    lead: "Steady progress as condition pages index, reviews build and exams book online.",
    cta: "Map Out My Clinic Launch",
    milestones: [
      {
        when: "Launch week",
        title: "Every New Patient Traced",
        text: "From launch day, your report ties each booking and call to its source page and search term.",
      },
      {
        when: "Month 1",
        title: "Condition Pages Get Crawled",
        text: "Back, neck and injury pages get picked up by Google and begin appearing in local results for the clinic.",
      },
      {
        when: "Months 2–3",
        title: "Climbing for Chiropractor Searches",
        text: "Town pages plus fresh reviews move the clinic up in nearby 'chiropractor near me' results.",
      },
      {
        when: "Sports season",
        title: "Ready When Weekend Athletes Get Hurt",
        text: "Sports injury pages and open slots catch the rise in strains and sprains.",
      },
    ],
    wins: [
      {
        icon: "calendar",
        title: "Exams Booked After Hours",
        text: "Patients reserve a first visit at night instead of waiting to call.",
      },
      {
        icon: "clipboard",
        title: "Quicker First-Visit Check-Ins",
        text: "Intake arrives before the exam, so table time goes to care.",
      },
      {
        icon: "trend",
        title: "Condition Pages That Keep Earning",
        text: "Each condition page brings in its own steady stream of searches.",
      },
      {
        icon: "heart",
        title: "A Clinic People Feel Safe Choosing",
        text: "Doctor bios, real photos and reviews calm first-time nerves.",
      },
    ],
    band: [
      {
        icon: "calendar",
        value: "New-Patient Visits",
        label: "First appointments booked straight from search",
      },
      {
        icon: "search",
        value: "Condition Searches",
        label: "Back, neck and injury pages people look for",
      },
      {
        icon: "award",
        value: "Clinic Credibility",
        label: "Doctor bios and reviews up front",
      },
      {
        icon: "heart",
        value: "A Welcoming Feel",
        label: "A calm site that eases first-time visitors",
      },
    ],
  },
  process: {
    title: "A 2–3 Week Plan to Launch Your Chiropractic Website",
    lead: "You see the homepage before we build, and every week has a clear goal.",
    items: [
      {
        when: "Week 1",
        h: "Clinic Intake and Free Mockup",
        p: "We list your techniques, conditions, insurance setup and booking tools, then design the homepage.",
      },
      {
        when: "Weeks 1–2",
        h: "Design and Condition Copy",
        p: "Writers draft condition and injury pages as the design takes shape around your clinic photos.",
      },
      {
        when: "Weeks 2–3",
        h: "Booking, Intake and SEO Wiring",
        p: "We wire up scheduling, intake links, redirects and clinic schema, then test every path.",
      },
      {
        when: "Launch",
        h: "Launch and Monthly Tuning",
        p: "On launch day booking tracking switches on, and any page that underperforms gets reworked.",
      },
    ],
  },
  compare: {
    title: "Custom Chiropractic Websites vs. DIY Builder Sites",
    lead: "Builders are quick to start but slow to bring in new patients.",
    otherLabel: "DIY builder site",
    rows: [
      {
        topic: "Condition pages",
        other: "A single services list naming conditions in bullets.",
        zonic:
          "A full page for each condition and injury, written for patients.",
      },
      {
        topic: "Personal injury patients",
        other: "No guidance for people hurt in a crash.",
        zonic:
          "Accident pages that explain the first visit, paperwork and next steps.",
      },
      {
        topic: "First-visit booking",
        other: "An email form and a wait for a callback.",
        zonic: "Live new-patient slots with intake sent automatically.",
      },
      {
        topic: "Doctor credibility",
        other: "Stock photos of strangers and a one-line bio.",
        zonic: "Real doctor bios, technique explanations and clinic photos.",
      },
      {
        topic: "Visibility across nearby towns",
        other: "One address in the footer and nothing else.",
        zonic: "Town pages, clinic schema and a tuned Google profile.",
      },
      {
        topic: "Clinic site maintenance",
        other: "Plugin updates, backups and fixes left to your front desk.",
        zonic: "Hosting, security and edits handled by our team.",
      },
    ],
  },
  reviews: {
    title: "Clinic Owners: See Our 5.0 Google Rating",
    lead: "Business owners we've worked with wrote these on our Google profile.",
  },
  pricing: {
    title: "Monthly Plans for a Growing Chiropractic Site",
    compareTitle: "Plan Features Side by Side for Clinics",
    addOnsTitle: "Add-Ons for Extra Clinic Pages and Tools",
    customTitle: "Several Clinic Locations to Cover?",
  },
  faq: {
    title: "Chiropractic Website Questions Doctors Ask Us",
    lead: "Pricing, timelines, booking, injury pages and protecting current rankings.",
    items: [
      {
        q: "How much does a chiropractic website cost?",
        a: "We start with a free call about the conditions you treat, your towns and booking needs, then give a single fixed quote that won't move before launch day. If the clinic also signs a qualifying monthly growth plan for chiropractors, our website offer covers the site build, so the spend goes toward reaching patients.",
      },
      {
        q: "What is the timeline for a chiropractor website build?",
        a: "Plan on 2–3 weeks. Your homepage mockup arrives free in the first week, writers and designers then build the condition and injury pages, and online booking, intake links and redirects get a full test run before launch. Multi-location clinics may need a few extra days for town pages.",
      },
      {
        q: "What pages should a chiropractic website have?",
        a: "Start with a homepage built around one booking button. Beyond that, each condition you treat deserves its own page, plus injury pages for car accidents and sports, a first-visit guide, insurance and payment details, doctor bios, patient reviews and a page per town in your draw area.",
      },
      {
        q: "Can patients book their first adjustment online?",
        a: "Yes. We link or embed the online scheduling your clinic software offers, or build a short request form that reaches the front desk at once. New patients pick a time, intake paperwork goes out automatically and every booking is tracked back to its page.",
      },
      {
        q: "Should my site have a personal injury page?",
        a: "If you see accident patients, yes. A dedicated page explains what to do after a crash, what the first visit covers and how claim paperwork works, without promising outcomes. It can also rank for searches like 'car accident chiropractor', which a general services page rarely does.",
      },
      {
        q: "Will a new website hurt my chiropractic SEO?",
        a: "Not if the switch is managed. Before launch we log each existing URL, keep the condition pages that already rank and send old addresses to their new pages with permanent redirects. Then we submit an updated sitemap and follow the clinic's positions and bookings each week.",
      },
      {
        q: "Can a DIY site builder work for a chiropractic clinic?",
        a: "A builder can work for a brand-new clinic, but it seldom ranks for condition or town searches. Custom chiropractic websites add a page per condition, injury pages, booking tied to your scheduling software and the speed builders often lack, which is what separates us from many chiropractic website companies.",
      },
      {
        q: "Can the site promote a new-patient offer?",
        a: "Yes. We can add a simple offer page and homepage banner for a first-visit special, written to follow advertising rules in your state and kept free of guarantees. You choose the details, and the same page can serve as a landing page for ads.",
      },
      {
        q: "Do chiropractors still need a website if we have a Google profile?",
        a: "Yes. Your Google Business Profile gets you seen on the map, but most patients tap through to the website before booking to check conditions treated, insurance and the doctor. The site is also where condition pages rank in regular results and where bookings get tracked.",
      },
    ],
  },
  consult: {
    title: "Get a Free Mockup of Your Clinic's New Homepage",
    lead: [
      "List the conditions you treat and the towns your patients come from, and our team will sketch your clinic homepage plus a page list at no charge. Rather talk it through? ",
      { href: "/contact-us", label: "Call or email us" },
      ", read ",
      { href: "/about", label: "our company story" },
      ", browse ",
      { href: "/services", label: "our service menu" },
      " or ask how we restore a clinic's ",
      {
        href: "/services/gbp-reinstatement-service",
        label: "suspended Google Business Profile",
      },
      ". Clinics that want stronger map rankings can also see our ",
      {
        href: "/services/local-seo-for-small-business",
        label: "small-business local SEO plans",
      },
      ".",
    ],
    points: [
      "Clinic homepage mockup",
      "Condition page list",
      "Booking and intake advice",
      "Live within 2–3 weeks",
    ],
    form: {
      formType: "chiropractor-website-design",
      badge: "Free chiropractic homepage mockup",
      title: "Request a Chiropractic Site Mockup",
      subtitle: "Free, with no strings attached.",
      submitText: "Book My Clinic Mockup",
      messageLabel: "Your clinic, website and main conditions",
      messagePlaceholder:
        "Clinic name, current website, conditions and injuries you treat, and the towns patients come from",
    },
  },
  banner: {
    title: "A Chiropractic Website That Books While You Adjust",
    lead: "Condition pages, first-visit booking and a call button patients can always reach.",
  },
};
