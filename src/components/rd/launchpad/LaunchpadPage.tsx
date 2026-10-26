import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import type { ReactNode } from "react";
import {
  FiAlertCircle,
  FiSend,
  FiShare2,
  FiMonitor,
  FiPenTool,
  FiArrowUpRight,
  FiCheck,
  FiCompass,
  FiHelpCircle,
  FiMail,
  FiMapPin,
  FiPhone,
  FiPhoneCall,
  FiPlus,
  FiShoppingBag,
  FiTarget,
  FiTrendingUp,
} from "react-icons/fi";

import "@/components/rd/dfw-kit/kit.css";
import "@/components/rd/dfw-kit/ui.css";
import "@/components/rd/delaware/delaware.css";

import Footer from "@/app/components/Footer";
import LenisIframeGuard from "@/app/components/LenisIframeGuard";
import RelatedServices from "@/app/components/RelatedServices";
import {
  CenterHead,
  Label,
  LEAD,
  Pill,
  RowHead,
  Section,
  Strip,
  Wrap,
  cx,
} from "@/components/rd/dfw-kit/primitives";
import { BannerLoops, GRAIN } from "@/components/rd/dfw-kit/banner";
import {
  AvatarPh,
  GoogleG,
  Sparks,
  TrustLogos,
} from "@/components/rd/dfw-kit/visuals";
import { SITE_CONTACT } from "@/shared/siteConfig";
import {
  InlineRocket,
  IdeaToLaunchUi,
  LaunchDayUi,
  launchpadStepUis,
} from "./launchpadUi";
import { LP_FAQS, LP_PLANS, LP_PROBLEMS, LP_SOLUTION } from "./content";

const ServiceLeadForm = dynamic(
  () => import("@/app/components/ServiceLeadForm"),
);

/* ---------------------------------------------------------------------------
   LAUNCHPAD — redesign draft (24 Oct 2026), /services/launchpad-2 (noindex).

   The DFW-kit pattern (centred hero with an animated idea → launch visual underneath,
   then the live page's sections in the same order) with its own UIs and
   indigo + orange pillar colours (from the page's rocket artwork).

   Copy re-optimized 24 Oct 2026 (content-optimization brief): every
   heading, paragraph, list, step and FAQ rewritten around researched
   terms (small business startup package, business launch services,
   business startup services, small business website package, start a
   business online). Kept exactly: the three plans' names, prices and
   inclusions, the 7 to 14 day timeline, the YouTube video, the rocket
   image and every body link (web design, services, GBP optimization,
   local SEO, GBP verification, contact, industries, Google Ads).

   Also: the plan prices are no longer H2s (they were headings on the
   live page); the small labels sit under their headings (owner: no
   eyebrows above headings); a contact form (formType "launchpad") and the
   Google reviews widget were added. Semrush has no ranking data for this
   URL (24 Oct), so no ranking queries depend on the old heading list.
--------------------------------------------------------------------------- */

const CONTACT = "#lp-contact";
const INDIGO = "#2a1aa8";

const LINKS =
  "tw:[&_a]:font-medium tw:[&_a]:text-(--blue) tw:[&_a]:underline tw:[&_a]:decoration-(--blue)/35 tw:[&_a]:underline-offset-[3px] tw:[&_a:hover]:decoration-(--blue)";

const REVIEWS_WIDGET =
  "https://cdn.trustindex.io/loader.js?bedc2ba73f755349bf36a19f52c";

const CONTACT_TILES: {
  icon: ReactNode;
  tone: string;
  small: string;
  strong: string;
  href?: string;
  external?: boolean;
}[] = [
  {
    icon: <FiPhoneCall />,
    tone: "tw:bg-(--green) tw:text-white",
    small: "Call a launch strategist",
    strong: SITE_CONTACT.phoneDisplay,
    href: SITE_CONTACT.phoneHref,
  },
  {
    icon: <FiMail />,
    tone: "tw:bg-[#2a1aa8] tw:text-white",
    small: "Email your launch questions",
    strong: SITE_CONTACT.email,
    href: SITE_CONTACT.emailHref,
  },
  {
    icon: <FiMapPin />,
    tone: "tw:bg-[#ea4335] tw:text-white",
    small: "Our office in Dover, Delaware",
    strong: SITE_CONTACT.address,
    href: SITE_CONTACT.mapHref,
    external: true,
  },
];

/* The six launch pieces (links kept from the live page, anchors new). */
const REQUIRED: { icon: ReactNode; tone: string; text: ReactNode }[] = [
  {
    icon: <FiPenTool />,
    tone: "tw:bg-[#ede9fe] tw:text-[#2a1aa8]",
    text: "A logo and brand identity that looks established",
  },
  {
    icon: <FiMonitor />,
    tone: "tw:bg-[#ffedd5] tw:text-[#c2410c]",
    text: "A mobile-ready website built to turn visits into calls",
  },
  {
    icon: <FiMapPin />,
    tone: "tw:bg-[#e8f0fe] tw:text-[#1a73e8]",
    text: (
      <Link href="/local-seo-google-business-optimization">
        Google Business Profile setup, optimized for Maps
      </Link>
    ),
  },
  {
    icon: <FiShare2 />,
    tone: "tw:bg-[#fce7f3] tw:text-[#be185d]",
    text: "Social media profiles set up in your branding",
  },
  {
    icon: <FiTrendingUp />,
    tone: "tw:bg-[#dcfce7] tw:text-[#166534]",
    text: (
      <>
        <Link href="/services/local-seo-for-home-services">
          Local SEO groundwork
        </Link>{" "}
        so nearby customers find you
      </>
    ),
  },
  {
    icon: <FiSend />,
    tone: "tw:bg-[#e0f2fe] tw:text-[#0369a1]",
    text: "Lead capture that sends every call and form to you",
  },
];

