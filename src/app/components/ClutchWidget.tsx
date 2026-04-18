// "use client";

// import { useEffect, useRef, useState } from "react";

// declare global {
//   interface Window {
//     CLUTCHCO?: {
//       Init?: () => void;
//       init?: () => void;
//     };
//   }
// }

// export default function ClutchWidget() {
//   const widgetRef = useRef<HTMLDivElement>(null);
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   useEffect(() => {
//     if (!mounted || !widgetRef.current) return;

//     const initWidget = () => {
//       if (!widgetRef.current) return;

//       widgetRef.current.innerHTML = "";

//       if (window.CLUTCHCO?.Init) {
//         window.CLUTCHCO.Init();
//       } else if (window.CLUTCHCO?.init) {
//         window.CLUTCHCO.init();
//       }
//     };

//     const existingScript = document.querySelector(
//       'script[src="https://widget.clutch.co/static/js/widget.js"]',
//     ) as HTMLScriptElement | null;

//     if (existingScript) {
//       initWidget();
//       return;
//     }

//     const script = document.createElement("script");
//     script.src = "https://widget.clutch.co/static/js/widget.js";
//     script.async = true;
//     script.onload = initWidget;
//     document.body.appendChild(script);

//     return () => {
//       if (widgetRef.current) {
//         widgetRef.current.innerHTML = "";
//       }
//     };
//   }, [mounted]);

//   if (!mounted) return null;

//   return (
//     <div
//       ref={widgetRef}
//       className="clutch-widget"
//       data-url="https://widget.clutch.co"
//       data-widget-type="14"
//       data-height="50"
//       data-nofollow="false"
//       data-expandifr="true"
//       data-scale="100"
//       data-clutchcompany-id="2617344"
//     />
//   );
// }

"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

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

let clutchScriptPromise: Promise<void> | null = null;
let clutchInitScheduled = false;

function loadClutchScript(): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }

  if (window.CLUTCHCO?.Init || window.CLUTCHCO?.init) {
    return Promise.resolve();
  }

  if (clutchScriptPromise) {
    return clutchScriptPromise;
  }

  clutchScriptPromise = new Promise((resolve, reject) => {
    const existingScript = document.querySelector(
      'script[src="https://widget.clutch.co/static/js/widget.js"]',
    ) as HTMLScriptElement | null;

    const handleLoad = () => resolve();
    const handleError = () => {
      clutchScriptPromise = null;
      reject(new Error("Failed to load Clutch widget script."));
    };

    if (existingScript) {
      existingScript.addEventListener("load", handleLoad, { once: true });
      existingScript.addEventListener("error", handleError, { once: true });

      if (window.CLUTCHCO?.Init || window.CLUTCHCO?.init) {
        resolve();
      }

      return;
    }

    const script = document.createElement("script");
    script.src = "https://widget.clutch.co/static/js/widget.js";
    script.async = true;
    script.addEventListener("load", handleLoad, { once: true });
    script.addEventListener("error", handleError, { once: true });
    document.body.appendChild(script);
  });

  return clutchScriptPromise;
}

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
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

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

    if (!mounted || !widget || initializedRef.current) return;

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

    loadClutchScript()
      .then(() => {
        if (cancelled) return;

        if (isWidgetFilled()) {
          initializedRef.current = true;
          widget.dataset.clutchReady = "true";
          return;
        }

        scheduleClutchInit();
      })
      .catch(() => {
        initializedRef.current = false;
      });

    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [mounted]);

  const minHeight = Number(height);

  if (!mounted) {
    return (
      <div
        className="clutch-widget"
        style={Number.isFinite(minHeight) ? { minHeight } : undefined}
        suppressHydrationWarning
      />
    );
  }

  return (
    <div
      ref={widgetRef}
      className="clutch-widget"
      style={Number.isFinite(minHeight) ? { minHeight } : undefined}
      data-url="https://widget.clutch.co"
      data-widget-type={widgetType}
      data-height={height}
      data-nofollow="false"
      data-expandifr="true"
      data-scale="100"
      data-primary-color={primaryColor}
      data-reviews={reviews}
      data-clutchcompany-id="2617344"
    />
  );
}
