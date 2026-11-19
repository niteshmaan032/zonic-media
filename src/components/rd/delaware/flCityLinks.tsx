import Link from "next/link";

import type { DelawareKind } from "./types";

/* Florida city links under the FAQ (SEO audit, 19 Nov 2026): the city
   pages had only 2–4 internal links each (the hub plus a neighbour or
   two), so every Florida service and city page now links all the city
   pages and the hub. The hub skips it: its city map already links them.
   Anchor text matches the hub's city cards (each city's lead term). */
const CITIES: { kind: DelawareKind; href: string; label: string }[] = [
  {
    kind: "fl-miami",
    href: "/services/miami/digital-marketing",
    label: "Miami digital marketing agency",
  },
  {
    kind: "fl-tampa",
    href: "/services/tampa/digital-marketing",
    label: "Digital marketing in Tampa, FL",
  },
  {
    kind: "fl-orlando",
    href: "/services/orlando/digital-marketing",
    label: "Orlando digital marketing agency",
  },
  {
    kind: "fl-fort-lauderdale",
    href: "/services/fort-lauderdale/digital-marketing",
    label: "Fort Lauderdale digital marketing agency",
  },
  {
    kind: "fl-jacksonville",
    href: "/services/jacksonville/digital-marketing",
    label: "Jacksonville digital marketing agency",
  },
  {
    kind: "fl-st-petersburg",
    href: "/services/st-petersburg/digital-marketing",
    label: "St. Petersburg digital marketing agency",
  },
  {
    kind: "fl-fort-myers",
    href: "/services/fort-myers/digital-marketing",
    label: "Fort Myers digital marketing agency",
  },
  {
    kind: "fl-sarasota",
    href: "/services/sarasota/digital-marketing",
    label: "Digital marketing in Sarasota",
  },
];

const HUB = {
  href: "/services/florida/digital-marketing",
  label: "Florida digital marketing agency",
};

export function FlCityLinks({ kind }: { kind: DelawareKind }) {
  if (!kind.startsWith("fl-") || kind === "fl-marketing") return null;
  const links = [...CITIES.filter((c) => c.kind !== kind), HUB];
  return (
    <nav
      aria-label="Florida cities we serve"
      className="tw:mx-auto tw:mt-12 tw:max-w-[1080px] tw:text-center tw:max-bssm:mt-10"
    >
      <p className="tw:text-[13px] tw:font-semibold tw:tracking-[0.14em] tw:text-(--muted) tw:uppercase">
        Florida cities we serve
      </p>
      <ul className="tw:mt-5 tw:flex tw:flex-wrap tw:justify-center tw:gap-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="tw:inline-block tw:rounded-full tw:bg-white tw:px-4 tw:py-2 tw:text-[15px] tw:font-medium tw:text-(--ink-2) tw:transition tw:duration-200 tw:hover:text-(--blue)"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
