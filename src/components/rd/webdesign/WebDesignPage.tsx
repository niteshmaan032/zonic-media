import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import type { CSSProperties, ReactNode } from "react";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiCheck,
  FiFileText,
  FiLayers,
  FiLayout,
  FiLock,
  FiMail,
  FiMapPin,
  FiMonitor,
  FiPenTool,
  FiPhone,
  FiPlus,
  FiRefreshCw,
  FiShoppingCart,
  FiUsers,
} from "react-icons/fi";
import { FaWindows } from "react-icons/fa";
import {
  SiAndroid,
  SiApple,
  SiFirefoxbrowser,
  SiGooglechrome,
  SiSafari,
  SiSamsung,
  SiWordpress,
} from "react-icons/si";
import { FaEdge } from "react-icons/fa";

import "@/components/rd/dfw-kit/kit.css";
import "@/components/rd/dfw-kit/ui.css";
import "@/components/rd/delaware/delaware.css";

import Footer from "@/app/components/Footer";
import LenisIframeGuard from "@/app/components/LenisIframeGuard";
import {
  CenterHead,
  Label,
  LEAD,
  Pill,
  RowHead,
  Section,
  Strip,
  TickList,
  Wrap,
  cx,
} from "@/components/rd/dfw-kit/primitives";
import { BannerLoops, GRAIN } from "@/components/rd/dfw-kit/banner";
import { PlatformHub, type HubApp } from "@/components/rd/dfw-kit/hub";
import { AboutCard } from "@/components/rd/dfw-kit/ui";
import {
  AvatarPh,
  HandArrow,
  InlineChat,
  InlinePin,
  RatingBadge,
  Sparks,
  TrustLogos,
} from "@/components/rd/dfw-kit/visuals";
import { PricingSection } from "@/components/rd/home/HomePricing";
import { Stage } from "@/components/rd/delaware/uiBits";
import { SITE_CONTACT } from "@/shared/siteConfig";
import {
  ClickHeatmapUi,
  DesignFeedbackPhone,
  InlineBrowser,
  LaptopPhoneSite,
  PageWeightUi,
  RebuildCompareUi,
  SeoOutlineUi,
  webDesignStepUis,
} from "./webDesignUi";
import { WEB_FAQS, WEB_STEPS } from "./content";

const ServiceLeadForm = dynamic(
  () => import("@/app/components/ServiceLeadForm"),
);

/* ---------------------------------------------------------------------------
   WEB DESIGN SERVICE PAGE — redesign draft (23 Oct 2026),
   /services/web-design-2 (noindex).

   The Dallas–Fort Worth kit with its own hero: a centred heading over a
   browser window holding the build photo, with floating Core Web Vitals,
   new-lead and rating cards. Every link the live page gives (services hub,
   free website offer, Google Ads, GBP optimization, LaunchPad, local SEO,
   industries, Delaware and DFW pages) is kept.

   Not carried over: the live page's unsourced figures (4.9 rating, 120+
   websites, 250%+ conversion growth, 8+ years, 1M+ users).

   Copy re-researched and rewritten 24 Oct 2026 (content-optimization
   brief): every heading, sentence and FAQ is new wording; no price
   estimates; build time 2–3 weeks (owner, 25 Oct). The contact
   block now lists phone, email and address on the left of the form.

   Keywords (Semrush US, 24 Oct 2026; Semrush has no ranking data for the
   live URL): website design company 18,100 · website design services
   14,800 · website development company 9,900 · small business web design
   4,400 · small business website design 4,400 · custom website design
   4,400 · website redesign services 3,600 · wordpress web design 3,600 ·
   web design services for small business 2,900 · responsive web design
   services 2,900 · website design and development 2,400 · website design
   for small business 1,900.
--------------------------------------------------------------------------- */

const CONTACT = "#wd-contact";
const CTA = "Start My Website Project";

const LINKS =
  "tw:[&_a]:font-medium tw:[&_a]:text-(--blue) tw:[&_a]:underline tw:[&_a]:decoration-(--blue)/35 tw:[&_a]:underline-offset-[3px] tw:[&_a:hover]:decoration-(--blue)";
const LINKS_DARK =
  "tw:[&_a]:font-medium tw:[&_a]:text-white tw:[&_a]:underline tw:[&_a]:decoration-white/40 tw:[&_a]:underline-offset-[3px] tw:[&_a:hover]:decoration-white";

/* ----------------------------------------------------------------- copy */

type Service = {
  icon: ReactNode;
  title: string;
  desc: string;
  points: string[];
  href: string;
  link: string;
};

const SERVICES: Service[] = [
  {
    icon: <FiPenTool />,
    title: "Custom Small Business Websites",
    desc: "A site designed from scratch around your services, customers and brand, with one clear next step on every page.",
    points: [
      "Built for your brand",
      "Copywriting included",
      "Designed phone-first",
    ],
    href: CONTACT,
    link: "Plan my custom website",
  },
  {
    icon: <FiRefreshCw />,
    title: "Website Redesign and Migration",
    desc: "A faster, cleaner rebuild that keeps the Google rankings you already have while fixing speed, layout and lead flow.",
    points: [
      "Every old URL redirected",
      "Ranking content kept",
      "New layout and speed",
    ],
    href: CONTACT,
    link: "Plan my redesign",
  },
  {
    icon: <SiWordpress />,
    title: "WordPress Website Builds",
    desc: "Responsive WordPress sites your team can edit in minutes, tuned for speed and connected to your Google Business Profile.",
    points: [
      "Simple page editing",
      "Lightweight theme",
      "Plugins kept updated",
    ],
    href: "/local-seo-google-business-optimization",
    link: "Add Google profile optimization",
  },
  {
    icon: <FiShoppingCart />,
    title: "Ecommerce and Shopify Stores",
    desc: "Online stores with quick-loading product pages and a safe checkout. Brand-new businesses can bundle a store into LaunchPad.",
    points: [
      "Search-ready product pages",
      "Secure checkout",
      "Shipping and stock set up",
    ],
    href: "/services/launchpad",
    link: "See the LaunchPad package",
  },
  {
    icon: <FiLayout />,
    title: "Ad Landing Page Design",
    desc: "One offer, one search and one goal per page, so the clicks you pay for turn into calls and form leads.",
    points: ["Matched to the ad", "Lean, fast layout", "Headlines A/B tested"],
    href: "/services/google-ads",
    link: "Pair with Google Ads management",
  },
  {
    icon: <FiLayers />,
    title: "User Experience Design",
    desc: "Clear menus, short forms and easy paths to buy or book, tested on every screen size and checked for accessibility.",
    points: [
      "Customer journey maps",
      "Clickable prototypes",
      "Accessibility checks",
    ],
    href: "/services",
    link: "Browse all our services",
  },
];

