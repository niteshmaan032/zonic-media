"use client";

import { useEffect, useRef } from "react";
import useLenisPointerGuard from "@/app/hooks/useLenisPointerGuard";

declare global {
  interface Window {
    CLUTCHCO?: {
      Init?: () => void;
      init?: () => void;
    };
  }
}

type ClutchWidgetProps = {
  widgetType?: string;
  height?: string;
  primaryColor?: string;
  reviews?: string;
};

let clutchInitScheduled = false;

function scheduleClutchInit(): void {
  if (clutchInitScheduled || typeof window === "undefined") {
    return;
  }

  clutchInitScheduled = true;

  requestAnimationFrame(() => {
    clutchInitScheduled = false;

    if (window.CLUTCHCO?.Init) {
      window.CLUTCHCO.Init();
    } else if (window.CLUTCHCO?.init) {
      window.CLUTCHCO.init();
    }
  });
}

export default function ClutchWidget({
  widgetType = "14",
  height = "50",
  primaryColor,
  reviews,
}: ClutchWidgetProps) {
  const widgetRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);
  const minHeight = Number(height);
  const reservedHeight = Number.isFinite(minHeight) ? minHeight : undefined;

  useLenisPointerGuard(widgetRef);

  const isWidgetFilled = () => {
    const widget = widgetRef.current;

    if (!widget) return false;

    return (
      widget.dataset.clutchReady === "true" ||
      widget.childElementCount > 0 ||
      Boolean(widget.querySelector("iframe"))
    );
  };

  useEffect(() => {
    const widget = widgetRef.current;

    if (!widget || initializedRef.current) return;

    if (isWidgetFilled()) {
      initializedRef.current = true;
      widget.dataset.clutchReady = "true";
      return;
    }

    let cancelled = false;
    const observer = new MutationObserver(() => {
      if (!widgetRef.current || !isWidgetFilled()) {
        return;
      }

      initializedRef.current = true;
      widgetRef.current.dataset.clutchReady = "true";
      observer.disconnect();
    });

    observer.observe(widget, {
      childList: true,
      subtree: true,
    });

    const initTimer = window.setInterval(() => {
      if (cancelled) return;

      if (isWidgetFilled()) {
        initializedRef.current = true;
        widget.dataset.clutchReady = "true";
        window.clearInterval(initTimer);
        return;
      }

      if (window.CLUTCHCO?.Init || window.CLUTCHCO?.init) {
        scheduleClutchInit();
      }
    }, 100);

    return () => {
      cancelled = true;
      window.clearInterval(initTimer);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={widgetRef}
      className="clutch-widget clutch-wrapper"
      suppressHydrationWarning
      style={
        reservedHeight
          ? {
              height: reservedHeight,
              minHeight: reservedHeight,
            }
          : undefined
      }
      data-url="https://widget.clutch.co"
      data-widget-type={widgetType}
      data-height={height}
      data-nofollow="false"
      data-expandifr="false"
      data-scale="100"
      data-primary-color={primaryColor}
      data-reviews={reviews}
      data-clutchcompany-id="2617344"
    />
  );
}
