import Link from "next/link";
import dynamic from "next/dynamic";
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
import "@/components/rd/industry/industry.css";

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
import { Icon } from "@/components/rd/industry/icons";
import {
  GrowthUiView,
  H1Badge,
  HERO_BG,
  HeroMarks,
  LINKS,
  RichText,
  StepUis,
  TitleLines,
  grad,
} from "@/components/rd/industry/ui";
import { SITE_CONTACT } from "@/shared/siteConfig";
import {
  AUDIT as AUDIT_COPY,
  BANNER,
  CITIES,
  FAQ,
  GROWTH,
  HERO,
  LIVE_URL,
  PRICING,
  REVIEWS,
  SERVICES,
  STEPS,
} from "./content";
import {
  OrganicLeadsUi,
  RankClimbUi,
  SEO_BRAND,
  SeoHeroUi,
  tone,
} from "./seoUi";
import { GradientBanner } from "@/components/rd/industry/GradientBanner";

/* ---------------------------------------------------------------------------
   SEO SERVICES — redesign draft (25 Oct 2026) of /services/seo-services.

   Owner brief: hero with the copy on the left and a UI component on the
   right; main sections only; fresh, keyword-led copy (research notes in
   content.ts). Built from the industry-page blocks so the heading rules
   (industry.css: section heads below the H1, split-head gap, services
   head on two lines) apply here too.

   Order: hero → services → how we grow you (rankings, AI answers, leads)
   → steps → SEO by city → Google reviews → pricing (locked; headings only)
   → FAQ → free audit with contact details → light banner.
   Every internal link the live page carried is kept.
--------------------------------------------------------------------------- */

const ServiceLeadForm = dynamic(
  () => import("@/app/components/ServiceLeadForm"),
);

// Local SEO pages palette: the site's Google-style brand colours (owner,
// 25 Oct: not the industry pages' two-tone pastels).
const P = SEO_BRAND;
const soft = (i: number) => ({
  background: tone(i).soft,
  color: tone(i).softText,
});
const AUDIT = "#seo-audit";
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
    small: "Call an SEO strategist",
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

