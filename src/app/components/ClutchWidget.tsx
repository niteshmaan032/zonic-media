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

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    CLUTCHCO?: {
      Init?: () => void;
      init?: () => void;
    };
  }
}

export default function ClutchWidget() {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!widgetRef.current) return;

    const initWidget = () => {
      if (!widgetRef.current) return;
      widgetRef.current.innerHTML = "";

      if (window.CLUTCHCO?.Init) {
        window.CLUTCHCO.Init();
      } else if (window.CLUTCHCO?.init) {
        window.CLUTCHCO.init();
      }
    };

    const existingScript = document.querySelector(
      'script[src="https://widget.clutch.co/static/js/widget.js"]',
    ) as HTMLScriptElement | null;

    if (existingScript) {
      initWidget();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://widget.clutch.co/static/js/widget.js";
    script.async = true;
    script.onload = initWidget;
    document.body.appendChild(script);

    return () => {
      if (widgetRef.current) {
        widgetRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div
      ref={widgetRef}
      className="clutch-widget"
      data-url="https://widget.clutch.co"
      data-widget-type="14"
      data-height="50"
      data-nofollow="false"
      data-expandifr="true"
      data-scale="100"
      data-clutchcompany-id="2617344"
    />
  );
}
