"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import "@/app/style/loader.css";

function Loader() {
  const pathname = usePathname();
  const [isLoaded, setIsLoaded] = useState(false);
  const [render, setRender] = useState(true);

  useEffect(() => {
    const handleWindowLoad = () => setIsLoaded(true);

    // 1. Reset everything when route changes
    setIsLoaded(false);
    setRender(true);

    // 2. Define the minimum time you want the loader to show (in milliseconds)
    // 1000ms = 1 second.
    const minLoadTime = 1000;

    // 3. Start the timer
    const timer = setTimeout(() => {
      // 4. AFTER 1 second, check if the browser is actually done
      if (document.readyState === "complete") {
        // If browser is done, hide loader immediately
        setIsLoaded(true);
      } else {
        // If browser is NOT done (slow page), wait for it to finish
        window.addEventListener("load", handleWindowLoad);
      }
    }, minLoadTime);

    // Cleanup to prevent memory leaks
    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", handleWindowLoad);
    };
  }, [pathname]);

  // Handle the fade-out animation
  useEffect(() => {
    if (isLoaded) {
      const unmountTimer = setTimeout(() => {
        setRender(false);
      }, 500); // Matches CSS transition duration
      return () => clearTimeout(unmountTimer);
    }
  }, [isLoaded]);

  if (!render) return null;

  return (
    <div className={`loader-wrapper ${isLoaded ? "loader-hidden" : ""}`}>
      <div className="loader"></div>
    </div>
  );
}

export default Loader;
