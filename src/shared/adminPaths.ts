/**
 * Routes that belong to the site owner, not to visitors. Marketing scripts
 * (GA4/GTM, Google Ads tag, OpenAI pixel, GoHighLevel form tracking) must not
 * run here: in September 2026, 356 of the month's "Organic Search" sessions in
 * GA4 were the owner reaching the admin by searching for it, which distorted
 * every traffic and conversion report.
 */
const ADMIN_EXACT_PATHS = new Set([
  "/admin-login",
  "/reset-password",
  "/admin-email-verification",
]);

export function isAdminPath(pathname: string | null | undefined): boolean {
  if (!pathname) return false;
  return (
    pathname === "/admindashboard" ||
    pathname.startsWith("/admindashboard/") ||
    ADMIN_EXACT_PATHS.has(pathname)
  );
}
