import { FiPhone, FiStar, FiTrendingUp } from "react-icons/fi";
import { SiGooglemaps } from "react-icons/si";

/* Service-area map for the "Where We Work in Dallas–Fort Worth" card on
   /services/dallas-fort-worth/digital-marketing-agency (17 Oct 2026, replaces
   the dfw-coverage-map.png photo). Same drawn metro map as the web-design
   page's CityPagesMap, but the story is the Map Pack: a coverage ring grows
   around Dallas, Fort Worth and Frisco in turn while a Google Maps card shows
   "Your business" ranked first there. An illustration only: no client data,
   no niche. One 9s loop, 3s per city; keyframes dm-amap-* live in
   dfwMarketing.base.css. With reduced motion the first city stays shown. */

type MapPin = { name: string; x: number; y: number };

const PACK_CITIES = ["Dallas", "Fort Worth", "Frisco"];
const STEP = 3; // seconds each city stays active

const ROADS = [
  "M0 258 C 80 250 160 252 256 248 S 360 236 400 230",
  "M0 300 C 120 312 260 300 400 292",
  "M256 248 C 220 180 170 110 136 48 L 130 0",
  "M64 256 C 80 180 110 110 136 48",
  "M256 248 C 270 180 290 120 320 52 L 330 0",
  "M240 252 C 238 180 240 110 240 0",
  "M256 248 C 250 320 240 360 236 400",
];

