import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Metadata } from "next";

import "@/app/style/homeInspAgency.css";
import "@/app/style/nonProfitAgency.css";

import NonProfitLeadForm from "@/app/components/NonProfitLeadForm";
import HiaFaqAccordion from "@/app/components/HiaFaqAccordion";
import HashScrollLink from "@/app/components/HashScrollLink";
import { SITE_CONTACT } from "@/shared/siteConfig";
import {
  buildBreadcrumbJsonLd,
  buildLocalBusinessJsonLd,
} from "@/shared/seoSchemas";

export const metadata: Metadata = {
  title: "Nonprofit Marketing Agency | Digital Fundraising & Advocacy",
  description:
    "Zonic Media is a digital fundraising and advocacy studio for nonprofits. Social media, Google Ad Grant management, video, strategy, and board-ready reporting. Discounted nonprofit rates, short initial term.",
  keywords: [
    "nonprofit marketing agency",
    "nonprofit digital marketing",
    "Google Ad Grant management",
    "nonprofit fundraising marketing",
    "nonprofit social media management",
    "nonprofit advertising agency",
    "digital advocacy agency",
    "nonprofit video production",
    "nonprofit content marketing",
    "marketing for charities",
  ],
  alternates: { canonical: "/services/non-profit-marketing-agency" },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  {
    name: "Nonprofit Marketing Agency",
    url: "/services/non-profit-marketing-agency",
  },
]);

const stripStats = [
  { b: "3×/wk", s: "content cadence" },
  { b: "$10k/mo", s: "Google Ad Grant" },
  { b: "Board-ready", s: "reporting" },
];

const problemCards = [
  {
    n: "— 01",
    h: "The case for support is buried in a spreadsheet",
    p: "Your impact is real, but it lives in program numbers and demographic data. We translate it into scannable, donor-ready narrative and infographics that make the need impossible to ignore.",
  },
  {
    n: "— 02",
    h: "Leadership should be visible, but has no time",
    p: "Your Executive Director and board carry the credibility. We ghostwrite the LinkedIn thought leadership and editorial that puts their voice in front of policymakers and corporate foundations — without adding to their week.",
  },
  {
    n: "— 03",
    h: "Every post should lead somewhere",
    p: "Awareness that doesn't convert is a cost, not a campaign. We build content that connects directly to your funding priorities, so attention turns into gifts, sponsorships, and advocacy.",
  },
];

const serveCards = [
  {
    h: "Human services & poverty relief",
    p: "Food banks, shelters, housing, and family-support organizations.",
  },
  {
    h: "Health & medical causes",
    p: "Clinics, patient advocacy, research foundations, and hospices.",
  },
  {
    h: "Education & youth",
    p: "Scholarship funds, after-school programs, literacy, and mentoring.",
  },
  {
    h: "Seniors & aging",
    p: "Senior housing, care networks, and aging-in-place programs.",
  },
  {
    h: "Animal welfare & rescue",
    p: "Shelters, sanctuaries, and conservation-focused rescues.",
  },
  {
    h: "Environment & conservation",
    p: "Land trusts, climate advocacy, and community sustainability groups.",
  },
  {
    h: "Arts & culture",
    p: "Museums, theaters, public media, and cultural preservation.",
  },
  {
    h: "Faith & community",
    p: "Congregations, community foundations, and civic associations.",
  },
  {
    h: "Veterans & military families",
    p: "Support services, reintegration, and advocacy organizations.",
  },
  {
    h: "Advocacy & civil rights",
    p: "Policy campaigns, legal aid, and community organizing.",
  },
  {
    h: "International & relief",
    p: "Global development, disaster response, and humanitarian aid.",
  },
  {
    h: "Foundations & grantmakers",
    p: "Community foundations and grantmaking bodies raising their profile.",
  },
];

