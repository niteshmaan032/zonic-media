import Link from "next/link";
import "./page.css";
import Image from "next/image";
import Blogs from "@/app/components/Blogs";
import Footer from "@/app/components/Footer";
import WorldMap from "@/app/components/WorldMap";
import ClutchWidget from "@/app/components/ClutchWidget";
import HeroTypewriter from "@/app/components/HeroTypewriter";
import { getPublishedBlogs } from "@/backend/lib/blogs";
import { SITE_CONTACT } from "@/shared/siteConfig";
import {
  FaArrowRight,
  FaCode,
  FaBullhorn,
  FaChartLine,
  FaMagnifyingGlass,
  FaRocket,
  FaStar,
  FaCircleCheck,
  FaStore,
  FaBuilding,
  FaCloudArrowUp,
  FaHouse,
  FaBriefcase,
  FaPaintbrush,
  FaCheck,
  FaClipboardCheck,
  FaHandshake,
  FaLaptopCode,
} from "react-icons/fa6";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Agency | Web Design, SEO & Growth Solutions | Zonic Media",
  description:
    "Zonic Media delivers premium web design, UI/UX, branding, SEO, and custom software solutions to help businesses scale online.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Digital Agency | Web Design, SEO & Growth Solutions | Zonic Media",
    description:
      "Zonic Media delivers premium web design, UI/UX, branding, SEO, and custom software solutions to help businesses scale online.",
    url: "/",
    type: "website",
  },
};

export const revalidate = 300;

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

/* ── data ─────────────────────────────────────────────────── */

const heroStats = [
  { value: "200%", label: "Client Success Rate" },
  { value: "100+", label: "Brands Grown" },
  { value: "50+", label: "Projects Delivered" },
  { value: "24/7", label: "Dedicated Support" },
];

const services = [
  {
    img: "/images/new-home/graphic-design.png",
    cardClassName: "nh-service-card-design",
    title: "Web Design & Development",
    desc: "High-performing, conversion-optimized websites built fast, mobile-first, and SEO-ready. We engineer digital experiences that turn visitors into paying customers.",
    href: "/services/web-design",
    features: [
      "Landing Pages & Business Sites",
      "WordPress & Custom CMS",
      "Conversion-Focused Layouts",
    ],
  },
  {
    img: "/images/new-home/ui.png",
    cardClassName: "nh-service-card-ui",
    title: "UI/UX Design",
    desc: "Intuitive, engaging interfaces crafted with user psychology and conversion principles in mind. Every pixel has a purpose — guiding users toward action.",
    href: "/services",
    features: [
      "User Research & Wireframing",
      "Prototype & Design Systems",
      "Accessibility-First Design",
    ],
  },
  {
    img: "/images/new-home/branding.png",
    cardClassName: "nh-service-card-branding",
    title: "Branding",
    desc: "Strategic brand identities that build instant recognition and lasting trust. From logo design to brand guidelines, we craft the visual language of your business.",
    href: "/services",
    features: [
      "Logo & Visual Identity",
      "Brand Guidelines",
      "Messaging & Positioning",
    ],
  },
  {
    img: "/images/new-home/campaign.png",
    cardClassName: "nh-service-card-marketing",
    title: "Digital Marketing",
    desc: "Data-driven campaigns that generate measurable traffic, qualified leads, and compounding revenue growth across every relevant digital channel.",
    href: "/services",
    features: [
      "Campaign Strategy & Execution",
      "Content Marketing",
      "Performance Analytics & Reporting",
    ],
  },
  {
    img: "/images/new-home/search-engine-optimization.png",
    cardClassName: "nh-service-card-seo",
    title: "SEO Optimization",
    desc: "Rank higher in local and national search with proven strategies. We build sustainable organic visibility that compounds over time and outlasts paid channels.",
    href: "/services/local-seo-for-home-services",
    features: [
      "Local & Technical SEO",
      "Keyword Strategy & Content",
      "On-Page & Off-Page Optimization",
    ],
  },
  {
    img: "/images/new-home/app-development.png",
    cardClassName: "nh-service-card-software",
    title: "Custom Software Solutions",
    desc: "Scalable, purpose-built software engineered to solve your unique business challenges. From workflow automation to full-stack applications built to last.",
    href: "/services",
    features: [
      "Web Applications & Portals",
      "API Integrations",
      "Workflow Automation Tools",
    ],
  },
];