/* Floating service icons beside the hero band: x is px from the centre,
   y is % of the band's height. */
const HERO_ICONS: {
  icon: ReactNode;
  tile: string;
  x: number;
  y: string;
  rotate: number;
  delay: string;
}[] = [
  {
    icon: <FiPenTool />,
    tile: "tw:bg-[#2a1aa8] tw:text-white",
    x: -540,
    y: "8%",
    rotate: -8,
    delay: "0s",
  },
  {
    icon: <FiMonitor />,
    tile: "tw:bg-[#f97316] tw:text-white",
    x: -470,
    y: "52%",
    rotate: 6,
    delay: "-1.6s",
  },
  {
    icon: <FiShare2 />,
    tile: "tw:bg-[#e1306c] tw:text-white",
    x: -560,
    y: "92%",
    rotate: -5,
    delay: "-3.2s",
  },
  {
    icon: <GoogleG className="tw:size-7" />,
    tile: "tw:bg-white tw:ring-1 tw:ring-(--line)",
    x: 540,
    y: "8%",
    rotate: 8,
    delay: "-0.8s",
  },
  {
    icon: <FiMapPin />,
    tile: "tw:bg-[#ea4335] tw:text-white",
    x: 470,
    y: "52%",
    rotate: -6,
    delay: "-2.4s",
  },
  {
    icon: <FiPhoneCall />,
    tile: "tw:bg-(--green) tw:text-white",
    x: 560,
    y: "92%",
    rotate: 5,
    delay: "-4s",
  },
];

/* The 3 steps (same inclusions as the live page, new wording). */
const STEPS: {
  tag: string;
  title: string;
  desc: string;
  points: ReactNode[];
  tone: { num: string; bg: string };
}[] = [
  {
    tag: "Step 1",
    title: "Tell Us What You're Opening",
    desc: "A short call about your services, your service area and the customers you want to win",
    points: [
      "Launch strategy call for your idea",
      "Audience and service area research",
      "A look at the local competition you'll face",
    ],
    tone: { num: "tw:bg-[#2a1aa8] tw:text-white", bg: "tw:bg-[#2a1aa8]" },
  },
  {
    tag: "Step 2",
    title: "We Build Your Brand and Website",
    desc: "Logo, website and Google presence designed together, so every piece matches",
    points: [
      "Logo and brand identity design",
      "A website built for calls and bookings",
      <>
        Google Business Profile setup,{" "}
        <Link href="/services/gmb-verification-help">verification support</Link>{" "}
        and optimization
      </>,
    ],
    tone: { num: "tw:bg-[#f97316] tw:text-white", bg: "tw:bg-[#f97316]" },
  },
  {
    tag: "Step 3",
    title: "You Open for Business",
    desc: "Everything goes live together, set up to attract your first customers",
    points: [
      "Local SEO setup for search visibility",
      "Every call and inquiry routed to you",
      "Launch-week support and a growth plan",
    ],
    tone: { num: "tw:bg-(--green) tw:text-white", bg: "tw:bg-(--green)" },
  },
];

/* New-owner questions (from Semrush question data, 24 Oct). */
const INSIGHTS: { icon: ReactNode; title: string; points: string[] }[] = [
  {
    icon: <FiCompass />,
    title: "What Does a New Business Need Online First?",
    points: [
      "A website is only one piece",
      "Brand, site, Google profile and lead capture work as a set",
      "Miss one and customers can't find, trust or reach you",
    ],
  },
  {
    icon: <FiTarget />,
    title: "Do I Need a Website Before Social Media?",
    points: [
      "Yes: it's the one channel you fully own",
      "Social and Google profiles both point back to it",
      "Build them together so everything matches",
    ],
  },
  {
    icon: <FiTrendingUp />,
    title: "How Does a New Business Get Found on Google Maps?",
    points: [
      "A verified Google Business Profile in the right category",
      "The same name, address and phone on every listing",
      "Reviews and local SEO, so Maps and AI answers recommend you",
    ],
  },
];

