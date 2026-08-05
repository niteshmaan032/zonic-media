import type { CSSProperties } from "react";
import { FiArrowUp, FiMapPin } from "react-icons/fi";

/**
 * "Local rank tracker" dashboard mockup — a product-style panel showing map
 * pack positions per city, the way a client sees them in their monthly board.
 * Sibling to ServiceSiteMockup: all styling lives in the host page's scoped
 * stylesheet under `.{prefix}-rankui*`, so it inherits that page's
 * `--{prefix}-accent / ink / text / light / divider` tokens automatically.
 *
 * The figures are illustrative, so `footnote` is required — it has to say so
 * on the page rather than read as live client data.
 */
export type LocalRankRow = {
  city: string;
  keyword: string;
  /** Rendered as-is, e.g. "#1". */
  rank: string;
  /** Positions gained over the window, e.g. "6". */
  change: string;
};

type LocalRankTrackerProps = {
  /** CSS scope prefix for the host page, e.g. "deldg", "tseo". */
  prefix: string;
  /** Right side of the window bar, e.g. "Delaware · last 30 days". */
  scope: string;
  rows: LocalRankRow[];
  /** 0–100. Drives the donut fill and its centre label. */
  summaryPercent: number;
  summaryLabel: string;
  stats: { label: string; value: string }[];
  footnote: string;
  title?: string;
  rankHeading?: string;
  changeHeading?: string;
};

export default function LocalRankTracker({
  prefix: p,
  scope,
  rows,
  summaryPercent,
  summaryLabel,
  stats,
  footnote,
  title = "Local rank tracker",
  rankHeading = "Rank",
  changeHeading = "30-day move",
}: LocalRankTrackerProps) {
  return (
    <div className={`${p}-rankui`}>
      <div className={`${p}-rankui-window`}>
        <div className={`${p}-rankui-bar`}>
          <span className={`${p}-rankui-dots`} aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className={`${p}-rankui-tab`}>
            <FiMapPin aria-hidden="true" />
            {title}
          </span>
          <span className={`${p}-rankui-scope`}>{scope}</span>
        </div>

        <div className={`${p}-rankui-body`}>
          <div className={`${p}-rankui-aside`}>
            <div
              className={`${p}-rankui-ring`}
              style={{ "--pct": `${summaryPercent}%` } as CSSProperties}
            >
              <strong>{summaryPercent}%</strong>
            </div>
            <p className={`${p}-rankui-ring-label`}>{summaryLabel}</p>
            <dl className={`${p}-rankui-stats`}>
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt>{stat.label}</dt>
                  <dd>{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className={`${p}-rankui-table`}>
            <div className={`${p}-rankui-head`}>
              <span>City</span>
              <span>Tracked keyword</span>
              <span>{rankHeading}</span>
              <span>{changeHeading}</span>
            </div>
            <ul className={`${p}-rankui-rows`}>
              {rows.map((row) => (
                <li className={`${p}-rankui-row`} key={row.city}>
                  <span className={`${p}-rankui-city`}>{row.city}</span>
                  <span className={`${p}-rankui-kw`}>{row.keyword}</span>
                  <span className={`${p}-rankui-rank`}>{row.rank}</span>
                  <span className={`${p}-rankui-move`}>
                    <FiArrowUp aria-hidden="true" />
                    {row.change}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <p className={`${p}-rankui-note`}>{footnote}</p>
    </div>
  );
}
