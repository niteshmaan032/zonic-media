import dynamic from "next/dynamic";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  FiArrowRight,
  FiCheck,
  FiMail,
  FiMapPin,
  FiMinus,
  FiPhone,
  FiPlus,
} from "react-icons/fi";
import { MdVerified } from "react-icons/md";

import "@/components/rd/dfw-kit/kit.css";
import "./chatgpt.css";

import Footer from "@/app/components/Footer";
import RelatedServices from "@/app/components/RelatedServices";
import { Wrap, cx } from "@/components/rd/dfw-kit/primitives";
import { SITE_CONTACT } from "@/shared/siteConfig";
import {
  BANNER,
  CONTACT,
  CONTACT_ID,
  FAQ,
  FEATURES,
  HERO,
  NICHES,
  PAGE_URL,
  SPRITE,
  STEPS,
  type Feature,
} from "./content";
import { AgentUi, ClaimUi, FactsUi, InsightsUi } from "./demos";
import { HeroChat } from "./HeroChat";
import { HeroOrbit } from "./HeroOrbit";
import { Rich } from "./Rich";
import { Steps } from "./Steps";

/* ---------------------------------------------------------------------------
   /services/chatgpt-business-profile (11 Nov 2026).

   Owner brief: a landing page for "Businesses in ChatGPT" (OpenAI beta,
   10 Nov 2026) in the reference page's colour theory: sky hero with the
   orbiting icons, black feature bands with sky panels, a dark-grey steps
   band, black FAQ and a navy closing banner. Animated UI components take
   the place of the reference videos. Site header (layout) and footer.

   Order: hero + chat demo → claim → facts → agent → insights → 3 steps →
   FAQ → banner → contact (phone, email, address beside the form) →
   related services → footer. Copy and research notes in ./content.ts.
--------------------------------------------------------------------------- */

const ServiceLeadForm = dynamic(
  () => import("@/app/components/ServiceLeadForm"),
);

const CONTACT_HREF = `#${CONTACT_ID}`;

const DEMOS: Record<Feature["ui"], () => ReactNode> = {
  claim: () => <ClaimUi />,
  facts: () => <FactsUi />,
  agent: () => <AgentUi />,
  insights: () => <InsightsUi />,
};

/** Pill button in the reference page's style. Black on the sky hero,
    the sky blue on black sections, white on the navy banner (owner,
    11 Nov: CTAs below the hero must stand out). */
function CtaPill({
  href,
  tone,
  children,
}: {
  href: string;
  tone: "black" | "blue" | "white";
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className={cx(
        "tw:inline-flex tw:h-12 tw:items-center tw:justify-center tw:gap-2 tw:rounded-full tw:px-6 tw:text-[15px] tw:font-medium tw:whitespace-nowrap tw:transition tw:duration-200",
        tone === "black" && "tw:bg-black tw:text-white tw:hover:bg-[#262626]",
        tone === "blue" &&
          "tw:bg-(--check) tw:text-white tw:shadow-[0_12px_28px_-14px_rgba(29,139,241,0.9)] tw:hover:bg-[#0f74d6]",
        tone === "white" && "tw:bg-white tw:text-(--navy) tw:hover:bg-[#e8f3fe]",
      )}
    >
      {children}
      <FiArrowRight aria-hidden="true" />
    </a>
  );
}

/** Phone button with the number in an icon pill: light on the sky hero,
    outlined on the navy banner. */
function PhonePill({ tone }: { tone: "light" | "dark" }) {
  return (
    <a
      href={SITE_CONTACT.phoneHref}
      className={cx(
        "tw:inline-flex tw:h-12 tw:items-center tw:justify-center tw:gap-2.5 tw:rounded-full tw:py-1.5 tw:pr-5 tw:pl-1.5 tw:text-[15px] tw:font-medium tw:whitespace-nowrap tw:transition tw:duration-200",
        tone === "light"
          ? "tw:bg-white/80 tw:text-black tw:ring-1 tw:ring-black/10 tw:backdrop-blur-md tw:hover:bg-white"
          : "tw:bg-white/10 tw:text-white tw:ring-1 tw:ring-white/35 tw:hover:bg-white/20",
      )}
    >
      <span
        className={cx(
          "tw:grid tw:size-9 tw:place-items-center tw:rounded-full",
          tone === "light" ? "tw:bg-black tw:text-white" : "tw:bg-white tw:text-(--navy)",
        )}
        aria-hidden="true"
      >
        <FiPhone className="tw:size-4" />
      </span>
      Call {SITE_CONTACT.phoneDisplay}
    </a>
  );
}

