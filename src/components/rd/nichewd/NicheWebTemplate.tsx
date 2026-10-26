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
import type { Palette } from "@/components/rd/industry/types";
import {
  FloatBento,
  H1Badge,
  HERO_BG,
  HeroMarks,
  LINKS,
  RichText,
  TitleLines,
} from "@/components/rd/industry/ui";
import { SITE_CONTACT } from "@/shared/siteConfig";
import { SiteStage } from "./heroes/SiteStage";
import {
  AiAnswerAnim,
  BookingPhoneAnim,
  RankClimbAnim,
  SiteMapAnim,
} from "./ui";
import type { NicheWebContent } from "./types";

/* ---------------------------------------------------------------------------
   NICHE WEBSITE DESIGN PAGES — redesign template (26 Oct 2026).

   Owner: web design is the service to grow; redesign every niche web
   design page for organic leads, starting with HVAC. Fresh keyword-led
   copy (./content). Owner review (26 Oct): hero like the industry pages
   (centred copy, floating cards), the interactive example site as a
   mid-page section, two more sections (site map, results) and animated
   UI components (./ui.tsx + nwd.css).

   Order: hero → services → example site (showcase) → what every site
   includes → growth (rank, booking, AI) → page map → 2–3-week process →
   results after launch → Zonic vs a template site → reviews → pricing
   (owner-locked; headings only) → FAQ → free mockup form with contact
   details → home2 gradient banner. Section ids reuse the `seo-`/`ind-`
   prefixes so the industry.css heading rules apply.
--------------------------------------------------------------------------- */

const ServiceLeadForm = dynamic(
  () => import("@/app/components/ServiceLeadForm"),
);

const CONSULT = "#seo-audit";
const REVIEWS_WIDGET =
  "https://cdn.trustindex.io/loader.js?bedc2ba73f755349bf36a19f52c";

function CallPill() {
  return (
    <Pill href={SITE_CONTACT.phoneHref} tone="outline" size="md" fullOnPhone>
      <FiPhone aria-hidden="true" /> Call {SITE_CONTACT.phoneDisplay}
    </Pill>
  );
}

