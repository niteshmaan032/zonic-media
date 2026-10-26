import type { Palette } from "./types";

/* Named two-accent palettes for the industry redesign (24 Oct 2026).
   White text must read on `a`, `aDeep`, `b` and `bDeep` (600-ish shades).
   Each niche main page and each location page picks one; sibling pages
   (e.g. two states of the same niche) must not share a palette. */

function pal(
  a: [string, string, string, string],
  b: [string, string, string, string],
): Palette {
  return {
    a: a[0],
    aDeep: a[1],
    aSoft: a[2],
    aText: a[3],
    b: b[0],
    bDeep: b[1],
    bSoft: b[2],
    bText: b[3],
  };
}

const ORANGE: [string, string, string, string] = [
  "#f97316",
  "#ea580c",
  "#ffedd5",
  "#c2410c",
];
const RED: [string, string, string, string] = [
  "#ef4444",
  "#dc2626",
  "#fee2e2",
  "#b91c1c",
];
const ROSE: [string, string, string, string] = [
  "#f43f5e",
  "#e11d48",
  "#ffe4e6",
  "#be123c",
];
const AMBER: [string, string, string, string] = [
  "#f59e0b",
  "#d97706",
  "#fef3c7",
  "#b45309",
];
const LIME: [string, string, string, string] = [
  "#65a30d",
  "#4d7c0f",
  "#ecfccb",
  "#3f6212",
];
const GREEN: [string, string, string, string] = [
  "#16a34a",
  "#15803d",
  "#dcfce7",
  "#15803d",
];
const EMERALD: [string, string, string, string] = [
  "#10b981",
  "#059669",
  "#d1fae5",
  "#047857",
];
const TEAL: [string, string, string, string] = [
  "#14b8a6",
  "#0d9488",
  "#ccfbf1",
  "#0f766e",
];
const CYAN: [string, string, string, string] = [
  "#06b6d4",
  "#0891b2",
  "#cffafe",
  "#0e7490",
];
const SKY: [string, string, string, string] = [
  "#0ea5e9",
  "#0284c7",
  "#e0f2fe",
  "#0369a1",
];
const BLUE: [string, string, string, string] = [
  "#3b82f6",
  "#2563eb",
  "#dbeafe",
  "#1d4ed8",
];
const INDIGO: [string, string, string, string] = [
  "#6366f1",
  "#4f46e5",
  "#e0e7ff",
  "#4338ca",
];
const VIOLET: [string, string, string, string] = [
  "#8b5cf6",
  "#7c3aed",
  "#ede9fe",
  "#6d28d9",
];
const FUCHSIA: [string, string, string, string] = [
  "#d946ef",
  "#c026d3",
  "#fae8ff",
  "#a21caf",
];
const SLATE: [string, string, string, string] = [
  "#475569",
  "#334155",
  "#e2e8f0",
  "#334155",
];

export const PALETTES = {
  orangeBlue: pal(ORANGE, BLUE),
  redSky: pal(RED, SKY),
  amberGreen: pal(AMBER, GREEN),
  coralTeal: pal(ORANGE, TEAL),
  amberIndigo: pal(AMBER, INDIGO),
  roseEmerald: pal(ROSE, EMERALD),
  orangeSky: pal(ORANGE, SKY),
  fuchsiaTeal: pal(FUCHSIA, TEAL),
  roseCyan: pal(ROSE, CYAN),
  amberSlate: pal(AMBER, SLATE),
  limeBlue: pal(LIME, BLUE),
  redIndigo: pal(RED, INDIGO),
  orangeViolet: pal(ORANGE, VIOLET),
  amberTeal: pal(AMBER, TEAL),
  roseBlue: pal(ROSE, BLUE),
  greenSky: pal(GREEN, SKY),
  emeraldIndigo: pal(EMERALD, INDIGO),
  violetAmber: pal(VIOLET, AMBER),
  cyanOrange: pal(CYAN, ORANGE),
  limeTeal: pal(LIME, TEAL),
  redSlate: pal(RED, SLATE),
  skyAmber: pal(SKY, AMBER),
  indigoRose: pal(INDIGO, ROSE),
  tealAmber: pal(TEAL, AMBER),
  greenViolet: pal(GREEN, VIOLET),
  blueOrange: pal(BLUE, ORANGE),
  emeraldAmber: pal(EMERALD, AMBER),
  violetCyan: pal(VIOLET, CYAN),
  fuchsiaIndigo: pal(FUCHSIA, INDIGO),
  orangeEmerald: pal(ORANGE, EMERALD),
  roseSky: pal(ROSE, SKY),
  amberBlue: pal(AMBER, BLUE),
  slateTeal: pal(SLATE, TEAL),
  limeIndigo: pal(LIME, INDIGO),
  redTeal: pal(RED, TEAL),
  /** Travel & tourism (26 Oct 2026): sea teal + sunset rose. */
  tealRose: pal(TEAL, ROSE),
} satisfies Record<string, Palette>;

export type PaletteName = keyof typeof PALETTES;
