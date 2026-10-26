import Link from "next/link";
import dynamic from "next/dynamic";
import type { CSSProperties, ReactNode } from "react";
import {
  FiArrowRight,
  FiAward,
  FiCheck,
  FiMail,
  FiMapPin,
  FiPhone,
  FiPlus,
  FiShield,
  FiStar,
} from "react-icons/fi";
import {
  SiFacebook,
  SiGoogle,
  SiGooglemaps,
  SiInstagram,
  SiLinkedin,
  SiTrustpilot,
  SiYoutube,
} from "react-icons/si";

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
  Wrap,
  cx,
} from "@/components/rd/dfw-kit/primitives";
import { BannerLoops, GRAIN } from "@/components/rd/dfw-kit/banner";
import { PlatformHub, type HubApp } from "@/components/rd/dfw-kit/hub";
import { AboutCard } from "@/components/rd/dfw-kit/ui";
import {
  AvatarPh,
  GoogleG,
  HandArrow,
  InlineChat,
  InlinePin,
  Ph,
  RatingBadge,
  Sparks,
  TrustLogos,
} from "@/components/rd/dfw-kit/visuals";
import { Stage } from "@/components/rd/delaware/uiBits";
import { SITE_CONTACT, SITE_SOCIAL_LINKS } from "@/shared/siteConfig";
import {
  AgendaPhone,
  AiMentionsUi,
  BrowserBookUi,
  ClutchMark,
  CoverageMapUi,
  MapsListingUi,
  ReinstatementUi,
  AdsResultUi,
  SeoPillarsUi,
  aboutStepUis,
} from "./aboutUi";
import { ABOUT_FAQS } from "./content";

const ServiceLeadForm = dynamic(
  () => import("@/app/components/ServiceLeadForm"),
);

/* ---------------------------------------------------------------------------
   ABOUT PAGE — redesign draft (23 Oct 2026), /about-2 (noindex).

   The Dallas–Fort Worth kit and section rhythm, with its own hero: copy
   left and a four-card bento right (owner, 23 Oct: bigger heading, bento
   instead of the photo). Copy speaks to small and mid-size businesses, as
   the homepage does (owner).

   This is still the site's E-E-A-T page (see the live /about header):
   positive framing only (no "vs. other agencies" block), no invented
   dates, headcounts or client names, NAP visible, and only the canonical
   figures — 1,500+ profiles optimized, 900+ reinstated (the figure the
   reinstatement page uses now; the live About still says 500+), 5.0 Google
   rating.

   Keywords (Semrush US, 23–24 Oct 2026): small business marketing agency
   3,600 · local marketing agency 1,900 · small business marketing services
   1,900 · marketing agency for small business 1,600 · local digital
   marketing agency 1,000 · marketing agency delaware 210 · digital
   marketing agency in delaware 170. The homepage keeps "digital marketing
   agency (for small business)". Semrush has no ranking data for /about.

   COPY (24 Oct 2026, content-optimization brief): the hero is the owner's
   approved version and stays as is. Everything that repeated the live
   /about (office paragraph, FAQ answers, the Audit/Plan/Compound step
   names) was rewritten; hub tile names (screen-reader only) differ from
   /home2's so the two pages don't share text.
--------------------------------------------------------------------------- */

const CONTACT = "#ab-contact";
const CTA = "Book Your Free Strategy Call";

const LINKS =
  "tw:[&_a]:font-medium tw:[&_a]:text-(--blue) tw:[&_a]:underline tw:[&_a]:decoration-(--blue)/35 tw:[&_a]:underline-offset-[3px] tw:[&_a:hover]:decoration-(--blue)";
const LINKS_DARK =
  "tw:[&_a]:font-medium tw:[&_a]:text-white tw:[&_a]:underline tw:[&_a]:decoration-white/40 tw:[&_a]:underline-offset-[3px] tw:[&_a:hover]:decoration-white";

/* ----------------------------------------------------------------- copy */

type Feature = {
  label: string;
  title: string;
  body: ReactNode;
  points: { t: string; d: string }[];
  href: string;
  link: string;
  ui: ReactNode;
};

/* What we specialize in (owner, 23 Oct): every service the page offers,
   one row each (the separate six-card services section was folded in). */
