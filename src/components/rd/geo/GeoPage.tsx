import dynamic from "next/dynamic";
import Link from "next/link";
import { FiArrowRight, FiCheck, FiMail, FiPhone, FiPlus } from "react-icons/fi";

import "@/components/rd/dfw-kit/kit.css";
import "@/components/rd/industry/industry.css";
import "./geo.css";

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
import { GradientBanner } from "@/components/rd/industry/GradientBanner";
import { HeroMarks, LINKS, RichText } from "@/components/rd/industry/ui";
import { SITE_CONTACT } from "@/shared/siteConfig";
import {
  AUDIT,
  AUDIT_ID,
  BANNER,
  COMPARE,
  ENGINES,
  FAQ,
  HERO,
  LOCAL,
  PAGE_URL,
  PRICING,
  PROCESS,
  REPORT,
  REVIEWS,
  SERVICES,
  TIMELINE,
  WHAT,
} from "./content";
import { GeoHero } from "./GeoHero";
import {
  CompareTable,
  EngineTable,
  REPORT_ICONS,
  ReportBoard,
  SERVICE_ICONS,
  STEP_MINIS,
  WhatBento,
} from "./geoUi";

/* ---------------------------------------------------------------------------
   /services/generative-engine-optimization (26 Nov 2026).

   Owner brief: a GEO service page, "Generative Engine Optimization Company
   for AI Visibility", researched first (notes in research_notes/GEO
   service page research/). Home typography and palette, the /home2 hero
   background, an animated hero card that explains the service, UI cards
   instead of photos, no section reveals, the 26 Nov readable-text floor,
   phone and email only beside the form.

   Order: hero → what GEO is (bento, with query fan-out) → services → how
   each engine finds sources → GEO vs SEO vs AEO → process → home service
   and local businesses → monthly report → first 90 days → Google reviews
   → pricing (owner-locked; headings only) → FAQ → free audit → gradient
   banner.
   Copy lives in ./content.ts.
--------------------------------------------------------------------------- */

const ServiceLeadForm = dynamic(
  () => import("@/app/components/ServiceLeadForm"),
);

const AUDIT_HREF = `#${AUDIT_ID}`;
const REVIEWS_WIDGET =
  "https://cdn.trustindex.io/loader.js?bedc2ba73f755349bf36a19f52c";

function CallPill() {
  return (
    <Pill href={SITE_CONTACT.phoneHref} tone="outline" size="md" fullOnPhone>
      <FiPhone aria-hidden="true" /> Call {SITE_CONTACT.phoneDisplay}
    </Pill>
  );
}

