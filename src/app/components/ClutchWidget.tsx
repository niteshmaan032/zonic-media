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

import { useEffect, useRef, useState } from "react";

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
  rootMargin?: string;
};

let clutchScriptPromise: Promise<void> | null = null;

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

export default function ClutchWidget({
  widgetType = "14",
  height = "50",
  primaryColor,
  reviews,
  rootMargin = "300px 0px",
}: ClutchWidgetProps) {
  const widgetRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);
  const [shouldInit, setShouldInit] = useState(false);

  useEffect(() => {
    const widget = widgetRef.current;

    if (!widget) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldInit(true);
          observer.disconnect();
        }
      },
      {
        rootMargin,
        threshold: 0.01,
      },
    );

    observer.observe(widget);

    return () => {
      observer.disconnect();
    };
  }, [rootMargin]);

  useEffect(() => {
    if (!shouldInit || !widgetRef.current || initializedRef.current) return;

    const initWidget = () => {
      const widget = widgetRef.current;

      if (!widget || initializedRef.current) return;

      if (window.CLUTCHCO?.Init) {
        window.CLUTCHCO.Init();
      } else if (window.CLUTCHCO?.init) {
        window.CLUTCHCO.init();
      }

      initializedRef.current = true;
    };

    let cancelled = false;

    loadClutchScript()
      .then(() => {
        if (cancelled) return;

        requestAnimationFrame(() => {
          if (cancelled) return;
          initWidget();
        });
      })
      .catch(() => {
        initializedRef.current = false;
      });

    return () => {
      cancelled = true;
    };
  }, [shouldInit]);

  const minHeight = Number(height);

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
