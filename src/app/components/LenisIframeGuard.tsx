"use client";

import { type ReactNode, useEffect, useRef } from "react";
import useLenisPointerGuard from "@/app/hooks/useLenisPointerGuard";

type LenisIframeGuardProps = {
  className?: string;
  children?: ReactNode;
  widgetScriptSrc?: string;
};

// Third-party review widgets (Trustindex) inject their own JSON-LD
// Review / AggregateRating markup for the business. Google treats
// self-serving review markup on a business's own site as invalid
// (Search Console showed 11 "review snippet" items on service pages,
// Sept 2026) so we drop those nodes the moment the widget adds them.
// The visible reviews are untouched; only the hidden schema is removed.
const REVIEW_SCHEMA_RE = /"@type"\s*:\s*"(?:Review|AggregateRating)"/;

const stripInjectedReviewSchema = (root: ParentNode) => {
  root
    .querySelectorAll<HTMLScriptElement>('script[type="application/ld+json"]')
    .forEach((node) => {
      if (REVIEW_SCHEMA_RE.test(node.textContent ?? "")) node.remove();
    });
};

export default function LenisIframeGuard({
  className = "",
  children,
  widgetScriptSrc,
}: LenisIframeGuardProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useLenisPointerGuard(wrapperRef);

  useEffect(() => {
    if (!widgetScriptSrc || !wrapperRef.current) {
      return;
    }

    const script = document.createElement("script");
    script.src = widgetScriptSrc;
    script.async = true;
    script.defer = true;

    wrapperRef.current.appendChild(script);

    // The widget writes its schema into <head> as an empty <script> whose
    // text is filled in afterwards, so watch for any DOM or text change and
    // rescan; the scan is a single querySelectorAll over a handful of nodes.
    const scan = () => stripInjectedReviewSchema(document);
    const observer = new MutationObserver(scan);
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      characterData: true,
    });
    scan();
    const timers = [1000, 3000, 8000, 15000].map((ms) => window.setTimeout(scan, ms));

    return () => {
      observer.disconnect();
      timers.forEach((t) => window.clearTimeout(t));
      script.remove();
    };
  }, [widgetScriptSrc]);

  const combinedClassName = ["lenis-iframe-guard", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={wrapperRef} className={combinedClassName}>
      {children}
      {/*
        Transparent overlay. While scrolling we flip THIS element's
        pointer-events (not the iframe's) so the cross-origin iframe never
        repaints — that repaint is what caused the flicker. When idle the
        overlay is pointer-transparent and the form stays fully interactive.
      */}
      <span className="lenis-iframe-guard__overlay" aria-hidden="true" />
    </div>
  );
}
