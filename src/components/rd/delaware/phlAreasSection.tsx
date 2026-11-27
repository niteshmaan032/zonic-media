import type { CSSProperties } from "react";
import { FiMapPin } from "react-icons/fi";
import {
  cx,
  LEAD,
  RowHead,
  Section,
  Strip,
  Wrap,
} from "@/components/rd/dfw-kit/primitives";
import type { DelawareExtras } from "./types";
import "./phlAreas.css";

/* Greater Philadelphia service areas (Philadelphia SEM, 26 Nov 2026): one
   tile per area, placed roughly as on a map (the city down the middle,
   Montgomery over Delaware and Chester counties to the west, Bucks over
   South Jersey to the east). Text only, no photos (location-page rule). */

export function PhlAreasSection({
  areas,
  accent,
  leadClassName,
}: {
  areas: NonNullable<DelawareExtras["areas"]>;
  /** City tiles and pins (the page's first pillar). */
  accent: string;
  /** Inline-link styling for the lead. */
  leadClassName?: string;
}) {
  return (
    <Section labelledBy="de-areas-h">
      <Wrap>
        <RowHead align="start">
          <div className="tw:min-w-0 tw:max-w-[860px] tw:flex-[1_1_560px]">
            <Strip id="de-areas-h">{areas.h2}</Strip>
          </div>
          <p
            className={cx(
              LEAD,
              leadClassName,
              "tw:max-w-[460px] tw:flex-[0_1_460px]",
            )}
          >
            {areas.lead}
          </p>
        </RowHead>
        <ul
          className="phl-areas"
          style={{ "--phl-accent": accent } as CSSProperties}
        >
          {areas.items.map((a) => (
            <li
              key={a.spot}
              className={cx(
                "phl-area",
                a.spot.startsWith("city") && "phl-area--city",
              )}
              style={{ gridArea: a.spot }}
            >
              <span className="phl-area__chip">
                <FiMapPin aria-hidden="true" />
                {a.region}
              </span>
              <h3 className="phl-area__name">{a.name}</h3>
              <p className="phl-area__towns">{a.towns.join(" · ")}</p>
              <p className="phl-area__desc">{a.desc}</p>
            </li>
          ))}
        </ul>
      </Wrap>
    </Section>
  );
}
