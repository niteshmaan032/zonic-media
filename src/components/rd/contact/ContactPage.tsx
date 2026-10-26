import Link from "next/link";
import dynamic from "next/dynamic";
import type { ReactNode } from "react";
import {
  FiArrowRight,
  FiCheck,
  FiClipboard,
  FiCode,
  FiFileText,
  FiMail,
  FiMapPin,
  FiPhoneCall,
  FiPlus,
  FiSearch,
  FiShield,
  FiStar,
  FiTarget,
  FiTool,
} from "react-icons/fi";

import "@/components/rd/dfw-kit/kit.css";
import "@/components/rd/dfw-kit/ui.css";
import "@/components/rd/delaware/delaware.css";

import Footer from "@/app/components/Footer";
import {
  CenterHead,
  LEAD,
  Pill,
  Section,
  Strip,
  Wrap,
  cx,
} from "@/components/rd/dfw-kit/primitives";
import { Chip } from "@/components/rd/dfw-kit/ui";
import { InlineChat, TrustLogos } from "@/components/rd/dfw-kit/visuals";
import { inAt } from "@/components/rd/delaware/uiBits";
import { SITE_CONTACT } from "@/shared/siteConfig";
import { CONTACT_FAQS, CONTACT_SERVICE_OPTIONS } from "./content";

const ServiceLeadForm = dynamic(
  () => import("@/app/components/ServiceLeadForm"),
);

/* ---------------------------------------------------------------------------
   CONTACT US — redesign draft (24 Oct 2026), /contact-us-2 (noindex).

   Same contact channels (phone, email, address from SITE_CONTACT) and the
   same lead form (formType "contact", same service options). Google 5.0
   and review logos, "what happens next" steps, quick service links and a
   short FAQ. (Owner, 24 Oct: office section and the chat channel removed;
   Email and the service select share a row.) Copy re-optimized 24 Oct for
   "contact a digital marketing agency" intent: new H1, intro, headings,
   step and FAQ wording; no sentence carried over from the live page.
--------------------------------------------------------------------------- */

type Channel = {
  icon: ReactNode;
  tone: string;
  small: string;
  strong: string;
  href?: string;
  external?: boolean;
};

const CHANNELS: Channel[] = [
  {
    icon: <FiMail />,
    tone: "tw:bg-(--blue) tw:text-white",
    small: "Email a strategist",
    strong: SITE_CONTACT.email,
    href: SITE_CONTACT.emailHref,
  },
  {
    icon: <FiPhoneCall />,
    tone: "tw:bg-(--green) tw:text-white",
    small: "Call our marketing team",
    strong: SITE_CONTACT.phoneDisplay,
    href: SITE_CONTACT.phoneHref,
  },
  {
    icon: <FiMapPin />,
    tone: "tw:bg-[#ea4335] tw:text-white",
    small: "Office in Dover, Delaware",
    strong: SITE_CONTACT.address,
    href: SITE_CONTACT.mapHref,
    external: true,
  },
];

const SERVICES: { icon: ReactNode; title: string; href: string }[] = [
  {
    icon: <FiTool />,
    title: "Local SEO for Home Services",
    href: "/services/local-seo-for-home-services",
  },
  {
    icon: <FiMapPin />,
    title: "Google Business Profile Optimization",
    href: "/local-seo-google-business-optimization",
  },
  {
    icon: <FiShield />,
    title: "Suspended Profile Reinstatement",
    href: "/services/gbp-reinstatement-service",
  },
  { icon: <FiCode />, title: "Website Design", href: "/services/web-design" },
  {
    icon: <FiTarget />,
    title: "Google Ads Management",
    href: "/services/google-ads",
  },
  {
    icon: <FiSearch />,
    title: "AI Search Optimization",
    href: "/services/ai-seo-services",
  },
];

/* ------------------------------------------------------- step visuals */