const approachSteps = [
  {
    n: "1",
    h: "Listen & frame",
    p: "We start with your funding priorities and the audiences that matter, then define the single story your campaign needs to tell.",
  },
  {
    n: "2",
    h: "Produce authentically",
    p: "Photography and video are shot on-site with real people from your organization — authentic to your community, never stock.",
  },
  {
    n: "3",
    h: "Publish with rhythm",
    p: "A dependable content calendar keeps your organization present and credible, week after week, across the channels that reach decision-makers.",
  },
  {
    n: "4",
    h: "Report & refine",
    p: "Every month we show what moved — engagement, reach, and donor inquiries — and adjust the plan around it.",
  },
];

const pledge = [
  "Discounted rates for mission-driven organizations",
  "Transparent retainer — ad spend billed at cost",
  "Short initial term, then month-to-month",
];

const capItems = [
  { b: "12+", s: "structured social posts, tied to your funding priorities" },
  { b: "$10k", s: "in potential Google Ad Grant search spend, managed" },
  { b: "1", s: "monthly editorial or thought-leadership piece for leadership" },
  { b: "1", s: "board-ready performance report, in plain language" },
];

const faqs = [
  {
    q: "How much does nonprofit marketing cost?",
    a: "Zonic Media works at discounted nonprofit rates, and we show standard and discounted pricing side by side so your board can compare. You pay a transparent monthly retainer, and any ad spend is billed at cost rather than marked up. We scope the exact number to your goals during the first consultation.",
  },
  {
    q: "What is the Google Ad Grant, and can you manage it for us?",
    a: "The Google Ad Grant gives eligible 501(c)(3) nonprofits up to $10,000 a month in free Google Search ads. We confirm your eligibility, handle the application, and run compliant campaigns built to drive donations, event signups, and volunteers, so the grant keeps delivering instead of getting suspended for inactivity.",
  },
  {
    q: "Do you require a long-term contract?",
    a: "No. We start with a short initial term instead of a year-long lock-in, then move to month-to-month. The aim is a partnership you renew because the work is raising money, not one you feel stuck in.",
  },
  {
    q: "What does a monthly nonprofit marketing retainer include?",
    a: "A standard month covers 12+ social posts tied to your funding priorities, management of up to $10,000 in Google Ad Grant search spend, one editorial or thought-leadership piece for your leadership, and one board-ready performance report written in plain language.",
  },
  {
    q: "Do you work with small or grassroots nonprofits?",
    a: "Yes. We work across the sector, from grassroots groups to established foundations. The channels stay the same and the story changes with your cause, so we build a program that fits your budget and your stage.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: "https://zonicllc.com/services/non-profit-marketing-agency",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const localBusinessJsonLd = buildLocalBusinessJsonLd({
  pageUrl: "/services/non-profit-marketing-agency",
  areaServed: { type: "Country", name: "United States" },
});

