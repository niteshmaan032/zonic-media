"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { FaStore } from "react-icons/fa6";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiChevronDown,
  FiMenu,
  FiPhone,
  FiStar,
  FiX,
} from "react-icons/fi";
import { IoDesktopOutline } from "react-icons/io5";
import { LuPlaneTakeoff } from "react-icons/lu";
import { RiMapPinLine, RiRadarLine } from "react-icons/ri";
import {
  SiFacebook,
  SiGoogleads,
  SiInstagram,
  SiLinkedin,
  SiYoutube,
} from "react-icons/si";

import "./header.css";
import {
  gmbServiceLinks,
  industryGroups,
  seoServiceGroups,
  webDesignGroups,
} from "./navLinks";
import { cx } from "@/components/rd/dfw-kit/primitives";
import { GoogleG, InlinePin } from "@/components/rd/dfw-kit/visuals";
import {
  SITE_CONTACT,
  SITE_PATHS,
  SITE_SOCIAL_LINKS,
} from "@/shared/siteConfig";

/* ---------------------------------------------------------------------------
   SITE HEADER (23 Oct 2026; sitewide since the 26 Oct go-live, rendered by
   src/app/(main)/layout.tsx).

   Menus read their links from ./navLinks.tsx (the former Navbar's link
   data). No Free Website
   menu (owner, 24 Oct: it moved to the footer's Others column; its
   landers are noindex per the growth plan) and a Pricing link instead, in
   the redesign's look: a floating white bar inside the kit's
   insets, and large white dropdown panels. Every desktop panel stays in the
   HTML when closed (hidden, not unmounted) so crawlers keep seeing every
   link, as the live Navbar does; the mobile menu mounts only while open.

--------------------------------------------------------------------------- */

type NicheItem = {
  id: string;
  title: string;
  description: string;
  link: string;
  icon: ReactNode;
};
type NicheGroup = { group: string; items: NicheItem[] };
type MenuKey = "services" | "seo" | "web" | "locations" | "industries";

/* GMB links without the rank checker (owner, 23 Oct): it has its own card
   in the Services panel. The live Navbar keeps its list as it is. */
const GMB_LINKS = gmbServiceLinks.filter((g) => g.id !== "gmb-rank-checker");

const NAV: { key: MenuKey | null; label: string; href?: string }[] = [
  { key: "services", label: "Services", href: SITE_PATHS.services },
  { key: "seo", label: "Local SEO", href: SITE_PATHS.seo },
  { key: "web", label: "Web Design", href: "/services/web-design" },
  {
    key: null,
    label: "GBP Reinstatement",
    href: "/services/gbp-reinstatement-service",
  },
  { key: "locations", label: "Locations" },
  { key: "industries", label: "Industries", href: SITE_PATHS.industries },
  // Owner, 24 Oct: "Free Website" moved to the footer's Others column;
  // Pricing takes its place here.
  { key: null, label: "Pricing", href: "/pricing" },
];

const SERVICES: {
  title: string;
  desc: string;
  href: string;
  icon: ReactNode;
  tone: string;
}[] = [
  {
    title: "Web Design",
    desc: "Conversion-focused websites that give your business a polished online presence.",
    href: "/services/web-design",
    icon: <IoDesktopOutline />,
    tone: "tw:bg-(--blue) tw:text-white",
  },
  {
    title: "Google Ads",
    desc: "Paid campaigns that bring qualified leads and faster visibility.",
    href: "/services/google-ads",
    icon: <SiGoogleads />,
    tone: "tw:bg-(--gold) tw:text-(--ink)",
  },
  {
    title: "Local SEO",
    desc: "Local search strategies that help service businesses rank and get calls.",
    href: "/services/local-seo-for-home-services",
    icon: <RiMapPinLine />,
    tone: "tw:bg-(--green) tw:text-white",
  },
  {
    title: "Travel & Tourism Marketing",
    desc: "Direct-booking growth for hotels, tour operators and destinations.",
    href: "/services/travel-and-tourism-marketing-agency",
    icon: <LuPlaneTakeoff />,
    tone: "tw:bg-(--ink) tw:text-white",
  },
  {
    title: "Google Maps Rank Checker",
    desc: "A free scan of where you rank on Google Maps across your area.",
    href: "/google-maps-business-ranking-tool-online",
    icon: <RiRadarLine />,
    tone: "tw:bg-(--red) tw:text-white",
  },
];

