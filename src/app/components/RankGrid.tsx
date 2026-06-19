"use client";

import { useEffect, useRef, useState } from "react";

// 25-cell rank datasets (5x5). "before" = poor visibility, "after" = strong.
const BEFORE = [
  14, 18, 11, 20, 9, 16, 12, 22, 15, 8, 19, 13, 17, 10, 21, 24, 12, 18, 11, 16,
  20, 15, 12, 19, 14,
];
const AFTER = [
  1, 1, 2, 1, 3, 1, 2, 1, 2, 1, 2, 1, 1, 3, 2, 4, 2, 1, 1, 2, 3, 1, 2, 1, 1,
];

function cls(n: number) {
  if (n <= 3) return "g";
  if (n <= 6) return "y";
  if (n <= 10) return "o";
  return "r";
}

export default function RankGrid() {
  const [state, setState] = useState<"before" | "after">("after");
  const pausedRef = useRef(false);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const id = setInterval(() => {
      if (pausedRef.current) return;
      setState((s) => (s === "after" ? "before" : "after"));
    }, 3200);
    return () => clearInterval(id);
  }, []);

  const data = state === "before" ? BEFORE : AFTER;

  return (
    <div
      className="rankview"
      role="img"
      aria-label="Google Map grid ranking view showing rankings before and after working with Zonic Media. Before: mostly low rankings. After: mostly number one to three across the grid."
    >
      <div className="rankview-tabs">
        <div
          className={`rv-tab before${state === "before" ? " is-active" : ""}`}
          style={{ cursor: "pointer" }}
          onClick={() => setState("before")}
        >
          <div className="k">Before</div>
          <div className="v">Avg. rank 12</div>
        </div>
        <div
          className={`rv-tab after${state === "after" ? " is-active" : ""}`}
          style={{ cursor: "pointer" }}
          onClick={() => setState("after")}
        >
          <div className="k">After Zonic</div>
          <div className="v">Avg. rank 2.4</div>
        </div>
      </div>
      <div className="rankmap">
        <div className="rankmap-head">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <span className="q">roofing company near me</span>
          <span
            style={{
              fontSize: 11,
              color: "#16A34A",
              fontWeight: 500,
              fontFamily: "Manrope",
            }}
          >
            ● live grid
          </span>
        </div>
        <div className="gridpins" id="gridpins">
          {data.map((n, i) => (
            <div key={i} className={`pin ${cls(n)}`}>
              <span>{n}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="rankview-note">
        <span className="dot-g"></span> Top 3 in the map grid
        <span style={{ margin: "0 6px", color: "var(--line)" }}>·</span>
        <span className="dot-r"></span> Outside top 10
      </div>
    </div>
  );
}