function Page() {
  return (
    <>
      <Script
        id="npm-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Script
        id="npm-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="npm-localbusiness-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />

      <div id="npm-top" className="hia-page npm-page">
        {/* Minimal NAV */}
        <nav className="hia-nav">
          <Link href="/" className="hia-nav-logo" aria-label="Zonic Media">
            <Image
              src="/images/logo.webp"
              width={108}
              height={41}
              alt="Zonic Media"
              className="hia-nav-logo-img"
              priority
            />
          </Link>
          <div className="hia-nav-links">
            <HashScrollLink href="#npm-understand">
              What we understand
            </HashScrollLink>
            <HashScrollLink href="#npm-services">Services</HashScrollLink>
            <HashScrollLink href="#npm-serve">Who we serve</HashScrollLink>
            <HashScrollLink href="#npm-approach">Approach</HashScrollLink>
          </div>
          <div className="hia-nav-right">
            <Link href={SITE_CONTACT.phoneHref} className="hia-nav-phone">
              {SITE_CONTACT.phoneDisplay}
            </Link>
            <HashScrollLink href="#npm-consult-top" className="hia-nav-cta">
              Book a consult
            </HashScrollLink>
          </div>
        </nav>

        <div className="hia-main-wrapper">
          <div className="hia-row">
            {/* LEFT: CONTENT */}
            <div className="hia-content-col">
              {/* HERO */}
              <section className="hia-hero">
                <div className="hia-eyebrow">
                  Fundraising &amp; advocacy studio
                </div>
                <h1>
                  We turn a nonprofit&apos;s hardest number into its{" "}
                  <em>strongest story.</em>
                </h1>
                <p className="hia-hero-sub">
                  Zonic Media is a digital fundraising and advocacy studio for
                  mission-driven organizations. We build the campaigns,
                  content, and thought leadership that move donors, boards, and
                  policymakers to act.
                </p>
                <div className="hia-hero-ctas">
                  <HashScrollLink
                    href="#npm-consult-top"
                    className="hia-btn hia-btn-primary"
                  >
                    Book a consultation →
                  </HashScrollLink>
                  <HashScrollLink
                    href="#npm-understand"
                    className="hia-btn hia-btn-ghost"
                  >
                    See how we think
                  </HashScrollLink>
                </div>

                {/* SIGNATURE: case-for-support transform */}
                <div className="npm-cfs">
                  <div className="npm-cfs-label">The raw data point</div>
                  <div className="npm-cfs-raw">
                    2,400 meals served last quarter.
                  </div>
                  <div className="npm-cfs-arrow">
                    <span className="npm-ln" />
                    becomes a case for support
                    <span className="npm-ln" />
                  </div>
                  <div className="npm-cfs-story">
                    “That&apos;s <strong>2,400 nights</strong> a family in our
                    community didn&apos;t go hungry. Your gift is the reason the
                    next 2,400 happen.”
                  </div>
                  <div className="npm-cfs-foot">
                    This is the whole job: impact, translated into narrative
                    that raises money.
                  </div>
                </div>

                {/* Mobile/Tab top inline form */}
                <div
                  className="hia-mob-form hia-mob-form-top d-block d-lg-none"
                  id="npm-consult-top"
                >
                  <NonProfitLeadForm />
                </div>
              </section>

              {/* TRUST STRIP */}
              <section className="hia-section npm-strip-sec">
                <div className="npm-strip">
                  <div className="npm-strip-stats">
                    {stripStats.map((t, i) => (
                      <div className="npm-stat" key={i}>
                        <b>{t.b}</b>
                        <span>{t.s}</span>
                      </div>
                    ))}
                  </div>
                  <p className="npm-strip-txt">
                    A dedicated partner for mission-driven organizations — from
                    grassroots groups to established foundations.
                  </p>
                </div>
              </section>

              {/* UNDERSTANDING */}
              <section className="hia-section" id="npm-understand">
                <div className="hia-sec-label">What we understand</div>
                <h2 className="hia-sec-h2">
                  You&apos;re not trying to go viral. You&apos;re trying to{" "}
                  <em>move the right people.</em>
                </h2>
                <p className="hia-sec-sub">
                  Nonprofit marketing isn&apos;t about reach for its own sake.
                  It&apos;s about reaching the donor, the board member, and the
                  commissioner who can actually change something — and giving
                  them a reason to.
                </p>
                <div className="npm-prob-grid">
                  {problemCards.map((c, i) => (
                    <div className="npm-prob" key={i}>
                      <div className="npm-prob-n">{c.n}</div>
                      <h3>{c.h}</h3>
                      <p>{c.p}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* SERVICES */}
              <section className="hia-section" id="npm-services">
                <div className="npm-svc">
                  <div className="hia-sec-label">What we do</div>
                  <h2 className="hia-sec-h2">
                    Everything your campaign needs,{" "}
                    <em>from one partner.</em>
                  </h2>
                  <p className="hia-sec-sub">
                    Strategy, content, paid media, and production — delivered
                    as a single coordinated program so your team can stay
                    focused on the mission.
                  </p>
                  <div className="npm-svc-grid">
                    <div className="npm-scard">
                      <div className="npm-scard-ico">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                          <path d="M4 5h16v11H8l-4 3z" stroke="#c69a45" strokeWidth="1.5" strokeLinejoin="round" />
                          <path d="M8 9h8M8 12h5" stroke="#c69a45" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </div>
                      <h3>Social media management</h3>
                      <p>
                        A structured calendar of 3+ high-quality posts a week
                        across Facebook, LinkedIn, and Instagram — each tied to
                        a funding priority, so attention turns into gifts and
                        advocacy.
                      </p>
                      <span className="npm-tag">FB · LinkedIn · Instagram</span>
                    </div>

                    <div className="npm-scard">
                      <div className="npm-scard-ico">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="8" stroke="#c69a45" strokeWidth="1.5" />
                          <path d="M12 8v4l3 2" stroke="#c69a45" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <h3>Google Ads for nonprofits</h3>
                      <p>
                        We help you claim and manage the Google Ad Grant — up
                        to $10,000/month in free search ads — and build
                        campaigns that drive donations, event signups, and
                        awareness for the people searching for causes like
                        yours.
                      </p>
                      <span className="npm-tag">
                        Ad Grant setup &amp; management
                      </span>
                    </div>

                    <div className="npm-scard">
                      <div className="npm-scard-ico">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                          <rect x="4" y="4" width="16" height="16" rx="2" stroke="#c69a45" strokeWidth="1.5" />
                          <circle cx="9" cy="9" r="1.6" stroke="#c69a45" strokeWidth="1.3" />
                          <path d="M5 16l4-4 3 3 3-4 4 5" stroke="#c69a45" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <h3>Graphics &amp; data visualization</h3>
                      <p>
                        Demographic and program data turned into clean,
                        scannable infographics — plus campaign graphics, impact
                        reports, and donor-ready assets built for the way boards
                        actually read.
                      </p>
                      <span className="npm-tag">
                        Infographics · reports · assets
                      </span>
                    </div>

                    <div className="npm-scard">
                      <div className="npm-scard-ico">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                          <rect x="3" y="6" width="13" height="12" rx="2" stroke="#c69a45" strokeWidth="1.5" />
                          <path d="M16 10l5-3v10l-5-3z" stroke="#c69a45" strokeWidth="1.5" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <h3>Video production &amp; editing</h3>
                      <p>
                        On-site shoots that capture real stories, community
                        life, and leadership interviews — anchored by a hero
                        “case for support” film and short-form cutdowns edited
                        for every platform.
                      </p>
                      <span className="npm-tag">
                        Filming · editing · cutdowns
                      </span>
                    </div>

                    <div className="npm-scard">
                      <div className="npm-scard-ico">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                          <path d="M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5z" stroke="#c69a45" strokeWidth="1.4" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <h3>Strategy &amp; PR copywriting</h3>
                      <p>
                        A multi-month campaign concept, donor and policymaker
                        personas, and monthly editorial — including ghostwritten
                        executive thought leadership that engages councils,
                        commissioners, and foundations.
                      </p>
                      <span className="npm-tag">Strategy · messaging · PR</span>
                    </div>

                    <div className="npm-scard">
                      <div className="npm-scard-ico">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                          <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" stroke="#c69a45" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </div>
                      <h3>Board-ready reporting</h3>
                      <p>
                        Monthly analytics on engagement, local reach, ad
                        performance, and inbound donor inquiries — in plain
                        language your board understands, never vanity metrics.
                      </p>
                      <span className="npm-tag">
                        Monthly performance reporting
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* WHO WE SERVE */}
              <section className="hia-section" id="npm-serve">
                <div className="hia-sec-label">Who we serve</div>
                <h2 className="hia-sec-h2">
                  If your mission depends on donors, we can{" "}
                  <em>help you tell it.</em>
                </h2>
                <p className="hia-sec-sub">
                  Zonic Media works across the nonprofit sector. The channels
                  stay the same; the story changes with your cause.
                </p>
                <div className="npm-serve-grid">
                  {serveCards.map((c, i) => (
                    <div className="npm-serve-item" key={i}>
                      <span className="npm-dot" />
                      <div>
                        <h3>{c.h}</h3>
                        <p>{c.p}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="npm-note">
                  <strong>Don&apos;t see your cause?</strong> These are
                  starting points, not limits. If your organization is
                  mission-driven and needs to reach donors, boards, or
                  policymakers, we can build a campaign for it.
                </p>
              </section>

              {/* APPROACH */}
              <section className="hia-section" id="npm-approach">
                <div className="hia-sec-label">How we work</div>
                <h2 className="hia-sec-h2">
                  Deliberate, transparent, and built to{" "}
                  <em>de-risk the decision.</em>
                </h2>
                <div className="npm-steps">
                  {approachSteps.map((s, i) => (
                    <div className="npm-step" key={i}>
                      <div className="npm-step-mark">{s.n}</div>
                      <div>
                        <h3>{s.h}</h3>
                        <p>{s.p}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="npm-aside">
                  <p className="npm-aside-q">
                    “Will this actually reach our donors — and can we{" "}
                    <strong>start small?</strong>”
                  </p>
                  <p>
                    Yes to both. We offer a short initial term instead of a
                    long lock-in, so your board can see the work before
                    committing to a year. The goal is a partnership you renew
                    because it&apos;s working — not a contract you&apos;re stuck
                    in.
                  </p>
                  <ul className="npm-pledge">
                    {pledge.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* CAPABILITY — WHAT A MONTH LOOKS LIKE */}
              <section className="hia-section" id="npm-capability">
                <div className="npm-cap">
                  <div className="hia-sec-label">What a month looks like</div>
                  <h2 className="hia-sec-h2">
                    A clear, consistent program —{" "}
                    <em>not scattered posts.</em>
                  </h2>
                  <p className="hia-sec-sub">
                    Here&apos;s the standard rhythm of a Zonic Media engagement,
                    so you know exactly what you&apos;re getting from month one.
                  </p>
                  <div className="npm-cap-grid">
                    {capItems.map((c, i) => (
                      <div className="npm-cap-item" key={i}>
                        <b>{c.b}</b>
                        <span>{c.s}</span>
                      </div>
                    ))}
                  </div>
                  <p className="npm-cap-note">
                    <strong>New agency, seasoned craft.</strong> Zonic Media is
                    a young studio — so we compete on senior attention,
                    transparent pricing, and work we stand behind, not on a wall
                    of logos. Ask us for sample concepts and a campaign plan
                    built for your mission, and judge us on the thinking.
                  </p>
                </div>
              </section>

              {/* FAQ */}
              <section className="hia-section" id="npm-faq">
                <div className="hia-sec-label">Common questions</div>
                <h2 className="hia-sec-h2">
                  What nonprofits ask before the{" "}
                  <em>first conversation.</em>
                </h2>
                <p className="hia-sec-sub">
                  Straight answers on cost, the Google Ad Grant, and how the
                  partnership works. If yours isn&apos;t here, ask it in the
                  form and we&apos;ll answer directly.
                </p>
                <HiaFaqAccordion items={faqs} defaultOpen={0} />
              </section>

              {/* Mobile inline form (bottom) */}
              <div className="hia-mob-form d-block d-lg-none" id="npm-consult">
                <NonProfitLeadForm />
              </div>
            </div>

            {/* RIGHT: STICKY FORM */}
            <div
              className="hia-form-col d-none d-lg-block"
              data-scroll-target="npm-consult npm-consult-top"
            >
              <div className="hia-sticky-form" id="npm-consult-desktop">
                <NonProfitLeadForm />
              </div>
            </div>
          </div>
        </div>

        {/* FINAL CTA */}
        <section className="hia-final-cta" id="npm-contact">
          <div className="hia-fc-inner">
            <h2>
              Let&apos;s build your <em>case for support.</em>
            </h2>
            <p className="hia-fc-lede">
              Tell us about your mission and your next fundraising goal.
              We&apos;ll come back with a straightforward plan and a
              transparent quote — standard and discounted nonprofit rates, side
              by side.
            </p>
            <div className="hia-fc-actions">
              <HashScrollLink href="#npm-consult" className="hia-fc-form">
                Book a consultation →
              </HashScrollLink>
              <Link href={SITE_CONTACT.emailHref} className="hia-fc-call">
                {SITE_CONTACT.email}
              </Link>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="hia-footer">
          <div className="hia-footer-inner">
            <div className="hia-footer-bottom npm-footer-simple">
              <span className="npm-footer-logo">Zonic Media</span>
              <span>
                Digital fundraising &amp; advocacy for nonprofits · Dover, DE
              </span>
              <span>© 2026 Zonic Media LLC</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Page;
