import Link from "next/link";
import dynamic from "next/dynamic";
import type { CSSProperties, ReactNode } from "react";
import {
  FiArrowUpRight,
  FiCheck,
  FiClipboard,
  FiCpu,
  FiLayers,
  FiLayout,
  FiMail,
  FiMapPin,
  FiPhone,
  FiPlus,
  FiShield,
  FiTarget,
  FiUnlock,
} from "react-icons/fi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { FaMicrosoft } from "react-icons/fa";
import {
  SiApple,
  SiGoogle,
  SiGoogleads,
  SiGooglemaps,
  SiMeta,
  SiOpenai,
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
import { AboutCard, Chip } from "@/components/rd/dfw-kit/ui";
import {
  AvatarPh,
  HandArrow,
  InlineChat,
  InlinePin,
  Ph,
  RatingBadge,
  Sparks,
  TrustLogos,
} from "@/components/rd/dfw-kit/visuals";
import { PricingSection } from "@/components/rd/home/HomePricing";
import { Flip, Stage } from "@/components/rd/delaware/uiBits";
import { SITE_CONTACT } from "@/shared/siteConfig";
import {
  AdMatchUi,
  AutomationFlowUi,
  ConversionHotspotsUi,
  FoundThreeWaysUi,
  OneReportUi,
  PlanPhone,
  ProfileLifecycleUi,
  servicesStepUis,
} from "./servicesUi";
import { SERVICE_GROUPS, SERVICES_FAQS, SERVICES_STEPS } from "./content";

const ServiceLeadForm = dynamic(
  () => import("@/app/components/ServiceLeadForm"),
);

/* ---------------------------------------------------------------------------
   SERVICES HUB — redesign draft (23 Oct 2026), /services-2 (noindex).

   The Dallas–Fort Worth kit with its own hero: a centred heading over a
   mosaic of service tiles that link straight to each service (the location
   pages use stat pillars, the About page a split hero with a bento).

   Still the SERVICES HUB (see the live /services header): it owns "digital
   marketing services" and links DOWN to every child page with its head
   term; it never restates a child page's full deliverables. The live page's
   unsourced figures (200% growth, 100+ brands, 3–5× leads, 90% retention,
   4.9 rating) are not carried over; only the canonical 1,500+ / 900+ / 5.0
   / 0% markup appear.

   Keywords (Semrush US, re-checked 24 Oct 2026; /services has no ranking
   data): digital marketing services 33,100 (KD 44) · full service digital
   marketing agency 4,400 (KD 44) · digital marketing services for small
   business 2,900 (KD 38) · digital marketing agency for small business
   2,900 (KD 28) · small business marketing services 1,900 (KD 24) · seo
   and digital marketing services 1,300 (KD 38) · local digital marketing
   services 720 (KD 24). "Digital marketing packages" is left to /pricing.
   Copy re-optimized 24 Oct 2026: no live wording, no price estimates.
--------------------------------------------------------------------------- */

const CONTACT = "#sv-contact";
const CTA = "Book a Free Audit";

const LINKS_DARK =
  "tw:[&_a]:font-medium tw:[&_a]:text-white tw:[&_a]:underline tw:[&_a]:decoration-white/40 tw:[&_a]:underline-offset-[3px] tw:[&_a:hover]:decoration-white";

/* ----------------------------------------------------------------- copy */

const ROW_UI: Record<string, ReactNode> = {
  search: <FoundThreeWaysUi />,
  gbp: <ProfileLifecycleUi />,
  web: <ConversionHotspotsUi />,
  ads: <AdMatchUi />,
  design: <AutomationFlowUi />,
};

const WHY = [
  {
    icon: <FiClipboard aria-hidden="true" />,
    title: "Audit first, quote second",
    desc: "We check your numbers before we price anything, and say so when a channel isn't worth paying for yet.",
  },
  {
    icon: <FiLayers aria-hidden="true" />,
    title: "Every channel, one roadmap",
    desc: "Your site, SEO, Google profile and ads share a single plan, so they support each other instead of fighting for credit.",
  },
  {
    icon: <FiUnlock aria-hidden="true" />,
    title: "Month to month, your accounts",
    desc: "Plans renew monthly, and every profile, ad account and website we touch stays in your name.",
  },
];

const STEP_TONE = [
  { num: "tw:bg-(--blue) tw:text-white", bg: "tw:bg-(--blue)" },
  { num: "tw:bg-(--gold) tw:text-(--ink)", bg: "tw:bg-(--gold)" },
  { num: "tw:bg-(--green) tw:text-white", bg: "tw:bg-(--green)" },
  { num: "tw:bg-(--red) tw:text-white", bg: "tw:bg-(--red)" },
];

const HUB_LEFT: HubApp[] = [
  { icon: SiGoogle, name: "Google Search", tone: "google" },
  { icon: SiGooglemaps, name: "Google Maps", tone: "maps" },
  { icon: SiApple, name: "Apple Maps", tone: "apple" },
  { icon: SiOpenai, name: "ChatGPT", tone: "openai" },
];
const HUB_RIGHT: HubApp[] = [
  { icon: SiGoogleads, name: "Google Ads", tone: "googleads" },
  { icon: FaMicrosoft, name: "Microsoft Ads", tone: "bing" },
  { icon: SiYoutube, name: "YouTube ads", tone: "youtube" },
  { icon: SiMeta, name: "Meta ads", tone: "meta" },
];

const INDUSTRIES = [
  "Home Services",
  "Healthcare & Dental",
  "Legal & Financial",
  "Real Estate",
  "Cleaning",
  "Auto & Towing",
  "Solar & Energy",
  "Nonprofits",
];

const REVIEWS_WIDGET =
  "https://cdn.trustindex.io/loader.js?bedc2ba73f755349bf36a19f52c";

/* Hero background "+" marks (% of the hero box). */
const MARKS: [number, number][] = [
  [5, 14],
  [12, 34],
  [93, 12],
  [88, 30],
  [30, 6],
  [70, 8],
];

/* Hero mosaic tiles. */
const TILE =
  "tw:group tw:relative tw:flex tw:flex-col tw:justify-between tw:gap-4 tw:overflow-hidden tw:rounded-(--r-xl) tw:p-6 tw:text-left tw:transition tw:duration-300 tw:hover:-translate-y-1 tw:max-bssm:p-5";
const TILE_NAME =
  "tw:block tw:text-[clamp(20px,1.7vw,24px)] tw:leading-tight tw:font-medium tw:tracking-[-0.02em]";
const TILE_DESC = "tw:mt-1.5 tw:block tw:text-[15px]/[1.45]";

function TileArrow({ light }: { light?: boolean }) {
  return (
    <span
      className={cx(
        "tw:grid tw:size-10 tw:flex-none tw:place-items-center tw:rounded-full tw:transition tw:duration-200 tw:group-hover:rotate-45",
        light ? "tw:bg-white/15 tw:text-white" : "tw:bg-(--ink) tw:text-white",
      )}
      aria-hidden="true"
    >
      <FiArrowUpRight />
    </span>
  );
}

function TileIcon({ children, cls }: { children: ReactNode; cls: string }) {
  return (
    <span
      className={cx(
        "tw:grid tw:size-12 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[21px]",
        cls,
      )}
      aria-hidden="true"
    >
      {children}
    </span>
  );
}

/* Contact list beside the audit form: phone, email and office. */
const CONTACT_ITEMS: {
  icon: ReactNode;
  tone: string;
  small: string;
  strong: string;
  href: string;
  external?: boolean;
}[] = [
  {
    icon: <FiPhone />,
    tone: "tw:bg-(--blue) tw:text-white",
    small: "Call a strategist",
    strong: SITE_CONTACT.phoneDisplay,
    href: SITE_CONTACT.phoneHref,
  },
  {
    icon: <FiMail />,
    tone: "tw:bg-(--gold) tw:text-(--ink)",
    small: "Email the team",
    strong: SITE_CONTACT.email,
    href: SITE_CONTACT.emailHref,
  },
  {
    icon: <FiMapPin />,
    tone: "tw:bg-(--ink) tw:text-white",
    small: "Head office",
    strong: SITE_CONTACT.address,
    href: SITE_CONTACT.mapHref,
    external: true,
  },
];

function ContactList() {
  return (
    <ul className="tw:grid tw:gap-3">
      {CONTACT_ITEMS.map((t) => (
        <li key={t.small}>
          <a
            href={t.href}
            className="tw:flex tw:items-center tw:gap-3.5 tw:rounded-[20px] tw:bg-(--panel) tw:p-4 tw:transition tw:hover:-translate-y-0.5"
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
  );
}

/* ----------------------------------------------------------------- page */

export function ServicesPage() {
  const steps = servicesStepUis(SERVICES_STEPS);
  return (
    <>
      <main className="dk-root">
        {/* ============================================================ HERO */}
        <section
          className="tw:relative tw:isolate tw:overflow-clip tw:[background:radial-gradient(circle_at_14%_10%,rgba(49,87,245,0.08),transparent_26%),radial-gradient(circle_at_86%_8%,rgba(253,193,21,0.09),transparent_24%),linear-gradient(180deg,#fdfdff_0%,#f6f8fd_100%)] tw:pt-36 tw:pb-(--sec-y) tw:max-bsmd:pt-[120px]"
          aria-labelledby="sv-h1"
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

          <Wrap className="tw:text-center">
            <Strip
              as="h1"
              id="sv-h1"
              size="heroWide"
              className="tw:mx-auto tw:max-w-[1000px] tw:text-balance"
            >
              Digital Marketing Services for Small and{" "}
              <span className="tw:whitespace-nowrap">Mid-Size Businesses</span>
            </Strip>
            <p
              className={cx(
                LEAD,
                "tw:mx-auto tw:mt-7 tw:max-w-[820px] tw:text-balance",
              )}
            >
              One in-house team runs your local SEO, Google Business Profile, AI
              search, website and Google Ads, so you show up on Google Maps, in
              AI answers and in paid results, with every report counted in calls
              and booked jobs.
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
          </Wrap>

          {/* Service mosaic: every tile opens that service's page. */}
          <Wrap>
            <nav
              aria-label="Our services"
              className="tw:mt-14 tw:max-bssm:mt-10"
            >
              <ul className="tw:grid tw:grid-cols-4 tw:grid-rows-[250px_250px] tw:gap-5 tw:max-bsxl:grid-cols-2 tw:max-bsxl:grid-rows-none tw:max-bsxl:auto-rows-[240px] tw:max-bssm:grid-cols-1 tw:max-bssm:auto-rows-auto tw:max-bssm:gap-3">
                <li className="tw:col-span-2">
                  <Link
                    href="/services/seo-services"
                    className={cx(
                      TILE,
                      "tw:h-full tw:bg-(--blue) tw:text-white",
                    )}
                  >
                    <span className="tw:flex tw:items-start tw:justify-between tw:gap-4">
                      <span
                        className="tw:grid tw:w-full tw:max-w-[300px] tw:gap-1.5"
                        aria-hidden="true"
                      >
                        {["Your Business", "Competitor A", "Competitor B"].map(
                          (n, i) => (
                            <span
                              key={n}
                              className={cx(
                                "tw:flex tw:items-center tw:gap-2.5 tw:rounded-[12px] tw:px-3 tw:py-1.5 tw:text-[13px]",
                                i === 0
                                  ? "tw:bg-white tw:font-semibold tw:text-(--ink)"
                                  : "tw:bg-white/10 tw:text-white/70",
                              )}
                            >
                              <span
                                className={cx(
                                  "tw:grid tw:size-5 tw:place-items-center tw:rounded-full tw:text-[10px] tw:font-bold",
                                  i === 0 ? "tw:bg-(--gold)" : "tw:bg-white/15",
                                )}
                              >
                                {i + 1}
                              </span>
                              {n}
                            </span>
                          ),
                        )}
                      </span>
                      <TileArrow light />
                    </span>
                    <span>
                      <span className={TILE_NAME}>SEO &amp; Local SEO</span>
                      <span className={cx(TILE_DESC, "tw:text-white/80")}>
                        Climb Google Search and the Map Pack in every town you
                        serve.
                      </span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/local-seo-google-business-optimization"
                    className={cx(
                      TILE,
                      "tw:h-full tw:bg-(--gold) tw:text-(--ink)",
                    )}
                  >
                    <span className="tw:flex tw:items-start tw:justify-between">
                      <TileIcon cls="tw:bg-white/60">
                        <MdOutlineVerifiedUser />
                      </TileIcon>
                      <TileArrow />
                    </span>
                    <span>
                      <span className={TILE_NAME}>Google Business Profile</span>
                      <span className={cx(TILE_DESC, "tw:text-(--ink)/75")}>
                        1,500+ profiles optimized to win Maps calls.
                      </span>
                    </span>
                  </Link>
                </li>
                <li className="tw:bsxl:col-start-4 tw:bsxl:row-span-2 tw:bsxl:row-start-1">
                  <Link
                    href="/services/ai-seo-services"
                    className={cx(
                      TILE,
                      "tw:h-full tw:bg-(--ink) tw:text-white",
                    )}
                  >
                    <span className="tw:flex tw:items-start tw:justify-between">
                      <TileIcon cls="tw:bg-white/10 tw:text-(--gold)">
                        <FiCpu />
                      </TileIcon>
                      <TileArrow light />
                    </span>
                    <span
                      className="tw:grid tw:gap-2 tw:max-bsxl:hidden"
                      aria-hidden="true"
                    >
                      <span className="tw:justify-self-end tw:rounded-[14px] tw:rounded-br-[4px] tw:bg-white/10 tw:px-3 tw:py-2 tw:text-[13px]">
                        Best roofer near me?
                      </span>
                      <span className="tw:rounded-[14px] tw:rounded-bl-[4px] tw:bg-white tw:px-3 tw:py-2 tw:text-[13px]/[1.4] tw:text-(--ink)">
                        <SiOpenai className="tw:mr-1.5 tw:inline tw:size-3.5" />
                        Top pick: <b>Your Business</b>, rated 5.0
                      </span>
                    </span>
                    <span>
                      <span className={TILE_NAME}>AI Search Optimization</span>
                      <span className={cx(TILE_DESC, "tw:text-white/75")}>
                        Be the business ChatGPT, Gemini and AI Overviews name.
                      </span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/web-design"
                    className={cx(
                      TILE,
                      "tw:h-full tw:bg-white tw:text-(--ink)",
                    )}
                  >
                    <span className="tw:flex tw:items-start tw:justify-between">
                      <TileIcon cls="tw:bg-(--blue-soft) tw:text-(--blue)">
                        <FiLayout />
                      </TileIcon>
                      <TileArrow />
                    </span>
                    <span>
                      <span className={TILE_NAME}>Web Design</span>
                      <span className={cx(TILE_DESC, "tw:text-(--text)")}>
                        Fast, mobile-first sites built to book jobs.
                      </span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/google-ads"
                    className={cx(
                      TILE,
                      "tw:h-full tw:bg-[#c7f0dd] tw:text-(--ink)",
                    )}
                  >
                    <span className="tw:flex tw:items-start tw:justify-between">
                      <TileIcon cls="tw:bg-white/60">
                        <FiTarget />
                      </TileIcon>
                      <TileArrow />
                    </span>
                    <span>
                      <span className={TILE_NAME}>Google Ads</span>
                      <span className={cx(TILE_DESC, "tw:text-(--ink)/75")}>
                        Ads for buyers ready now, with 0% ad-spend markup.
                      </span>
                    </span>
                  </Link>
                </li>
                <li className="tw:max-bsxl:col-span-2 tw:max-bssm:col-span-1">
                  <Link
                    href="/services/gbp-reinstatement-service"
                    className={cx(
                      TILE,
                      "tw:h-full tw:bg-[#fde2e4] tw:text-(--ink)",
                    )}
                  >
                    <span className="tw:flex tw:items-start tw:justify-between">
                      <span className="tw:flex tw:items-center tw:gap-3">
                        <TileIcon cls="tw:bg-white/70 tw:text-(--red)">
                          <FiShield />
                        </TileIcon>
                        <span aria-hidden="true">
                          <Flip
                            n={3}
                            from={<Chip tone="red">Suspended</Chip>}
                            to={<Chip tone="green">Live on Google</Chip>}
                          />
                        </span>
                      </span>
                      <TileArrow />
                    </span>
                    <span>
                      <span className={TILE_NAME}>Profile Reinstatement</span>
                      <span className={cx(TILE_DESC, "tw:text-(--ink)/75")}>
                        900+ suspended listings restored on Google Maps.
                      </span>
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </Wrap>
        </section>

        {/* =========================================================== ABOUT */}
        <Section labelledBy="sv-about-h">
          <Wrap>
            <div className="tw:grid tw:grid-cols-2 tw:items-start tw:gap-14 tw:max-bsxl:gap-10 tw:max-bslg:grid-cols-1">
              <div className="tw:relative">
                <Strip
                  id="sv-about-h"
                  className="tw:bslg:text-[clamp(34px,min(4.6vw,calc((100vw_-_256px)/19)),62px)]"
                >
                  <span>A Full-Service</span>{" "}
                  <br className="tw:max-bssm:hidden" />
                  <span>Digital Marketing</span>{" "}
                  <br className="tw:max-bssm:hidden" />
                  <span>Agency for Small Business.</span>
                </Strip>
                <HandArrow className="tw:absolute tw:top-[calc(100%+6px)] tw:left-[32%] tw:w-[180px] tw:max-bslg:hidden" />
              </div>
              <div>
                <Label>One partner</Label>
                <p className={cx(LEAD, "tw:mb-6")}>
                  Hire one team instead of three. Your local SEO, Google
                  profile, website and ads are planned together by in-house
                  specialists, led by a strategist who learns your market.
                </p>
                <p className={cx(LEAD, "tw:mb-8")}>
                  Each service is scoped after a free audit, billed at a flat
                  monthly rate and measured in calls, form leads and booked
                  jobs, so you can see what is paying off.
                </p>
                <Pill href="/about" tone="outline">
                  Meet the Zonic Media Team
                </Pill>
              </div>
            </div>

            <div className="tw:relative tw:mt-[110px] tw:grid tw:grid-cols-[minmax(0,1fr)_minmax(0,2.1fr)] tw:gap-6 tw:max-bssm:mt-[84px] tw:max-bssm:grid-cols-1">
              <RatingBadge
                text="DIGITAL MARKETING SERVICES • ZONIC MEDIA •"
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
                      <FiLayers />
                    </span>
                  }
                  kicker="In-house, every channel"
                  title="Services we manage"
                  points={[
                    "SEO, local SEO and AI search",
                    "Google Business Profile",
                    "Web design and Google Ads",
                    "Branding, UI/UX and automation",
                  ]}
                  foot="Head office: Dover, Delaware"
                />
              </div>
              <div className="tw:relative tw:h-[460px] tw:overflow-hidden tw:rounded-(--r-xl) tw:max-bsxl:h-[420px] tw:max-bssm:h-[280px]">
                <Ph
                  label="Zonic Media designers reviewing a client website on a laptop and phone"
                  ratio="16:9"
                  src="/images/dfw/web/dfw-team-review.webp"
                  position="50% 45%"
                />
              </div>
            </div>
          </Wrap>
        </Section>

        {/* ======================================================== SERVICES */}
        <Section labelledBy="sv-svc-h" tone="white">
          <Wrap>
            <CenterHead
              id="sv-svc-h"
              title="Small Business Marketing Services by Channel"
            >
              Start with the channel you need most. Each one links to a
              specialist page with the full deliverables.
            </CenterHead>
            {SERVICE_GROUPS.map((g, i) => (
              <div
                key={g.key}
                className={cx(
                  "tw:grid tw:grid-cols-2 tw:items-center tw:gap-16 tw:max-bslg:grid-cols-1 tw:max-bslg:gap-9",
                  i > 0 && "tw:mt-16 tw:max-bslg:mt-[72px]",
                )}
              >
                <Stage flip={i % 2 === 1}>{ROW_UI[g.key]}</Stage>
                <div>
                  <Label>{g.label}</Label>
                  <h3 className="tw:text-[clamp(30px,3.4vw,52px)] tw:leading-[1.06] tw:tracking-[-0.03em] tw:text-balance">
                    {g.title}
                  </h3>
                  <p className={cx(LEAD, "tw:mt-6 tw:max-w-[54ch]")}>
                    {g.body}
                  </p>
                  <ul className="tw:mt-[26px] tw:grid tw:grid-cols-2 tw:gap-x-8 tw:gap-y-[22px] tw:border-t tw:border-(--line) tw:pt-6 tw:max-bssm:grid-cols-1 tw:max-bssm:gap-y-[18px]">
                    {g.points.map((point) => (
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
                  {/* Child pages for this area (the hub's downward links). */}
                  <ul className="tw:mt-6 tw:mb-7 tw:flex tw:flex-wrap tw:gap-2">
                    {g.links.map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          className="tw:inline-flex tw:items-center tw:gap-1.5 tw:rounded-full tw:border tw:border-(--line) tw:px-3.5 tw:py-1.5 tw:text-[14.5px] tw:font-medium tw:text-(--ink-2) tw:transition tw:hover:border-(--ink) tw:hover:bg-(--ink) tw:hover:text-white"
                        >
                          {l.label}
                          <FiArrowUpRight
                            aria-hidden="true"
                            className="tw:size-3.5"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Pill href={g.cta.href} arrow>
                    {g.cta.label}
                  </Pill>
                </div>
              </div>
            ))}
          </Wrap>
        </Section>

        {/* ========================================================= JOURNEY */}
        <Section labelledBy="sv-why-h">
          <Wrap flushOnPhone>
            <div className="tw:grid tw:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] tw:overflow-hidden tw:rounded-(--r-xl) tw:bg-white tw:max-bslg:grid-cols-1">
              <div className="tw:px-11 tw:pt-12 tw:pb-11 tw:max-bssm:px-[22px] tw:max-bssm:pt-[30px] tw:max-bssm:pb-[26px]">
                <Strip id="sv-why-h" size="card">
                  Why Small Businesses Choose Our Agency
                </Strip>
                <p
                  className={cx(
                    LEAD,
                    "tw:mt-[22px] tw:mb-[26px] tw:max-w-[54ch]",
                  )}
                >
                  Specialists who audit first, plan once and report in calls.
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
              <div className="tw:grid tw:min-h-[560px] tw:place-items-center tw:[background:radial-gradient(60%_50%_at_30%_20%,rgba(49,87,245,0.16),transparent_70%),radial-gradient(60%_50%_at_80%_85%,rgba(253,193,21,0.18),transparent_70%),#f2f5fd] tw:px-6 tw:py-11 tw:max-bslg:min-h-0 tw:max-bslg:px-5 tw:max-bslg:py-9">
                <PlanPhone />
              </div>
            </div>
          </Wrap>
        </Section>

        {/* ========================================================= PROCESS */}
        <Section labelledBy="sv-steps-h">
          <Wrap>
            <RowHead align="start">
              <div className="tw:max-w-[860px]">
                <Strip id="sv-steps-h" className="tw:text-balance">
                  From Free Audit to Monthly Growth Report
                </Strip>
              </div>
              <Pill href={CONTACT}>{CTA}</Pill>
            </RowHead>
            <ol className="tw:grid tw:gap-5">
              {SERVICES_STEPS.map((step, i) => {
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
        <Section labelledBy="sv-band-h">
          <Wrap flushOnPhone>
            <div className="tw:grid tw:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] tw:items-center tw:gap-14 tw:rounded-(--r-xl) tw:bg-(--ink) tw:p-10 tw:text-white tw:max-bslg:grid-cols-1 tw:max-bslg:gap-10 tw:max-bssm:px-[18px] tw:max-bssm:pt-[22px] tw:max-bssm:pb-7">
              <div className="tw:w-full tw:max-bslg:max-w-[520px] tw:max-bslg:justify-self-center">
                <OneReportUi
                  facts={[
                    { strong: "1 plan", label: "For every channel" },
                    { strong: "Monthly", label: "Plain-English report" },
                    { strong: "0%", label: "Markup on ad spend" },
                  ]}
                />
              </div>
              <div>
                <Strip id="sv-band-h" size="card" className="tw:text-white">
                  SEO and Digital Marketing Services in One Report
                </Strip>
                <p className="tw:mt-6 tw:max-w-[56ch] tw:text-lg/[1.65] tw:text-[#b7c4dd]">
                  Separate vendors send separate reports that never add up. We
                  track every channel in one place, so you see which calls,
                  forms and jobs came from Maps, search, AI answers or ads.
                </p>
                <p
                  className={cx(
                    LINKS_DARK,
                    "tw:mt-6 tw:max-w-[56ch] tw:text-lg/[1.65] tw:text-[#b7c4dd]",
                  )}
                >
                  Prefer a local team page? See digital marketing in{" "}
                  <Link href="/services/delaware/digital-marketing">
                    Delaware
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
                  href={CONTACT}
                  tone="white"
                  arrow
                  fullOnPhone
                  className="tw:mt-8"
                >
                  Get My Free Audit
                </Pill>
              </div>
            </div>
          </Wrap>
        </Section>

        {/* ============================================================= HUB */}
        <Section labelledBy="sv-found-h" tone="white">
          <Wrap>
            <CenterHead
              id="sv-found-h"
              title="Show Up on Google Maps, in AI Answers and in Ads"
            >
              We cover the places customers find you for free, like Google
              Search, Maps and AI assistants, and the ones you pay for: Google
              Ads, Microsoft Ads, YouTube and Meta.
            </CenterHead>
            <PlatformHub
              left={HUB_LEFT}
              right={HUB_RIGHT}
              leftLabel="Search, maps and AI"
              rightLabel="Paid advertising"
              icon={<FiMapPin aria-hidden="true" />}
              title="Your business"
              sub="one plan across every channel"
            />
            <div className="tw:mt-14 tw:border-t tw:border-(--line) tw:pt-10 tw:text-center tw:max-bssm:mt-10 tw:max-bssm:pt-8">
              <p className="tw:text-[13px] tw:font-semibold tw:tracking-[0.14em] tw:text-(--muted) tw:uppercase">
                Industries we work with
              </p>
              <ul className="tw:mx-auto tw:mt-5 tw:flex tw:max-w-[980px] tw:flex-wrap tw:justify-center tw:gap-2.5">
                {INDUSTRIES.map((chip) => (
                  <li
                    key={chip}
                    className="tw:rounded-full tw:bg-(--panel) tw:px-4 tw:py-2 tw:text-[15px] tw:font-medium tw:text-(--ink-2)"
                  >
                    {chip}
                  </li>
                ))}
              </ul>
              <Pill href="/industries" tone="outline" className="tw:mt-7">
                See Every Industry We Serve
              </Pill>
            </div>
          </Wrap>
        </Section>

        {/* ========================================================= REVIEWS */}
        <Section labelledBy="sv-love-h">
          <Wrap>
            <RowHead align="start">
              <div>
                <Strip id="sv-love-h">
                  Client Reviews of Our Marketing Services
                </Strip>
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
            title: "Monthly Plans for Small Business Marketing",
            lead: "Three flat monthly plans with fixed deliverables, covering your Google profile, local SEO, Google Ads and social, with ad spend kept separate.",
            compareTitle: "What Each Marketing Plan Includes",
            compareLead: "Deliverables for all three plans in one table.",
            addOnsTitle: "Add Pages, Locations or Campaigns",
            addOnsLead: "Bolt extra work onto any plan as you grow.",
            customTitle: "Running several services or locations?",
            customText:
              "We'll combine them into one plan sized to your market.",
          }}
          idPrefix="sv"
          ctaHref={CONTACT}
          ctaLabel={CTA}
        />

        {/* ============================================================= FAQ */}
        <Section labelledBy="sv-faq-h">
          <Wrap>
            <div className="tw:mx-auto tw:mb-9 tw:max-w-[860px] tw:text-center">
              <h2
                id="sv-faq-h"
                className="tw:text-[clamp(32px,4vw,58px)] tw:leading-[1.08] tw:tracking-[-0.03em] tw:text-balance"
              >
                Questions About Our Digital Marketing Services
              </h2>
              <p className={cx(LEAD, "tw:mx-auto tw:mt-5 tw:max-w-[64ch]")}>
                Plans, contracts, timelines and who does the work.
              </p>
            </div>
            <div className="tw:mx-auto tw:max-w-[1080px] tw:rounded-[32px] tw:bg-white tw:px-11 tw:py-2 tw:max-bsmd:px-6 tw:max-bsmd:py-1 tw:max-bssm:rounded-3xl tw:max-bssm:px-5">
              {SERVICES_FAQS.map((item) => (
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
        <Section id="sv-contact" labelledBy="sv-contact-h">
          <Wrap flushOnPhone>
            <div className="tw:relative tw:overflow-hidden tw:rounded-[48px] tw:bg-white tw:px-12 tw:pt-[60px] tw:pb-11 tw:text-center tw:max-bslg:px-10 tw:max-bslg:pt-16 tw:max-bslg:pb-10 tw:max-bssm:rounded-[28px] tw:max-bssm:px-4 tw:max-bssm:pt-12 tw:max-bssm:pb-4">
              <svg
                viewBox="0 0 120 90"
                className="tw:absolute tw:top-[120px] tw:left-[5%] tw:w-[120px] tw:-rotate-[14deg] tw:drop-shadow-[0_18px_18px_rgba(28,79,196,0.25)] tw:max-bsxl:left-[3%] tw:max-bsxl:w-[92px] tw:max-bslg:hidden"
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
                className="tw:absolute tw:top-[96px] tw:right-[6%] tw:text-[130px] tw:leading-none tw:max-bsxl:right-[4%] tw:max-bsxl:text-[100px] tw:max-bslg:hidden"
                aria-hidden="true"
              >
                <InlinePin id="sv-pin-contact" />
              </span>
              <h2
                id="sv-contact-h"
                className="tw:mx-auto tw:max-w-[20ch] tw:text-[clamp(34px,4.6vw,68px)] tw:leading-[1.08] tw:tracking-[-0.035em]"
              >
                Tell Us Where <InlineChat id="sv-chat-contact" /> You Want More
                Calls
              </h2>
              <p
                className={cx(LEAD, "tw:mx-auto tw:mt-[26px] tw:max-w-[640px]")}
              >
                Share the services you&apos;re weighing and the jobs you want
                more of. We&apos;ll reply with a free audit and a flat monthly
                plan.
              </p>
              {/* Contact details on the left of the form (owner rule:
                  every contact block lists phone, email and address). */}
              <div className="tw:mx-auto tw:mt-[34px] tw:grid tw:max-w-[1080px] tw:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] tw:items-start tw:gap-8 tw:text-left tw:max-bslg:max-w-[760px] tw:max-bslg:grid-cols-1 tw:max-bslg:gap-6">
                <ContactList />
                <div className="tw:w-full">
                  <ServiceLeadForm
                    formType="services-hub"
                    badge="Free Audit"
                    title="Get your free marketing audit"
                    subtitle="No contract and no pressure: a clear view of what works, what doesn't and what to fix first."
                    submitText="Send My Free Audit"
                    messageLabel="Tell us about your business"
                    messagePlaceholder="Your business, the services you're interested in, and what you'd like more of"
                    defaultServices={["Local SEO"]}
                  />
                </div>
              </div>
            </div>
          </Wrap>
        </Section>

        {/* ========================================================== BANNER */}
        {/* Light gradient (the owner prefers light banners): mint → sky →
            lavender, with ink text. */}
        <Section labelledBy="sv-close-h">
          <Wrap>
            <div className="tw:relative tw:isolate tw:overflow-hidden tw:rounded-[44px] tw:[background:radial-gradient(55%_80%_at_100%_0%,rgba(196,181,253,0.75),transparent_62%),radial-gradient(50%_70%_at_0%_100%,rgba(134,239,172,0.6),transparent_65%),linear-gradient(105deg,#d1fae5_0%,#cffafe_38%,#dbeafe_70%,#e9e5ff_100%)] tw:px-10 tw:pt-16 tw:pb-16 tw:text-center tw:text-(--ink) tw:max-bssm:rounded-[28px] tw:max-bssm:px-4 tw:max-bssm:pt-10 tw:max-bssm:pb-14">
              <span
                className="tw:pointer-events-none tw:absolute tw:inset-0 tw:-z-1 tw:opacity-[0.12] tw:mix-blend-multiply"
                style={{ backgroundImage: GRAIN }}
                aria-hidden="true"
              />
              <BannerLoops
                id="sv-loop-l"
                className="tw:absolute tw:-bottom-6 tw:-left-6 tw:-z-1 tw:w-[clamp(180px,24vw,340px)] tw:max-bssm:w-[84px]"
              />
              <BannerLoops
                id="sv-loop-r"
                className="tw:absolute tw:-right-6 tw:-bottom-6 tw:-z-1 tw:w-[clamp(180px,24vw,340px)] tw:-scale-x-100 tw:max-bssm:w-[120px]"
              />
              <h2
                id="sv-close-h"
                className="tw:mx-auto tw:max-w-[16ch] tw:text-[clamp(34px,5vw,74px)] tw:leading-[1.06] tw:tracking-[-0.035em] tw:text-(--ink) tw:text-balance"
              >
                See What&apos;s Costing You Calls Today
              </h2>
              <p className="tw:mx-auto tw:mt-6 tw:max-w-[60ch] tw:text-lg/[1.65] tw:text-(--ink-2)">
                Get a free check of your website, Google profile, search
                rankings and ads, plus a short fix list that&apos;s useful
                whether or not you hire us.
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
                  "No cost or obligation",
                  "Findings you keep",
                  "Month-to-month plans",
                  "Accounts in your name",
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