export function GeoPage() {
  // Phone and email only (owner, 26 Nov 2026: the office address stays in
  // the footer and on the contact page).
  const contactTiles = [
    {
      icon: <FiPhone />,
      small: "Talk to our GEO team",
      strong: SITE_CONTACT.phoneDisplay,
      href: SITE_CONTACT.phoneHref,
      tone: "tw:bg-(--blue) tw:text-white",
    },
    {
      icon: <FiMail />,
      small: "Email us",
      strong: SITE_CONTACT.email,
      href: SITE_CONTACT.emailHref,
      tone: "tw:bg-(--ink) tw:text-white",
    },
  ];

  return (
    <>
      <main className="dk-root ind-hcap geo-root">
        {/* ============================================================ HERO */}
        <section
          className="tw:relative tw:isolate tw:overflow-clip tw:bg-[radial-gradient(circle_at_16%_12%,rgba(49,87,245,0.07),transparent_26%),radial-gradient(circle_at_88%_6%,rgba(110,80,247,0.065),transparent_22%),linear-gradient(180deg,#fdfdff_0%,#f9fbff_60%,#fff_100%)] tw:pt-36 tw:pb-(--sec-y) tw:max-bsmd:pt-[120px] tw:bslg:pt-[132px] tw:bslg:pb-[calc(var(--sec-y)+40px)]"
          aria-labelledby="geo-h1"
        >
          <HeroMarks />
          <Wrap>
            <div className="tw:grid tw:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] tw:items-center tw:gap-14 tw:max-bsxl:gap-10 tw:max-bslg:grid-cols-1 tw:max-bslg:gap-12">
              <div className="tw:max-bslg:text-center">
                <Strip
                  as="h1"
                  id="geo-h1"
                  size="heroWide"
                  className="tw:text-balance tw:bssm:text-[clamp(36px,3.85vw,56px)] tw:max-bslg:mx-auto tw:max-bslg:text-center"
                >
                  {HERO.h1}
                </Strip>
                <p className="tw:mt-6 tw:max-w-[620px] tw:text-[19px]/[1.65] tw:font-normal tw:text-(--ink-2) tw:max-bslg:mx-auto">
                  {HERO.lead}
                </p>
                <div className="tw:mt-8 tw:flex tw:flex-wrap tw:gap-3 tw:max-bslg:justify-center">
                  <Pill href={AUDIT_HREF} fullOnPhone>
                    {HERO.cta}
                  </Pill>
                  <CallPill />
                </div>
                <TrustLogos
                  mapHref={SITE_CONTACT.mapHref}
                  size="row"
                  className="tw:mt-9 tw:justify-start! tw:gap-x-7! tw:max-bslg:justify-center!"
                />
              </div>
              <div className="tw:mx-auto tw:w-full tw:max-w-[560px]">
                <GeoHero />
              </div>
            </div>
          </Wrap>
        </section>

        {/* ======================================================= WHAT IS GEO */}
        <Section labelledBy="geo-what-h" tone="white">
          <Wrap>
            {/* Bento grid (owner, 27 Nov 2026): same words as before. */}
            <Strip id="geo-what-h" className="tw:mb-10 tw:max-w-[900px] tw:text-balance tw:max-bssm:mb-7">
              {WHAT.title}
            </Strip>
            <WhatBento />
          </Wrap>
        </Section>

        {/* ========================================================= SERVICES */}
        <Section labelledBy="geo-svc-h">
          <Wrap>
            <RowHead align="start">
              <div className="tw:min-w-0 tw:max-w-[780px] tw:flex-[1_1_560px]">
                <Strip id="geo-svc-h" className="tw:text-balance">
                  {SERVICES.title}
                </Strip>
              </div>
              <div className="tw:max-w-[440px] tw:flex-[0_1_440px] tw:bslg:pt-2">
                <p className={LEAD}>{SERVICES.lead}</p>
                <div className="tw:mt-6">
                  <Pill href={AUDIT_HREF} arrow fullOnPhone>
                    {SERVICES.cta}
                  </Pill>
                </div>
              </div>
            </RowHead>
            <div className="tw:grid tw:grid-cols-3 tw:gap-6 tw:max-bslg:grid-cols-2 tw:max-bssm:grid-cols-1 tw:max-bssm:gap-4">
              {SERVICES.items.map((s, i) => {
                const Icon = SERVICE_ICONS[s.icon];
                return (
                  <article
                    key={s.title}
                    className="tw:flex tw:flex-col tw:rounded-(--r-xl) tw:bg-white tw:p-7 tw:max-bssm:p-6"
                  >
                    <span
                      className={cx(
                        "tw:grid tw:size-14 tw:place-items-center tw:rounded-full tw:text-[22px]",
                        i % 3 === 0 && "tw:bg-(--blue) tw:text-white",
                        i % 3 === 1 && "tw:bg-(--gold) tw:text-(--ink)",
                        i % 3 === 2 && "tw:bg-(--ink) tw:text-white",
                      )}
                      aria-hidden="true"
                    >
                      <Icon />
                    </span>
                    <h3 className="tw:mt-6 tw:text-[21px]/[1.25]">{s.title}</h3>
                    <p className="tw:mt-3 tw:text-[16.5px]/[1.6] tw:text-(--text)">{s.desc}</p>
                    <ul className="tw:mt-5 tw:grid tw:gap-2">
                      {s.points.map((pt) => (
                        <li key={pt} className="tw:flex tw:items-center tw:gap-2.5 tw:text-[16px] tw:text-(--ink-2)">
                          <FiCheck
                            aria-hidden="true"
                            className="tw:size-5 tw:flex-none tw:rounded-full tw:bg-(--green-soft) tw:p-1 tw:text-(--green) tw:[stroke-width:3]"
                          />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </Wrap>
        </Section>

        {/* ========================================================== ENGINES */}
        <Section labelledBy="geo-eng-h" tone="white">
          <Wrap>
            <CenterHead id="geo-eng-h" title={ENGINES.title}>
              {ENGINES.lead}
            </CenterHead>
            <EngineTable />
            <p className="tw:mx-auto tw:mt-6 tw:max-w-[860px] tw:text-center tw:text-[16.5px]/[1.65] tw:text-(--text)">
              {ENGINES.note}
            </p>
          </Wrap>
        </Section>

        {/* ========================================================== COMPARE */}
        <Section labelledBy="geo-cmp-h">
          <Wrap>
            <RowHead align="start">
              <div className="tw:min-w-0 tw:max-w-[760px] tw:flex-[1_1_560px]">
                <Strip id="geo-cmp-h" className="tw:text-balance">
                  {COMPARE.title}
                </Strip>
              </div>
              <p className={cx(LEAD, "tw:max-w-[440px] tw:flex-[0_1_440px] tw:bslg:pt-2")}>
                {COMPARE.lead}
              </p>
            </RowHead>
            <CompareTable />
            <p className={cx("tw:mt-6 tw:max-w-[900px] tw:text-[16.5px]/[1.65] tw:text-(--text)", LINKS)}>
              <RichText value={COMPARE.note} />
            </p>
          </Wrap>
        </Section>

        {/* ========================================================== PROCESS */}
        <Section labelledBy="geo-steps-h" tone="white">
          <Wrap>
            <CenterHead id="geo-steps-h" title={PROCESS.title}>
              {PROCESS.lead}
            </CenterHead>
            <ol className="tw:grid tw:grid-cols-4 tw:gap-5 tw:max-bsxl:grid-cols-2 tw:max-bssm:grid-cols-1">
              {PROCESS.steps.map((st, i) => {
                const Mini = STEP_MINIS[i];
                return (
                  <li key={st.title} className="tw:flex tw:flex-col tw:rounded-[28px] tw:bg-white tw:p-6 tw:ring-1 tw:ring-(--line)">
                    <span className="tw:flex tw:items-center tw:gap-3">
                      <span className="tw:grid tw:size-10 tw:place-items-center tw:rounded-full tw:bg-(--ink) tw:text-[16px] tw:font-semibold tw:text-white">
                        {i + 1}
                      </span>
                      <span className="tw:rounded-full tw:bg-(--blue-soft) tw:px-3 tw:py-1 tw:text-[14px] tw:font-medium tw:text-(--blue)">
                        {st.tag}
                      </span>
                    </span>
                    <h3 className="tw:mt-5 tw:text-[20px]/[1.3]">{st.title}</h3>
                    <p className="tw:mt-2.5 tw:text-[16px]/[1.6] tw:text-(--text)">{st.body}</p>
                    <div className="tw:mt-auto">
                      <Mini />
                    </div>
                  </li>
                );
              })}
            </ol>
          </Wrap>
        </Section>

        {/* ============================================================ LOCAL */}
        <Section labelledBy="geo-local-h">
          <Wrap>
            <div className="tw:grid tw:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] tw:items-start tw:gap-12 tw:max-bslg:grid-cols-1 tw:max-bslg:gap-10">
              <div>
                <Strip id="geo-local-h" className="tw:text-balance">
                  {LOCAL.title}
                </Strip>
                <p className={cx(LEAD, LINKS, "tw:mt-5")}>
                  <RichText value={LOCAL.lead} />
                </p>
                <div className="tw:mt-8 tw:grid tw:grid-cols-2 tw:gap-4 tw:max-bssm:grid-cols-1">
                  {LOCAL.stats.map((s) => (
                    <figure key={s.value} className="tw:m-0 tw:rounded-[24px] tw:bg-white tw:p-6">
                      <p className="tw:text-[clamp(40px,4vw,52px)] tw:leading-none tw:font-medium tw:tracking-[-0.03em] tw:text-(--blue)">
                        {s.value}
                      </p>
                      <p className="tw:mt-3 tw:text-[16px]/[1.55] tw:text-(--ink-2)">{s.text}</p>
                      <figcaption className="tw:mt-3 tw:text-[14px] tw:text-(--muted)">{s.source}</figcaption>
                    </figure>
                  ))}
                </div>
              </div>
              <div className="tw:rounded-[32px] tw:bg-white tw:p-8 tw:max-bssm:p-6">
                <h3 className="tw:text-[21px]/[1.3]">{LOCAL.listTitle}</h3>
                <ul className="tw:mt-5 tw:grid tw:gap-3">
                  {LOCAL.list.map((item) => (
                    <li key={item} className="tw:flex tw:items-start tw:gap-3 tw:text-[16.5px]/[1.5] tw:text-(--ink-2)">
                      <FiCheck
                        aria-hidden="true"
                        className="tw:mt-0.5 tw:size-5 tw:flex-none tw:rounded-full tw:bg-(--blue-soft) tw:p-1 tw:text-(--blue) tw:[stroke-width:3]"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="tw:mt-7 tw:text-[14px] tw:font-semibold tw:tracking-[0.12em] tw:text-(--muted) tw:uppercase">
                  {LOCAL.tradesTitle}
                </p>
                <ul className="tw:mt-3 tw:flex tw:flex-wrap tw:gap-2">
                  {LOCAL.trades.map((t) => (
                    <li key={t.href}>
                      <Link
                        href={t.href}
                        className="tw:inline-flex tw:items-center tw:gap-1.5 tw:rounded-full tw:bg-(--panel) tw:px-4 tw:py-2 tw:text-[15px] tw:font-medium tw:text-(--ink) tw:transition tw:hover:bg-(--blue) tw:hover:text-white"
                      >
                        {t.label}
                        <FiArrowRight aria-hidden="true" className="tw:size-3.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Wrap>
        </Section>

        {/* =========================================================== REPORT */}
        <Section labelledBy="geo-report-h" tone="white">
          <Wrap>
            <CenterHead id="geo-report-h" title={REPORT.title}>
              {REPORT.lead}
            </CenterHead>
            <div className="tw:grid tw:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] tw:items-stretch tw:gap-8 tw:max-bslg:grid-cols-1">
              <ReportBoard />
              <ul className="tw:flex tw:flex-col tw:divide-y tw:divide-(--line) tw:rounded-[28px] tw:bg-(--panel) tw:px-6 tw:py-2 tw:max-bssm:rounded-3xl tw:max-bssm:px-5">
                {REPORT.items.map((it) => {
                  const Icon = REPORT_ICONS[it.icon];
                  return (
                    <li key={it.title} className="tw:flex tw:flex-1 tw:items-center tw:gap-4 tw:py-5">
                      <span className="tw:grid tw:size-11 tw:flex-none tw:place-items-center tw:rounded-xl tw:bg-white tw:text-(--blue) tw:shadow-[0_1px_2px_rgba(12,21,38,0.06)]" aria-hidden="true">
                        <Icon className="tw:size-5" />
                      </span>
                      <span className="tw:min-w-0">
                        <h3 className="tw:text-[18px]/[1.35] tw:font-medium">{it.title}</h3>
                        <p className="tw:mt-1 tw:text-[16px]/[1.55] tw:text-(--text)">{it.body}</p>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <p className="tw:mx-auto tw:mt-8 tw:max-w-[860px] tw:text-center tw:text-[15.5px]/[1.65] tw:text-(--muted)">
              {REPORT.footnote}
            </p>
          </Wrap>
        </Section>

        {/* ========================================================= TIMELINE */}
        <Section labelledBy="geo-time-h">
          <Wrap>
            <RowHead align="start">
              <div className="tw:min-w-0 tw:max-w-[760px] tw:flex-[1_1_560px]">
                <Strip id="geo-time-h" className="tw:text-balance">
                  {TIMELINE.title}
                </Strip>
              </div>
              <p className={cx(LEAD, "tw:max-w-[440px] tw:flex-[0_1_440px] tw:bslg:pt-2")}>
                {TIMELINE.lead}
              </p>
            </RowHead>
            <ol className="tw:grid tw:grid-cols-4 tw:gap-5 tw:max-bsxl:grid-cols-2 tw:max-bssm:grid-cols-1">
              {TIMELINE.items.map((t, i) => (
                <li key={t.tag} className="tw:relative tw:rounded-[28px] tw:bg-white tw:p-6">
                  <span
                    className={cx(
                      "tw:inline-flex tw:rounded-full tw:px-3 tw:py-1 tw:text-[14px] tw:font-semibold",
                      i === 3 ? "tw:bg-(--gold) tw:text-(--ink)" : "tw:bg-(--ink) tw:text-white",
                    )}
                  >
                    {t.tag}
                  </span>
                  <h3 className="tw:mt-4 tw:text-[20px]/[1.3]">{t.title}</h3>
                  <p className="tw:mt-2 tw:text-[16px]/[1.6] tw:text-(--text)">{t.body}</p>
                </li>
              ))}
            </ol>
            <p className="tw:mt-6 tw:rounded-[22px] tw:bg-(--blue-soft) tw:px-6 tw:py-4 tw:text-[16.5px]/[1.6] tw:font-medium tw:text-(--ink)">
              {TIMELINE.honest}
            </p>
          </Wrap>
        </Section>

        {/* ========================================================== REVIEWS */}
        <Section labelledBy="geo-rev-h" tone="white">
          <Wrap>
            <RowHead align="start">
              <div className="tw:min-w-0 tw:max-w-[820px] tw:flex-[1_1_480px]">
                <Strip id="geo-rev-h" className="tw:text-balance">
                  {REVIEWS.title}
                </Strip>
                <p className={cx(LEAD, "tw:mt-4")}>{REVIEWS.lead}</p>
              </div>
              <div className="tw:relative tw:flex-none tw:pt-2">
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

        {/* ========================================================== PRICING */}
        <PricingSection
          path={PAGE_URL}
          copy={PRICING}
          idPrefix="geo"
          ctaHref={AUDIT_HREF}
          ctaLabel={HERO.cta}
        />

        {/* ============================================================== FAQ */}
        <Section labelledBy="geo-faq-h" tone="white">
          <Wrap>
            <CenterHead id="geo-faq-h" title={FAQ.title}>
              {FAQ.lead}
            </CenterHead>
            <div className="tw:mx-auto tw:max-w-[1080px] tw:rounded-[32px] tw:bg-(--panel) tw:px-11 tw:py-2 tw:max-bsmd:px-6 tw:max-bsmd:py-1 tw:max-bssm:rounded-3xl tw:max-bssm:px-5">
              {FAQ.items.map((item, i) => (
                <details
                  key={item.q}
                  open={i === 0}
                  className="tw:group tw:border-t tw:border-(--line) tw:first:border-t-0"
                >
                  <summary className="tw:flex tw:cursor-pointer tw:items-center tw:justify-between tw:gap-5 tw:py-[22px] tw:text-(--ink)">
                    <h3 className="tw:text-xl/[1.35] tw:font-medium tw:tracking-[-0.01em] tw:max-bsmd:text-[18px]">
                      {item.q}
                    </h3>
                    <FiPlus
                      aria-hidden="true"
                      className="tw:size-[22px] tw:flex-none tw:transition-transform tw:duration-200 tw:group-open:rotate-45"
                    />
                  </summary>
                  <p className="tw:max-w-[76ch] tw:pb-[22px] tw:text-[17px]/[1.65] tw:text-(--text)">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </Wrap>
        </Section>

        {/* ============================================================ AUDIT */}
        <Section id={AUDIT_ID} labelledBy="geo-audit-h" className="tw:scroll-mt-24">
          <Wrap flushOnPhone>
            <div className="tw:grid tw:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] tw:items-start tw:gap-12 tw:rounded-[48px] tw:bg-white tw:px-12 tw:py-14 tw:max-bslg:grid-cols-1 tw:max-bslg:gap-10 tw:max-bslg:px-10 tw:max-bssm:rounded-[28px] tw:max-bssm:px-4 tw:max-bssm:py-10">
              <div>
                <Strip id="geo-audit-h" size="card" className="tw:text-balance">
                  {AUDIT.title}
                </Strip>
                <p className={cx(LEAD, LINKS, "tw:mt-5")}>
                  <RichText value={AUDIT.lead} />
                </p>
                <ul className="tw:mt-7 tw:grid tw:grid-cols-2 tw:gap-x-6 tw:gap-y-3 tw:max-bssm:grid-cols-1">
                  {AUDIT.points.map((t) => (
                    <li key={t} className="tw:flex tw:items-center tw:gap-3 tw:text-[16px]/[1.35] tw:text-(--ink-2)">
                      <FiCheck
                        aria-hidden="true"
                        className="tw:size-6 tw:flex-none tw:rounded-full tw:bg-(--blue-soft) tw:p-[5px] tw:text-(--blue) tw:[stroke-width:3]"
                      />
                      {t}
                    </li>
                  ))}
                </ul>
                <ul className="tw:mt-9 tw:grid tw:grid-cols-2 tw:gap-3 tw:max-bsxl:grid-cols-1 tw:max-bslg:grid-cols-2 tw:max-bssm:grid-cols-1">
                  {contactTiles.map((t) => (
                    <li key={t.small}>
                      <a
                        href={t.href}
                        className="tw:flex tw:h-full tw:items-center tw:gap-3.5 tw:rounded-[20px] tw:bg-(--panel) tw:p-4 tw:transition tw:hover:-translate-y-0.5"
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
                          <small className="tw:block tw:text-[13.5px] tw:text-(--muted)">{t.small}</small>
                          <strong className="tw:mt-0.5 tw:block tw:text-[16px]/[1.4] tw:font-medium tw:break-words tw:text-(--ink)">
                            {t.strong}
                          </strong>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="tw:w-full">
                <ServiceLeadForm {...AUDIT.form} />
              </div>
            </div>
          </Wrap>
        </Section>

        {/* =========================================================== BANNER */}
        <GradientBanner
          id="geo-close-h"
          title={BANNER.title}
          lead={BANNER.lead}
          cta={HERO.cta}
          ctaHref={AUDIT_HREF}
        />
      </main>
      <RelatedServices current={PAGE_URL} />
      <Footer />
    </>
  );
}