const ICON_TONES = [
  "tw:bg-(--blue) tw:text-white",
  "tw:bg-(--gold) tw:text-(--ink)",
  "tw:bg-(--ink) tw:text-white",
  "tw:bg-(--green) tw:text-white",
  "tw:bg-(--red) tw:text-white",
  "tw:bg-[#f3e8ff] tw:text-[#6b21a8]",
];

type Feature = {
  label: string;
  title: string;
  body: ReactNode;
  points: { t: string; d: string }[];
  href: string;
  link: string;
  ui: ReactNode;
};

const FEATURES: Feature[] = [
  {
    label: "Page speed",
    title: "Quick to Load on Any Phone",
    body: "Every page gets a weight limit before design starts, so photos and scripts never slow it down, and each one is tested against Core Web Vitals before launch.",
    points: [
      { t: "Images sized per screen", d: "Compressed and responsive." },
      { t: "Minimal scripts", d: "No plugin clutter." },
      { t: "Core Web Vitals", d: "Tested pre-launch." },
      { t: "Ongoing checks", d: "After every update." },
    ],
    href: CONTACT,
    link: "Request a free speed check",
    ui: <PageWeightUi />,
  },
  {
    label: "Search structure",
    title: "Pages Mapped to What Customers Search",
    body: (
      <>
        Every service and area gets its own page with clean headings, schema and
        internal links, giving Google and{" "}
        <Link href="/services/ai-seo-services">AI search tools</Link> clear
        answers to show.
      </>
    ),
    points: [
      { t: "A page per service", d: "Each matched to a search." },
      { t: "Logical headings", d: "One H1, clear H2s." },
      { t: "Schema markup", d: "Business and FAQ data." },
      { t: "Local pages", d: "The towns you serve." },
    ],
    href: "/services/local-seo-for-home-services",
    link: "See our local SEO service",
    ui: <SeoOutlineUi />,
  },
  {
    label: "Lead capture",
    title: "A Clear Next Step on Every Page",
    body: "Call buttons, short forms and real reviews sit where visitors look first, and every call and form is tracked to the page that earned it.",
    points: [
      { t: "Click-to-call", d: "Visible on every screen." },
      { t: "Short forms", d: "Only the fields you need." },
      { t: "Reviews by the button", d: "Proof where they decide." },
      { t: "Lead tracking", d: "Calls and forms, day one." },
    ],
    href: "/website-design-agency-us/offer",
    link: "Check the free website offer",
    ui: <ClickHeatmapUi />,
  },
];

const WHY = [
  {
    icon: <FiUsers aria-hidden="true" />,
    title: "Design, build and SEO in one team",
    desc: "Designers, developers and SEO specialists share one plan, so nothing stalls between vendors.",
  },
  {
    icon: <FiFileText aria-hidden="true" />,
    title: "A flat quote before work starts",
    desc: "You get a written project price after a free consultation, and it doesn't creep.",
  },
  {
    icon: <FiLock aria-hidden="true" />,
    title: "Everything stays in your name",
    desc: "Domain, design files, content and accounts belong to you.",
  },
];

/* Contact details for the contact block (owner rule: phone, email and
   address on the left of the form). */
const CONTACT_TILES = [
  {
    icon: <FiPhone />,
    tone: "tw:bg-(--blue) tw:text-white",
    small: "Call our team",
    strong: SITE_CONTACT.phoneDisplay,
    href: SITE_CONTACT.phoneHref,
  },
  {
    icon: <FiMail />,
    tone: "tw:bg-(--gold) tw:text-(--ink)",
    small: "Email us",
    strong: SITE_CONTACT.email,
    href: SITE_CONTACT.emailHref,
  },
  {
    icon: <FiMapPin />,
    tone: "tw:bg-(--ink) tw:text-white",
    small: "Our office",
    strong: SITE_CONTACT.address,
    href: SITE_CONTACT.mapHref,
    external: true,
  },
];

const STEP_TONE = [
  { num: "tw:bg-(--blue) tw:text-white", bg: "tw:bg-(--blue)" },
  { num: "tw:bg-(--gold) tw:text-(--ink)", bg: "tw:bg-(--gold)" },
  { num: "tw:bg-(--green) tw:text-white", bg: "tw:bg-(--green)" },
  { num: "tw:bg-(--red) tw:text-white", bg: "tw:bg-(--red)" },
];

const HUB_LEFT: HubApp[] = [
  { icon: SiGooglechrome, name: "Chrome", tone: "chrome" },
  { icon: SiSafari, name: "Safari", tone: "safari" },
  { icon: SiFirefoxbrowser, name: "Firefox", tone: "firefox" },
  { icon: FaEdge, name: "Microsoft Edge", tone: "edge" },
];
const HUB_RIGHT: HubApp[] = [
  { icon: SiApple, name: "iPhone and iPad", tone: "apple" },
  { icon: SiAndroid, name: "Android phones", tone: "android" },
  { icon: SiSamsung, name: "Samsung Galaxy", tone: "samsung" },
  { icon: FaWindows, name: "Windows laptops", tone: "windows" },
];

