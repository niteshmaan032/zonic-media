/*
 * DELAWARE WEB DESIGN — geo page under the Delaware silo, built on the shared
 * location landing system (PhlLocationLanding / philaLanding.css) so it
 * renders identically to the other location pages. Aug 2026 SEO plan,
 * Content Gaps tab: captures ~1,200/mo of geo-scoped web design terms.
 */

import type { Metadata } from "next";
import Link from "next/link";
import PhlLocationLanding, {
  type PhlLandingData,
} from "@/app/components/PhlLocationLanding";
import {
  buildBreadcrumbJsonLd,
  buildLocalBusinessJsonLd,
  SITE_URL,
} from "@/shared/seoSchemas";
import { FaStar } from "react-icons/fa";
import {
  FiBarChart2,
  FiClock,
  FiCode,
  FiFileText,
  FiLayout,
  FiMapPin,
  FiPhoneCall,
  FiSearch,
  FiSmartphone,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { RiLineChartLine, RiSearchLine } from "react-icons/ri";

const PAGE_PATH = "/services/delaware/web-design";

export const metadata: Metadata = {
  title: { absolute: "Web Design Company in Delaware | Custom Websites" },
  description:
    "Delaware web design company in Dover: custom, SEO-ready websites for businesses in New Castle County, Dover and Sussex County, built to rank and convert.",
  keywords: [
    "web design delaware",
    "website design delaware",
    "web design company delaware",
    "custom web design packages in delaware",
    "web design dover de",
    "web design wilmington de",
    "delaware website designer",
    "web design near me",
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media — Marketing Agency for Small & Mid-Size Businesses",
      },
    ],
    title: "Web Design Company in Delaware | Custom Websites",
    description:
      "Custom website design and development in Delaware — fast, SEO-ready sites built by a Dover-based agency.",
    url: PAGE_PATH,
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Delaware Web Design", url: PAGE_PATH },
]);

const professionalServiceJsonLd = buildLocalBusinessJsonLd({
  pageUrl: PAGE_PATH,
  areaServed: { type: "State", name: "Delaware" },
});

// NOTE: never add aggregateRating to a Service schema — GSC flags it.
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web Design in Delaware",
  serviceType: "Web Design",
  url: `${SITE_URL}${PAGE_PATH}`,
  description:
    "Custom website design and development for Delaware businesses — conversion-focused, SEO-ready and Core Web Vitals compliant, from a Dover-headquartered agency.",
  provider: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Zonic Media",
    url: SITE_URL,
    telephone: "+1-302-726-9736",
  },
  areaServed: { "@type": "State", name: "Delaware" },
  audience: {
    "@type": "BusinessAudience",
    name: "Businesses across New Castle, Kent and Sussex County, Delaware",
  },
};

const DelWebFaqs = [
  {
    question: "How much does a website cost in Delaware?",
    answer:
      "A custom small-business website typically runs a few thousand dollars as a fixed-price project; brochure refreshes cost less, and builds with booking or e-commerce cost more. You get an exact quote after a free scoping call — and the price does not move once agreed. No hourly meters.",
  },
  {
    question: "Do you build SEO into the website or is that separate?",
    answer:
      "Built in. Keyword-mapped page structure, clean headings, structured data, fast load times and internal linking ship with every build — that is the point of hiring a combined Delaware SEO and web design agency. Ongoing rankings work (content, links, reviews) is an optional monthly program on top.",
  },
  {
    question: "Can you redesign my existing site without losing my rankings?",
    answer:
      "Yes — rank-safe redesigns are a specialty. We map every existing URL, preserve or 301 each one, and carry over the content that earns your current rankings before anything is switched off. Most businesses pay twice: once for a designer, then again for an SEO agency to undo the designer's structure. We remove that second bill.",
  },
  {
    question: "Which parts of Delaware do you build for?",
    answer:
      "The whole state: Wilmington, Newark, Middletown, Dover, Smyrna, Milford, Lewes, Rehoboth Beach and Seaford — plus Delaware companies serving markets over the line in Maryland, Pennsylvania and Delaware County, PA (different market from the state of Delaware, same team).",
  },
  {
    question: "How long does a Delaware website project take?",
    answer:
      "A typical service-business site ships in 4–8 weeks from kickoff, depending on content readiness and scope. Larger builds with booking, portals or e-commerce run longer. The scoping call gives you a real timeline before you commit.",
  },
  {
    question: "Do I own the website when it's done?",
    answer:
      "Completely. Domain, hosting, code, content, analytics — everything is in your accounts from day one, and every build includes training so your team can edit content without calling us for every comma.",
  },
  {
    question: "How much does a business website cost in Delaware?",
    answer:
      "Delaware businesses typically pay $2,500 to $8,000 for a custom site from a local agency, with e-commerce and larger service sites costing more. Zonic Media quotes a flat fee after a free consultation, includes local SEO setup for your Delaware service area, and offers a no-upfront-fee website for service businesses that pair it with a qualifying marketing plan.",
  },
];

const delWebFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}${PAGE_PATH}`,
  mainEntity: DelWebFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const data: PhlLandingData = {
  hero: {
    eyebrow: "Web Design Company in Delaware",
    h1Start: "Delaware Websites Built to",
    h1Highlight: "Rank and Convert",
    h1End: "From Day One",
    sub: (
      <>
        Zonic Media builds custom websites for Delaware businesses from our
        Dover headquarters — conversion-focused design, fast load times, and
        an SEO-ready structure from the first commit. Whether you need custom
        website design in New Castle County, a rebuild for a Dover trade
        business, or a booking site for a Sussex County beach-market company,
        the site ships ready to rank, not just ready to look at.
      </>
    ),
    media: {
      src: "/images/geo/delaware-web-design/delaware-web-design-studio.jpg",
      alt: "Web designer building a Delaware service business website in a sunlit studio",
    },
    floatA: {
      strong: "Core Web Vitals",
      text: "passed at launch, every build",
    },
    floatB: { strong: "SEO built in", text: "not bolted on later" },
    stats: [
      {
        icon: <FiTrendingUp aria-hidden="true" />,
        num: "100+",
        label: "Sites designed & launched",
      },
      {
        icon: <FaStar aria-hidden="true" />,
        num: "4.9/5",
        label: "Average client rating on Clutch",
      },
      {
        icon: <FiClock aria-hidden="true" />,
        num: "4–8 wks",
        label: "Typical project timeline",
      },
      {
        icon: <MdOutlineVerifiedUser aria-hidden="true" />,
        num: "100%",
        label: "You own everything we build",
      },
    ],
    proof: "by the Delaware businesses we build for",
    cta: "Get Your Free Website Review",
  },
  about: {
    eyebrow: "Why Delaware Builds Are Different",
    h2Start: "New Castle County Competes With Philadelphia.",
    h2Highlight: "Your Website Has To.",
    leads: [
      <>
        New Castle County businesses compete against the Philadelphia metro,
        and a slow template site loses that fight before it starts. Our
        custom website design services in Delaware start from your
        customer&apos;s search: what they type, what convinces them, and what
        makes them call. Design, copy and structure all serve that path.
      </>,
      <>
        Most businesses pay twice — once for a designer, then again for an
        SEO agency to undo the designer&apos;s structure. As a combined{" "}
        <Link href="/services/delaware/seo" className="phl-inline-link">
          Delaware SEO
        </Link>{" "}
        and web design agency we build the search foundation into the site
        itself: keyword-mapped pages, clean heading structure, structured
        data, internal links and Core Web Vitals — so the site starts earning
        rankings the week it launches.
      </>,
    ],
    checks: [
      "Custom design, no resold templates",
      "SEO architecture built in",
      "Core Web Vitals passed",
      "You own every asset",
    ],
    collageA: {
      src: "/images/geo/delaware-web-design/responsive-web-design-devices.jpg",
      alt: "Designer testing a responsive website on laptop, tablet, and phone",
    },
    collageB: {
      src: "/images/geo/delaware-web-design/website-wireframe-planning.jpg",
      alt: "Website planning session with paper wireframes and a laptop",
    },
    badgeText: "Delaware Web Design • Zonic Media •",
  },
  services: {
    eyebrow: "What We Build",
    h2: "Website Development Across the State, One Standard",
    cards: [
      {
        tone: "blue",
        icon: <FiLayout aria-hidden="true" />,
        title: "Business Websites & Rebuilds",
        desc: (
          <>
            Business sites, landing pages and full rebuilds — the same craft
            behind our{" "}
            <Link href="/services/web-design" className="phl-inline-link">
              web design service
            </Link>
            , scoped for Delaware markets from Wilmington to the beaches.
          </>
        ),
      },
      {
        tone: "gold",
        icon: <FiSmartphone aria-hidden="true" />,
        title: "Mobile-First, Conversion-First",
        desc: "Layouts that convert on the devices your customers actually use, with the call button where a thumb lands and forms short enough to finish.",
      },
      {
        tone: "blue",
        icon: <FiZap aria-hidden="true" />,
        title: "Speed & Core Web Vitals",
        desc: "Fast hosting setup with image, font and script optimization. Every build passes Core Web Vitals at launch — because rankings die on slow sites.",
      },
      {
        tone: "gold",
        icon: <FiSearch aria-hidden="true" />,
        title: "SEO-Ready Architecture",
        desc: (
          <>
            Keyword-mapped page structure, schema, and internal links from
            the first commit — pair the build with{" "}
            <Link href="/services/delaware/seo" className="phl-inline-link">
              Delaware SEO
            </Link>{" "}
            and the site becomes a lead source, not a brochure.
          </>
        ),
      },
      {
        tone: "blue",
        icon: <FiCode aria-hidden="true" />,
        title: "Booking, Portals & E-Commerce",
        desc: "Booking flows, client portals and stores when the business needs more than pages — built on the same fast, ownable foundation.",
      },
      {
        tone: "gold",
        icon: <RiLineChartLine aria-hidden="true" />,
        title: "Training & Handover",
        desc: "Accessible, AA-contrast design your team can keep using: every build includes training so you can edit content without calling us for every comma.",
      },
    ],
  },
  band: {
    eyebrow: "SEO + Web Design, One Team",
    h2: "A Delaware SEO and Web Design Agency in One",
    leads: [
      <>
        The agencies at the top of Delaware&apos;s search results all treat
        the website and the SEO as a single system. So do we. The build ships
        with the search foundation inside it, and the optional monthly
        program — content, links, reviews — compounds from there. One agency,
        one strategy, from{" "}
        <Link
          href="/services/wilmington/digital-marketing"
          className="phl-inline-link"
        >
          Wilmington and New Castle County
        </Link>{" "}
        to the Sussex beaches.
      </>,
      <>
        If your current site is the bottleneck, the free review will show it
        with numbers — speed, structure, conversion blockers — and exactly
        what a rebuild would change. No obligation, and the teardown is yours
        to keep either way.
      </>,
    ],
    cta: "Get Your Free Site Teardown",
    console: {
      title: "Site Performance Console",
      tag: "Typical launch",
      metrics: [
        { strong: "95+", label: "PageSpeed score" },
        { strong: "<2s", label: "Mobile load time" },
        { strong: "+63%", label: "Form conversions" },
      ],
      barsLabel: "Build quality signals",
      bars: [
        { label: "Core Web Vitals", val: 96, tone: "blue" },
        { label: "Mobile usability", val: 98, tone: "gold" },
        { label: "SEO architecture", val: 94, tone: "blue" },
        { label: "Accessibility (AA)", val: 92, tone: "gold" },
      ],
      pills: [
        { icon: "pin", text: "Built in Dover, DE" },
        { icon: "star", text: "5.0 on Clutch" },
        { icon: "pin", text: "Statewide clients" },
      ],
    },
  },
  process: {
    eyebrow: "How It Works",
    h2: "From Scoping Call to Launch in Four Steps",
    steps: [
      {
        tag: "Week 1",
        title: "Free Website & SEO Review",
        desc: "Send us your current site and we return a teardown — speed, structure, conversion blockers and what a rebuild would change — with a fixed-price quote.",
      },
      {
        tag: "Weeks 2–3",
        title: "Design & Content Mapping",
        desc: "Wireframes and design direction built around your customer's search path, with every page keyword-mapped before a pixel is polished.",
      },
      {
        tag: "Weeks 4–7",
        title: "Build, Optimize, Test",
        desc: "Development on a fast, ownable stack; images, fonts and scripts optimized; Core Web Vitals and accessibility checked before you ever see a staging link.",
        chips: ["Fast stack", "Schema built in", "AA contrast"],
      },
      {
        tag: "Launch +",
        title: "Rank-Safe Launch & Training",
        desc: "Every old URL preserved or 301'd, analytics wired, and your team trained. Optional monthly SEO takes it from launched to ranking.",
        chips: ["301 map", "Analytics wired", "Team training"],
      },
    ],
    visualTitle: "What a typical Delaware build scores at launch",
    visualBars: [
      { label: "PageSpeed (mobile)", val: 95 },
      { label: "Core Web Vitals", val: 96 },
      { label: "SEO readiness", val: 94 },
    ],
    ctaPrimary: "Start With the Review",
  },
  results: {
    eyebrow: "Real Results",
    h2: "What Happens When the Site Stops Being the Bottleneck",
    lead: "Different counties, different industries — the same build standard, applied every time.",
    cards: [
      {
        icon: <FiPhoneCall aria-hidden="true" />,
        industry: "Trade business · Kent County",
        metric: "+63%",
        label: "Form conversions after rebuild",
        desc: (
          <>
            Same traffic, same rankings — a faster, conversion-first rebuild
            turned the visits the business already had into calls, before the{" "}
            <Link href="/services/delaware/seo" className="phl-inline-link">
              SEO program
            </Link>{" "}
            multiplied the traffic itself.
          </>
        ),
      },
      {
        icon: <RiSearchLine aria-hidden="true" />,
        industry: "Professional practice · Wilmington",
        metric: "95+",
        label: "Mobile PageSpeed at launch",
        desc: "From a 40-something template score to a 95+ custom build — and the rankings the practice had been paying an SEO vendor to chase followed the speed.",
      },
      {
        icon: <FiMapPin aria-hidden="true" />,
        industry: "Beach-market business · Sussex County",
        metric: "2×",
        label: "Bookings in the first season",
        desc: "A booking flow built for the summer surge, launched ahead of the season — with the seasonal content strategy to match.",
      },
    ],
  },
  showcase: {
    image: {
      src: "/images/geo/delaware-web-design/delaware-website-portfolio-team.jpg",
      alt: "Web design team reviewing local business websites and printed page concepts",
    },
    floats: [
      { num: "95+", label: "Average launch PageSpeed" },
      { num: "4–8", label: "Weeks from kickoff to launch" },
      { num: "100%", label: "Client-owned assets" },
    ],
  },
  compare: {
    h2: "Zonic vs. a Typical Web Design Shop",
    lead: "The difference is what happens after the design looks good — because a website's job is to rank and convert, not sit pretty.",
    themTitle: "Typical Design Shop",
    themSub: "Why most new sites never earn their cost back",
    them: [
      "Template resold at custom prices",
      "Design first, search structure never",
      "Slow page loads that bleed rankings and ads budget",
      "Launches that break every old URL",
      "You call the shop for every content change",
    ],
    usTitle: "Web Design with Zonic Media",
    usSub: "Built to rank, built to convert, built to hand over",
    us: [
      "Custom design around your customer's search path",
      "Keyword-mapped pages and schema from the first commit",
      "Core Web Vitals passed at launch, verified",
      "Rank-safe launches — every URL preserved or 301'd",
      "Training included; your team edits without us",
    ],
    scoreTitle: "Build Scorecard",
    scoreSub: "A typical rebuild, before vs. after",
    scoreRows: [
      { label: "Mobile PageSpeed", before: 43, after: 95 },
      { label: "Core Web Vitals", before: 31, after: 96 },
      { label: "SEO readiness", before: 38, after: 94 },
      { label: "Form conversion rate", before: 35, after: 78 },
    ],
  },
  why: {
    h2: "A Build Partner, Not a Handoff and an Invoice",
    lead: "The design is the output. The inputs are strategy, structure, and accountability — and that is what you are actually buying.",
    cards: [
      {
        icon: <RiSearchLine aria-hidden="true" />,
        title: "Search is in the Blueprint",
        desc: (
          <>
            We are an SEO company that builds websites, not a design shop that
            mentions SEO. Everything the{" "}
            <Link href="/" className="phl-inline-link">
              Zonic Media
            </Link>{" "}
            team knows about rankings goes into the architecture.
          </>
        ),
      },
      {
        icon: <FiZap aria-hidden="true" />,
        title: "Fixed Price, Real Timeline",
        desc: "Quoted after a free scoping call, the price does not move once agreed. A typical service-business site ships in 4–8 weeks, and you know the date before you commit.",
      },
      {
        icon: <FiBarChart2 aria-hidden="true" />,
        title: "You Own Everything",
        desc: "Domain, hosting, code, content, analytics — in your accounts from day one. If we ever part ways, you lose nothing but our company.",
      },
    ],
    banner: {
      eyebrow: "Free Website & SEO Review",
      h3: "See What a Delaware Build Would Change",
      p: "Send us your current site and we will return a teardown — speed, structure, conversion blockers — with a fixed-price quote for the rebuild. Free, and yours to keep either way.",
      checks: [
        "Speed & Core Web Vitals scores",
        "Structure & SEO gaps",
        "Conversion blockers found",
        "Fixed-price rebuild quote",
      ],
      cta: "Claim Your Free Review",
      audit: {
        title: "Site Health Score",
        tag: "Typical launch",
        score: "95",
        grade: "Excellent",
        gradeDesc:
          "Where our Delaware builds land at launch — before the monthly SEO program compounds it further",
        rows: [
          { label: "Core Web Vitals", flag: "Passed" },
          { label: "Mobile usability", flag: "A+ grade" },
          { label: "SEO architecture", flag: "Keyword-mapped" },
        ],
      },
    },
  },
  marquee: [
    "Delaware Web Design",
    "Wilmington",
    "Newark",
    "Dover",
    "Middletown",
    "Milford",
    "Lewes",
    "Rehoboth Beach",
    "SEO-Ready Builds",
  ],
  engine: {
    eyebrow: "Everything Working Together",
    h2: "Six Build Signals, One Converting Website",
    lead: (
      <>
        A website that earns its cost back is not one decision, it is six
        working at once. Skip any of them and the leads notice. We build all
        six into every Delaware project — and when the site is live, our{" "}
        <Link href="/services/delaware/seo" className="phl-inline-link">
          Delaware SEO program
        </Link>{" "}
        turns it into a compounding lead source.
      </>
    ),
    coreStrong: "Your Delaware website",
    coreSub: "Fast · ranking · converting",
    coreCta: "Get Your Free Review",
    nodes: [
      {
        icon: <FiLayout aria-hidden="true" />,
        title: "Custom Design",
        outcome: "Trust at a glance",
        tone: "blue",
        left: "50%",
        top: "7%",
      },
      {
        icon: <FiZap aria-hidden="true" />,
        title: "Speed",
        outcome: "Vitals passed",
        tone: "gold",
        left: "82%",
        top: "28.5%",
      },
      {
        icon: <FiSearch aria-hidden="true" />,
        title: "SEO Structure",
        outcome: "Ready to rank",
        tone: "blue",
        left: "82%",
        top: "71.5%",
      },
      {
        icon: <FiSmartphone aria-hidden="true" />,
        title: "Mobile-First",
        outcome: "Converts on phones",
        tone: "gold",
        left: "50%",
        top: "93%",
      },
      {
        icon: <FiFileText aria-hidden="true" />,
        title: "Content",
        outcome: "Answers that sell",
        tone: "blue",
        left: "18%",
        top: "71.5%",
      },
      {
        icon: <RiLineChartLine aria-hidden="true" />,
        title: "Analytics",
        outcome: "Proof from day one",
        tone: "gold",
        left: "18%",
        top: "28.5%",
      },
    ],
    chipsLabel: "Building Delaware websites for",
    chips: [
      "Home Services",
      "Healthcare & Dental",
      "Legal & Financial",
      "Restaurants & Cafés",
      "Salons & Wellness",
      "Auto & Repair",
      "Retail Storefronts",
      "Trades & Contractors",
    ],
  },
  faqs: {
    eyebrow: "FAQs",
    h2: "Straight Answers About Web Design in Delaware",
    lead: "Pricing, timelines, ownership, and what a rank-safe redesign actually involves. If your question is not here, send it through the form — a strategist answers, not a sales script.",
    cta: "Ask About Your Project",
    items: DelWebFaqs,
  },
  grow: {
    eyebrow: "Pair It With",
    h2: "The Site is the Foundation. Here is What Builds On It.",
    lead: (
      <>
        A launched site is step one — the{" "}
        <Link
          href="/services/delaware/digital-marketing"
          className="phl-inline-link"
        >
          Delaware marketing engine
        </Link>{" "}
        turns it into a lead source.
      </>
    ),
    cards: [
      {
        href: "/services/delaware/seo",
        icon: <FiSearch aria-hidden="true" />,
        title: "SEO Company in Delaware",
        desc: "The rankings program that turns your new site into a lead source.",
        cta: "See Delaware SEO",
      },
      {
        href: "/services/wilmington/digital-marketing",
        icon: <FiMapPin aria-hidden="true" />,
        title: "Wilmington Digital Marketing",
        desc: "City-level marketing for New Castle County's biggest market.",
        cta: "See Wilmington",
      },
      {
        href: "/services/web-design",
        icon: <FiLayout aria-hidden="true" />,
        title: "Web Design & Development",
        desc: "Our full web design service — process, stack and portfolio.",
        cta: "See the full service",
      },
    ],
  },
  form: {
    eyebrow: "Get Started",
    h2: "Claim Your Free Website & SEO Review",
    lead: "Send us your current site (or your plans for a new one) and we will return a teardown with a fixed-price quote — speed, structure, conversion blockers, and what a Delaware build would change.",
    formType: "delaware-web-design",
    badge: "Free Review",
    title: "Get Your Free Website Review",
    subtitle:
      "No contracts, no pressure — just a clear picture of what your site does well and what a rebuild would change.",
    submitText: "Send My Free Review",
    messageLabel: "Tell us about your project",
    messagePlaceholder:
      "Your business, your current website (if any), and what the new site needs to do",
    defaultServices: ["Web Design"],
  },
  relatedCurrent: PAGE_PATH,
};

function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(delWebFaqJsonLd) }}
      />
      <PhlLocationLanding data={data} />
    </>
  );
}

export default Page;
