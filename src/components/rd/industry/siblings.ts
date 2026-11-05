/* Sibling location pages per niche (25 Oct 2026). The live state pages
   link every other state; LocationTemplate renders this list as an
   "other states" link row so each draft keeps those internal links
   without stuffing them into the copy. Links point at the LIVE URLs. */

type Place = [slug: string, name: string];

const HOME_INSPECTOR: Place[] = [
  ["alabama", "Alabama"],
  ["arizona", "Arizona"],
  ["arkansas", "Arkansas"],
  ["california", "California"],
  ["colorado", "Colorado"],
  ["connecticut", "Connecticut"],
  ["delaware", "Delaware"],
  ["florida", "Florida"],
  ["georgia", "Georgia"],
  ["idaho", "Idaho"],
  ["illinois", "Illinois"],
  ["indiana", "Indiana"],
  ["iowa", "Iowa"],
  ["kansas", "Kansas"],
  ["kentucky", "Kentucky"],
  ["louisiana", "Louisiana"],
  ["maine", "Maine"],
  ["maryland", "Maryland"],
  ["massachusetts", "Massachusetts"],
  ["michigan", "Michigan"],
  ["minnesota", "Minnesota"],
  ["mississippi", "Mississippi"],
  ["missouri", "Missouri"],
  ["nebraska", "Nebraska"],
  ["nevada", "Nevada"],
  ["new-hampshire", "New Hampshire"],
  ["new-jersey", "New Jersey"],
  ["new-mexico", "New Mexico"],
  ["new-york", "New York"],
  ["north-carolina", "North Carolina"],
  ["ohio", "Ohio"],
  ["oklahoma", "Oklahoma"],
  ["oregon", "Oregon"],
  ["pennsylvania", "Pennsylvania"],
  ["south-carolina", "South Carolina"],
  ["tennessee", "Tennessee"],
  ["texas", "Texas"],
  ["utah", "Utah"],
  ["virginia", "Virginia"],
  ["washington", "Washington"],
  ["wisconsin", "Wisconsin"],
];

const SEVEN_STATES: Place[] = [
  ["arizona", "Arizona"],
  ["california", "California"],
  ["florida", "Florida"],
  ["georgia", "Georgia"],
  ["illinois", "Illinois"],
  ["north-carolina", "North Carolina"],
  ["texas", "Texas"],
];

export const SIBLINGS: Record<string, Place[]> = {
  "/services/home-inspector-marketing": HOME_INSPECTOR,
  "/services/plumbing-marketing-agency": SEVEN_STATES,
  "/services/hvac-marketing-agency": SEVEN_STATES,
};

/** Live sibling location links for a location page (excluding itself). */
export function siblingLinks(parentHref: string, liveUrl: string) {
  return (SIBLINGS[parentHref] ?? [])
    .map(([slug, name]) => ({ href: `${parentHref}/${slug}`, name }))
    .filter((l) => l.href !== liveUrl);
}