/** One icon from the hero sprite (6×4 cells). */
function SpriteIcon({ cell, className }: { cell: number; className: string }) {
  return (
    <span
      aria-hidden="true"
      className={cx("tw:block tw:bg-no-repeat", className)}
      style={{
        backgroundImage: `url(${SPRITE})`,
        backgroundSize: "600% 400%",
        backgroundPosition: `${(cell % 6) * 20}% ${(Math.floor(cell / 6) * 100) / 3}%`,
      }}
    />
  );
}

/** "Every niche" tiles: the hero's 3D icons, each linking to that niche's
    local SEO page, plus a sky tile for all industries. */
function NicheTiles() {
  return (
    <section
      id="cg-niches"
      aria-labelledby="cg-niches-h"
      className="tw:bg-black tw:py-[clamp(56px,6vw,96px)]"
    >
      <Wrap>
        <div className="tw:mx-auto tw:mb-[clamp(32px,4vw,52px)] tw:max-w-[760px] tw:text-center">
          <h2
            id="cg-niches-h"
            className="tw:text-[clamp(30px,3vw,44px)] tw:leading-[1.15] tw:tracking-[-0.02em] tw:text-balance tw:text-white"
          >
            {NICHES.title}
          </h2>
          <p className="tw:mt-4 tw:text-[17px]/[1.65] tw:text-white/80">
            {NICHES.lead}
          </p>
        </div>
        <ul className="tw:grid tw:grid-cols-5 tw:gap-3 tw:max-bsxl:grid-cols-4 tw:max-bsmd:grid-cols-3 tw:max-bssm:grid-cols-2">
          {NICHES.items.map((n) => (
            <li key={n.href}>
              <Link
                href={n.href}
                className="tw:group tw:flex tw:h-full tw:flex-col tw:items-center tw:gap-3 tw:rounded-[20px] tw:bg-white/[0.05] tw:px-3 tw:pt-5 tw:pb-4 tw:text-center tw:ring-1 tw:ring-white/10 tw:transition tw:duration-200 tw:hover:-translate-y-1 tw:hover:bg-white/10 tw:hover:ring-white/25"
              >
                <SpriteIcon
                  cell={n.icon}
                  className="tw:size-[76px] tw:transition tw:duration-300 tw:group-hover:scale-110 tw:max-bssm:size-16"
                />
                <span className="tw:text-[15px]/[1.35] tw:font-medium tw:text-white">
                  {n.label}
                </span>
              </Link>
            </li>
          ))}
          <li className="tw:max-bssm:col-span-2">
            <Link
              href={NICHES.more.href}
              className="tw:flex tw:h-full tw:min-h-[150px] tw:flex-col tw:items-center tw:justify-center tw:gap-2 tw:rounded-[20px] tw:bg-(--demo) tw:px-3 tw:py-5 tw:text-center tw:text-(--ink) tw:transition tw:duration-200 tw:hover:-translate-y-1 tw:hover:bg-white"
            >
              <b className="tw:text-[18px]/[1.3] tw:font-medium">
                {NICHES.more.label}
              </b>
              <span className="tw:inline-flex tw:items-center tw:gap-1.5 tw:rounded-full tw:bg-(--check) tw:px-3.5 tw:py-1.5 tw:text-[13.5px] tw:font-medium tw:text-white">
                {NICHES.more.sub} <FiArrowRight aria-hidden="true" />
              </span>
            </Link>
          </li>
        </ul>
      </Wrap>
    </section>
  );
}

