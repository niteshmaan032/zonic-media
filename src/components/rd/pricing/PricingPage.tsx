import dynamic from "next/dynamic";
import { FiCheck, FiMail, FiPhone } from "react-icons/fi";

import "@/components/rd/dfw-kit/kit.css";

import Footer from "@/app/components/Footer";
import { BannerLoops, GRAIN } from "@/components/rd/dfw-kit/banner";
import {
  LEAD,
  Pill,
  Section,
  Strip,
  Wrap,
  cx,
} from "@/components/rd/dfw-kit/primitives";
import { InlineChat } from "@/components/rd/dfw-kit/visuals";
import {
  AddOnsGrid,
  CustomPlanStrip,
  TrustPoints,
} from "@/components/rd/home/HomePricing";
import { PricingPlans } from "@/components/rd/home/PricingPlans";
import { SITE_CONTACT } from "@/shared/siteConfig";

const ServiceLeadForm = dynamic(
  () => import("@/app/components/ServiceLeadForm"),
);

/* ---------------------------------------------------------------------------
   /pricing — standalone pricing page (owner, 23 Oct 2026). Everything is on
   the page: plans with the monthly/annual toggle, the comparison table
   inline (no pop-up), add-ons, a custom-plan strip, the contact form and the
   /home2 closing banner + footer. Plans and prices: ../home/pricing.ts.
   Draft: noindex, not in the navbar or sitemap until the owner confirms the
   open pricing questions (Growth monthly rate, 10 vs 8 pages, add-ons).
--------------------------------------------------------------------------- */

const CONTACT = "#pricing-contact";

