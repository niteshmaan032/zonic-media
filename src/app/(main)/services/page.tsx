import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Footer from "@/app/components/Footer";
import LeadContactForm from "@/app/components/LeadContactForm";
import "@/app/style/services-page.css";
import { SITE_CONTACT } from "@/shared/siteConfig";
import {
  FaArrowRight,
  FaBullhorn,
  FaChartLine,
  FaMagnifyingGlass,
  FaRocket,
  FaStar,
  FaCircleCheck,
  FaStore,
  FaBuilding,
  FaHouse,
  FaBriefcase,
  FaCheck,
  FaLocationDot,
  FaPhoneVolume,
  FaClipboardCheck,
  FaHandshake,
  FaLaptopCode,
  FaXmark,
} from "react-icons/fa6";

export const metadata: Metadata = {
  title:
    "Digital Marketing Services | SEO, PPC & Web Design | Zonic Media",
  description:
    "Grow online with Zonic Media's digital marketing services, including web design, local SEO, Google Ads, GMB optimization, branding, and custom software.",
  alternates: { canonical: "/services" },
  openGraph: {
    title:
      "Digital Marketing Services | SEO, PPC & Web Design | Zonic Media",
    description:
      "Grow online with Zonic Media's full-service digital marketing solutions for SEO, PPC, web design, GMB optimization, branding, and software.",
    url: "/services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Services | SEO, PPC & Web Design | Zonic Media",
    description:
      "Grow online with Zonic Media's digital marketing services, including web design, local SEO, Google Ads, GMB optimization, branding, and custom software.",
  },
};

