import Link from "next/link";
import dynamic from "next/dynamic";
import {
  FiArrowRight,
  FiCheck,
  FiMail,
  FiMapPin,
  FiPhone,
  FiPlus,
  FiSearch,
  FiX,
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
import { GradientBanner } from "@/components/rd/industry/GradientBanner";
import { Icon } from "@/components/rd/industry/icons";
import {
  GrowthUiView,
  H1Badge,
  HeroMarks,
  LINKS,
  RichText,
  StepUis,
  TitleLines,
} from "@/components/rd/industry/ui";
import { SITE_CONTACT } from "@/shared/siteConfig";
import { LeadsCard, RankClimbCard } from "./growthUi";
import { LocalSeoHeroUi } from "./heroUi";
import { toneSetFor } from "./tones";
import type { LocalSeoContent } from "./types";

/* ---------------------------------------------------------------------------
   LOCAL SEO DROPDOWN PAGES — redesign template (26 Oct 2026).

   Owner brief: build every page under the Local SEO dropdown for organic
   growth: deep keyword research, fresh copy, new colour palettes and the
   /services/seo-services-2 layout (split hero with a UI that explains the
   service, main sections only). Copy lives in ./content/<slug>.ts; rules
   in docs/local-seo-redesign-brief.md.

   Order: hero → services → how we grow you (rankings, AI answers, leads)
   → steps → the searches we win → Google reviews → related pages →
   pricing (owner-locked; headings only) → FAQ → free audit with contact
   details → home2 gradient banner. Section ids keep the `seo-` prefix so
   the industry.css heading rules apply.
--------------------------------------------------------------------------- */

const ServiceLeadForm = dynamic(
  () => import("@/app/components/ServiceLeadForm"),
);

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

export function LocalSeoTemplate({ c }: { c: LocalSeoContent }) {
  const { tones, p } = toneSetFor(c.liveUrl);
  const tone = (i: number) => tones[i % 4];
  const soft = (i: number) => ({
    background: tone(i).soft,
    color: tone(i).softText,
  });
  const solid = (i: number) => ({
    background: tone(i).solid,
    color: tone(i).onSolid,
  });

  const steps = StepUis({
    p,
    audit: c.steps.audit,
    plan: c.steps.plan,
    launch: c.steps.launch,
  });
  const stepTones = [0, 1, 3];
  // Flat tints behind the growth-row cards (owner: no gradient panels).
  const panels = [tone(0).soft, tone(2).soft, tone(3).soft];
  const g = c.growth;
  const rows = [
    {
      key: "rank",
      copy: g.rank,
      ui: <RankClimbCard p={p} keywords={g.rank.keywords} />,
    },
    {
      key: "ai",
      copy: g.ai,
      ui: (
        <GrowthUiView
          p={p}
          ui={{
            kind: "ai",
            query: g.ai.query,
            intro: g.ai.intro,
            bullets: g.ai.bullets,
          }}
        />
      ),
    },
    {
      key: "leads",
      copy: g.leads,
      ui: <LeadsCard p={p} items={g.leads.items} />,
    },
  ];

  const contactTiles = [
    {
      icon: <FiPhone />,
      t: 0,
      small: "Call a local SEO strategist",
      strong: SITE_CONTACT.phoneDisplay,
      href: SITE_CONTACT.phoneHref,
    },
    {
      icon: <FiMail />,
      t: 1,
      small: "Email us",
      strong: SITE_CONTACT.email,
      href: SITE_CONTACT.emailHref,
    },
    {
      icon: <FiMapPin />,
      t: -1,
      small: "Our office",
      strong: SITE_CONTACT.address,
      href: SITE_CONTACT.mapHref,
      external: true,
    },
  ];

  return (
    <>
      <main className="dk-root ind-hcap">
        {/* ============================================================ HERO */}
        {/* Background = the /home2 hero background, the same on every page
            (owner, 26 Oct 2026: no per-page two-colour gradients). Below
            992px, where the split stacks, the copy column is centred. */}
        <section
          className="tw:relative tw:isolate tw:overflow-clip tw:bg-[radial-gradient(circle_at_16%_12%,rgba(49,87,245,0.07),transparent_26%),radial-gradient(circle_at_88%_6%,rgba(110,80,247,0.065),transparent_22%),linear-gradient(180deg,#fdfdff_0%,#f9fbff_60%,#fff_100%)] tw:pt-36 tw:pb-(--sec-y) tw:max-bsmd:pt-[120px] tw:bslg:flex tw:bslg:min-h-[min(100svh,1080px)] tw:bslg:items-center tw:bslg:pt-[120px] tw:bslg:pb-[calc(var(--sec-y)+40px)]"
          aria-labelledby="seo-h1"
        >
          <HeroMarks />
          <Wrap>
            <div className="tw:grid tw:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] tw:items-center tw:gap-14 tw:max-bsxl:gap-10 tw:max-bslg:grid-cols-1 tw:max-bslg:gap-12">
              <div className="tw:max-bslg:text-center">
                <Strip
                  as="h1"
                  id="seo-h1"
                  size="heroWide"
                  className="tw:text-balance tw:bssm:text-[clamp(36px,3.85vw,56px)] tw:max-bssm:text-[clamp(30px,8vw,34px)] tw:max-bslg:mx-auto tw:max-bslg:text-center"
                >
                  {c.hero.h1Lead}{" "}
                  <H1Badge
                    p={p}
                    solid={tone(0).solid}
                    icon={<Icon name={c.hero.icon} />}
                  />{" "}
                  {c.hero.h1Rest}
                </Strip>
                <p
                  className={cx(
                    LEAD,
                    LINKS,
                    "tw:mt-6 tw:max-w-[620px] tw:max-bslg:mx-auto tw:max-bslg:text-center",
                  )}
                >
                  <RichText value={c.hero.lead} />
                </p>
                <div className="tw:mt-8 tw:flex tw:flex-wrap tw:gap-3 tw:max-bslg:justify-center">
                  <Pill href={AUDIT} fullOnPhone>
                    {c.hero.cta}
                  </Pill>
                  <CallPill />
                </div>
                <TrustLogos
                  mapHref={SITE_CONTACT.mapHref}
                  size="row"
                  className="tw:mt-9 tw:justify-start! tw:gap-x-7! tw:max-bslg:justify-center!"
                />
              </div>
              <div className="tw:mx-auto tw:w-full tw:max-w-[540px]">
                <LocalSeoHeroUi ui={c.hero.ui} tones={tones} />
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
                    className="tw:grid tw:size-[56px] tw:place-items-center tw:rounded-full tw:text-[22px]"
                    style={solid(i)}
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
            <CenterHead id="seo-grow-h" title={g.title}>
              {g.lead}
            </CenterHead>
            {rows.map((r, i) => (
              <div
                key={r.key}
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
                  {r.ui}
                </div>
                <div>
                  <h3 className="tw:text-[clamp(28px,3vw,44px)] tw:leading-[1.08] tw:tracking-[-0.03em] tw:text-balance">
                    {r.copy.title}
                  </h3>
                  <p className={cx(LEAD, LINKS, "tw:mt-5")}>
                    <RichText value={r.copy.body} />
                  </p>
                  <ul className="tw:mt-7 tw:grid tw:grid-cols-2 tw:gap-x-6 tw:gap-y-3 tw:max-bssm:grid-cols-1">
                    {r.copy.points.map((t, k) => (
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
                      {r.copy.cta}
                    </Pill>
                  </div>
                </div>
              </div>
            ))}
          </Wrap>
        </Section>

        {/* ========================================================= RESULTS */}
        {c.results ? <ResultsSection c={c} tones={tones} /> : null}

        {/* =========================================================== STEPS */}
        <Section labelledBy="seo-steps-h" tone="white">
          <Wrap>
            <RowHead align="start">
              <div className="tw:min-w-0 tw:max-w-[760px] tw:flex-[1_1_560px]">
                <Strip id="seo-steps-h" className="tw:text-balance">
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
                  className="tw:flex tw:flex-col tw:overflow-hidden tw:rounded-(--r-xl) tw:bg-(--panel)"
                >
                  <div className="tw:px-7 tw:pt-7 tw:pb-6">
                    <span
                      className="tw:grid tw:size-12 tw:place-items-center tw:rounded-full tw:text-[18px] tw:font-semibold"
                      style={solid(stepTones[i])}
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
                    style={{ background: tone(stepTones[i]).solid }}
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

        {/* ========================================================= COMPARE */}
        {c.compare ? <CompareSection c={c} tones={tones} /> : null}

        {/* ======================================================== SEARCHES */}
        <Section labelledBy="seo-find-h" tone="white">
          <Wrap>
            <CenterHead id="seo-find-h" title={c.searches.title}>
              {c.searches.lead}
            </CenterHead>
            <div className="tw:grid tw:grid-cols-3 tw:gap-5 tw:max-bslg:grid-cols-1">
              {c.searches.groups.map((grp, i) => (
                <div
                  key={grp.label}
                  className="tw:rounded-(--r-xl) tw:bg-(--panel) tw:px-7 tw:py-7 tw:max-bssm:px-5"
                >
                  <span className="tw:flex tw:items-center tw:gap-3.5">
                    <span
                      className="tw:grid tw:size-12 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[20px]"
                      style={solid(i)}
                      aria-hidden="true"
                    >
                      <Icon name={grp.icon} />
                    </span>
                    <h3 className="tw:text-[21px]/[1.25]">{grp.label}</h3>
                  </span>
                  <ul className="tw:mt-5 tw:flex tw:flex-wrap tw:gap-2">
                    {grp.terms.map((term) => (
                      <li
                        key={term}
                        className="tw:flex tw:items-center tw:gap-2 tw:rounded-full tw:bg-white tw:px-3.5 tw:py-2 tw:text-[14.5px] tw:font-medium tw:text-(--ink) tw:ring-1 tw:ring-(--line)"
                      >
                        <FiSearch
                          aria-hidden="true"
                          className="tw:size-3.5 tw:flex-none"
                          style={{ color: tone(i).softText }}
                        />
                        {term}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Wrap>
        </Section>

        {/* ========================================================= REVIEWS */}
        <Section labelledBy="seo-rev-h">
          <Wrap>
            <RowHead align="start">
              <div className="tw:min-w-0 tw:max-w-[820px] tw:flex-[1_1_480px]">
                <Strip id="seo-rev-h" className="tw:text-balance">
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

        {/* ========================================================= EXPLORE */}
        <Section labelledBy="seo-city-h" tone="white">
          <Wrap>
            <RowHead align="start">
              <div className="tw:min-w-0 tw:max-w-[760px] tw:flex-[1_1_560px]">
                <Strip id="seo-city-h" className="tw:text-balance">
                  {c.explore.title}
                </Strip>
              </div>
              <p
                className={cx(
                  LEAD,
                  "tw:max-w-[440px] tw:flex-[0_1_440px] tw:bslg:pt-2",
                )}
              >
                {c.explore.lead}
              </p>
            </RowHead>
            <ul className="tw:grid tw:grid-cols-4 tw:gap-3 tw:max-bsxl:grid-cols-2 tw:max-bssm:grid-cols-1">
              {c.explore.items.map((it, i) => (
                <li key={it.href}>
                  <Link
                    href={it.href}
                    className="tw:group tw:flex tw:h-full tw:items-center tw:gap-3.5 tw:rounded-[22px] tw:bg-(--panel) tw:px-5 tw:py-4 tw:transition tw:hover:-translate-y-0.5"
                  >
                    <span
                      className="tw:grid tw:size-11 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[17px]"
                      style={soft(i)}
                      aria-hidden="true"
                    >
                      <Icon name={it.icon} />
                    </span>
                    <span className="tw:min-w-0 tw:flex-1">
                      <b className="tw:block tw:text-[17px] tw:font-semibold tw:text-(--ink)">
                        {it.name}
                      </b>
                      <span className="tw:block tw:truncate tw:text-[13.5px] tw:text-(--muted)">
                        {it.sub}
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
                className="tw:col-span-4 tw:flex tw:items-center tw:justify-center tw:rounded-[22px] tw:px-5 tw:py-4 tw:text-center tw:text-[16px] tw:font-medium tw:max-bsxl:col-span-2 tw:max-bssm:col-span-1"
                style={{
                  background: `linear-gradient(120deg, ${tone(0).solid}, ${tone(1).solid})`,
                  color: tone(0).onSolid,
                }}
              >
                {c.explore.other}
              </li>
            </ul>
          </Wrap>
        </Section>

        {/* ========================================================= PRICING */}
        <PricingSection
          copy={c.pricing}
          idPrefix="seo"
          ctaHref={AUDIT}
          ctaLabel={c.hero.cta}
        />

        {/* ============================================================= FAQ */}
        <Section labelledBy="seo-faq-h" tone="white">
          <Wrap>
            <CenterHead id="seo-faq-h" title={c.faq.title}>
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
        <Section id="seo-audit" labelledBy="seo-audit-h">
          <Wrap flushOnPhone>
            <div className="tw:grid tw:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] tw:items-start tw:gap-12 tw:rounded-[48px] tw:bg-white tw:px-12 tw:py-14 tw:max-bslg:grid-cols-1 tw:max-bslg:gap-10 tw:max-bslg:px-10 tw:max-bssm:rounded-[28px] tw:max-bssm:px-4 tw:max-bssm:py-10">
              <div>
                <Strip id="seo-audit-h" size="card" className="tw:text-balance">
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
                        style={soft(i)}
                      />
                      {t}
                    </li>
                  ))}
                </ul>
                {/* Contact details (owner rule: every contact block lists
                    phone, email and address on the left). */}
                <ul className="tw:mt-9 tw:grid tw:grid-cols-2 tw:gap-3 tw:max-bsxl:grid-cols-1 tw:max-bslg:grid-cols-2 tw:max-bssm:grid-cols-1">
                  {contactTiles.map((t, i) => (
                    <li
                      key={t.small}
                      className={cx(
                        i === contactTiles.length - 1 &&
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
                          className="tw:grid tw:size-11 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[18px]"
                          style={
                            t.t < 0
                              ? {
                                  background:
                                    "linear-gradient(135deg,#334155,#0c1526)",
                                  color: "#ffffff",
                                }
                              : solid(t.t)
                          }
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
          id="seo-close-h"
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

/* ---------------------------------------------------------------------------
   RESULTS — "what changes after you hire Zonic" (owner, 26 Oct 2026: a
   section showing the positive things after taking our service). A growth
   curve through four milestones, four outcome cards, then the sitewide
   verified numbers (never invented results).
--------------------------------------------------------------------------- */

type Tone4 = ReturnType<typeof toneSetFor>["tones"];

const VERIFIED: [string, string][] = [
  ["1,500+", "Google Business Profiles optimized"],
  ["900+", "Suspended profiles reinstated"],
  ["5.0", "Rating on Google from our clients"],
  ["20+", "Industries served across the US"],
];

// Dot heights (px from the top of the 132px curve band), low → high.
const CURVE_Y = [104, 78, 46, 14];

function ResultsSection({ c, tones }: { c: LocalSeoContent; tones: Tone4 }) {
  const r = c.results;
  const tone = (i: number) => tones[i % 4];
  return (
    <Section labelledBy="seo-res-h">
      <Wrap>
        <RowHead align="start">
          <div className="tw:min-w-0 tw:max-w-[760px] tw:flex-[1_1_560px]">
            <Strip id="seo-res-h" className="tw:text-balance">
              {r.title}
            </Strip>
          </div>
          <div className="tw:max-w-[440px] tw:flex-[0_1_440px] tw:bslg:pt-2">
            <p className={LEAD}>{r.lead}</p>
            <div className="tw:mt-6">
              <Pill href={AUDIT} arrow fullOnPhone>
                {r.cta}
              </Pill>
            </div>
          </div>
        </RowHead>

        {/* Growth curve through the four milestones */}
        <div className="tw:rounded-(--r-xl) tw:bg-white tw:px-8 tw:pt-8 tw:pb-9 tw:max-bssm:px-5">
          <div
            className="tw:relative tw:h-[132px] tw:max-bslg:hidden"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 400 132"
              preserveAspectRatio="none"
              className="tw:absolute tw:inset-0 tw:h-full tw:w-full"
            >
              <defs>
                <linearGradient id="lseo-res-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="0%"
                    stopColor={tone(0).solid}
                    stopOpacity="0.18"
                  />
                  <stop
                    offset="100%"
                    stopColor={tone(0).solid}
                    stopOpacity="0"
                  />
                </linearGradient>
              </defs>
              <path
                d={`M0 124 C 30 118, 40 ${CURVE_Y[0]}, 50 ${CURVE_Y[0]} S 130 ${CURVE_Y[1]}, 150 ${CURVE_Y[1]} S 230 ${CURVE_Y[2]}, 250 ${CURVE_Y[2]} S 330 ${CURVE_Y[3]}, 350 ${CURVE_Y[3]} L 400 4 L 400 132 L 0 132 Z`}
                fill="url(#lseo-res-fill)"
              />
              <path
                d={`M0 124 C 30 118, 40 ${CURVE_Y[0]}, 50 ${CURVE_Y[0]} S 130 ${CURVE_Y[1]}, 150 ${CURVE_Y[1]} S 230 ${CURVE_Y[2]}, 250 ${CURVE_Y[2]} S 330 ${CURVE_Y[3]}, 350 ${CURVE_Y[3]} L 400 4`}
                fill="none"
                stroke={tone(0).solid}
                strokeWidth="3"
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
              />
            </svg>
            {r.milestones.map((m, i) => (
              <span
                key={m.title}
                className="tw:absolute tw:grid tw:size-5 tw:-translate-x-1/2 tw:-translate-y-1/2 tw:place-items-center tw:rounded-full tw:bg-white"
                style={{
                  left: `${12.5 + i * 25}%`,
                  top: CURVE_Y[i],
                  boxShadow: `0 0 0 4px ${tone(i).solid}`,
                }}
              />
            ))}
          </div>
          <ol className="tw:grid tw:grid-cols-4 tw:gap-6 tw:max-bslg:grid-cols-2 tw:max-bssm:grid-cols-1 tw:max-bssm:gap-5">
            {r.milestones.map((m, i) => (
              <li
                key={m.title}
                className="tw:text-center tw:max-bslg:text-left"
              >
                <span
                  className="tw:inline-flex tw:items-center tw:gap-2 tw:rounded-full tw:px-3 tw:py-1 tw:text-[13px] tw:font-semibold"
                  style={{ background: tone(i).soft, color: tone(i).softText }}
                >
                  <span
                    className="tw:size-2 tw:rounded-full tw:bslg:hidden"
                    style={{ background: tone(i).solid }}
                  />
                  {m.when}
                </span>
                <h3 className="tw:mt-3 tw:text-[20px]/[1.25]">{m.title}</h3>
                <p className="tw:mt-2 tw:text-[15.5px]/[1.6] tw:text-(--text)">
                  {m.text}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* Outcome cards */}
        <div className="tw:mt-6 tw:grid tw:grid-cols-4 tw:gap-6 tw:max-bsxl:grid-cols-2 tw:max-bssm:grid-cols-1 tw:max-bssm:gap-4">
          {r.wins.map((w, i) => (
            <article
              key={w.title}
              className="tw:rounded-(--r-xl) tw:bg-white tw:px-7 tw:py-7 tw:max-bssm:px-6"
            >
              <span
                className="tw:grid tw:size-12 tw:place-items-center tw:rounded-full tw:text-[20px]"
                style={{ background: tone(i).soft, color: tone(i).softText }}
                aria-hidden="true"
              >
                <Icon name={w.icon} />
              </span>
              <h3 className="tw:mt-5 tw:text-[20px]/[1.25]">{w.title}</h3>
              <p className="tw:mt-2.5 tw:text-[15.5px]/[1.6] tw:text-(--text)">
                {w.text}
              </p>
            </article>
          ))}
        </div>

        {/* Verified numbers (sitewide, owner-approved) */}
        <ul className="tw:mt-6 tw:grid tw:grid-cols-4 tw:gap-6 tw:rounded-(--r-xl) tw:bg-(--ink) tw:px-10 tw:py-8 tw:text-white tw:max-bslg:grid-cols-2 tw:max-bssm:gap-y-7 tw:max-bssm:px-6">
          {VERIFIED.map(([n, l], i) => (
            <li key={n} className="tw:text-center">
              <b
                className="tw:block tw:text-[clamp(34px,3.4vw,46px)] tw:leading-none tw:font-semibold tw:tracking-[-0.03em]"
                style={{ color: tone(i).soft }}
              >
                {n}
              </b>
              <span className="tw:mt-2 tw:block tw:text-[14.5px]/[1.4] tw:text-white/75">
                {l}
              </span>
            </li>
          ))}
        </ul>
      </Wrap>
    </Section>
  );
}

/* ---------------------------------------------------------------------------
   COMPARE — Zonic vs other SEO companies (owner, 26 Oct 2026). No company
   is named: the left column describes what businesses often get elsewhere,
   the right column what we do instead (true statements only).
--------------------------------------------------------------------------- */

function CompareSection({ c, tones }: { c: LocalSeoContent; tones: Tone4 }) {
  const a = tones[0];
  const COLS =
    "tw:grid tw:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)_minmax(0,1.15fr)] tw:max-bsmd:grid-cols-1";
  return (
    <Section labelledBy="seo-vs-h">
      <Wrap>
        <CenterHead id="seo-vs-h" title={c.compare.title}>
          {c.compare.lead}
        </CenterHead>
        <div className="tw:mx-auto tw:max-w-[1140px] tw:overflow-hidden tw:rounded-(--r-xl) tw:bg-white">
          {/* Column heads */}
          <div className={cx(COLS, "tw:max-bsmd:hidden")}>
            <span className="tw:px-7 tw:py-5 tw:text-[14px] tw:font-semibold tw:text-(--muted)">
              What you get
            </span>
            <span className="tw:flex tw:items-center tw:gap-2.5 tw:px-7 tw:py-5 tw:text-[16px] tw:font-semibold tw:text-(--ink-2)">
              <span className="tw:grid tw:size-7 tw:place-items-center tw:rounded-full tw:bg-[#fee2e2] tw:text-[#b91c1c]">
                <FiX aria-hidden="true" />
              </span>
              Typical SEO company
            </span>
            <span
              className="tw:flex tw:items-center tw:gap-2.5 tw:px-7 tw:py-5 tw:text-[16px] tw:font-semibold"
              style={{ background: a.solid, color: a.onSolid }}
            >
              <span className="tw:grid tw:size-7 tw:place-items-center tw:rounded-full tw:bg-white/20">
                <FiCheck aria-hidden="true" />
              </span>
              Zonic Media
            </span>
          </div>
          <ul>
            {c.compare.rows.map((row) => (
              <li
                key={row.topic}
                className={cx(
                  COLS,
                  "tw:border-t tw:border-(--line) tw:first:max-bsmd:border-t-0",
                )}
              >
                <h3 className="tw:px-7 tw:py-5 tw:text-[17px]/[1.35] tw:font-semibold tw:max-bsmd:px-5 tw:max-bsmd:pb-2">
                  {row.topic}
                </h3>
                <p className="tw:flex tw:gap-3 tw:px-7 tw:py-5 tw:text-[15.5px]/[1.55] tw:text-(--text) tw:max-bsmd:px-5 tw:max-bsmd:py-2">
                  <FiX
                    aria-hidden="true"
                    className="tw:mt-1 tw:size-4 tw:flex-none tw:text-[#b91c1c]"
                  />
                  <span>
                    <span className="tw:sr-only">Typical SEO company: </span>
                    {row.other}
                  </span>
                </p>
                <p
                  className="tw:flex tw:gap-3 tw:px-7 tw:py-5 tw:text-[15.5px]/[1.55] tw:font-medium tw:text-(--ink) tw:max-bsmd:mx-5 tw:max-bsmd:mb-5 tw:max-bsmd:rounded-[16px] tw:max-bsmd:px-4 tw:max-bsmd:py-3"
                  style={{ background: a.soft }}
                >
                  <FiCheck
                    aria-hidden="true"
                    className="tw:mt-1 tw:size-4 tw:flex-none tw:[stroke-width:3]"
                    style={{ color: a.softText }}
                  />
                  <span>
                    <span className="tw:sr-only">Zonic Media: </span>
                    {row.zonic}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Wrap>
    </Section>
  );
}