export function AreaMapPack({ pins }: { pins: MapPin[] }) {
  return (
    <div className="tw:absolute tw:inset-0 tw:overflow-hidden tw:rounded-[inherit]" aria-hidden="true">
      <svg viewBox="0 0 400 400" preserveAspectRatio="none" className="tw:absolute tw:inset-0 tw:size-full">
        <rect width="400" height="400" fill="#eaf0fa" />
        <path d="M120 40 C 150 30 175 50 168 70 C 160 92 132 92 122 76 C 112 62 104 48 120 40 Z" fill="#c9dcf6" />
        <path d="M330 150 C 348 146 356 168 350 190 C 344 208 326 206 322 188 C 318 172 316 154 330 150 Z" fill="#c9dcf6" />
        <path
          d="M0 160 H400 M200 0 V400"
          fill="none"
          stroke="#cdd7e6"
          strokeWidth={1.5}
          strokeDasharray="6 6"
          vectorEffect="non-scaling-stroke"
        />
        {ROADS.map((d) => (
          <path
            key={d}
            d={d}
            fill="none"
            stroke="#fff"
            strokeWidth={9}
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>

      {/* Coverage rings, under the pins. */}
      {pins.map((pin) => {
        const k = PACK_CITIES.indexOf(pin.name);
        if (k < 0) return null;
        return (
          <span
            key={pin.name}
            className={`tw:absolute tw:z-1 tw:aspect-square tw:w-[36%] tw:-translate-1/2 tw:rounded-full tw:border-2 tw:border-(--blue)/35 tw:bg-(--blue)/10 tw:animate-[dm-amap-ring_9s_ease-out_infinite_both] ${k === 0 ? "" : "tw:opacity-0"}`}
            style={{ left: `${pin.x}%`, top: `${pin.y}%`, animationDelay: `${k * STEP}s` }}
          />
        );
      })}

      {pins.map((pin) => {
        const k = PACK_CITIES.indexOf(pin.name);
        return (
          <span
            key={pin.name}
            className={`tw:absolute tw:z-2 tw:inline-flex tw:-translate-1/2 tw:items-center tw:gap-1.5 tw:whitespace-nowrap tw:rounded-full tw:bg-white tw:py-[5px] tw:pr-3 tw:pl-1.5 tw:text-[12.5px] tw:font-medium tw:text-(--ink) tw:[box-shadow:0_8px_18px_-10px_rgba(12,21,38,0.45)] tw:max-bssm:py-[3px] tw:max-bssm:pr-2 tw:max-bssm:pl-1 tw:max-bssm:text-[10.5px] ${k >= 0 ? "tw:animate-[dm-amap-pin_9s_ease_infinite_both]" : ""}`}
            style={{
              left: `${pin.x}%`,
              top: `${pin.y}%`,
              animationDelay: k >= 0 ? `${k * STEP}s` : undefined,
            }}
          >
            <i className="tw:box-content tw:size-2.5 tw:rounded-full tw:border-[3px] tw:border-[#fde3df] tw:bg-(--red) tw:max-bssm:size-[7px] tw:max-bssm:border-2" />
            {pin.name}
          </span>
        );
      })}

      {/* Map Pack card: sits in the empty west-central part of the map, clear
          of every pin. One card per city, stacked and cross-faded. */}
      <div className="tw:absolute tw:top-[23%] tw:left-[4%] tw:z-3 tw:grid tw:w-[min(240px,48%)] tw:max-bssm:top-[26%] tw:max-bssm:w-1/2">
        {PACK_CITIES.map((city, k) => (
          <div
            key={city}
            className={`tw:col-start-1 tw:row-start-1 tw:grid tw:gap-2 tw:rounded-2xl tw:border tw:border-(--line) tw:bg-white tw:p-3 tw:text-left tw:[box-shadow:var(--lift)] tw:animate-[dm-amap-card_9s_ease_infinite_both] tw:max-bssm:gap-1.5 tw:max-bssm:p-2.5 ${k === 0 ? "" : "tw:opacity-0"}`}
            style={{ animationDelay: `${k * STEP}s` }}
          >
            {/* Phones: header and call button hidden so the card stays clear
                of the Fort Worth pin; the chip still names the city. */}
            <span className="tw:flex tw:items-center tw:gap-1.5 tw:truncate tw:text-[11px] tw:font-medium tw:text-(--muted) tw:max-bssm:hidden">
              <SiGooglemaps className="tw:size-3 tw:flex-none tw:text-(--green)" />
              Map Pack · {city}, TX
            </span>
            <span className="tw:grid tw:grid-cols-[22px_minmax(0,1fr)_auto] tw:items-center tw:gap-2 tw:rounded-xl tw:bg-(--blue-soft) tw:p-2">
              <b className="tw:grid tw:size-[22px] tw:place-items-center tw:rounded-full tw:bg-(--blue) tw:text-[11px] tw:font-semibold tw:text-white">
                1
              </b>
              <span className="tw:grid tw:gap-0.5">
                <b className="tw:truncate tw:text-[13.5px] tw:font-medium tw:leading-tight tw:max-bssm:text-[12px]">
                  Your business
                </b>
                <span className="tw:flex tw:items-center tw:gap-px tw:text-[11px] tw:leading-none tw:text-(--muted)">
                  <span className="tw:mr-1">5.0</span>
                  {[0, 1, 2, 3, 4].map((n) => (
                    <FiStar key={n} className="tw:size-2.5 tw:fill-(--gold) tw:text-(--gold)" />
                  ))}
                </span>
              </span>
              <span className="tw:grid tw:size-7 tw:place-items-center tw:rounded-full tw:bg-(--blue) tw:text-white tw:max-bssm:hidden">
                <FiPhone className="tw:size-3.5" />
              </span>
            </span>
            {/* One runner-up row keeps the card short enough to clear the
                Fort Worth pin; hidden on phones. */}
            <span className="tw:grid tw:grid-cols-[22px_minmax(0,1fr)] tw:items-center tw:gap-2 tw:px-2 tw:max-bssm:hidden">
              <b className="tw:grid tw:size-[22px] tw:place-items-center tw:rounded-full tw:bg-(--panel) tw:text-[11px] tw:font-semibold tw:text-(--muted)">
                2
              </b>
              <i className="tw:block tw:h-1.5 tw:w-4/5 tw:rounded-full tw:bg-[#e2e8f0]" />
            </span>
            <span className="tw:inline-flex tw:items-center tw:gap-1.5 tw:justify-self-start tw:rounded-full tw:bg-(--green-soft) tw:px-2.5 tw:py-1 tw:text-[11.5px] tw:font-semibold tw:whitespace-nowrap tw:text-[#1f7a3a] tw:max-bssm:text-[10.5px]">
              <FiTrendingUp className="tw:size-3" /> Top 3 in {city}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
