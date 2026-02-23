"use client";

import { useEffect, useRef, useState } from "react";
import "../style/world-map.css";

type TooltipState = { visible: boolean; x: number; y: number; text: string };

const ACTIVE: Record<string, { name: string; tooltip: string }> = {
  IN: { name: "India", tooltip: "India" },
  CA: { name: "Canada", tooltip: "Canada" },
  AE: { name: "Dubai", tooltip: "Dubai, UAE " },
  AU: { name: "Australia", tooltip: "G’day Australia " },
  US: { name: "USA", tooltip: "Yup! we are working with United States " },

  // ✅ UK (most world SVGs use GB as the id; if yours uses UK, change GB -> UK everywhere)
  GB: { name: "UK", tooltip: "United Kingdom" },
};

// ✅ Desktop offsets (SVG units)
const LABEL_OFFSET_DESKTOP: Record<string, { dx: number; dy: number }> = {
  IN: { dx: 0, dy: 0 },
  CA: { dx: 0, dy: 0 },
  US: { dx: 50, dy: 50 },
  AE: { dx: 0, dy: -20 },
  AU: { dx: 0, dy: -20 },

  // ✅ UK
  GB: { dx: 0, dy: 0 },
};

// ✅ Mobile offsets (SVG units)
const LABEL_OFFSET_MOBILE: Record<string, { dx: number; dy: number }> = {
  IN: { dx: 0, dy: 0 },
  CA: { dx: 20, dy: 10 },
  US: { dx: 10, dy: 8 },
  AE: { dx: 0, dy: 0 },
  AU: { dx: 0, dy: 0 },

  // ✅ UK
  GB: { dx: 0, dy: 0 },
};

