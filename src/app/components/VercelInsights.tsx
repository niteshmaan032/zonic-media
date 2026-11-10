"use client";

import { usePathname } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { isAdminPath } from "@/shared/adminPaths";

/** Vercel Web Analytics + Speed Insights, visitor pages only. Until 10 Nov
 *  2026 both were rendered for every route and recorded /admin-login and
 *  the dashboard. Owner-only routes (shared/adminPaths.ts) don't load them,
 *  and beforeSend drops anything sent after a client-side move into admin. */
const isAdminUrl = (url: string) => {
  try {
    return isAdminPath(new URL(url).pathname);
  } catch {
    return false;
  }
};

export default function VercelInsights() {
  const pathname = usePathname();
  if (isAdminPath(pathname)) return null;

  return (
    <>
      <SpeedInsights
        beforeSend={(event) => (isAdminUrl(event.url) ? null : event)}
      />
      <Analytics
        beforeSend={(event) => (isAdminUrl(event.url) ? null : event)}
      />
    </>
  );
}
