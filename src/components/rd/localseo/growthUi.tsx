/* Growth-row cards for the Local SEO dropdown pages (26 Oct 2026):
   data-driven versions of the seo-services-2 rank and leads cards, so each
   page shows its own customers' searches and lead types. Example only:
   positions and times, no money figures. */

import type { CSSProperties } from "react";
import {
  FiArrowUp,
  FiCalendar,
  FiCheck,
  FiFileText,
  FiPhoneCall,
  FiSearch,
} from "react-icons/fi";
import { SiGoogle } from "react-icons/si";
import { cx } from "@/components/rd/dfw-kit/primitives";
import { Chip, UI_CARD, UiHead } from "@/components/rd/dfw-kit/ui";
import type { Palette } from "@/components/rd/industry/types";

/** Dark text on light fills (gold, amber), white on everything else. */
export function textOn(hex: string) {
  const n = parseInt(hex.slice(1), 16);
  const [r, g, b] = [n >> 16, (n >> 8) & 255, n & 255].map((v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b > 0.4 ? "#1c1917" : "#ffffff";
}

const CARD = cx(
  UI_CARD,
  "tw:w-full tw:max-w-[470px] tw:p-5 tw:text-left tw:text-(--ink)",
);

/** Example searches climbing to page one. */
export function RankClimbCard({
  p,
  keywords,
}: {
  p: Palette;
  keywords: [string, number, number][];
}) {
  return (
    <div className={CARD} aria-hidden="true">
      <UiHead
        icon={<FiSearch />}
        title="Searches moving to page one"
        right={<Chip tone="muted">Example</Chip>}
      />
      <ul className="tw:mt-4 tw:grid tw:gap-2.5">
        {keywords.map(([kw, from, to]) => (
          <li
            key={kw}
            className="tw:rounded-[14px] tw:border tw:border-(--line) tw:px-3.5 tw:py-2.5"
          >
            <span className="tw:flex tw:items-center tw:gap-2 tw:text-[13px]">
              <SiGoogle className="tw:size-3 tw:flex-none tw:text-[#4285f4]" />
              <b className="tw:min-w-0 tw:flex-1 tw:truncate tw:font-semibold">
                {kw}
              </b>
              <span className="tw:text-[12px] tw:text-(--muted) tw:line-through">
                #{from}
              </span>
              <FiArrowUp className="tw:size-3.5" style={{ color: p.a }} />
              <b className="tw:text-[13.5px]" style={{ color: p.aText }}>
                #{to}
              </b>
            </span>
            <span className="tw:mt-2 tw:block tw:h-1.5 tw:overflow-hidden tw:rounded-full tw:bg-(--panel)">
              <span
                className="tw:block tw:h-full tw:rounded-full"
                style={
                  {
                    width: `${Math.max(8, Math.round(((41 - to) / 40) * 100))}%`,
                    background: `linear-gradient(90deg, ${p.bSoft}, ${p.a})`,
                  } as CSSProperties
                }
              />
            </span>
          </li>
        ))}
      </ul>
      <span
        className="tw:mt-3 tw:flex tw:items-center tw:gap-2 tw:rounded-[12px] tw:px-3 tw:py-2.5 tw:text-[12px] tw:font-semibold"
        style={{ background: p.aSoft, color: p.aText }}
      >
        <FiCheck className="tw:size-3.5" /> Tracked weekly, reported monthly
      </span>
    </div>
  );
}

function leadIcon(type: string) {
  const t = type.toLowerCase();
  if (/(book|appointment|consult|visit|schedul)/.test(t)) return <FiCalendar />;
  if (/(form|quote|request|estimate|message|inquiry|enquiry)/.test(t))
    return <FiFileText />;
  if (/call/.test(t)) return <FiPhoneCall />;
  return <FiCheck />;
}

/** Leads from organic search, each tagged with where it came from. */
export function LeadsCard({
  p,
  items,
}: {
  p: Palette;
  items: [string, string, string][];
}) {
  return (
    <div className={CARD} aria-hidden="true">
      <UiHead
        icon={<FiPhoneCall />}
        title="New leads from search"
        right={<Chip tone="muted">Example</Chip>}
      />
      <ul className="tw:mt-4 tw:grid tw:gap-2">
        {items.map(([type, from, when], i) => (
          <li
            key={type + when}
            className="tw:flex tw:items-center tw:gap-3 tw:rounded-[14px] tw:bg-(--panel) tw:px-3.5 tw:py-2.5"
          >
            <span
              className="tw:grid tw:size-9 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[15px]"
              style={{
                background: i % 2 ? p.b : p.a,
                color: textOn(i % 2 ? p.b : p.a),
              }}
            >
              {leadIcon(type)}
            </span>
            <span className="tw:min-w-0 tw:flex-1">
              <b className="tw:block tw:truncate tw:text-[13.5px] tw:font-semibold">
                {type}
              </b>
              <span className="tw:block tw:truncate tw:text-[12px] tw:text-(--muted)">
                from {from}
              </span>
            </span>
            <span className="tw:flex-none tw:text-[11.5px] tw:font-medium tw:text-(--muted)">
              {when}
            </span>
          </li>
        ))}
      </ul>
      <span
        className="tw:mt-3 tw:flex tw:items-center tw:gap-2 tw:rounded-[12px] tw:px-3 tw:py-2.5 tw:text-[12px] tw:font-semibold"
        style={{ background: p.bSoft, color: p.bText }}
      >
        <FiCheck className="tw:size-3.5" /> Every lead tagged to its source
      </span>
    </div>
  );
}
