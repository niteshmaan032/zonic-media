import Link from "next/link";
import dynamic from "next/dynamic";
import type { ReactNode } from "react";
import {
  FiArrowRight,
  FiCheck,
  FiMail,
  FiMapPin,
  FiPhone,
  FiPlus,
} from "react-icons/fi";

import "@/components/rd/dfw-kit/kit.css";
import "@/components/rd/dfw-kit/ui.css";
import "@/components/rd/delaware/delaware.css";
import "./industry.css";

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
import { TrustLogos } from "@/components/rd/dfw-kit/visuals";
import { PricingSection } from "@/components/rd/home/HomePricing";
import { SITE_CONTACT } from "@/shared/siteConfig";
import { Icon } from "./icons";
import { siblingLinks } from "./siblings";
import type { LocationContent } from "./types";
import {
  GrowthUiView,
  HERO_BG,
  HeroMarks,
  LINKS,
  RichText,
  FloatBento,
  TitleLines,
  softStyle,
} from "./ui";
import { GradientBanner } from "./GradientBanner";

/* ---------------------------------------------------------------------------
   LOCATION PAGE TEMPLATE (24 Oct 2026) — the Florida HVAC draft's layout,
   driven by one LocationContent data file per niche + place.

   Order: hero (H1 + lead + CTAs + trust row | four growth tiles, no
   images, no prices) → service cards → "how we grow you" rows → regions
   and cities → Google reviews → pricing → split FAQ → audit with contact
   details → light banner. Owner rules: docs/industry-redesign-brief.md.
--------------------------------------------------------------------------- */

const ServiceLeadForm = dynamic(
  () => import("@/app/components/ServiceLeadForm"),
);

const AUDIT = "#loc-audit";

const REVIEWS_WIDGET =
  "https://cdn.trustindex.io/loader.js?bedc2ba73f755349bf36a19f52c";

function CallPill() {
  return (
    <Pill href={SITE_CONTACT.phoneHref} tone="outline" size="md" fullOnPhone>
      <FiPhone aria-hidden="true" /> Call {SITE_CONTACT.phoneDisplay}
    </Pill>
  );
}

/** The H1 with an optional phrase kept on one line. */
function H1Text({ h1, noWrap }: { h1: string; noWrap?: string }) {
  if (!noWrap || !h1.includes(noWrap)) return <>{h1}</>;
  const [before, after] = h1.split(noWrap);
  return (
    <>
      {before}
      {/* Wraps on phones, where the larger H1 cannot fit the phrase. */}
      <span className="tw:bssm:whitespace-nowrap">{noWrap}</span>
      {after}
    </>
  );
}

