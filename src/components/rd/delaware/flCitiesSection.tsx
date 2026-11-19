import type { CSSProperties } from "react";
import {
  cx,
  LEAD,
  RowHead,
  Section,
  Strip,
  Wrap,
} from "@/components/rd/dfw-kit/primitives";
import { FlCityCards } from "./flCityCards";
import { FL_DOTS } from "./flMarketingUi";
import type { DelawareExtras, FlCityName } from "./types";
import "./flMarketing.css";

/* Florida hub city directory (18 Nov 2026): a dot-matrix Florida with a
   numbered pin per city page, beside a card for each city (the last card
   opens the rest, owner 19 Nov). Hovering or focusing a card lifts its pin
   (CSS :has, in flMarketing.css). */

/** Pin spots on the hub map's outline (viewBox 2 32 222 180); `side` is
    where the label sits so the Tampa Bay cluster stays readable. */
const PINS: Record<FlCityName, { x: number; y: number; side: "l" | "r" }> = {
  Jacksonville: { x: 169, y: 48, side: "r" },
  Orlando: { x: 186, y: 108, side: "r" },
  Tampa: { x: 160, y: 119, side: "r" },
  "St. Petersburg": { x: 151, y: 128, side: "l" },
  Sarasota: { x: 160, y: 141, side: "l" },
  "Fort Myers": { x: 172, y: 166, side: "l" },
  "Fort Lauderdale": { x: 214, y: 181, side: "l" },
  Miami: { x: 210, y: 194, side: "l" },
};

/** Matches the cards' data-city (flCityCards.tsx). */
const slug = (name: string) => name.toLowerCase().replace(/[^a-z]+/g, "-");

export function FlCitiesSection({
  cities,
  accent,
  leadClassName,
}: {
  cities: NonNullable<DelawareExtras["cities"]>;
  /** Pin and number colour (the page's first pillar). */
  accent: string;
  /** Inline-link styling for the lead. */
  leadClassName?: string;
}) {
  return (
    <Section labelledBy="de-cities-h">
      <Wrap>
        <RowHead align="start">
          <div className="tw:min-w-0 tw:max-w-[860px] tw:flex-[1_1_560px]">
            <Strip id="de-cities-h">{cities.h2}</Strip>
          </div>
          <p
            className={cx(
              LEAD,
              leadClassName,
              "tw:max-w-[460px] tw:flex-[0_1_460px]",
            )}
          >
            {cities.lead}
          </p>
        </RowHead>
        <div
          className="fl-cities tw:grid tw:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] tw:items-start tw:gap-6 tw:max-bslg:grid-cols-1"
          style={{ "--fl-accent": accent } as CSSProperties}
        >
          <div className="tw:rounded-(--r-xl) tw:bg-white tw:p-7 tw:bslg:sticky tw:bslg:top-28 tw:max-bssm:p-5">
            <svg
              viewBox="2 32 222 180"
              className="tw:block tw:h-auto tw:w-full"
              aria-hidden="true"
            >
              {FL_DOTS.map(([x, y]) => (
                <circle
                  key={`${x}-${y}`}
                  cx={x}
                  cy={y}
                  r={1.45}
                  fill="#d3dee9"
                />
              ))}
              {cities.items.map((c, i) => {
                const p = PINS[c.name];
                return (
                  <g key={c.name} data-pin={slug(c.name)}>
                    <g className="fl-pin">
                      <circle
                        cx={p.x}
                        cy={p.y}
                        r={5.6}
                        fill="var(--fl-accent)"
                        stroke="#fff"
                        strokeWidth={1.4}
                      />
                      <text
                        x={p.x}
                        y={p.y + 2.1}
                        textAnchor="middle"
                        fontSize={5.6}
                        fontWeight={700}
                        fill="#fff"
                      >
                        {i + 1}
                      </text>
                    </g>
                    <text
                      className="fl-pin-label"
                      x={p.side === "r" ? p.x + 8.5 : p.x - 8.5}
                      y={p.y + 2.6}
                      textAnchor={p.side === "r" ? "start" : "end"}
                      fontSize={7.2}
                      fontWeight={600}
                      fill="#14213a"
                      stroke="#fff"
                      strokeWidth={2.6}
                      paintOrder="stroke"
                    >
                      {c.name}
                    </text>
                  </g>
                );
              })}
            </svg>
            <p className="tw:mt-4 tw:border-t tw:border-(--line) tw:pt-4 tw:text-[14.5px]/[1.55] tw:text-(--muted)">
              One in-house team plans every city from Dover, Delaware, so each
              page shares the same reporting and the same people.
            </p>
          </div>
          <FlCityCards
            items={cities.items}
            more={cities.more}
            accent={accent}
          />
        </div>
      </Wrap>
    </Section>
  );
}