const LOCATIONS: {
  title: string;
  href: string;
  desc: string;
  tags: { label: string; href: string }[];
}[] = [
  {
    title: "Digital Marketing Agency in Delaware",
    href: "/services/delaware/digital-marketing",
    desc: "Visibility, leads and long-term growth for Delaware businesses.",
    tags: [
      { label: "SEO Company Delaware", href: "/services/delaware/seo" },
      { label: "Delaware Web Design", href: "/services/delaware/web-design" },
      { label: "Wilmington", href: "/services/wilmington/digital-marketing" },
    ],
  },
  {
    title: "Digital Marketing Agency in Philadelphia",
    href: "/services/philadelphia/digital-marketing",
    desc: "Local SEO, paid search and SEM for Philadelphia businesses.",
    tags: [
      {
        label: "Philadelphia SEO Company",
        href: "/services/philadelphia/local-seo",
      },
      { label: "SEM Agency Philadelphia", href: "/services/philadelphia/sem" },
      { label: "PPC Agency Philadelphia", href: "/services/philadelphia/ppc" },
    ],
  },
  {
    title: "Digital Marketing Agency in NYC",
    href: "/services/nyc/digital-marketing",
    desc: "SEO, ads and web design across all five boroughs.",
    tags: [
      { label: "NYC Local SEO", href: "/services/nyc/local-seo" },
      { label: "NYC Web Design", href: "/services/nyc/web-design" },
    ],
  },
  {
    title: "Dallas–Fort Worth Digital Marketing",
    href: "/services/dallas-fort-worth/digital-marketing-agency",
    desc: "Marketing, web design and local SEO across the DFW metroplex.",
    tags: [
      {
        label: "DFW Web Design",
        href: "/services/dallas-fort-worth/web-design-agency",
      },
      {
        label: "DFW Local SEO",
        href: "/services/dallas-fort-worth/local-seo-agency",
      },
    ],
  },
];

const COMPANY = [
  { label: "Launchpad", href: "/services/launchpad" },
  { label: "About", href: SITE_PATHS.about },
  { label: "Blog", href: SITE_PATHS.blogs },
  { label: "Contact", href: SITE_PATHS.contact },
];

const SOCIAL_ICON: Record<string, ReactNode> = {
  LinkedIn: <SiLinkedin />,
  Facebook: <SiFacebook />,
  Instagram: <SiInstagram />,
  YouTube: <SiYoutube />,
};

const PANEL_CARD =
  "tw:group tw:flex tw:items-start tw:gap-4 tw:rounded-[20px] tw:px-4 tw:py-3 tw:transition tw:duration-150 tw:hover:bg-(--panel)";
const TAG =
  "tw:rounded-full tw:border tw:border-(--line) tw:bg-white tw:px-3 tw:py-1 tw:text-[13px] tw:font-medium tw:text-(--ink-2) tw:transition tw:hover:border-(--ink) tw:hover:bg-(--ink) tw:hover:text-white";

/* ------------------------------------------------------------ panels */