export function LocationTemplate({ c }: { c: LocationContent }) {
  const p = c.palette;
  const siblings = siblingLinks(c.parent.href, c.liveUrl);
  const heroTiles = { kind: "tiles" as const, ...c.hero.tiles };
  // Flat tints behind the growth-row cards; no gradient (owner, 25 Oct).
  const panels = [p.bSoft, p.aSoft, p.bSoft];
  const contactRows: {
    icon: ReactNode;
    color: string;
    label: string;
    value: string;
    href: string;
    external?: boolean;
  }[] = [
    {
      icon: <FiPhone />,
      color: p.b,
      label: "Call a strategist",
      value: SITE_CONTACT.phoneDisplay,
      href: SITE_CONTACT.phoneHref,
    },
    {
      icon: <FiMail />,
      color: p.a,
      label: "Email the team",
      value: SITE_CONTACT.email,
      href: SITE_CONTACT.emailHref,
    },
    {
      icon: <FiMapPin />,
      color: "#0c1526",
      label: "Head office",
      value: SITE_CONTACT.address,
      href: SITE_CONTACT.mapHref,
      external: true,
    },
  ];

  return (
    <>
      {/* ind-hcap: heading scale + split-head rules (industry.css), same as
          the industry pages (owner, 25 Oct 2026). */}
      <main className="dk-root ind-hcap">
        {/* ============================================================ HERO */}
        <section
          className={cx(
            "tw:relative tw:isolate tw:overflow-clip tw:pt-36 tw:pb-(--sec-y) tw:max-bsmd:pt-[120px] tw:bslg:flex tw:bslg:min-h-[min(100svh,1080px)] tw:bslg:items-center tw:bslg:pt-[120px] tw:bslg:pb-[calc(var(--sec-y)+40px)]",
            HERO_BG,
          )}
          aria-labelledby="loc-h1"
        >
          <HeroMarks />
          {/* Centred copy, the four tiles floating around it (owner, 25 Oct;
              same layout as the industry pages, tiles only on location
              pages). */}
          <Wrap>
            <div className="tw:relative">
              <FloatBento p={p} bento={heroTiles} part="float" />
              <div className="tw:relative tw:mx-auto tw:max-w-[720px] tw:py-6 tw:text-center tw:min-[1366px]:max-w-[min(720px,calc(100%-480px))] tw:min-[1366px]:py-10 tw:min-[1600px]:max-w-[800px]">
                <Strip
                  as="h1"
                  id="loc-h1"
                  size="heroWide"
                  className="tw:text-balance tw:bssm:text-[clamp(36px,3.85vw,56px)]"
                >
                  <H1Text h1={c.hero.h1} noWrap={c.hero.h1NoWrap} />
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
              <FloatBento p={p} bento={heroTiles} part="row" />
            </div>
          </Wrap>
        </section>

        {/* ======================================================== SERVICES */}
        <Section labelledBy="loc-svc-h">
          <Wrap>
            <RowHead align="start">
              <div className="tw:min-w-0 tw:max-w-[760px] tw:flex-[1_1_560px]">
                <Strip id="loc-svc-h" className="tw:text-balance">
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
        <Section labelledBy="loc-grow-h" tone="white">
          <Wrap>
            <CenterHead id="loc-grow-h" title={c.growth.title}>
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

        {/* ========================================================= REGIONS */}
        <Section labelledBy="loc-reg-h">
          <Wrap>
            <RowHead align="start">
              <div className="tw:min-w-0 tw:max-w-[760px] tw:flex-[1_1_560px]">
                <Strip id="loc-reg-h" className="tw:text-balance">
                  {c.regions.title}
                </Strip>
              </div>
              <p
                className={cx(
                  LEAD,
                  "tw:max-w-[440px] tw:flex-[0_1_440px] tw:bslg:pt-2",
                )}
              >
                {c.regions.lead}
              </p>
            </RowHead>
            <ul className="tw:grid tw:grid-cols-3 tw:gap-4 tw:max-bslg:grid-cols-2 tw:max-bssm:grid-cols-1">
              {c.regions.items.map((r, i) => (
                <li key={r.name}>
                  <div className="tw:flex tw:h-full tw:flex-col tw:overflow-hidden tw:rounded-[24px] tw:bg-white tw:ring-1 tw:ring-(--line)">
                    <span
                      className="tw:flex tw:items-center tw:gap-2.5 tw:px-5 tw:py-3.5 tw:text-[17px] tw:font-semibold tw:text-white"
                      style={{ background: i % 2 ? p.b : p.a }}
                    >
                      <span className="tw:grid tw:size-8 tw:place-items-center tw:rounded-full tw:bg-white/20 tw:text-[15px]">
                        <FiMapPin />
                      </span>
                      {r.name}
                    </span>
                    <span className="tw:flex tw:flex-1 tw:flex-col tw:gap-2 tw:px-5 tw:pt-4 tw:pb-5">
                      <span className="tw:text-[15px] tw:font-medium tw:text-(--ink)">
                        {r.cities}
                      </span>
                      <span className="tw:text-[14.5px]/[1.5] tw:text-(--text)">
                        {r.focus}
                      </span>
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <Link
              href={AUDIT}
              className="tw:group tw:mt-4 tw:flex tw:items-center tw:justify-between tw:gap-3 tw:rounded-[24px] tw:px-6 tw:py-5 tw:text-[17px] tw:font-medium tw:text-white tw:max-bssm:px-5"
              style={{
                background: `linear-gradient(110deg, ${p.b}, ${p.bDeep})`,
              }}
            >
              {c.regions.other}
              <span className="tw:grid tw:size-10 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-white tw:text-(--ink) tw:transition-transform tw:group-hover:translate-x-[3px]">
                <FiArrowRight aria-hidden="true" />
              </span>
            </Link>
            {siblings.length > 0 && (
              <nav
                aria-label={`${c.parent.niche} marketing in other states`}
                data-dupskip=""
                className="tw:mt-4 tw:rounded-[24px] tw:bg-white tw:px-6 tw:py-5 tw:ring-1 tw:ring-(--line) tw:max-bssm:px-5"
              >
                <p className="tw:text-[15px] tw:font-semibold tw:text-(--ink)">
                  {c.parent.niche} marketing in other states
                </p>
                <ul className="tw:mt-3 tw:flex tw:flex-wrap tw:gap-2">
                  {siblings.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="tw:inline-flex tw:rounded-full tw:bg-(--panel) tw:px-3.5 tw:py-1.5 tw:text-[14px] tw:font-medium tw:text-(--ink) tw:transition tw:hover:bg-(--line)"
                      >
                        {l.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </Wrap>
        </Section>

        {/* ========================================================= REVIEWS */}
        <Section labelledBy="loc-rev-h" tone="white">
          <Wrap>
            <CenterHead id="loc-rev-h" title={c.reviews.title}>
              {c.reviews.lead}
            </CenterHead>
            <div className="tw:flex tw:min-h-[360px] tw:flex-col tw:justify-center tw:rounded-(--r-xl) tw:bg-(--panel) tw:px-6 tw:py-7 tw:max-bssm:px-3 tw:max-bssm:py-5">
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
          idPrefix="loc"
          ctaHref={AUDIT}
          ctaLabel={c.hero.cta}
        />

        {/* ============================================================= FAQ */}
        <Section labelledBy="loc-faq-h" tone="white">
          <Wrap>
            <div className="tw:grid tw:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] tw:items-start tw:gap-14 tw:max-bslg:grid-cols-1 tw:max-bslg:gap-8">
              <div className="tw:bslg:sticky tw:bslg:top-28">
                <Strip id="loc-faq-h" size="card" className="tw:text-balance">
                  {c.faq.title}
                </Strip>
                <p className={cx(LEAD, "tw:mt-5")}>{c.faq.lead}</p>
                <div className="tw:mt-7">
                  <CallPill />
                </div>
              </div>
              <div>
                {c.faq.items.map((item, i) => (
                  <details
                    key={item.q}
                    open={i === 0}
                    className="tw:group tw:mb-3 tw:rounded-[22px] tw:bg-(--panel) tw:px-6 tw:max-bssm:px-5"
                  >
                    <summary className="tw:flex tw:cursor-pointer tw:items-center tw:justify-between tw:gap-5 tw:py-5 tw:text-(--ink)">
                      <h3 className="tw:text-[18.5px]/[1.35] tw:font-medium tw:max-bsmd:text-[17px]">
                        {item.q}
                      </h3>
                      <span
                        className="tw:grid tw:size-8 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-white tw:transition-transform tw:duration-200 tw:group-open:rotate-45"
                        aria-hidden="true"
                      >
                        <FiPlus />
                      </span>
                    </summary>
                    <p className="tw:pb-5 tw:text-[16.5px]/[1.65] tw:text-(--text)">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </Wrap>
        </Section>

        {/* =========================================================== AUDIT */}
        <Section id="loc-audit" labelledBy="loc-audit-h">
          <Wrap flushOnPhone>
            <div className="tw:grid tw:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] tw:items-start tw:gap-12 tw:rounded-[48px] tw:bg-white tw:px-12 tw:py-14 tw:max-bslg:grid-cols-1 tw:max-bslg:gap-10 tw:max-bslg:px-10 tw:max-bssm:rounded-[28px] tw:max-bssm:px-4 tw:max-bssm:py-10">
              <div>
                <Strip id="loc-audit-h" size="card" className="tw:text-balance">
                  {c.audit.title}
                </Strip>
                <p className={cx(LEAD, LINKS, "tw:mt-5")}>
                  <RichText value={c.audit.lead} />
                </p>
                <ul className="tw:mt-7 tw:grid tw:gap-3">
                  {c.audit.points.map((t, i) => (
                    <li
                      key={t}
                      className="tw:flex tw:items-center tw:gap-3 tw:text-[16.5px] tw:text-(--ink-2)"
                    >
                      <span
                        className="tw:grid tw:size-7 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[13px]"
                        style={softStyle(p, i)}
                        aria-hidden="true"
                      >
                        <FiCheck strokeWidth={3} />
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
                {/* Contact details (owner rule: every contact block lists
                    phone, email and address on the left). */}
                <ul className="tw:mt-8 tw:rounded-[24px] tw:bg-(--panel) tw:px-5 tw:py-1.5 tw:max-bssm:px-4">
                  {contactRows.map((r, i) => (
                    <li
                      key={r.label}
                      className={cx(
                        i > 0 &&
                          "tw:[border-top:1.5px_dashed_rgba(12,21,38,0.12)]",
                      )}
                    >
                      <a
                        href={r.href}
                        className="tw:group tw:flex tw:items-center tw:gap-4 tw:py-4"
                        {...(r.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        <span
                          className="tw:grid tw:size-11 tw:flex-none tw:place-items-center tw:rounded-[14px] tw:text-[18px] tw:text-white"
                          style={{ background: r.color }}
                          aria-hidden="true"
                        >
                          {r.icon}
                        </span>
                        <span className="tw:min-w-0 tw:flex-1">
                          <small className="tw:block tw:text-[13px] tw:text-(--muted)">
                            {r.label}
                          </small>
                          <strong className="tw:block tw:text-[16.5px]/[1.4] tw:font-semibold tw:break-words tw:text-(--ink)">
                            {r.value}
                          </strong>
                        </span>
                        <FiArrowRight
                          aria-hidden="true"
                          className="tw:flex-none tw:text-(--muted) tw:transition-transform tw:group-hover:translate-x-[3px] tw:group-hover:text-(--ink)"
                        />
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
          id="loc-close-h"
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