const SPECIALISMS: Feature[] = [
  {
    label: "SEO",
    title: "SEO Services That Bring In Customers",
    body: (
      <>
        We grow organic traffic that turns into calls: technical fixes, a page
        for every service and area, and links from trusted local sites, with
        rankings tied to leads. Start with our{" "}
        <Link href="/services/local-seo-for-small-business">
          local SEO for small business
        </Link>
        .
      </>
    ),
    points: [
      { t: "Technical SEO", d: "Fast, crawlable, error-free." },
      { t: "Service and area pages", d: "One page per search." },
      { t: "Local links", d: "Trusted, relevant sites." },
      { t: "Lead tracking", d: "Rankings tied to calls." },
    ],
    href: "/services/seo-services",
    link: "SEO services",
    ui: <SeoPillarsUi />,
  },
  {
    label: "Google Business Profile",
    title: "Google Business Profiles That Win the Map Pack",
    body: "Your Google profile is often the first thing a customer sees. We complete every field and keep it active each week, so you show up in the Map Pack across your area: 1,500+ profiles optimized so far.",
    points: [
      { t: "Full buildout", d: "Categories, services, photos." },
      { t: "Weekly activity", d: "Posts, photos and Q&A." },
      { t: "Review growth", d: "Requests after every job." },
      { t: "Map Pack tracking", d: "Rankings checked by area." },
    ],
    href: "/local-seo-google-business-optimization",
    link: "See our profile work",
    ui: <MapsListingUi />,
  },
  {
    label: "Reinstatement",
    title: "Suspended Profiles, Back on Google",
    body: "A suspended Google profile stops the calls overnight. We audit the suspension for free, build an evidence-based appeal, and harden the profile once it is back: 900+ profiles reinstated so far.",
    points: [
      { t: "Free suspension audit", d: "The cause, found fast." },
      { t: "Documented appeals", d: "Evidence Google accepts." },
      { t: "No fix, no charge", d: "You pay for results." },
      { t: "Hardening", d: "Kept within guidelines." },
    ],
    href: "/services/gbp-reinstatement-service",
    link: "Google Business Profile reinstatement",
    ui: <ReinstatementUi />,
  },
  {
    label: "AI search",
    title: "Recommended by AI Search, Not Just Google",
    body: "More customers now ask ChatGPT, Gemini and Google AI Overviews who to hire. We structure your website and profiles so AI tools can understand, trust and recommend your business.",
    points: [
      { t: "Answer-first pages", d: "Clear answers AI can quote." },
      { t: "Schema", d: "Entity data on every page." },
      { t: "Consistent facts", d: "Same details everywhere." },
      { t: "Trusted mentions", d: "Cited by reputable sites." },
    ],
    href: "/services/ai-seo-services",
    link: "Explore AI search optimization",
    ui: <AiMentionsUi />,
  },
  {
    label: "Web design",
    title: "Websites Built to Turn Visits Into Calls",
    body: "Fast, mobile-first websites that make a small or mid-size business look established, with clear calls to action, online booking and call tracking ready on launch day.",
    points: [
      { t: "Mobile-first", d: "Designed for phones." },
      { t: "Speed", d: "Core Web Vitals passed." },
      { t: "Conversion", d: "Calls, forms and bookings." },
      { t: "Ownership", d: "Yours to edit and keep." },
    ],
    href: "/services/web-design",
    link: "Explore web design",
    ui: <BrowserBookUi />,
  },
  {
    label: "Google Ads",
    title: "Google Ads Management for Steady Local Leads",
    body: "Paid search fills the pipeline while SEO builds. We target the searches and areas that convert, review search terms every week and manage to cost per lead, with ad spend billed by Google to you.",
    points: [
      { t: "Local targeting", d: "Your service area only." },
      { t: "Weekly reviews", d: "Wasted searches blocked." },
      { t: "Cost per lead", d: "The number we manage to." },
      { t: "Your account", d: "Kept in your name." },
    ],
    href: "/services/google-ads",
    link: "Google Ads management",
    ui: <AdsResultUi />,
  },
];

/* What you can count on (owner, 23 Oct): "one team" and "budgets" moved
   here from the old feature rows. */
const PROMISES = [
  {
    title: "The people who audit it, run it",
    desc: "Your strategist plans the work and the same in-house team delivers it, with no hand-offs to juniors or subcontractors.",
  },
  {
    title: "Plans sized for your budget",
    desc: "Flat monthly plans scoped for small and mid-size budgets, with ad spend paid to Google directly.",
  },
  {
    title: "Month to month, measured in leads",
    desc: "No long contracts, just a monthly report on calls, forms and cost per lead.",
  },
];