const whyPoints = [
  {
    icon: <FaClipboardCheck />,
    title: "Strategy-First Approach",
    desc: "We begin with deep discovery — your goals, market, and audience — before writing a single line of code. Strategy is built in, not bolted on after launch.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Scalable Development",
    desc: "Every project is engineered for performance and long-term scale. The systems we build today are designed to grow seamlessly with your business tomorrow.",
  },
  {
    icon: <FaChartLine />,
    title: "Conversion-Focused Design",
    desc: "Our design decisions are grounded in user psychology and data — built to maximize engagement, trust signals, and lead generation at every scroll depth.",
  },
  {
    icon: <FaHandshake />,
    title: "Transparent Process",
    desc: "Clear milestones, open communication, and full project visibility at every stage. You will always know exactly where things stand — no surprises.",
  },
  {
    icon: <FaRocket />,
    title: "Long-Term Support",
    desc: "We don't disappear after launch. Ongoing optimization, updates, and strategic reviews keep your results compounding month over month.",
  },
];

const whyStats = [
  { value: "90%", label: "Client Retention Rate" },
  { value: "4.9★", label: "Average Client Rating" },
];

const growthSystems = [
  {
    icon: <FaMagnifyingGlass />,
    title: "Audit the Growth Gaps",
    desc: "We review your website, search visibility, conversion path, and paid traffic opportunities to find the fastest routes to better leads.",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Build the Action Plan",
    desc: "You get a clear roadmap with priorities, timelines, creative direction, campaign structure, and the metrics that define success.",
  },
  {
    icon: <FaRocket />,
    title: "Launch with Momentum",
    desc: "Our team ships the assets, tracking, pages, content, and campaigns needed to move from strategy into measurable execution.",
  },
];

const deliveryPillars = [
  {
    icon: <FaLaptopCode />,
    title: "Performance Infrastructure",
    desc: "Fast pages, clean analytics, conversion tracking, and scalable technical foundations keep every campaign accountable.",
  },
  {
    icon: <FaBullhorn />,
    title: "Demand Generation",
    desc: "SEO, PPC, local visibility, and content work together so your business can capture demand across every high-intent channel.",
  },
  {
    icon: <FaHandshake />,
    title: "Continuous Partnership",
    desc: "We keep optimizing after launch with reporting, testing, updates, and strategy reviews that protect long-term growth.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Discover",
    desc: "Deep research into your business, competitors, and audience to build a strategy rooted in real data — not guesswork or assumptions.",
  },
  {
    num: "02",
    title: "Design",
    desc: "Wireframes, brand assets, and pixel-perfect interfaces designed for conversion, visual clarity, and brand alignment at every touchpoint.",
  },
  {
    num: "03",
    title: "Develop",
    desc: "Clean, fast, accessible, SEO-optimized code built to perform flawlessly across every device, browser, and screen size.",
  },
  {
    num: "04",
    title: "Launch",
    desc: "Rigorous QA, smooth deployment, full cross-device testing, and a seamless go-live experience with zero disruption to your business.",
  },
  {
    num: "05",
    title: "Grow",
    desc: "Post-launch SEO, analytics tracking, ongoing A/B testing, and continuous optimization to keep your results compounding over time.",
  },
];