function Ticks({
  items,
  tone = "tw:bg-[#ede9fe] tw:text-[#2a1aa8]",
  compact,
  className,
}: {
  items: ReactNode[];
  tone?: string;
  compact?: boolean;
  className?: string;
}) {
  return (
    <ul className={cx("tw:grid", compact ? "tw:gap-2" : "tw:gap-3", className)}>
      {items.map((item, i) => (
        <li
          key={i}
          className={cx(
            "tw:flex tw:items-start",
            compact
              ? "tw:gap-2.5 tw:text-[15.5px]/[1.5]"
              : "tw:gap-3 tw:text-[17px]/[1.55]",
          )}
        >
          <FiCheck
            aria-hidden="true"
            className={cx(
              "tw:mt-0.5 tw:flex-none tw:rounded-full tw:[stroke-width:3]",
              compact ? "tw:size-5 tw:p-1" : "tw:size-6 tw:p-[5px]",
              tone,
            )}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* ----------------------------------------------------------------- page */

export function LaunchpadPage() {
  const steps = launchpadStepUis(STEPS);
  return (
    <>
      <main className="dk-root">
        {/* ============================================================ HERO */}
        <section
          className="tw:relative tw:isolate tw:overflow-clip tw:[background:radial-gradient(circle_at_12%_10%,rgba(42,26,168,0.12),transparent_28%),radial-gradient(circle_at_88%_8%,rgba(249,115,22,0.12),transparent_26%),linear-gradient(180deg,#fbfaff_0%,#f6f8fd_100%)] tw:pt-36 tw:pb-(--sec-y) tw:max-bsmd:pt-[120px]"
          aria-labelledby="lp-h1"
        >
          <Wrap className="tw:text-center">
            <Strip
              as="h1"
              id="lp-h1"
              size="heroWide"
              className="tw:mx-auto tw:max-w-[1000px] tw:text-balance"
            >
              {/* Owner, 25 Oct 2026: new heading for organic growth, led by
                  "new business marketing" (320/mo); no timeline in the H1. */}
              New Business Marketing Package: Brand, Website{" "}
              <InlineRocket id="lp-rocket-h1" /> and Google Profile
            </Strip>
            {/* Intro, CTAs and logos, with floating service icons on both
                sides (owner, 24 Oct). The icons sit beside this narrower band,
                never the H1, and only show from 1280 px. */}
            <div className="tw:relative">
              {HERO_ICONS.map(({ icon, tile, x, y, rotate, delay }) => (
                <span
                  key={x + y}
                  className="tw:pointer-events-none tw:absolute tw:hidden tw:min-[1280px]:block"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: y,
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  aria-hidden="true"
                >
                  <span
                    className={cx(
                      "tw:grid tw:size-[60px] tw:animate-[dk-bob_5s_ease-in-out_infinite] tw:place-items-center tw:rounded-[18px] tw:text-[25px] tw:[box-shadow:0_18px_36px_-16px_rgba(42,26,168,0.45)]",
                      tile,
                    )}
                    style={{ animationDelay: delay }}
                  >
                    {icon}
                  </span>
                </span>
              ))}
              <p
                className={cx(
                  LEAD,
                  LINKS,
                  "tw:mx-auto tw:mt-7 tw:max-w-[780px] tw:text-balance",
                )}
              >
                One team builds what a new business needs to open online: a logo
                and brand, a mobile-ready{" "}
                <Link href="/services/web-design">small business website</Link>,
                a verified Google Business Profile, social profiles and local
                SEO, with our{" "}
                <Link href="/services">digital marketing services</Link> ready
                when you want to grow.
              </p>
              <div className="tw:mt-8 tw:flex tw:flex-wrap tw:items-center tw:justify-center tw:gap-3">
                <Pill href={CONTACT} fullOnPhone>
                  Plan My Launch
                </Pill>
                <Pill href={CONTACT} tone="outline" size="md" fullOnPhone>
                  Book a Free Launch Call
                </Pill>
              </div>
              <TrustLogos
                mapHref={SITE_CONTACT.mapHref}
                size="row"
                className="tw:mt-10"
              />
            </div>
            <div className="tw:mt-16 tw:pb-6 tw:max-bssm:mt-12">
              <IdeaToLaunchUi />
            </div>
          </Wrap>
        </section>

        {/* =========================================================== VIDEO */}
        <Section labelledBy="lp-video-h">
          <Wrap>
            <div className="tw:grid tw:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)] tw:gap-6 tw:max-bslg:grid-cols-1">
              <LenisIframeGuard className="tw:relative tw:aspect-video tw:overflow-hidden tw:rounded-(--r-xl) tw:bg-(--ink)">
                <iframe
                  src="https://www.youtube.com/embed/8XloRxwawiw?si=SGxO16MpdXp7-KN5"
                  title="Zonic LaunchPad: how we launch a business online"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="tw:absolute tw:inset-0 tw:size-full tw:border-0"
                />
              </LenisIframeGuard>
              <div
                className="tw:relative tw:isolate tw:flex tw:flex-col tw:justify-between tw:gap-8 tw:overflow-hidden tw:rounded-(--r-xl) tw:px-9 tw:py-10 tw:text-white tw:max-bssm:px-6 tw:max-bssm:py-8"
                style={{ background: INDIGO }}
              >
                <span
                  className="tw:absolute tw:-right-20 tw:-bottom-24 tw:-z-1 tw:size-[300px] tw:rounded-full tw:bg-[#f97316]/45 tw:blur-3xl"
                  aria-hidden="true"
                />
                <div>
                  <Strip
                    id="lp-video-h"
                    size="card"
                    className="tw:text-balance tw:text-white"
                  >
                    Watch a Business Launch Package Come Together
                  </Strip>
                  <p className="tw:mt-5 tw:text-[17px]/[1.6] tw:text-white/75">
                    See a rough idea become a branded business with a live
                    website and a Google Business Profile, built by one team.
                  </p>
                </div>
                <Pill href={CONTACT} tone="white" arrow fullOnPhone>
                  Talk to a Launch Strategist
                </Pill>
              </div>
            </div>
          </Wrap>
        </Section>

        {/* ================================================ PROBLEM/SOLUTION */}
        {/* Owner (24 Oct, picked from three sketches): one Before / After
            card split down the middle with a rocket badge on the line, then
            the rocket image beside "Everything Required" with the six items
            as icon tiles. Copy rewritten 24 Oct. */}
        <Section labelledBy="lp-idea-h" tone="white">
          <Wrap>
            <CenterHead
              id="lp-idea-h"
              title="Business Launch Services From One Team, Not Five Vendors"
            >
              Zonic LaunchPad turns your idea into a brand, a website and a
              Google listing customers can actually find.
            </CenterHead>

            {/* Before / After */}
            <div className="tw:relative tw:grid tw:grid-cols-2 tw:overflow-hidden tw:rounded-(--r-xl) tw:ring-1 tw:ring-(--line) tw:max-bslg:grid-cols-1">
              <article className="tw:bg-[#fff5f4] tw:px-12 tw:py-11 tw:pr-16 tw:max-bsxl:px-9 tw:max-bsxl:pr-12 tw:max-bslg:px-8 tw:max-bssm:px-6 tw:max-bssm:py-8">
                <span className="tw:inline-flex tw:items-center tw:gap-2 tw:rounded-full tw:bg-white tw:px-3.5 tw:py-1.5 tw:text-[13px] tw:font-semibold tw:text-[#b8352a] tw:ring-1 tw:ring-[#fbd5d0]">
                  <FiShoppingBag aria-hidden="true" /> Before
                </span>
                <h3 className="tw:mt-5 tw:text-[clamp(24px,2.3vw,34px)] tw:leading-[1.15] tw:tracking-[-0.025em] tw:text-balance">
                  Launching Alone Means a Long To-Do List
                </h3>
                <p className="tw:mt-2 tw:text-[17px] tw:font-medium tw:text-[#b8352a]">
                  Where most new owners get stuck
                </p>
                <ul className="tw:mt-7 tw:grid tw:gap-3">
                  {LP_PROBLEMS.map((t) => (
                    <li
                      key={t}
                      className="tw:flex tw:items-start tw:gap-3 tw:rounded-[16px] tw:bg-white tw:px-4 tw:py-3.5 tw:text-[16px]/[1.5] tw:text-(--ink-2) tw:ring-1 tw:ring-[#fbe1dd]"
                    >
                      <FiAlertCircle
                        aria-hidden="true"
                        className="tw:mt-0.5 tw:size-5 tw:flex-none tw:text-[#d93025]"
                      />
                      {t}
                    </li>
                  ))}
                </ul>
              </article>

              <article
                className="tw:relative tw:isolate tw:overflow-hidden tw:px-12 tw:py-11 tw:pl-16 tw:text-white tw:max-bsxl:px-9 tw:max-bsxl:pl-12 tw:max-bslg:px-8 tw:max-bssm:px-6 tw:max-bssm:py-8"
                style={{ background: INDIGO }}
              >
                <span
                  className="tw:absolute tw:-top-28 tw:-right-20 tw:-z-1 tw:size-[340px] tw:rounded-full tw:bg-[#f97316]/40 tw:blur-3xl"
                  aria-hidden="true"
                />
                <span className="tw:inline-flex tw:items-center tw:gap-2 tw:rounded-full tw:bg-white/12 tw:px-3.5 tw:py-1.5 tw:text-[13px] tw:font-semibold tw:text-[#fdba74] tw:ring-1 tw:ring-white/15">
                  <FiCheck aria-hidden="true" /> After
                </span>
                <h3 className="tw:mt-5 tw:text-[clamp(24px,2.3vw,34px)] tw:leading-[1.15] tw:tracking-[-0.025em] tw:text-white">
                  Zonic LaunchPad™: One Business Startup Package
                </h3>
                <p className="tw:mt-2 tw:max-w-[52ch] tw:text-[17px]/[1.55] tw:text-white/75">
                  A done-for-you business setup service for owners who want to
                  open properly the first time
                </p>
                <ul className="tw:mt-7 tw:grid tw:gap-3">
                  {LP_SOLUTION.map((t) => (
                    <li
                      key={t}
                      className="tw:flex tw:items-start tw:gap-3 tw:rounded-[16px] tw:bg-white/8 tw:px-4 tw:py-3.5 tw:text-[16px]/[1.5] tw:ring-1 tw:ring-white/12"
                    >
                      <FiCheck
                        aria-hidden="true"
                        className="tw:mt-0.5 tw:size-5 tw:flex-none tw:rounded-full tw:bg-[#f97316] tw:p-1 tw:text-white tw:[stroke-width:3]"
                      />
                      {t}
                    </li>
                  ))}
                </ul>
                <Pill
                  href={CONTACT}
                  tone="white"
                  arrow
                  className="tw:mt-8"
                  fullOnPhone
                >
                  Start My Launch
                </Pill>
              </article>

              {/* Rocket badge on the dividing line */}
              <span
                className="tw:absolute tw:top-1/2 tw:left-1/2 tw:grid tw:size-[76px] tw:-translate-1/2 tw:place-items-center tw:rounded-full tw:bg-white tw:text-[38px] tw:ring-[6px] tw:ring-white/60 tw:[box-shadow:0_18px_40px_-14px_rgba(42,26,168,0.55)] tw:max-bslg:hidden"
                aria-hidden="true"
              >
                <InlineRocket id="lp-rocket-split" />
              </span>
            </div>

            {/* Rocket image + everything required */}
            <div className="tw:mt-6 tw:grid tw:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] tw:items-stretch tw:gap-6 tw:max-bslg:grid-cols-1">
              <div
                className="tw:relative tw:min-h-[380px] tw:overflow-hidden tw:rounded-(--r-xl) tw:max-bslg:aspect-square tw:max-bslg:min-h-0 tw:max-bslg:mx-auto tw:max-bslg:w-full tw:max-bslg:max-w-[520px]"
                style={{ background: "#12007f" }}
              >
                <Image
                  src="/images/launchpad-2.jpg"
                  alt="Rocket illustration for the Zonic LaunchPad business launch package"
                  fill
                  sizes="(max-width: 991px) 520px, 40vw"
                  className="tw:object-cover"
                />
              </div>
              <article className="tw:rounded-(--r-xl) tw:bg-(--panel) tw:px-10 tw:py-10 tw:max-bsxl:px-8 tw:max-bssm:px-5 tw:max-bssm:py-7">
                <h3 className="tw:text-[clamp(24px,2.3vw,34px)] tw:leading-[1.15] tw:tracking-[-0.025em] tw:text-balance">
                  What a New Business Needs to Open Online
                </h3>
                <p className="tw:mt-2 tw:text-[17px] tw:text-(--text)">
                  Six pieces, planned and built together by one team
                </p>
                <ul
                  className={cx(
                    "tw:mt-7 tw:grid tw:grid-cols-2 tw:gap-3 tw:max-bssm:grid-cols-1",
                    LINKS,
                  )}
                >
                  {REQUIRED.map((item, i) => (
                    <li
                      key={i}
                      className="tw:flex tw:items-center tw:gap-3.5 tw:rounded-[18px] tw:bg-white tw:px-4 tw:py-4 tw:text-[15.5px]/[1.45] tw:font-medium tw:text-(--ink-2)"
                    >
                      <span
                        className={cx(
                          "tw:grid tw:size-11 tw:flex-none tw:place-items-center tw:rounded-[13px] tw:text-[18px]",
                          item.tone,
                        )}
                        aria-hidden="true"
                      >
                        {item.icon}
                      </span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
                <Pill href={CONTACT} arrow className="tw:mt-8" fullOnPhone>
                  Talk Through My Launch
                </Pill>
              </article>
            </div>
          </Wrap>
        </Section>

        {/* ========================================================= PROCESS */}
        <Section labelledBy="lp-steps-h">
          <Wrap>
            <RowHead align="start">
              <div className="tw:min-w-0 tw:max-w-[820px] tw:flex-[1_1_620px]">
                <Strip
                  id="lp-steps-h"
                  className="tw:text-balance tw:bslg:text-[clamp(34px,3.5vw,52px)]"
                >
                  How Our Business Startup Services Work, Step by Step
                </Strip>
                <Label className="tw:mt-5">From first call to launch day</Label>
              </div>
              <Pill href={CONTACT}>Book My Launch Call</Pill>
            </RowHead>
            <ol className="tw:grid tw:gap-5">
              {STEPS.map((step, i) => (
                <li
                  key={step.title}
                  className="tw:grid tw:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] tw:gap-6 tw:max-bsxl:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] tw:max-bslg:grid-cols-1 tw:max-bslg:gap-3.5"
                >
                  <div className="tw:relative tw:grid tw:grid-cols-[110px_minmax(0,1fr)_auto] tw:gap-6 tw:rounded-(--r-xl) tw:bg-white tw:px-10 tw:pt-10 tw:pb-9 tw:max-bs2xl:grid-cols-[80px_minmax(0,1fr)_auto] tw:max-bssm:grid-cols-1 tw:max-bssm:gap-3.5 tw:max-bssm:px-[26px] tw:max-bssm:pt-8 tw:max-bssm:pb-7">
                    <span
                      className={cx(
                        "tw:grid tw:size-16 tw:place-items-center tw:rounded-full tw:text-xl tw:font-semibold tw:max-bssm:size-[52px] tw:max-bssm:text-[17px]",
                        step.tone.num,
                      )}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <Label>{step.tag}</Label>
                      <h3 className="tw:text-[clamp(28px,3vw,44px)] tw:leading-[1.08] tw:tracking-[-0.03em]">
                        {step.title}
                      </h3>
                      <p className={cx(LEAD, "tw:mt-4 tw:max-w-[50ch]")}>
                        {step.desc}
                      </p>
                      <p className="tw:mt-6 tw:text-[14px] tw:font-semibold tw:tracking-[0.08em] tw:text-(--muted) tw:uppercase">
                        What&apos;s included:
                      </p>
                      <Ticks
                        items={step.points}
                        className={cx("tw:mt-3 tw:text-(--ink-2)", LINKS)}
                      />
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
                      "tw:relative tw:min-h-[280px] tw:overflow-hidden tw:rounded-(--r-xl) tw:max-bssm:min-h-[250px]",
                      step.tone.bg,
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
              ))}
            </ol>
          </Wrap>
        </Section>

        {/* ======================================================= DARK BAND */}
        <Section labelledBy="lp-band-h">
          <Wrap flushOnPhone>
            <div className="tw:grid tw:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] tw:items-center tw:gap-14 tw:rounded-(--r-xl) tw:bg-(--ink) tw:p-10 tw:text-white tw:max-bslg:grid-cols-1 tw:max-bslg:gap-10 tw:max-bssm:px-[18px] tw:max-bssm:pt-[22px] tw:max-bssm:pb-7">
              <div className="tw:w-full tw:max-bslg:max-w-[520px] tw:max-bslg:justify-self-center">
                <LaunchDayUi />
              </div>
              <div>
                <Strip
                  id="lp-band-h"
                  size="card"
                  className="tw:text-balance tw:text-white"
                >
                  A Small Business Website Package With Everything Around It
                </Strip>
                <p className="tw:mt-6 tw:max-w-[56ch] tw:text-lg/[1.65] tw:text-[#b7c4dd]">
                  Your site launches with what makes it work: a verified Google
                  Business Profile, matching social profiles, local SEO
                  groundwork and a contact form that reaches you.
                </p>
                <Pill
                  href={CONTACT}
                  tone="white"
                  arrow
                  fullOnPhone
                  className="tw:mt-8"
                >
                  Get My Launch Plan
                </Pill>
              </div>
            </div>
          </Wrap>
        </Section>

        {/* ======================================================== INSIGHTS */}
        <Section labelledBy="lp-insights-h" tone="white">
          <Wrap>
            <CenterHead
              id="lp-insights-h"
              title="How to Start a Business Online and Get Found Locally"
            >
              What first-time owners ask before they open.
            </CenterHead>
            <div className="tw:grid tw:grid-cols-3 tw:gap-6 tw:max-bslg:grid-cols-1">
              {INSIGHTS.map((card, i) => (
                <article
                  key={card.title}
                  className="tw:rounded-(--r-xl) tw:bg-(--panel) tw:px-7 tw:pt-7 tw:pb-8 tw:max-bssm:px-6"
                >
                  <span
                    className={cx(
                      "tw:grid tw:size-12 tw:place-items-center tw:rounded-full tw:text-[20px]",
                      [
                        "tw:bg-[#2a1aa8] tw:text-white",
                        "tw:bg-[#f97316] tw:text-white",
                        "tw:bg-(--green) tw:text-white",
                      ][i],
                    )}
                    aria-hidden="true"
                  >
                    {card.icon}
                  </span>
                  <h3 className="tw:mt-5 tw:text-[22px]/[1.25]">
                    {card.title}
                  </h3>
                  <ul className="tw:mt-4 tw:grid tw:gap-2.5 tw:border-t tw:border-(--line) tw:pt-4">
                    {card.points.map((p) => (
                      <li
                        key={p}
                        className="tw:flex tw:items-start tw:gap-2.5 tw:text-[16.5px]/[1.6] tw:text-(--text)"
                      >
                        <FiCheck
                          aria-hidden="true"
                          className="tw:mt-1 tw:size-4 tw:flex-none tw:text-[#2a1aa8] tw:[stroke-width:3]"
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
              <div
                className="tw:relative tw:isolate tw:col-span-2 tw:flex tw:flex-col tw:justify-between tw:gap-8 tw:overflow-hidden tw:rounded-(--r-xl) tw:px-10 tw:py-10 tw:text-white tw:max-bslg:col-span-1 tw:max-bssm:px-6 tw:max-bssm:py-8"
                style={{
                  background: `linear-gradient(120deg, ${INDIGO} 0%, #4c1d95 55%, #c2410c 140%)`,
                }}
              >
                <span
                  className="tw:absolute tw:-right-10 tw:-bottom-28 tw:-z-1 tw:size-[320px] tw:rounded-full tw:bg-[#fdba74]/30 tw:blur-3xl"
                  aria-hidden="true"
                />
                <div>
                  <Strip
                    id="lp-setup-h"
                    size="card"
                    className="tw:max-w-[20ch] tw:text-balance tw:text-white"
                  >
                    Launch Now, Add SEO and Ads When You&apos;re Ready
                  </Strip>
                  <p className="tw:mt-5 tw:max-w-[56ch] tw:text-[17px]/[1.65] tw:text-white/80">
                    Start with what you need today. When you want more calls,
                    local SEO, Google Ads and AI search optimization build on
                    what we launched, month to month.
                  </p>
                </div>
                <Pill
                  href={CONTACT}
                  tone="white"
                  arrow
                  fullOnPhone
                  className="tw:self-start"
                >
                  Start My Launch
                </Pill>
              </div>
              <article className="tw:rounded-(--r-xl) tw:bg-(--ink) tw:px-7 tw:pt-7 tw:pb-8 tw:text-white tw:max-bssm:px-6">
                <span
                  className="tw:grid tw:size-12 tw:place-items-center tw:rounded-full tw:bg-white/10 tw:text-[20px] tw:text-[#fdba74]"
                  aria-hidden="true"
                >
                  <FiHelpCircle />
                </span>
                <h3 className="tw:mt-5 tw:text-[22px]/[1.25] tw:text-white">
                  Why Launch Your Business With Zonic Media?
                </h3>
                <ul className="tw:mt-4 tw:grid tw:gap-2.5 tw:border-t tw:border-white/15 tw:pt-4">
                  {[
                    "One team for your brand, website, Google profile and ads",
                    "1,500+ Google Business Profiles optimized and a 5.0 Google rating",
                    "Every piece built to get you seen, contacted and booked",
                  ].map((p) => (
                    <li
                      key={p}
                      className="tw:flex tw:items-start tw:gap-2.5 tw:text-[16.5px]/[1.6] tw:text-[#c9d4e8]"
                    >
                      <FiCheck
                        aria-hidden="true"
                        className="tw:mt-1 tw:size-4 tw:flex-none tw:text-[#fdba74] tw:[stroke-width:3]"
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </Wrap>
        </Section>

        {/* ========================================================= PRICING */}
        <Section id="pricing" labelledBy="lp-price-h">
          <Wrap>
            <div className="tw:mx-auto tw:mb-12 tw:max-w-[820px] tw:text-center">
              <Strip id="lp-price-h" className="tw:text-balance">
                Pick the Startup Branding Package That Fits Your Launch
              </Strip>
              <Label className="tw:mt-5 tw:mb-2">LaunchPad packages</Label>
              <p className={cx(LEAD, LINKS, "tw:mx-auto tw:max-w-[62ch]")}>
                Three fixed-scope packages, each taking you from idea to open
                for business. Unsure which one you need? Book a{" "}
                <Link href="/contact-us">free launch consultation</Link> and
                we&apos;ll recommend one.
              </p>
            </div>
            <div className="tw:grid tw:grid-cols-3 tw:items-stretch tw:gap-6 tw:max-bslg:grid-cols-1 tw:max-bslg:mx-auto tw:max-bslg:max-w-[560px]">
              {LP_PLANS.map((plan) => (
                <article
                  key={plan.name}
                  className={cx(
                    "tw:relative tw:isolate tw:flex tw:flex-col tw:overflow-hidden tw:rounded-(--r-xl) tw:px-8 tw:pt-8 tw:pb-8 tw:max-bssm:px-6",
                    plan.featured
                      ? "tw:text-white tw:[box-shadow:0_40px_80px_-50px_rgba(42,26,168,0.8)]"
                      : "tw:bg-white tw:text-(--ink)",
                  )}
                  style={plan.featured ? { background: INDIGO } : undefined}
                >
                  {plan.featured ? (
                    <span
                      className="tw:absolute tw:-top-24 tw:-right-16 tw:-z-1 tw:size-[260px] tw:rounded-full tw:bg-[#f97316]/45 tw:blur-3xl"
                      aria-hidden="true"
                    />
                  ) : null}
                  <span className="tw:flex tw:flex-wrap tw:items-center tw:gap-2">
                    <span
                      className={cx(
                        "tw:rounded-full tw:px-3.5 tw:py-1.5 tw:text-[13px] tw:font-semibold",
                        plan.featured
                          ? "tw:bg-white/15 tw:text-white"
                          : "tw:bg-[#ede9fe] tw:text-[#2a1aa8]",
                      )}
                    >
                      {plan.name}
                    </span>
                    {plan.featured ? (
                      <span className="tw:rounded-full tw:bg-[#f97316] tw:px-3.5 tw:py-1.5 tw:text-[13px] tw:font-semibold tw:text-white">
                        Recommended
                      </span>
                    ) : null}
                  </span>
                  <p
                    className={cx(
                      "tw:mt-7 tw:text-[14px]",
                      plan.featured ? "tw:text-white/70" : "tw:text-(--muted)",
                    )}
                  >
                    Packages from
                  </p>
                  <p className="tw:mt-1 tw:text-[54px] tw:leading-none tw:font-medium tw:tracking-[-0.04em]">
                    {plan.price}
                  </p>
                  <p
                    className={cx(
                      "tw:mt-4 tw:text-[16.5px]/[1.55]",
                      plan.featured ? "tw:text-white/80" : "tw:text-(--text)",
                    )}
                  >
                    {plan.description}
                  </p>
                  <ul
                    className={cx(
                      "tw:mt-6 tw:grid tw:gap-2.5 tw:border-t tw:pt-6",
                      plan.featured
                        ? "tw:border-white/15"
                        : "tw:border-(--line)",
                    )}
                  >
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className="tw:flex tw:items-start tw:gap-2.5 tw:text-[15.5px]/[1.5]"
                      >
                        <FiCheck
                          aria-hidden="true"
                          className={cx(
                            "tw:mt-0.5 tw:size-5 tw:flex-none tw:rounded-full tw:p-1 tw:[stroke-width:3]",
                            plan.featured
                              ? "tw:bg-[#f97316] tw:text-white"
                              : "tw:bg-[#ede9fe] tw:text-[#2a1aa8]",
                          )}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <p
                    className={cx(
                      "tw:mt-auto tw:pt-7 tw:text-[14.5px] tw:font-medium",
                      plan.featured ? "tw:text-[#fdba74]" : "tw:text-[#c2410c]",
                    )}
                  >
                    {plan.ideal}
                  </p>
                  <Pill
                    href={CONTACT}
                    tone={plan.featured ? "white" : "ink"}
                    className="tw:mt-5 tw:w-full"
                    fullOnPhone
                  >
                    {plan.cta}
                  </Pill>
                </article>
              ))}
            </div>
          </Wrap>
        </Section>

        {/* ========================================================= REVIEWS */}
        <Section labelledBy="lp-love-h" tone="white">
          <Wrap>
            <RowHead align="start">
              <div>
                <Strip id="lp-love-h">Rated 5.0 on Google by Owners</Strip>
              </div>
              <div className="tw:relative tw:pt-2">
                <span className="tw:flex tw:items-center">
                  <AvatarPh tone="a" ring="#fff" size={70} />
                  <AvatarPh tone="b" ring="#fff" size={70} />
                  <AvatarPh tone="c" ring="#fff" size={70} />
                  <AvatarPh tone="d" ring="#fff" size={70} />
                </span>
                <Sparks className="tw:absolute tw:-top-[34px] tw:-right-16 tw:w-[120px] tw:max-bsmd:hidden" />
              </div>
            </RowHead>
            <div className="tw:flex tw:min-h-[360px] tw:flex-col tw:justify-center tw:rounded-(--r-xl) tw:bg-(--panel) tw:px-6 tw:py-7 tw:max-bssm:px-3 tw:max-bssm:py-5">
              <LenisIframeGuard widgetScriptSrc={REVIEWS_WIDGET} />
            </div>
          </Wrap>
        </Section>

        {/* ============================================================= FAQ */}
        <Section labelledBy="lp-faq-h">
          <Wrap>
            <div className="tw:mx-auto tw:mb-9 tw:max-w-[880px] tw:text-center">
              <h2
                id="lp-faq-h"
                className="tw:text-[clamp(32px,4vw,58px)] tw:leading-[1.08] tw:tracking-[-0.03em] tw:text-balance"
              >
                Questions About Starting a Business With Us
              </h2>
              <Label className="tw:mt-6 tw:mb-2">LaunchPad FAQs</Label>
              <p className={cx(LEAD, "tw:mx-auto tw:max-w-[68ch]")}>
                Timelines, what each package includes, what you need to begin
                and what happens once you&apos;re live.
              </p>
            </div>
            <div className="tw:mx-auto tw:max-w-[1080px] tw:rounded-[32px] tw:bg-white tw:px-11 tw:py-2 tw:max-bsmd:px-6 tw:max-bsmd:py-1 tw:max-bssm:rounded-3xl tw:max-bssm:px-5">
              {LP_FAQS.map((item, i) => (
                <details
                  key={item.question}
                  open={i === 0}
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
        <Section id="lp-contact" labelledBy="lp-start-h">
          <Wrap flushOnPhone>
            <div className="tw:grid tw:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] tw:items-start tw:gap-12 tw:rounded-[48px] tw:bg-white tw:px-12 tw:py-14 tw:max-bslg:grid-cols-1 tw:max-bslg:gap-10 tw:max-bslg:px-10 tw:max-bssm:rounded-[28px] tw:max-bssm:px-4 tw:max-bssm:py-10">
              <div>
                <Strip id="lp-start-h" size="card" className="tw:text-balance">
                  Book a Free Call to Plan Your Business Launch
                </Strip>
                <Label className="tw:mt-6">Free launch consultation</Label>
                <p className={LEAD}>
                  Tell us what you&apos;re opening and where. We&apos;ll
                  recommend the right startup package and map out your launch
                  timeline.
                </p>
                <p className={cx(LEAD, LINKS, "tw:mt-4")}>
                  You get brand, website, Google presence and lead capture from
                  one team, plus{" "}
                  <Link href="/industries">
                    marketing know-how from 20+ industries
                  </Link>{" "}
                  to help your launch reach the right customers.
                </p>
                {/* Contact details (owner, 24 Oct: so the column isn't plain
                    white). */}
                <ul className="tw:mt-8 tw:grid tw:grid-cols-2 tw:gap-3 tw:max-bssm:grid-cols-1">
                  {CONTACT_TILES.map((t, i) => {
                    const inner = (
                      <>
                        <span
                          className={cx(
                            "tw:grid tw:size-11 tw:flex-none tw:place-items-center tw:rounded-[14px] tw:text-[18px]",
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
                      </>
                    );
                    const box =
                      "tw:flex tw:h-full tw:items-start tw:gap-3.5 tw:rounded-[20px] tw:bg-(--panel) tw:p-4 tw:transition";
                    return (
                      <li
                        key={t.small}
                        className={cx(
                          i === CONTACT_TILES.length - 1 &&
                            "tw:col-span-2 tw:max-bssm:col-span-1",
                        )}
                      >
                        {t.href ? (
                          <a
                            href={t.href}
                            className={cx(
                              box,
                              "tw:hover:-translate-y-0.5 tw:hover:bg-[#ede9fe]",
                            )}
                            {...(t.external
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {})}
                          >
                            {inner}
                          </a>
                        ) : (
                          <div className={box}>{inner}</div>
                        )}
                      </li>
                    );
                  })}
                </ul>
                <Pill href="tel:+13027269736" className="tw:mt-6" fullOnPhone>
                  <FiPhone aria-hidden="true" /> Call (302) 726-9736
                </Pill>
              </div>
              <div className="tw:w-full">
                <ServiceLeadForm
                  formType="launchpad"
                  badge="Free consultation"
                  title="Plan Your Business Launch"
                  subtitle="Share your idea and we'll reply within one business day with the package that fits."
                  submitText="Request My Free Consultation"
                  messageLabel="Tell us about your business idea"
                  messagePlaceholder="What you want to launch, where, and when"
                />
              </div>
            </div>
          </Wrap>
        </Section>

        {/* ========================================================== BANNER */}
        {/* Light gradient (owner prefers light banners): lilac → cream →
            peach, with ink text. */}
        <Section labelledBy="lp-close-h">
          <Wrap flushOnPhone>
            <div className="tw:relative tw:isolate tw:overflow-hidden tw:rounded-[44px] tw:[background:radial-gradient(55%_80%_at_100%_0%,rgba(253,186,116,0.7),transparent_62%),radial-gradient(50%_70%_at_0%_100%,rgba(196,181,253,0.85),transparent_65%),linear-gradient(105deg,#ede9fe_0%,#fff7ed_50%,#ffedd5_100%)] tw:px-10 tw:pt-[88px] tw:pb-[84px] tw:text-center tw:text-(--ink) tw:max-bssm:rounded-[28px] tw:max-bssm:px-5 tw:max-bssm:pt-16 tw:max-bssm:pb-28">
              <span
                className="tw:pointer-events-none tw:absolute tw:inset-0 tw:-z-1 tw:opacity-[0.12] tw:mix-blend-multiply"
                style={{ backgroundImage: GRAIN }}
                aria-hidden="true"
              />
              <BannerLoops
                id="lp-loop-l"
                className="tw:absolute tw:-bottom-6 tw:-left-6 tw:-z-1 tw:w-[clamp(180px,24vw,340px)] tw:max-bssm:w-[120px]"
              />
              <BannerLoops
                id="lp-loop-r"
                className="tw:absolute tw:-right-6 tw:-bottom-6 tw:-z-1 tw:w-[clamp(180px,24vw,340px)] tw:-scale-x-100 tw:max-bssm:w-[120px]"
              />
              <h2
                id="lp-close-h"
                className="tw:mx-auto tw:max-w-[960px] tw:text-[clamp(34px,4.4vw,64px)] tw:leading-[1.06] tw:tracking-[-0.035em] tw:text-balance"
              >
                Open Your Doors Online in 2 to 3 Weeks
              </h2>
              <p
                className={cx(
                  "tw:mx-auto tw:mt-6 tw:max-w-[62ch] tw:text-lg/[1.65] tw:text-(--ink-2)",
                  LINKS,
                )}
              >
                Brand, website, Google Business Profile and, with Pro Launch,{" "}
                <Link href="/services/google-ads">
                  Google Ads campaign setup
                </Link>
                , all handled by one team while you get ready to open.
              </p>
              <div className="tw:mt-9 tw:flex tw:flex-wrap tw:items-center tw:justify-center tw:gap-3">
                <Pill href={CONTACT} fullOnPhone>
                  Start My Launch
                </Pill>
                <a
                  href="tel:+13027269736"
                  className="tw:inline-flex tw:min-h-14 tw:items-center tw:justify-center tw:gap-2 tw:rounded-full tw:border-[1.5px] tw:border-(--ink)/25 tw:bg-white/60 tw:px-7 tw:text-base tw:font-medium tw:text-(--ink) tw:transition tw:duration-200 tw:hover:-translate-y-0.5 tw:hover:bg-white tw:max-bssm:w-full"
                >
                  <FiPhone aria-hidden="true" />
                  Call (302) 726-9736
                </a>
              </div>
            </div>
          </Wrap>
        </Section>
      </main>
      <RelatedServices current="/services/launchpad" />
      <Footer />
    </>
  );
}