export function PricingPage() {
  return (
    <>
      <main className="dk-root">
        {/* ============================================================ HERO + PLANS */}
        <section
          className="tw:relative tw:isolate tw:overflow-clip tw:[background:radial-gradient(circle_at_16%_12%,rgba(49,87,245,0.07),transparent_26%),radial-gradient(circle_at_88%_6%,rgba(110,80,247,0.065),transparent_22%),linear-gradient(180deg,#fdfdff_0%,#f6f8fd_45%,var(--bg)_100%)] tw:pt-36 tw:pb-(--sec-y) tw:max-bsmd:pt-[120px]"
          aria-labelledby="pricing-h1"
        >
          <Wrap>
            <div className="tw:mx-auto tw:max-w-[900px] tw:text-center">
              <Strip as="h1" id="pricing-h1" size="hero">
                Digital Marketing Pricing <br className="tw:max-bssm:hidden" />
                and Plans
              </Strip>
              <p className={cx(LEAD, "tw:mx-auto tw:mt-6 tw:max-w-[700px]")}>
                Flat monthly plans for local SEO, Google Business Profile,
                Google Ads and social media. Pay monthly, or save with annual
                billing, and move up a plan when you are ready.
              </p>
            </div>
            <TrustPoints className="tw:mt-9 tw:mb-10" />
            <PricingPlans
              compare="inline"
              ctaHref={CONTACT}
              compareId="pricing-compare-h"
              compareTitle="Compare Digital Marketing Packages"
              compareLead="Every deliverable in Foundation, Growth and Authority."
            />
          </Wrap>
        </section>

        {/* =========================================================== ADD-ONS */}
        <Section labelledBy="pricing-addons-h">
          <Wrap>
            <AddOnsGrid
              as="h2"
              id="pricing-addons-h"
              flush
              title="Add-Ons for Any Marketing Plan"
              lead="Add to any plan, whenever your business needs more."
            />
            <CustomPlanStrip
              title="Need a custom plan?"
              text="Several locations, a new website and a marketing plan, or something in between: tell us your goals and we will put a plan together."
              ctaHref={CONTACT}
              ctaLabel="Get a Free Marketing Audit"
            />
          </Wrap>
        </Section>

        {/* =========================================================== CONTACT */}
        <Section id="pricing-contact" labelledBy="pricing-contact-h">
          <Wrap flushOnPhone>
            <div className="tw:relative tw:overflow-hidden tw:rounded-[48px] tw:bg-white tw:px-12 tw:pt-[60px] tw:pb-11 tw:text-center tw:max-bslg:px-10 tw:max-bssm:rounded-[28px] tw:max-bssm:px-4 tw:max-bssm:pt-12 tw:max-bssm:pb-4">
              <h2
                id="pricing-contact-h"
                className="tw:mx-auto tw:max-w-[20ch] tw:text-[clamp(34px,4.6vw,68px)] tw:leading-[1.08] tw:tracking-[-0.035em]"
              >
                Not Sure Which <InlineChat id="pricing-chat" /> Plan Fits?
              </h2>
              <p
                className={cx(LEAD, "tw:mx-auto tw:mt-[26px] tw:max-w-[640px]")}
              >
                Tell us about your business and goals. We will review your
                current visibility and recommend the plan that fits, with no
                obligation.
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
              </div>
              <div className="tw:mx-auto tw:mt-[34px] tw:max-w-[760px] tw:text-left">
                <ServiceLeadForm
                  formType="pricing-page"
                  badge="Free plan review"
                  title="Find the Right Plan"
                  subtitle="Takes about a minute — no commitment required."
                  submitText="Get My Plan Recommendation"
                  messageLabel="Which plan are you considering?"
                  messagePlaceholder="Your business, the areas you serve and what you want to grow"
                  defaultServices={["Local SEO"]}
                />
              </div>
            </div>
          </Wrap>
        </Section>

        {/* ============================================================ BANNER */}
        <Section labelledBy="pricing-banner-h">
          <Wrap>
            <div className="tw:relative tw:isolate tw:overflow-hidden tw:rounded-[44px] tw:[background:radial-gradient(60%_80%_at_100%_0%,rgba(59,130,246,0.85),transparent_60%),radial-gradient(55%_70%_at_75%_100%,rgba(244,143,203,0.95),transparent_65%),linear-gradient(105deg,#1b10e8_0%,#3d22f0_32%,#8a4cf0_62%,#d47fe0_100%)] tw:px-10 tw:pt-16 tw:pb-16 tw:text-center tw:text-white tw:max-bssm:rounded-[28px] tw:max-bssm:px-4 tw:max-bssm:pt-10 tw:max-bssm:pb-14">
              <span
                className="tw:pointer-events-none tw:absolute tw:inset-0 tw:-z-1 tw:opacity-[0.22] tw:mix-blend-overlay"
                style={{ backgroundImage: GRAIN }}
                aria-hidden="true"
              />
              <BannerLoops
                id="pricing-loop-l"
                className="tw:absolute tw:-bottom-6 tw:-left-6 tw:-z-1 tw:w-[clamp(180px,24vw,340px)] tw:max-bssm:w-[84px]"
              />
              <BannerLoops
                id="pricing-loop-r"
                className="tw:absolute tw:-right-6 tw:-bottom-6 tw:-z-1 tw:w-[clamp(180px,24vw,340px)] tw:-scale-x-100 tw:max-bssm:w-[120px]"
              />
              <h2
                id="pricing-banner-h"
                className="tw:mx-auto tw:max-w-[18ch] tw:text-[clamp(34px,5vw,74px)] tw:leading-[1.06] tw:tracking-[-0.035em] tw:text-white tw:text-balance"
              >
                Start With the Plan That Fits Today
              </h2>
              <p className="tw:mx-auto tw:mt-6 tw:max-w-[56ch] tw:text-lg/[1.65] tw:text-white/85">
                Book a free strategy call. We will look at your Google presence
                and recommend a plan, then you can move up whenever you are
                ready.
              </p>
              <div className="tw:mt-9 tw:flex tw:flex-wrap tw:items-center tw:justify-center tw:gap-3">
                <Pill href={SITE_CONTACT.bookCallHref} tone="white" fullOnPhone>
                  Book a Free Strategy Call
                </Pill>
                <a
                  href={SITE_CONTACT.phoneHref}
                  className="tw:inline-flex tw:min-h-14 tw:items-center tw:justify-center tw:gap-2 tw:rounded-full tw:border-[1.5px] tw:border-white/50 tw:px-7 tw:text-base tw:font-medium tw:text-white tw:transition tw:duration-200 tw:hover:-translate-y-0.5 tw:hover:bg-white/10 tw:max-bssm:w-full"
                >
                  <FiPhone aria-hidden="true" />
                  {SITE_CONTACT.phoneDisplay}
                </a>
              </div>
              <ul className="tw:mt-8 tw:flex tw:flex-wrap tw:justify-center tw:gap-x-6 tw:gap-y-2 tw:text-[14.5px] tw:text-white/80">
                {[
                  "Free, no-obligation call",
                  "Monthly or annual billing",
                  "Based in Dover, DE · serving the US",
                ].map((t) => (
                  <li key={t} className="tw:flex tw:items-center tw:gap-2">
                    <FiCheck aria-hidden="true" className="tw:text-(--gold)" />
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