function FeatureRow({ f, flip }: { f: Feature; flip: boolean }) {
  const headingId = `${f.id}-h`;
  return (
    <section
      id={f.id}
      aria-labelledby={headingId}
      className="tw:bg-black tw:py-[clamp(44px,5vw,72px)]"
    >
      <Wrap>
        <div
          className={cx(
            "tw:grid tw:items-center tw:gap-[clamp(32px,5vw,80px)] tw:max-bslg:grid-cols-1 tw:max-bslg:gap-9",
            flip
              ? "tw:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]"
              : "tw:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]",
          )}
        >
          <div
            className={cx(
              "tw:max-w-[480px] tw:max-bslg:max-w-[640px]",
              flip && "tw:bslg:order-last tw:bslg:justify-self-end",
            )}
          >
            <h2
              id={headingId}
              className="tw:text-[clamp(28px,2.5vw,38px)] tw:leading-[1.18] tw:tracking-[-0.02em] tw:text-balance tw:text-white"
            >
              {f.title}
            </h2>
            <p className="tw:mt-5 tw:text-[17px]/[1.65] tw:text-white/85">
              <Rich text={f.body} />
            </p>
            <ul className="tw:mt-5 tw:grid tw:gap-2.5">
              {f.points.map((pt) => (
                <li
                  key={pt}
                  className="tw:flex tw:items-center tw:gap-2.5 tw:text-[15px] tw:text-white/80"
                >
                  <FiCheck
                    className="tw:size-[18px] tw:flex-none tw:rounded-full tw:bg-white/12 tw:p-[3px] tw:text-white tw:[stroke-width:3]"
                    aria-hidden="true"
                  />
                  {pt}
                </li>
              ))}
            </ul>
            <div className="tw:mt-8">
              <CtaPill href={CONTACT_HREF} tone="blue">
                {HERO.cta}
              </CtaPill>
            </div>
          </div>
          <div>{DEMOS[f.ui]()}</div>
        </div>
      </Wrap>
    </section>
  );
}