function ReplyMini() {
  return (
    <div
      className="tw:rounded-[16px] tw:bg-white tw:p-3.5 tw:text-[12.5px] tw:ring-1 tw:ring-(--line)"
      aria-hidden="true"
    >
      <span className="tw:flex tw:items-center tw:justify-between tw:gap-2">
        <b className="tw:font-semibold">Zonic Media</b>
        <Chip tone="green">1 business day</Chip>
      </span>
      <span className="tw:mt-1 tw:block tw:text-(--muted)">
        Re: Your free local SEO audit
      </span>
      <span className="tw:mt-2.5 tw:block tw:h-1.5 tw:w-full tw:rounded-full tw:bg-[#e2e8f0]" />
      <span className="tw:mt-1.5 tw:block tw:h-1.5 tw:w-3/4 tw:rounded-full tw:bg-[#e2e8f0]" />
    </div>
  );
}

function ReviewMini() {
  return (
    <ul className="tw:grid tw:gap-1.5 tw:text-[12.5px]" aria-hidden="true">
      {["Google Business Profile", "Maps and search rankings", "Website"].map(
        (t, i) => (
          <li
            key={t}
            className="tw:flex tw:items-center tw:justify-between tw:gap-2 tw:rounded-[12px] tw:bg-white tw:px-3 tw:py-2 tw:font-medium tw:ring-1 tw:ring-(--line)"
            style={inAt(i + 1)}
          >
            {t}
            <FiCheck className="tw:size-4 tw:text-(--green)" />
          </li>
        ),
      )}
    </ul>
  );
}

function PlanMini() {
  return (
    <div
      className="tw:rounded-[16px] tw:bg-(--ink) tw:p-3.5 tw:text-[12.5px] tw:text-white"
      aria-hidden="true"
    >
      <b className="tw:font-semibold">Your next steps</b>
      <ul className="tw:mt-2 tw:grid tw:gap-1.5 tw:text-[#c9d4e8]">
        {["Quickest fixes first", "A clear, flat quote", "Month to month"].map(
          (t) => (
            <li key={t} className="tw:flex tw:items-center tw:gap-2">
              <FiCheck className="tw:size-3.5 tw:text-(--gold)" /> {t}
            </li>
          ),
        )}
      </ul>
    </div>
  );
}

const STEPS = [
  {
    title: "A strategist replies in one business day",
    desc: "A real marketer reads your message and replies with questions or a time to talk.",
    ui: <ReplyMini />,
    tone: "tw:bg-(--blue) tw:text-white",
  },
  {
    title: "Your free local SEO audit",
    desc: "Your Google profile, Maps rankings and website, checked against the competitors above you.",
    ui: <ReviewMini />,
    tone: "tw:bg-(--gold) tw:text-(--ink)",
  },
  {
    title: "A growth plan you're free to say no to",
    desc: "The quickest wins and a flat quote, month to month, with zero pressure.",
    ui: <PlanMini />,
    tone: "tw:bg-(--green) tw:text-white",
  },
];

/* ----------------------------------------------------------------- page */