const STEPS = [
  {
    tag: "Week 1",
    title: "Audit Your Visibility",
    desc: "We check your Google profile, rankings across your service area, website speed and the openings worth taking first.",
  },
  {
    tag: "Week 2",
    title: "Agree on the Plan",
    desc: "The work in order, with the reason for each step and a flat monthly cost agreed up front.",
  },
  {
    tag: "Weeks 3–6",
    title: "Build and Launch",
    desc: "The same team builds your profile, site, content and campaigns, with calls and forms tracked from the start.",
    chips: ["Profile", "Website", "Tracking"],
  },
  {
    tag: "Monthly",
    title: "Grow Month by Month",
    desc: "Reviews, fresh content and profile updates keep your coverage widening, so month six beats month three.",
    chips: ["Reviews", "Content", "Coverage"],
  },
];

const STEP_TONE = [
  { num: "tw:bg-(--blue) tw:text-white", bg: "tw:bg-(--blue)" },
  { num: "tw:bg-(--gold) tw:text-(--ink)", bg: "tw:bg-(--gold)" },
  { num: "tw:bg-(--green) tw:text-white", bg: "tw:bg-(--green)" },
  { num: "tw:bg-(--red) tw:text-white", bg: "tw:bg-(--red)" },
];

const social = (label: string) =>
  SITE_SOCIAL_LINKS.find((s) => s.label === label)?.href;

/* Every tile links to the real profile (owner, 23 Oct). */
const HUB_LEFT: HubApp[] = [
  {
    icon: SiGoogle,
    name: "Zonic Media reviews on Google",
    tone: "google",
    href: SITE_CONTACT.mapHref,
  },
  {
    icon: ClutchMark,
    name: "Clutch profile",
    tone: "clutch",
    href: "https://clutch.co/profile/zonic-media",
  },
  {
    icon: SiTrustpilot,
    name: "Trustpilot page",
    tone: "trustpilot",
    href: "https://www.trustpilot.com/review/zonicllc.com",
  },
  {
    icon: SiGooglemaps,
    name: "Directions to our Dover office",
    tone: "maps",
    href: SITE_CONTACT.mapHref,
  },
];
const HUB_RIGHT: HubApp[] = [
  {
    icon: SiLinkedin,
    name: "LinkedIn company page",
    tone: "linkedin",
    href: social("LinkedIn"),
  },
  {
    icon: SiFacebook,
    name: "Facebook page",
    tone: "facebook",
    href: social("Facebook"),
  },
  {
    icon: SiInstagram,
    name: "Instagram feed",
    tone: "instagram",
    href: social("Instagram"),
  },
  {
    icon: SiYoutube,
    name: "YouTube channel",
    tone: "youtube",
    href: social("YouTube"),
  },
];

const REVIEWS_WIDGET =
  "https://cdn.trustindex.io/loader.js?bedc2ba73f755349bf36a19f52c";

/* Hero background "+" marks (% of the hero box). */
const MARKS: [number, number][] = [
  [4, 20],
  [3, 62],
  [47, 8],
  [96, 14],
  [52, 92],
];

const BENTO =
  "tw:relative tw:flex tw:flex-col tw:rounded-(--r-xl) tw:p-6 tw:max-bssm:p-5";
const BIG =
  "tw:block tw:text-[clamp(38px,3.6vw,56px)] tw:leading-none tw:font-medium tw:tracking-[-0.03em]";

/* ----------------------------------------------------------------- page */

