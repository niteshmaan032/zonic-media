"use client";

import { type ReactNode, useRef } from "react";
import useLenisPointerGuard from "@/app/hooks/useLenisPointerGuard";

type LenisIframeGuardProps = {
  className?: string;
  children: ReactNode;
};

export default function LenisIframeGuard({
  className = "",
  children,
}: LenisIframeGuardProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useLenisPointerGuard(wrapperRef);

  const combinedClassName = ["lenis-iframe-guard", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={wrapperRef} className={combinedClassName}>
      {children}
    </div>
  );
}