export function ContactPage() {
  return (
    <>
      <main className="dk-root">
        {/* ============================================================ HERO */}
        <section
          className="tw:relative tw:isolate tw:overflow-clip tw:[background:radial-gradient(circle_at_10%_12%,rgba(37,103,232,0.10),transparent_28%),radial-gradient(circle_at_92%_10%,rgba(52,168,83,0.09),transparent_26%),linear-gradient(180deg,#fbfcff_0%,#f6f8fd_100%)] tw:pt-36 tw:pb-(--sec-y) tw:max-bsmd:pt-[120px]"
          aria-labelledby="ct-h1"
        >
          <Wrap>
            <div className="tw:grid tw:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] tw:items-start tw:gap-14 tw:max-bsxl:gap-10 tw:max-bslg:grid-cols-1">
              <div>
                <Strip as="h1" id="ct-h1" size="hero">
                  Contact <InlineChat id="ct-chat" /> Our Digital Marketing
                  Agency
                </Strip>
                <p className={cx(LEAD, "tw:mt-6 tw:max-w-[560px]")}>
                  Call, email or send the form. A strategist replies within one
                  business day with a free local SEO audit of your Google
                  Business Profile, Maps rankings and website. No obligation.
                </p>

                <ul className="tw:mt-9 tw:grid tw:grid-cols-2 tw:gap-3 tw:max-bssm:grid-cols-1">
                  {CHANNELS.map((c, i) => {
                    const body = (
                      <>
                        <span
                          className={cx(
                            "tw:grid tw:size-11 tw:flex-none tw:place-items-center tw:rounded-[14px] tw:text-[18px]",
                            c.tone,
                          )}
                          aria-hidden="true"
                        >
                          {c.icon}
                        </span>
                        <span className="tw:min-w-0">
                          <small className="tw:block tw:text-[13px] tw:text-(--muted)">
                            {c.small}
                          </small>
                          <strong className="tw:mt-0.5 tw:block tw:text-[15.5px]/[1.4] tw:font-medium tw:text-(--ink) tw:break-words">
                            {c.strong}
                          </strong>
                        </span>
                      </>
                    );
                    const box =
                      "tw:flex tw:h-full tw:items-start tw:gap-3.5 tw:rounded-[20px] tw:bg-white tw:p-4 tw:ring-1 tw:ring-(--line) tw:transition";
                    return (
                      <li
                        key={c.small}
                        className={cx(
                          i === CHANNELS.length - 1 &&
                            "tw:col-span-2 tw:max-bssm:col-span-1",
                        )}
                      >
                        {c.href ? (
                          <a
                            href={c.href}
                            className={cx(
                              box,
                              "tw:hover:-translate-y-0.5 tw:hover:ring-(--ink)",
                            )}
                            {...(c.external
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {})}
                          >
                            {body}
                          </a>
                        ) : (
                          <div className={box}>{body}</div>
                        )}
                      </li>
                    );
                  })}
                </ul>

                <TrustLogos
                  mapHref={SITE_CONTACT.mapHref}
                  size="row"
                  className="tw:mt-10 tw:justify-start! tw:gap-x-7! tw:max-bslg:justify-center! tw:max-bssm:gap-x-6!"
                />
              </div>

              <div className="tw:rounded-[32px] tw:bg-white tw:p-3 tw:[box-shadow:0_40px_80px_-60px_rgba(12,21,38,0.5)] tw:max-bssm:rounded-[24px] tw:max-bssm:p-1.5">
                <ServiceLeadForm
                  formType="contact"
                  badge="Free consultation"
                  title="Request Your Free Audit"
                  subtitle="Tell us your goals. We reply within one business day, with no obligation."
                  submitText="Send My Request"
                  showBusinessName={false}
                  serviceBesideEmail
                  serviceOptions={CONTACT_SERVICE_OPTIONS}
                  messagePlaceholder="Tell us a bit about your goals or project"
                />
              </div>
            </div>
          </Wrap>
        </section>

        {/* ======================================================= NEXT STEPS */}
        <Section labelledBy="ct-next-h">
          <Wrap>
            <CenterHead
              id="ct-next-h"
              title="From First Message to Your Free Local SEO Audit"
            >
              Three steps, and nothing is decided until you say yes.
            </CenterHead>
            <ol className="tw:grid tw:grid-cols-3 tw:gap-6 tw:max-bslg:grid-cols-1 tw:max-bslg:gap-4">
              {STEPS.map((step, i) => (
                <li
                  key={step.title}
                  className="tw:flex tw:flex-col tw:rounded-(--r-xl) tw:bg-white tw:px-7 tw:pt-7 tw:pb-7 tw:max-bssm:px-6"
                >
                  <span
                    className={cx(
                      "tw:grid tw:size-12 tw:place-items-center tw:rounded-full tw:text-[17px] tw:font-semibold",
                      step.tone,
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="tw:mt-5 tw:text-[22px]/[1.25]">
                    {step.title}
                  </h3>
                  <p className="tw:mt-2.5 tw:text-[16.5px]/[1.65] tw:text-(--text)">
                    {step.desc}
                  </p>
                  <div className="tw:mt-6 tw:rounded-[20px] tw:bg-(--panel) tw:p-4">
                    {step.ui}
                  </div>
                </li>
              ))}
            </ol>
          </Wrap>
        </Section>

        {/* ======================================================== SERVICES */}
        <Section labelledBy="ct-help-h" tone="white">
          <Wrap>
            <CenterHead
              id="ct-help-h"
              title="What Our Digital Marketing Agency Can Do for You"
            >
              Google Maps, AI search, reviews, websites and ads. Not sure which
              you need? Just ask.
            </CenterHead>
            <ul className="tw:grid tw:grid-cols-3 tw:gap-4 tw:max-bslg:grid-cols-2 tw:max-bssm:grid-cols-1">
              {SERVICES.map((s, i) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="tw:group tw:flex tw:items-center tw:gap-4 tw:rounded-[22px] tw:bg-(--panel) tw:px-5 tw:py-5 tw:transition tw:hover:-translate-y-0.5 tw:hover:bg-(--blue-soft)"
                  >
                    <span
                      className={cx(
                        "tw:grid tw:size-12 tw:flex-none tw:place-items-center tw:rounded-[14px] tw:text-[20px]",
                        [
                          "tw:bg-[#ea580c] tw:text-white",
                          "tw:bg-[#34a853] tw:text-white",
                          "tw:bg-(--ink) tw:text-white",
                          "tw:bg-[#7c3aed] tw:text-white",
                          "tw:bg-[#fbbc04] tw:text-(--ink)",
                          "tw:bg-(--blue) tw:text-white",
                        ][i],
                      )}
                      aria-hidden="true"
                    >
                      {s.icon}
                    </span>
                    <span className="tw:flex-1 tw:text-[17px]/[1.35] tw:font-medium tw:text-(--ink)">
                      {s.title}
                    </span>
                    <FiArrowRight
                      aria-hidden="true"
                      className="tw:size-5 tw:flex-none tw:text-(--muted) tw:transition-transform tw:group-hover:translate-x-[3px] tw:group-hover:text-(--blue)"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </Wrap>
        </Section>

        {/* ============================================================= FAQ */}
        <Section labelledBy="ct-faq-h">
          <Wrap>
            <CenterHead
              id="ct-faq-h"
              title="What Owners Ask Before Contacting Our Agency"
            >
              Straight answers to what owners ask before the first call.
            </CenterHead>
            <div className="tw:mx-auto tw:max-w-[960px] tw:rounded-[32px] tw:bg-white tw:px-11 tw:py-2 tw:max-bsmd:px-6 tw:max-bssm:rounded-3xl tw:max-bssm:px-5">
              {CONTACT_FAQS.map((item, i) => (
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
            <div className="tw:mt-10 tw:flex tw:flex-wrap tw:items-center tw:justify-center tw:gap-3">
              <Pill href="#ct-h1" fullOnPhone>
                <FiFileText aria-hidden="true" /> Request a Free Audit
              </Pill>
              <Pill
                href={SITE_CONTACT.phoneHref}
                tone="outline"
                size="md"
                fullOnPhone
              >
                <FiPhoneCall aria-hidden="true" /> Call{" "}
                {SITE_CONTACT.phoneDisplay}
              </Pill>
            </div>
            <p className="tw:mt-6 tw:flex tw:items-center tw:justify-center tw:gap-2 tw:text-[14px] tw:text-(--muted)">
              <FiClipboard aria-hidden="true" /> Free audit ·{" "}
              <FiStar aria-hidden="true" /> 5.0 Google rating · month to month
            </p>
          </Wrap>
        </Section>
      </main>
      <Footer />
    </>
  );
}
