import { FiMapPin } from "react-icons/fi";
import { AboutCard } from "@/components/rd/dfw-kit/ui";

/* UI for /home2 (homepage redesign draft, 19 Oct 2026), built on the DFW
   kit. Facts (copy reworded 24 Oct 2026): clients in DE/PA/NJ/MD/FL/TX/GA
   and nationwide, SEO + Google profiles + websites + ads in one team, 20+
   industries, month-to-month plans. No Dover office claim (owner, 26 Nov
   2026: the address is registered only; it appears in the footer and on
   the contact page).
   Service-card UIs: ServiceUi.tsx; Launchpad: LaunchpadShowcase.tsx. */

/* --------------------------------------------------------------- about */

export function HqCard() {
  return (
    <AboutCard
      tone="ink"
      top={
        <span
          className="tw:grid tw:size-[58px] tw:place-items-center tw:rounded-full tw:bg-white/10 tw:text-[23px] tw:text-(--gold)"
          aria-hidden="true"
        >
          <FiMapPin />
        </span>
      }
      kicker="Where we work"
      title="Serving businesses across the US"
      points={[
        "Clients from DE and PA to FL, TX and GA",
        "SEO, Google profiles, websites and ads in one team",
        "20+ industries served",
        "Month-to-month plans",
      ]}
      foot="Remote-first, with video calls"
    />
  );
}