function ServicesPanel() {
  return (
    <div className="tw:grid tw:grid-cols-[minmax(0,1fr)_320px] tw:gap-5 tw:p-4">
      <div className="tw:grid tw:grid-cols-2 tw:content-start tw:gap-x-3 tw:gap-y-1">
        {SERVICES.map((s) => (
          <Link key={s.href} href={s.href} className={PANEL_CARD}>
            <span
              className={cx(
                "tw:grid tw:size-11 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[19px]",
                s.tone,
              )}
              aria-hidden="true"
            >
              {s.icon}
            </span>
            <span>
              <b className="tw:block tw:text-[15.5px] tw:font-medium tw:leading-snug">
                {s.title}
              </b>
              <span className="tw:mt-1 tw:block tw:text-[13.5px]/[1.5] tw:text-(--text)">
                {s.desc}
              </span>
            </span>
          </Link>
        ))}
        <div className="tw:flex tw:items-start tw:gap-3.5 tw:rounded-[20px] tw:p-3.5">
          <span
            className="tw:grid tw:size-11 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-(--blue-soft) tw:text-[18px] tw:text-(--blue)"
            aria-hidden="true"
          >
            <FaStore />
          </span>
          <span>
            <b className="tw:block tw:text-[15.5px] tw:font-medium tw:leading-snug">
              Google My Business
            </b>
            <span className="tw:mt-1 tw:block tw:text-[13.5px]/[1.5] tw:text-(--text)">
              Setup, recovery and optimization so customers find you locally.
            </span>
            <span className="tw:mt-2.5 tw:flex tw:flex-wrap tw:gap-1.5">
              {GMB_LINKS.map((g) => (
                <Link key={g.id} href={g.link} className={TAG}>
                  {g.label}
                </Link>
              ))}
            </span>
          </span>
        </div>
      </div>
      <FeatureCard />
    </div>
  );
}

