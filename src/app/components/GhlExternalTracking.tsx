"use client";

import { useEffect } from "react";
import {
  injectScriptOnce,
  runOnFirstInteractionOrAfter,
} from "@/shared/deferUntilInteraction";

const GHL_TRACKING_SRC = "https://forms.zonicllc.com/js/external-tracking.js";
const GHL_TRACKING_ID = "tk_f66384f994224b0091e870b5f6cf3e88";
const DELAY_AFTER_LOAD_MS = 5000;

/**
 * GoHighLevel external form tracking, site-wide. It only has to be present
 * before a visitor submits a lead form, so it loads on the first interaction
 * (or 5 s after load), instead of during page startup. Until Sept 2026 this
 * was a lazyOnload <Script> in the root layout; the script is 66 KB and
 * unminified, and it was the largest single "unused JavaScript" item in
 * PageSpeed on every page.
 */
export default function GhlExternalTracking() {
  useEffect(() => {
    return runOnFirstInteractionOrAfter(() => {
      injectScriptOnce("ghl-external-tracking", GHL_TRACKING_SRC, {
        "data-tracking-id": GHL_TRACKING_ID,
      });
    }, DELAY_AFTER_LOAD_MS);
  }, []);

  return null;
}