const capabilities = [
  {
    img: "/images/new-home/ChatGPT Image May 4, 2026, 02_33_30 PM.png",
    category: "Web Design & Development",
    title: "Websites That Win Clients",
    desc: "We design and develop fast, mobile-first websites that convert visitors into customers. Built with clean code, technical SEO foundations, and conversion-focused UX from day one — not as an afterthought.",
    features: [
      "Pixel-perfect responsive design",
      "Core Web Vitals & speed optimized",
      "Integrated SEO & analytics setup",
      "Conversion-rate optimized layouts",
    ],
    href: "/services/web-design",
  },
  {
    img: "/images/new-home/ChatGPT Image May 4, 2026, 02_34_31 PM.png",
    category: "Google Ads & PPC",
    title: "Ads That Drive Real Revenue",
    desc: "Our PPC specialists engineer campaigns that attract high-intent buyers and turn ad spend into measurable revenue. Every dollar of your budget is optimized for maximum ROAS with full transparency.",
    features: [
      "Strategic keyword targeting & bidding",
      "ROAS-focused campaign management",
      "A/B tested landing pages & copy",
      "Full conversion tracking & reporting",
    ],
    href: "/services/google-ads",
  },
  {
    img: "/images/new-home/ChatGPT Image May 4, 2026, 02_35_28 PM.png",
    category: "Local SEO & GMB",
    title: "Dominate Local Search Results",
    desc: "We get your business into the Google Map Pack and top local results. From GMB optimization to citation building and review strategies — we make your phone ring with qualified, ready-to-buy leads.",
    features: [
      "Google Business Profile optimization",
      "Map Pack & local rank strategy",
      "Citation building & cleanup",
      "Review generation system",
    ],
    href: "/services/local-seo-for-home-services",
  },
];

const industries = [
  {
    icon: <FaRocket />,
    title: "Startups",
    desc: "Launch fast with messaging, product pages, investor-ready design, and acquisition systems that help early users understand your value quickly.",
  },
  {
    icon: <FaBriefcase />,
    title: "Agencies",
    desc: "White-label design, development support, partner-ready builds, and scalable design systems for agencies that need reliable delivery capacity.",
  },
  {
    icon: <FaStore />,
    title: "E-commerce",
    desc: "Conversion-focused storefronts, product pages, SEO foundations, and paid traffic funnels built to increase average order value and repeat sales.",
  },
  {
    icon: <FaCloudArrowUp />,
    title: "SaaS",
    desc: "Product-led landing pages, onboarding flows, feature positioning, and lifecycle touchpoints that convert signups and support retention.",
  },
  {
    icon: <FaHouse />,
    title: "Real Estate",
    desc: "Local SEO, listing funnels, neighborhood pages, and lead capture systems that help agents and brokerages attract qualified buyers and sellers.",
  },
  {
    icon: <FaBuilding />,
    title: "Local Businesses",
    desc: "Google Maps visibility, local SEO, review strategy, and high-converting service pages built to turn nearby searches into calls and bookings.",
  },
];

/* const insights = [
  {
    img: "/images/new-home/ChatGPT Image May 4, 2026, 02_33_30 PM.png",
    category: "Web Design",
    date: "May 2025",
    title:
      "Why Conversion-Focused Design Outperforms Beautiful Design Every Time",
    excerpt:
      "Most agencies prioritize how a website looks. We'll show you why the highest-performing sites are built around user behavior — not aesthetics — and how to apply this thinking to your next project.",
  },
  {
    img: "/images/new-home/ChatGPT Image May 4, 2026, 02_35_28 PM.png",
    category: "Local SEO",
    date: "Apr 2025",
    title:
      "The Local SEO Playbook That Gets Businesses into the Google Map Pack",
    excerpt:
      "Ranking in the Map Pack is not luck — it is a repeatable, systematic process. Here is exactly how we do it for our clients, and what you can start implementing today.",
  },
  {
    img: "/images/new-home/ChatGPT Image May 4, 2026, 02_34_31 PM.png",
    category: "Google Ads",
    date: "Mar 2025",
    title: "How We Achieve 4x ROAS on Google Ads Without Burning Your Budget",
    excerpt:
      "Smart bidding alone will not save a poorly structured campaign. The real wins come from landing page alignment, audience segmentation, and intent mapping.",
  },
]; */

/* ── page ─────────────────────────────────────────────────── */

