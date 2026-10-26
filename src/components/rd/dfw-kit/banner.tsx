/* Closing-banner art shared by /home2 and the Delaware redesign drafts
   (moved out of HomePage.tsx, 22 Oct 2026): film grain and the
   hand-drawn loops of the blue → violet → pink banner above the footer. */

/* Film grain (inline style: an SVG data URI with quotes can't live in a
   Tailwind class). */
export const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

/* Hand-drawn loops for the closing banner (after the supplied reference). */
export function BannerLoops({ className, id }: { className: string; id: string }) {
  return (
    <svg viewBox="0 0 320 260" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#ffd88a" />
          <stop offset="0.55" stopColor="#f6a1a8" />
          <stop offset="1" stopColor="#f38fb6" />
        </linearGradient>
      </defs>
      <path
        d="M-10 250 C 40 170 120 70 190 60 C 250 52 262 120 220 170 C 170 228 110 214 136 150 C 160 92 240 104 268 170 C 286 212 284 240 276 270"
        fill="none"
        stroke={`url(#${id})`}
        strokeWidth={14}
        strokeLinecap="round"
      />
    </svg>
  );
}
