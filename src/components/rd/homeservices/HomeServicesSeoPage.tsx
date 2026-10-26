import Link from "next/link";
import dynamic from "next/dynamic";
import type { CSSProperties, ReactNode } from "react";
import {
  FiArrowRight,
  FiAward,
  FiBarChart2,
  FiCalendar,
  FiClipboard,
  FiCpu,
  FiEdit3,
  FiHome,
  FiLayers,
  FiMail,
  FiMapPin,
  FiPhone,
  FiPhoneCall,
  FiPlus,
  FiSearch,
  FiShield,
  FiStar,
  FiTool,
  FiTrendingUp,
  FiUser,
  FiUserCheck,
  FiZap,
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
import { Stage, run } from "@/components/rd/delaware/uiBits";
import { SITE_CONTACT } from "@/shared/siteConfig";
import {
  CallLogUi,
  CallsMini,
  GrowthMini,
  MapsAppPhone,
  InlineHousePin,
  JobsMini,
  RankMini,
  RankScanUi,
  WhyChoosePanels,
} from "./homeServicesUi";
import {
  CHOOSE_CARDS,
  ESSENTIAL_CARDS,
  HS_FAQS,
  INDUSTRY_GROUPS,
  MARQUEE,
  PRO_CARDS,
  WHY_ITEMS,
} from "./content";

const ServiceLeadForm = dynamic(
  () => import("@/app/components/ServiceLeadForm"),
);

/* ---------------------------------------------------------------------------
   LOCAL SEO FOR HOME SERVICES — redesign draft (24 Oct 2026),
   /services/local-seo-for-home-services-2 (noindex).

   The site's top page for clicks and impressions. Layout, sections, the
   13 H2s (same order), the 11 FAQs, every internal link, both lead forms
   and the JSON-LD blocks follow the live page. The COPY was re-optimized
   on 24 Oct 2026 (docs/content-optimization-brief.md, "Special care"):
   fresh, research-led wording, with the exact phrases the live URL ranks
   for kept in the title, the H1 and the H2s / FAQ questions that carry
   them (see ./content.ts). New: the DFW-kit layout, the rank-scan hero,
   card visuals, the homeowner journey, the call log and the metrics
   board, a Google reviews widget, labels under their headings (owner: no
   eyebrows) and a phone / email / address list in the audit block.
--------------------------------------------------------------------------- */

const FORM_ID = "local-seo-home-top";

/* Heading rows with long H2s (owner, 24 Oct): two lines, with clear space
   before the text beside them. */
const ROW_LEFT = "tw:min-w-0 tw:max-w-[820px] tw:flex-[1_1_620px]";
const ROW_RIGHT =
  "tw:max-w-[440px] tw:flex-[0_1_440px] tw:bslg:ml-10 tw:bslg:pt-2";
const LONG_H = "tw:text-balance tw:bslg:text-[clamp(34px,3.5vw,52px)]";
const AUDIT = `#${FORM_ID}`;

const LINKS =
  "tw:[&_a]:font-medium tw:[&_a]:text-(--blue) tw:[&_a]:underline tw:[&_a]:decoration-(--blue)/35 tw:[&_a]:underline-offset-[3px] tw:[&_a:hover]:decoration-(--blue)";

const FORM_PROPS = {
  formType: "local-seo-home-services",
  badge: "Free Map Pack Check",
  title: "See Where You Rank on Google Maps",
  subtitle: "A local SEO strategist replies within one business day.",
  submitText: "Request My Free Audit",
  defaultServices: ["Local SEO"],
  messageLabel: "Your services and towns",
  messagePlaceholder: "Which jobs do you want more of, and in which towns?",
};

/* Pillar colours for this page: orange (the trades), teal, blue, ink. */
const ESSENTIAL_UI: { icon: ReactNode; tone: string; ui: ReactNode }[] = [
  {
    icon: <FiPhoneCall />,
    tone: "tw:bg-[#ea580c] tw:text-white",
    ui: <CallsMini />,
  },
  {
    icon: <FiMapPin />,
    tone: "tw:bg-(--blue) tw:text-white",
    ui: <RankMini />,
  },
  {
    icon: <FiCalendar />,
    tone: "tw:bg-(--gold) tw:text-(--ink)",
    ui: <JobsMini />,
  },
  {
    icon: <FiTrendingUp />,
    tone: "tw:bg-[#0d9488] tw:text-white",
    ui: <GrowthMini />,
  },
];

const PRO_ICONS: { icon: ReactNode; tone: string }[] = [
  { icon: <FiSearch />, tone: "tw:bg-[#fff1e6] tw:text-[#c2410c]" },
  { icon: <FiUserCheck />, tone: "tw:bg-(--blue-soft) tw:text-(--blue)" },
  { icon: <FiAward />, tone: "tw:bg-[#ccfbf1] tw:text-[#0f766e]" },
  { icon: <FiEdit3 />, tone: "tw:bg-(--gold-soft) tw:text-[#8a6400]" },
  { icon: <FiCpu />, tone: "tw:bg-[#f3e8ff] tw:text-[#6b21a8]" },
];

const INDUSTRY_ICONS: { icon: ReactNode; tone: string }[] = [
  { icon: <FiHome />, tone: "tw:bg-[#ea580c] tw:text-white" },
  { icon: <FiTool />, tone: "tw:bg-(--blue) tw:text-white" },
  { icon: <FiZap />, tone: "tw:bg-[#0d9488] tw:text-white" },
  { icon: <FiShield />, tone: "tw:bg-(--ink) tw:text-white" },
];

const CHOOSE_ICONS = [
  <FiTool key="t" />,
  <FiBarChart2 key="b" />,
  <FiClipboard key="c" />,
  <FiLayers key="l" />,
];

/* Verified sitewide figures only. */
const TRUST: { icon: ReactNode; text: string }[] = [
  { icon: <FiStar />, text: "5.0 Google Rating" },
  { icon: <FiMapPin />, text: "1,500+ Google Business Profiles Optimized" },
  { icon: <FiShield />, text: "900+ Suspended Profiles Reinstated" },
  { icon: <FiAward />, text: "20+ Industries Served" },
];

/* Audit block contact list (brief rule 9: phone, email and address on the
   left). */
const CONTACT: {
  icon: ReactNode;
  label: string;
  text: string;
  href: string;
  external?: boolean;
}[] = [
  {
    icon: <FiPhone />,
    label: "Call",
    text: SITE_CONTACT.phoneDisplay,
    href: SITE_CONTACT.phoneHref,
  },
  {
    icon: <FiMail />,
    label: "Email",
    text: SITE_CONTACT.email,
    href: SITE_CONTACT.emailHref,
  },
  {
    icon: <FiMapPin />,
    label: "Office",
    text: SITE_CONTACT.address,
    href: SITE_CONTACT.mapHref,
    external: true,
  },
];

/* Floating icons on the "Trusted by…" banner: the trades, the call, the
   Map Pack pin, reviews and Google. */
const BANNER_ICONS: {
  icon: ReactNode;
  tile: string;
  pos: string;
  delay: string;
}[] = [
  {
    icon: <FiHome />,
    tile: "tw:bg-[#ea580c] tw:text-white",
    pos: "tw:top-8 tw:left-[9%] tw:-rotate-[8deg]",
    delay: "0s",
  },
  {
    icon: <FiTool />,
    tile: "tw:bg-(--blue) tw:text-white",
    pos: "tw:top-[46%] tw:left-[3%] tw:rotate-[10deg]",
    delay: "-1.5s",
  },
  {
    icon: <FiPhoneCall />,
    tile: "tw:bg-(--green) tw:text-white",
    pos: "tw:bottom-8 tw:left-[16%] tw:rotate-[6deg]",
    delay: "-3s",
  },
  {
    icon: <FiMapPin />,
    tile: "tw:bg-[#ea4335] tw:text-white",
    pos: "tw:top-8 tw:right-[10%] tw:rotate-[8deg]",
    delay: "-0.8s",
  },
  {
    icon: <GoogleG className="tw:size-7" />,
    tile: "tw:bg-white",
    pos: "tw:top-[44%] tw:right-[3%] tw:-rotate-[6deg]",
    delay: "-2.2s",
  },
  {
    icon: <FiStar className="tw:fill-current" />,
    tile: "tw:bg-(--gold) tw:text-(--ink)",
    pos: "tw:right-[16%] tw:bottom-8 tw:-rotate-[10deg]",
    delay: "-3.6s",
  },
];

const REVIEWS_WIDGET =
  "https://cdn.trustindex.io/loader.js?bedc2ba73f755349bf36a19f52c";

/* Hero background "+" marks (% of the hero box). */
const MARKS: [number, number][] = [
  [5, 13],
  [12, 30],
  [94, 11],
  [88, 27],
  [27, 6],
  [73, 5],
];

/** A card from the page's card grids (copy in ./content.ts). */
function CopyCard({
  icon,
  tone,
  title,
  desc,
  bg = "tw:bg-white",
  children,
}: {
  icon: ReactNode;
  tone: string;
  title: string;
  desc: string;
  bg?: string;
  children?: ReactNode;
}) {
  return (
    <article
      className={cx(
        "tw:flex tw:flex-col tw:rounded-(--r-xl) tw:px-7 tw:pt-7 tw:pb-7 tw:max-bssm:px-6",
        bg,
      )}
    >
      <span
        className={cx(
          "tw:mb-[22px] tw:grid tw:size-[56px] tw:place-items-center tw:rounded-full tw:text-[22px]",
          tone,
        )}
        aria-hidden="true"
      >
        {icon}
      </span>
      <h3 className="tw:text-[23px]/[1.2] tw:max-bssm:text-[21px]">{title}</h3>
      <p className="tw:mt-3 tw:text-[17px]/[1.65] tw:text-(--text)">{desc}</p>
      {children ? <div className="tw:mt-auto">{children}</div> : null}
    </article>
  );
}

/* ----------------------------------------------------------------- page */

export function HomeServicesSeoPage() {
  return (
    <>
      <main className="dk-root">
        {/* ============================================================ HERO */}
        <section
          className="tw:relative tw:isolate tw:overflow-clip tw:[background:radial-gradient(circle_at_14%_10%,rgba(234,88,12,0.11),transparent_26%),radial-gradient(circle_at_86%_8%,rgba(13,148,136,0.09),transparent_24%),linear-gradient(180deg,#fffaf5_0%,#f6f8fd_100%)] tw:pt-36 tw:pb-(--sec-y) tw:max-bsmd:pt-[120px]"
          aria-labelledby="hs-h1"
        >
          <span
            className="tw:pointer-events-none tw:absolute tw:inset-0 tw:-z-1 tw:max-bssm:hidden"
            aria-hidden="true"
          >
            {MARKS.map(([x, y], i) => (
              <i
                key={`${x}-${y}`}
                className={cx(
                  "tw:absolute tw:before:absolute tw:before:top-1/2 tw:before:left-1/2 tw:before:h-[1.5px] tw:before:w-full tw:before:-translate-1/2 tw:before:rounded-[1px] tw:before:bg-[#ea580c] tw:before:content-[''] tw:after:absolute tw:after:top-1/2 tw:after:left-1/2 tw:after:h-[1.5px] tw:after:w-full tw:after:-translate-1/2 tw:after:rotate-90 tw:after:rounded-[1px] tw:after:bg-[#ea580c] tw:after:content-['']",
                  i % 2
                    ? "tw:size-3.5 tw:opacity-35"
                    : "tw:size-2.5 tw:opacity-25",
                )}
                style={{ left: `${x}%`, top: `${y}%` }}
              />
            ))}
          </span>

          <Wrap className="tw:text-center">
            <Strip
              as="h1"
              id="hs-h1"
              size="heroWide"
              className="tw:mx-auto tw:max-w-[1080px] tw:text-balance"
            >
              Local SEO <InlineHousePin id="hs-house-h1" /> for Home Service
              Businesses: More Calls, More Booked Jobs
            </Strip>
            <p
              className={cx(
                LEAD,
                "tw:mx-auto tw:mt-7 tw:max-w-[880px] tw:text-balance",
              )}
            >
              Our home services SEO puts plumbers, HVAC techs, roofers,
              electricians and other trades in the Google Map Pack, the top
              organic results and AI answers. We tune your Google Business
              Profile, reviews, service-area pages and local keywords so nearby
              searches become calls you can book.
            </p>
            <div className="tw:mt-8 tw:flex tw:flex-wrap tw:items-center tw:justify-center tw:gap-3">
              <Pill href={SITE_CONTACT.phoneHref} fullOnPhone>
                <FiPhone aria-hidden="true" />
                {SITE_CONTACT.phoneDisplay}
              </Pill>
              <Pill href={AUDIT} tone="outline" size="md" fullOnPhone>
                <FiUser aria-hidden="true" />
                Book a Free Local SEO Audit
              </Pill>
            </div>
            <TrustLogos
              mapHref={SITE_CONTACT.mapHref}
              size="row"
              className="tw:mt-10"
            />
          </Wrap>

          {/* Rank scan (left) and the audit form (right, as on the live
              page's hero; first on tablets and phones so the form stays
              near the top). */}
          <Wrap>
            <div className="tw:mx-auto tw:mt-14 tw:grid tw:max-w-[1180px] tw:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] tw:items-stretch tw:gap-6 tw:max-bslg:grid-cols-1 tw:max-bssm:mt-10">
              <RankScanUi />
              <div
                id={FORM_ID}
                className="tw:scroll-mt-28 tw:max-bslg:order-first"
              >
                <Label>Your Map Pack rank in every town you serve</Label>
                <ServiceLeadForm {...FORM_PROPS} />
              </div>
            </div>
          </Wrap>
        </section>

        {/* ========================================================= MARQUEE */}
        <div
          className="tw:overflow-hidden tw:border-y tw:border-(--line) tw:bg-white tw:py-5"
          aria-label="Home service businesses we work with"
        >
          <div
            className="tw:flex tw:w-max tw:gap-10"
            style={run("de-marquee", 60, "linear")}
          >
            {[0, 1].map((copy) => (
              <ul
                key={copy}
                className="tw:flex tw:shrink-0 tw:items-center tw:gap-10 tw:text-[18px] tw:font-medium tw:text-(--ink-2)"
                aria-hidden={copy === 1 ? "true" : undefined}
              >
                {MARQUEE.map((m) => (
                  <li key={m} className="tw:flex tw:items-center tw:gap-10">
                    {m}
                    <FiStar
                      aria-hidden="true"
                      className="tw:size-4 tw:fill-[#ea580c] tw:text-[#ea580c]"
                    />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* ======================================================= ESSENTIAL */}
        <Section labelledBy="hs-why-h">
          <Wrap>
            <RowHead align="start">
              <div className={ROW_LEFT}>
                <Strip id="hs-why-h" className={LONG_H}>
                  Organic Search for Home Service Businesses Decides Who Gets
                  the Call
                </Strip>
              </div>
              <div className={ROW_RIGHT}>
                <Label>Where the jobs start</Label>
                <p className={cx(LEAD, LINKS)}>
                  Homeowners rarely look past the first few names on Google
                  Search, Maps or an AI answer. If yours isn&apos;t there, the
                  job goes to a crew down the road. Careful{" "}
                  <Link href="/local-seo-google-business-optimization">
                    Google Business Profile optimization
                  </Link>{" "}
                  puts you on that short list for each job and town on your
                  list.
                </p>
              </div>
            </RowHead>
            <div className="tw:grid tw:grid-cols-3 tw:gap-6 tw:max-bslg:grid-cols-2 tw:max-bssm:grid-cols-1 tw:max-bssm:gap-4">
              {ESSENTIAL_CARDS.slice(0, 3).map((card, i) => (
                <CopyCard
                  key={card.title}
                  icon={ESSENTIAL_UI[i].icon}
                  tone={ESSENTIAL_UI[i].tone}
                  title={card.title}
                  desc={card.desc}
                >
                  {ESSENTIAL_UI[i].ui}
                </CopyCard>
              ))}
              {/* Content centred in the box (owner, 25 Oct). */}
              <div className="tw:relative tw:isolate tw:col-span-2 tw:flex tw:flex-col tw:items-center tw:justify-center tw:gap-8 tw:overflow-hidden tw:text-center tw:rounded-(--r-xl) tw:bg-[#ea580c] tw:px-10 tw:py-10 tw:text-white tw:max-bslg:col-span-2 tw:max-bssm:col-span-1 tw:max-bssm:px-6 tw:max-bssm:py-8">
                <span
                  className="tw:absolute tw:-top-24 tw:-right-20 tw:-z-1 tw:size-[320px] tw:rounded-full tw:bg-white/10"
                  aria-hidden="true"
                />
                <Strip
                  id="hs-found-h"
                  size="card"
                  className="tw:text-balance tw:text-white"
                >
                  First on Google Maps, First on the Job
                </Strip>
                <div className="tw:flex tw:flex-wrap tw:justify-center tw:gap-3">
                  <Pill href={AUDIT} tone="white" fullOnPhone>
                    <FiUser aria-hidden="true" />
                    Book a Free Local SEO Audit
                  </Pill>
                  <Pill href="tel:+13027269736" tone="ink" fullOnPhone>
                    <FiPhone aria-hidden="true" />
                    Call: (302) 726-9736
                  </Pill>
                </div>
              </div>
              <CopyCard
                icon={ESSENTIAL_UI[3].icon}
                tone={ESSENTIAL_UI[3].tone}
                title={ESSENTIAL_CARDS[3].title}
                desc={ESSENTIAL_CARDS[3].desc}
              >
                {ESSENTIAL_UI[3].ui}
              </CopyCard>
            </div>
          </Wrap>
        </Section>

        {/* ============================================ WHY A LOCAL SEO COMPANY */}
        <Section labelledBy="hs-need-h">
          <Wrap>
            <div className="tw:mx-auto tw:mb-10 tw:max-w-[1000px] tw:text-center tw:max-bssm:mb-8">
              <Strip id="hs-need-h" className="tw:text-balance">
                Why Contractors Hire a Home Services SEO Company
              </Strip>
              <p
                className={cx(LEAD, "tw:mt-5 tw:font-medium tw:text-[#c2410c]")}
              >
                Six ways local search pays off for your trade
              </p>
            </div>
          </Wrap>
          <Wrap flushOnPhone>
            <div className="tw:grid tw:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] tw:items-center tw:overflow-hidden tw:rounded-(--r-xl) tw:bg-white tw:max-bslg:grid-cols-1">
              <div className="tw:grid tw:h-full tw:place-items-center tw:[background:radial-gradient(60%_50%_at_25%_20%,rgba(234,88,12,0.16),transparent_70%),radial-gradient(60%_50%_at_80%_85%,rgba(13,148,136,0.16),transparent_70%),#f6f7fb] tw:px-8 tw:py-10 tw:max-bslg:order-2 tw:max-bssm:px-3 tw:max-bssm:py-6">
                <MapsAppPhone />
              </div>
              <div className="tw:px-11 tw:py-10 tw:max-bssm:px-[22px] tw:max-bssm:py-6">
                {WHY_ITEMS.map((item, i) => (
                  <details
                    key={item.title}
                    name="hs-why"
                    open={i === 0}
                    className="tw:group tw:border-t tw:border-(--line) tw:first:border-t-0"
                  >
                    <summary className="tw:flex tw:cursor-pointer tw:items-center tw:justify-between tw:gap-5 tw:py-5 tw:text-(--ink)">
                      <h3 className="tw:text-[20px]/[1.35] tw:font-medium tw:tracking-[-0.01em] tw:max-bsmd:text-[17px]">
                        {item.title}
                      </h3>
                      <FiPlus
                        aria-hidden="true"
                        className="tw:size-5 tw:flex-none tw:transition-transform tw:duration-200 tw:group-open:rotate-45"
                      />
                    </summary>
                    <p className="tw:max-w-[62ch] tw:pb-5 tw:text-[17px]/[1.65] tw:text-(--text)">
                      {item.content}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </Wrap>
        </Section>

        {/* ===================================================== PROFESSIONAL */}
        <Section labelledBy="hs-pro-h" tone="white">
          <Wrap>
            <CenterHead
              id="hs-pro-h"
              title="SEO Services for Home Service Companies, From One Van to Franchises"
            >
              Everything it takes to rank, from your profile to your pages
            </CenterHead>
            {/* Cards three then two; the "Talk to SEO experts" banner runs
                full width and centred under them (owner, 24 Oct). */}
            <div className="tw:grid tw:grid-cols-6 tw:gap-6 tw:max-bslg:grid-cols-2 tw:max-bssm:grid-cols-1 tw:max-bssm:gap-4">
              {PRO_CARDS.map((card, i) => (
                <div
                  key={card.title}
                  className={cx(
                    "tw:flex tw:*:w-full tw:max-bslg:col-span-1",
                    i < 3 ? "tw:col-span-2" : "tw:col-span-3",
                    i === 4 && "tw:max-bslg:col-span-2 tw:max-bssm:col-span-1",
                  )}
                >
                  <CopyCard
                    icon={PRO_ICONS[i].icon}
                    tone={PRO_ICONS[i].tone}
                    title={card.title}
                    desc={card.desc}
                    bg="tw:bg-(--panel)"
                  />
                </div>
              ))}
              <div className="tw:relative tw:isolate tw:col-span-6 tw:flex tw:flex-col tw:items-center tw:gap-7 tw:overflow-hidden tw:rounded-(--r-xl) tw:bg-(--ink) tw:px-8 tw:py-12 tw:text-center tw:text-white tw:max-bslg:col-span-2 tw:max-bssm:col-span-1 tw:max-bssm:px-6 tw:max-bssm:py-10">
                {/* Floating icon tiles (owner, 24 Oct: icons instead of
                    shapes) over two soft glows. Decorative. */}
                <span
                  className="tw:absolute tw:-bottom-28 tw:-left-16 tw:-z-1 tw:size-[320px] tw:rounded-full tw:bg-[#ea580c]/25 tw:blur-2xl"
                  aria-hidden="true"
                />
                <span
                  className="tw:absolute tw:-top-28 tw:-right-16 tw:-z-1 tw:size-[320px] tw:rounded-full tw:bg-[#0d9488]/25 tw:blur-2xl"
                  aria-hidden="true"
                />
                {BANNER_ICONS.map(({ icon, tile, pos, delay }) => (
                  <span
                    key={pos}
                    className={cx(
                      "tw:absolute tw:-z-1 tw:max-bsmd:hidden",
                      pos,
                    )}
                    aria-hidden="true"
                  >
                    <span
                      className={cx(
                        "tw:grid tw:size-14 tw:animate-[dk-bob_5s_ease-in-out_infinite] tw:place-items-center tw:rounded-[18px] tw:text-[24px] tw:[box-shadow:0_18px_36px_-16px_rgba(0,0,0,0.6)] tw:max-bslg:size-12 tw:max-bslg:text-[20px]",
                        tile,
                      )}
                      style={{ animationDelay: delay }}
                    >
                      {icon}
                    </span>
                  </span>
                ))}
                <Strip
                  id="hs-trusted-h"
                  size="card"
                  className="tw:max-w-[30ch] tw:text-balance tw:text-white"
                >
                  Talk to SEO Experts for Home Services
                </Strip>
                <Pill href="tel:+13027269736" tone="white" fullOnPhone>
                  <FiPhone aria-hidden="true" />
                  Call: (302) 726-9736
                </Pill>
              </div>
            </div>
          </Wrap>
        </Section>

        {/* ======================================================= INDUSTRIES */}
        <Section labelledBy="hs-ind-h">
          <Wrap>
            <RowHead align="start">
              <div className={ROW_LEFT}>
                <Strip id="hs-ind-h" className={LONG_H}>
                  Local SEO for Contractors in Every Home Service Trade
                </Strip>
              </div>
              <div className={ROW_RIGHT}>
                <Label>Find your trade</Label>
                <p className={LEAD}>
                  Remodelers, repair techs, outdoor crews and cleaners all win
                  work from nearby searches. Pick your trade to see how we shape
                  local SEO around its services and towns, for single shops and
                  multi-location teams across 20+ industries.
                </p>
              </div>
            </RowHead>
            <div className="tw:grid tw:grid-cols-4 tw:gap-5 tw:max-bsxl:grid-cols-2 tw:max-bssm:grid-cols-1 tw:max-bssm:gap-4">
              {INDUSTRY_GROUPS.map((group, i) => (
                <div
                  key={group.title}
                  className="tw:rounded-(--r-xl) tw:bg-white tw:px-6 tw:pt-6 tw:pb-5"
                >
                  <span className="tw:flex tw:items-center tw:justify-between">
                    <span
                      className={cx(
                        "tw:grid tw:size-12 tw:place-items-center tw:rounded-[14px] tw:text-[20px]",
                        INDUSTRY_ICONS[i].tone,
                      )}
                      aria-hidden="true"
                    >
                      {INDUSTRY_ICONS[i].icon}
                    </span>
                    <span
                      className="tw:rounded-full tw:bg-(--panel) tw:px-3 tw:py-1 tw:text-[12.5px] tw:font-semibold tw:text-(--muted)"
                      aria-hidden="true"
                    >
                      {group.links.length} trades
                    </span>
                  </span>
                  <h3 className="tw:mt-5 tw:text-[21px]/[1.25]">
                    {group.title}
                  </h3>
                  <ul className="tw:mt-4 tw:grid tw:gap-1 tw:border-t tw:border-(--line) tw:pt-3">
                    {group.links.map(([label, href]) => (
                      <li key={href}>
                        <Link
                          href={href}
                          className="tw:group tw:flex tw:items-center tw:justify-between tw:gap-3 tw:rounded-[10px] tw:px-2 tw:py-2 tw:text-[16px] tw:font-medium tw:text-(--ink) tw:transition-colors tw:hover:bg-(--panel) tw:hover:text-(--blue)"
                        >
                          {label}
                          <FiArrowRight
                            aria-hidden="true"
                            className="tw:size-4 tw:flex-none tw:text-(--muted) tw:transition-transform tw:group-hover:translate-x-[3px] tw:group-hover:text-(--blue)"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Wrap>
        </Section>

        {/* =========================================================== READY */}
        <Section labelledBy="hs-ready-h">
          <Wrap flushOnPhone>
            <div className="tw:grid tw:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] tw:items-center tw:gap-14 tw:rounded-(--r-xl) tw:bg-(--ink) tw:p-10 tw:text-white tw:max-bslg:grid-cols-1 tw:max-bslg:gap-10 tw:max-bssm:px-[18px] tw:max-bssm:pt-8 tw:max-bssm:pb-7">
              <div>
                <Strip
                  id="hs-ready-h"
                  size="card"
                  className="tw:text-balance tw:text-white tw:bslg:text-[clamp(30px,2.7vw,42px)]"
                >
                  Find Out Where Your Local Calls Are Going
                </Strip>
                {/* Added (owner, 24 Oct): a line of copy under the heading. */}
                <p className="tw:mt-5 tw:max-w-[52ch] tw:text-lg/[1.65] tw:text-[#b7c4dd]">
                  Ask for a free local SEO audit. We compare your profile, town
                  pages and reviews with the crews that outrank you, show your
                  rank across the area, and list the fixes that win those calls
                  back.
                </p>
                <div className="tw:mt-8 tw:flex tw:flex-wrap tw:gap-3">
                  <Pill href={AUDIT} tone="white" fullOnPhone>
                    <FiUser aria-hidden="true" />
                    Book a Free Local SEO Audit
                  </Pill>
                  <a
                    href="tel:+13027269736"
                    className="tw:inline-flex tw:min-h-14 tw:items-center tw:justify-center tw:gap-2 tw:rounded-full tw:border-[1.5px] tw:border-white/30 tw:px-7 tw:text-base tw:font-medium tw:text-white tw:transition tw:duration-200 tw:hover:border-white tw:max-bssm:w-full"
                  >
                    <FiPhone aria-hidden="true" />
                    Call: (302) 726-9736
                  </a>
                </div>
              </div>
              <div className="tw:w-full tw:max-bslg:max-w-[520px] tw:max-bslg:justify-self-center">
                <CallLogUi />
              </div>
            </div>
          </Wrap>
        </Section>

        {/* ====================================================== WHY CHOOSE */}
        <Section labelledBy="hs-choose-h" tone="white">
          <Wrap>
            <div className="tw:mx-auto tw:mb-12 tw:max-w-[1120px] tw:text-center tw:max-bssm:mb-8">
              <Strip id="hs-choose-h" className="tw:text-balance">
                Why Zonic Media Is the Home Service SEO Agency Owners Pick
              </Strip>
              <Label className="tw:mt-6 tw:mb-2">What sets us apart</Label>
              <p className={cx(LEAD, LINKS, "tw:mx-auto tw:max-w-[72ch]")}>
                Plenty of agencies chase traffic. We chase booked jobs. The team
                behind our{" "}
                <Link href="/services/hvac-marketing-agency">
                  HVAC marketing agency
                </Link>{" "}
                work builds every plan around the calls, estimates and repeat
                customers that keep your crews busy.
              </p>
            </div>
            {/* The panel on the left changes with the reason highlighted on
                the right (owner, 24 Oct); both run on one 12s loop. */}
            <div className="tw:grid tw:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] tw:items-stretch tw:gap-6 tw:max-bslg:grid-cols-1">
              <Stage>
                <WhyChoosePanels />
              </Stage>
              <ol className="tw:grid tw:content-center tw:gap-3">
                {CHOOSE_CARDS.map((card, i) => (
                  <li
                    key={card.title}
                    className="tw:grid tw:grid-cols-[44px_minmax(0,1fr)] tw:gap-4 tw:rounded-[22px] tw:border-[1.5px] tw:border-transparent tw:bg-(--panel) tw:px-5 tw:py-5 tw:max-bssm:gap-3 tw:max-bssm:px-4"
                    style={
                      {
                        animation: "de-hs-card 12s ease infinite both",
                        animationDelay: `${i * 3}s`,
                      } as CSSProperties
                    }
                  >
                    <span
                      className="tw:grid tw:size-11 tw:place-items-center tw:rounded-full tw:bg-white tw:text-[18px] tw:text-[#c2410c]"
                      aria-hidden="true"
                    >
                      {CHOOSE_ICONS[i]}
                    </span>
                    <div>
                      <h3 className="tw:mt-1 tw:text-[20px]/[1.3]">
                        {card.title}
                      </h3>
                      <p className="tw:mt-1.5 tw:text-[16.5px]/[1.65] tw:text-(--text)">
                        {card.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Wrap>
        </Section>

        {/* ========================================================= REVIEWS */}
        <Section labelledBy="hs-love-h">
          <Wrap>
            <RowHead align="start">
              <div>
                {/* Owner (24 Oct): short, so the avatars stay beside it. No
                    ranking keywords in it. */}
                <Strip id="hs-love-h">Reviews From Home Service Owners</Strip>
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
        <Section labelledBy="hs-faq-h">
          <Wrap>
            <div className="tw:mx-auto tw:mb-9 tw:max-w-[900px] tw:text-center">
              <h2
                id="hs-faq-h"
                className="tw:text-[clamp(32px,4vw,58px)] tw:leading-[1.08] tw:tracking-[-0.03em] tw:text-balance"
              >
                Home Services SEO Questions, Answered
              </h2>
              <Label className="tw:mt-6 tw:mb-2">Quick answers</Label>
              <p className={cx(LEAD, LINKS, "tw:mx-auto tw:max-w-[70ch]")}>
                Short answers on rankings, leads, AI search, timelines and
                plans. If Google has suspended your listing, our{" "}
                <Link href="/services/gbp-reinstatement-service">
                  Google Business Profile reinstatement service
                </Link>{" "}
                has brought back 900+ suspended profiles and can help with
                yours.
              </p>
            </div>
            <div className="tw:mx-auto tw:max-w-[1080px] tw:rounded-[32px] tw:bg-white tw:px-11 tw:py-2 tw:max-bsmd:px-6 tw:max-bsmd:py-1 tw:max-bssm:rounded-3xl tw:max-bssm:px-5">
              {HS_FAQS.map((item, i) => (
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
        <Section labelledBy="hs-grow-h">
          <Wrap flushOnPhone>
            <div className="tw:grid tw:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] tw:items-start tw:gap-12 tw:rounded-[48px] tw:bg-white tw:px-12 tw:py-14 tw:max-bslg:grid-cols-1 tw:max-bslg:gap-10 tw:max-bslg:px-10 tw:max-bssm:rounded-[28px] tw:max-bssm:px-4 tw:max-bssm:py-10">
              <div>
                <Strip id="hs-grow-h" size="card" className="tw:text-balance">
                  Free Local SEO Audit for Home Service Companies
                </Strip>
                <Label className="tw:mt-6">Talk to a strategist</Label>
                <p className={cx(LEAD, LINKS)}>
                  Tell us your trade and towns. We&apos;ll show where you rank
                  on Maps, how your profile and reviews compare, and what to fix
                  first. It&apos;s the same audit behind our{" "}
                  <Link href="/services/plumbing-marketing-agency">
                    plumbing marketing agency
                  </Link>{" "}
                  work, open to remodelers, landscapers and every other home
                  service trade.
                </p>
                <ul className="tw:mt-8 tw:grid tw:grid-cols-2 tw:gap-3 tw:max-bssm:grid-cols-1">
                  {TRUST.map((t) => (
                    <li
                      key={t.text}
                      className="tw:flex tw:items-center tw:gap-3 tw:rounded-[16px] tw:bg-(--panel) tw:px-4 tw:py-3.5 tw:text-[15.5px] tw:font-medium tw:text-(--ink)"
                    >
                      <span
                        className="tw:grid tw:size-9 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-white tw:text-[16px] tw:text-[#c2410c]"
                        aria-hidden="true"
                      >
                        {t.icon}
                      </span>
                      {t.text}
                    </li>
                  ))}
                </ul>
                <ul className="tw:mt-6 tw:grid tw:gap-2 tw:border-t tw:border-(--line) tw:pt-6">
                  {CONTACT.map((c) => (
                    <li key={c.label}>
                      <a
                        href={c.href}
                        className="tw:flex tw:items-center tw:gap-3 tw:rounded-[14px] tw:px-2 tw:py-2 tw:text-[15.5px] tw:text-(--ink) tw:transition-colors tw:hover:bg-(--panel)"
                        {...(c.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        <span
                          className="tw:grid tw:size-9 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-[#fff1e6] tw:text-[16px] tw:text-[#c2410c]"
                          aria-hidden="true"
                        >
                          {c.icon}
                        </span>
                        <span className="tw:min-w-0">
                          <small className="tw:block tw:text-[12.5px] tw:text-(--muted)">
                            {c.label}
                          </small>
                          <b className="tw:block tw:font-medium tw:break-words">
                            {c.text}
                          </b>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="tw:w-full">
                <ServiceLeadForm {...FORM_PROPS} />
              </div>
            </div>
          </Wrap>
        </Section>

        {/* ========================================================== BANNER */}
        {/* Light gradient (owner prefers light banners; changed 24 Oct):
            sky blue → periwinkle → blush → apricot, with ink text. */}
        <Section labelledBy="hs-first-h">
          <Wrap>
            <div className="tw:relative tw:isolate tw:overflow-hidden tw:rounded-[44px] tw:[background:radial-gradient(55%_80%_at_100%_0%,rgba(191,219,254,0.9),transparent_62%),radial-gradient(50%_70%_at_0%_100%,rgba(253,186,116,0.5),transparent_65%),linear-gradient(105deg,#dbeafe_0%,#e0e7ff_34%,#fce7f3_68%,#ffedd5_100%)] tw:px-10 tw:pt-16 tw:pb-16 tw:text-center tw:text-(--ink) tw:max-bssm:rounded-[28px] tw:max-bssm:px-4 tw:max-bssm:pt-10 tw:max-bssm:pb-14">
              <span
                className="tw:pointer-events-none tw:absolute tw:inset-0 tw:-z-1 tw:opacity-[0.12] tw:mix-blend-multiply"
                style={{ backgroundImage: GRAIN }}
                aria-hidden="true"
              />
              <BannerLoops
                id="hs-loop-l"
                className="tw:absolute tw:-bottom-6 tw:-left-6 tw:-z-1 tw:w-[clamp(180px,24vw,340px)] tw:max-bssm:w-[84px]"
              />
              <BannerLoops
                id="hs-loop-r"
                className="tw:absolute tw:-right-6 tw:-bottom-6 tw:-z-1 tw:w-[clamp(180px,24vw,340px)] tw:-scale-x-100 tw:max-bssm:w-[120px]"
              />
              <h2
                id="hs-first-h"
                className="tw:mx-auto tw:max-w-[1000px] tw:text-[clamp(34px,4.4vw,64px)] tw:leading-[1.06] tw:tracking-[-0.035em] tw:text-(--ink) tw:text-balance"
              >
                Be the Name Homeowners Call First
              </h2>
              <p className="tw:mx-auto tw:mt-6 tw:max-w-[62ch] tw:text-lg/[1.65] tw:text-(--ink-2)">
                From remodeling crews to pest control routes, we help home
                service businesses rank at the top of Google Maps and search, so
                more homeowners who are ready to hire pick up the phone and call
                you.
              </p>
              <div className="tw:mt-9 tw:flex tw:flex-wrap tw:items-center tw:justify-center tw:gap-3">
                <Pill href="tel:+13027269736" fullOnPhone>
                  Talk to a Local SEO Specialist
                </Pill>
                <a
                  href="tel:+13027269736"
                  className="tw:inline-flex tw:min-h-14 tw:items-center tw:justify-center tw:gap-2 tw:rounded-full tw:border-[1.5px] tw:border-(--ink)/25 tw:bg-white/60 tw:px-7 tw:text-base tw:font-medium tw:text-(--ink) tw:transition tw:duration-200 tw:hover:-translate-y-0.5 tw:hover:bg-white tw:max-bssm:w-full"
                >
                  <FiPhone aria-hidden="true" />
                  Call Now: (302) 726-9736
                </a>
              </div>
            </div>
          </Wrap>
        </Section>
      </main>
      <RelatedServices current="/services/local-seo-for-home-services" />
      <Footer />
    </>
  );
}
