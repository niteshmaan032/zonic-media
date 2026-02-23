"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "@vnedyalk0v/react19-simple-maps";
import { Tooltip } from "react-tooltip";

type CountryData = { name: string; description: string };

export default function WorldMap() {
  const [tooltipContent, setTooltipContent] = useState("");
  const [geoUrl, setGeoUrl] = useState<string | null>(null);

  useEffect(() => {
    setGeoUrl(`${window.location.origin}/maps/countries-110m.json`);
  }, []);

  const highlightedCountries = useMemo<Record<string, CountryData>>(
    () => ({
      IND: { name: "India", description: "Head Office • Gurgaon" },
      USA: { name: "United States", description: "Paid Ads & SEO Clients" },
      GBR: { name: "United Kingdom", description: "SEO Projects" },
      ARE: { name: "UAE", description: "Lead Gen Campaigns" },
    }),
    [],
  );

  if (!geoUrl) return null;

  return (
    <div className="w-full max-w-6xl mx-auto">
      <ComposableMap
        projectionConfig={{ scale: 160 }}
        className="w-full h-auto"
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const iso3 = geo.properties?.iso_a3 as string | undefined;
              const info = iso3 ? highlightedCountries[iso3] : undefined;
              const isActive = Boolean(info);

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    setTooltipContent(
                      info ? `${info.name} — ${info.description}` : "",
                    );
                  }}
                  onMouseLeave={() => setTooltipContent("")}
                  data-tooltip-id="world-map-tooltip"
                  data-tooltip-content={tooltipContent}
                  style={{
                    default: {
                      fill: isActive ? "#2563eb" : "#e5e7eb",
                      outline: "none",
                    },
                    hover: {
                      fill: isActive ? "#1d4ed8" : "#cbd5e1",
                      outline: "none",
                      cursor: isActive ? "pointer" : "default",
                    },
                    pressed: { fill: "#1e40af", outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      <Tooltip
        id="world-map-tooltip"
        style={{
          backgroundColor: "#0f172a",
          color: "#fff",
          padding: "10px 14px",
          borderRadius: "10px",
          fontSize: "13px",
          maxWidth: "240px",
        }}
      />
    </div>
  );
}
