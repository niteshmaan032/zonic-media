import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  FiArrowRight,
  FiCheck,
  FiMail,
  FiMapPin,
  FiPhone,
  FiPlus,
  FiX,
} from "react-icons/fi";

import "@/components/rd/dfw-kit/kit.css";
import "@/components/rd/dfw-kit/ui.css";
import "@/components/rd/delaware/delaware.css";

import Footer from "@/app/components/Footer";
import LenisIframeGuard from "@/app/components/LenisIframeGuard";
import RelatedServices from "@/app/components/RelatedServices";
import {
  CenterHead,
  LEAD,
  Pill,
  RowHead,
  Section,
  Strip,
  Wrap,
  cx,
} from "@/components/rd/dfw-kit/primitives";
import { AvatarPh, Sparks, TrustLogos } from "@/components/rd/dfw-kit/visuals";
import { PricingSection } from "@/components/rd/home/HomePricing";
import { SITE_CONTACT } from "@/shared/siteConfig";
import { Icon } from "./icons";
import type { IndustryContent } from "./types";
import {
  GrowthUiView,
  FloatBento,
  TitleLines,
  H1Badge,
  HERO_BG,
  HeroMarks,
  LINKS,
  RichText,
  StepUis,
  grad,
  softStyle,
} from "./ui";
import { MoreLocations } from "./MoreLocations";
import "./industry.css";
import { GradientBanner } from "./GradientBanner";
import { VideoHero } from "./VideoHero";

/* ---------------------------------------------------------------------------
   INDUSTRY MAIN PAGE TEMPLATE (24 Oct 2026) — the HVAC agency draft's
   layout, driven by one IndustryContent data file per niche.

   Order: hero (H1 + lead + CTAs + trust row | photo or tile bento) →
   service cards → "how we grow you" rows (Maps, AI, reviews…) → optional
   own-leads band → every service you sell → 3 steps → optional locations
   → Google reviews → pricing → FAQ → audit with contact details → light
   banner. Owner rules: docs/industry-redesign-brief.md.
--------------------------------------------------------------------------- */

const ServiceLeadForm = dynamic(
  () => import("@/app/components/ServiceLeadForm"),
);

const AUDIT = "#ind-audit";

const REVIEWS_WIDGET =
  "https://cdn.trustindex.io/loader.js?bedc2ba73f755349bf36a19f52c";

function CallPill() {
  return (
    <Pill href={SITE_CONTACT.phoneHref} tone="outline" size="md" fullOnPhone>
      <FiPhone aria-hidden="true" /> Call {SITE_CONTACT.phoneDisplay}
    </Pill>
  );
}

const CONTACT_TILES = [
  {
    icon: <FiPhone />,
    which: "a" as const,
    small: "Call a strategist",
    strong: SITE_CONTACT.phoneDisplay,
    href: SITE_CONTACT.phoneHref,
  },
  {
    icon: <FiMail />,
    which: "b" as const,
    small: "Email us",
    strong: SITE_CONTACT.email,
    href: SITE_CONTACT.emailHref,
  },
  {
    icon: <FiMapPin />,
    which: "ink" as const,
    small: "Our office",
    strong: SITE_CONTACT.address,
    href: SITE_CONTACT.mapHref,
    external: true,
  },
];

