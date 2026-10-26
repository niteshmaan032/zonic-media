/* Industry line icons, copied from the live /industries page (23 Oct 2026)
   so the redesign draft keeps the same hand-drawn set. */

export type IndustryIcon =
  | "auto"
  | "chiro"
  | "clean"
  | "dental"
  | "electric"
  | "garage"
  | "landscape"
  | "law"
  | "moving"
  | "painting"
  | "pest"
  | "realestate"
  | "roofing"
  | "septic"
  | "solar"
  | "inspection"
  | "plumbing"
  | "hvac"
  | "nonprofit"
  | "towing"
  | "pediatric"
  | "bathroom"
  | "kitchen"
  | "contractor"
  | "flooring"
  | "windows"
  | "appliance"
  | "pool"
  | "gutter"
  | "tree"
  | "cannabis"
  | "travel";

export function IndustryIconSvg({ name }: { name: IndustryIcon }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (name) {
    case "travel":
      return (
        <svg {...common}>
          <path d="M2 22h20" />
          <path d="M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z" />
        </svg>
      );
    case "auto":
      return (
        <svg {...common}>
          <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.8-.7-.7-2.8z" />
        </svg>
      );
    case "chiro":
      return (
        <svg {...common}>
          <circle cx="12" cy="4" r="2" />
          <path d="M12 6v6M8 22l4-7 4 7M7 10l5 2 5-2" />
        </svg>
      );
    case "clean":
      return (
        <svg {...common}>
          <path d="M19 3l-7 7M12 10l-2 9-3-3 9-2M5 14l-2 2" />
        </svg>
      );
    case "dental":
      return (
        <svg {...common}>
          <path d="M12 5.5c-2-2-5-2-6 .5-1 3 .5 6 1 9 .3 2 .5 4 2 4s1.5-3 3-3 1.5 3 3 3 1.7-2 2-4c.5-3 2-6 1-9-1-2.5-4-2.5-6-.5" />
        </svg>
      );
    case "electric":
      return (
        <svg {...common}>
          <path d="M13 2 3 14h7l-1 8 10-12h-7z" />
        </svg>
      );
    case "garage":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="16" rx="1" />
          <path d="M3 9h18M3 13h18M3 17h18" />
        </svg>
      );
    case "landscape":
      return (
        <svg {...common}>
          <path d="M12 21v-5M8 16h8l-4-6-4 6zM9 10h6l-3-5-3 5z" />
        </svg>
      );
    case "law":
      return (
        <svg {...common}>
          <path d="M12 3v18M5 7h14M7 7l-3 6a3 3 0 0 0 6 0zM17 7l-3 6a3 3 0 0 0 6 0zM8 21h8" />
        </svg>
      );
    case "moving":
      return (
        <svg {...common}>
          <path d="M3 6h13v9H3zM16 9h4l1 3v3h-5" />
          <circle cx="7" cy="18" r="1.8" />
          <circle cx="17" cy="18" r="1.8" />
        </svg>
      );
    case "painting":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="12" height="5" rx="1" />
          <path d="M15 6h4v4h-6M12 10v4h-2v8" />
        </svg>
      );
    case "pest":
      return (
        <svg {...common}>
          <circle cx="12" cy="13" r="5" />
          <path d="M12 8V4M9 4h6M5 11l-2-1M19 11l2-1M5 15l-2 1M19 15l2 1" />
        </svg>
      );
    case "realestate":
      return (
        <svg {...common}>
          <path d="M3 21V9l9-6 9 6v12" />
          <path d="M9 21v-6h6v6" />
        </svg>
      );
    case "roofing":
      return (
        <svg {...common}>
          <path d="m3 12 9-8 9 8" />
          <path d="M5 10v10h14V10" />
        </svg>
      );
    case "cannabis":
      return (
        <svg {...common}>
          <path d="M12 21v-6" />
          <path d="M12 15c-1.5-3-1.5-7 0-11 1.5 4 1.5 8 0 11z" />
          <path d="M12 15c-3-.5-5.5-2.5-7-6 3.5.5 6 2.5 7 6zM12 15c3-.5 5.5-2.5 7-6-3.5.5-6 2.5-7 6z" />
          <path d="M12 15c-2.5.5-5 0-7-1.5M12 15c2.5.5 5 0 7-1.5" />
        </svg>
      );
    case "septic":
      return (
        <svg {...common}>
          <path d="M3 6h18" />
          <path d="M12 6v6M9.5 9h5" />
          <rect x="5" y="12" width="14" height="7" rx="3" />
        </svg>
      );
    case "solar":
      return (
        <svg {...common}>
          <circle cx="5.5" cy="5" r="2" />
          <path d="M7 10h10l2 9H5z" />
          <path d="M12 10v9M6 14.5h12" />
        </svg>
      );
    case "inspection":
      return (
        <svg {...common}>
          <path d="m3 12 9-8 9 8M5 10v10h14V10" />
          <circle cx="12" cy="14" r="2.5" />
          <path d="m16 18-2.2-2.2" />
        </svg>
      );
    case "plumbing":
      return (
        <svg {...common}>
          <path d="M9 2v6M15 2v6M7 8h10v3a5 5 0 0 1-5 5 5 5 0 0 1-5-5z" />
          <path d="M12 16v6" />
        </svg>
      );
    case "hvac":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3" />
        </svg>
      );
    case "nonprofit":
      return (
        <svg {...common}>
          <path d="M12 20s-6-4.2-6-8.5A3.5 3.5 0 0 1 12 9a3.5 3.5 0 0 1 6 2.5C18 15.8 12 20 12 20z" />
        </svg>
      );
    case "towing":
      return (
        <svg {...common}>
          <path d="M2 16V8h9l2 4h4a3 3 0 0 1 3 3v1" />
          <path d="M13 12l6-5" />
          <circle cx="6.5" cy="18" r="1.8" />
          <circle cx="17.5" cy="18" r="1.8" />
        </svg>
      );
    case "pediatric":
      return (
        <svg {...common}>
          <circle cx="12" cy="7" r="3" />
          <path d="M8 21v-4a4 4 0 0 1 8 0v4" />
          <path d="M9 12l-3 2M15 12l3 2" />
        </svg>
      );
    case "bathroom":
      return (
        <svg {...common}>
          <path d="M4 12V6a2 2 0 0 1 4 0" />
          <path d="M2 12h20v2a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5z" />
          <path d="M7 19v2M17 19v2" />
        </svg>
      );
    case "kitchen":
      return (
        <svg {...common}>
          <path d="M7 10V6a5 5 0 0 1 10 0v4" />
          <rect x="3" y="10" width="18" height="10" rx="2" />
        </svg>
      );
    case "contractor":
      return (
        <svg {...common}>
          <path d="M3 17h18" />
          <path d="M5 17v-2a7 7 0 0 1 14 0v2" />
          <path d="M10 8V4h4v4" />
        </svg>
      );
    case "flooring":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="16" rx="1" />
          <path d="M3 9h18M3 14h18M9 4v5M15 9v5M9 14v6" />
        </svg>
      );
    case "windows":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="1" />
          <path d="M12 3v18M3 12h18" />
        </svg>
      );
    case "appliance":
      return (
        <svg {...common}>
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <path d="M4 9h16M8 5.5h.01" />
          <circle cx="12" cy="15" r="3" />
        </svg>
      );
    case "pool":
      return (
        <svg {...common}>
          <path d="M2 17c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2 2 2 4 2" />
          <path d="M7 15V5a2 2 0 0 1 4 0M13 15V5a2 2 0 0 1 4 0" />
          <path d="M7 9h4M13 9h4" />
        </svg>
      );
    case "gutter":
      return (
        <svg {...common}>
          <path d="M3 8l9-5 9 5" />
          <path d="M3 8v3h18V8" />
          <path d="M7 15v1M12 15v2M17 15v1" />
        </svg>
      );
    case "tree":
      return (
        <svg {...common}>
          <circle cx="12" cy="9" r="5" />
          <path d="M12 14v8M12 18l-3-2M12 17l3-2" />
        </svg>
      );
  }
}