const REVIEWS_WIDGET =
  "https://cdn.trustindex.io/loader.js?bedc2ba73f755349bf36a19f52c";

/* Hero background "+" marks (% of the hero box). */
const MARKS: [number, number][] = [
  [5, 12],
  [11, 30],
  [94, 10],
  [89, 28],
  [28, 5],
  [72, 6],
];

/* ----------------------------------------------------------------- page */

export function WebDesignPage() {
  const steps = webDesignStepUis(WEB_STEPS);
  return (
    <>
      <main className="dk-root">
        {/* ============================================================ HERO */}
        <section
          className="tw:relative tw:isolate tw:overflow-clip tw:[background:radial-gradient(circle_at_14%_10%,rgba(155,140,242,0.12),transparent_26%),radial-gradient(circle_at_86%_8%,rgba(49,87,245,0.08),transparent_24%),linear-gradient(180deg,#fdfdff_0%,#f6f8fd_100%)] tw:pt-36 tw:pb-(--sec-y) tw:max-bsmd:pt-[120px]"
          aria-labelledby="wd-h1"
        >
          <span
            className="tw:pointer-events-none tw:absolute tw:inset-0 tw:-z-1 tw:max-bssm:hidden"
            aria-hidden="true"
          >
            {MARKS.map(([x, y], i) => (
              <i
                key={`${x}-${y}`}
                className={cx(
                  "tw:absolute tw:before:absolute tw:before:top-1/2 tw:before:left-1/2 tw:before:h-[1.5px] tw:before:w-full tw:before:-translate-1/2 tw:before:rounded-[1px] tw:before:bg-[#3157f5] tw:before:content-[''] tw:after:absolute tw:after:top-1/2 tw:after:left-1/2 tw:after:h-[1.5px] tw:after:w-full tw:after:-translate-1/2 tw:after:rotate-90 tw:after:rounded-[1px] tw:after:bg-[#3157f5] tw:after:content-['']",
                  i % 2
                    ? "tw:size-3.5 tw:opacity-40"
                    : "tw:size-2.5 tw:opacity-30",
                )}
                style={{ left: `${x}%`, top: `${y}%` }}
              />
            ))}
          </span>

          {/* Centred hero (owner, 24 Oct): copy on top, then a laptop and
              phone showing one website design (chosen after a photo hero and
              a four-card bento were rejected). */}
          <Wrap className="tw:text-center">
            <Strip
              as="h1"
              id="wd-h1"
              size="heroWide"
              className="tw:mx-auto tw:max-w-[1180px] tw:text-balance"
            >
              {/* Two lines on desktop (owner, 25 Oct). */}
              Website <InlineBrowser id="wd-browser-h1" /> Design Services That
              Bring Small Businesses More Customers
            </Strip>
            <p
              className={cx(
                LEAD,
                "tw:mx-auto tw:mt-7 tw:max-w-[780px] tw:text-balance",
              )}
            >
              We&apos;re a website design company for small and mid-size
              businesses. Each site is custom designed, quick on phones and
              structured for Google and AI search, with click-to-call, booking
              and lead tracking ready on launch day. You own all of it.
            </p>
            <div className="tw:mt-8 tw:flex tw:flex-wrap tw:items-center tw:justify-center tw:gap-3">
              <Pill href={CONTACT} fullOnPhone>
                {CTA}
              </Pill>
              <Pill
                href={SITE_CONTACT.phoneHref}
                tone="outline"
                size="md"
                fullOnPhone
              >
                <FiPhone aria-hidden="true" />
                Call {SITE_CONTACT.phoneDisplay}
              </Pill>
            </div>
            <TrustLogos
              mapHref={SITE_CONTACT.mapHref}
              size="row"
              className="tw:mt-10"
            />

            {/* Laptop and phone showing one website design. */}
            <div className="tw:mt-16 tw:text-left tw:max-bssm:mt-12">
              <LaptopPhoneSite />
            </div>
          </Wrap>
        </section>

        {/* =========================================================== ABOUT */}
        <Section labelledBy="wd-about-h">
          <Wrap>
            <div className="tw:grid tw:grid-cols-2 tw:items-start tw:gap-14 tw:max-bsxl:gap-10 tw:max-bslg:grid-cols-1">
              <div className="tw:relative">
                <Strip
                  id="wd-about-h"
                  className="tw:bslg:text-[clamp(34px,min(4.6vw,calc((100vw_-_256px)/19)),62px)]"
                >
                  <span>Small Business Web</span>{" "}
                  <br className="tw:max-bssm:hidden" />
                  <span>Design Made to Win</span>{" "}
                  <br className="tw:max-bssm:hidden" />
                  <span>Real Customers.</span>
                </Strip>
                <HandArrow className="tw:absolute tw:top-[calc(100%+6px)] tw:left-[32%] tw:w-[180px] tw:max-bslg:hidden" />
              </div>
              <div>
                <Label>Small business website design</Label>
                <p className={cx(LEAD, "tw:mb-6")}>
                  A good-looking site can still lose customers when it loads
                  slowly, buries the phone number or leaves visitors guessing.
                  We plan every page around the person ready to call, book or
                  ask for a quote.
                </p>
                <p className={cx(LEAD, LINKS, "tw:mb-8")}>
                  Pair your new site with{" "}
                  <Link href="/services/local-seo-for-home-services">
                    local SEO
                  </Link>{" "}
                  to climb Google Maps. Run a service business? Ask about our{" "}
                  <Link href="/website-design-agency-us/offer">
                    free website offer
                  </Link>{" "}
                  with a qualifying monthly plan.
                </p>
                <Pill href={CONTACT} tone="outline">
                  Talk With a Web Designer
                </Pill>
              </div>
            </div>

            <div className="tw:relative tw:mt-[110px] tw:grid tw:grid-cols-[minmax(0,1fr)_minmax(0,1.7fr)] tw:gap-6 tw:max-bslg:grid-cols-1 tw:max-bssm:mt-[84px]">
              <RatingBadge
                text="WEBSITE DESIGN • ZONIC MEDIA •"
                className="tw:absolute tw:-top-24 tw:left-[calc(37%-96px)] tw:z-2 tw:max-bslg:-top-[75px] tw:max-bslg:right-6 tw:max-bslg:left-auto tw:max-bssm:-top-16"
              />
              <div className="tw:relative tw:h-[460px] tw:overflow-hidden tw:rounded-(--r-xl) tw:max-bsxl:h-[420px] tw:max-bssm:h-auto">
                <AboutCard
                  tone="ink"
                  top={
                    <span
                      className="tw:grid tw:size-14 tw:place-items-center tw:rounded-full tw:bg-white/10 tw:text-[22px] tw:text-(--gold)"
                      aria-hidden="true"
                    >
                      <FiMonitor />
                    </span>
                  }
                  kicker="In every website we build"
                  title="Made to win customers"
                  points={[
                    "Custom design for your brand",
                    "Service pages mapped for SEO",
                    "Click-to-call and booking",
                    "Call and form tracking",
                  ]}
                  foot="You own the domain, design and content"
                />
              </div>
              {/* Owner's image (24 Oct). Same width as the first version, height
                  back to the old photo's 460 / 420 px (owner); the image fills
                  the box from the top, so the headline and dashboards stay
                  whole and only the bottom of the desk scene is trimmed.
                  Tablets and phones show the whole 4:3 image. */}
              <div className="tw:relative tw:h-[460px] tw:overflow-hidden tw:rounded-(--r-xl) tw:bg-(--panel) tw:max-bsxl:h-[420px] tw:max-bslg:aspect-[1448/1086] tw:max-bslg:h-auto tw:max-bslg:w-full tw:max-bslg:max-w-[560px] tw:max-bslg:justify-self-center">
                <Image
                  src="/images/webdesign/website-design-services.jpg"
                  alt="Website design services: a homepage designed on a desktop and taken from wireframe to design to a responsive mobile layout"
                  fill
                  sizes="(max-width: 991px) 560px, 62vw"
                  className="tw:object-cover tw:object-top"
                />
              </div>
            </div>
          </Wrap>
        </Section>

        {/* ======================================================== SERVICES */}
        <Section labelledBy="wd-svc-h">
          <Wrap>
            <RowHead align="start">
              <div className="tw:min-w-0 tw:max-w-[860px] tw:flex-[1_1_560px]">
                <Strip id="wd-svc-h">
                  What Our Website Design Company Builds
                </Strip>
              </div>
              <div className="tw:flex tw:max-w-[460px] tw:flex-[0_1_460px] tw:flex-col tw:items-start tw:gap-[22px]">
                <p className={cx(LEAD, LINKS)}>
                  New sites, redesigns, stores and landing pages, all from one
                  in-house team. Marketing agencies can resell our{" "}
                  <Link href="/services/white-label-services">
                    white-label web design
                  </Link>
                  .
                </p>
                <Pill href={CONTACT}>{CTA}</Pill>
              </div>
            </RowHead>
            <div className="tw:grid tw:grid-cols-3 tw:gap-6 tw:max-bslg:grid-cols-2 tw:max-bssm:grid-cols-1 tw:max-bssm:gap-4">
              {SERVICES.map((card, i) => (
                <article
                  key={card.title}
                  className="tw:flex tw:flex-col tw:rounded-(--r-xl) tw:bg-white tw:px-7 tw:pt-7 tw:pb-8 tw:transition tw:duration-300 tw:hover:-translate-y-1 tw:max-bssm:px-6"
                >
                  <span className="tw:mb-[22px] tw:flex tw:items-center tw:justify-between">
                    <span
                      className={cx(
                        "tw:grid tw:size-[60px] tw:flex-none tw:place-items-center tw:rounded-full tw:text-2xl",
                        ICON_TONES[i],
                      )}
                      aria-hidden="true"
                    >
                      {card.icon}
                    </span>
                    <span className="tw:text-[13px] tw:font-semibold tw:tracking-[0.14em] tw:text-(--muted)">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </span>
                  <h3 className="tw:text-[23px]/[1.2] tw:max-bssm:text-[21px]">
                    {card.title}
                  </h3>
                  <p className="tw:mt-3 tw:grow tw:text-[17px]/[1.65] tw:text-(--text)">
                    {card.desc}
                  </p>
                  <TickList
                    items={card.points}
                    className="tw:mt-[18px] tw:mb-[22px] tw:min-h-[118px] tw:content-start tw:border-t tw:border-(--line) tw:pt-[18px] tw:text-(--ink-2) tw:max-bssm:min-h-0"
                  />
                  <Link
                    href={card.href}
                    className="tw:group tw:inline-flex tw:items-center tw:gap-2 tw:text-[15px] tw:font-medium tw:text-(--blue)"
                  >
                    {card.link}
                    <FiArrowRight
                      aria-hidden="true"
                      className="tw:transition-transform tw:group-hover:translate-x-[3px]"
                    />
                  </Link>
                </article>
              ))}
            </div>
          </Wrap>
        </Section>

        {/* ===================================================== HOW WE WIN */}
        <Section labelledBy="wd-win-h" tone="white">
          <Wrap>
            <CenterHead
              id="wd-win-h"
              title="Custom Website Design That Loads Fast, Ranks and Converts"
            >
              Speed, search and sales are planned before the first screen is
              designed.
            </CenterHead>
            {FEATURES.map((f, i) => (
              <div
                key={f.label}
                className={cx(
                  "tw:grid tw:grid-cols-2 tw:items-center tw:gap-16 tw:max-bslg:grid-cols-1 tw:max-bslg:gap-9",
                  i > 0 && "tw:mt-16 tw:max-bslg:mt-[72px]",
                )}
              >
                <Stage flip={i % 2 === 1}>{f.ui}</Stage>
                <div>
                  <Label>{f.label}</Label>
                  <h3 className="tw:text-[clamp(30px,3.4vw,52px)] tw:leading-[1.06] tw:tracking-[-0.03em] tw:text-balance">
                    {f.title}
                  </h3>
                  <p className={cx(LEAD, LINKS, "tw:mt-6 tw:max-w-[54ch]")}>
                    {f.body}
                  </p>
                  <ul className="tw:mt-[26px] tw:mb-7 tw:grid tw:grid-cols-2 tw:gap-x-8 tw:gap-y-[22px] tw:border-t tw:border-(--line) tw:pt-6 tw:max-bssm:grid-cols-1 tw:max-bssm:gap-y-[18px]">
                    {f.points.map((point) => (
                      <li
                        key={point.t}
                        className="tw:flex tw:items-start tw:gap-3"
                      >
                        <FiCheck
                          aria-hidden="true"
                          className="tw:mt-px tw:size-6 tw:flex-none tw:rounded-full tw:bg-(--blue-soft) tw:p-[5px] tw:text-(--blue) tw:[stroke-width:3]"
                        />
                        <span className="tw:text-[16.5px]/[1.55] tw:text-(--text)">
                          <b className="tw:mb-0.5 tw:block tw:text-lg tw:text-(--ink)">
                            {point.t}
                          </b>
                          {point.d}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Pill href={f.href} arrow>
                    {f.link}
                  </Pill>
                </div>
              </div>
            ))}
          </Wrap>
        </Section>

        {/* ========================================================= JOURNEY */}
        <Section labelledBy="wd-why-h">
          <Wrap flushOnPhone>
            <div className="tw:grid tw:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] tw:overflow-hidden tw:rounded-(--r-xl) tw:bg-white tw:max-bslg:grid-cols-1">
              <div className="tw:px-11 tw:pt-12 tw:pb-11 tw:max-bssm:px-[22px] tw:max-bssm:pt-[30px] tw:max-bssm:pb-[26px]">
                <Strip id="wd-why-h" size="card">
                  Why Small Businesses Hire Us to Build Their Site
                </Strip>
                <p
                  className={cx(
                    LEAD,
                    "tw:mt-[22px] tw:mb-[26px] tw:max-w-[54ch]",
                  )}
                >
                  Senior people, a fixed price and a website in your name.
                </p>
                <ol className="tw:grid tw:gap-2">
                  {WHY.map((card, i) => (
                    <li
                      key={card.title}
                      className="tw:grid tw:grid-cols-[40px_minmax(0,1fr)] tw:gap-4 tw:rounded-[18px] tw:px-4 tw:py-3.5 tw:first:bg-(--blue-soft) tw:max-bssm:gap-3 tw:max-bssm:p-3"
                      style={
                        {
                          animation: "dk-step-on 9s ease infinite both",
                          animationDelay: `${i * 3}s`,
                        } as CSSProperties
                      }
                    >
                      <span
                        className="tw:grid tw:size-10 tw:place-items-center tw:rounded-full tw:border-[1.5px] tw:border-(--line) tw:bg-white tw:text-[16px] tw:text-(--blue-dark)"
                        style={
                          {
                            animation: "dk-num-on 9s ease infinite both",
                            animationDelay: `${i * 3}s`,
                          } as CSSProperties
                        }
                      >
                        {card.icon}
                      </span>
                      <div>
                        <h3 className="tw:mt-0.5 tw:text-lg">{card.title}</h3>
                        <p className="tw:mt-1 tw:text-lg/[1.65] tw:text-(--text)">
                          {card.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="tw:grid tw:min-h-[560px] tw:place-items-center tw:[background:radial-gradient(60%_50%_at_30%_20%,rgba(155,140,242,0.18),transparent_70%),radial-gradient(60%_50%_at_80%_85%,rgba(253,193,21,0.18),transparent_70%),#f2f5fd] tw:px-6 tw:py-11 tw:max-bslg:min-h-0 tw:max-bslg:px-5 tw:max-bslg:py-9">
                <DesignFeedbackPhone />
              </div>
            </div>
          </Wrap>
        </Section>

        {/* ========================================================= PROCESS */}
        <Section labelledBy="wd-steps-h">
          <Wrap>
            <RowHead align="start">
              <div className="tw:max-w-[860px]">
                <Strip id="wd-steps-h" className="tw:text-balance">
                  Website Design and Development, Step by Step
                </Strip>
              </div>
              <Pill href={CONTACT}>{CTA}</Pill>
            </RowHead>
            <ol className="tw:grid tw:gap-5">
              {WEB_STEPS.map((step, i) => {
                const tone = STEP_TONE[i % STEP_TONE.length];
                return (
                  <li
                    key={step.title}
                    className="tw:grid tw:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] tw:gap-6 tw:max-bsxl:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] tw:max-bslg:grid-cols-1 tw:max-bslg:gap-3.5"
                  >
                    <div className="tw:relative tw:grid tw:grid-cols-[130px_minmax(0,1fr)_auto] tw:gap-6 tw:rounded-(--r-xl) tw:bg-white tw:px-10 tw:pt-10 tw:pb-9 tw:max-bs2xl:grid-cols-[90px_minmax(0,1fr)_auto] tw:max-bs2xl:pt-12 tw:max-bs2xl:pb-10 tw:max-bssm:grid-cols-1 tw:max-bssm:gap-3.5 tw:max-bssm:px-[26px] tw:max-bssm:pt-8 tw:max-bssm:pb-7">
                      <span
                        className={cx(
                          "tw:grid tw:size-16 tw:place-items-center tw:rounded-full tw:text-xl tw:font-semibold tw:max-bssm:size-[52px] tw:max-bssm:text-[17px]",
                          tone.num,
                        )}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <Label>{step.tag}</Label>
                        <h3 className="tw:max-w-[16ch] tw:text-[clamp(28px,3vw,46px)] tw:leading-[1.08] tw:tracking-[-0.03em]">
                          {step.title}
                        </h3>
                        <p
                          className={cx(
                            LEAD,
                            "tw:mt-[22px] tw:max-w-[46ch] tw:max-bssm:mt-[18px]",
                          )}
                        >
                          {step.desc}
                        </p>
                        {step.chips?.length ? (
                          <ul className="tw:mt-5 tw:flex tw:flex-wrap tw:gap-2">
                            {step.chips.map((chip) => (
                              <li
                                key={chip}
                                className="tw:rounded-full tw:border tw:border-(--line) tw:px-3.5 tw:py-1.5 tw:text-[14px] tw:font-medium tw:text-(--ink-2)"
                              >
                                {chip}
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                      <a
                        href={CONTACT}
                        className="tw:grid tw:size-[84px] tw:place-items-center tw:self-end tw:rounded-full tw:border tw:border-[#d3dae6] tw:text-2xl tw:transition tw:duration-200 tw:hover:border-(--ink) tw:hover:bg-(--ink) tw:hover:text-white tw:max-bssm:absolute tw:max-bssm:top-6 tw:max-bssm:right-[22px] tw:max-bssm:size-14 tw:max-bssm:text-xl"
                        aria-label={`Start with: ${step.title}`}
                      >
                        <FiArrowUpRight aria-hidden="true" />
                      </a>
                    </div>
                    <div
                      className={cx(
                        "tw:relative tw:min-h-[260px] tw:overflow-hidden tw:rounded-(--r-xl) tw:max-bssm:min-h-[230px]",
                        tone.bg,
                      )}
                    >
                      <div
                        className={cx(
                          "tw:absolute tw:top-[34px] tw:right-[30px] tw:-bottom-5 tw:left-[30px] tw:overflow-hidden tw:rounded-[22px] tw:[box-shadow:var(--lift)]",
                          i % 2 ? "tw:rotate-3" : "tw:-rotate-3",
                        )}
                      >
                        {steps[i]}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </Wrap>
        </Section>

        {/* ======================================================= DARK CARD */}
        <Section labelledBy="wd-band-h">
          <Wrap flushOnPhone>
            <div className="tw:grid tw:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] tw:items-center tw:gap-14 tw:rounded-(--r-xl) tw:bg-(--ink) tw:p-10 tw:text-white tw:max-bslg:grid-cols-1 tw:max-bslg:gap-10 tw:max-bssm:px-[18px] tw:max-bssm:pt-[22px] tw:max-bssm:pb-7">
              <div className="tw:w-full tw:max-bslg:max-w-[520px] tw:max-bslg:justify-self-center">
                <RebuildCompareUi
                  facts={[
                    { strong: "SEO-ready", label: "Page structure at launch" },
                    { strong: "Tracked", label: "Every call and form" },
                    { strong: "Yours", label: "Domain and content" },
                  ]}
                />
              </div>
              <div>
                <Strip id="wd-band-h" size="card" className="tw:text-white">
                  Website Redesign Services That Keep Your Rankings
                </Strip>
                <p className="tw:mt-6 tw:max-w-[56ch] tw:text-lg/[1.65] tw:text-[#b7c4dd]">
                  Many older sites look fine yet load slowly, hide the phone
                  number and track nothing. A rebuild fixes all three, and every
                  ranking page and URL is carried over.
                </p>
                <p
                  className={cx(
                    LINKS_DARK,
                    "tw:mt-6 tw:max-w-[56ch] tw:text-lg/[1.65] tw:text-[#b7c4dd]",
                  )}
                >
                  Based near us? See{" "}
                  <Link href="/services/delaware/web-design">
                    Delaware web design
                  </Link>{" "}
                  and <Link href="/services/delaware/seo">Delaware SEO</Link>,
                  or our{" "}
                  <Link href="/services/dallas-fort-worth/web-design-agency">
                    Dallas–Fort Worth web design agency
                  </Link>{" "}
                  page. Need a site for your trade? Browse the{" "}
                  <Link href="/industries">industries we work with</Link>.
                </p>
                <Pill
                  href={CONTACT}
                  tone="white"
                  arrow
                  fullOnPhone
                  className="tw:mt-8"
                >
                  {CTA}
                </Pill>
              </div>
            </div>
          </Wrap>
        </Section>

        {/* ============================================================= HUB */}
        <Section labelledBy="wd-found-h" tone="white">
          <Wrap>
            <CenterHead
              id="wd-found-h"
              title="Responsive Web Design, Checked on Real Devices"
            >
              Customers arrive on iPhones, Androids, laptops and tablets. Each
              page is tested on all of them, in every major browser, before it
              goes live.
            </CenterHead>
            <PlatformHub
              left={HUB_LEFT}
              right={HUB_RIGHT}
              leftLabel="Browsers"
              rightLabel="Phones, tablets and laptops"
              icon={<FiMonitor aria-hidden="true" />}
              title="Your new site"
              sub="tested on every screen"
            />
          </Wrap>
        </Section>

        {/* ========================================================= REVIEWS */}
        <Section labelledBy="wd-love-h">
          <Wrap>
            <RowHead align="start">
              <div>
                <Strip id="wd-love-h">Our Clients Rate Us 5.0 on Google</Strip>
              </div>
              <div className="tw:relative tw:pt-2">
                <span className="tw:flex tw:items-center">
                  <AvatarPh tone="a" ring="var(--bg)" size={70} />
                  <AvatarPh tone="b" ring="var(--bg)" size={70} />
                  <AvatarPh tone="c" ring="var(--bg)" size={70} />
                  <AvatarPh tone="d" ring="var(--bg)" size={70} />
                </span>
                <Sparks className="tw:absolute tw:-top-[34px] tw:-right-16 tw:w-[120px] tw:max-bsmd:hidden" />
              </div>
            </RowHead>
            <div className="tw:flex tw:min-h-[360px] tw:flex-col tw:justify-center tw:rounded-(--r-xl) tw:bg-white tw:px-6 tw:py-7 tw:max-bssm:px-3 tw:max-bssm:py-5">
              <LenisIframeGuard widgetScriptSrc={REVIEWS_WIDGET} />
            </div>
          </Wrap>
        </Section>

        {/* ========================================================= PRICING */}
        <PricingSection
          copy={{
            title: "Monthly Plans to Grow Your New Website",
            lead: "Add local SEO, Google profile work and ads once your site is live.",
            compareTitle: "What Each Plan Adds After Launch",
            compareLead: "Side by side, from profile work to ads.",
            addOnsTitle: "Add Pages, Booking and More",
            addOnsLead:
              "Extra landing pages, booking tools or new sections, whenever you need them.",
            customTitle: "Planning a multi-location site?",
            customText: "Share the scope and we'll send a flat-price quote.",
          }}
          idPrefix="wd"
          ctaHref={CONTACT}
          ctaLabel={CTA}
        />

        {/* ============================================================= FAQ */}
        <Section labelledBy="wd-faq-h">
          <Wrap>
            <div className="tw:mx-auto tw:mb-9 tw:max-w-[860px] tw:text-center">
              <h2
                id="wd-faq-h"
                className="tw:text-[clamp(32px,4vw,58px)] tw:leading-[1.08] tw:tracking-[-0.03em] tw:text-balance"
              >
                Small Business Website Design FAQs
              </h2>
              <p className={cx(LEAD, "tw:mx-auto tw:mt-5 tw:max-w-[64ch]")}>
                Timelines, ownership, platforms and search, in plain answers.
              </p>
            </div>
            <div className="tw:mx-auto tw:max-w-[1080px] tw:rounded-[32px] tw:bg-white tw:px-11 tw:py-2 tw:max-bsmd:px-6 tw:max-bsmd:py-1 tw:max-bssm:rounded-3xl tw:max-bssm:px-5">
              {WEB_FAQS.map((item) => (
                <details
                  key={item.question}
                  className="tw:group tw:border-t tw:border-(--line) tw:first:border-t-0"
                >
                  <summary className="tw:flex tw:cursor-pointer tw:items-center tw:justify-between tw:gap-5 tw:py-[22px] tw:text-(--ink)">
                    <h3 className="tw:text-xl/[1.35] tw:font-medium tw:tracking-[-0.01em] tw:max-bsmd:text-[17.5px]">
                      {item.question}
                    </h3>
                    <FiPlus
                      aria-hidden="true"
                      className="tw:size-[22px] tw:flex-none tw:transition-transform tw:duration-200 tw:group-open:rotate-45"
                    />
                  </summary>
                  <p className="tw:max-w-[76ch] tw:pb-[22px] tw:text-lg/[1.65] tw:text-(--text)">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </Wrap>
        </Section>

        {/* ========================================================= CONTACT */}
        <Section id="wd-contact" labelledBy="wd-contact-h">
          <Wrap flushOnPhone>
            <div className="tw:relative tw:overflow-hidden tw:rounded-[48px] tw:bg-white tw:px-12 tw:pt-[60px] tw:pb-11 tw:text-center tw:max-bslg:px-10 tw:max-bslg:pt-16 tw:max-bslg:pb-10 tw:max-bssm:rounded-[28px] tw:max-bssm:px-4 tw:max-bssm:pt-12 tw:max-bssm:pb-4">
              <svg
                viewBox="0 0 120 90"
                className="tw:absolute tw:top-[56px] tw:left-[5%] tw:w-[120px] tw:-rotate-[14deg] tw:drop-shadow-[0_18px_18px_rgba(28,79,196,0.25)] tw:max-bsxl:left-[3%] tw:max-bsxl:w-[92px] tw:max-bslg:hidden"
                aria-hidden="true"
              >
                <rect
                  x="6"
                  y="14"
                  width="108"
                  height="70"
                  rx="10"
                  fill="#5d8ff2"
                />
                <path
                  d="M10 22 L60 56 L110 22"
                  fill="none"
                  stroke="#fff"
                  strokeWidth={6}
                  strokeLinejoin="round"
                />
              </svg>
              <span
                className="tw:absolute tw:top-[40px] tw:right-[6%] tw:text-[130px] tw:leading-none tw:max-bsxl:right-[4%] tw:max-bsxl:text-[100px] tw:max-bslg:hidden"
                aria-hidden="true"
              >
                <InlinePin id="wd-pin-contact" />
              </span>
              <h2
                id="wd-contact-h"
                className="tw:mx-auto tw:max-w-[20ch] tw:text-[clamp(34px,4.6vw,68px)] tw:leading-[1.08] tw:tracking-[-0.035em]"
              >
                Let&apos;s Plan <InlineChat id="wd-chat-contact" /> Your New
                Website
              </h2>
              <p
                className={cx(LEAD, "tw:mx-auto tw:mt-[26px] tw:max-w-[640px]")}
              >
                Share a few details about your business and goals. We&apos;ll
                reply with a design direction, a page plan built for search and
                a flat project quote.
              </p>
              {/* Contact details on the left, form on the right (owner rule:
                  every contact block lists phone, email and address on the
                  left). Stacks above the form on tablets and phones. */}
              <div className="tw:mx-auto tw:mt-[34px] tw:grid tw:max-w-[1080px] tw:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] tw:items-start tw:gap-8 tw:text-left tw:max-bslg:max-w-[760px] tw:max-bslg:grid-cols-1">
                <div>
                  <ul className="tw:grid tw:gap-3 tw:max-bslg:grid-cols-2 tw:max-bssm:grid-cols-1">
                    {CONTACT_TILES.map((t, i) => (
                      <li
                        key={t.small}
                        className={cx(
                          i === CONTACT_TILES.length - 1 &&
                            "tw:max-bslg:col-span-2 tw:max-bssm:col-span-1",
                        )}
                      >
                        <a
                          href={t.href}
                          className="tw:flex tw:h-full tw:items-center tw:gap-3.5 tw:rounded-[20px] tw:bg-(--panel) tw:p-4 tw:transition tw:hover:-translate-y-0.5 tw:hover:bg-(--blue-soft)"
                          {...(t.external
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                        >
                          <span
                            className={cx(
                              "tw:grid tw:size-11 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[18px]",
                              t.tone,
                            )}
                            aria-hidden="true"
                          >
                            {t.icon}
                          </span>
                          <span className="tw:min-w-0">
                            <small className="tw:block tw:text-[13px] tw:text-(--muted)">
                              {t.small}
                            </small>
                            <strong className="tw:mt-0.5 tw:block tw:text-[15.5px]/[1.4] tw:font-medium tw:break-words tw:text-(--ink)">
                              {t.strong}
                            </strong>
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                  <p
                    className={cx(
                      LINKS,
                      "tw:mt-5 tw:text-[16px]/[1.6] tw:text-(--text)",
                    )}
                  >
                    Prefer a full form? Use our{" "}
                    <Link href="/contact-us">contact page</Link>.
                  </p>
                </div>
                <div className="tw:w-full">
                  <ServiceLeadForm
                    formType="web-design"
                    badge="Free consultation"
                    title="Plan Your New Website"
                    subtitle="Takes a minute, with no commitment."
                    submitText="Request My Free Consultation"
                    defaultServices={["Web Design"]}
                    messageLabel="Tell us about your project"
                    messagePlaceholder="Your business, your goals and what the new site should do"
                  />
                </div>
              </div>
            </div>
          </Wrap>
        </Section>

        {/* ========================================================== BANNER */}
        {/* Light gradient (the owner prefers light banners): rose → peach →
            lilac → sky, with ink text. */}
        <Section labelledBy="wd-close-h">
          <Wrap flushOnPhone>
            <div className="tw:relative tw:isolate tw:overflow-hidden tw:rounded-[44px] tw:[background:radial-gradient(55%_80%_at_100%_0%,rgba(186,230,253,0.85),transparent_62%),radial-gradient(50%_70%_at_0%_100%,rgba(254,205,211,0.85),transparent_65%),linear-gradient(105deg,#ffe4e6_0%,#ffedd5_36%,#f3e8ff_68%,#e0f2fe_100%)] tw:px-10 tw:pt-[88px] tw:pb-[84px] tw:text-center tw:text-(--ink) tw:max-bssm:rounded-[28px] tw:max-bssm:px-5 tw:max-bssm:pt-16 tw:max-bssm:pb-28">
              <span
                className="tw:pointer-events-none tw:absolute tw:inset-0 tw:-z-1 tw:opacity-[0.12] tw:mix-blend-multiply"
                style={{ backgroundImage: GRAIN }}
                aria-hidden="true"
              />
              <BannerLoops
                id="wd-loop-l"
                className="tw:absolute tw:-bottom-6 tw:-left-6 tw:-z-1 tw:w-[clamp(180px,24vw,340px)] tw:max-bssm:w-[120px]"
              />
              <BannerLoops
                id="wd-loop-r"
                className="tw:absolute tw:-right-6 tw:-bottom-6 tw:-z-1 tw:w-[clamp(180px,24vw,340px)] tw:-scale-x-100 tw:max-bssm:w-[120px]"
              />
              <h2
                id="wd-close-h"
                className="tw:mx-auto tw:max-w-[16ch] tw:text-[clamp(34px,5vw,74px)] tw:leading-[1.06] tw:tracking-[-0.035em] tw:text-(--ink) tw:text-balance"
              >
                Get a Flat Quote for Your New Website
              </h2>
              <p className="tw:mx-auto tw:mt-6 tw:max-w-[60ch] tw:text-lg/[1.65] tw:text-(--ink-2)">
                Book a free consultation. We&apos;ll look at your current site,
                suggest a design direction and send a fixed project price, with
                no obligation.
              </p>
              <div className="tw:mt-9 tw:flex tw:flex-wrap tw:items-center tw:justify-center tw:gap-3">
                <Pill href={CONTACT} fullOnPhone>
                  {CTA}
                </Pill>
                <a
                  href={SITE_CONTACT.phoneHref}
                  className="tw:inline-flex tw:min-h-14 tw:items-center tw:justify-center tw:gap-2 tw:rounded-full tw:border-[1.5px] tw:border-(--ink)/25 tw:bg-white/60 tw:px-7 tw:text-base tw:font-medium tw:text-(--ink) tw:transition tw:duration-200 tw:hover:-translate-y-0.5 tw:hover:bg-white tw:max-bssm:w-full"
                >
                  <FiPhone aria-hidden="true" />
                  {SITE_CONTACT.phoneDisplay}
                </a>
              </div>
              <ul className="tw:mt-8 tw:flex tw:flex-wrap tw:justify-center tw:gap-x-6 tw:gap-y-2 tw:text-[14.5px] tw:text-(--ink-2)">
                {[
                  "Free consultation",
                  "Flat-price quote",
                  "Mobile-first and SEO-ready",
                  "You own the site",
                ].map((t) => (
                  <li key={t} className="tw:flex tw:items-center tw:gap-2">
                    <FiCheck aria-hidden="true" className="tw:text-(--green)" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Wrap>
        </Section>
      </main>
      <Footer />
    </>
  );
}