export function ChatgptBusinessPage() {
  const contactTiles = [
    {
      icon: <FiPhone />,
      small: "Talk to a specialist",
      strong: SITE_CONTACT.phoneDisplay,
      href: SITE_CONTACT.phoneHref,
    },
    {
      icon: <FiMail />,
      small: "Email us",
      strong: SITE_CONTACT.email,
      href: SITE_CONTACT.emailHref,
    },
    {
      icon: <FiMapPin />,
      small: "Our office",
      strong: SITE_CONTACT.address,
      href: SITE_CONTACT.mapHref,
      external: true,
    },
  ];

  return (
    <>
      <main className="dk-root cg-root">
        {/* ============================================================ HERO */}
        <section
          className="tw:relative tw:isolate tw:overflow-clip tw:bg-white tw:pb-[clamp(56px,6vw,88px)]"
          aria-labelledby="cg-h1"
        >
          <div className="cg-sky" aria-hidden="true" />
          <HeroOrbit sprite={SPRITE} />
          <Wrap className="tw:relative tw:z-10 tw:pt-[clamp(236px,21.5vw,322px)] tw:text-center tw:max-bssm:pt-[208px]">
            <h1
              id="cg-h1"
              className="tw:text-[clamp(42px,4.15vw,60px)] tw:leading-[1.05] tw:tracking-[-0.02em] tw:text-black tw:max-bssm:text-[clamp(36px,10.25vw,44px)]"
            >
              {HERO.h1[0]}{" "}
              {/* Balanced two lines on desktop; phones wrap naturally. */}
              <br className="tw:max-bslg:hidden" />
              {HERO.h1[1]}
            </h1>
            <p className="tw:mx-auto tw:mt-6 tw:max-w-[640px] tw:text-[17px]/[1.65] tw:text-black">
              {HERO.lead}
            </p>
            <div className="tw:mt-8 tw:flex tw:flex-wrap tw:items-center tw:justify-center tw:gap-3">
              <CtaPill href={CONTACT_HREF} tone="black">
                {HERO.cta}
              </CtaPill>
              <PhonePill tone="light" />
            </div>
          </Wrap>
          <Wrap className="tw:relative tw:z-10 tw:mt-[clamp(48px,5vw,72px)]">
            <HeroChat />
          </Wrap>
        </section>

        {/* ======================================================== FEATURES */}
        {FEATURES.map((f, i) => (
          <FeatureRow key={f.id} f={f} flip={i % 2 === 1} />
        ))}

        {/* ========================================================= NICHES */}
        <NicheTiles />

        {/* =========================================================== STEPS */}
        <section
          id="cg-steps"
          aria-labelledby="cg-steps-h"
          className="tw:mt-[clamp(28px,4vw,56px)] tw:bg-(--band) tw:py-[clamp(64px,7vw,104px)]"
        >
          <Wrap>
            <div className="tw:mx-auto tw:mb-[clamp(36px,4vw,56px)] tw:max-w-[720px] tw:text-center">
              <h2
                id="cg-steps-h"
                className="tw:text-[clamp(30px,3vw,44px)] tw:leading-[1.15] tw:tracking-[-0.02em] tw:text-balance tw:text-white"
              >
                {STEPS.title}
              </h2>
              <p className="tw:mt-4 tw:text-[17px]/[1.65] tw:text-white/80">
                {STEPS.lead}
              </p>
            </div>
            <Steps items={STEPS.items} />
          </Wrap>
        </section>

        {/* ============================================================= FAQ */}
        <section
          id="cg-faq"
          aria-labelledby="cg-faq-h"
          className="tw:bg-black tw:py-[clamp(64px,7vw,104px)]"
        >
          <Wrap>
            <div className="tw:mx-auto tw:max-w-[760px]">
              <h2
                id="cg-faq-h"
                className="tw:mb-10 tw:text-center tw:text-[clamp(30px,3vw,44px)] tw:leading-[1.15] tw:tracking-[-0.02em] tw:text-balance tw:text-white"
              >
                {FAQ.title}
              </h2>
              <div className="tw:border-t tw:border-(--hair)">
                {FAQ.items.map((item, i) => (
                  <details
                    key={item.q}
                    name="cg-faq"
                    open={i === 0}
                    className="tw:group tw:border-b tw:border-(--hair)"
                  >
                    <summary className="tw:flex tw:cursor-pointer tw:items-center tw:justify-between tw:gap-6 tw:py-5">
                      <h3 className="tw:text-[18px] tw:leading-[1.4] tw:font-normal tw:text-white">
                        {item.q}
                      </h3>
                      <span className="tw:flex-none tw:text-[20px] tw:text-white" aria-hidden="true">
                        <FiPlus className="tw:group-open:hidden" />
                        <FiMinus className="tw:hidden tw:group-open:block" />
                      </span>
                    </summary>
                    <p className="tw:pr-12 tw:pb-6 tw:text-[16px]/[1.7] tw:text-white/70 tw:max-bssm:pr-0">
                      <Rich
                        text={item.a}
                        linkClass="tw:text-white tw:underline tw:decoration-1 tw:underline-offset-[3px] tw:hover:opacity-75"
                      />
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </Wrap>
        </section>

        {/* ========================================================== BANNER */}
        <section aria-labelledby="cg-banner-h" className="tw:bg-black tw:pb-[clamp(40px,5vw,72px)]">
          <Wrap flushOnPhone>
            {/* The glow is a plain gradient: the earlier 90px blur filter
                was too slow to paint on iPhones (white flashes, 11 Nov). */}
            <div className="cg-banner tw:relative tw:overflow-hidden tw:rounded-[28px] tw:px-6 tw:py-[clamp(64px,7vw,104px)] tw:text-center tw:max-bssm:rounded-none">
              <MdVerified
                className="tw:relative tw:mx-auto tw:size-16 tw:text-(--check) tw:drop-shadow-[0_10px_24px_rgba(29,139,241,0.55)]"
                aria-hidden="true"
              />
              <h2
                id="cg-banner-h"
                className="tw:relative tw:mt-5 tw:text-[clamp(32px,3.6vw,52px)] tw:leading-[1.1] tw:tracking-[-0.02em] tw:text-balance tw:text-white"
              >
                {BANNER.title}
              </h2>
              <p className="tw:relative tw:mx-auto tw:mt-4 tw:max-w-[620px] tw:text-[17px]/[1.65] tw:text-white/85">
                {BANNER.lead}
              </p>
              <div className="tw:relative tw:mt-8 tw:flex tw:flex-wrap tw:items-center tw:justify-center tw:gap-3 tw:px-2">
                <CtaPill href={CONTACT_HREF} tone="white">
                  {HERO.cta}
                </CtaPill>
                <PhonePill tone="dark" />
              </div>
            </div>
          </Wrap>
        </section>

        {/* ========================================================= CONTACT */}
        <section
          id={CONTACT_ID}
          aria-labelledby="cg-contact-h"
          className="tw:scroll-mt-24 tw:bg-black tw:pt-[clamp(32px,4vw,56px)] tw:pb-[clamp(64px,7vw,104px)]"
        >
          <Wrap>
            <div className="tw:grid tw:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] tw:items-start tw:gap-[clamp(36px,5vw,72px)] tw:max-bslg:grid-cols-1">
              <div>
                <h2
                  id="cg-contact-h"
                  className="tw:text-[clamp(30px,3vw,44px)] tw:leading-[1.15] tw:tracking-[-0.02em] tw:text-balance tw:text-white"
                >
                  {CONTACT.title}
                </h2>
                <p className="tw:mt-5 tw:text-[17px]/[1.65] tw:text-white/80">
                  <Rich
                    text={CONTACT.lead}
                    linkClass="tw:text-white tw:underline tw:decoration-1 tw:underline-offset-[3px] tw:hover:opacity-75"
                  />
                </p>
                <ul className="tw:mt-7 tw:grid tw:grid-cols-2 tw:gap-x-6 tw:gap-y-3 tw:max-bssm:grid-cols-1">
                  {CONTACT.points.map((pt) => (
                    <li
                      key={pt}
                      className="tw:flex tw:items-center tw:gap-2.5 tw:text-[15.5px] tw:text-white/85"
                    >
                      <FiCheck
                        className="tw:size-5 tw:flex-none tw:rounded-full tw:bg-(--check) tw:p-1 tw:text-white tw:[stroke-width:3.5]"
                        aria-hidden="true"
                      />
                      {pt}
                    </li>
                  ))}
                </ul>
                {/* Contact details beside the form (owner rule, 24 Oct). */}
                <ul className="tw:mt-9 tw:grid tw:grid-cols-2 tw:gap-3 tw:max-bssm:grid-cols-1">
                  {contactTiles.map((c, i) => (
                    <li
                      key={c.small}
                      className={cx(i === 2 && "tw:col-span-2 tw:max-bssm:col-span-1")}
                    >
                      <a
                        href={c.href}
                        className="tw:flex tw:h-full tw:items-center tw:gap-3.5 tw:rounded-[18px] tw:bg-white/[0.06] tw:p-4 tw:ring-1 tw:ring-white/10 tw:transition tw:hover:bg-white/10"
                        {...(c.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        <span
                          className="tw:grid tw:size-11 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-white tw:text-[18px] tw:text-black"
                          aria-hidden="true"
                        >
                          {c.icon}
                        </span>
                        <span className="tw:min-w-0">
                          <small className="tw:block tw:text-[13px] tw:text-white/60">
                            {c.small}
                          </small>
                          <strong className="tw:mt-0.5 tw:block tw:text-[15.5px]/[1.4] tw:font-medium tw:break-words tw:text-white">
                            {c.strong}
                          </strong>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="tw:w-full">
                <ServiceLeadForm {...CONTACT.form} />
              </div>
            </div>
          </Wrap>
        </section>
      </main>
      {/* Black behind the related links and the footer's rounded top, so
          the page doesn't flash the white body between them. */}
      <div className="tw:bg-black tw:pt-px">
        <RelatedServices current={PAGE_URL} />
        <Footer />
      </div>
    </>
  );
}