export default async function Home() {
  const blogs = await getPublishedBlogs(6);

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="nh-hero">
        <div className="nh-hero-inner">
          <p className="nh-eyebrow">Digital Agency · Web · SEO · Growth</p>
          <h1 className="nh-hero-heading">
            We Build Brands <br className="nh-hero-br" />
            That <HeroTypewriter />
          </h1>
          <p className="nh-hero-sub">
            Zonic Media designs and builds high-performing digital experiences -
            from conversion-focused websites to full-scale marketing systems
            that generate measurable, predictable growth.
          </p>

          <div className="nh-hero-cta-row">
            <Link href={SITE_CONTACT.phoneHref} className="buttons nh-btn-dark">
              {SITE_CONTACT.phoneDisplay} <BtnArrow />
            </Link>
            <div className="nh-clutch-wrap">
              <ClutchWidget height="50" />
            </div>
          </div>

          {/* inline stats */}
          <div className="nh-hero-stats">
            {heroStats.map((s, i) => (
              <div key={i} className="nh-hero-stat">
                <p className="nh-hero-stat-val">{s.value}</p>
                <p className="nh-hero-stat-lbl">{s.label}</p>
              </div>
            ))}
          </div>

          {/* 6 floating badges */}
          <div className="nh-float nh-float-code" aria-hidden="true">
            <FaCode size={13} /> Web Dev
          </div>
          <div className="nh-float nh-float-seo" aria-hidden="true">
            <FaMagnifyingGlass size={12} /> SEO
          </div>
          <div className="nh-float nh-float-ads" aria-hidden="true">
            <FaChartLine size={12} /> Analytics
          </div>
          <div className="nh-float nh-float-design" aria-hidden="true">
            <FaPaintbrush size={12} /> Design
          </div>
          <div className="nh-float nh-float-brand" aria-hidden="true">
            <FaStar size={12} /> Branding
          </div>
          <div className="nh-float nh-float-ppc" aria-hidden="true">
            <FaBullhorn size={12} /> PPC
          </div>
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────────── */}
      <section className="nh-section nh-about-section">
        <div className="nh-container">
          <div className="nh-about-inner">
            <div className="nh-about-copy">
              <p className="nh-label">About Us</p>
              <h2 className="nh-about-heading">
                Built to Grow Businesses. <br />
                Driven by Results.
              </h2>
              <p className="nh-about-body">
                Zonic Media is a results-driven digital agency serving
                businesses across the USA, UAE, India, Australia, UK, and
                Canada. We combine deep strategy, premium design, and
                performance-first development into one focused growth system
                built to turn digital presence into measurable revenue.
              </p>
              <p className="nh-about-body">
                We work with startups, local businesses, e-commerce brands, and
                SaaS companies that want more than a vendor. They want a partner
                invested in their outcomes. Every engagement starts with your
                goals and ends with results you can see.
              </p>

              <div className="nh-about-highlight-list">
                <div className="nh-about-highlight nh-about-highlight-planning">
                  <div className="nh-about-highlight-image">
                    <Image
                      src="/images/new-home/up.png"
                      alt="Growth-first planning illustration"
                      width={72}
                      height={72}
                    />
                  </div>
                  <div>
                    <h3>Growth-first planning</h3>
                    <p>
                      Every project starts with business goals, channel
                      priorities, and a clear conversion path before production
                      begins.
                    </p>
                  </div>
                </div>
                <div className="nh-about-highlight nh-about-highlight-execution">
                  <div className="nh-about-highlight-image">
                    <Image
                      src="/images/new-home/app-development.png"
                      alt="Execution under one roof illustration"
                      width={72}
                      height={72}
                    />
                  </div>
                  <div>
                    <h3>Execution under one roof</h3>
                    <p>
                      Strategy, design, development, SEO, and campaign support
                      stay aligned because one team owns the delivery.
                    </p>
                  </div>
                </div>
                <div className="nh-about-highlight nh-about-highlight-partnership">
                  <div className="nh-about-highlight-image">
                    <Image
                      src="/images/new-home/handshake.png"
                      alt="Long-term partnership illustration"
                      width={72}
                      height={72}
                    />
                  </div>
                  <div>
                    <h3>Long-term partnership</h3>
                    <p>
                      We stay involved after launch with optimization,
                      reporting, and next-step planning that keeps momentum
                      going.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────── */}
      <section className="nh-section nh-services-section">
        <div className="nh-container">
          <div className="nh-section-header">
            <p className="nh-label">Services</p>
            <h2 className="nh-section-heading">Turning Ideas into Impact</h2>
            <p className="nh-section-sub">
              We turn ideas into impactful digital experiences that engage
              audiences and fuel measurable, long-term growth for your business.
              From strategy and design to development and optimization, every
              service is built to strengthen your brand, improve conversions,
              and create momentum that keeps compounding after launch.
            </p>
          </div>
          <div className="nh-services-grid">
            {services.map((svc, i) => (
              <div key={i} className={`nh-service-card ${svc.cardClassName}`}>
                <div className="nh-service-card-top">
                  <div className="nh-service-icon">
                    <Image
                      src={svc.img}
                      alt={svc.title}
                      width={84}
                      height={84}
                      className="nh-service-icon-image"
                    />
                  </div>
                  <h3 className="nh-service-title">{svc.title}</h3>
                  <p className="nh-service-desc">{svc.desc}</p>
                </div>
                <div className="nh-service-card-bottom">
                  <Link href={svc.href} className="nh-learn-more">
                    Learn more <FaArrowRight size={11} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ────────────────────────────────────── */}
      <section className="nh-section nh-why-section">
        <div className="nh-container">
          <div className="nh-why-inner">
            {/* visual column */}
            <div className="nh-why-visual">
              <div className="nh-why-img-main">
                <Image
                  src="/images/ChatGPT Image May 4, 2026, 03_12_21 PM.png"
                  fill
                  alt="Zonic Media web design and development process"
                  sizes="(max-width: 991px) 100vw, 42vw"
                  style={{ objectFit: "contain", padding: "20px" }}
                />
              </div>
              <div className="nh-why-stats-card">
                {whyStats.map((s, i) => (
                  <div key={i} className="nh-why-stat-item">
                    <p className="nh-why-stat-val">{s.value}</p>
                    <p className="nh-why-stat-lbl">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* content column */}
            <div className="nh-why-content">
              <p className="nh-label">Why Zonic Media</p>
              <h2 className="nh-why-heading">
                The Growth Partner Built for Results
              </h2>
              <p className="nh-why-sub">
                We combine deep strategy, premium design, and performance-first
                development to deliver results that matter to your bottom line —
                not just your portfolio page. Every decision we make is in
                service of your measurable business outcomes.
              </p>
              <div className="nh-why-list">
                {whyPoints.map((pt, i) => (
                  <div key={i} className="nh-why-item">
                    <div className="nh-why-check">{pt.icon}</div>
                    <div>
                      <p className="nh-why-item-title">{pt.title}</p>
                      <p className="nh-why-item-desc">{pt.desc}</p>
                    </div>
                  </div>
                ))}
                <Link href={SITE_CONTACT.phoneHref} className="nh-why-cta-tile">
                  <span>Ready for a cleaner growth plan?</span>
                  <strong>Book a Strategy Call</strong>
                  <em>
                    Tell us what you want to improve and we will map the fastest
                    next step.
                  </em>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────── */}
      <section className="nh-process-outer">
        <div className="nh-container">
          <div className="nh-process-wrap">
            <div className="nh-process-top">
              <div className="nh-process-top-left">
                <p className="nh-label nh-label-accent">5 Simple Steps</p>
                <h2 className="nh-process-heading">
                  Effortless Process,
                  <br />
                  Exceptional Results
                </h2>
              </div>
              <div className="nh-process-rule" />
            </div>
            <div className="nh-process-grid">
              {processSteps.map((step, i) => (
                <div key={i} className="nh-process-card">
                  <p className="nh-process-num">{step.num}</p>
                  <h3 className="nh-process-title">{step.title}</h3>
                  <p className="nh-process-desc">{step.desc}</p>
                </div>
              ))}
            </div>
            <div className="nh-process-footer">
              <div className="nh-proof">
                <div className="nh-avatars">
                  <span>Z</span>
                  <span>O</span>
                  <span>N</span>
                  <span>I</span>
                  <span>C</span>
                </div>
                <p>Trusted by 100+ businesses that choose growth</p>
              </div>
              <Link href="/contact-us" className="buttons nh-btn-process">
                Start Now <BtnArrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="nh-section nh-finalcta-section">
        <div className="nh-container">
          <div className="nh-finalcta-card">
            <p className="nh-label">Ready to Start?</p>
            <h2 className="nh-finalcta-heading">
              Let&apos;s Build a Digital Growth System <br />
              <span>That Turns Attention Into Revenue</span>
            </h2>
            <p className="nh-finalcta-sub">
              Whether you need a new website, a full-scale growth strategy, or a
              complete digital transformation — Zonic Media delivers results
              from day one. No fluff, no bloated timelines, just measurable
              outcomes.
            </p>
            <div className="nh-finalcta-actions">
              <Link href="/contact-us" className="buttons nh-btn-dark">
                Start Your Project <BtnArrow />
              </Link>
              <Link href="/services" className="buttons nh-btn-finalcta-ghost">
                View Services <BtnArrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="nh-dark-process nh-growth-system-section">
        <div className="nh-container">
          <div className="nh-dark-process-head">
            <p className="nh-label nh-label-accent">Growth System</p>
            <h2 className="nh-dark-process-heading">
              A Clear Plan Before We Build
            </h2>
            <p className="nh-dark-process-sub">
              We connect strategy, creative, technology, and marketing before
              production starts, so every deliverable has a measurable job.
            </p>
          </div>
          <div className="nh-dark-process-grid">
            {growthSystems.map((item, i) => (
              <div key={item.title} className="nh-dark-process-card">
                <span className="nh-dark-process-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="nh-dark-process-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES (redesigned with images) ─────────── */}
      <section className="nh-section nh-local-growth-section">
        <div className="nh-container">
          <div className="nh-local-growth-inner">
            <div className="nh-local-growth-media">
              <Image
                src="/images/new-home/ChatGPT Image May 5, 2026, 04_29_24 PM.png"
                fill
                alt="Digital marketing campaign dashboard and growth planning"
                sizes="(max-width: 991px) 100vw, 42vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
            <div className="nh-local-growth-copy">
              <p className="nh-label">Digital Growth Engine</p>
              <h2>
                Visibility built for better leads, stronger funnels, and more
                revenue.
              </h2>
              <h3>
                A digital marketing agency should connect the channels that
                create demand with the pages that convert it.
              </h3>
              <p>
                We align SEO, paid search, landing pages, analytics, content,
                brand messaging, and conversion tracking into one growth system.
                Instead of treating each channel as a separate task, we build a
                marketing foundation where every campaign has a clear audience,
                offer, journey, and measurable outcome.
              </p>
              <ul>
                <li>
                  <FaCircleCheck /> SEO and paid media planned around revenue
                  goals
                </li>
                <li>
                  <FaCircleCheck /> Landing pages designed for qualified lead
                  flow
                </li>
                <li>
                  <FaCircleCheck /> Reporting that shows what is actually
                  working
                </li>
              </ul>
              <Link href="/contact-us" className="buttons nh-section-cta">
                Build My Growth Engine <BtnArrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="nh-section nh-maps-domination-section">
        <div className="nh-container">
          <div className="nh-maps-domination-inner">
            <div className="nh-maps-domination-copy">
              <p className="nh-label">Digital Market Domination</p>
              <h2>Turn every channel into a connected growth advantage.</h2>
              <h3>
                SEO, paid media, content, analytics, and conversion strategy
                work best when they move as one system.
              </h3>
              <p>
                A digital marketing agency should do more than run isolated
                campaigns. We connect search visibility, ad strategy, landing
                pages, creative direction, and tracking so your brand can reach
                the right audience and turn attention into measurable demand.
              </p>
              <p>
                Our work gives every channel a clear role: organic search builds
                trust, paid campaigns capture intent, content answers buying
                questions, and conversion-focused pages turn traffic into
                qualified leads.
              </p>
              <Link href="/services" className="buttons nh-section-cta">
                Explore Marketing Services <BtnArrow />
              </Link>
            </div>
            <div className="nh-maps-domination-media">
              <Image
                src="/images/new-home/ChatGPT Image May 4, 2026, 04_33_14 PM.png"
                fill
                alt="Digital marketing agency growth strategy dashboard"
                sizes="(max-width: 991px) 100vw, 42vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="nh-section nh-business-growth-section">
        <div className="nh-container">
          <div className="nh-business-growth-inner">
            <div className="nh-business-growth-copy">
              <p className="nh-label">How We Grow Businesses</p>
              <h2>
                We turn marketing activity into a repeatable growth engine.
              </h2>
              <p>
                Growth does not come from random posting, disconnected ads, or a
                website that only looks good. We build the strategy, traffic
                channels, conversion paths, and reporting loops that help a
                business understand where demand comes from and how to capture
                more of it.
              </p>
              <Link href="/contact-us" className="buttons nh-section-cta">
                Grow My Business <BtnArrow />
              </Link>
            </div>
            <div className="nh-business-growth-compare">
              <div className="nh-growth-compare-box nh-growth-compare-without">
                <span>Without us</span>
                <strong>Marketing feels busy but unpredictable.</strong>
                <p>
                  Campaigns run in separate lanes, reports show surface-level
                  numbers, landing pages leak leads, and it is hard to see which
                  activity is actually creating revenue.
                </p>
              </div>
              <div className="nh-growth-compare-box nh-growth-compare-with">
                <span>Working with us</span>
                <strong>
                  Growth becomes focused, measurable, and easier to scale.
                </strong>
                <p>
                  SEO, ads, content, analytics, and conversion paths work
                  together with clear priorities, better lead quality, and a
                  reporting loop that shows where to invest next.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="nh-section nh-capabilities-section">
        <div className="nh-container">
          <div className="nh-section-header">
            <p className="nh-label">What We Build</p>
            <h2 className="nh-section-heading">
              Built to Perform. Designed to Convert.
            </h2>
            <p className="nh-section-sub">
              Three core disciplines, executed at the highest level — so your
              digital presence generates real, measurable results.
            </p>
          </div>
          <div className="nh-cap-grid">
            {capabilities.map((cap, i) => (
              <div key={i} className="nh-cap-card">
                <div className="nh-cap-img-wrap">
                  <Image
                    src={cap.img}
                    fill
                    alt={cap.title}
                    sizes="(max-width: 991px) 100vw, 33vw"
                    style={{ objectFit: "contain", padding: "28px" }}
                  />
                </div>
                <div className="nh-cap-content">
                  <span className="nh-cap-badge">{cap.category}</span>
                  <h3 className="nh-cap-title">{cap.title}</h3>
                  <p className="nh-cap-desc">{cap.desc}</p>
                  <ul className="nh-cap-features">
                    {cap.features.map((f, j) => (
                      <li key={j}>
                        <FaCheck size={10} /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link href={cap.href} className="nh-learn-more">
                    Learn more <FaArrowRight size={11} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GMB FEATURE ───────────────────────────────────── */}
      <section className="nh-gmb-section">
        <div className="nh-container">
          <div className="nh-gmb-inner">
            <div className="nh-gmb-content">
              <p className="nh-label">Google Business Profile</p>
              <h2 className="nh-gmb-heading">
                Get Your Business <span>Found, Trusted,</span> and Called on
                Google
              </h2>
              <p className="nh-gmb-desc">
                Your Google Business Profile is the single most powerful free
                marketing asset a local business has. We optimize, verify, and
                manage it so you appear at the top of local search and Google
                Maps — exactly when customers are ready to act.
              </p>
              <div className="nh-gmb-features">
                <div className="nh-gmb-feature">
                  <div className="nh-gmb-feature-icon">
                    <FaCircleCheck />
                  </div>
                  <div>
                    <p className="nh-gmb-feature-title">Profile Optimization</p>
                    <p className="nh-gmb-feature-desc">
                      Every field, category, photo, and service area configured
                      for maximum local ranking potential.
                    </p>
                  </div>
                </div>
                <div className="nh-gmb-feature">
                  <div className="nh-gmb-feature-icon">
                    <FaMagnifyingGlass />
                  </div>
                  <div>
                    <p className="nh-gmb-feature-title">
                      Map Pack Ranking Strategy
                    </p>
                    <p className="nh-gmb-feature-desc">
                      Keyword-driven local content and citation building that
                      pushes your listing into the top 3 results.
                    </p>
                  </div>
                </div>
                <div className="nh-gmb-feature">
                  <div className="nh-gmb-feature-icon">
                    <FaStar />
                  </div>
                  <div>
                    <p className="nh-gmb-feature-title">
                      Review Generation System
                    </p>
                    <p className="nh-gmb-feature-desc">
                      Automated systems that consistently generate 5-star
                      reviews and build long-term trust with new customers.
                    </p>
                  </div>
                </div>
                <div className="nh-gmb-feature">
                  <div className="nh-gmb-feature-icon">
                    <FaRocket />
                  </div>
                  <div>
                    <p className="nh-gmb-feature-title">
                      GMB Reinstatement Help
                    </p>
                    <p className="nh-gmb-feature-desc">
                      Suspended or disabled profile? We have a proven process to
                      reinstate and protect your Google listing.
                    </p>
                  </div>
                </div>
              </div>
              <Link
                href="/services/gmb-reinstatement-help"
                className="buttons nh-btn-primary-yellow"
              >
                Explore GMB Services <BtnArrow />
              </Link>
            </div>

            <div className="nh-gmb-visual">
              <div className="nh-gmb-glass-card">
                <p className="nh-gmb-card-kicker">Local visibility system</p>
                <h3>More calls from the customers already searching nearby.</h3>
                <p>
                  We strengthen the signals Google uses to trust, rank, and
                  display your profile: categories, services, reviews, photos,
                  citations, proximity signals, and conversion-focused profile
                  content.
                </p>
                <div className="nh-gmb-card-stats">
                  <span>
                    <strong>Top 3</strong>
                    Map Pack focus
                  </span>
                  <span>
                    <strong>24/7</strong>
                    Profile visibility
                  </span>
                </div>
                <div className="nh-gmb-badge">
                  <FaCircleCheck size={14} /> Google Verified &amp; Ranking
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ────────────────────────────────────── */}
      <section className="nh-section nh-industries-section">
        <div className="nh-container">
          <div className="nh-section-header">
            <p className="nh-label">Who We Serve</p>
            <h2 className="nh-section-heading">Industries We Work With</h2>
            <p className="nh-section-sub">
              From lean startups to established enterprises — we build tailored
              digital strategies for the unique challenges and growth goals of
              your specific industry.
            </p>
          </div>
          <div className="nh-industries-grid">
            {industries.map((ind, i) => (
              <div key={i} className="nh-industry-card">
                <div className="nh-industry-icon">{ind.icon}</div>
                <h3 className="nh-industry-title">{ind.title}</h3>
                <p className="nh-industry-desc">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="nh-dark-process nh-delivery-section">
        <div className="nh-container">
          <div className="nh-dark-process-head nh-dark-process-head-split">
            <div>
              <p className="nh-label nh-label-accent">Delivery Engine</p>
              <h2 className="nh-dark-process-heading">
                Built for Launch and Long-Term Growth
              </h2>
            </div>
            <p className="nh-dark-process-sub">
              Zonic Media keeps design, development, SEO, paid media, and
              reporting aligned so your digital presence keeps improving after
              the first release.
            </p>
          </div>
          <div className="nh-dark-process-grid">
            {deliveryPillars.map((item, i) => (
              <div key={item.title} className="nh-dark-process-card">
                <span className="nh-dark-process-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="nh-dark-process-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORLD MAP ─────────────────────────────────────── */}
      <WorldMap />

      {blogs.length > 0 ? (
        <section className="nh-section nh-blog-home-section">
          <div className="nh-container">
            <Blogs blogs={blogs} />
          </div>
        </section>
      ) : null}

      {/* ── TESTIMONIALS ─────────────────────── */}
      <div className="home-section-7">
        <h2 className="testimonial-heading">What Our Clients Say</h2>

        <div className="home-phila-test">
          <ClutchWidget
            widgetType="12"
            height="375"
            primaryColor="#f7c00a"
            reviews="448872,448007,448005,448004,447635,447416,447409,446728,446721,446262,445981,446714,446714,446714"
          />
        </div>
      </div>

      <Footer />
    </>
  );
}
