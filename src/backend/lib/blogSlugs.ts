/**
 * Old addresses a post keeps after its slug changes in the admin. A post that
 * was public under `oldSlug` keeps it, so /blog/<oldSlug> 308s to the new
 * address instead of turning into a 404 (owner, 27 Nov 2026: no recurring
 * Search Console errors from new or edited posts). Taking an old slug back
 * removes it from the list. Kept free of imports so it can be tested alone.
 */
export function nextPreviousSlugs(
  previous: string[] | undefined,
  oldSlug: string,
  newSlug: string,
  wasPublic: boolean,
): string[] {
  const slugs = new Set(previous ?? []);
  if (wasPublic && oldSlug && oldSlug !== newSlug) slugs.add(oldSlug);
  slugs.delete(newSlug);
  return [...slugs];
}