export function IndustryTemplate({ c }: { c: IndustryContent }) {
  const p = c.palette;
  const steps = StepUis({
    p,
    audit: c.steps.audit,
    plan: c.steps.plan,
    launch: c.steps.launch,
  });
  const stepBg = [p.a, p.b, "var(--green)"];
  const allLocations = c.locations?.items ?? [];
  const collapsed = allLocations.length > 6;
  const shownLocations = collapsed ? allLocations.slice(0, 5) : allLocations;
  const moreLocations = collapsed ? allLocations.slice(5) : [];
  // Flat tints behind the growth-row cards; no gradient (owner, 25 Oct).
  const panels = c.growthPanel
    ? [c.growthPanel, c.growthPanel, c.growthPanel]
    : [p.bSoft, p.aSoft, p.bSoft];

  return (
    <>
      {/* ind-hcap: heading scale + split-head rules (industry.css), rolled
          out from the home inspector test (owner, 25 Oct 2026). */}
      <main className="dk-root ind-hcap">
        {/* ============================================================ HERO */}
        {c.hero.video ? (
          <VideoHero c={c} ctaHref={AUDIT} />
        ) : (
          <section
            className={cx(
              "tw:relative tw:isolate tw:overflow-clip tw:pt-36 tw:pb-(--sec-y) tw:max-bsmd:pt-[120px] tw:bslg:flex tw:bslg:min-h-[min(100svh,1080px)] tw:bslg:items-center tw:bslg:pt-[120px] tw:bslg:pb-[calc(var(--sec-y)+40px)]",
              HERO_BG,
            )}
            aria-labelledby="ind-h1"
          >
            <HeroMarks />
            {/* Centred copy, the bento floating around it (owner, 25 Oct). */}
            <Wrap>
              <div className="tw:relative">
                <FloatBento p={p} bento={c.hero.bento} part="float" />
                <div className="tw:relative tw:mx-auto tw:max-w-[720px] tw:py-6 tw:text-center tw:min-[1366px]:max-w-[min(720px,calc(100%-480px))] tw:min-[1366px]:py-10 tw:min-[1600px]:max-w-[800px]">
                  <Strip
                    as="h1"
                    id="ind-h1"
                    size="heroWide"
                    className="tw:text-balance tw:bssm:text-[clamp(36px,3.85vw,56px)]"
                  >
                    {c.hero.h1Lead}{" "}
                    <H1Badge
                      p={p}
                      solid={p.aDeep}
                      icon={<Icon name={c.hero.h1Icon} />}
                    />{" "}
                    {c.hero.h1Rest}
                  </Strip>
                  <p
                    className={cx(
                      LEAD,
                      LINKS,
                      "tw:mx-auto tw:mt-6 tw:max-w-[620px]",
                    )}
                  >
                    <RichText value={c.hero.lead} />
                  </p>
                  <div className="tw:mt-8 tw:flex tw:flex-wrap tw:justify-center tw:gap-3">
                    <Pill href={AUDIT} fullOnPhone>
                      {c.hero.cta}
                    </Pill>
                    <CallPill />
                  </div>
                  <TrustLogos
                    mapHref={SITE_CONTACT.mapHref}
                    size="row"
                    className="tw:mt-9 tw:justify-center! tw:gap-x-7!"
                  />
                </div>
                <FloatBento p={p} bento={c.hero.bento} part="row" />
              </div>
            </Wrap>
          </section>
        )}

        {/* ======================================================== SERVICES */}
        <Section labelledBy="ind-svc-h">
          <Wrap>
            <RowHead align="start">
              <div className="tw:min-w-0 tw:max-w-[760px] tw:flex-[1_1_560px]">
                <Strip id="ind-svc-h" className="tw:text-balance">
                  <TitleLines text={c.services.title} />
                </Strip>
              </div>
              <div className="tw:max-w-[440px] tw:flex-[0_1_440px] tw:bslg:pt-2">
                <p className={LEAD}>{c.services.lead}</p>
                <div className="tw:mt-6">
                  <Pill href={AUDIT} arrow fullOnPhone>
                    {c.services.cta}
                  </Pill>
                </div>
              </div>
            </RowHead>
            <div className="tw:grid tw:grid-cols-3 tw:gap-6 tw:max-bslg:grid-cols-2 tw:max-bssm:grid-cols-1 tw:max-bssm:gap-4">
              {c.services.items.map((s, i) => (
                <article
                  key={s.title}
                  className="tw:flex tw:flex-col tw:rounded-(--r-xl) tw:bg-white tw:px-7 tw:pt-7 tw:pb-7 tw:transition tw:duration-300 tw:hover:-translate-y-1 tw:max-bssm:px-6"
                >
                  <span
                    className="tw:grid tw:size-[56px] tw:place-items-center tw:rounded-full tw:text-[22px] tw:text-white"
                    style={{ background: i % 2 ? p.b : p.a }}
                    aria-hidden="true"
                  >
                    <Icon name={s.icon} />
                  </span>
                  <h3 className="tw:mt-6 tw:text-[22px]/[1.25]">{s.title}</h3>
                  <p className="tw:mt-3 tw:text-[16.5px]/[1.6] tw:text-(--text)">
                    {s.desc}
                  </p>
                  <ul className="tw:mt-5 tw:mb-6 tw:grid tw:gap-2.5 tw:pt-5 tw:[border-top:1px_solid_var(--line)]">
                    {s.points.map((pt) => (
                      <li
                        key={pt}
                        className="tw:flex tw:items-center tw:gap-2.5 tw:text-[15.5px] tw:font-medium tw:text-(--ink)"
                      >
                        <span
                          className="tw:grid tw:size-[22px] tw:flex-none tw:place-items-center tw:rounded-full tw:text-[12px]"
                          style={softStyle(p, i)}
                          aria-hidden="true"
                        >
                          <FiCheck strokeWidth={3} />
                        </span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <span className="tw:mt-auto tw:flex tw:flex-wrap tw:gap-x-5 tw:gap-y-1">
                    {s.links.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="tw:group tw:inline-flex tw:items-center tw:gap-2 tw:text-[15px] tw:font-medium tw:text-(--blue)"
                      >
                        {l.label}
                        <FiArrowRight
                          aria-hidden="true"
                          className="tw:transition-transform tw:group-hover:translate-x-[3px]"
                        />
                      </Link>
                    ))}
                  </span>
                </article>
              ))}
            </div>
          </Wrap>
        </Section>

        {/* ========================================================== GROWTH */}
        <Section labelledBy="ind-grow-h" tone="white">
          <Wrap>
            <CenterHead id="ind-grow-h" title={c.growth.title}>
              {c.growth.lead}
            </CenterHead>
            {c.growth.rows.map((g, i) => (
              <div
                key={g.title}
                className={cx(
                  "tw:grid tw:grid-cols-2 tw:items-center tw:gap-16 tw:max-bslg:grid-cols-1 tw:max-bslg:gap-9",
                  i > 0 && "tw:mt-16 tw:max-bslg:mt-[72px]",
                )}
              >
                <div
                  className={cx(
                    "tw:grid tw:place-items-center tw:rounded-(--r-xl) tw:px-8 tw:py-12 tw:max-bssm:px-4 tw:max-bssm:py-8",
                    i % 2 === 1 && "tw:bslg:order-2",
                  )}
                  style={{ background: panels[i % 3] }}
                >
                  <GrowthUiView p={p} ui={g.ui} />
                </div>
                <div>
                  <h3 className="tw:text-[clamp(28px,3vw,44px)] tw:leading-[1.08] tw:tracking-[-0.03em] tw:text-balance">
                    {g.title}
                  </h3>
                  <p className={cx(LEAD, LINKS, "tw:mt-5")}>
                    <RichText value={g.body} />
                  </p>
                  <ul className="tw:mt-7 tw:grid tw:grid-cols-2 tw:gap-x-6 tw:gap-y-3 tw:max-bssm:grid-cols-1">
                    {g.points.map((t, k) => (
                      <li
                        key={t}
                        className="tw:flex tw:items-center tw:gap-3 tw:text-[16px] tw:font-medium tw:text-(--ink)"
                      >
                        <FiCheck
                          aria-hidden="true"
                          className="tw:size-6 tw:flex-none tw:rounded-full tw:p-[5px] tw:[stroke-width:3]"
                          style={softStyle(p, k)}
                        />
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="tw:mt-8">
                    <Pill href={AUDIT} arrow fullOnPhone>
                      {g.cta}
                    </Pill>
                  </div>
                </div>
              </div>
            ))}
          </Wrap>
        </Section>

        {/* ======================================================= OWN LEADS */}
        {c.ownLeads && (
          <Section labelledBy="ind-leads-h">
            <Wrap flushOnPhone>
              <div className="tw:grid tw:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] tw:items-center tw:gap-12 tw:rounded-(--r-xl) tw:bg-(--ink) tw:p-10 tw:text-white tw:max-bslg:grid-cols-1 tw:max-bslg:gap-8 tw:max-bssm:px-[18px] tw:max-bssm:py-8">
                <div>
                  <Strip
                    id="ind-leads-h"
                    size="card"
                    className="tw:text-balance tw:text-white"
                  >
                    {c.ownLeads.title}
                  </Strip>
                  <p className="tw:mt-5 tw:max-w-[52ch] tw:text-lg/[1.65] tw:text-[#b7c4dd] tw:[&_a]:font-medium tw:[&_a]:text-white tw:[&_a]:underline">
                    <RichText value={c.ownLeads.body} />
                  </p>
                  <Pill
                    href={AUDIT}
                    tone="white"
                    arrow
                    fullOnPhone
                    className="tw:mt-8"
                  >
                    {c.ownLeads.cta}
                  </Pill>
                </div>
                <div className="tw:overflow-x-auto tw:rounded-[24px] tw:bg-white tw:p-2 tw:text-(--ink)">
                  <table className="tw:w-full tw:min-w-[460px] tw:border-collapse tw:text-left tw:text-[15px]">
                    <caption className="tw:sr-only">{c.ownLeads.title}</caption>
                    <thead>
                      <tr className="tw:text-[13px] tw:text-(--muted)">
                        <th className="tw:px-4 tw:py-3" />
                        <th className="tw:px-4 tw:py-3 tw:font-semibold">
                          {c.ownLeads.colShared}
                        </th>
                        <th
                          className="tw:rounded-t-[16px] tw:px-4 tw:py-3 tw:font-semibold"
                          style={{ background: p.aSoft, color: p.aText }}
                        >
                          {c.ownLeads.colOwn}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {c.ownLeads.rows.map(([k, shared, own], i, all) => (
                        <tr key={k} className="tw:border-t tw:border-(--line)">
                          <th
                            scope="row"
                            className="tw:px-4 tw:py-3.5 tw:font-semibold"
                          >
                            {k}
                          </th>
                          <td className="tw:px-4 tw:py-3.5 tw:text-(--muted)">
                            <span className="tw:flex tw:items-center tw:gap-2">
                              <FiX
                                aria-hidden="true"
                                className="tw:size-4 tw:flex-none tw:text-(--red)"
                              />
                              {shared}
                            </span>
                          </td>
                          <td
                            className={cx(
                              "tw:px-4 tw:py-3.5 tw:font-medium",
                              i === all.length - 1 && "tw:rounded-b-[16px]",
                            )}
                            style={{ background: p.aSoft }}
                          >
                            <span className="tw:flex tw:items-center tw:gap-2">
                              <FiCheck
                                aria-hidden="true"
                                className="tw:size-4 tw:flex-none tw:text-(--green)"
                              />
                              {own}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Wrap>
          </Section>
        )}

        {/* ===================================================== SPECIALTIES */}
        <Section labelledBy="ind-spec-h" tone="white">
          <Wrap>
            <CenterHead id="ind-spec-h" title={c.specialties.title}>
              {c.specialties.lead}
            </CenterHead>
            <div
              className={cx(
                "tw:grid tw:gap-6 tw:max-bslg:grid-cols-1",
                c.specialties.photo
                  ? "tw:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]"
                  : "tw:grid-cols-1",
              )}
            >
              {c.specialties.photo && (
                <div className="tw:relative tw:min-h-[360px] tw:overflow-hidden tw:rounded-(--r-xl) tw:max-bslg:aspect-[3/2] tw:max-bslg:min-h-0">
                  <Image
                    src={c.specialties.photo.src}
                    alt={c.specialties.photo.alt}
                    fill
                    sizes="(max-width: 991px) 100vw, 40vw"
                    className="tw:object-cover"
                  />
                  <span className="tw:absolute tw:inset-x-0 tw:bottom-0 tw:bg-[linear-gradient(0deg,rgba(12,21,38,0.85),transparent)] tw:px-6 tw:pt-16 tw:pb-6 tw:text-white">
                    <b className="tw:block tw:text-[22px] tw:font-medium tw:tracking-[-0.02em]">
                      {c.specialties.photo.caption}
                    </b>
                    <span className="tw:text-[15px] tw:text-white/75">
                      {c.specialties.photo.sub}
                    </span>
                  </span>
                </div>
              )}
              <ul
                className={cx(
                  "tw:grid tw:gap-3 tw:max-bssm:grid-cols-1",
                  c.specialties.photo
                    ? "tw:grid-cols-2"
                    : "tw:grid-cols-4 tw:max-bsxl:grid-cols-2",
                )}
              >
                {c.specialties.items.map((it, i) => (
                  <li
                    key={it.name}
                    className="tw:flex tw:items-center tw:gap-4 tw:rounded-[22px] tw:bg-(--panel) tw:px-5 tw:py-4"
                  >
                    <span
                      className="tw:grid tw:size-12 tw:flex-none tw:place-items-center tw:rounded-[14px] tw:text-[22px]"
                      style={softStyle(p, i)}
                      aria-hidden="true"
                    >
                      <Icon name={it.icon} />
                    </span>
                    <span className="tw:min-w-0">
                      <h3 className="tw:text-[17.5px]/[1.3]">{it.name}</h3>
                      <span className="tw:mt-1 tw:block tw:text-[14.5px]/[1.45] tw:text-(--text)">
                        {it.tactic}
                      </span>
                    </span>
                  </li>
                ))}
                <li
                  className={cx(
                    "tw:max-bssm:col-span-1",
                    c.specialties.photo
                      ? "tw:col-span-2"
                      : "tw:col-span-4 tw:max-bsxl:col-span-2",
                  )}
                >
                  <Link
                    href={AUDIT}
                    className="tw:group tw:flex tw:items-center tw:justify-between tw:gap-3 tw:rounded-[22px] tw:bg-white tw:px-5 tw:py-4 tw:text-[16px] tw:font-medium tw:text-(--ink) tw:ring-1 tw:ring-(--line) tw:transition tw:hover:ring-[#cbd5e1]"
                  >
                    {c.specialties.more}
                    <span className="tw:grid tw:size-9 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-(--ink) tw:text-white tw:transition-transform tw:group-hover:translate-x-[3px]">
                      <FiArrowRight aria-hidden="true" />
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </Wrap>
        </Section>

        {/* =========================================================== STEPS */}
        <Section labelledBy="ind-steps-h">
          <Wrap>
            <RowHead align="start">
              <div className="tw:min-w-0 tw:max-w-[760px] tw:flex-[1_1_560px]">
                <Strip id="ind-steps-h" className="tw:text-balance">
                  {c.steps.title}
                </Strip>
              </div>
              <div className="tw:max-w-[440px] tw:flex-[0_1_440px] tw:bslg:pt-2">
                <p className={LEAD}>{c.steps.lead}</p>
                <div className="tw:mt-6">
                  <CallPill />
                </div>
              </div>
            </RowHead>
            <ol className="tw:grid tw:grid-cols-3 tw:gap-6 tw:max-bslg:grid-cols-1">
              {c.steps.items.map((s, i) => (
                <li
                  key={s.h}
                  className="tw:flex tw:flex-col tw:overflow-hidden tw:rounded-(--r-xl) tw:bg-white"
                >
                  <div className="tw:px-7 tw:pt-7 tw:pb-6">
                    <span
                      className="tw:grid tw:size-12 tw:place-items-center tw:rounded-full tw:text-[18px] tw:font-semibold tw:text-white"
                      style={{ background: stepBg[i] }}
                    >
                      {i + 1}
                    </span>
                    <h3 className="tw:mt-5 tw:text-[23px]/[1.2]">{s.h}</h3>
                    <p className="tw:mt-3 tw:text-[16px]/[1.6] tw:text-(--text)">
                      {s.p}
                    </p>
                  </div>
                  <div
                    className="tw:relative tw:mx-5 tw:mt-auto tw:min-h-[240px] tw:overflow-hidden tw:rounded-t-[28px]"
                    style={{ background: stepBg[i] }}
                  >
                    <div className="tw:absolute tw:top-[26px] tw:right-[22px] tw:-bottom-5 tw:left-[22px] tw:overflow-hidden tw:rounded-[20px] tw:[box-shadow:var(--lift)]">
                      {steps[i]}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </Wrap>
        </Section>

        {/* ======================================================= LOCATIONS */}
        {c.locations && (
          <Section labelledBy="ind-loc-h" tone="white">
            <Wrap>
              <RowHead align="start">
                <div className="tw:min-w-0 tw:max-w-[760px] tw:flex-[1_1_560px]">
                  <Strip id="ind-loc-h" className="tw:text-balance">
                    {c.locations.title}
                  </Strip>
                </div>
                <p
                  className={cx(
                    LEAD,
                    LINKS,
                    "tw:max-w-[440px] tw:flex-[0_1_440px] tw:bslg:pt-2",
                  )}
                >
                  <RichText value={c.locations.lead} />
                </p>
              </RowHead>
              {/* More than six locations: five cards, then a "more" card
                  that opens the rest in a popup (owner, 25 Oct). */}
              <ul
                className={cx(
                  "tw:grid tw:gap-3 tw:max-bsxl:grid-cols-2 tw:max-bssm:grid-cols-1",
                  collapsed ? "tw:grid-cols-3" : "tw:grid-cols-4",
                )}
              >
                {shownLocations.map((s, i) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="tw:group tw:flex tw:h-full tw:items-center tw:gap-3.5 tw:rounded-[22px] tw:bg-(--panel) tw:px-5 tw:py-4 tw:transition tw:hover:-translate-y-0.5"
                    >
                      <span
                        className="tw:grid tw:size-11 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[17px]"
                        style={softStyle(p, i)}
                        aria-hidden="true"
                      >
                        <FiMapPin />
                      </span>
                      <span className="tw:min-w-0 tw:flex-1">
                        <b className="tw:block tw:text-[17px] tw:font-semibold tw:text-(--ink)">
                          {s.name}
                        </b>
                        <span className="tw:block tw:truncate tw:text-[13.5px] tw:text-(--muted)">
                          {s.cities}
                        </span>
                      </span>
                      <FiArrowRight
                        aria-hidden="true"
                        className="tw:flex-none tw:text-(--muted) tw:transition-transform tw:group-hover:translate-x-[3px] tw:group-hover:text-(--blue)"
                      />
                    </Link>
                  </li>
                ))}
                {collapsed ? (
                  <li>
                    <MoreLocations
                      items={moreLocations}
                      title={`${c.niche} Marketing in Every State We Cover`}
                      note={c.locations.other}
                      background={`linear-gradient(120deg, ${p.a}, ${p.b})`}
                      pinStyles={[softStyle(p, 0), softStyle(p, 1)]}
                    />
                  </li>
                ) : (
                  <li
                    className="tw:flex tw:items-center tw:rounded-[22px] tw:px-5 tw:py-4 tw:text-[16px] tw:font-medium tw:text-white"
                    style={{
                      background: `linear-gradient(120deg, ${p.a}, ${p.b})`,
                    }}
                  >
                    {c.locations.other}
                  </li>
                )}
              </ul>
            </Wrap>
          </Section>
        )}

        {/* ========================================================= REVIEWS */}
        <Section labelledBy="ind-rev-h">
          <Wrap>
            <RowHead align="start">
              {/* The heading shrinks so the avatars stay beside it, even
                  for long titles (owner, 25 Oct). */}
              <div className="tw:min-w-0 tw:max-w-[820px] tw:flex-[1_1_480px]">
                <Strip id="ind-rev-h" className="tw:text-balance">
                  {c.reviews.title}
                </Strip>
                <p className={cx(LEAD, "tw:mt-4")}>{c.reviews.lead}</p>
              </div>
              <div className="tw:relative tw:flex-none tw:pt-2">
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
            title: c.pricing.title,
            compareTitle: c.pricing.compareTitle,
            addOnsTitle: c.pricing.addOnsTitle,
            customTitle: c.pricing.customTitle,
          }}
          idPrefix="ind"
          ctaHref={AUDIT}
          ctaLabel={c.hero.cta}
        />

        {/* ============================================================= FAQ */}
        <Section labelledBy="ind-faq-h" tone="white">
          <Wrap>
            <CenterHead id="ind-faq-h" title={c.faq.title}>
              {c.faq.lead}
            </CenterHead>
            <div className="tw:mx-auto tw:max-w-[1080px] tw:rounded-[32px] tw:bg-(--panel) tw:px-11 tw:py-2 tw:max-bsmd:px-6 tw:max-bsmd:py-1 tw:max-bssm:rounded-3xl tw:max-bssm:px-5">
              {c.faq.items.map((item, i) => (
                <details
                  key={item.q}
                  open={i === 0}
                  className="tw:group tw:border-t tw:border-(--line) tw:first:border-t-0"
                >
                  <summary className="tw:flex tw:cursor-pointer tw:items-center tw:justify-between tw:gap-5 tw:py-[22px] tw:text-(--ink)">
                    <h3 className="tw:text-xl/[1.35] tw:font-medium tw:tracking-[-0.01em] tw:max-bsmd:text-[17.5px]">
                      {item.q}
                    </h3>
                    <FiPlus
                      aria-hidden="true"
                      className="tw:size-[22px] tw:flex-none tw:transition-transform tw:duration-200 tw:group-open:rotate-45"
                    />
                  </summary>
                  <p className="tw:max-w-[76ch] tw:pb-[22px] tw:text-lg/[1.65] tw:text-(--text)">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </Wrap>
        </Section>

        {/* =========================================================== AUDIT */}
        <Section id="ind-audit" labelledBy="ind-audit-h">
          <Wrap flushOnPhone>
            <div className="tw:grid tw:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] tw:items-start tw:gap-12 tw:rounded-[48px] tw:bg-white tw:px-12 tw:py-14 tw:max-bslg:grid-cols-1 tw:max-bslg:gap-10 tw:max-bslg:px-10 tw:max-bssm:rounded-[28px] tw:max-bssm:px-4 tw:max-bssm:py-10">
              <div>
                <Strip id="ind-audit-h" size="card" className="tw:text-balance">
                  {c.audit.title}
                </Strip>
                <p className={cx(LEAD, LINKS, "tw:mt-5")}>
                  <RichText value={c.audit.lead} />
                </p>
                <ul className="tw:mt-7 tw:grid tw:grid-cols-2 tw:gap-x-6 tw:gap-y-3 tw:max-bssm:grid-cols-1">
                  {c.audit.points.map((t, i) => (
                    <li
                      key={t}
                      className="tw:flex tw:items-center tw:gap-3 tw:text-[16px]/[1.35] tw:text-(--ink-2)"
                    >
                      <FiCheck
                        aria-hidden="true"
                        className="tw:size-6 tw:flex-none tw:rounded-full tw:p-[5px] tw:[stroke-width:3]"
                        style={softStyle(p, i)}
                      />
                      {t}
                    </li>
                  ))}
                </ul>
                {/* Contact details (owner rule: every contact block lists
                    phone, email and address on the left). */}
                <ul className="tw:mt-9 tw:grid tw:grid-cols-2 tw:gap-3 tw:max-bsxl:grid-cols-1 tw:max-bslg:grid-cols-2 tw:max-bssm:grid-cols-1">
                  {CONTACT_TILES.map((t, i) => (
                    <li
                      key={t.small}
                      className={cx(
                        i === CONTACT_TILES.length - 1 &&
                          "tw:col-span-2 tw:max-bsxl:col-span-1 tw:max-bslg:col-span-2 tw:max-bssm:col-span-1",
                      )}
                    >
                      <a
                        href={t.href}
                        className="tw:flex tw:h-full tw:items-center tw:gap-3.5 tw:rounded-[20px] tw:bg-white tw:p-4 tw:ring-1 tw:ring-(--line) tw:transition tw:hover:-translate-y-0.5 tw:hover:ring-[#cbd5e1]"
                        {...(t.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        <span
                          className="tw:grid tw:size-11 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[18px] tw:text-white"
                          style={{
                            background:
                              t.which === "ink"
                                ? "linear-gradient(135deg,#334155,#0c1526)"
                                : grad(p, t.which),
                          }}
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
              </div>
              <div className="tw:w-full">
                <ServiceLeadForm {...c.audit.form} />
              </div>
            </div>
          </Wrap>
        </Section>

        {/* ========================================================== BANNER */}
        <GradientBanner
          id="ind-close-h"
          title={c.banner.title}
          lead={c.banner.lead}
          cta={c.hero.cta}
          ctaHref={AUDIT}
        />
      </main>
      <RelatedServices current={c.liveUrl} />
      <Footer />
    </>
  );
}
