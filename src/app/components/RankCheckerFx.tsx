"use client";

import { useEffect, useRef, useState } from "react";
import { FiMapPin, FiSearch } from "react-icons/fi";

/* Interactive pieces of /google-maps-business-ranking-tool-online.
   Sections never animate — only the product UI inside them does. All text
   is server-rendered; these components only drive the demos. */

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Plays CSS animations inside `[data-anim]` only while that demo is on
    screen. Without JavaScript every demo simply plays. */
export function AnimOnView() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".grc");
    if (!root || !("IntersectionObserver" in window)) return;

    const demos = root.querySelectorAll<HTMLElement>("[data-anim]");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) =>
          entry.target.classList.toggle("is-on", entry.isIntersecting),
        ),
      { threshold: 0.05 },
    );
    root.classList.add("is-js");
    demos.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}

/* ------------------------------------------------------------ keyword demo */

export type KeywordPattern = {
  pattern: string;
  query: string;
  note: string;
  /** 25 ranks for a 5×5 grid; 21 = not in the top 20. */
  grid: number[];
};

const band = (rank: number) => {
  if (rank > 20) return "is-out";
  if (rank <= 3) return "is-top";
  if (rank <= 10) return "is-mid";
  return "is-low";
};

const average = (grid: number[]) =>
  (grid.reduce((sum, rank) => sum + rank, 0) / grid.length).toFixed(1);

/** A search box that types each keyword pattern, then repaints the grid
    with that keyword's result. The pattern list doubles as tabs. */
export function KeywordScanDemo({ patterns }: { patterns: KeywordPattern[] }) {
  const [active, setActive] = useState(0);
  const [typing, setTyping] = useState({ index: 0, chars: 0 });
  const [paused, setPaused] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([entry]) =>
      setVisible(entry.isIntersecting),
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Only type while on screen; otherwise (and with reduced motion) the
  // full query is shown.
  const animate = visible && !prefersReducedMotion();

  // Type the active query, hold, then advance.
  useEffect(() => {
    if (!animate) return;
    const query = patterns[active].query;
    let chars = 0;
    let timer: ReturnType<typeof setTimeout>;
    const type = () => {
      chars += 1;
      setTyping({ index: active, chars });
      if (chars < query.length) {
        timer = setTimeout(type, 55);
      } else if (!paused) {
        timer = setTimeout(
          () => setActive((i) => (i + 1) % patterns.length),
          3600,
        );
      }
    };
    timer = setTimeout(type, 250);
    return () => clearTimeout(timer);
  }, [active, paused, animate, patterns]);

  const current = patterns[active];
  const typed = !animate
    ? current.query
    : typing.index === active
      ? current.query.slice(0, typing.chars)
      : "";
  const done = typed === current.query;

  return (
    <div className="grc-kw" ref={rootRef}>
      <ul className="grc-kw__tabs" role="tablist" aria-label="Keyword patterns">
        {patterns.map((item, i) => (
          <li key={item.pattern} role="presentation">
            <button
              type="button"
              role="tab"
              aria-selected={i === active}
              className={i === active ? "is-active" : undefined}
              onClick={() => {
                setPaused(true);
                setActive(i);
              }}
            >
              <span className="grc-kw__pattern">{item.pattern}</span>
              <span className="grc-kw__note">{item.note}</span>
            </button>
          </li>
        ))}
      </ul>

      <div className="grc-kw__device" aria-hidden="true">
        <div className="grc-kw__search">
          <FiSearch />
          <span className="grc-kw__typed">
            {typed}
            <i className="grc-caret" />
          </span>
        </div>

        <div className={`grc-kw__result${done ? " is-done" : ""}`}>
          <div className="grc-kw__grid">
            {current.grid.map((rank, i) => (
              <span
                key={`${active}-${i}`}
                className={`grc-dot ${band(rank)}${i === 12 ? " is-you" : ""}`}
                style={{ transitionDelay: `${i * 18}ms` }}
              >
                {i === 12 ? <FiMapPin /> : rank > 20 ? "20+" : rank}
              </span>
            ))}
          </div>
          <dl className="grc-kw__stats">
            <div>
              <dt>Average rank</dt>
              <dd>{average(current.grid)}</dd>
            </div>
            <div>
              <dt>In the 3-Pack</dt>
              <dd>
                {current.grid.filter((r) => r <= 3).length}
                <small>/25</small>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