export function AboutPage() {
  const steps = aboutStepUis(STEPS);
  return (
    <>
      <main className="dk-root">
        {/* ============================================================ HERO */}
        {/* Copy left, four-card bento right (owner, 23 Oct). */}
        <section
          className="tw:relative tw:isolate tw:overflow-clip tw:[background:radial-gradient(circle_at_12%_10%,rgba(49,87,245,0.08),transparent_28%),radial-gradient(circle_at_92%_30%,rgba(110,80,247,0.07),transparent_26%),linear-gradient(180deg,#fdfdff_0%,#f6f8fd_100%)] tw:pt-36 tw:pb-(--sec-y) tw:max-bsmd:pt-[120px]"
          aria-labelledby="ab-h1"
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

          <Wrap>
            <div className="tw:grid tw:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] tw:items-center tw:gap-14 tw:max-bsxl:gap-10 tw:max-bslg:grid-cols-1 tw:max-bslg:gap-12">
              <div>
                <Strip
                  as="h1"
                  id="ab-h1"
                  className="tw:text-balance tw:bssm:text-[clamp(40px,4.7vw,72px)]"
                >
                  The Marketing Agency for Small and{" "}
                  <span className="tw:whitespace-nowrap">
                    Mid-Size Businesses
                  </span>
                </Strip>
                <p className={cx(LEAD, LINKS, "tw:mt-7 tw:max-w-[620px]")}>
                  Zonic Media is a digital marketing agency in Dover, Delaware.
                  Our in-house team helps small and mid-size businesses across
                  the US get found on Google and turn searches into calls, with
                  local SEO, Google Business Profile,{" "}
                  <Link href="/services/web-design">website design</Link> and{" "}
                  <Link href="/services/google-ads">Google Ads</Link>.
                </p>
                <div className="tw:mt-8 tw:flex tw:flex-wrap tw:items-center tw:gap-3">
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
                  className="tw:mt-10 tw:justify-start! tw:max-bslg:justify-center!"
                />
              </div>

              {/* Bento: four content cards in two staggered columns. */}
              <div className="tw:grid tw:grid-cols-2 tw:gap-5 tw:max-bssm:gap-3">
                <div className="tw:grid tw:gap-5 tw:max-bssm:gap-3">
                  <div
                    className={cx(
                      BENTO,
                      "tw:h-[300px] tw:justify-between tw:bg-(--blue) tw:text-white tw:max-bssm:h-[250px]",
                    )}
                  >
                    <span className="tw:flex tw:items-center">
                      <AvatarPh tone="a" ring="var(--blue)" />
                      <AvatarPh tone="b" ring="var(--blue)" />
                      <AvatarPh tone="c" ring="var(--blue)" />
                    </span>
                    <div>
                      <b className={BIG}>1,500+</b>
                      <p className="tw:mt-2.5 tw:text-[15.5px]/[1.45] tw:text-white/85">
                        Google Business Profiles optimized for our clients
                      </p>
                    </div>
                  </div>
                  <div
                    className={cx(
                      BENTO,
                      "tw:h-[230px] tw:justify-between tw:bg-(--gold) tw:text-(--ink) tw:max-bssm:h-[200px]",
                    )}
                  >
                    <span
                      className="tw:grid tw:size-12 tw:place-items-center tw:rounded-full tw:bg-white/60 tw:text-xl"
                      aria-hidden="true"
                    >
                      <FiShield />
                    </span>
                    <div>
                      <b className={BIG}>900+</b>
                      <p className="tw:mt-2.5 tw:text-[15.5px]/[1.45] tw:text-(--ink)/75">
                        Suspended profiles reinstated
                      </p>
                    </div>
                  </div>
                </div>
                <div className="tw:grid tw:gap-5 tw:pt-10 tw:max-bssm:gap-3 tw:max-bssm:pt-6">
                  <div
                    className={cx(
                      BENTO,
                      "tw:h-[230px] tw:justify-between tw:bg-white tw:max-bssm:h-[200px]",
                    )}
                  >
                    <span
                      className="tw:grid tw:size-12 tw:place-items-center tw:rounded-full tw:bg-(--panel)"
                      aria-hidden="true"
                    >
                      <GoogleG className="tw:size-6" />
                    </span>
                    <div>
                      <b className={BIG}>5.0</b>
                      <span
                        className="tw:mt-2.5 tw:flex tw:gap-1"
                        aria-hidden="true"
                      >
                        {[0, 1, 2, 3, 4].map((n) => (
                          <FiStar
                            key={n}
                            className="tw:size-4 tw:fill-[#f4b400] tw:text-[#f4b400]"
                          />
                        ))}
                      </span>
                      <p className="tw:mt-2 tw:text-[15.5px]/[1.45] tw:text-(--text)">
                        Average rating on Google
                      </p>
                    </div>
                  </div>
                  <div
                    className={cx(
                      BENTO,
                      "tw:h-[300px] tw:justify-between tw:bg-(--ink) tw:text-white tw:max-bssm:h-[250px]",
                    )}
                  >
                    <span
                      className="tw:grid tw:size-12 tw:place-items-center tw:rounded-full tw:bg-white/10 tw:text-[30px]"
                      aria-hidden="true"
                    >
                      <InlinePin id="ab-pin-hero" />
                    </span>
                    <div>
                      <span className="tw:block tw:text-[12px] tw:font-semibold tw:tracking-[0.12em] tw:text-white/60 tw:uppercase">
                        Head office
                      </span>
                      <b className="tw:mt-1 tw:block tw:text-[clamp(22px,2vw,28px)] tw:leading-tight tw:font-medium">
                        Dover, Delaware
                      </b>
                      <p className="tw:mt-2.5 tw:text-[15px]/[1.45] tw:text-white/75">
                        Serving small and mid-size businesses in all 50 states
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Wrap>
        </section>

        {/* =========================================================== ABOUT */}
        <Section labelledBy="ab-who-h">
          <Wrap>
            <div className="tw:grid tw:grid-cols-2 tw:items-start tw:gap-14 tw:max-bsxl:gap-10 tw:max-bslg:grid-cols-1">
              <div className="tw:relative">
                <Strip
                  id="ab-who-h"
                  className="tw:bslg:text-[clamp(34px,min(4.6vw,calc((100vw_-_256px)/19)),62px)]"
                >
                  <span>Big-Agency Skills,</span>{" "}
                  <br className="tw:max-bssm:hidden" />
                  <span>Sized for Small and</span>{" "}
                  <br className="tw:max-bssm:hidden" />
                  <span>Mid-Size Businesses.</span>
                </Strip>
                <HandArrow className="tw:absolute tw:top-[calc(100%+6px)] tw:left-[32%] tw:w-[180px] tw:max-bslg:hidden" />
              </div>
              <div>
                <Label>Who we are</Label>
                <p className={cx(LEAD, "tw:mb-6")}>
                  We are a small business marketing agency run by a senior,
                  in-house team in Dover, Delaware. Our clients are small and
                  mid-size businesses that want more calls and bookings from
                  Google, from single-location trades to multi-location firms.
                </p>
                <p className={cx(LEAD, "tw:mb-8")}>
                  You get big-agency strategy and tools without the overhead:
                  one strategist who knows your account, flat monthly plans and
                  plain-English reports on the leads your marketing brings in.
                </p>
                <Pill href="/services" tone="outline">
                  View Our Services
                </Pill>
              </div>
            </div>

            <div className="tw:relative tw:mt-[110px] tw:grid tw:grid-cols-[minmax(0,1fr)_minmax(0,2.1fr)] tw:gap-6 tw:max-bssm:mt-[84px] tw:max-bssm:grid-cols-1">
              <RatingBadge
                text="ABOUT ZONIC MEDIA • DOVER, DELAWARE •"
                className="tw:absolute tw:-top-24 tw:left-[calc(32%-96px)] tw:z-2 tw:max-bslg:-top-[75px] tw:max-bslg:left-[calc(32%-75px)] tw:max-bssm:-top-16 tw:max-bssm:right-6 tw:max-bssm:left-auto"
              />
              <div className="tw:relative tw:h-[460px] tw:overflow-hidden tw:rounded-(--r-xl) tw:max-bsxl:h-[420px] tw:max-bssm:h-auto">
                <AboutCard
                  tone="ink"
                  top={
                    <span
                      className="tw:grid tw:size-14 tw:place-items-center tw:rounded-full tw:bg-white/10 tw:text-[22px] tw:text-(--gold)"
                      aria-hidden="true"
                    >
                      <FiMapPin />
                    </span>
                  }
                  kicker="Head office"
                  title="Dover, Delaware"
                  points={[
                    "8 The Green, STE B, Dover, DE 19901",
                    "Remote-first team, US-wide clients",
                    "Small and mid-size businesses",
                    "Month to month, no lock-in",
                  ]}
                  foot={`Call ${SITE_CONTACT.phoneDisplay}`}
                />
              </div>
              <div className="tw:relative tw:h-[460px] tw:overflow-hidden tw:rounded-(--r-xl) tw:max-bsxl:h-[420px] tw:max-bssm:h-[280px]">
                <Ph
                  label="The Zonic Media team in a marketing strategy workshop"
                  ratio="16:9"
                  src="/images/home/zonic-marketing-team-workshop.jpg"
                  position="50% 40%"
                />
              </div>
            </div>
          </Wrap>
        </Section>

        {/* ===================================================== SPECIALISMS */}
        <Section labelledBy="ab-spec-h" tone="white">
          <Wrap>
            <CenterHead
              id="ab-spec-h"
              title="Six Local Marketing Services Under One Roof"
            >
              Planned together by one in-house team, so your Google profile,
              website and ads all push toward more calls.
            </CenterHead>
            {SPECIALISMS.map((f, i) => (
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

        {/* ======================================================== PROMISES */}
        <Section labelledBy="ab-count-h">
          <Wrap flushOnPhone>
            <div className="tw:grid tw:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] tw:overflow-hidden tw:rounded-(--r-xl) tw:bg-white tw:max-bslg:grid-cols-1">
              <div className="tw:px-11 tw:pt-12 tw:pb-11 tw:max-bssm:px-[22px] tw:max-bssm:pt-[30px] tw:max-bssm:pb-[26px]">
                <Strip id="ab-count-h" size="card">
                  Three Promises Behind Every Client Plan
                </Strip>
                <p
                  className={cx(
                    LEAD,
                    "tw:mt-[22px] tw:mb-[26px] tw:max-w-[54ch]",
                  )}
                >
                  One senior team, a plan sized to your budget, and reports you
                  can read in five minutes.
                </p>
                <ol className="tw:grid tw:gap-2">
                  {PROMISES.map((card, i) => (
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
                        className="tw:grid tw:size-10 tw:place-items-center tw:rounded-full tw:border-[1.5px] tw:border-(--line) tw:bg-white tw:text-[15px] tw:font-semibold tw:text-(--blue-dark)"
                        style={
                          {
                            animation: "dk-num-on 9s ease infinite both",
                            animationDelay: `${i * 3}s`,
                          } as CSSProperties
                        }
                        aria-hidden="true"
                      >
                        {i + 1}
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
              <div className="tw:grid tw:min-h-[560px] tw:place-items-center tw:[background:radial-gradient(60%_50%_at_30%_20%,rgba(49,87,245,0.16),transparent_70%),radial-gradient(60%_50%_at_80%_85%,rgba(253,193,21,0.18),transparent_70%),#f2f5fd] tw:px-6 tw:py-11 tw:max-bslg:min-h-0 tw:max-bslg:px-5 tw:max-bslg:py-9">
                <AgendaPhone />
              </div>
            </div>
          </Wrap>
        </Section>

        {/* ========================================================= PROCESS */}
        <Section labelledBy="ab-steps-h">
          <Wrap>
            <RowHead align="start">
              <div className="tw:max-w-[860px]">
                <Strip id="ab-steps-h" className="tw:text-balance">
                  How We Work, From Audit to Growth
                </Strip>
              </div>
              <Pill href={CONTACT}>{CTA}</Pill>
            </RowHead>
            <ol className="tw:grid tw:gap-5">
              {STEPS.map((step, i) => {
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
                        <FiArrowRight aria-hidden="true" />
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
        <Section labelledBy="ab-where-h">
          <Wrap flushOnPhone>
            <div className="tw:grid tw:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] tw:items-center tw:gap-14 tw:rounded-(--r-xl) tw:bg-(--ink) tw:p-10 tw:text-white tw:max-bslg:grid-cols-1 tw:max-bslg:gap-10 tw:max-bssm:px-[18px] tw:max-bssm:pt-[22px] tw:max-bssm:pb-7">
              <div className="tw:w-full tw:max-bslg:max-w-[520px] tw:max-bslg:justify-self-center">
                <CoverageMapUi
                  facts={[
                    { strong: "Dover, DE", label: "Head office" },
                    { strong: "5", label: "Local market pages" },
                    { strong: "50", label: "States served" },
                  ]}
                />
              </div>
              <div>
                <Strip id="ab-where-h" size="card" className="tw:text-white">
                  Based in Dover, Working Across the US
                </Strip>
                <p className="tw:mt-6 tw:max-w-[56ch] tw:text-lg/[1.65] tw:text-[#b7c4dd]">
                  You&apos;ll find our head office on The Green in Dover,
                  Delaware. Because the team works remote-first, we take on
                  small and mid-size businesses in every US state, with clients
                  as far away as Canada, the UK and Australia.
                </p>
                <p
                  className={cx(
                    LINKS_DARK,
                    "tw:mt-6 tw:max-w-[56ch] tw:text-lg/[1.65] tw:text-[#b7c4dd]",
                  )}
                >
                  Local market pages:{" "}
                  <Link href="/services/delaware/digital-marketing">
                    Delaware
                  </Link>
                  ,{" "}
                  <Link href="/services/wilmington/digital-marketing">
                    Wilmington
                  </Link>
                  ,{" "}
                  <Link href="/services/philadelphia/digital-marketing">
                    Philadelphia
                  </Link>
                  ,{" "}
                  <Link href="/services/nyc/digital-marketing">
                    New York City
                  </Link>{" "}
                  and{" "}
                  <Link href="/services/dallas-fort-worth/digital-marketing-agency">
                    Dallas–Fort Worth
                  </Link>
                  .
                </p>
                <Pill
                  href={SITE_CONTACT.mapHref}
                  tone="white"
                  arrow
                  fullOnPhone
                  className="tw:mt-8"
                >
                  Find Us on Google Maps
                </Pill>
              </div>
            </div>
          </Wrap>
        </Section>

        {/* ============================================================= HUB */}
        <Section labelledBy="ab-found-h" tone="white">
          <Wrap>
            <CenterHead id="ab-found-h" title="Check Us Out Anywhere">
              See what clients say on Google, Clutch and Trustpilot, get
              directions to our Dover office, and follow our work on LinkedIn,
              Facebook, Instagram and YouTube.
            </CenterHead>
            <PlatformHub
              left={HUB_LEFT}
              right={HUB_RIGHT}
              leftLabel="Reviews and listings"
              rightLabel="Social profiles"
              icon={<FiAward aria-hidden="true" />}
              title="Find Zonic Media"
              sub="the same details on every profile"
            />
          </Wrap>
        </Section>

        {/* ========================================================= REVIEWS */}
        <Section labelledBy="ab-love-h">
          <Wrap>
            <RowHead align="start">
              <div>
                <Strip id="ab-love-h">The Word From Our Clients</Strip>
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

        {/* ============================================================= FAQ */}
        <Section labelledBy="ab-faq-h">
          <Wrap>
            <div className="tw:mx-auto tw:mb-9 tw:max-w-[860px] tw:text-center">
              <h2
                id="ab-faq-h"
                className="tw:text-[clamp(32px,4vw,58px)] tw:leading-[1.08] tw:tracking-[-0.03em] tw:text-balance"
              >
                Questions About Zonic Media
              </h2>
              <p className={cx(LEAD, "tw:mx-auto tw:mt-5 tw:max-w-[64ch]")}>
                Who hires us, where we work, what we offer and how we report
                results.
              </p>
            </div>
            <div className="tw:mx-auto tw:max-w-[1080px] tw:rounded-[32px] tw:bg-white tw:px-11 tw:py-2 tw:max-bsmd:px-6 tw:max-bsmd:py-1 tw:max-bssm:rounded-3xl tw:max-bssm:px-5">
              {ABOUT_FAQS.map((item) => (
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
        <Section id="ab-contact" labelledBy="ab-contact-h">
          <Wrap flushOnPhone>
            <div className="tw:relative tw:overflow-hidden tw:rounded-[48px] tw:bg-white tw:px-12 tw:pt-[60px] tw:pb-11 tw:text-center tw:max-bslg:px-10 tw:max-bslg:pt-16 tw:max-bslg:pb-10 tw:max-bssm:rounded-[28px] tw:max-bssm:px-4 tw:max-bssm:pt-12 tw:max-bssm:pb-4">
              <svg
                viewBox="0 0 120 90"
                className="tw:absolute tw:top-[22%] tw:left-[5%] tw:w-[120px] tw:-rotate-[14deg] tw:drop-shadow-[0_18px_18px_rgba(28,79,196,0.25)] tw:max-bsxl:left-[3%] tw:max-bsxl:w-[92px] tw:max-bslg:hidden"
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
                className="tw:absolute tw:top-[20%] tw:right-[6%] tw:text-[130px] tw:leading-none tw:max-bsxl:right-[4%] tw:max-bsxl:text-[100px] tw:max-bslg:hidden"
                aria-hidden="true"
              >
                <InlinePin id="ab-pin-contact" />
              </span>
              <h2
                id="ab-contact-h"
                className="tw:mx-auto tw:max-w-[20ch] tw:text-[clamp(34px,4.6vw,68px)] tw:leading-[1.08] tw:tracking-[-0.035em]"
              >
                Let&apos;s Talk <InlineChat id="ab-chat-contact" /> About Your
                Growth
              </h2>
              <p
                className={cx(LEAD, "tw:mx-auto tw:mt-[26px] tw:max-w-[640px]")}
              >
                Tell us about your business and what you want more of.
                We&apos;ll come back with an honest view of where the fastest
                wins are and a flat-priced plan.
              </p>
              <div className="tw:mt-7 tw:flex tw:flex-wrap tw:justify-center tw:gap-3">
                <Pill href={SITE_CONTACT.phoneHref} size="md" fullOnPhone>
                  <FiPhone aria-hidden="true" className="tw:size-[17px]" />
                  {SITE_CONTACT.phoneDisplay}
                </Pill>
                <Pill
                  href={SITE_CONTACT.emailHref}
                  tone="outline"
                  size="md"
                  fullOnPhone
                >
                  <FiMail aria-hidden="true" className="tw:size-[17px]" />
                  {SITE_CONTACT.email}
                </Pill>
                {/* Office address beside phone and email (owner, 24 Oct:
                    every contact block lists all three). Outline-pill look;
                    the Maps link opens in a new tab. */}
                <a
                  href={SITE_CONTACT.mapHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tw:inline-flex tw:min-h-14 tw:items-center tw:justify-center tw:gap-[9px] tw:rounded-full tw:border-[1.5px] tw:border-(--ink) tw:px-7 tw:py-3 tw:text-center tw:text-base tw:font-medium tw:text-(--ink) tw:transition tw:duration-200 tw:hover:-translate-y-0.5 tw:hover:bg-(--ink) tw:hover:text-white tw:max-bssm:w-full"
                >
                  <FiMapPin
                    aria-hidden="true"
                    className="tw:size-[17px] tw:flex-none"
                  />
                  8 The Green, STE B, Dover, DE 19901
                </a>
              </div>
              <div className="tw:mx-auto tw:mt-[34px] tw:max-w-[760px] tw:text-left">
                <ServiceLeadForm
                  formType="about-page"
                  badge="Free Strategy Call"
                  title="Book a free strategy call"
                  subtitle="No contracts, no pressure — just an honest conversation about where your business can grow next."
                  submitText="Request My Strategy Call"
                  messageLabel="Tell us about your business"
                  messagePlaceholder="Your business, the area you serve, and what you'd like more of"
                  defaultServices={["Local SEO"]}
                />
              </div>
            </div>
          </Wrap>
        </Section>

        {/* ========================================================== BANNER */}
        {/* Light take on the /home2 blue → violet → pink (owner, 23 Oct:
            light colours, related to the original), with ink text. */}
        <Section labelledBy="ab-close-h">
          <Wrap flushOnPhone>
            <div className="tw:relative tw:isolate tw:overflow-hidden tw:rounded-[44px] tw:[background:radial-gradient(60%_80%_at_100%_0%,rgba(147,197,253,0.75),transparent_62%),radial-gradient(55%_70%_at_75%_100%,rgba(249,168,212,0.7),transparent_65%),linear-gradient(105deg,#c7d2fe_0%,#d4c9fd_32%,#e9c8f7_64%,#fbd3e9_100%)] tw:px-10 tw:pt-[88px] tw:pb-[84px] tw:text-center tw:text-(--ink) tw:max-bssm:rounded-[28px] tw:max-bssm:px-5 tw:max-bssm:pt-16 tw:max-bssm:pb-28">
              <span
                className="tw:pointer-events-none tw:absolute tw:inset-0 tw:-z-1 tw:opacity-[0.12] tw:mix-blend-multiply"
                style={{ backgroundImage: GRAIN }}
                aria-hidden="true"
              />
              <BannerLoops
                id="ab-loop-l"
                className="tw:absolute tw:-bottom-6 tw:-left-6 tw:-z-1 tw:w-[clamp(180px,24vw,340px)] tw:max-bssm:w-[120px]"
              />
              <BannerLoops
                id="ab-loop-r"
                className="tw:absolute tw:-right-6 tw:-bottom-6 tw:-z-1 tw:w-[clamp(180px,24vw,340px)] tw:-scale-x-100 tw:max-bssm:w-[120px]"
              />
              <h2
                id="ab-close-h"
                className="tw:mx-auto tw:max-w-[16ch] tw:text-[clamp(34px,5vw,74px)] tw:leading-[1.06] tw:tracking-[-0.035em] tw:text-(--ink) tw:text-balance"
              >
                Make Your Business the Obvious Local Choice
              </h2>
              <p className="tw:mx-auto tw:mt-6 tw:max-w-[60ch] tw:text-lg/[1.65] tw:text-(--ink-2)">
                Book a free strategy call. We&apos;ll review how customers find
                you today, from your Google profile to your website, and tell
                you honestly where the fastest wins are.
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
                  "Free, no obligation",
                  "Month to month",
                  "In-house team",
                  "Based in Dover, DE",
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
