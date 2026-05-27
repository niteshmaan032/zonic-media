"use client";

import { type ReactNode, useEffect, useRef } from "react";
import useLenisPointerGuard from "@/app/hooks/useLenisPointerGuard";

type LenisIframeGuardProps = {
  className?: string;
  children?: ReactNode;
  widgetScriptSrc?: string;
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

    return () => {
      script.remove();
    };
  }, [widgetScriptSrc]);

  const combinedClassName = ["lenis-iframe-guard", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={wrapperRef} className={combinedClassName}>
      {children}
    </div>
  );
}