export function NicheWebTemplate({ c }: { c: NicheWebContent }) {
  const tones = c.tones;
  const tone = (i: number) => tones[i % 4];
  const soft = (i: number) => ({
    background: tone(i).soft,
    color: tone(i).softText,
  });
  const solid = (i: number) => ({
    background: tone(i).solid,
    color: tone(i).onSolid,
  });
  const p: Palette = {
    a: tones[0].solid,
    aDeep: tones[0].solid,
    aSoft: tones[0].soft,
    aText: tones[0].softText,
    b: tones[1].solid,
    bDeep: tones[1].solid,
    bSoft: tones[1].soft,
    bText: tones[1].softText,
  };
  const g = c.growth;
  const panels = [tone(0).soft, tone(1).soft, tone(3).soft];
  const rows = [
    {
      key: "rank",
      copy: g.rank,
      ui: <RankClimbAnim t={tone(0)} keywords={g.rank.keywords} />,
    },
    {
      key: "convert",
      copy: g.convert,
      ui: (
        <BookingPhoneAnim
          t={tone(1)}
          url={g.convert.url}
          headline={g.convert.headline}
          services={g.convert.services}
          cta={c.stage.primary}
          toast={c.stage.toast}
        />
      ),
    },
    {
      key: "ai",
      copy: g.ai,
      ui: (
        <AiAnswerAnim
          t={tone(3)}
          query={g.ai.query}
          intro={g.ai.intro}
          bullets={g.ai.bullets}
          site={g.convert.url}
          business={c.stage.business}
        />
      ),
    },
  ];
  const contactTiles = [
    {
      icon: <FiPhone />,
      t: 0,
      small: "Talk to a web designer",
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
        {/* Owner (26 Oct): "make hero section just like industries hero
            section": centred copy, the bento floating around it. */}
        <section
          className={cx(
            "tw:relative tw:isolate tw:overflow-clip tw:pt-36 tw:pb-(--sec-y) tw:max-bsmd:pt-[120px] tw:bslg:flex tw:bslg:min-h-[min(100svh,1080px)] tw:bslg:items-center tw:bslg:pt-[120px] tw:bslg:pb-[calc(var(--sec-y)+40px)]",
            HERO_BG,
          )}
          aria-labelledby="ind-h1"
        >
          <HeroMarks />
          <Wrap>
            <div className="tw:relative">
              <FloatBento p={p} bento={c.hero.bento} part="float" />
              <div className="tw:relative tw:mx-auto tw:max-w-[720px] tw:py-6 tw:text-center tw:min-[1366px]:max-w-[min(720px,calc(100%-480px))] tw:min-[1366px]:py-10 tw:min-[1600px]:max-w-[800px]">
                <Strip
                  as="h1"
                  id="ind-h1"
                  size="heroWide"
                  className="tw:text-balance tw:bssm:text-[clamp(36px,3.85vw,56px)] tw:max-bssm:text-[clamp(30px,8vw,34px)]"
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
                    "tw:mx-auto tw:mt-6 tw:max-w-[620px]",
                  )}
                >
                  <RichText value={c.hero.lead} />
                </p>
                <div className="tw:mt-8 tw:flex tw:flex-wrap tw:justify-center tw:gap-3">
                  <Pill href={CONSULT} fullOnPhone>
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
                  <Pill href={CONSULT} arrow fullOnPhone>
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

        {/* ======================================================== SHOWCASE */}
        {/* Owner (26 Oct): the interactive example site as a section in the
            middle of the page. */}
        <Section labelledBy="seo-show-h" tone="white">
          <Wrap>
            <CenterHead id="seo-show-h" title={c.showcase.title}>
              {c.showcase.lead}
            </CenterHead>
            <SiteStage tones={tones} stage={c.stage} />
          </Wrap>
        </Section>

        {/* ======================================================== FEATURES */}
        <Section labelledBy="seo-feat-h">
          <Wrap>
            <CenterHead id="seo-feat-h" title={c.features.title}>
              {c.features.lead}
            </CenterHead>
            <ul className="tw:grid tw:grid-cols-4 tw:gap-5 tw:max-bsxl:grid-cols-2 tw:max-bssm:grid-cols-1 tw:max-bssm:gap-3">
              {c.features.items.map((f, i) => (
                <li
                  key={f.title}
                  className="tw:rounded-(--r-xl) tw:bg-white tw:px-6 tw:py-6"
                >
                  <span
                    className="tw:grid tw:size-11 tw:place-items-center tw:rounded-[14px] tw:text-[19px]"
                    style={soft(i)}
                    aria-hidden="true"
                  >
                    <Icon name={f.icon} />
                  </span>
                  <h3 className="tw:mt-4 tw:text-[18.5px]/[1.3]">{f.title}</h3>
                  <p className="tw:mt-2 tw:text-[15px]/[1.55] tw:text-(--text)">
                    {f.text}
                  </p>
                </li>
              ))}
            </ul>
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
                    <Pill href={CONSULT} arrow fullOnPhone>
                      {r.copy.cta}
                    </Pill>
                  </div>
                </div>
              </div>
            ))}
          </Wrap>
        </Section>

        {/* ========================================================= SITEMAP */}
        <Section labelledBy="seo-map-h">
          <Wrap>
            <CenterHead id="seo-map-h" title={c.sitemap.title}>
              {c.sitemap.lead}
            </CenterHead>
            <SiteMapAnim
              tones={tones}
              home={c.sitemap.home}
              groups={c.sitemap.groups}
            />
          </Wrap>
        </Section>

        {/* ========================================================= PROCESS */}
        <Section labelledBy="seo-steps-h" tone="white">
          <Wrap>
            <RowHead align="start">
              <div className="tw:min-w-0 tw:max-w-[760px] tw:flex-[1_1_560px]">
                <Strip id="seo-steps-h" className="tw:text-balance">
                  {c.process.title}
                </Strip>
              </div>
              <div className="tw:max-w-[440px] tw:flex-[0_1_440px] tw:bslg:pt-2">
                <p className={LEAD}>{c.process.lead}</p>
                <div className="tw:mt-6">
                  <CallPill />
                </div>
              </div>
            </RowHead>
            <ol className="tw:relative tw:grid tw:grid-cols-4 tw:gap-6 tw:max-bslg:grid-cols-2 tw:max-bssm:grid-cols-1">
              <span
                className="tw:absolute tw:top-[27px] tw:right-[12%] tw:left-[12%] tw:h-[3px] tw:overflow-hidden tw:rounded-full tw:bg-(--panel) tw:max-bslg:hidden"
                aria-hidden="true"
              >
                <span
                  className="nwd-run tw:block tw:h-full tw:rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${tone(0).solid}, ${tone(1).solid}, ${tone(2).solid}, ${tone(3).solid})`,
                  }}
                />
              </span>
              {c.process.items.map((s, i) => (
                <li
                  key={s.h}
                  className="tw:relative tw:text-center tw:max-bslg:text-left"
                >
                  <span
                    className="nwd-step tw:relative tw:mx-auto tw:grid tw:size-14 tw:place-items-center tw:rounded-full tw:text-[20px] tw:font-semibold tw:max-bslg:mx-0"
                    style={{ ...solid(i), animationDelay: `${i * 2}s` }}
                  >
                    {i + 1}
                  </span>
                  <span
                    className="tw:mt-5 tw:inline-block tw:rounded-full tw:px-3 tw:py-1 tw:text-[13px] tw:font-semibold"
                    style={soft(i)}
                  >
                    {s.when}
                  </span>
                  <h3 className="tw:mt-3 tw:text-[21px]/[1.25]">{s.h}</h3>
                  <p className="tw:mt-2 tw:text-[15.5px]/[1.6] tw:text-(--text)">
                    {s.p}
                  </p>
                </li>
              ))}
            </ol>
          </Wrap>
        </Section>

        {/* ========================================================= RESULTS */}
        <ResultsBlock c={c} />

        {/* ========================================================= COMPARE */}
        <Section labelledBy="seo-vs-h" tone="white">
          <Wrap>
            <CenterHead id="seo-vs-h" title={c.compare.title}>
              {c.compare.lead}
            </CenterHead>
            <div className="tw:mx-auto tw:max-w-[1140px] tw:overflow-hidden tw:rounded-(--r-xl) tw:bg-white tw:ring-1 tw:ring-(--line)">
              <div className="tw:grid tw:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)_minmax(0,1.15fr)] tw:max-bsmd:hidden">
                <span className="tw:px-7 tw:py-5 tw:text-[14px] tw:font-semibold tw:text-(--muted)">
                  What you get
                </span>
                <span className="tw:flex tw:items-center tw:gap-2.5 tw:px-7 tw:py-5 tw:text-[16px] tw:font-semibold tw:text-(--ink-2)">
                  <span className="tw:grid tw:size-7 tw:place-items-center tw:rounded-full tw:bg-[#fee2e2] tw:text-[#b91c1c]">
                    <FiX aria-hidden="true" />
                  </span>
                  {c.compare.otherLabel}
                </span>
                <span
                  className="tw:flex tw:items-center tw:gap-2.5 tw:px-7 tw:py-5 tw:text-[16px] tw:font-semibold"
                  style={solid(0)}
                >
                  <span className="tw:grid tw:size-7 tw:place-items-center tw:rounded-full tw:bg-white/20">
                    <FiCheck aria-hidden="true" />
                  </span>
                  A Zonic-built site
                </span>
              </div>
              <ul>
                {c.compare.rows.map((row) => (
                  <li
                    key={row.topic}
                    className="tw:grid tw:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)_minmax(0,1.15fr)] tw:border-t tw:border-(--line) tw:max-bsmd:grid-cols-1 tw:max-bsmd:first:border-t-0"
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
                        <span className="tw:sr-only">
                          {c.compare.otherLabel}:{" "}
                        </span>
                        {row.other}
                      </span>
                    </p>
                    <p
                      className="tw:flex tw:gap-3 tw:px-7 tw:py-5 tw:text-[15.5px]/[1.55] tw:font-medium tw:text-(--ink) tw:max-bsmd:mx-5 tw:max-bsmd:mb-5 tw:max-bsmd:rounded-[16px] tw:max-bsmd:px-4 tw:max-bsmd:py-3"
                      style={{ background: tone(0).soft }}
                    >
                      <FiCheck
                        aria-hidden="true"
                        className="tw:mt-1 tw:size-4 tw:flex-none tw:[stroke-width:3]"
                        style={{ color: tone(0).softText }}
                      />
                      <span>
                        <span className="tw:sr-only">A Zonic-built site: </span>
                        {row.zonic}
                      </span>
                    </p>
                  </li>
                ))}
              </ul>
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

        {/* ========================================================= PRICING */}
        <PricingSection
          copy={c.pricing}
          idPrefix="seo"
          ctaHref={CONSULT}
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

        {/* ========================================================= CONSULT */}
        <Section id="seo-audit" labelledBy="seo-audit-h">
          <Wrap flushOnPhone>
            <div className="tw:grid tw:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] tw:items-start tw:gap-12 tw:rounded-[48px] tw:bg-white tw:px-12 tw:py-14 tw:max-bslg:grid-cols-1 tw:max-bslg:gap-10 tw:max-bslg:px-10 tw:max-bssm:rounded-[28px] tw:max-bssm:px-4 tw:max-bssm:py-10">
              <div>
                <Strip id="seo-audit-h" size="card" className="tw:text-balance">
                  {c.consult.title}
                </Strip>
                <p className={cx(LEAD, LINKS, "tw:mt-5")}>
                  <RichText value={c.consult.lead} />
                </p>
                <ul className="tw:mt-7 tw:grid tw:grid-cols-2 tw:gap-x-6 tw:gap-y-3 tw:max-bssm:grid-cols-1">
                  {c.consult.points.map((t, i) => (
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
                <ServiceLeadForm {...c.consult.form} />
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
          ctaHref={CONSULT}
        />
      </main>
      <RelatedServices current={c.liveUrl} />
      <Footer />
    </>
  );
}

/* ---------------------------------------------------------------------------
   RESULTS — what changes after launch (owner, 26 Oct: two more sections).
   A static growth curve through four milestones (owner: "dont animate this
   ui component"), four outcome cards, then the sitewide verified numbers
   (never invented).
--------------------------------------------------------------------------- */

const CURVE_Y = [104, 78, 46, 14];
const CURVE = `M0 124 C 30 118, 40 ${CURVE_Y[0]}, 50 ${CURVE_Y[0]} S 130 ${CURVE_Y[1]}, 150 ${CURVE_Y[1]} S 230 ${CURVE_Y[2]}, 250 ${CURVE_Y[2]} S 330 ${CURVE_Y[3]}, 350 ${CURVE_Y[3]} L 400 4`;

function ResultsBlock({ c }: { c: NicheWebContent }) {
  const r = c.results;
  const tone = (i: number) => c.tones[i % 4];
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
              <Pill href={CONSULT} arrow fullOnPhone>
                {r.cta}
              </Pill>
            </div>
          </div>
        </RowHead>
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
                <linearGradient id="nwd-res-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="0%"
                    stopColor={tone(0).solid}
                    stopOpacity="0.16"
                  />
                  <stop
                    offset="100%"
                    stopColor={tone(0).solid}
                    stopOpacity="0"
                  />
                </linearGradient>
              </defs>
              <path
                d={`${CURVE} L 400 132 L 0 132 Z`}
                fill="url(#nwd-res-fill)"
              />
              <path
                d={CURVE}
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
        <ul className="tw:mt-6 tw:grid tw:grid-cols-4 tw:gap-6 tw:rounded-(--r-xl) tw:bg-(--ink) tw:px-10 tw:py-8 tw:text-white tw:max-bslg:grid-cols-2 tw:max-bssm:gap-y-7 tw:max-bssm:px-6">
          {r.band.map((b, i) => (
            <li key={b.value} className="tw:text-center">
              <span
                className="tw:mx-auto tw:grid tw:size-11 tw:place-items-center tw:rounded-full tw:text-[19px]"
                style={{ background: tone(i).soft, color: tone(i).softText }}
                aria-hidden="true"
              >
                <Icon name={b.icon} />
              </span>
              <b className="tw:mt-3.5 tw:block tw:text-[clamp(20px,1.8vw,24px)] tw:leading-[1.15] tw:font-semibold tw:tracking-[-0.02em]">
                {b.value}
              </b>
              <span className="tw:mt-1.5 tw:block tw:text-[14.5px]/[1.45] tw:text-white/75">
                {b.label}
              </span>
            </li>
          ))}
        </ul>
      </Wrap>
    </Section>
  );
}