export function SeoServicesPage() {
  const p = P;
  const steps = StepUis({
    p,
    audit: STEPS.audit,
    plan: STEPS.plan,
    launch: STEPS.launch,
  });
  const stepBg = [tone(0).solid, tone(1).solid, tone(3).solid];
  // Flat tints behind the growth-row cards (owner: no gradient panels).
  const panels = [tone(0).soft, tone(2).soft, tone(3).soft];
  const growthUi = [
    <RankClimbUi key="rank" p={p} />,
    <GrowthUiView key="ai" p={p} ui={{ kind: "ai", ...GROWTH.ai }} />,
    <OrganicLeadsUi key="leads" p={p} />,
  ];

  return (
    <>
      <main className="dk-root ind-hcap">
        {/* ============================================================ HERO */}
        {/* Owner (25 Oct): copy on the left, a UI component on the right. */}
        <section
          className={cx(
            "tw:relative tw:isolate tw:overflow-clip tw:pt-36 tw:pb-(--sec-y) tw:max-bsmd:pt-[120px] tw:bslg:flex tw:bslg:min-h-[min(100svh,1080px)] tw:bslg:items-center tw:bslg:pt-[120px] tw:bslg:pb-[calc(var(--sec-y)+40px)]",
            HERO_BG,
          )}
          aria-labelledby="seo-h1"
        >
          <HeroMarks />
          <Wrap>
            <div className="tw:grid tw:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] tw:items-center tw:gap-14 tw:max-bsxl:gap-10 tw:max-bslg:grid-cols-1 tw:max-bslg:gap-12">
              <div>
                <Strip
                  as="h1"
                  id="seo-h1"
                  size="heroWide"
                  className="tw:text-balance tw:bssm:text-[clamp(36px,3.85vw,56px)] tw:max-bssm:text-[clamp(30px,8vw,34px)]"
                >
                  {HERO.h1Lead}{" "}
                  <H1Badge
                    p={p}
                    solid={tone(0).solid}
                    icon={<Icon name="search" />}
                  />{" "}
                  {HERO.h1Rest}
                </Strip>
                <p className={cx(LEAD, LINKS, "tw:mt-6 tw:max-w-[620px]")}>
                  <RichText value={HERO.lead} />
                </p>
                <div className="tw:mt-8 tw:flex tw:flex-wrap tw:gap-3">
                  <Pill href={AUDIT} fullOnPhone>
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
              <div className="tw:mx-auto tw:w-full tw:max-w-[520px]">
                <SeoHeroUi />
              </div>
            </div>
          </Wrap>
        </section>

        {/* ======================================================== SERVICES */}
        <Section labelledBy="seo-svc-h">
          <Wrap>
            <RowHead align="start">
              <div className="tw:min-w-0 tw:max-w-[760px] tw:flex-[1_1_560px]">
                <Strip id="seo-svc-h" className="tw:text-balance">
                  <TitleLines text={SERVICES.title} />
                </Strip>
              </div>
              <div className="tw:max-w-[440px] tw:flex-[0_1_440px] tw:bslg:pt-2">
                <p className={LEAD}>{SERVICES.lead}</p>
                <div className="tw:mt-6">
                  <Pill href={AUDIT} arrow fullOnPhone>
                    {SERVICES.cta}
                  </Pill>
                </div>
              </div>
            </RowHead>
            <div className="tw:grid tw:grid-cols-3 tw:gap-6 tw:max-bslg:grid-cols-2 tw:max-bssm:grid-cols-1 tw:max-bssm:gap-4">
              {SERVICES.items.map((s, i) => (
                <article
                  key={s.title}
                  className="tw:flex tw:flex-col tw:rounded-(--r-xl) tw:bg-white tw:px-7 tw:pt-7 tw:pb-7 tw:transition tw:duration-300 tw:hover:-translate-y-1 tw:max-bssm:px-6"
                >
                  <span
                    className="tw:grid tw:size-[56px] tw:place-items-center tw:rounded-full tw:text-[22px] tw:text-white"
                    style={{
                      background: tone(i).solid,
                      color: tone(i).onSolid,
                    }}
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
                          style={soft(i)}
                          aria-hidden="true"
                        >
                          <FiCheck strokeWidth={3} />
                        </span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                  {s.links.length > 0 && (
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
                  )}
                </article>
              ))}
            </div>
          </Wrap>
        </Section>

        {/* ========================================================== GROWTH */}
        <Section labelledBy="seo-grow-h" tone="white">
          <Wrap>
            <CenterHead id="seo-grow-h" title={GROWTH.title}>
              {GROWTH.lead}
            </CenterHead>
            {GROWTH.rows.map((g, i) => (
              <div
                key={g.key}
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
                  {growthUi[i]}
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
                          style={soft(k)}
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

        {/* =========================================================== STEPS */}
        <Section labelledBy="seo-steps-h">
          <Wrap>
            <RowHead align="start">
              <div className="tw:min-w-0 tw:max-w-[760px] tw:flex-[1_1_560px]">
                <Strip id="seo-steps-h" className="tw:text-balance">
                  {STEPS.title}
                </Strip>
              </div>
              <div className="tw:max-w-[440px] tw:flex-[0_1_440px] tw:bslg:pt-2">
                <p className={LEAD}>{STEPS.lead}</p>
                <div className="tw:mt-6">
                  <CallPill />
                </div>
              </div>
            </RowHead>
            <ol className="tw:grid tw:grid-cols-3 tw:gap-6 tw:max-bslg:grid-cols-1">
              {STEPS.items.map((s, i) => (
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

        {/* ========================================================= CITIES */}
        <Section labelledBy="seo-city-h" tone="white">
          <Wrap>
            <RowHead align="start">
              <div className="tw:min-w-0 tw:max-w-[760px] tw:flex-[1_1_560px]">
                <Strip id="seo-city-h" className="tw:text-balance">
                  {CITIES.title}
                </Strip>
              </div>
              <p
                className={cx(
                  LEAD,
                  "tw:max-w-[440px] tw:flex-[0_1_440px] tw:bslg:pt-2",
                )}
              >
                {CITIES.lead}
              </p>
            </RowHead>
            <ul className="tw:grid tw:grid-cols-4 tw:gap-3 tw:max-bsxl:grid-cols-2 tw:max-bssm:grid-cols-1">
              {CITIES.items.map((c, i) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="tw:group tw:flex tw:h-full tw:items-center tw:gap-3.5 tw:rounded-[22px] tw:bg-(--panel) tw:px-5 tw:py-4 tw:transition tw:hover:-translate-y-0.5"
                  >
                    <span
                      className="tw:grid tw:size-11 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[17px]"
                      style={soft(i)}
                      aria-hidden="true"
                    >
                      <FiMapPin />
                    </span>
                    <span className="tw:min-w-0 tw:flex-1">
                      <b className="tw:block tw:text-[17px] tw:font-semibold tw:text-(--ink)">
                        {c.name}
                      </b>
                      <span className="tw:block tw:truncate tw:text-[13.5px] tw:text-(--muted)">
                        {c.sub}
                      </span>
                    </span>
                    <FiArrowRight
                      aria-hidden="true"
                      className="tw:flex-none tw:text-(--muted) tw:transition-transform tw:group-hover:translate-x-[3px] tw:group-hover:text-(--blue)"
                    />
                  </Link>
                </li>
              ))}
              <li
                className="tw:col-span-4 tw:flex tw:items-center tw:justify-center tw:rounded-[22px] tw:px-5 tw:py-4 tw:text-center tw:text-[16px] tw:font-medium tw:text-white tw:max-bsxl:col-span-2 tw:max-bssm:col-span-1"
                style={{
                  background: `linear-gradient(120deg, ${tone(0).solid}, ${tone(3).solid})`,
                }}
              >
                {CITIES.other}
              </li>
            </ul>
          </Wrap>
        </Section>

        {/* ========================================================= REVIEWS */}
        <Section labelledBy="seo-rev-h">
          <Wrap>
            <RowHead align="start">
              <div className="tw:min-w-0 tw:max-w-[820px] tw:flex-[1_1_480px]">
                <Strip id="seo-rev-h" className="tw:text-balance">
                  {REVIEWS.title}
                </Strip>
                <p className={cx(LEAD, "tw:mt-4")}>{REVIEWS.lead}</p>
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
          copy={PRICING}
          idPrefix="seo"
          ctaHref={AUDIT}
          ctaLabel={HERO.cta}
        />

        {/* ============================================================= FAQ */}
        <Section labelledBy="seo-faq-h" tone="white">
          <Wrap>
            <CenterHead id="seo-faq-h" title={FAQ.title}>
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
        <Section id="seo-audit" labelledBy="seo-audit-h">
          <Wrap flushOnPhone>
            <div className="tw:grid tw:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] tw:items-start tw:gap-12 tw:rounded-[48px] tw:bg-white tw:px-12 tw:py-14 tw:max-bslg:grid-cols-1 tw:max-bslg:gap-10 tw:max-bslg:px-10 tw:max-bssm:rounded-[28px] tw:max-bssm:px-4 tw:max-bssm:py-10">
              <div>
                <Strip id="seo-audit-h" size="card" className="tw:text-balance">
                  {AUDIT_COPY.title}
                </Strip>
                <p className={cx(LEAD, LINKS, "tw:mt-5")}>
                  <RichText value={AUDIT_COPY.lead} />
                </p>
                <ul className="tw:mt-7 tw:grid tw:grid-cols-2 tw:gap-x-6 tw:gap-y-3 tw:max-bssm:grid-cols-1">
                  {AUDIT_COPY.points.map((t, i) => (
                    <li
                      key={t}
                      className="tw:flex tw:items-center tw:gap-3 tw:text-[16px]/[1.35] tw:text-(--ink-2)"
                    >
                      <FiCheck
                        aria-hidden="true"
                        className="tw:size-6 tw:flex-none tw:rounded-full tw:p-[5px] tw:[stroke-width:3]"
                        style={soft(i)}
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
                <ServiceLeadForm {...AUDIT_COPY.form} />
              </div>
            </div>
          </Wrap>
        </Section>

        {/* ========================================================== BANNER */}
        <GradientBanner
          id="seo-close-h"
          title={BANNER.title}
          lead={BANNER.lead}
          cta={HERO.cta}
          ctaHref={AUDIT}
        />
      </main>
      <RelatedServices current={LIVE_URL} />
      <Footer />
    </>
  );
}
