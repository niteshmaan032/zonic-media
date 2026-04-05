"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import "@/app/style/loader.css";

const FADE_PROPERTY = "opacity";
const LOADER_DURATION_MS = 1000;
const ADMIN_PATHS = new Set([
  "/admin-login",
  "/reset-password",
  "/admin-email-verification",
]);

function Loader() {
  const pathname = usePathname();
  const [isLoaded, setIsLoaded] = useState(false);
  const [render, setRender] = useState(false);
  const isFirstRenderRef = useRef(true);
  const previousPathnameRef = useRef(pathname);
  const showFrameRef = useRef<number | null>(null);
  const hideTimerRef = useRef<number | null>(null);

  useEffect(() => {
    if (isFirstRenderRef.current) {
      isFirstRenderRef.current = false;
      previousPathnameRef.current = pathname;
      return;
    }

    if (previousPathnameRef.current === pathname) {
      return;
    }

    previousPathnameRef.current = pathname;

    showFrameRef.current = window.requestAnimationFrame(() => {
      setRender(true);
      setIsLoaded(false);

      hideTimerRef.current = window.setTimeout(() => {
        setIsLoaded(true);
      }, LOADER_DURATION_MS);
    });

    return () => {
      if (showFrameRef.current !== null) {
        window.cancelAnimationFrame(showFrameRef.current);
        showFrameRef.current = null;
      }

      if (hideTimerRef.current !== null) {
        window.clearTimeout(hideTimerRef.current);
        hideTimerRef.current = null;
      }
    };
  }, [pathname]);

  useEffect(() => {
    return () => {
      if (showFrameRef.current !== null) {
        window.cancelAnimationFrame(showFrameRef.current);
      }

      if (hideTimerRef.current !== null) {
        window.clearTimeout(hideTimerRef.current);
      }
    };
  }, []);

  const handleTransitionEnd = (
    event: React.TransitionEvent<HTMLDivElement>,
  ) => {
    if (
      event.target !== event.currentTarget ||
      event.propertyName !== FADE_PROPERTY ||
      !isLoaded
    ) {
      return;
    }

    setRender(false);
  };

  if (!render) return null;

  const isAdminRoute =
    pathname.startsWith("/admindashboard") || ADMIN_PATHS.has(pathname);

  return (
    <div
      className={`loader-wrapper ${isLoaded ? "loader-hidden" : ""} ${
        isAdminRoute ? "loader-wrapper--admin" : ""
      }`.trim()}
      onTransitionEnd={handleTransitionEnd}
    >
      <div className="loader"></div>
    </div>
  );
}

export default Loader;