export default function WorldMapLabelsResponsiveOffsets() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const svgHostRef = useRef<HTMLDivElement | null>(null);

  const readyRef = useRef(false);

  const [svgMarkup, setSvgMarkup] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  const [tooltip, setTooltip] = useState<TooltipState>({
    visible: false,
    x: 0,
    y: 0,
    text: "",
  });

  // Load SVG
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const res = await fetch("/images/world.svg", { cache: "force-cache" });
      const text = await res.text();
      if (!cancelled) setSvgMarkup(text);
    })().catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  // Become ready right after first paint (prevents "auto-hover on load")
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      readyRef.current = true;
    });
    return () => cancelAnimationFrame(id);
  }, []);

  // Detect mobile via matchMedia
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const apply = () => setIsMobile(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const host = svgHostRef.current;
    const container = containerRef.current;
    if (!host || !container || !svgMarkup) return;

    const svgEl = host.querySelector("svg") as SVGSVGElement | null;
    if (!svgEl) return;

    // Remove previous labels
    svgEl
      .querySelectorAll('[data-fixed-label="true"]')
      .forEach((n) => n.remove());

    // Make everything base color
    const paintTargets = svgEl.querySelectorAll<SVGElement>(
      "path, polygon, polyline, circle, ellipse, rect",
    );
    paintTargets.forEach((el) => {
      el.setAttribute("fill", "var(--color1)");
      (el as any).style.fill = "var(--color1)";
    });

    // Active countries = primary
    Object.keys(ACTIVE).forEach((code) => {
      const el = svgEl.querySelector<SVGGraphicsElement>(
        `#${CSS.escape(code)}`,
      );
      if (!el) return;
      el.setAttribute("fill", "var(--primary)");
      (el as any).style.fill = "var(--primary)";
      (el as any).style.cursor = "pointer";
    });

    // Label factory (tooltip-style labels inside SVG)
    const ns = "http://www.w3.org/2000/svg";
    const createLabelAt = (text: string, x: number, y: number) => {
      const g = document.createElementNS(ns, "g");
      g.setAttribute("data-fixed-label", "true");
      g.style.pointerEvents = "none";

      const rect = document.createElementNS(ns, "rect");
      rect.setAttribute("class", "svgLabelBg");

      const t = document.createElementNS(ns, "text");
      t.setAttribute("class", "svgLabelText");
      t.textContent = text;
      t.setAttribute("x", String(x));
      t.setAttribute("y", String(y));
      t.setAttribute("text-anchor", "middle");
      t.setAttribute("dominant-baseline", "middle");

      g.appendChild(rect);
      g.appendChild(t);

      queueMicrotask(() => {
        try {
          const bb = t.getBBox();
          const padX = 8;
          const padY = 5;
          rect.setAttribute("x", String(bb.x - padX));
          rect.setAttribute("y", String(bb.y - padY));
          rect.setAttribute("width", String(bb.width + padX * 2));
          rect.setAttribute("height", String(bb.height + padY * 2));
          rect.setAttribute("rx", "8");
          rect.setAttribute("ry", "8");
        } catch {}
      });

      return g;
    };

    const offsets = isMobile ? LABEL_OFFSET_MOBILE : LABEL_OFFSET_DESKTOP;

    // Place labels inside countries (bbox center + responsive offsets)
    Object.entries(ACTIVE).forEach(([code, meta]) => {
      const countryEl = svgEl.querySelector<SVGGraphicsElement>(
        `#${CSS.escape(code)}`,
      );
      if (!countryEl) return;

      const bb = countryEl.getBBox();
      const cx = bb.x + bb.width / 2;
      const cy = bb.y + bb.height / 2;

      const off = offsets[code] ?? { dx: 0, dy: 0 };
      svgEl.appendChild(createLabelAt(meta.name, cx + off.dx, cy + off.dy));
    });

    // Hover tooltip (HTML)
    const setTooltipFromMouse = (evt: MouseEvent, text: string) => {
      setTooltip({
        visible: true,
        x: evt.clientX + 12,
        y: evt.clientY + 12,
        text,
      });
    };

    const cleanup: Array<() => void> = [];

    Object.entries(ACTIVE).forEach(([code, meta]) => {
      const el = svgEl.querySelector<SVGGraphicsElement>(
        `#${CSS.escape(code)}`,
      );
      if (!el) return;

      const onEnter = (evt: MouseEvent) => {
        if (!readyRef.current) return;

        (el as any).style.stroke = "rgba(255, 255, 255, 1)";
        (el as any).style.strokeWidth = "0.8";

        setTooltipFromMouse(evt, meta.tooltip);
      };

      const onMove = (evt: MouseEvent) => {
        if (!readyRef.current) return;
        setTooltipFromMouse(evt, meta.tooltip);
      };

      const onLeave = () => {
        (el as any).style.stroke = "";
        (el as any).style.strokeWidth = "";
        setTooltip((t) => ({ ...t, visible: false }));
      };

      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);

      cleanup.push(() => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mousemove", onMove);
        el.removeEventListener("mouseleave", onLeave);
      });
    });

    return () => cleanup.forEach((fn) => fn());
  }, [svgMarkup, isMobile]);

  return (
    <div ref={containerRef} className="mapContainer">
      <div className="map-content">
        <h2 className="map-heading">Countries we are working in</h2>
        <p className="map-descrp">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          veritatis reprehenderit iusto commodi aut recusandae dolorem.
        </p>
      </div>

      <div
        ref={svgHostRef}
        className="svgWrap"
        dangerouslySetInnerHTML={{ __html: svgMarkup }}
      />

      {/* Hover tooltip */}
      {tooltip.visible && (
        <div
          style={{
            position: "fixed",
            left: tooltip.x,
            top: tooltip.y,
            zIndex: 9999999,
            background: "rgba(0,0,0,0.85)",
            color: "white",
            padding: "8px 12px",
            borderRadius: 8,
            fontSize: 16,
            pointerEvents: "none",
            boxShadow: "0 6px 18px rgba(0,0,0,0.20)",
            border: "1px solid rgba(255,255,255,0.12)",
            backdropFilter: "blur(6px)",
            transform: "translateZ(0)",
          }}
        >
          {tooltip.text}
        </div>
      )}
    </div>
  );
}