function BtnArrow() {
  return (
    <span className="buttons__icon-wrapper">
      <svg
        viewBox="0 0 14 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="buttons__icon-svg"
        width="8"
      >
        <path
          d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
          fill="currentColor"
        />
      </svg>
      <svg
        viewBox="0 0 14 15"
        fill="none"
        width="8"
        xmlns="http://www.w3.org/2000/svg"
        className="buttons__icon-svg buttons__icon-svg--copy"
      >
        <path
          d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}

/* ── DATA ──────────────────────────────────────────────────── */

const heroStats = [
  { value: "200%", label: "Average Growth Rate" },
  { value: "100+", label: "Brands Scaled" },
  { value: "50+", label: "Projects Delivered" },
  { value: "4.9★", label: "Client Rating" },
];

const services = [
  {
    img: "/images/new-home/graphic-design.png",
    cardClass: "st2-card-design",
    title: "Web Design & Development",
    desc: "High-converting, mobile-first websites engineered for speed, SEO performance, and user experience. Every page is built to turn visitors into paying customers.",
    features: [
      "Landing Pages & Business Sites",
      "WordPress & Custom CMS",
      "Core Web Vitals Optimized",
    ],
    href: "/services/web-design",
  },
  {
    img: "/images/new-home/ui.png",
    cardClass: "st2-card-ui",
    title: "UI/UX Design",
    desc: "Intuitive, conversion-focused interfaces rooted in user psychology. We create design systems that guide users toward meaningful actions at every step.",
    features: [
      "User Research & Wireframing",
      "Design Systems & Prototypes",
      "Accessibility-First Approach",
    ],
    href: "/services",
  },
  {
    img: "/images/new-home/branding.png",
    cardClass: "st2-card-brand",
    title: "Branding & Identity",
    desc: "Strategic brand identities that build instant recognition and long-term trust. Logo, visual language, and messaging — crafted to differentiate and resonate.",
    features: [
      "Logo & Visual Identity",
      "Brand Guidelines & Style Guides",
      "Messaging & Positioning",
    ],
    href: "/services",
  },
  {
    img: "/images/new-home/search-engine-optimization.png",
    cardClass: "st2-card-seo",
    title: "Local SEO & GMB Optimization",
    desc: "Rank in the Google Map Pack and dominate local search. We build sustainable organic visibility that generates qualified leads month after month.",
    features: [
      "Google Business Profile Optimization",
      "Local Keyword Strategy",
      "Citation Building & Reviews",
    ],
    href: "/services/local-seo-for-home-services",
  },
  {
    img: "/images/new-home/campaign.png",
    cardClass: "st2-card-marketing",
    title: "Google Ads & PPC",
    desc: "High-ROAS campaigns engineered to attract high-intent buyers. Every dollar of ad spend is optimized for maximum conversions and measurable returns.",
    features: [
      "Strategic Keyword Targeting",
      "A/B Tested Landing Pages",
      "Full Conversion Tracking",
    ],
    href: "/services/google-ads",
  },
  {
    img: "/images/new-home/app-development.png",
    cardClass: "st2-card-software",
    title: "Custom Software Solutions",
    desc: "Scalable, purpose-built web applications and automation tools designed to solve your specific business challenges and compound efficiency over time.",
    features: [
      "Web Apps & Client Portals",
      "API Integrations & Automation",
      "Workflow & Process Tools",
    ],
    href: "/services",
  },
];

const whyPoints = [
  {
    icon: <FaClipboardCheck />,
    title: "Strategy Before Execution",
    desc: "We audit your goals, market, and audience before writing a line of code. Every decision is strategic — never guesswork.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Built for Long-Term Scale",
    desc: "Systems engineered to grow with your business. We build for the next three years, not just for the launch day.",
  },
  {
    icon: <FaChartLine />,
    title: "Conversion-Focused Design",
    desc: "Every layout decision is grounded in user psychology and data — maximizing engagement, trust, and lead generation.",
  },
  {
    icon: <FaHandshake />,
    title: "Radical Transparency",
    desc: "Clear milestones, open dashboards, and proactive reporting — you always know exactly where your results stand.",
  },
  {
    icon: <FaRocket />,
    title: "Results After Launch",
    desc: "Ongoing optimization, strategy reviews, and growth reporting keep results compounding well beyond the launch date.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Discover",
    desc: "Deep research into your business, competitors, and audience. We identify the fastest growth levers before touching a keyboard.",
  },
  {
    num: "02",
    title: "Strategize",
    desc: "A clear roadmap — timelines, priorities, channel selection, and measurable milestones so everyone is aligned from day one.",
  },
  {
    num: "03",
    title: "Design",
    desc: "Pixel-perfect, conversion-optimized designs built around your brand and user behavior patterns at every touchpoint.",
  },
  {
    num: "04",
    title: "Build & Launch",
    desc: "Clean code, full QA, SEO setup, and a seamless go-live experience — engineered to perform flawlessly from the first visit.",
  },
  {
    num: "05",
    title: "Optimize & Grow",
    desc: "Post-launch analytics, A/B testing, SEO reporting, and continuous iteration keep your results compounding over time.",
  },
];

const featuredServices = [
  {
    badge: "Web Design & Development",
    heading: "Websites Built to Win — Not Just to Look Good",
    body: "Most websites look decent but fail to convert. We engineer digital experiences that are fast, mobile-first, SEO-optimized, and designed around the psychology of your target customer — so every visit has a higher chance of turning into a lead or sale.",
    points: [
      "Performance-first architecture with sub-2s load times",
      "Conversion-focused layouts based on user intent data",
      "Technical SEO foundation built in from day one",
      "Full mobile responsiveness and accessibility compliance",
    ],
    img: "/images/services/ChatGPT Image May 21, 2026, 01_17_42 PM.png",
    href: "/services/web-design",
    cta: "Start Your Website Project",
    reverse: false,
  },
  {
    badge: "Google Business Profile Optimization",
    heading: "Turn Local Searches Into Calls, Directions, and Bookings",
    body: "Your Google Business Profile is often the first place customers decide whether to trust you. We optimize categories, services, photos, posts, reviews, and conversion signals so your listing performs like a real acquisition channel.",
    points: [
      "Complete GMB profile setup, cleanup, and optimization",
      "Category, service, and keyword alignment for local intent",
      "Review and reputation strategy that builds trust at scale",
      "Ongoing profile updates that keep your listing active",
    ],
    img: "/images/services/ChatGPT Image May 21, 2026, 01_03_49 PM.png",
    href: "/services/gmb-optimization",
    cta: "Optimize My GMB Profile",
    reverse: true,
  },
  {
    badge: "Local SEO & Google Business Profile",
    heading: "Dominate Local Search and the Google Map Pack",
    body: "When someone in your city searches for your service, your business needs to appear at the top — and we make that happen. Our local SEO strategy covers GMB optimization, citation building, on-page content, and a review generation system that builds trust at scale.",
    points: [
      "Complete Google Business Profile setup and optimization",
      "Map Pack ranking through citation authority and proximity signals",
      "On-page local SEO for every key service and location page",
      "Review generation system for consistent 5-star credibility",
    ],
    img: "/images/services/ChatGPT Image May 21, 2026, 01_14_07 PM.png",
    href: "/services/local-seo-for-home-services",
    cta: "Get Found Locally",
    reverse: false,
  },
  {
    badge: "Google Ads & PPC Management",
    heading: "Ad Campaigns That Generate Revenue, Not Just Clicks",
    body: "Clicks are worthless without conversions. Our PPC team builds tightly structured Google Ads campaigns targeting high-intent buyers, with fully optimized landing pages, smart bidding strategies, and transparent reporting that shows exactly what your ad spend is generating.",
    points: [
      "Strategic campaign architecture for maximum ROAS",
      "Intent-matched landing pages built for conversion",
      "Negative keyword management to eliminate wasted spend",
      "Full attribution tracking with revenue-level reporting",
    ],
    img: "/images/services/ChatGPT Image May 21, 2026, 01_15_57 PM.png",
    href: "/services/google-ads",
    cta: "Launch a High-ROAS Campaign",
    reverse: true,
  },
];

const industries = [
  {
    icon: <FaRocket />,
    title: "Startups",
    desc: "Launch fast with product pages, investor-ready branding, and acquisition systems built to validate and scale quickly.",
  },
  {
    icon: <FaBriefcase />,
    title: "Professional Services",
    desc: "Law firms, consultants, accountants — authority-first presences that convert high-intent visitors into booked clients.",
  },
  {
    icon: <FaStore />,
    title: "E-commerce",
    desc: "Conversion-focused storefronts, paid traffic funnels, and SEO foundations that increase AOV and repeat purchases.",
  },
  {
    icon: <FaHouse />,
    title: "Real Estate",
    desc: "Local SEO, listing funnels, and lead capture systems that help agents and brokerages attract qualified buyers.",
  },
  {
    icon: <FaBuilding />,
    title: "Local Businesses",
    desc: "Map Pack visibility, review strategy, and service pages that turn nearby searches into booked calls and appointments.",
  },
  {
    icon: <FaStar />,
    title: "Healthcare & Wellness",
    desc: "Digital strategies for clinics, chiropractors, dentists, and wellness brands seeking strong local visibility.",
  },
  {
    icon: <FaBullhorn />,
    title: "Marketing Agencies",
    desc: "White-label design, development support, and reliable delivery capacity for agencies that need a trusted partner.",
  },
  {
    icon: <FaChartLine />,
    title: "SaaS & Tech",
    desc: "Product-led landing pages, onboarding flows, and feature positioning that drive signups and support retention.",
  },
];

const withoutPoints = [
  "Campaigns running in separate lanes with no unified strategy",
  "Reports that show surface-level numbers — not real revenue impact",
  "Landing pages leaking leads and wasting ad spend every day",
  "No clear visibility into what is actually generating growth",
  "New competitors outranking you while your digital presence stalls",
];

const withPoints = [
  "SEO, ads, content, and web design all working as one growth system",
  "Monthly dashboards that connect activity directly to revenue outcomes",
  "Conversion-optimized pages that turn traffic into qualified leads",
  "Clear priorities and full reporting so you always know what to invest in next",
  "Sustained competitive advantage built on compounding organic and paid growth",
];

const auditIncludes = [
  {
    icon: <FaMagnifyingGlass />,
    title: "Website & SEO Audit",
    desc: "We review your site speed, structure, and current search rankings to find what is holding you back.",
  },
  {
    icon: <FaChartLine />,
    title: "Competitor Analysis",
    desc: "See exactly where your top competitors are winning online and where the gaps are for you to take market share.",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Growth Opportunity Map",
    desc: "A prioritized list of the highest-impact actions to take across SEO, ads, and your website — specific to your business.",
  },
  {
    icon: <FaRocket />,
    title: "Custom Recommendation Plan",
    desc: "A realistic, jargon-free plan aligned to your goals and budget — with clear next steps you can act on immediately.",
  },
];

const benefits = [
  {
    value: "3–5×",
    label: "More Qualified Leads",
    desc: "Businesses working with us see a 3–5× increase in qualified inbound leads within 90 days of launch.",
  },
  {
    value: "Top 3",
    label: "Local Search Rankings",
    desc: "Our local SEO clients consistently reach the top 3 results in Google Maps for their primary keywords.",
  },
  {
    value: "40%+",
    label: "Conversion Rate Lift",
    desc: "Our conversion-focused design and CRO work delivers measurable gains in lead-to-visitor ratios post-launch.",
  },
  {
    value: "90%",
    label: "Client Retention Rate",
    desc: "Nine out of ten clients stay with us beyond the initial engagement — because the results keep compounding.",
  },
];

const faqs = [
  {
    q: "What types of businesses does Zonic Media work with?",
    a: "We work with a wide range of businesses — from local service providers and professional firms to e-commerce stores, SaaS companies, and digital agencies. Our strategies are fully tailored to your specific industry, market, and growth goals.",
  },
  {
    q: "How long does it take to see results from SEO?",
    a: "Local SEO typically shows meaningful ranking improvements within 60–90 days. For competitive national keywords, expect 3–6 months. We share transparent monthly reporting so you always know exactly where you stand and what is driving progress.",
  },
  {
    q: "Do you offer one-time projects or ongoing retainers?",
    a: "Both. We offer one-time engagements for web design, branding, and development projects, as well as ongoing monthly retainers for SEO, Google Ads, and content marketing. Most clients start with a project and transition into a growth retainer.",
  },
  {
    q: "Can you handle both design and development for our website?",
    a: "Yes — design, development, content, SEO setup, and launch are all handled under one roof. You get a single accountable team instead of coordinating between multiple vendors, which keeps timelines tight and quality consistent.",
  },
  {
    q: "What makes your Google Ads management different?",
    a: "We focus on revenue, not vanity metrics. Every campaign is built with intent-matched landing pages, proper conversion tracking, and negative keyword management to reduce wasted spend. You get full transparency with reporting that shows actual business outcomes — not just click data.",
  },
  {
    q: "Do you provide reports and updates throughout the project?",
    a: "Absolutely. We provide regular progress updates, milestone reports, and — for ongoing retainers — monthly performance dashboards with clear data on rankings, traffic, conversions, and ad spend efficiency. You will never be left in the dark.",
  },
  {
    q: "How do we get started with Zonic Media?",
    a: "Book a free strategy call. We will audit your current digital presence, identify your biggest growth opportunities, and recommend a plan aligned to your goals and budget — with no pressure and no generic pitch decks.",
  },
];

/* ── PAGE ──────────────────────────────────────────────────── */

const contactFormHead = {
  leadFormTitle: "Ready to Grow Your Business?",
  leadCallText: (
    <>
      Let&apos;s build a digital marketing strategy that drives more leads,
      stronger visibility, and long-term business growth.
      <br />{" "}
      <a href={SITE_CONTACT.phoneHref} className="lead-call-link">
        Call Now:{SITE_CONTACT.phoneDisplay}
      </a>
    </>
  ),
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function ServicesPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════
          SECTION 1 — HERO  (split two-column layout)
      ══════════════════════════════════════════════════════ */}
      <script
        id="services-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />
      <section className="st2-hero">
        <div className="st2-hero-grid">
          {/* Left: copy */}
          <div className="st2-hero-left">
            <p className="st2-hero-overline">Full-Service Digital Agency</p>
            <h1 className="st2-hero-h1">
              Digital Services
              <br />
              That <span className="st2-hero-accent">Generate</span>
              {" "}Real Growth
            </h1>
            <p className="st2-hero-p">
              From conversion-focused web design and local SEO to high-ROAS
              Google Ads and custom software — we deliver full-service digital
              solutions engineered for measurable, scalable results.
            </p>
            <div className="st2-hero-ctas">
              <Link href="/contact-us" className="buttons st2-btn-dark">
                Get Free Consultation <BtnArrow />
              </Link>
              <Link href={SITE_CONTACT.phoneHref} className="buttons st2-btn-ghost">
                Call {SITE_CONTACT.phoneDisplay} <BtnArrow />
              </Link>
            </div>
            <div className="st2-hero-trust">
              <span className="st2-hero-trust-item">
                <FaCheck size={11} /> 100+ Brands Scaled
              </span>
              <span className="st2-hero-trust-item">
                <FaCheck size={11} /> 4.9★ Average Rating
              </span>
              <span className="st2-hero-trust-item">
                <FaCheck size={11} /> No Long-Term Lock-In
              </span>
            </div>
          </div>

          {/* Right: image + floating stat card */}
          <div className="st2-hero-right">
            <div className="st2-hero-img-wrap">
              <Image
                src="/images/new-home/ChatGPT Image May 4, 2026, 04_33_14 PM.png"
                fill
                alt="Zonic Media digital agency — web design and digital marketing services"
                sizes="(max-width: 991px) 100vw, 45vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
                priority
              />
            </div>
            <div className="st2-hero-stat-card">
              <p>200%</p>
              <p>Average client growth rate</p>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="st2-hero-statsbar">
          {heroStats.map((s, i) => (
            <div key={i} className="st2-hero-statsbar-item">
              <p className="st2-hero-statsbar-val">{s.value}</p>
              <p className="st2-hero-statsbar-lbl">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 2 — SERVICES OVERVIEW
      ══════════════════════════════════════════════════════ */}
      <section className="st2-section st2-services-section" id="st2-services">
        <div className="st2-container">
          <div className="st2-section-header">
            <p className="st2-label">Our Services</p>
            <h2 className="st2-section-heading">
              Everything Your Business Needs to Grow Online
            </h2>
            <p className="st2-section-sub">
              Six core disciplines, executed at the highest level — so every
              part of your digital presence works together to generate
              visibility, trust, and revenue.
            </p>
          </div>

          <div className="st2-services-grid">
            {services.map((svc, i) => (
              <div key={i} className={`st2-service-card ${svc.cardClass}`}>
                <div className="st2-service-card-top">
                  <div className="st2-service-icon">
                    <Image
                      src={svc.img}
                      alt={svc.title}
                      width={80}
                      height={80}
                      className="st2-service-icon-img"
                    />
                  </div>
                  <h3 className="st2-service-title">{svc.title}</h3>
                  <p className="st2-service-desc">{svc.desc}</p>
                  <ul className="st2-service-features">
                    {svc.features.map((f, j) => (
                      <li key={j}>
                        <FaCheck size={10} /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="st2-service-card-bottom">
                  <Link href={svc.href} className="st2-learn-more">
                    Learn more <FaArrowRight size={11} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="st2-cta-center">
            <Link href="/contact-us" className="buttons st2-btn-primary">
              Start Your Project <BtnArrow />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 3 — WHY CHOOSE US
          Layout: header row → full-width image → cards grid
      ══════════════════════════════════════════════════════ */}
      <section className="st2-section st2-why-section">
        <div className="st2-container">
          {/* Header row: left heading, right subtext */}
          <div className="st2-why-header">
            <div className="st2-why-header-left">
              <p className="st2-label">Why Zonic Media</p>
              <h2 className="st2-why-heading">
                The Growth Partner Built
                <br />
                for Measurable Outcomes
              </h2>
            </div>
            <p className="st2-why-header-sub">
              We combine deep strategy, premium design, and performance-first
              execution to deliver results that matter to your bottom line —
              not just your portfolio. Every decision is in service of your
              measurable business goals.
            </p>
          </div>

          {/* Full-width image */}
          <div className="st2-why-img-container">
            <Image
              src="/images/new-home/ChatGPT Image May 5, 2026, 04_29_24 PM.png"
              fill
              alt="Zonic Media team building client growth strategy"
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
            {/* Stat pills overlaid at bottom-left of image */}
            <div className="st2-why-img-stats">
              <div className="st2-why-stat-pill">
                <strong>90%</strong>
                <span>Client Retention</span>
              </div>
              <div className="st2-why-stat-pill">
                <strong>4.9★</strong>
                <span>Average Rating</span>
              </div>
              <div className="st2-why-stat-pill">
                <strong>100+</strong>
                <span>Brands Grown</span>
              </div>
            </div>
          </div>

          {/* Cards grid below the image */}
          <div className="st2-why-cards">
            {whyPoints.map((pt, i) => (
              <div key={i} className="st2-why-card">
                <div className="st2-why-card-icon">{pt.icon}</div>
                <p className="st2-why-card-title">{pt.title}</p>
                <p className="st2-why-card-desc">{pt.desc}</p>
              </div>
            ))}
          </div>

          <div className="st2-cta-center">
            <Link href="/contact-us" className="buttons st2-btn-dark">
              Talk to Our Experts <BtnArrow />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 4 — OUR PROCESS
      ══════════════════════════════════════════════════════ */}
      <section className="st2-process-section">
        <div className="st2-container">
          <div className="st2-process-head">
            <div className="st2-process-head-left">
              <p className="st2-label st2-label-accent">5-Step Process</p>
              <h2 className="st2-process-heading">
                Effortless Process,
                <br />
                Exceptional Results
              </h2>
            </div>
            <div className="st2-process-rule" />
          </div>

          <div className="st2-process-grid">
            {processSteps.map((step, i) => (
              <div key={i} className="st2-process-card">
                <p className="st2-process-num">{step.num}</p>
                <h3 className="st2-process-title">{step.title}</h3>
                <p className="st2-process-desc">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="st2-process-footer">
            <div className="st2-proof">
              <div className="st2-avatars">
                <span>Z</span>
                <span>O</span>
                <span>N</span>
                <span>I</span>
                <span>C</span>
              </div>
              <p>Trusted by 100+ businesses that choose growth</p>
            </div>
            <Link href="/contact-us" className="buttons st2-btn-yellow">
              Start Now <BtnArrow />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 5 — FEATURED SERVICE DETAILS
      ══════════════════════════════════════════════════════ */}
      <section className="st2-section st2-featured-section">
        <div className="st2-container">
          <div className="st2-section-header">
            <p className="st2-label">What We Build</p>
            <h2 className="st2-section-heading">
              Deep Expertise Across Core Digital Disciplines
            </h2>
            <p className="st2-section-sub">
              Each service is built around a single objective: turning your
              digital investment into predictable, measurable revenue growth.
            </p>
          </div>

          {featuredServices.map((svc, i) => (
            <div
              key={i}
              className={`st2-featured-block${svc.reverse ? " st2-featured-reverse" : ""}`}
            >
              <div className="st2-featured-img-wrap">
                <Image
                  src={svc.img}
                  fill
                  alt={svc.heading}
                  sizes="(max-width: 991px) 100vw, 48vw"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
              <div className="st2-featured-content">
                <span className="st2-featured-badge">{svc.badge}</span>
                <h3 className="st2-featured-heading">{svc.heading}</h3>
                <p className="st2-featured-body">{svc.body}</p>
                <ul className="st2-featured-points">
                  {svc.points.map((pt, j) => (
                    <li key={j}>
                      <FaCircleCheck size={14} /> {pt}
                    </li>
                  ))}
                </ul>
                <Link href={svc.href} className="buttons st2-btn-dark">
                  {svc.cta} <BtnArrow />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 6 — INDUSTRIES WE SERVE
      ══════════════════════════════════════════════════════ */}
      <section className="st2-section st2-industries-section">
        <div className="st2-container">
          <div className="st2-section-header">
            <p className="st2-label">Who We Serve</p>
            <h2 className="st2-section-heading">Industries We Work With</h2>
            <p className="st2-section-sub">
              From lean startups to established enterprises — we build tailored
              digital strategies for the unique challenges and growth goals of
              your specific industry.
            </p>
          </div>

          <div className="st2-industries-grid">
            {industries.map((ind, i) => (
              <div key={i} className="st2-industry-card">
                <div className="st2-industry-icon">{ind.icon}</div>
                <h3 className="st2-industry-title">{ind.title}</h3>
                <p className="st2-industry-desc">{ind.desc}</p>
              </div>
            ))}
          </div>

          <div className="st2-cta-center">
            <Link href="/contact-us" className="buttons st2-btn-primary">
              Request a Quote <BtnArrow />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 7 — THE ZONIC DIFFERENCE  (NEW)
          Before/After comparison
      ══════════════════════════════════════════════════════ */}
      <section className="st2-section st2-comparison-section">
        <div className="st2-container">
          <div className="st2-section-header">
            <p className="st2-label">The Zonic Difference</p>
            <h2 className="st2-section-heading">
              What Changes When You Work With Us
            </h2>
            <p className="st2-section-sub">
              Most businesses run disconnected digital activity and wonder why
              growth feels unpredictable. Here is what shifts when strategy,
              design, and execution finally move together.
            </p>
          </div>

          <div className="st2-comparison-grid">
            {/* Without card */}
            <div className="st2-comparison-card st2-comparison-without">
              <p className="st2-comparison-label">Without a clear digital strategy</p>
              <h3 className="st2-comparison-card-heading">
                Marketing feels busy but results stay flat
              </h3>
              <ul className="st2-comparison-list">
                {withoutPoints.map((pt, i) => (
                  <li key={i} className="st2-comparison-item">
                    <span className="st2-cmp-icon st2-cmp-icon-x">
                      <FaXmark size={10} />
                    </span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>

            {/* With Zonic card */}
            <div className="st2-comparison-card st2-comparison-with">
              <p className="st2-comparison-label">Working with Zonic Media</p>
              <h3 className="st2-comparison-card-heading">
                Growth becomes focused, measurable, and scalable
              </h3>
              <ul className="st2-comparison-list">
                {withPoints.map((pt, i) => (
                  <li key={i} className="st2-comparison-item">
                    <span className="st2-cmp-icon st2-cmp-icon-check">
                      <FaCheck size={10} />
                    </span>
                    {pt}
                  </li>
                ))}
              </ul>
              <Link href="/contact-us" className="buttons st2-btn-yellow">
                Start Growing <BtnArrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 8 — RESULTS / BENEFITS
      ══════════════════════════════════════════════════════ */}
      <section className="st2-results-section">
        <div className="st2-container">
          <div className="st2-results-inner">
            <div className="st2-results-left">
              <p className="st2-label st2-label-accent">Measurable Outcomes</p>
              <h2 className="st2-results-heading">
                What Businesses Gain Working With Us
              </h2>
              <p className="st2-results-sub">
                Our clients don&apos;t just get deliverables. They get a
                measurable shift in how their business performs online — more
                visibility, more qualified leads, and a digital presence that
                compounds over time.
              </p>
              <Link href="/contact-us" className="buttons st2-btn-yellow">
                Grow My Business <BtnArrow />
              </Link>
            </div>
            <div className="st2-results-right">
              {benefits.map((b, i) => (
                <div key={i} className="st2-benefit-card">
                  <p className="st2-benefit-val">{b.value}</p>
                  <p className="st2-benefit-label">{b.label}</p>
                  <p className="st2-benefit-desc">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="st2-results-banner-section">
        <div className="st2-container">
          <div className="st2-results-banner">
            <div className="st2-results-banner-copy">
              <p className="st2-label st2-label-accent">Growth Roadmap</p>
              <h2 className="st2-results-banner-heading">
                See the Fastest Path From Traffic to Revenue
              </h2>
              <p className="st2-results-banner-sub">
                We connect your website, SEO, GMB, and ad campaigns into one
                clear plan so every channel supports the same measurable goal:
                more qualified leads.
              </p>
            </div>
            <div className="st2-results-banner-actions">
              <Link href="/contact-us" className="buttons st2-btn-dark">
                Get My Roadmap <BtnArrow />
              </Link>
              <Link href={SITE_CONTACT.phoneHref} className="buttons st2-btn-ghost">
                Call {SITE_CONTACT.phoneDisplay} <BtnArrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 9 — FREE STRATEGY SESSION  (NEW)
          What you get in the free audit call
      ══════════════════════════════════════════════════════ */}
      <section className="st2-section st2-audit-section">
        <div className="st2-container">
          <div className="st2-audit-inner">
            <div className="st2-audit-content">
              <p className="st2-label">Free Strategy Session</p>
              <h2 className="st2-audit-heading">
                Get a Free Digital Audit Before You Commit to Anything
              </h2>
              <p className="st2-audit-sub">
                Before we recommend a single service, we audit your current
                digital presence, map your competitive landscape, and identify
                where the biggest growth opportunities are. No pitch, no
                pressure — just clarity.
              </p>
              <p className="st2-audit-proof">
                <FaCheck size={12} /> 100% Free — No Obligation
              </p>
              <Link href="/contact-us" className="buttons st2-btn-dark">
                Book My Free Audit <BtnArrow />
              </Link>
            </div>
            <div className="st2-audit-items">
              {auditIncludes.map((item, i) => (
                <div key={i} className="st2-audit-item">
                  <div className="st2-audit-item-icon">{item.icon}</div>
                  <div>
                    <p className="st2-audit-item-title">{item.title}</p>
                    <p className="st2-audit-item-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 10 — FAQ
      ══════════════════════════════════════════════════════ */}
      <section className="st2-section st2-faq-section">
        <div className="st2-container">
          <div className="st2-faq-inner">
            <div className="st2-faq-left">
              <p className="st2-label">FAQ</p>
              <h2 className="st2-faq-heading">
                Common Questions About Our Services
              </h2>
              <p className="st2-faq-sub">
                Still have questions? We are happy to walk you through anything
                during a free strategy call — no pressure, no pitch.
              </p>
              <Link href="/contact-us" className="buttons st2-btn-dark">
                Book a Strategy Call <BtnArrow />
              </Link>
            </div>

            <div className="st2-faq-right">
              {faqs.map((faq, i) => (
                <details key={i} className="st2-faq-item">
                  <summary className="st2-faq-question">
                    {faq.q}
                    <span className="st2-faq-icon" aria-hidden="true" />
                  </summary>
                  <p className="st2-faq-answer">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 11 — FINAL CTA
      ══════════════════════════════════════════════════════ */}
      <section className="st2-section st2-finalcta-section">
        <div className="st2-container">
          <div className="st2-finalcta-card">
            <p className="st2-label st2-label-light">Ready to Start?</p>
            <h2 className="st2-finalcta-heading">
              Let&apos;s Build a Digital Growth System
              <br />
              <span>That Turns Attention Into Revenue</span>
            </h2>
            <p className="st2-finalcta-sub">
              Whether you need a new website, a full-scale marketing strategy,
              or a complete digital transformation — Zonic Media delivers
              results from day one. No fluff, no bloated timelines, just
              measurable outcomes aligned to your business goals.
            </p>
            <div className="st2-finalcta-actions">
              <Link href="/contact-us" className="buttons st2-btn-yellow">
                Get Free Consultation <BtnArrow />
              </Link>
              <Link
                href={SITE_CONTACT.phoneHref}
                className="buttons st2-btn-ghost-light"
              >
                {SITE_CONTACT.phoneDisplay} <BtnArrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="st2-contact-section">
        <div className="st2-container">
          <div className="st2-contact-inner">
            <div className="st2-contact-content">
              <h2 className="st2-contact-heading">
                Looking to Grow Your Business with a Digital Marketing Agency?
              </h2>
              <p className="st2-contact-desc">
                Book a discovery call with Zonic Media, a results-driven
                digital marketing agency. Let&apos;s build a custom strategy
                focused on more leads, stronger online visibility, and real
                business growth through SEO, Google Ads, web design, and
                full-service digital marketing.
              </p>

              <div className="st2-contact-info-grid">
                <div className="st2-contact-info-card">
                  <div className="st2-contact-info-head">
                    <div className="st2-contact-info-icon">
                      <FaLocationDot />
                    </div>
                    <h3>Our Office</h3>
                  </div>
                  <a href={SITE_CONTACT.mapHref} target="_blank" rel="noreferrer">
                    8 The Green, STE B Dover, Kent, DE 19901
                    <br />
                    United States
                  </a>
                </div>
                <div className="st2-contact-info-card">
                  <div className="st2-contact-info-head">
                    <div className="st2-contact-info-icon">
                      <FaPhoneVolume />
                    </div>
                    <h3>Contact Us</h3>
                  </div>
                  <a href={SITE_CONTACT.emailHref}>contact@zonicllc.com</a>
                  <a href={SITE_CONTACT.phoneHref}>{SITE_CONTACT.phoneDisplay}</a>
                </div>
              </div>

              <div className="st2-contact-image-wrap">
                <Image
                  src="/images/contact-section.jpg"
                  fill
                  alt="Digital marketing consultation and contact"
                  className="st2-contact-image"
                />
              </div>
            </div>

            <div className="st2-contact-form" id="services-contact-form">
              <LeadContactForm
                leadFormTitle={contactFormHead.leadFormTitle}
                leadCallText={contactFormHead.leadCallText}
                submitButtonText="Contact Us"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
