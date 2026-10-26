import { FiMapPin } from "react-icons/fi";
import { AboutCard } from "@/components/rd/dfw-kit/ui";

/* UI for /home2 (homepage redesign draft, 19 Oct 2026), built on the DFW
   kit. Facts (copy reworded 24 Oct 2026): Dover, Delaware head office,
   clients in DE/PA/NJ/MD/FL/TX/GA and nationwide, SEO + Google profiles +
   websites + ads in one team, 20+ industries, month-to-month plans.
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
      kicker="Our home base"
      title="Dover, Delaware, serving the US"
      points={[
        "Clients from DE and PA to FL, TX and GA",
        "SEO, Google profiles, websites and ads in one team",
        "20+ industries served",
        "Month-to-month plans",
      ]}
      foot="8 The Green, STE B, Dover, DE 19901"
    />
  );
}