/** Dark promo card in the Services panel. */
function FeatureCard() {
  return (
    <div className="tw:relative tw:flex tw:flex-col tw:justify-between tw:overflow-hidden tw:rounded-[24px] tw:bg-(--ink) tw:p-6 tw:text-white">
      <span
        className="tw:pointer-events-none tw:absolute tw:-top-16 tw:-right-16 tw:size-48 tw:rounded-full tw:bg-(--blue) tw:opacity-40 tw:blur-2xl"
        aria-hidden="true"
      />
      <div className="tw:relative">
        <span className="tw:flex tw:items-center tw:gap-2 tw:text-[13px] tw:text-white/70">
          <span
            className="tw:grid tw:size-7 tw:place-items-center tw:rounded-full tw:bg-white"
            aria-hidden="true"
          >
            <GoogleG className="tw:size-4" />
          </span>
          5.0
          <span className="tw:flex tw:gap-0.5" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((n) => (
              <FiStar
                key={n}
                className="tw:size-3 tw:fill-[#f4b400] tw:text-[#f4b400]"
              />
            ))}
          </span>
          on Google
        </span>
        <p className="tw:mt-4 tw:text-[22px]/[1.2] tw:font-medium tw:tracking-[-0.02em]">
          Let&apos;s start a project with Zonic Media
        </p>
        <p className="tw:mt-2 tw:text-[14px]/[1.55] tw:text-white/70">
          Tell us your goals and we&apos;ll send a clear, flat-priced plan.
        </p>
      </div>
      <div className="tw:relative tw:mt-6 tw:grid tw:gap-2">
        <Link
          href={SITE_PATHS.contact}
          className="tw:inline-flex tw:items-center tw:justify-center tw:gap-2 tw:rounded-full tw:bg-white tw:px-5 tw:py-3 tw:text-[15px] tw:font-medium tw:text-(--ink) tw:transition tw:hover:bg-(--gold)"
        >
          Get Started Today <FiArrowUpRight aria-hidden="true" />
        </Link>
        <Link
          href={SITE_PATHS.services}
          className="tw:inline-flex tw:items-center tw:justify-center tw:gap-1.5 tw:py-1.5 tw:text-[14px] tw:text-white/80 tw:hover:text-white"
        >
          View all services <FiArrowRight aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

/* The long menus (Local SEO, Web Design, Industries) share one
   layout (owner, 23 Oct: "like the free website dropdown"): a coloured card
   on the left, every link by group on the right in a three-column grid, at
   the Free Website panel's height; the list scrolls when it is longer. All
   links stay in the HTML. */
type SideCardData = {
  bg: string;
  glow: string;
  badge: string;
  badgeCls: string;
  title: string;
  text: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
};

const SIDE_CARDS: Record<"seo" | "web" | "industries", SideCardData> = {
  seo: {
    bg: "tw:bg-[#14532d]",
    glow: "tw:bg-[#4ade80]",
    badge: "Map Pack experts",
    badgeCls: "tw:bg-[#bbf7d0] tw:text-[#14532d]",
    title: "Local SEO that brings in calls",
    text: "Map Pack rankings, reviews and local pages for service businesses in every trade.",
    primary: { label: "All Local SEO", href: SITE_PATHS.seo },
    secondary: {
      label: "Free Maps rank check",
      href: "/google-maps-business-ranking-tool-online",
    },
  },
  web: {
    bg: "tw:bg-[#5b3df5]",
    glow: "tw:bg-[#f0abfc]",
    badge: "Built to convert",
    badgeCls: "tw:bg-white/15 tw:text-white",
    title: "Websites that win customers",
    text: "Fast, mobile-first websites designed for your trade, with booking and tracking built in.",
    primary: { label: "All Web Design", href: "/services/web-design" },
    secondary: {
      label: "See the free website offer",
      href: "/website-design-agency-us/offer",
    },
  },
  industries: {
    bg: "tw:bg-[#c2410c]",
    glow: "tw:bg-[#fdba74]",
    badge: "20+ industries",
    badgeCls: "tw:bg-white tw:text-[#9a3412]",
    title: "Marketing built for your industry",
    text: "Local SEO, ads and websites planned around how customers in your trade search and book.",
    primary: { label: "All Industries", href: SITE_PATHS.industries },
    secondary: {
      label: "Don\u2019t see yours? Talk to us",
      href: SITE_PATHS.contact,
    },
  },
};

function ListPanel({
  card,
  groups,
}: {
  card: SideCardData;
  groups: NicheGroup[];
}) {
  return (
    <div className="tw:grid tw:h-[min(480px,calc(100vh_-_140px))] tw:grid-cols-[280px_minmax(0,1fr)] tw:gap-5 tw:p-4">
      <div
        className={cx(
          "tw:relative tw:flex tw:flex-col tw:justify-between tw:overflow-hidden tw:rounded-[24px] tw:p-6 tw:text-white",
          card.bg,
        )}
      >
        <span
          className={cx(
            "tw:pointer-events-none tw:absolute tw:-right-14 tw:-bottom-14 tw:size-44 tw:rounded-full tw:opacity-30 tw:blur-2xl",
            card.glow,
          )}
          aria-hidden="true"
        />
        <div className="tw:relative">
          <span
            className={cx(
              "tw:inline-flex tw:rounded-full tw:px-3 tw:py-1 tw:text-[12.5px] tw:font-medium",
              card.badgeCls,
            )}
          >
            {card.badge}
          </span>
          <p className="tw:mt-4 tw:text-[22px]/[1.2] tw:font-medium tw:tracking-[-0.02em]">
            {card.title}
          </p>
          <p className="tw:mt-2 tw:text-[14px]/[1.55] tw:text-white/75">
            {card.text}
          </p>
        </div>
        <div className="tw:relative tw:mt-6 tw:grid tw:gap-2">
          <Link
            href={card.primary.href}
            className="tw:inline-flex tw:items-center tw:justify-center tw:gap-2 tw:rounded-full tw:bg-white tw:px-5 tw:py-3 tw:text-[15px] tw:font-medium tw:text-(--ink) tw:transition tw:hover:bg-(--gold)"
          >
            {card.primary.label} <FiArrowUpRight aria-hidden="true" />
          </Link>
          <Link
            href={card.secondary.href}
            className="tw:inline-flex tw:items-center tw:justify-center tw:gap-1.5 tw:py-1.5 tw:text-[14px] tw:text-white/80 tw:hover:text-white"
          >
            {card.secondary.label} <FiArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
      <div
        className="tw:min-h-0 tw:overflow-y-auto tw:overscroll-contain tw:pr-1 tw:[scrollbar-width:thin]"
        data-lenis-prevent
      >
        {groups.map((g) => (
          <div key={g.group} className="tw:mb-5 tw:last:mb-0">
            <p className="tw:px-3 tw:pt-1 tw:pb-2.5 tw:text-[12px] tw:font-semibold tw:tracking-[0.14em] tw:text-(--muted) tw:uppercase">
              {g.group}
            </p>
            <div className="tw:grid tw:grid-cols-3 tw:gap-x-3 tw:gap-y-1.5">
              {g.items.map((item) => (
                <Link
                  key={item.id}
                  href={item.link}
                  className="tw:group tw:flex tw:items-center tw:gap-3 tw:rounded-[14px] tw:px-3 tw:py-2.5 tw:text-[15px] tw:font-medium tw:transition tw:hover:bg-(--panel)"
                >
                  <span
                    className="tw:grid tw:size-8 tw:flex-none tw:place-items-center tw:rounded-[10px] tw:bg-(--panel) tw:text-[16px] tw:text-(--blue) tw:group-hover:bg-white"
                    aria-hidden="true"
                  >
                    {item.icon}
                  </span>
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LocationsPanel() {
  return (
    <div className="tw:grid tw:grid-cols-[minmax(0,1fr)_300px] tw:gap-5 tw:p-4">
      <div className="tw:grid tw:grid-cols-2 tw:content-start tw:gap-x-3 tw:gap-y-3">
        {LOCATIONS.map((loc) => (
          <div
            key={loc.href}
            className="tw:flex tw:items-start tw:gap-4 tw:rounded-[20px] tw:px-4 tw:py-5 tw:transition tw:hover:bg-(--panel)"
          >
            <span
              className="tw:grid tw:size-11 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-(--blue-soft) tw:text-[19px] tw:text-(--blue)"
              aria-hidden="true"
            >
              <RiMapPinLine />
            </span>
            <span>
              <Link
                href={loc.href}
                className="tw:block tw:text-[15.5px] tw:font-medium tw:leading-snug tw:hover:text-(--blue)"
              >
                {loc.title}
              </Link>
              <span className="tw:mt-1.5 tw:block tw:text-[13.5px]/[1.5] tw:text-(--text)">
                {loc.desc}
              </span>
              <span className="tw:mt-3.5 tw:flex tw:flex-wrap tw:gap-2">
                {loc.tags.map((t) => (
                  <Link key={t.href} href={t.href} className={TAG}>
                    {t.label}
                  </Link>
                ))}
              </span>
            </span>
          </div>
        ))}
      </div>
      <div className="tw:flex tw:flex-col tw:justify-between tw:rounded-[24px] tw:bg-(--gold-soft) tw:p-6">
        <div>
          <span
            className="tw:block tw:text-[56px] tw:leading-none"
            aria-hidden="true"
          >
            <InlinePin id="rh-pin-hq" />
          </span>
          {/* No office address here (owner, 26 Oct 2026). */}
          <p className="tw:mt-4 tw:text-[12px] tw:font-semibold tw:tracking-[0.14em] tw:text-(--muted) tw:uppercase">
            Serving all 50 states
          </p>
          <p className="tw:mt-1 tw:text-[22px]/[1.2] tw:font-medium tw:tracking-[-0.02em]">
            Local growth, wherever you are
          </p>
          <p className="tw:mt-2 tw:text-[14px]/[1.55] tw:text-(--text)">
            City pages, Google Maps rankings and ads planned around your service
            area, run by one team.
          </p>
        </div>
        <Link
          href={SITE_PATHS.contact}
          className="tw:mt-6 tw:inline-flex tw:items-center tw:justify-center tw:gap-2 tw:rounded-full tw:bg-(--ink) tw:px-5 tw:py-3 tw:text-[15px] tw:font-medium tw:text-white tw:transition tw:hover:bg-(--ink-2)"
        >
          Plan My Local Growth <FiArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

function panelFor(key: MenuKey) {
  switch (key) {
    case "services":
      return <ServicesPanel />;
    case "seo":
      return <ListPanel card={SIDE_CARDS.seo} groups={seoServiceGroups} />;
    case "web":
      return <ListPanel card={SIDE_CARDS.web} groups={webDesignGroups} />;
    case "locations":
      return <LocationsPanel />;
    case "industries":
      return <ListPanel card={SIDE_CARDS.industries} groups={industryGroups} />;
  }
}

/* ------------------------------------------------------------ mobile */

function MobileSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <li className="tw:border-b tw:border-(--line)">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="tw:flex tw:w-full tw:items-center tw:justify-between tw:py-4 tw:text-[18px] tw:font-medium"
      >
        {title}
        <FiChevronDown
          aria-hidden="true"
          className={cx(
            "tw:size-5 tw:transition-transform",
            open && "tw:rotate-180",
          )}
        />
      </button>
      {open ? <div className="tw:pb-4">{children}</div> : null}
    </li>
  );
}

function MobileLinks({ links }: { links: { label: string; href: string }[] }) {
  return (
    <ul className="tw:grid tw:gap-0.5">
      {links.map((l) => (
        <li key={l.href + l.label}>
          <Link
            href={l.href}
            className="tw:block tw:rounded-[12px] tw:px-3 tw:py-2.5 tw:text-[15.5px] tw:text-(--ink-2) tw:hover:bg-(--panel)"
          >
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function MobileNiche({ groups }: { groups: NicheGroup[] }) {
  return (
    <div className="tw:grid tw:gap-3">
      {groups.map((g) => (
        <div key={g.group}>
          <p className="tw:px-3 tw:pb-1 tw:text-[11.5px] tw:font-semibold tw:tracking-[0.14em] tw:text-(--muted) tw:uppercase">
            {g.group}
          </p>
          <MobileLinks
            links={g.items.map((i) => ({ label: i.title, href: i.link }))}
          />
        </div>
      ))}
    </div>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="tw:fixed tw:inset-0 tw:z-[9999] tw:flex tw:flex-col tw:bg-white tw:min-[1280px]:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
    >
      <div className="tw:flex tw:h-[76px] tw:flex-none tw:items-center tw:justify-between tw:border-b tw:border-(--line) tw:px-(--inset)">
        <Link href="/" onClick={onClose} aria-label="Zonic Media home">
          <Image
            src="/images/logo.webp"
            width={132}
            height={50}
            alt="Zonic Media logo"
            className="tw:h-9 tw:w-auto tw:max-bssm:h-7"
          />
        </Link>
        <button
          type="button"
          onClick={onClose}
          className="tw:grid tw:size-11 tw:place-items-center tw:rounded-full tw:bg-(--panel) tw:text-[20px]"
          aria-label="Close menu"
        >
          <FiX aria-hidden="true" />
        </button>
      </div>
      <div
        className="tw:flex-1 tw:overflow-y-auto tw:px-(--inset) tw:pb-8"
        data-lenis-prevent
      >
        <ul>
          <MobileSection title="Services">
            <MobileLinks
              links={[
                ...SERVICES.map((s) => ({ label: s.title, href: s.href })),
                ...GMB_LINKS.map((g) => ({
                  label: g.label,
                  href: g.link,
                })),
              ]}
            />
            <Link
              href={SITE_PATHS.services}
              className="tw:mt-2 tw:inline-flex tw:items-center tw:gap-1.5 tw:px-3 tw:text-[15px] tw:font-medium tw:text-(--blue)"
            >
              View all services <FiArrowRight aria-hidden="true" />
            </Link>
          </MobileSection>
          <MobileSection title="Local SEO">
            <MobileNiche groups={seoServiceGroups} />
          </MobileSection>
          <MobileSection title="Web Design">
            <MobileNiche groups={webDesignGroups} />
          </MobileSection>
          <li className="tw:border-b tw:border-(--line)">
            <Link
              href="/services/gbp-reinstatement-service"
              className="tw:block tw:py-4 tw:text-[18px] tw:font-medium"
            >
              GBP Reinstatement
            </Link>
          </li>
          <MobileSection title="Locations">
            <MobileLinks
              links={LOCATIONS.flatMap((l) => [
                { label: l.title, href: l.href },
                ...l.tags,
              ])}
            />
          </MobileSection>
          <MobileSection title="Industries">
            <MobileNiche groups={industryGroups} />
          </MobileSection>
          <li className="tw:border-b tw:border-(--line)">
            <Link
              href="/pricing"
              onClick={onClose}
              className="tw:block tw:py-4 tw:text-[18px] tw:font-medium"
            >
              Pricing
            </Link>
          </li>
          <MobileSection title="Company">
            <MobileLinks links={COMPANY} />
          </MobileSection>
        </ul>
        <div className="tw:mt-6 tw:grid tw:gap-3">
          <Link
            href={SITE_PATHS.contact}
            onClick={onClose}
            className="tw:inline-flex tw:min-h-14 tw:items-center tw:justify-center tw:gap-2 tw:rounded-full tw:bg-(--ink) tw:text-[16px] tw:font-medium tw:text-white"
          >
            Get a Free Audit <FiArrowUpRight aria-hidden="true" />
          </Link>
          <a
            href={SITE_CONTACT.phoneHref}
            className="tw:inline-flex tw:min-h-14 tw:items-center tw:justify-center tw:gap-2 tw:rounded-full tw:border tw:border-(--ink) tw:text-[16px] tw:font-medium"
          >
            <FiPhone aria-hidden="true" /> {SITE_CONTACT.phoneDisplay}
          </a>
        </div>
        <ul className="tw:mt-6 tw:flex tw:justify-center tw:gap-3">
          {SITE_SOCIAL_LINKS.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="tw:grid tw:size-11 tw:place-items-center tw:rounded-full tw:bg-(--panel) tw:text-[18px] tw:text-(--ink-2)"
              >
                {SOCIAL_ICON[s.label]}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------ header */

export function RdHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState<MenuKey | null>(null);
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<number | null>(null);

  const cancelClose = () => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const openMenu = (key: MenuKey) => {
    cancelClose();
    setOpen(key);
  };
  const closeSoon = () => {
    cancelClose();
    closeTimer.current = window.setTimeout(() => setOpen(null), 160);
  };
  const closeMobile = useCallback(() => setMobile(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close everything on navigation.
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setOpen(null);
      setMobile(false);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        setMobile(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobile]);

  useEffect(() => () => cancelClose(), []);

  return (
    <header className="rh-root tw:fixed tw:inset-x-0 tw:top-0 tw:z-50 tw:px-(--inset) tw:pt-4 tw:max-bssm:pt-3">
      <div
        className={cx(
          "tw:relative tw:flex tw:h-[72px] tw:items-center tw:justify-between tw:gap-4 tw:rounded-full tw:pr-2.5 tw:pl-6 tw:ring-1 tw:transition tw:duration-300 tw:max-bssm:h-16 tw:max-bssm:pl-4",
          scrolled || open
            ? "tw:bg-white tw:ring-(--line) tw:[box-shadow:0_18px_40px_-24px_rgba(12,21,38,0.35)]"
            : "tw:bg-white/85 tw:ring-white/60 tw:backdrop-blur-md",
        )}
        onMouseLeave={closeSoon}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node | null))
            setOpen(null);
        }}
      >
        <Link href="/" aria-label="Zonic Media home" className="tw:flex-none">
          <Image
            src="/images/logo.webp"
            width={132}
            height={50}
            alt="Zonic Media logo"
            className="tw:h-9 tw:w-auto tw:max-bssm:h-7"
            priority
          />
        </Link>

        <nav aria-label="Main" className="tw:max-[1279px]:hidden">
          <ul className="tw:flex tw:items-center tw:gap-0.5">
            {NAV.map((item) => {
              const isOpen = item.key !== null && open === item.key;
              const label = (
                <>
                  {item.label}
                  {item.key ? (
                    <FiChevronDown
                      aria-hidden="true"
                      className={cx(
                        "tw:size-3.5 tw:transition-transform tw:max-[1439px]:hidden",
                        isOpen && "tw:rotate-180",
                      )}
                    />
                  ) : null}
                </>
              );
              const cls = cx(
                "tw:inline-flex tw:items-center tw:gap-1 tw:rounded-full tw:px-2.5 tw:py-2.5 tw:text-[16px] tw:font-medium tw:whitespace-nowrap tw:transition tw:max-[1439px]:px-2 tw:max-[1439px]:text-[15px]",
                isOpen
                  ? "tw:bg-(--panel) tw:text-(--ink)"
                  : "tw:text-(--ink-2) tw:hover:bg-(--panel)",
              );
              return (
                <li
                  key={item.label}
                  onMouseEnter={() =>
                    item.key ? openMenu(item.key) : closeSoon()
                  }
                  onFocus={() =>
                    item.key ? openMenu(item.key) : setOpen(null)
                  }
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className={cls}
                      aria-expanded={item.key ? isOpen : undefined}
                    >
                      {label}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      className={cls}
                      aria-expanded={isOpen}
                      onClick={() =>
                        isOpen ? setOpen(null) : openMenu(item.key!)
                      }
                    >
                      {label}
                    </button>
                  )}
                  {item.key ? (
                    /* Panel spans the whole bar; the padding bridges the gap
                       so the pointer can travel from the label into it. */
                    <div
                      className={cx(
                        "tw:absolute tw:inset-x-0 tw:top-full tw:pt-3 tw:transition tw:duration-150",
                        isOpen
                          ? "tw:visible tw:translate-y-0 tw:opacity-100"
                          : "tw:pointer-events-none tw:invisible tw:-translate-y-1 tw:opacity-0",
                      )}
                      onMouseEnter={cancelClose}
                    >
                      <div
                        className="tw:max-h-[calc(100vh-120px)] tw:overflow-y-auto tw:rounded-[32px] tw:bg-white tw:ring-1 tw:ring-(--line) tw:[box-shadow:0_40px_80px_-40px_rgba(12,21,38,0.45)]"
                        data-lenis-prevent
                      >
                        {panelFor(item.key)}
                      </div>
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="tw:flex tw:flex-none tw:items-center tw:gap-2">
          {/* Phone number in the dark pill (owner, 23 Oct: instead of "Free
              Audit", with the separate phone button removed). */}
          <a
            href={SITE_CONTACT.phoneHref}
            className="tw:inline-flex tw:items-center tw:gap-2.5 tw:rounded-full tw:bg-(--ink) tw:py-2 tw:pr-5 tw:pl-2 tw:text-[15px] tw:font-medium tw:whitespace-nowrap tw:text-white tw:transition tw:hover:bg-(--ink-2) tw:max-bssm:hidden"
          >
            <span
              className="tw:grid tw:size-9 tw:place-items-center tw:rounded-full tw:bg-white/15"
              aria-hidden="true"
            >
              <FiPhone className="tw:size-4" />
            </span>
            {SITE_CONTACT.phoneDisplay}
          </a>
          <a
            href={SITE_CONTACT.phoneHref}
            aria-label={`Call ${SITE_CONTACT.phoneDisplay}`}
            className="tw:grid tw:size-11 tw:place-items-center tw:rounded-full tw:bg-(--blue-soft) tw:text-(--blue) tw:bssm:hidden"
          >
            <FiPhone className="tw:size-[18px]" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setMobile(true)}
            className="tw:grid tw:size-11 tw:place-items-center tw:rounded-full tw:bg-(--ink) tw:text-[20px] tw:text-white tw:min-[1280px]:hidden"
            aria-label="Open menu"
            aria-expanded={mobile}
          >
            <FiMenu aria-hidden="true" />
          </button>
        </div>
      </div>

      {mobile ? <MobileMenu onClose={closeMobile} /> : null}
    </header>
  );
}
